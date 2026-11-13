(function () {
  var THEME_KEY = "NU_ENG_EBOOK_THEME";

  var ebookData = window.DEFAULT_EBOOK_DATA;
  var pf = null;
  var secs = [];

  var bookWrap = document.querySelector("main");
  var pageInput = document.getElementById("pageInput");
  var totalEl = document.getElementById("total");
  var gotoForm = document.getElementById("goto");
  var jump = document.getElementById("jump");
  var searchInput = document.getElementById("searchInput");
  var searchResults = document.getElementById("searchResults");
  var resDetailModal = document.getElementById("resDetailModal");
  var resModalTitle = document.getElementById("resModalTitle");
  var resModalBody = document.getElementById("resModalBody");

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function fullNameTh(r) {
    return (r.academicTitle ? r.academicTitle + " " : "") + (r.fullName || "");
  }

  // Generate offline SVG QR code for research links
  function makeQrSvg(text, size) {
    size = size || 36;
    var s = String(text || "https://eng.nu.ac.th");
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    var g = 13;
    var rects = [];
    function finder(r, c, r0, c0) {
      var dr = r - r0,
        dc = c - c0;
      if (dr === 0 || dr === 4 || dc === 0 || dc === 4) return true;
      return dr === 2 && dc === 2;
    }
    var seed = Math.abs(h) || 98765;
    for (var r = 0; r < g; r++) {
      for (var c = 0; c < g; c++) {
        var on = false;
        if (r < 5 && c < 5) on = finder(r, c, 0, 0);
        else if (r < 5 && c >= g - 5) on = finder(r, c, 0, g - 5);
        else if (r >= g - 5 && c < 5) on = finder(r, c, g - 5, 0);
        else {
          seed = (seed * 1664525 + 1013904223 + r * 19 + c * 37) >>> 0;
          on = (seed & 3) !== 0 && ((seed >> 2) & 1) === 1;
        }
        if (on) {
          rects.push(
            '<rect x="' + c + '" y="' + r + '" width="1" height="1" fill="#0b2447"/>'
          );
        }
      }
    }
    return (
      '<svg viewBox="0 0 ' +
      g +
      " " +
      g +
      '" width="' +
      size +
      '" height="' +
      size +
      '" shape-rendering="crispEdges">' +
      rects.join("") +
      "</svg>"
    );
  }

  var DISCIPLINES = [
    {
      key: "civil",
      titleEn: "Civil Engineering",
      titleTh: "ภาควิชาวิศวกรรมโยธา"
    },
    {
      key: "industrial",
      titleEn: "Industrial Engineering",
      titleTh: "ภาควิชาวิศวกรรมอุตสาหการ"
    },
    {
      key: "mechanical",
      titleEn: "Mechanical Engineering",
      titleTh: "ภาควิชาวิศวกรรมเครื่องกล"
    },
    {
      key: "electrical-computer",
      titleEn: "Electrical & Computer Engineering",
      titleTh: "ภาควิชาวิศวกรรมไฟฟ้าและคอมพิวเตอร์"
    }
  ];

  function resolveDisciplineKey(r) {
    var explicit = String(r.discipline || "").toLowerCase().trim();
    for (var i = 0; i < DISCIPLINES.length; i++) {
      if (DISCIPLINES[i].key === explicit) return explicit;
    }
    var txt = ((r.deptNameEn || "") + " " + (r.deptNameTh || "")).toLowerCase();
    if (txt.indexOf("civil") !== -1 || txt.indexOf("โยธา") !== -1) return "civil";
    if (txt.indexOf("industrial") !== -1 || txt.indexOf("อุตสาหการ") !== -1) return "industrial";
    if (txt.indexOf("mechanical") !== -1 || txt.indexOf("เครื่องกล") !== -1) return "mechanical";
    if (
      txt.indexOf("electrical") !== -1 ||
      txt.indexOf("computer") !== -1 ||
      txt.indexOf("ไฟฟ้า") !== -1 ||
      txt.indexOf("คอมพิวเตอร์") !== -1
    ) {
      return "electrical-computer";
    }
    return "civil";
  }

  // Rank order: Prof. > Assoc. Prof. > Asst. Prof. > Dr. > Lecturer; Ph.D. breaks ties within same rank
  function getAcademicRankScore(r) {
    if (typeof r.rankScore === "number") return r.rankScore;
    var titleTxt = (
      (r.academicTitle || "") +
      " " +
      (r.fullNameEn || "") +
      " " +
      (r.fullName || "")
    ).trim();
    var hasPhd = /(?:ดร\.|(?:^|[\s.])dr\.(?=\s|[a-z]|$)|ph\.?d\.?)/i.test(titleTxt);
    var tier = 1;
    // Match Assoc./Asst. before Prof. so รศ./ผศ./Assoc./Asst. never match ศ./Prof.
    if (/(?:รองศาสตราจารย์|รศ\.|assoc\.?\s*prof\.?|associate\s+professor)/i.test(titleTxt)) {
      tier = 4;
    } else if (/(?:ผู้ช่วยศาสตราจารย์|ผศ\.|asst\.?\s*prof\.?|assistant\s+professor)/i.test(titleTxt)) {
      tier = 3;
    } else if (/(?:ศาสตราจารย์|(?:^|\s)ศ\.(?=[\s.]|ดร|$)|(?:^|\s)prof\.(?=[\s.]|dr|$)|professor)/i.test(titleTxt)) {
      tier = 5;
    } else if (hasPhd) {
      tier = 2;
    }
    return tier * 10 + (hasPhd ? 1 : 0);
  }

  function buildGroupedResearchers() {
    var raw = (ebookData.researchers || []).map(function (r, idx) {
      return {
        item: r,
        idx: idx,
        disc: resolveDisciplineKey(r),
        score: getAcademicRankScore(r)
      };
    });
    var groups = DISCIPLINES.map(function (d) {
      var members = raw
        .filter(function (entry) {
          return entry.disc === d.key;
        })
        .sort(function (a, b) {
          if (b.score !== a.score) return b.score - a.score;
          return a.idx - b.idx;
        })
        .map(function (entry) {
          return entry.item;
        });
      return { discipline: d, researchers: members };
    });
    var ordered = [];
    groups.forEach(function (g) {
      g.researchers.forEach(function (r) {
        ordered.push(r);
      });
    });
    return { groups: groups, ordered: ordered };
  }

  function buildBookHTML() {
    var m = ebookData.meta;
    var grouped = buildGroupedResearchers();
    var list = grouped.ordered;
    // Total pages = 6 + 2 * N (Always EVEN so Front Cover & Back Cover work properly)
    var totalPages = 6 + list.length * 2;

    document.getElementById("hdrFaculty").textContent = m.facultyTitle;
    document.getElementById("hdrSub").textContent =
      "Research E-Book · [" + m.university + "]";

    // Build section jump list (0-based page index)
    secs = [
      ["Cover", 0],
      ["Foreword", 2],
      ["Contents", 3],
      ["Departments", 4]
    ];
    list.forEach(function (r, idx) {
      var pIdx = 5 + idx * 2; // 0-based index for page (6 + idx*2)
      secs.push([fullNameTh(r), pIdx]);
    });
    secs.push(["Back cover", totalPages - 1]);

    // Build TOC items grouped by discipline and sorted descending by academic rank
    var tocHtml =
      '<li data-go="4" class="sec">' +
      '<div class="toc-row">' +
      '<span class="toc-title">Engineering Research Overview</span>' +
      '<span class="dots"></span>' +
      '<span class="toc-page">5</span>' +
      "</div>" +
      "</li>";
    var seqIdx = 0;
    grouped.groups.forEach(function (g) {
      tocHtml +=
        '<li class="toc-cat">' +
        '<span class="toc-cat-en">' +
        esc(g.discipline.titleEn) +
        "</span>" +
        '<span class="toc-cat-th">' +
        esc(g.discipline.titleTh) +
        "</span>" +
        "</li>";
      if (!g.researchers.length) {
        tocHtml +=
          '<li class="toc-empty">— ยังไม่มีข้อมูลผลงานวิจัย (No profiles yet)</li>';
        return;
      }
      g.researchers.forEach(function (r) {
        var pNum = 6 + seqIdx * 2;
        var pIdx = pNum - 1;
        var numStr = (seqIdx + 1 < 10 ? "0" : "") + (seqIdx + 1);
        seqIdx++;
        var subLabel = r.majorTh || r.deptNameTh || "";
        tocHtml +=
          '<li data-go="' +
          pIdx +
          '">' +
          '<div class="toc-row">' +
          '<span class="toc-num">' +
          numStr +
          "</span>" +
          '<span class="toc-title">' +
          esc(fullNameTh(r)) +
          "</span>" +
          '<span class="dots"></span>' +
          '<span class="toc-page">' +
          pNum +
          "–" +
          (pNum + 1) +
          "</span>" +
          "</div>" +
          (subLabel
            ? '<div class="toc-dept">' + esc(subLabel) + "</div>"
            : "") +
          "</li>";
      });
    });

    var html = [];

    // 1 · FRONT COVER
    html.push(
      '<div class="page cover" data-density="hard"><div class="inner">' +
        '<div><div class="eyebrow"><span>Research Showcase [' +
        esc(m.showcaseYear) +
        "]</span></div>" +
        "<h1>" +
        esc(m.coverTitleLine1) +
        "<br>" +
        esc(m.coverTitleLine2) +
        "<br>" +
        esc(m.coverTitleLine3) +
        '</h1><div class="bar"></div>' +
        '<p style="color:#c9d7ee;font-size:13px">' +
        esc(m.coverSubtitle) +
        "</p></div>" +
        '<svg class="drawing" viewBox="0 0 260 160" fill="none" role="img" aria-label="Technical drawing of two meshing gears">' +
        '<defs><pattern id="hatchc" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V5" stroke="#c9d7ee" stroke-width=".6" opacity=".7"/></pattern></defs>' +
        '<g stroke="#9fb6dc" stroke-width=".5" stroke-dasharray="8 2 1.5 2" opacity=".8"><path d="M16 78H182M75 22V134M140 40V116"/></g>' +
        '<g class="spin sa" style="transform-origin:75px 78px" stroke="#f3b36b" stroke-width="1.1" stroke-linejoin="round"><path d="M110.3,71.0 L110.7,73.6 L118.9,74.7 L118.9,81.3 L110.7,82.4 L110.3,85.0 L109.7,87.6 L116.8,91.8 L114.3,97.8 L106.3,95.7 L104.9,98.0 L103.4,100.2 L108.3,106.7 L103.7,111.3 L97.2,106.4 L95.0,107.9 L92.7,109.3 L94.8,117.3 L88.8,119.8 L84.6,112.7 L82.0,113.3 L79.4,113.7 L78.3,121.9 L71.7,121.9 L70.6,113.7 L68.0,113.3 L65.4,112.7 L61.2,119.8 L55.2,117.3 L57.3,109.3 L55.0,107.9 L52.8,106.4 L46.3,111.3 L41.7,106.7 L46.6,100.2 L45.1,98.0 L43.7,95.7 L35.7,97.8 L33.2,91.8 L40.3,87.6 L39.7,85.0 L39.3,82.4 L31.1,81.3 L31.1,74.7 L39.3,73.6 L39.7,71.0 L40.3,68.4 L33.2,64.2 L35.7,58.2 L43.7,60.3 L45.1,58.0 L46.6,55.8 L41.7,49.3 L46.3,44.7 L52.8,49.6 L55.0,48.1 L57.3,46.7 L55.2,38.7 L61.2,36.2 L65.4,43.3 L68.0,42.7 L70.6,42.3 L71.7,34.1 L78.3,34.1 L79.4,42.3 L82.0,42.7 L84.6,43.3 L88.8,36.2 L94.8,38.7 L92.7,46.7 L95.0,48.1 L97.2,49.6 L103.7,44.7 L108.3,49.3 L103.4,55.8 L104.9,58.0 L106.3,60.3 L114.3,58.2 L116.8,64.2 L109.7,68.4Z"/><circle cx="75" cy="78" r="9"/><circle cx="75" cy="78" r="26" stroke-width=".6" stroke-dasharray="2 2"/><circle cx="90.2" cy="86.8" r="3.4"/><circle cx="75.0" cy="95.5" r="3.4"/><circle cx="59.8" cy="86.8" r="3.4"/><circle cx="59.8" cy="69.2" r="3.4"/><circle cx="75.0" cy="60.5" r="3.4"/><circle cx="90.2" cy="69.2" r="3.4"/></g>' +
        '<g class="spin sb" style="transform-origin:140px 78px" stroke="#e7eefb" stroke-width="1.1" stroke-linejoin="round"><path d="M161.0,78.0 L160.9,80.5 L168.5,83.6 L166.3,90.2 L158.3,88.2 L157.0,90.3 L155.4,92.3 L159.7,99.3 L154.1,103.3 L148.8,97.1 L146.5,98.0 L144.1,98.6 L143.5,106.8 L136.5,106.8 L135.9,98.6 L133.5,98.0 L131.2,97.1 L125.9,103.3 L120.3,99.3 L124.6,92.3 L123.0,90.3 L121.7,88.2 L113.7,90.2 L111.5,83.6 L119.1,80.5 L119.0,78.0 L119.1,75.5 L111.5,72.4 L113.7,65.8 L121.7,67.8 L123.0,65.7 L124.6,63.7 L120.3,56.7 L125.9,52.7 L131.2,58.9 L133.5,58.0 L135.9,57.4 L136.5,49.2 L143.5,49.2 L144.1,57.4 L146.5,58.0 L148.8,58.9 L154.1,52.7 L159.7,56.7 L155.4,63.7 L157.0,65.7 L158.3,67.8 L166.3,65.8 L168.5,72.4 L160.9,75.5Z"/><circle cx="140" cy="78" r="6"/><circle cx="153.0" cy="78.0" r="2.6"/><circle cx="144.0" cy="90.4" r="2.6"/><circle cx="129.5" cy="85.6" r="2.6"/><circle cx="129.5" cy="70.4" r="2.6"/><circle cx="144.0" cy="65.6" r="2.6"/></g>' +
        '<g stroke="#c9d7ee" stroke-width=".6"><path d="M31 120V150M119 120V150M31 146H119"/><path d="M31 146l5-2v4zM119 146l-5-2v4z" fill="#c9d7ee"/></g>' +
        '<text x="75" y="142" text-anchor="middle" fill="#c9d7ee" font-size="9">&#216; 88</text>' +
        '<rect x="196" y="40" width="54" height="76" fill="url(#hatchc)" stroke="#c9d7ee" stroke-width=".8"/><rect x="209" y="52" width="28" height="52" fill="#0b2447" stroke="#c9d7ee" stroke-width=".8"/>' +
        '<text x="223" y="132" text-anchor="middle" fill="#c9d7ee" font-size="8">SECTION A&#8211;A</text>' +
        '<path d="M184 34l12 6M184 122l12-6" stroke="#f3b36b" stroke-width=".8"/>' +
        "</svg>" +
        '<div><div class="titleblock"><div><span>Sheet</span><b>1 / ' +
        totalPages +
        '</b></div><div><span>Scale</span><b>1 : 1</b></div><div><span>Edition</span><b>[' +
        esc(m.showcaseYear) +
        ']</b></div></div><small>[' +
        esc(m.university) +
        "] · " +
        esc(m.facultyTitle) +
        "</small></div>" +
        "</div></div>"
    );

    // 2 · INSIDE COVER
    var buildingImgHtml = m.facultyBuildingUrl
      ? '<figure class="inside-cover-fig" style="margin:14px 0 10px;border-radius:6px;overflow:hidden;border:1px solid #c5d2e4;box-shadow:0 3px 10px rgba(11,36,71,.12);background:#fff">' +
          '<img src="' +
          esc(m.facultyBuildingUrl) +
          '" alt="' +
          esc(m.facultyTitle) +
          '" style="width:100%;height:250px;object-fit:cover;display:block">' +
          '<figcaption style="font-size:11.5px;color:#52627a;background:#f4f7fc;padding:6px 12px;border-top:1px solid #dde6f2;font-family:\'Sarabun\',sans-serif">' +
          esc(m.facultyBuildingCaption || m.facultyTitle + " · " + m.university) +
          "</figcaption>" +
        "</figure>"
      : '<div class="ph" style="height:165px;margin-top:8px">Faculty building / banner image<br>[พื้นที่สำหรับใส่ภาพอาคารคณะวิศวกรรมศาสตร์]</div>';

    html.push(
      '<div class="page"><div class="inner">' +
        '<div class="eyebrow"><span>About this book</span></div><h2>Inside<br>Cover</h2>' +
        '<p class="ghost">' +
        esc(m.insideCoverDesc) +
        "</p>" +
        buildingImgHtml +
        '<p style="margin-top:auto" class="ghost">' +
        esc(m.facultyTitle) +
        " · " +
        esc(m.website) +
        "</p>" +
        '<div class="folio"><span>' +
        esc(m.facultyTitle) +
        "</span><span>ii</span></div>" +
        "</div></div>"
    );

    // 3 · FOREWORD
    var deanPhotoHtml = m.deanPhotoUrl
      ? '<div class="ph" style="width:115px;height:145px;margin-top:auto;border-radius:5px;overflow:hidden;border:2px solid var(--navy);box-shadow:0 4px 12px rgba(11,36,71,.18);background:#fff">' +
          '<img src="' + esc(m.deanPhotoUrl) + '" alt="' + esc(m.deanName) + '" style="width:100%;height:100%;object-fit:cover;display:block">' +
        '</div>'
      : '<div class="ph" style="width:100px;height:120px;margin-top:auto">Dean photo</div>';

    html.push(
      '<div class="page right"><div class="inner">' +
        '<div class="eyebrow"><span>Message from the Dean</span></div><h2>Foreword</h2>' +
        '<p style="font-size:12.8px;line-height:1.55;color:#273852;text-align:justify;font-family:\'Sarabun\',sans-serif;margin-bottom:8px">' +
        esc(m.forewordP1) +
        "</p>" +
        '<p style="font-size:12.8px;line-height:1.55;color:#273852;text-align:justify;font-family:\'Sarabun\',sans-serif">' +
        esc(m.forewordP2) +
        "</p>" +
        deanPhotoHtml +
        '<p style="margin:10px 0 0;line-height:1.35">' +
        '<b style="font-size:15px;font-family:\'Prompt\',sans-serif;color:var(--navy);display:block">' +
        esc(m.deanName) +
        '</b>' +
        '<span style="font-size:12px;color:var(--muted);font-family:\'Sarabun\',sans-serif">' +
        esc(m.deanTitle) +
        (m.deanTitleEn ? "<br>(" + esc(m.deanTitleEn) + ")" : "") +
        "</span></p>" +
        '<div class="folio"><span>Foreword</span><span>3</span></div>' +
        "</div></div>"
    );

    // 4 · CONTENTS
    html.push(
      '<div class="page contents-page"><div class="inner">' +
        '<div class="eyebrow"><span>Navigate · Table of Contents</span><span>Faculty of Engineering</span></div>' +
        '<h2>Contents <span class="th-sub" style="font:500 13.5px \'Prompt\',\'Sarabun\',sans-serif;color:var(--muted);text-transform:none;letter-spacing:0;margin-left:auto">สารบัญผลงานวิจัย</span></h2>' +
        '<ul class="toc">' +
        tocHtml +
        "</ul>" +
        '<div class="toc-guide">' +
        '<div class="guide-header">' +
        "<span>โครงสร้างการนำเสนอผลงานวิจัย (Bilingual Spread)</span>" +
        '<span class="guide-badge">2 ภาษาคู่ขนาน</span>' +
        "</div>" +
        '<div class="guide-grid">' +
        '<div class="guide-col">' +
        "<b>📘 หน้าซ้าย (Left · EN)</b>" +
        "<p>ประวัติและผลงานภาษาอังกฤษ Research Highlights, Figures &amp; Publications</p>" +
        "</div>" +
        '<div class="guide-col th">' +
        "<b>📙 หน้าขวา (Right · TH)</b>" +
        "<p>ข้อมูลภาษาไทย ความสำคัญของงานวิจัย และรางวัลนวัตกรรมเด่น</p>" +
        "</div>" +
        "</div>" +
        '<div class="guide-tip">' +
        "<span>💡 คลิกที่รายชื่ออาจารย์ในสารบัญ เพื่อพลิกหน้าไปยังผลงานนั้นทันที</span>" +
        "</div>" +
        "</div>" +
        '<div class="folio"><span>Contents</span><span>4</span></div>' +
        "</div></div>"
    );

    // 5 · DEPARTMENT DIVIDER
    html.push(
      '<div class="page right divider"><div class="inner"><span class="bignum" aria-hidden="true">01</span>' +
        '<div class="eyebrow" style="color:#f3b36b"><span>Faculty Showcase · 01</span></div>' +
        "<h2>Engineering<br>Research</h2>" +
        '<div class="folio"><span>Section divider</span><span>5</span></div>' +
        "</div></div>"
    );

    // 6..(5+2N) · RESEARCHER SPREADS (Left = English Profile & Work, Right = Thai Profile & Work)
    list.forEach(function (r, idx) {
      var leftPageNum = 6 + idx * 2;
      var rightPageNum = leftPageNum + 1;
      var res = r.research || {};

      var portraitHtmlEn = r.portraitUrl
        ? '<img src="' + esc(r.portraitUrl) + '" alt="' + esc(r.fullNameEn || r.fullName) + '">'
        : esc(r.portraitText || "Portrait 3 : 4").replace(/\n/g, "<br>");

      var portraitHtmlTh = r.portraitUrl
        ? '<img src="' + esc(r.portraitUrl) + '" alt="' + esc(r.fullName) + '">'
        : esc(r.portraitText || "Portrait 3 : 4").replace(/\n/g, "<br>");

      var interestsEnHtml = (r.interestsEn || r.interests || [])
        .map(function (item) {
          return "<li>" + esc(item) + "</li>";
        })
        .join("");

      var interestsThHtml = (r.interestsTh || r.interests || [])
        .map(function (item) {
          return "<li>" + esc(item) + "</li>";
        })
        .join("");

      var figs = r.figures || [];
      var figsHtmlEn = "";
      var figsHtmlTh = "";
      if (figs.length > 0) {
        figsHtmlEn =
          '<div class="res-figs cols-' +
          Math.min(figs.length, 3) +
          '">' +
          figs
            .map(function (f) {
              return (
                '<figure class="res-fig-card">' +
                '<img src="' +
                esc(f.url) +
                '" alt="' +
                esc(f.captionEn || "") +
                '">' +
                "<figcaption>" +
                esc(f.captionEn || "") +
                "</figcaption>" +
                "</figure>"
              );
            })
            .join("") +
          "</div>";

        figsHtmlTh =
          '<div class="res-figs cols-' +
          Math.min(figs.length, 3) +
          '">' +
          figs
            .map(function (f) {
              return (
                '<figure class="res-fig-card">' +
                '<img src="' +
                esc(f.url) +
                '" alt="' +
                esc(f.captionTh || "") +
                '">' +
                "<figcaption>" +
                esc(f.captionTh || "") +
                "</figcaption>" +
                "</figure>"
              );
            })
            .join("") +
          "</div>";
      } else {
        figsHtmlEn =
          '<div class="ph" style="height:68px;margin-top:4px">Figure / diagram<br><span style="font-size:9.5px;font-weight:400">' +
          esc(res.figureCaption || "") +
          "</span></div>";
        figsHtmlTh = figsHtmlEn;
      }

      var pubsEnList = r.publicationsEn || r.publications || [];
      var pubsThList = r.publicationsTh || r.publications || [];
      var pubsEnHtml = "";
      var pubsThHtml = "";
      if (pubsEnList.length) {
        pubsEnHtml =
          '<div class="res-pubs-box">' +
          "<h4>" +
          esc(r.pubsLabelEn || "Selected Publications & Highlights") +
          "</h4>" +
          "<ul>" +
          pubsEnList
            .map(function (p) {
              return "<li>" + esc(p) + "</li>";
            })
            .join("") +
          "</ul></div>";
      }
      if (pubsThList.length) {
        pubsThHtml =
          '<div class="res-pubs-box th">' +
          "<h4>" +
          esc(r.pubsLabelTh || "ผลงานตีพิมพ์และรางวัลเด่น") +
          "</h4>" +
          '<ul class="th">' +
          pubsThList
            .map(function (p) {
              return "<li>" + esc(p) + "</li>";
            })
            .join("") +
          "</ul></div>";
      }

      // LEFT PAGE: ENGLISH RESEARCH PROFILE & WORK
      html.push(
        '<div class="page researcher-page page-res-' +
          esc(r.id) +
          '"><div class="inner">' +
          '<div class="dept-banner">' +
          '<div class="dept-banner-top">' +
          "<span>" +
          esc(r.deptNameEn) +
          "</span>" +
          '<span class="lang-pill">EN · PAGE ' +
          leftPageNum +
          "</span>" +
          "</div>" +
          '<div class="dept-banner-sub">' +
          esc(r.majorEn || "") +
          "</div>" +
          "</div>" +
          '<div class="topic-box">' +
          '<h2 class="topic-heading">' +
          esc(r.topicEn || res.titleEn) +
          "</h2>" +
          "</div>" +
          '<div class="profile compact">' +
          '<div class="ph">' +
          portraitHtmlEn +
          "</div>" +
          '<div class="profile-meta">' +
          "<h3>" +
          esc(r.fullNameEn) +
          "</h3>" +
          '<div class="interest-label">' +
          esc(r.interestsLabelEn || "Field of interest:") +
          "</div>" +
          '<ul class="interest-list">' +
          interestsEnHtml +
          "</ul>" +
          "</div>" +
          "</div>" +
          '<div class="bio-card">' +
          "<h4>Research Overview &amp; Background</h4>" +
          '<p class="bio-lead">' +
          esc(r.biographyEn || r.biography) +
          "</p>" +
          "</div>" +
          '<div class="dual-cards">' +
          '<div class="info-card">' +
          "<h4>" +
          esc(r.inFutureLabelEn || "In the Future") +
          "</h4>" +
          "<p>" +
          esc(r.inFutureEn || res.methodology) +
          "</p>" +
          "</div>" +
          '<div class="info-card">' +
          "<h4>" +
          esc(r.afterGradLabelEn || "After Graduation") +
          "</h4>" +
          "<p>" +
          esc(r.afterGradEn || res.findings) +
          "</p>" +
          "</div>" +
          "</div>" +
          pubsEnHtml +
          figsHtmlEn +
          '<div class="res-bottom-bar">' +
          '<div class="folio"><span>' +
          esc(r.fullNameEn) +
          "</span><span>" +
          leftPageNum +
          "</span></div>" +
          "</div>" +
          "</div></div>"
      );

      // RIGHT PAGE: THAI RESEARCH PROFILE & WORK
      html.push(
        '<div class="page right researcher-page page-res-' +
          esc(r.id) +
          '"><div class="inner">' +
          '<div class="dept-banner th">' +
          '<div class="dept-banner-top">' +
          "<span>" +
          esc(r.deptNameTh) +
          "</span>" +
          '<span class="lang-pill">TH · หน้า ' +
          rightPageNum +
          "</span>" +
          "</div>" +
          '<div class="dept-banner-sub">' +
          esc(r.majorTh || "") +
          "</div>" +
          "</div>" +
          '<div class="topic-box th">' +
          '<h2 class="topic-heading th">หัวข้อ: ' +
          esc(r.topicTh || res.title) +
          "</h2>" +
          "</div>" +
          '<div class="profile compact">' +
          '<div class="ph">' +
          portraitHtmlTh +
          "</div>" +
          '<div class="profile-meta">' +
          "<h3>" +
          esc(fullNameTh(r)) +
          "</h3>" +
          '<div class="interest-label">' +
          esc(r.interestsLabelTh || "หัวข้อวิจัยที่สนใจ:") +
          "</div>" +
          '<ul class="interest-list th">' +
          interestsThHtml +
          "</ul>" +
          "</div>" +
          "</div>" +
          '<div class="bio-card th">' +
          "<h4>ประวัติและความสำคัญของงานวิจัย</h4>" +
          '<p class="bio-lead th">' +
          esc(r.biography) +
          "</p>" +
          "</div>" +
          '<div class="dual-cards">' +
          '<div class="info-card">' +
          "<h4>" +
          esc(r.inFutureLabelTh || "ในอนาคต") +
          "</h4>" +
          '<p class="th">' +
          esc(r.inFutureTh || res.methodology) +
          "</p>" +
          "</div>" +
          '<div class="info-card">' +
          "<h4>" +
          esc(r.afterGradLabelTh || "เมื่อสิ้นสุดการศึกษา") +
          "</h4>" +
          '<p class="th">' +
          esc(r.afterGradTh || res.findings) +
          "</p>" +
          "</div>" +
          "</div>" +
          pubsThHtml +
          figsHtmlTh +
          '<div class="res-bottom-bar">' +
          '<div class="folio"><span>' +
          esc(fullNameTh(r)) +
          "</span><span>" +
          rightPageNum +
          "</span></div>" +
          "</div>" +
          "</div></div>"
      );
    });

    // FINAL · BACK COVER
    html.push(
      '<div class="page cover" data-density="hard"><div class="inner" style="justify-content:flex-end">' +
        '<div class="bar"></div>' +
        '<p style="color:#c9d7ee">' +
        esc(m.facultyTitle) +
        "<br>" +
        esc(m.address) +
        " · " +
        esc(m.phone) +
        " · " +
        esc(m.email) +
        "<br>[" +
        esc(m.website) +
        "]</p>" +
        "</div></div>"
    );

    return html.join("");
  }

  function getOptimalBookMetrics() {
    var rect = bookWrap.getBoundingClientRect();
    var availW = Math.max(300, rect.width - 20);
    var availH = Math.max(360, rect.height - 14);
    var isSingle = window.innerWidth < 760;
    var baseW = 512;
    var baseH = 630;
    var aspect = baseW / baseH; // ~0.8127

    var pageH, pageW;
    if (isSingle) {
      pageH = Math.min(availH, Math.floor(availW / aspect));
      pageH = Math.max(360, Math.min(pageH, 1300));
      pageW = Math.floor(pageH * aspect);
    } else {
      pageH = Math.min(availH, Math.floor((availW / 2) / aspect));
      pageH = Math.max(380, Math.min(pageH, 1300));
      pageW = Math.floor(pageH * aspect);
    }

    return {
      isSingle: isSingle,
      pageW: pageW,
      pageH: pageH,
      bookW: isSingle ? pageW : pageW * 2,
      bookH: pageH
    };
  }

  function initFlipBook(startPageIdx) {
    startPageIdx = startPageIdx || 0;

    if (typeof St === "undefined") {
      var oldBook = document.getElementById("book");
      if (oldBook) oldBook.style.display = "none";
      document.getElementById("fb").style.display = "block";
      return;
    }

    var existingBook = document.getElementById("book");
    if (existingBook) existingBook.remove();

    var metrics = getOptimalBookMetrics();

    var newBook = document.createElement("div");
    newBook.id = "book";
    newBook.style.width = metrics.bookW + "px";
    newBook.style.height = metrics.bookH + "px";
    newBook.style.setProperty("--page-scale", +(metrics.pageH / 630).toFixed(4));
    newBook.style.setProperty("--res-page-scale", +(metrics.pageH / 915).toFixed(4));
    newBook.innerHTML = buildBookHTML();
    bookWrap.insertBefore(newBook, document.getElementById("fb"));

    // Populate jump select
    jump.innerHTML = "";
    secs.forEach(function (s) {
      var o = document.createElement("option");
      o.value = s[1];
      o.textContent = s[0];
      jump.appendChild(o);
    });

    var pageNodes = newBook.querySelectorAll(".page");
    pf = new St.PageFlip(newBook, {
      width: metrics.pageW,
      height: metrics.pageH,
      size: "fixed",
      minWidth: 240,
      maxWidth: 1100,
      minHeight: 340,
      maxHeight: 1350,
      maxShadowOpacity: 0.55,
      showCover: true,
      drawShadow: true,
      flippingTime: 850,
      usePortrait: metrics.isSingle,
      mobileScrollSupport: false,
      swipeDistance: 25,
      startPage: startPageIdx
    });

    pf.loadFromHTML(pageNodes);

    pf.on("flip", upd);

    // Bind TOC links inside book
    newBook.querySelectorAll(".toc li[data-go]").forEach(function (li) {
      li.addEventListener("click", function (e) {
        e.stopPropagation();
        pf.flip(+li.dataset.go);
      });
    });

    // Bind detail modal button inside pages
    newBook.querySelectorAll("[data-open-detail]").forEach(function (btn) {
      btn.addEventListener("mousedown", function (e) {
        e.stopPropagation();
      });
      btn.addEventListener("touchstart", function (e) {
        e.stopPropagation();
      });
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        openDetailModal(btn.getAttribute("data-open-detail"));
      });
    });

    upd();
  }

  function upd() {
    if (!pf) return;
    var i = pf.getCurrentPageIndex(),
      n = pf.getPageCount();
    if (document.activeElement !== pageInput) pageInput.value = i + 1;
    totalEl.textContent = n;
    pageInput.max = n;
    var v = 0;
    secs.forEach(function (s) {
      if (i >= s[1]) v = s[1];
    });
    jump.value = v;

    var bookEl = document.getElementById("book");
    if (bookEl) {
      var isSingle = window.innerWidth < 760;
      bookEl.classList.toggle("cover-front", !isSingle && i === 0);
      bookEl.classList.toggle("cover-back", !isSingle && i === n - 1);
    }
  }

  function goToTyped() {
    var n = pf.getPageCount(),
      v = parseInt(pageInput.value.replace(/\D/g, ""), 10);
    if (isNaN(v)) {
      return pf.getCurrentPageIndex() + 1;
    }
    v = Math.min(Math.max(v, 1), n);
    pageInput.value = v;
    if (v - 1 !== pf.getCurrentPageIndex()) pf.flip(v - 1);
    return v;
  }

  // Modal: Full Bilingual Research Detail
  function openDetailModal(resId) {
    var r = (ebookData.researchers || []).find(function (item) {
      return item.id === resId;
    });
    if (!r) return;
    var res = r.research || {};
    resModalTitle.textContent =
      fullNameTh(r) + " · " + r.fullNameEn;

    var figsModalHtml = "";
    if (r.figures && r.figures.length) {
      figsModalHtml =
        "<h3>ภาพประกอบงานวิจัย (Research Figures)</h3>" +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:12px;margin:10px 0 16px">' +
        r.figures
          .map(function (f) {
            return (
              '<div style="border:1px solid #c9d3e2;background:#fff;padding:6px;border-radius:4px">' +
              '<img src="' +
              esc(f.url) +
              '" alt="" style="width:100%;height:140px;object-fit:cover;display:block;border-radius:2px">' +
              '<div style="font-size:11.5px;margin-top:6px;color:#1c2a3d"><b>TH:</b> ' +
              esc(f.captionTh || "") +
              '<br><span style="color:#52627a"><b>EN:</b> ' +
              esc(f.captionEn || "") +
              "</span></div></div>"
            );
          })
          .join("") +
        "</div>";
    }

    var pubsModalHtml = "";
    if (r.publications && r.publications.length) {
      pubsModalHtml =
        "<h3>ผลงานตีพิมพ์และรางวัล (Selected Publications &amp; Honors)</h3><ul>" +
        r.publications
          .map(function (p) {
            return '<li style="margin-bottom:6px">' + esc(p) + "</li>";
          })
          .join("") +
        "</ul>";
    }

    resModalBody.innerHTML =
      '<div class="eyebrow"><span>' +
      esc(r.deptNameTh) +
      " (" +
      esc(r.majorTh || "") +
      ") · " +
      esc(r.deptNameEn) +
      "</span></div>" +
      '<div style="display:flex;gap:16px;align-items:flex-start;margin-bottom:14px;flex-wrap:wrap">' +
      (r.portraitUrl
        ? '<img src="' +
          esc(r.portraitUrl) +
          '" alt="' +
          esc(r.fullName) +
          '" style="width:96px;height:120px;object-fit:cover;border:2px solid var(--navy);border-radius:4px;flex:none">'
        : "") +
      '<div style="flex:1;min-width:220px">' +
      '<h2 style="font-size:21px;margin-bottom:4px">' +
      esc(r.topicTh || res.title) +
      "</h2>" +
      '<p class="ghost" style="margin-bottom:8px;font-size:13.5px">' +
      esc(r.topicEn || res.titleEn) +
      "</p>" +
      '<p style="margin:0;font-size:13px"><b>' +
      esc(fullNameTh(r)) +
      " (" +
      esc(r.fullNameEn) +
      ")</b></p>" +
      "</div></div>" +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px;margin-bottom:14px">' +
      '<div style="background:#f5f8fc;border-left:4px solid var(--navy);padding:12px;border-radius:4px">' +
      '<h3 style="margin-top:0">English Profile &amp; Research</h3>' +
      "<p>" +
      esc(r.biographyEn || "") +
      "</p>" +
      "<p><b>" +
      esc(r.interestsLabelEn || "Field of interest:") +
      "</b><br>• " +
      (r.interestsEn || []).map(esc).join("<br>• ") +
      "</p>" +
      "<p><b>" +
      esc(r.inFutureLabelEn || "In the Future") +
      ":</b> " +
      esc(r.inFutureEn || "") +
      "</p>" +
      "<p style='margin-bottom:0'><b>" +
      esc(r.afterGradLabelEn || "After Graduation") +
      ":</b> " +
      esc(r.afterGradEn || "") +
      "</p>" +
      "</div>" +
      '<div style="background:#fdfaf2;border-left:4px solid var(--accent);padding:12px;border-radius:4px">' +
      '<h3 style="margin-top:0">ข้อมูลและผลงานวิจัยภาษาไทย</h3>' +
      "<p>" +
      esc(r.biography || "") +
      "</p>" +
      "<p><b>" +
      esc(r.interestsLabelTh || "หัวข้อวิจัยที่สนใจ:") +
      "</b><br>• " +
      (r.interestsTh || []).map(esc).join("<br>• ") +
      "</p>" +
      "<p><b>" +
      esc(r.inFutureLabelTh || "ในอนาคต") +
      ":</b> " +
      esc(r.inFutureTh || "") +
      "</p>" +
      "<p style='margin-bottom:0'><b>" +
      esc(r.afterGradLabelTh || "เมื่อสิ้นสุดการศึกษา") +
      ":</b> " +
      esc(r.afterGradTh || "") +
      "</p>" +
      "</div>" +
      "</div>" +
      figsModalHtml +
      pubsModalHtml;

    resDetailModal.classList.add("open");
  }

  // Event bindings
  document.getElementById("prev").onclick = function () {
    if (pf) pf.flipPrev();
  };
  document.getElementById("next").onclick = function () {
    if (pf) pf.flipNext();
  };
  document.getElementById("brandHome").onclick = function () {
    if (pf) pf.flip(0);
  };
  jump.onchange = function () {
    if (pf) pf.flip(+jump.value);
  };
  gotoForm.onsubmit = function (e) {
    e.preventDefault();
    var v = goToTyped();
    pageInput.blur();
    pageInput.value = v;
  };
  pageInput.onfocus = function () {
    pageInput.select();
  };
  pageInput.oninput = function () {
    pageInput.value = pageInput.value.replace(/\D/g, "");
  };
  pageInput.onblur = function () {
    if (pf) pageInput.value = pf.getCurrentPageIndex() + 1;
  };

  // Theme Toggle (Light Blueprint vs Dark Blueprint)
  var savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
  document.getElementById("btnTheme").onclick = function () {
    var cur = document.documentElement.getAttribute("data-theme");
    var next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(THEME_KEY, next);
  };

  // Search box
  searchInput.addEventListener("input", function () {
    var q = searchInput.value.trim().toLowerCase();
    if (!q) {
      searchResults.classList.remove("open");
      return;
    }
    var matches = [];
    buildGroupedResearchers().ordered.forEach(function (r, idx) {
      var pNum = 6 + idx * 2;
      var text = [
        r.academicTitle,
        r.fullName,
        r.fullNameEn,
        r.deptNameTh,
        r.deptNameEn,
        r.topicTh,
        r.topicEn,
        r.biography,
        r.biographyEn,
        (r.interests || []).join(" "),
        (r.interestsEn || []).join(" "),
        (r.interestsTh || []).join(" "),
        r.research?.title,
        r.research?.abstract
      ]
        .join(" ")
        .toLowerCase();
      if (text.indexOf(q) !== -1) {
        matches.push({
          label: fullNameTh(r) + " (" + r.fullNameEn + ")",
          sub: r.topicTh || r.research?.title || r.deptNameTh,
          pageIdx: pNum - 1,
          pageNum: pNum + "–" + (pNum + 1)
        });
      }
    });

    if (!matches.length) {
      searchResults.innerHTML =
        '<div class="search-item"><span>ไม่พบข้อมูลที่ค้นหา</span></div>';
    } else {
      searchResults.innerHTML = matches
        .map(function (m) {
          return (
            '<div class="search-item" data-search-go="' +
            m.pageIdx +
            '">' +
            "<div><b>" +
            esc(m.label) +
            '</b><div style="font-size:11px;color:#52627a">' +
            esc(m.sub) +
            "</div></div>" +
            "<small>หน้า " +
            m.pageNum +
            "</small></div>"
          );
        })
        .join("");
    }
    searchResults.classList.add("open");
  });

  searchResults.addEventListener("click", function (e) {
    var item = e.target.closest("[data-search-go]");
    if (!item) return;
    var targetIdx = +item.getAttribute("data-search-go");
    searchResults.classList.remove("open");
    searchInput.value = "";
    if (pf) pf.flip(targetIdx);
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".search-box")) {
      searchResults.classList.remove("open");
    }
  });

  // Modal close
  document.getElementById("closeResModal").onclick = function () {
    resDetailModal.classList.remove("open");
  };
  resDetailModal.addEventListener("click", function (e) {
    if (e.target === resDetailModal) {
      resDetailModal.classList.remove("open");
    }
  });

  document.addEventListener("keydown", function (e) {
    if (
      e.target === pageInput ||
      e.target === searchInput ||
      resDetailModal.classList.contains("open")
    ) {
      if (e.key === "Escape") {
        resDetailModal.classList.remove("open");
      }
      return;
    }
    if (e.key === "ArrowRight" && pf) pf.flipNext();
    if (e.key === "ArrowLeft" && pf) pf.flipPrev();
  });

  // Responsive resize: re-fit book to viewport while keeping current page
  var resizeTimer = null;
  var lastBookW = 0;
  var lastBookH = 0;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      var m = getOptimalBookMetrics();
      if (Math.abs(m.bookW - lastBookW) > 6 || Math.abs(m.bookH - lastBookH) > 6) {
        lastBookW = m.bookW;
        lastBookH = m.bookH;
        var curIdx = pf ? pf.getCurrentPageIndex() : 0;
        initFlipBook(curIdx);
      }
    }, 180);
  });

  // Start (support optional ?page=N query parameter, 1-based)
  var initialPage = 0;
  try {
    var params = new URLSearchParams(window.location.search);
    var pParam = parseInt(params.get("page"), 10);
    if (!isNaN(pParam) && pParam >= 1) {
      initialPage = pParam - 1;
    }
  } catch (err) {}
  var initM = getOptimalBookMetrics();
  lastBookW = initM.bookW;
  lastBookH = initM.bookH;
  initFlipBook(initialPage);
})();
