/**
 * ข้อมูลตั้งต้นสำหรับ Faculty of Engineering · Research E-Book
 * -------------------------------------------------------------
 * โครงสร้างหน้าหนังสือจะถูกสร้างให้อัตโนมัติและรักษาจำนวนหน้าให้เป็นเลขคู่ (EVEN) เสมอ
 * เพื่อให้ปกแข็ง (Front & Back Cover) ของไลบรารี St.PageFlip แสดงผลได้อย่างถูกต้อง
 *
 * หน้าคู่ของอาจารย์แต่ละท่าน (Spread):
 * - หน้าซ้าย (เช่น หน้า 6, 8, ...): ข้อมูลและผลงานวิจัยภาษาอังกฤษ (English)
 * - หน้าขวา (เช่น หน้า 7, 9, ...): ข้อมูลและผลงานวิจัยภาษาไทย (ภาษาไทย)
 */

window.DEFAULT_EBOOK_DATA = {
  meta: {
    facultyTitle: "Faculty of Engineering",
    university: "Naresuan University",
    showcaseYear: "2027",
    coverTitleLine1: "Faculty of",
    coverTitleLine2: "Engineering",
    coverTitleLine3: "Researcher Profiles",
    coverSubtitle: "ทำเนียบผลงานวิจัยและนวัตกรรมคณาจารย์ คณะวิศวกรรมศาสตร์",
    insideCoverDesc:
      "หนังสืออิเล็กทรอนิกส์ (Research E-Book) เล่มนี้รวบรวมประวัติ ความเชี่ยวชาญ และผลงานวิจัยที่โดดเด่นของคณาจารย์ประจำคณะวิศวกรรมศาสตร์ เพื่อเผยแพร่องค์ความรู้และเชื่อมโยงความร่วมมือกับภาคอุตสาหกรรม",
    facultyBuildingUrl: "img/faculty-building.jpg",
    facultyBuildingCaption:
      "อาคารคณะวิศวกรรมศาสตร์ มหาวิทยาลัยนเรศวร (Faculty of Engineering, Naresuan University)",
    deanName: "ผศ.ดร.กำพล ทรัพย์สมบูรณ์",
    deanTitle: "คณบดีคณะวิศวกรรมศาสตร์ มหาวิทยาลัยนเรศวร",
    deanTitleEn: "Dean, Faculty of Engineering, Naresuan University",
    deanPhotoUrl: "img/dean-kampol.png",
    forewordP1:
      "คณะวิศวกรรมศาสตร์มุ่งมั่นสร้างสรรค์งานวิจัยและนวัตกรรมที่ตอบโจทย์การพัฒนาประเทศ ทั้งด้านวิศวกรรมโยธา เครื่องกล ไฟฟ้า คอมพิวเตอร์ และอุตสาหการ โดยบูรณาการองค์ความรู้ร่วมกับภาคเอกชนและชุมชน",
    forewordP2:
      "หวังเป็นอย่างยิ่งว่าทำเนียบผลงานวิจัยเล่มนี้จะเป็นสื่อกลางสำคัญในการต่อยอดงานวิจัยสู่การใช้งานจริง และสร้างเครือข่ายความร่วมมือทางวิชาการที่เข้มแข็งต่อไป",
    address: "99 หมู่ 9 ต.ท่าโพธิ์ อ.เมือง จ.พิษณุโลก 65000",
    phone: "055-964-007",
    email: "eng@nu.ac.th",
    website: "www.eng.nu.ac.th",
    colophonText:
      "กิตติกรรมประกาศ: ขอขอบคุณทุนสนับสนุนการวิจัยจากแหล่งทุนภายในและภายนอกมหาวิทยาลัย ตลอดจนพันธมิตรภาคอุตสาหกรรมและคณาจารย์ทุกท่านที่ร่วมส่งผลงานในเล่มนี้"
  },
  researchers: [
    {
      id: "res-4",
      deptCode: "01",
      deptNameEn: "Department of Civil Engineering",
      majorEn: "Major: Structural Engineering",
      deptNameTh: "ภาควิชาวิศวกรรมโยธา",
      majorTh: "สาขาวิชาวิศวกรรมโครงสร้าง",
      academicTitle: "ผศ. ดร.",
      fullName: "สสิกรณณ์ เหลืองวิชชเจริญ",
      fullNameEn: "Asst. Prof. Dr. Sasikorn Leungvichcharoen",
      email: "",
      portraitText: "Portrait\n3 : 4",
      portraitUrl: "img/sasikorn-portrait.jpg",
      topicEn:
        "Structural Analysis, Wave Propagation, and Practical Engineering Applications",
      topicTh:
        "การวิเคราะห์โครงสร้าง การแพร่กระจายคลื่น และการประยุกต์ใช้ทางวิศวกรรม",
      biographyEn:
        "My research has focused on structural mechanics and elastic wave propagation, particularly the effects of interfaces, material properties, and initial stresses on structural response. I am also interested in applying structural analysis and numerical methods to practical civil engineering problems, including prefabricated steel systems and engineering information management.",
      biography:
        "งานวิจัยที่สนใจเกี่ยวข้องกับกลศาสตร์โครงสร้างและการแพร่กระจายคลื่นในวัสดุยืดหยุ่น โดยเฉพาะผลของรอยต่อ คุณสมบัติวัสดุ และความเค้นเริ่มต้นต่อการตอบสนองของโครงสร้าง นอกจากนี้ ยังสนใจประยุกต์ใช้การวิเคราะห์โครงสร้างและวิธีเชิงตัวเลขในงานวิศวกรรมโยธา เช่น ระบบโครงสร้างเหล็กสำเร็จรูปและการจัดการข้อมูลทางวิศวกรรม",
      interestsLabelEn: "Research Interests:",
      interestsEn: [
        "Structural mechanics and analysis of elastic waves",
        "Finite element analysis and numerical methods",
        "Steel structures, prefabrication and modular systems"
      ],
      interestsLabelTh: "หัวข้อวิจัยที่สนใจ:",
      interestsTh: [
        "กลศาสตร์โครงสร้างและการวิเคราะห์คลื่นในวัสดุยืดหยุ่น",
        "การวิเคราะห์ไฟไนต์เอลิเมนต์และวิธีเชิงตัวเลข",
        "โครงสร้างเหล็ก ระบบสำเร็จรูป และโครงสร้างแบบโมดูลาร์"
      ],
      interests: [
        "Structural Mechanics & Elastic Waves",
        "Finite Element & Numerical Methods",
        "Prefabricated & Modular Steel Systems"
      ],
      inFutureLabelEn: "Future Research Directions",
      inFutureEn:
        "I plan to continue studying structural behavior using analytical and numerical approaches, with an emphasis on problems that can be linked to engineering practice and the development of simple computational tools.",
      afterGradLabelEn: "Research and Applications",
      afterGradEn:
        "My work includes studies of elastic-wave behavior and structural response, together with collaborative work on knock-down steel frame systems and digital preservation of engineering drawings for building management.",
      inFutureLabelTh: "แนวทางการวิจัยในอนาคต",
      inFutureTh:
        "มุ่งศึกษาพฤติกรรมของโครงสร้างด้วยวิธีวิเคราะห์และวิธีเชิงตัวเลขอย่างต่อเนื่อง โดยเน้นปัญหาที่เชื่อมโยงกับงานวิศวกรรมจริง และการพัฒนาเครื่องมือคำนวณที่ใช้งานได้ไม่ซับซ้อน",
      afterGradLabelTh: "งานวิจัยและการประยุกต์ใช้",
      afterGradTh:
        "ผลงานที่ผ่านมาเกี่ยวข้องกับพฤติกรรมการแพร่กระจายคลื่นและการตอบสนองของโครงสร้าง รวมทั้งความร่วมมือด้านระบบโครงสร้างเหล็กแบบถอดประกอบ และการอนุรักษ์แบบก่อสร้างเดิมในรูปแบบดิจิทัลเพื่อการบริหารจัดการอาคาร",
      figures: [
        {
          url: "img/sasikorn-fig1.jpg",
          captionEn:
            "Elastic wave cloaking simulation (Wijeyewickrema & Leungvichcharoen, 2022, Fig. 3)",
          captionTh:
            "ผลการจำลองคลื่นในระบบพรางคลื่น (Wijeyewickrema และ Leungvichcharoen, 2022, รูปที่ 3)"
        },
        {
          url: "img/sasikorn-fig2.jpg",
          captionEn:
            "Knock-down steel frame prototype (NUSTARC 2025 presentation)",
          captionTh: "โครงสร้างเหล็กแบบถอดประกอบ (สไลด์นำเสนอ NUSTARC 2025)"
        }
      ],
      pubsLabelEn: "Selected Publications and Conference Presentations",
      publicationsEn: [
        "Wijeyewickrema, A. C. and Leungvichcharoen, S. (2022). Effect of Imperfect Contact on the Cloaking of a Circular Elastic Cylinder from Antiplane Elastic Waves. Mechanics Research Communications, 124, 103964.",
        "Tuttipongsawat, P., Wijeyewickrema, A. C. and Leungvichcharoen, S. (2020). Cloaking of a Circular Cylindrical Elastic Inclusion from Antiplane Elastic Waves and Resonance Effects. Wave Motion, 94, 102491.",
        "Leungvichcharoen, S., Subsomboon, K., Kaewpoonsuk, P., Wijeyewickrema, A. C. and Moraray, P. (2025). Sustainable Knock-Down Housing Steel Structural Frame System: Reducing Transport Energy and Material Waste through Precision Prefabrication. NUSTARC 2025 (Abstract only)."
      ],
      pubsLabelTh: "ผลงานตีพิมพ์และนำเสนอที่คัดเลือก",
      publicationsTh: [
        "Wijeyewickrema, A. C. and Leungvichcharoen, S. (2022). Effect of Imperfect Contact on the Cloaking of a Circular Elastic Cylinder from Antiplane Elastic Waves. Mechanics Research Communications, 124, 103964.",
        "Tuttipongsawat, P., Wijeyewickrema, A. C. and Leungvichcharoen, S. (2020). Cloaking of a Circular Cylindrical Elastic Inclusion from Antiplane Elastic Waves and Resonance Effects. Wave Motion, 94, 102491.",
        "Leungvichcharoen, S., Subsomboon, K., Kaewpoonsuk, P., Wijeyewickrema, A. C. and Moraray, P. (2025). Sustainable Knock-Down Housing Steel Structural Frame System: Reducing Transport Energy and Material Waste through Precision Prefabrication. NUSTARC 2025 (Abstract only)."
      ],
      publications: [
        "Wijeyewickrema, A. C. and Leungvichcharoen, S. (2022). Effect of Imperfect Contact on the Cloaking of a Circular Elastic Cylinder from Antiplane Elastic Waves. Mechanics Research Communications, 124, 103964.",
        "Tuttipongsawat, P., Wijeyewickrema, A. C. and Leungvichcharoen, S. (2020). Cloaking of a Circular Cylindrical Elastic Inclusion from Antiplane Elastic Waves and Resonance Effects. Wave Motion, 94, 102491.",
        "Leungvichcharoen, S., Subsomboon, K., Kaewpoonsuk, P., Wijeyewickrema, A. C. and Moraray, P. (2025). Sustainable Knock-Down Housing Steel Structural Frame System: Reducing Transport Energy and Material Waste through Precision Prefabrication. NUSTARC 2025 (Abstract only)."
      ],
      research: {
        code: "01",
        title:
          "การวิเคราะห์โครงสร้าง การแพร่กระจายคลื่น และการประยุกต์ใช้ทางวิศวกรรม",
        titleEn:
          "Structural Analysis, Wave Propagation, and Practical Engineering Applications",
        abstract:
          "กลศาสตร์โครงสร้างและการแพร่กระจายคลื่นในวัสดุยืดหยุ่น การวิเคราะห์ไฟไนต์เอลิเมนต์และวิธีเชิงตัวเลข รวมถึงระบบโครงสร้างเหล็กสำเร็จรูปและการจัดการข้อมูลทางวิศวกรรม",
        methodology:
          "ใช้วิธีวิเคราะห์และวิธีเชิงตัวเลขศึกษาผลของรอยต่อ คุณสมบัติวัสดุ และความเค้นเริ่มต้นต่อการตอบสนองของโครงสร้างและระบบพรางคลื่น",
        findings:
          "ได้แบบจำลองการแพร่กระจายคลื่นยืดหยุ่นและการพัฒนาระบบโครงสร้างเหล็กแบบถอดประกอบรวมถึงการอนุรักษ์แบบก่อสร้างดิจิทัล",
        figureCaption:
          "ผลการจำลองคลื่นในระบบพรางคลื่น และโครงสร้างเหล็กแบบถอดประกอบ",
        figureUrl: "img/sasikorn-fig1.jpg",
        publication:
          "Wijeyewickrema & Leungvichcharoen, Mechanics Research Communications (2022); Tuttipongsawat et al., Wave Motion (2020); Leungvichcharoen et al., NUSTARC (2025).",
        link: "https://www.eng.nu.ac.th"
      }
    },
    {
      id: "res-1",
      deptCode: "02",
      deptNameEn: "Department of Civil Engineering",
      majorEn: "Major: Environmental Engineering",
      deptNameTh: "ภาควิชาวิศวกรรมโยธา",
      majorTh: "สาขาวิชาวิศวกรรมสิ่งแวดล้อม",
      academicTitle: "ดร.",
      fullName: "วีระพงค์ รุกขพันธ์",
      fullNameEn: "Dr. Weerapong Rukapan",
      email: "weerapongr@nu.ac.th",
      portraitText: "Portrait\n3 : 4",
      portraitUrl: "img/weerapong-portrait.jpg",
      topicEn:
        "Study of greenhouse gas emission factors for municipal solid waste landfill wastewater treatment systems",
      topicTh:
        "การหาค่าสัมประสิทธิ์การปล่อยก๊าซเรือนกระจกสำหรับระบบบำบัดน้ำเสียสำหรับหลุมฝังกลบขยะชุมชน",
      biographyEn:
        "Dr. Weerapong Rukapan's research interests center on advanced wastewater treatment, membrane separation technology, greenhouse gas (GHG) accounting, and mathematical modeling. He received his B.Eng. in Civil Engineering and earned his M.Eng. and Ph.D. in Environmental Engineering from Kasetsart University. Additionally, he served as a research fellow at Kanazawa University in Japan for 12 months.",
      biography:
        "ดร. วีระพงค์ รุกขพันธ์ มีความสนใจงานวิจัยในด้านการบำบัดน้ำเสียขั้นสูง เทคโนโลยีเมมเบรน ก๊าซเรือนกระจก (GHG) และการสร้างแบบจำลองทางคณิตศาสตร์ โดยสำเร็จการศึกษาระดับปริญญาตรี คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมโยธา และระดับปริญญาโท–เอก ด้านวิศวกรรมสิ่งแวดล้อม จากมหาวิทยาลัยเกษตรศาสตร์ รวมทั้งเคยเป็นนักวิจัยรับเชิญ (Research Fellow) ณ มหาวิทยาลัยคานาซาวะ (Kanazawa University) ประเทศญี่ปุ่น เป็นระยะเวลา 12 เดือน",
      interestsLabelEn: "My recent research interest is",
      interestsEn: [
        "The study of greenhouse gas emission factors (EF) for landfill leachate wastewater treatment systems in Thailand",
        "Advanced wastewater treatment, membrane technology (RO & FO), and mathematical process modeling"
      ],
      interestsLabelTh: "หัวข้อวิจัยที่สนใจอยู่ในปัจจุบัน ได้แก่",
      interestsTh: [
        "การหาค่าสัมประสิทธิ์การปล่อยก๊าซเรือนกระจก (EF) ของระบบบำบัดน้ำเสียน้ำชะมูลฝอยในประเทศไทย",
        "การบำบัดน้ำเสียขั้นสูง เทคโนโลยีเยื่อแผ่นเมมเบรน (RO/FO) และการสร้างแบบจำลองทางคณิตศาสตร์"
      ],
      interests: [
        "Advanced Wastewater Treatment",
        "Membrane Technology",
        "Greenhouse Gas (GHG)",
        "Mathematical Modeling"
      ],
      inFutureLabelEn: "In the Future",
      inFutureEn:
        "The results of determining greenhouse gas emission factors (EF) for landfill leachate treatment systems enable assessors to establish baseline reference data for Thailand, and support future studies on advanced membrane effluent reclamation for water reuse.",
      afterGradLabelEn: "After Graduation",
      afterGradEn:
        "The greenhouse gas emission factors from landfill leachate treatment systems are utilized across Thailand for greenhouse gas inventory assessment and calculating the Carbon Footprint of Products (CFP), providing practical standard benchmarks for sustainable waste management.",
      inFutureLabelTh: "ในอนาคต",
      inFutureTh:
        "ผลการหาค่าสัมประสิทธิ์การปล่อยก๊าซเรือนกระจกสำหรับระบบบำบัดน้ำเสียหลุมฝังกลบ จะช่วยให้ผู้ประเมินในประเทศนำผลวิจัยไปใช้อ้างอิง และต่อยอดสู่การศึกษาการปรับปรุงคุณภาพน้ำชะมูลฝอยเพื่อนำกลับมาใช้ใหม่",
      afterGradLabelTh: "เมื่อสิ้นสุดการศึกษา",
      afterGradTh:
        "ค่าสัมประสิทธิ์การปล่อยก๊าซเรือนกระจกสำหรับระบบบำบัดน้ำเสียหลุมฝังกลบ ได้ถูกนำไปใช้ประเมินการปล่อยก๊าซและคำนวณคาร์บอนฟุตพริ้นท์ (CFP) เพื่อเป็นเกณฑ์มาตรฐานสนับสนุนเป้าหมายความเป็นกลางทางคาร์บอน",
      figures: [
        {
          url: "img/weerapong-fig1.jpg",
          captionEn: "Full-scale reverse osmosis & landfill leachate treatment plant",
          captionTh: "ระบบบำบัดน้ำชะมูลฝอยและชุดเมมเบรน Reverse Osmosis ขนาดใช้งานจริง"
        },
        {
          url: "img/weerapong-fig2.jpg",
          captionEn: "Leachate wastewater samples across membrane treatment stages",
          captionTh: "ตัวอย่างน้ำชะมูลฝอยในแต่ละขั้นตอนของกระบวนการบำบัดด้วยเมมเบรน"
        }
      ],
      pubsLabelEn: "Selected Publications",
      publicationsEn: [
        "Weerapong Rukapan, Chart Chiemchaisri et al. (2012). Short and Long Term Fouling Characteristics of Reverse Osmosis Membrane at Full Scale Leachate Treatment Plant. Water Science and Technology, 65(4), 585–591.",
        "Ryo Honda, Weerapong Rukapan et al. (2012). Effects of membrane orientation on fouling characteristics of forward osmosis membrane. Bioresource Technology, 122, 222–227."
      ],
      pubsLabelTh: "ผลงานตีพิมพ์วิชาการที่คัดสรร (Selected Publications)",
      publicationsTh: [
        "Weerapong Rukapan, Chart Chiemchaisri และคณะ (2012). การศึกษาคุณลักษณะการอุดตันระยะสั้นและระยะยาวของเมมเบรน Reverse Osmosis ในระบบบำบัดน้ำชะมูลฝอยขนาดใช้งานจริง. Water Science and Technology.",
        "Ryo Honda, Weerapong Rukapan และคณะ (2012). ผลของการจัดวางทิศทางเมมเบรนต่อการอุดตันของเมมเบรน Forward Osmosis ในการเพิ่มความเข้มข้นของสาหร่ายขนาดเล็ก. Bioresource Technology."
      ],
      publications: [
        "Weerapong Rukapan, Chart Chiemchaisri, Wilai Chiemchaisri, Benyapa Khananthai and Thirdpong Srisukphun. Title: Short and Long Term Fouling Characteristics of Reverse Osmosis Membrane at Full Scale Leachate Treatment Plant. Water Science and Technology. 2012",
        "Ryo Honda, Weerapong Rukapan, Hitomi Komura, Yuta Teraoka, Mana Noguchi, Eric M.V. Hoek. Title: Effects of membrane orientation on fouling characteristics of forward osmosis membrane in concentration of microalgae culture. Bioresource Technology"
      ],
      research: {
        code: "02",
        title:
          "การหาค่าสัมประสิทธิ์การปล่อยก๊าซเรือนกระจกสำหรับระบบบำบัดน้ำเสียสำหรับหลุมฝังกลบขยะชุมชน",
        titleEn:
          "Study of greenhouse gas emission factors for municipal solid waste landfill wastewater treatment systems",
        abstract:
          "ศึกษาการหาค่าสัมประสิทธิ์การปล่อยก๊าซเรือนกระจก (Emission Factors: EF) สำหรับระบบบำบัดน้ำเสียน้ำชะมูลฝอยในประเทศไทย ร่วมกับการประยุกต์ใช้เทคโนโลยีเมมเบรนและการบำบัดน้ำเสียขั้นสูง",
        methodology:
          "เก็บข้อมูลและวิเคราะห์อัตราการปล่อยก๊าซเรือนกระจกจากระบบบำบัดน้ำเสียหลุมฝังกลบมูลฝอย ร่วมกับการศึกษาคุณลักษณะการอุดตันของเมมเบรน Reverse Osmosis และ Forward Osmosis",
        findings:
          "ได้ค่าสัมประสิทธิ์การปล่อยก๊าซเรือนกระจกสำหรับใช้เป็นข้อมูลอ้างอิงในการประเมินการปล่อยก๊าซเรือนกระจกของประเทศไทย และการคำนวณคาร์บอนฟุตพริ้นท์ผลิตภัณฑ์ (CFP)",
        figureCaption:
          "Fig. 1 — ระบบบำบัดน้ำชะมูลฝอยและตัวอย่างน้ำเสียในห้องปฏิบัติการ",
        figureUrl: "img/weerapong-fig1.jpg",
        publication:
          "Weerapong Rukapan et al., Water Science and Technology (2012); Ryo Honda, Weerapong Rukapan et al., Bioresource Technology.",
        link: "https://www.eng.nu.ac.th"
      }
    },
    {
      id: "res-3",
      deptCode: "03",
      deptNameEn: "Department of Civil Engineering",
      majorEn: "Major: Surveying Engineering / Geomatics",
      deptNameTh: "ภาควิชาวิศวกรรมโยธา",
      majorTh: "สาขาวิชาวิศวกรรมสำรวจและภูมิสารสนเทศ",
      academicTitle: "",
      fullName: "พลปรีชา ชิดบุรี",
      fullNameEn: "Polpreecha Chidburee",
      email: "",
      portraitText: "Portrait\n3 : 4",
      portraitUrl: "img/polpreecha-portrait.jpg",
      topicEn:
        "UAV Surveying for Infrastructure and Cultural Heritage Monitoring",
      topicTh: "การติดตามโครงสร้างพื้นฐานด้วยอากาศยานไร้คนขับ",
      biographyEn:
        "My research integrates UAV photogrammetry, GNSS RTK/PPK positioning, national CORS networks and 3D point-cloud analysis to produce reliable spatial information for engineering surveys. Recent case studies address deformation assessment of dam side-slopes and geometric condition assessment of cultural heritage structures. Focusing on positional accuracy, uncertainty, suitable ground control and repeatable 3D survey workflows.",
      biography:
        "การสำรวจด้วยภาพถ่ายจากอากาศยานไร้คนขับ (UAV Photogrammetry) ร่วมกับการสำรวจด้วยดาวเทียม GNSS แบบความแม่นยำสูง เช่น วิธี RTK/PPK ร่วมกับโครงข่าย CORS เพื่อสร้างแบบจำลองสามมิติที่มีความถูกต้องสำหรับงานวิศวกรรม โดยเน้นการติดตามการเปลี่ยนแปลงของโครงสร้างพื้นฐาน เช่น สภาพทางลาดของเขื่อน และการประเมินและติดตามการเปลี่ยนแปลงของโบราณสถาน รวมทั้งการวิเคราะห์ความคลาดเคลื่อนและความไม่แน่นอนของผลผลิตจากการสำรวจด้วยภาพถ่าย",
      interestsLabelEn: "My recent research interests are",
      interestsEn: [
        "High-accuracy UAV photogrammetry and georeferencing using RTK/PPK GNSS, CORS and ground control points",
        "3D reconstruction, point-cloud comparison and uncertainty-aware change detection",
        "UAV-based monitoring of dams, embankments and cultural heritage"
      ],
      interestsLabelTh: "หัวข้อวิจัยที่สนใจอยู่ในปัจจุบัน ได้แก่",
      interestsTh: [
        "การกำหนดตำแหน่งความแม่นยำสูงสำหรับ UAV ด้วย RTK/PPK, CORS และจุดควบคุมภาคพื้นดิน",
        "การสร้างแบบจำลองสามมิติและการติดตามการเปลี่ยนแปลงจาก Point Cloud โดยคำนึงถึงความไม่แน่นอน",
        "การตรวจสอบโครงสร้างพื้นฐานและโบราณสถานด้วย UAV Photogrammetry"
      ],
      interests: [
        "UAV Photogrammetry",
        "GNSS RTK/PPK & CORS",
        "3D Point-Cloud Analysis",
        "Infrastructure & Heritage Monitoring"
      ],
      inFutureLabelEn: "In the Future",
      inFutureEn:
        "To develop repeatable multi-epoch monitoring workflows by integrating UAV photogrammetry and UAV-LiDAR with robust GNSS georeferencing. Future research will quantify changes and evaluate advanced positioning methods to explore automated 3D monitoring for infrastructure maintenance and heritage conservation.",
      afterGradLabelEn: "After Graduation",
      afterGradEn:
        "The research is expected to plan and conduct UAV/GNSS surveys, create validated 3D geospatial products, assess measurement uncertainty and interpret monitoring results for responsible decision-making. These competencies support professional surveying, infrastructure management, heritage conservation and advanced research.",
      inFutureLabelTh: "ในอนาคต:",
      inFutureTh:
        "พัฒนาการติดตามหลายช่วงเวลาด้วย UAV Photogrammetry และ UAV-LiDAR ร่วมกับการสำรวจด้วยดาวเทียม GNSS แบบความแม่นยำสูง เช่น PPP/PPP-AR เพื่อศึกษาความสามารถในการตรวจจับการเปลี่ยนแปลงและการวิเคราะห์สามมิติแบบกึ่งอัตโนมัติ เพื่อสนับสนุนงานบำรุงรักษาและอนุรักษ์อย่างยั่งยืน",
      afterGradLabelTh: "เมื่อสิ้นสุดการศึกษา:",
      afterGradTh:
        "คาดหวังให้การศึกษาสามารถวางแผนการสำรวจด้วย UAV/GNSS เพื่อสร้างแบบจำลองสามมิติ ประเมินความถูกต้องและความไม่แน่นอน รวมทั้งนำผลไปใช้ด้านวิศวกรรมสำรวจ โครงสร้างพื้นฐาน การอนุรักษ์โบราณสถาน และงานวิจัย",
      figures: [
        {
          url: "img/polpreecha-fig1.jpg",
          captionEn: "3D model heritage obtained from RTK-UAV",
          captionTh: "แบบจำลองสามมิติโบราณสถานจาก RTK-UAV"
        },
        {
          url: "img/polpreecha-fig2.jpg?v=6",
          captionEn: "M3C2 slope deformation of Dam monitoring",
          captionTh: "ผลการเปรียบเทียบผิวทางลาดเขื่อนด้วย M3C2"
        }
      ],
      pubsLabelEn: "Selected Publications",
      publicationsEn: [
        "Chidburee, P., Nusit, K., Wisitthikhet, T., Sathongmaeo, T., Thongkhumyat, S., & Khueanmanee, P. (2022). The application of UAV photogrammetry to monitor the deformation of side-slope protection: A case study of Khwae Noi Bamrungdan Dam, Phitsanulok Province. In Proc. 27th National Convention on Civil Engineering (pp. SGI11-1–SGI11-7). EIT.",
        "Chidburee, P., Nusit, K., Wongphakdi, N., Homniam, P., & Charoenphon, C. (2024). Accuracy assessment of RTK/PPK UAV photogrammetric approach combined with national CORS network data in Thailand. In Proc. 29th National Convention on Civil Engineering (pp. SGI16-1–SGI016-7). EIT.",
        "Phimsena, C., Phuengkaeo, N., Unchanam, N., Kaeophunsuk, P., & Chidburee, P. (2026). An application of Real-Time Kinematic Unmanned Aerial Vehicle (RTK-UAV) surveying for structural conservation of cultural heritage: A case study of Wat Phra Si Rattana Mahathat Woramahawihan in Phitsanulok province. In Proc. 31st National Convention on Civil Engineering. EIT."
      ],
      pubsLabelTh: "ผลงานตีพิมพ์วิชาการที่คัดสรร (Selected Publications)",
      publicationsTh: [
        "Chidburee, P., Nusit, K., Wisitthikhet, T., Sathongmaeo, T., Thongkhumyat, S., & Khueanmanee, P. (2022). The application of UAV photogrammetry to monitor the deformation of side-slope protection: A case study of Khwae Noi Bamrungdan Dam, Phitsanulok Province. In Proc. 27th National Convention on Civil Engineering (pp. SGI11-1–SGI11-7). EIT.",
        "Chidburee, P., Nusit, K., Wongphakdi, N., Homniam, P., & Charoenphon, C. (2024). Accuracy assessment of RTK/PPK UAV photogrammetric approach combined with national CORS network data in Thailand. In Proc. 29th National Convention on Civil Engineering (pp. SGI16-1–SGI016-7). EIT.",
        "Phimsena, C., Phuengkaeo, N., Unchanam, N., Kaeophunsuk, P., & Chidburee, P. (2026). An application of Real-Time Kinematic Unmanned Aerial Vehicle (RTK-UAV) surveying for structural conservation of cultural heritage: A case study of Wat Phra Si Rattana Mahathat Woramahawihan in Phitsanulok province. In Proc. 31st National Convention on Civil Engineering. EIT."
      ],
      publications: [
        "Chidburee, P., Nusit, K., Wisitthikhet, T., Sathongmaeo, T., Thongkhumyat, S., & Khueanmanee, P. (2022). The application of UAV photogrammetry to monitor the deformation of side-slope protection: A case study of Khwae Noi Bamrungdan Dam, Phitsanulok Province. In Proc. 27th National Convention on Civil Engineering (pp. SGI11-1–SGI11-7). EIT.",
        "Chidburee, P., Nusit, K., Wongphakdi, N., Homniam, P., & Charoenphon, C. (2024). Accuracy assessment of RTK/PPK UAV photogrammetric approach combined with national CORS network data in Thailand. In Proc. 29th National Convention on Civil Engineering (pp. SGI16-1–SGI016-7). EIT.",
        "Phimsena, C., Phuengkaeo, N., Unchanam, N., Kaeophunsuk, P., & Chidburee, P. (2026). An application of Real-Time Kinematic Unmanned Aerial Vehicle (RTK-UAV) surveying for structural conservation of cultural heritage: A case study of Wat Phra Si Rattana Mahathat Woramahawihan in Phitsanulok province. In Proc. 31st National Convention on Civil Engineering. EIT."
      ],
      research: {
        code: "03",
        title: "การติดตามโครงสร้างพื้นฐานด้วยอากาศยานไร้คนขับ",
        titleEn:
          "UAV Surveying for Infrastructure and Cultural Heritage Monitoring",
        abstract:
          "การสำรวจด้วยภาพถ่ายจากอากาศยานไร้คนขับ (UAV Photogrammetry) ร่วมกับการสำรวจด้วยดาวเทียม GNSS แบบความแม่นยำสูง (RTK/PPK, CORS) เพื่อสร้างแบบจำลองสามมิติและติดตามการเปลี่ยนแปลงของโครงสร้างพื้นฐานและโบราณสถาน",
        methodology:
          "บูรณาการ UAV Photogrammetry, GNSS RTK/PPK, โครงข่าย CORS และการเปรียบเทียบ Point Cloud ด้วย M3C2 พร้อมวิเคราะห์ความคลาดเคลื่อนและความไม่แน่นอน",
        findings:
          "ได้แบบจำลองสามมิติความถูกต้องสูงสำหรับติดตามการเปลี่ยนรูปของทางลาดเขื่อนและการอนุรักษ์โบราณสถาน",
        figureCaption:
          "แบบจำลองสามมิติโบราณสถานจาก RTK-UAV และผลการเปรียบเทียบผิวทางลาดเขื่อนด้วย M3C2",
        figureUrl: "img/polpreecha-fig1.jpg",
        publication:
          "Chidburee, P. et al., Proc. 27th & 29th NCCE (2022, 2024); Phimsena, C. & Chidburee, P., Proc. 31st NCCE (2026).",
        link: "https://www.eng.nu.ac.th"
      }
    },
    {
      id: "res-2",
      deptCode: "04",
      deptNameEn: "Department of Mechanical Engineering",
      majorEn: "Major: Mechanical Engineering",
      deptNameTh: "ภาควิชาวิศวกรรมเครื่องกล",
      majorTh: "สาขาวิชาวิศวกรรมเครื่องกล",
      academicTitle: "ผศ.",
      fullName: "ศิษฐ์ภัณฑ์ แคนลา",
      fullNameEn: "Asst. Prof. Sitphan Kanla",
      email: "sitphank@nu.ac.th",
      portraitText: "Portrait\n3 : 4",
      portraitUrl: "img/sitphan-portrait.jpg",
      topicEn: "Sustainable Energy and Environmental Innovation",
      topicTh: "เทคโนโลยีและนวัตกรรมด้านพลังงานและสิ่งแวดล้อมอย่างยั่งยืน",
      biographyEn:
        "Energy costs for buildings and factories stem from the consumption of electricity and thermal energy by system such as air conditioning, refrigeration, heating and motor. Consequently, effective management and the integration of energy conservation technologies have become highly essential today.",
      biography:
        "ต้นทุนด้านพลังงานของอาคาร/โรงงานเกิดจากการใช้พลังงานไฟฟ้าและความร้อนของระบบปรับอากาศ ระบบทำความเย็น ระบบทำความร้อน ระบบต้นกำลัง ดังนั้นการบริหารจัดการและนำเทคโนโลยีมาช่วยในการอนุรักษ์พลังงานจึงมีความจำเป็นอย่างมากในปัจจุบัน",
      interestsLabelEn: "Field of interest:",
      interestsEn: [
        "Air conditioning and refrigeration system.",
        "Energy management and conservation.",
        "Indoor air quality and cleanroom technology.",
        "Thermal design system."
      ],
      interestsLabelTh: "หัวข้อวิจัยที่สนใจ:",
      interestsTh: [
        "การปรับอากาศและการทำความเย็น",
        "การจัดการและอนุรักษ์พลังงาน",
        "คุณภาพอากาศภายในอาคารและเทคโนโลยีห้องสะอาด",
        "การออกแบบระบบทางความร้อน"
      ],
      interests: [
        "Air Conditioning & Refrigeration",
        "Energy Conservation",
        "Indoor Air Quality & Cleanroom",
        "Thermal Design System"
      ],
      inFutureLabelEn: "In the future:",
      inFutureEn:
        "Study and research to identify technologies and innovations for enhancing the energy efficiency of machinery and equipment in buildings and factories.",
      afterGradLabelEn: "After Graduation",
      afterGradEn:
        "The expectation is that these developing technologies and innovations will enable entrepreneurs to achieve sustainable reductions in their energy costs.",
      inFutureLabelTh: "การประยุกต์ใช้ในอนาคต:",
      inFutureTh:
        "ศึกษาและวิจัยเพื่อหาเทคโนโลยี/นวัตกรรมในการเพิ่มประสิทธิภาพการใช้พลังงานของเครื่องจักรและอุปกรณ์ต่างๆ ในอาคาร/โรงงาน",
      afterGradLabelTh: "หลังจบการศึกษา:",
      afterGradTh:
        "คาดหวังว่าเทคโนโลยีและนวัตกรรมที่พัฒนาขึ้นจะช่วยให้ผู้ประกอบการสามารถลดต้นทุนด้านพลังงานอย่างยั่งยืน",
      figures: [
        {
          url: "img/sitphan-fig1.jpg",
          captionEn: "Presenting student project to HRH Princess Soamsawali",
          captionTh: "ถวายรายงานโครงงานนิสิต พระเจ้าวรวงศ์เธอ พระองค์เจ้าโสมสวลีฯ"
        },
        {
          url: "img/sitphan-fig2.jpg",
          captionEn: "1st Place Winner — YORK Cool Engineering Contest",
          captionTh: "รางวัลชนะเลิศอันดับ 1 โครงการ YORK Cool Engineering Contest"
        },
        {
          url: "img/sitphan-fig3.jpg",
          captionEn: "Outstanding Energy Conservation Invention Award (PTT)",
          captionTh: "รางวัลสิ่งประดิษฐ์ด้านการอนุรักษ์พลังงานดีเด่น โครงการ ปตท. ปี 2550"
        }
      ],
      pubsLabelEn: "Honors & Outstanding Achievements",
      publicationsEn: [
        "1st Place Winner in the 'YORK Cool Engineering Contest' by Johnson Controls — Engineering design competition, Faculty of Engineering, Naresuan University.",
        "Outstanding Energy Conservation Invention Award (Heat Dissipation Enhancer for Air-Conditioner Condensing Units) — PTT Sustainable Energy Inventor Project (2007)."
      ],
      pubsLabelTh: "รางวัลและเกียรติประวัติผลงานนวัตกรรมเด่น",
      publicationsTh: [
        "รางวัลชนะเลิศอันดับหนึ่ง การประกวดแผนงานทางด้านวิศวกรรม โครงการ 'YORK Cool Engineering Contest' โดย จอห์นสัน คอนโทรล คณะวิศวกรรมศาสตร์ มหาวิทยาลัยนเรศวร",
        "รางวัลสิ่งประดิษฐ์ด้านการอนุรักษ์พลังงานดีเด่น (อุปกรณ์ช่วยระบายความร้อนในชุดคอยล์ร้อนของเครื่องปรับอากาศ) โครงการ ปตท. ร่วมสานฝันนักประดิษฐ์ใช้พลังงานอย่างยั่งยืน ปี 2550"
      ],
      publications: [
        "รางวัลชนะเลิศอันดับหนึ่ง การประกวดแผนงานทางด้านวิศวกรรม โครงการ YORK Cool Engineering Contest คณะวิศวกรรมศาสตร์ มหาวิทยาลัยนเรศวร",
        "รางวัลสิ่งประดิษฐ์ด้านการอนุรักษ์พลังงานดีเด่น (อุปกรณ์ช่วยระบายความร้อนในชุดคอยล์ร้อนของเครื่องปรับอากาศ) โครงการ ปตท. ร่วมสานฝันนักประดิษฐ์ใช้พลังงานอย่างยั่งยืน"
      ],
      research: {
        code: "04",
        title: "เทคโนโลยีและนวัตกรรมด้านพลังงานและสิ่งแวดล้อมอย่างยั่งยืน",
        titleEn: "Sustainable Energy and Environmental Innovation",
        abstract:
          "ต้นทุนด้านพลังงานของอาคารและโรงงานเกิดจากการใช้พลังงานไฟฟ้าและความร้อนของระบบปรับอากาศ ระบบทำความเย็น ระบบทำความร้อน และระบบต้นกำลัง งานวิจัยนี้จึงมุ่งเน้นการบริหารจัดการและบูรณาการเทคโนโลยีอนุรักษ์พลังงาน",
        methodology:
          "ศึกษาและวิจัยด้านระบบปรับอากาศและทำความเย็น การจัดการและอนุรักษ์พลังงาน คุณภาพอากาศภายในอาคารและเทคโนโลยีห้องสะอาด ตลอดจนการออกแบบระบบทางความร้อน",
        findings:
          "ได้เทคโนโลยีและนวัตกรรมในการเพิ่มประสิทธิภาพการใช้พลังงานของเครื่องจักรและอุปกรณ์ต่างๆ ในอาคารและโรงงาน ช่วยให้ผู้ประกอบการลดต้นทุนด้านพลังงานได้อย่างยั่งยืน",
        figureCaption:
          "Fig. 2 — ผลงานนวัตกรรมและรางวัลชนะเลิศด้านการอนุรักษ์พลังงาน",
        figureUrl: "img/sitphan-fig2.jpg",
        publication:
          "YORK Cool Engineering Contest (1st Prize) & PTT Sustainable Energy Invention Award, Faculty of Engineering, Naresuan University.",
        link: "https://www.eng.nu.ac.th"
      }
    },
    {
      id: "res-5",
      discipline: "civil",
      deptCode: "05",
      deptNameEn: "Department of Civil Engineering",
      majorEn: "Major: Environmental Engineering",
      deptNameTh: "ภาควิชาวิศวกรรมโยธา",
      majorTh: "สาขาวิชาวิศวกรรมสิ่งแวดล้อม",
      academicTitle: "ดร.",
      fullName: "วิรินทร์ กิตติธรรมวงศ์",
      fullNameEn: "Dr. Virin Kittithammavong",
      email: "",
      portraitText: "Portrait\n3 : 4",
      portraitUrl: "img/virin-portrait.jpg",
      topicEn: "Surfactant phase behavior and soil remediation",
      topicTh: "พฤติกรรมของสารลดแรงตึงผิวและการฟื้นฟูสภาพดิน",
      biographyEn:
        "Oil-contaminated soil is a significant environmental concern, particularly in areas affected by petroleum and industrial activities. Surfactants are commonly used in soil remediation to reduce interfacial tension, promote oil mobilization, and facilitate its removal from soil. Understanding how molecular structure, oil composition, and salinity affect surfactant–oil–water phase behavior is essential for clarifying remediation mechanisms, optimizing treatment conditions, and bridging laboratory research with practical field applications.",
      biography:
        "ดินปนเปื้อนน้ำมันเป็นปัญหาสิ่งแวดล้อมที่สำคัญ โดยเฉพาะในพื้นที่ที่ได้รับผลกระทบจากปิโตรเลียมและกิจกรรมทางอุตสาหกรรม สารลดแรงตึงผิวถูกนำมาใช้ในการฟื้นฟูดินเพื่อลดแรงตึงผิวระหว่างเฟส ส่งเสริมการเคลื่อนตัวและการกำจัดน้ำมันออกจากดิน ทั้งนี้ประสิทธิภาพขึ้นอยู่กับโครงสร้างโมเลกุล องค์ประกอบน้ำมัน และความเค็มที่ส่งผลต่อพฤติกรรมเฟสสารลดแรงตึงผิว–น้ำมัน–น้ำ การเข้าใจปฏิสัมพันธ์เหล่านี้ช่วยชี้แจงกลไกการฟื้นฟู เพิ่มประสิทธิภาพการบำบัด และเชื่อมโยงงานวิจัยสู่การใช้งานจริงในภาคสนาม",
      interestsLabelEn: "My recent research interests are",
      interestsEn: [
        "Surfactant and microemulsion",
        "Microplastic",
        "Municipal and Industrial waste",
        "Material flow analysis (MFA), Life cycle assessment (LCA)"
      ],
      interestsLabelTh: "หัวข้อวิจัยที่สนใจอยู่ในปัจจุบัน ได้แก่",
      interestsTh: [
        "สารลดแรงตึงผิวและไมโครอิมัลชั่น",
        "ไมโครพลาสติก",
        "ของเสีย/ขยะชุมชน และของเสียอุตสาหกรรม",
        "การประเมินวัฏจักรชีวิตของผลิตภัณฑ์ กระบวนการ และองค์กร (LCA/MFA)"
      ],
      interests: [
        "Surfactant & Microemulsion",
        "Microplastic",
        "Municipal & Industrial Waste",
        "Material Flow Analysis & LCA"
      ],
      inFutureLabelEn: "In the Future",
      inFutureEn:
        "In future work, I plan to integrate surfactant science with MFA and LCA to assess the environmental impacts of surfactant-based soil washing and compare treatment scenarios, alongside continued research on municipal and industrial waste management and microplastics.",
      afterGradLabelEn: "After Graduation",
      afterGradEn:
        "Knowledge gained from this study provides a foundation for applying surfactant technology across industries—including pharmaceuticals, petroleum, petrochemicals, food, detergents, and environmental remediation—supporting more effective and sustainable applications.",
      inFutureLabelTh: "ในอนาคต",
      inFutureTh:
        "วางแผนบูรณาการวิทยาศาสตร์เกี่ยวกับสารลดแรงตึงผิวเข้ากับ MFA และ LCA เพื่อประเมินผลกระทบสิ่งแวดล้อมของการล้างดินด้วยสารลดแรงตึงผิว เปรียบเทียบแนวทางการบำบัด พร้อมวิจัยเพิ่มเติมด้านการจัดการขยะมูลฝอย ขยะอุตสาหกรรม และไมโครพลาสติก",
      afterGradLabelTh: "เมื่อสิ้นสุดการศึกษา",
      afterGradTh:
        "องค์ความรู้ที่ได้เป็นรากฐานสำหรับการประยุกต์ใช้เทคโนโลยีสารลดแรงตึงผิวในหลากหลายอุตสาหกรรม ได้แก่ ยา ปิโตรเลียม ปิโตรเคมี อาหาร ผงซักฟอก และการฟื้นฟูสิ่งแวดล้อม พร้อมสนับสนุนการใช้งานที่มีประสิทธิภาพและยั่งยืนยิ่งขึ้น",
      figures: [
        {
          url: "img/virin-fig1.png",
          captionEn: "SDHS structure (anionic surfactant) (Kittithammavong, 2024)",
          captionTh: "โครงสร้างของ SDHS (สารลดแรงตึงผิวประจุลบ) (Kittithammavong, 2024)"
        },
        {
          url: "img/virin-fig2.png",
          captionEn:
            "Equilibrium interfacial tension (IFT) versus salinity of SDHS (Kittithammavong, 2020)",
          captionTh:
            "ความสัมพันธ์ระหว่างแรงตึงผิวสมดุล (IFT) กับความเค็มของระบบ SDHS (Kittithammavong, 2020)"
        }
      ],
      pubsLabelEn: "Selected Publications",
      publicationsEn: [
        "Microplastics",
        "Analytical and Bioanalytical Chemistry",
        "Applied Sciences",
        "Journal of Surfactants and Detergents (Surface and detergent)",
        "International Journal of Environmental Science and Technology"
      ],
      pubsLabelTh: "วารสารวิชาการที่คัดเลือก (Selected Publications)",
      publicationsTh: [
        "Microplastics",
        "Analytical and Bioanalytical Chemistry",
        "Applied Sciences",
        "Surface and detergent",
        "International Journal of Environmental Science and Technology"
      ],
      publications: [
        "Microplastics",
        "Analytical and Bioanalytical Chemistry",
        "Applied Sciences",
        "Surface and detergent",
        "International Journal of Environmental Science and Technology"
      ]
    },
    {
      id: "res-6",
      discipline: "industrial",
      deptCode: "06",
      deptNameEn: "Department of Industrial Engineering",
      majorEn: "Major: Industrial Engineering",
      deptNameTh: "ภาควิชาวิศวกรรมอุตสาหการ",
      majorTh: "สาขาวิชาวิศวกรรมอุตสาหการ",
      academicTitle: "ผศ. ดร.",
      fullName: "โพธิ์งาม สมกุล",
      fullNameEn: "Asst. Prof. Dr. Po-ngarm Somkun",
      email: "",
      portraitText: "Portrait\n3 : 4",
      portraitUrl: "img/pongarm-portrait.jpg",
      topicEn:
        "Mathematical and Spreadsheet Modeling for Logistics and Supply Chain Management",
      topicTh:
        "การจำลองเหตุการณ์สำหรับโซ่อุปทานด้วยตัวแบบทางคณิตศาสตร์และแผ่นตารางทำการ",
      biographyEn:
        "Mathematical models describe the complex behavior of a real system. Decision-making about supply chains can be based on quantified results from mathematical and spreadsheet models. Their application to food loss and food waste problems in supply chains helps achieve Sustainable Development Goals (SDGs), especially SDG 12.3.",
      biography:
        "ตัวแบบทางคณิตศาสตร์ใช้ในการอธิบายพฤติกรรมที่ซับซ้อนในระบบการทำงานจริง สามารถใช้ผลลัพธ์เชิงปริมาณในการตัดสินใจด้านการจัดการโซ่อุปทานได้ การนำตัวแบบทางคณิตศาสตร์และการจำลองบนตารางทำการไปประยุกต์แก้ปัญหาการสูญเสียอาหารและอาหารที่ถูกทิ้งในโซ่อุปทานอาหารจะช่วยให้บรรลุเป้าหมายการพัฒนาอย่างยั่งยืน (SDGs) โดยเฉพาะข้อที่ 12.3",
      interestsLabelEn: "My recent research interests are",
      interestsEn: [
        "Stochastic modeling in logistics and supply chain management",
        "Food loss and food waste prevention",
        "Inventory policy and Lateral transshipment"
      ],
      interestsLabelTh: "หัวข้อวิจัยที่สนใจ:",
      interestsTh: [
        "การจำลองเชิงเฟ้นสุ่มในการจัดการโลจิสติกส์และโซ่อุปทาน",
        "การป้องกันการสูญเสียอาหารและอาหารที่ถูกทิ้ง",
        "การกำหนดนโยบายเติมเต็มพัสดุคงคลัง และการถ่ายเทด้านข้าง"
      ],
      interests: [
        "Stochastic Modeling in Supply Chains",
        "Food Loss & Waste Prevention",
        "Inventory Policy & Transshipment"
      ],
      inFutureLabelEn: "In the future",
      inFutureEn:
        "All countries and sectors need to achieve SDGs by 2030. Mathematical and spreadsheet modeling in this area combines industrial engineering skills and sustainability concepts, offering vast opportunities to address SDG-related supply chain problems.",
      afterGradLabelEn: "After Graduation",
      afterGradEn:
        "This research area equips graduates with techniques to analyze and improve supply chains' efficiency and sustainability using mathematical modeling, spreadsheet modeling, stochastic modeling, inventory replenishment policy, and statistical analysis.",
      inFutureLabelTh: "การประยุกต์ใช้ในอนาคต",
      inFutureTh:
        "เป้าหมาย SDGs ตั้งเป้าให้สำเร็จภายในปี ค.ศ. 2030 การจำลองด้วยตัวแบบทางคณิตศาสตร์ผสานทักษะวิศวกรรมอุตสาหการกับแนวคิดความยั่งยืน จึงมีโอกาสมากมายในการแก้ปัญหาโซ่อุปทานที่เกี่ยวข้องกับ SDGs",
      afterGradLabelTh: "เมื่อสิ้นสุดการศึกษา",
      afterGradTh:
        "ผู้สำเร็จการศึกษาจะมีทักษะในการวิเคราะห์และปรับปรุงประสิทธิภาพโซ่อุปทานและความยั่งยืน ได้แก่ ตัวแบบทางคณิตศาสตร์ แผ่นตารางทำการ การจำลองเชิงเฟ้นสุ่ม นโยบายพัสดุคงคลัง และการวิเคราะห์เชิงสถิติ",
      figures: [
        {
          url: "img/pongarm-fig1.png",
          captionEn:
            "Fig. 1 Conceptual model of food waste quantification in a food supply chain",
          captionTh:
            "รูปที่ 1 แบบจำลองการประเมินการสูญเสียอาหารในโซ่อุปทานอาหาร"
        },
        {
          url: "img/pongarm-fig2.png",
          captionEn:
            "Fig. 2 Inventory replenishment policy and lateral transshipment model",
          captionTh:
            "รูปที่ 2 รูปแบบนโยบายการเติมเต็มพัสดุคงคลังและการถ่ายเทด้านข้าง"
        }
      ],
      pubsLabelEn: "Selected Publications",
      publicationsEn: [
        "Thongtab, S., Kumar, S., & Somkun, P. (2026). Food Loss Analysis in the Upstream Supply Chain of Large Broilers. Cleaner Logistics and Supply Chain, 21, 100376.",
        "Donjuk, C., Settasuk, J., & Somkun, P. (2025). Regular and Urgent Ordering with Lateral Transshipment in a Distribution Network with Stochastic Pre-ordered and Peddling Demands. The Asian Journal of Shipping and Logistics, 41(1), 61–74.",
        "Somkun, P., Bamrungjaeng, C., Jubkeaw, P., & Pethai, S. (2024). Food Waste Reduction Using Simulation Modeling: A Case Study of Bakery Products in a Downstream Supply Chain. GMSARN International Journal, 18(2), 240–251.",
        "Somkun, P. N. (2020). Mathematical modeling approach applied to food waste reduction at retailer and consumer levels in food supply chain. In Food Industry Wastes (pp. 409–429). Elsevier."
      ],
      pubsLabelTh: "ผลงานตีพิมพ์ที่คัดเลือก",
      publicationsTh: [
        "Thongtab, S., Kumar, S., & Somkun, P. (2026). Food Loss Analysis in the Upstream Supply Chain of Large Broilers. Cleaner Logistics and Supply Chain, 21, 100376.",
        "Donjuk, C., Settasuk, J., & Somkun, P. (2025). Regular and Urgent Ordering with Lateral Transshipment in a Distribution Network with Stochastic Pre-ordered and Peddling Demands. The Asian Journal of Shipping and Logistics, 41(1), 61–74.",
        "Somkun, P., Bamrungjaeng, C., Jubkeaw, P., & Pethai, S. (2024). Food Waste Reduction Using Simulation Modeling: A Case Study of Bakery Products in a Downstream Supply Chain. GMSARN International Journal, 18(2), 240–251.",
        "Somkun, P. N. (2020). Mathematical modeling approach applied to food waste reduction at retailer and consumer levels in food supply chain. In Food Industry Wastes (pp. 409–429). Elsevier."
      ],
      publications: [
        "Thongtab, S., Kumar, S., & Somkun, P. (2026). Cleaner Logistics and Supply Chain, 21, 100376.",
        "Donjuk, C., Settasuk, J., & Somkun, P. (2025). The Asian Journal of Shipping and Logistics, 41(1), 61–74.",
        "Somkun, P., Bamrungjaeng, C., Jubkeaw, P., & Pethai, S. (2024). GMSARN International Journal, 18(2), 240–251.",
        "Somkun, P. N. (2020). Food Industry Wastes, pp. 409–429. Elsevier."
      ]
    },
    {
      id: "res-7",
      discipline: "industrial",
      deptCode: "07",
      deptNameEn: "Department of Industrial Engineering",
      majorEn: "Major: Chemical Engineering",
      deptNameTh: "ภาควิชาวิศวกรรมอุตสาหการ",
      majorTh: "สาขาวิชาวิศวกรรมเคมี",
      academicTitle: "ผศ. ดร.",
      fullName: "วัชรพงษ์ ขาวดี",
      fullNameEn: "Asst. Prof. Dr. Watcharapong Khaodee",
      email: "",
      portraitText: "Portrait\n3 : 4",
      portraitUrl: "img/watcharapong-portrait.jpg",
      topicEn:
        "Biodiesel production, Catalyst development, Adsorption, Chemical process simulation",
      topicTh:
        "การผลิตไบโอดีเซล, การพัฒนาตัวเร่งปฏิกิริยา, การดูดซับ, การจำลองกระบวนการทางวิศวกรรมเคมี",
      biographyEn:
        "Asst. Prof. Dr. Watcharapong Khaodee focuses on biodiesel production from waste cooking oil, heterogeneous catalyst synthesis from waste materials such as eggshells and rice husk ash, activated carbon adsorption from agricultural wastes, and chemical/biorefinery process simulation.",
      biography:
        "ผู้ช่วยศาสตราจารย์ ดร.วัชรพงษ์ ขาวดี มุ่งเน้นการวิจัยด้านการผลิตไบโอดีเซลจากน้ำมันปรุงอาหารใช้แล้ว การพัฒนาตัวเร่งปฏิกิริยาจากวัสดุเหลือทิ้ง เช่น เปลือกไข่และขี้เถ้าแกลบ การดูดซับด้วยถ่านกัมมันต์จากชีวมวลการเกษตร และการจำลองกระบวนการทางวิศวกรรมเคมี",
      interestsLabelEn: "Field of interest:",
      interestsEn: [
        "Biodiesel production from waste oil & catalyst development",
        "Adsorption & activated carbon adsorbents from agricultural waste",
        "Chemical and biorefinery process simulation"
      ],
      interestsLabelTh: "หัวข้อวิจัยที่สนใจ:",
      interestsTh: [
        "การผลิตไบโอดีเซลจากน้ำมันที่ใช้งานแล้วและการพัฒนาตัวเร่งปฏิกิริยา",
        "การดูดซับและตัวดูดซับจากของเหลือทิ้งทางการเกษตร เช่น ถ่านกัมมันต์",
        "การจำลองกระบวนการทางวิศวกรรมเคมี"
      ],
      interests: [
        "Biodiesel & Catalyst Development",
        "Agricultural-Waste Adsorption",
        "Chemical Process Simulation"
      ],
      inFutureLabelEn: "In the Future",
      inFutureEn:
        "Developing bifunctional catalysts from waste materials (eggshells, rice husk ash) for waste-cooking-oil biodiesel, advancing biomass-derived activated carbon for batch and continuous adsorption, and simulating biorefinery processes for Thailand's needs.",
      afterGradLabelEn: "After Graduation",
      afterGradEn:
        "Students can apply chemical engineering principles to synthesize low-cost catalysts and adsorbents from readily available raw materials for biodiesel production and gas/liquid adsorption, alongside chemical process simulation.",
      inFutureLabelTh: "การประยุกต์ใช้ในอนาคต:",
      inFutureTh:
        "พัฒนาตัวเร่งปฏิกิริยาแบบสองหน้าที่จากวัสดุเหลือทิ้ง เช่น เปลือกไข่และขี้เถ้าแกลบ เพื่อผลิตไบโอดีเซล พัฒนาถ่านกัมมันต์จากชีวมวลสำหรับการดูดซับแบบกะและต่อเนื่อง รวมถึงจำลองกระบวนการกลั่นทางเคมีชีวภาพ",
      afterGradLabelTh: "เมื่อสิ้นสุดการศึกษา:",
      afterGradTh:
        "นิสิตสามารถสังเคราะห์ตัวเร่งปฏิกิริยาหรือตัวดูดซับจากวัตถุดิบราคาถูกสำหรับผลิตไบโอดีเซลและการดูดซับทั้งในสภาวะก๊าซและของเหลว พร้อมประยุกต์ใช้การจำลองกระบวนการทางวิศวกรรมเคมีได้",
      figures: [
        {
          url: "img/watcharapong-fig1.png",
          captionEn:
            "Fig. 1 Thermodynamics adsorption of methylene blue (MB), methyl orange (MO) and p-nitrophenol (PN) by activated carbon from coffee grounds",
          captionTh:
            "รูปที่ 1 อุณหพลศาสตร์ของการดูดซับเมทิลลีนบลู เมทิลออเรนจ์ และพาราไนโตรฟีนอลด้วยถ่านกัมมันต์จากกากกาแฟ"
        },
        {
          url: "img/watcharapong-fig2.png",
          captionEn: "Fig. 2 Adsorption removal of MO mixed with PN",
          captionTh:
            "รูปที่ 2 ร้อยละการดูดซับของสารผสมระหว่างเมทิลออเรนจ์และพาราไนโตรฟีนอล"
        },
        {
          url: "img/watcharapong-fig3.png",
          captionEn:
            "Fig. 3 Biodiesel production from waste cooking oil via Na/SiO2 catalyst",
          captionTh:
            "รูปที่ 3 การผลิตไบโอดีเซลจากน้ำมันที่ใช้งานแล้วด้วยตัวเร่งปฏิกิริยาโซเดียมบนตัวรองรับซิลิกา"
        }
      ],
      pubsLabelEn: "Selected Publications",
      publicationsEn: [
        "Netiworaruksa, B., Singsang, W., Rodbumrung, A., Khaodee, W., Chantam, P., & Netiworaruksa, B. (2024). Oil Sorbent Mate Materials from Natural Rubber Foam and Biomass Fiber Composites. Springer Proceedings in Materials, 60, 15–25.",
        "Mens-Appamana, W., Yencham, J., Putivisutisak, S., Bumphenkiattikul, P., Vongachariya, A., Khaodee, W., ... Assabumrungrat, S. (2022). Investigation of mass transfer and hydrodynamics of liquid-liquid extraction in spinning disc reactor by CFD simulation. Results in Engineering, 16, 100798.",
        "Yencham, J., Appamana, W., Putivisutisak, S., Assabumrungrat, S., & Khaodee, W. (2021). Liquid-Liquid Extraction of Immiscible Fluids in Spinning Disc Extractor. Proc. 30th TIChE Conference (TIChE2021), 975–983.",
        "Khaodee, W., Jiwanuruk, T., Ountaksinkul, K., Charojrochkul, S., Charoensuk, J., Wongsakulphasatch, S., & Assabumrungrat, S. (2020). Compact Heat Integrated Reactor System of Steam Reformer, Shift Reactor and Combustor for Hydrogen Production from Ethanol. Processes, 8(6), 708."
      ],
      pubsLabelTh: "ผลงานตีพิมพ์ที่คัดเลือก",
      publicationsTh: [
        "Netiworaruksa, B. et al. (2024). Oil Sorbent Mate Materials from Natural Rubber Foam and Biomass Fiber Composites. Springer Proceedings in Materials, 60, 15–25.",
        "Mens-Appamana, W., Yencham, J., ... Khaodee, W. et al. (2022). Liquid-liquid extraction in spinning disc reactor by CFD simulation. Results in Engineering, 16, 100798.",
        "Yencham, J., Appamana, W., Putivisutisak, S., Assabumrungrat, S., & Khaodee, W. (2021). Liquid-Liquid Extraction of Immiscible Fluids in Spinning Disc Extractor. Proc. 30th TIChE Conference, 975–983.",
        "Khaodee, W. et al. (2020). Compact Heat Integrated Reactor System ... for Hydrogen Production from Ethanol. Processes, 8(6), 708."
      ],
      publications: [
        "Netiworaruksa, B. et al. (2024). Springer Proceedings in Materials, 60, 15–25.",
        "Mens-Appamana, W., ... Khaodee, W. et al. (2022). Results in Engineering, 16, 100798.",
        "Yencham, J., ... & Khaodee, W. (2021). Proc. 30th TIChE Conference, 975–983.",
        "Khaodee, W. et al. (2020). Processes, 8(6), 708."
      ]
    },
    {
      id: "res-8",
      discipline: "industrial",
      deptCode: "08",
      deptNameEn: "Department of Industrial Engineering",
      majorEn: "Major: Materials Engineering",
      deptNameTh: "ภาควิชาวิศวกรรมอุตสาหการ",
      majorTh: "สาขาวิชาวิศวกรรมวัสดุ",
      academicTitle: "ดร.",
      fullName: "กิตติรัช วรคุฒ",
      fullNameEn: "Dr. Kittirat Worakhut",
      email: "",
      portraitText: "Portrait\n3 : 4",
      portraitUrl: "img/kittirat-portrait.jpg",
      topicEn:
        "Effect of Ti on Microstructure and Mechanical Properties in Gray Iron",
      topicTh:
        "อิทธิพลของไทเทเนียมต่อโครงสร้างจุลภาคและสมบัติเชิงกลในเหล็กหล่อเทา",
      biographyEn:
        "Cast iron is a widely used engineering material. To enhance its mechanical properties, alloying modification is an effective method to increase both hardness and strength. Specifically, titanium (Ti) refines the graphite flakes within the microstructure, consequently improving the overall strength of gray cast iron.",
      biography:
        "เหล็กหล่อเป็นวัสดุวิศวกรรมที่มีการใช้งานอย่างแพร่หลาย เพื่อยกระดับสมบัติเชิงกล การปรับปรุงส่วนผสมของธาตุผสมทางเคมีเป็นวิธีที่มีประสิทธิภาพในการเพิ่มทั้งความแข็งและความแข็งแรง โดยเฉพาะอย่างยิ่ง ไทเทเนียม (Ti) ช่วยปรับปรุงโครงสร้างแกรไฟต์ภายในโครงสร้างจุลภาคให้มีขนาดละเอียดขึ้น ส่งผลให้ความแข็งแรงโดยรวมของเหล็กหล่อเทาเพิ่มขึ้น",
      interestsLabelEn: "My recent research interests are",
      interestsEn: [
        "Thermal analysis system for the cast iron industry",
        "Development of titanium-alloyed gray cast iron",
        "Metal casting simulation"
      ],
      interestsLabelTh: "หัวข้อวิจัยที่สนใจอยู่ในปัจจุบัน ได้แก่",
      interestsTh: [
        "ระบบวิเคราะห์ทางความร้อนสำหรับอุตสาหกรรมผลิตเหล็กหล่อ",
        "การพัฒนาเหล็กหล่อเทาด้วยการเติมธาตุผสมไทเทเนียม",
        "การจำลองกระบวนการหล่อโลหะ"
      ],
      interests: [
        "Thermal Analysis for Cast Iron",
        "Titanium-Alloyed Gray Cast Iron",
        "Metal Casting Simulation"
      ],
      inFutureLabelEn: "In the Future",
      inFutureEn:
        "Cast iron remains a fundamental material for manufacturing automotive and machinery components, with ongoing research and development continuously translating into practical industrial production.",
      afterGradLabelEn: "After Graduation",
      afterGradEn:
        "Graduates specializing in this field can apply their knowledge and expertise to the Thai cast iron manufacturing industry, contributing to enhanced production processes and product quality.",
      inFutureLabelTh: "ในอนาคต:",
      inFutureTh:
        "เหล็กหล่อยังคงเป็นวัสดุพื้นฐานสำหรับการผลิตชิ้นส่วนยานยนต์และเครื่องจักร โดยมีการศึกษาวิจัยและพัฒนาอย่างต่อเนื่อง ซึ่งได้รับการต่อยอดสู่การผลิตจริงในภาคอุตสาหกรรม",
      afterGradLabelTh: "เมื่อสิ้นสุดการศึกษา:",
      afterGradTh:
        "นิสิตที่มีความเชี่ยวชาญเฉพาะด้านนี้สามารถนำความรู้และความเชี่ยวชาญไปประยุกต์ใช้กับอุตสาหกรรมการผลิตเหล็กหล่อในประเทศไทย ช่วยยกระดับกระบวนการผลิตและคุณภาพผลิตภัณฑ์ให้ดียิ่งขึ้น",
      figures: [
        {
          url: "img/kittirat-fig1.png",
          captionEn: "Thermal analysis system for cast iron",
          captionTh: "ระบบวิเคราะห์ทางความร้อนสำหรับเหล็กหล่อ"
        },
        {
          url: "img/kittirat-fig2.jpg",
          captionEn: "Microstructure of gray iron with 0.132% Ti after color etching",
          captionTh: "โครงสร้างจุลภาคของเหล็กหล่อเทา 0.132%Ti หลังผ่านการกัดขึ้นรอยย้อมสี"
        }
      ],
      pubsLabelEn: "Selected Publications",
      publicationsEn: [
        "Worakhut, K., Boonyarit, W., Mangmee, S., Hansongkhram, W., Soipornmat, T., Buahombura, P., & Boonmee, S. (2026). Effect of carbon equivalent on thermal conductivity of titanium-alloyed gray cast iron. Materials Science Forum, 1196, 195–200.",
        "Worakhut, K., & Boonmee, S. (2023). Microstructure and wear properties of titanium-alloyed gray irons. Journal of Metals, Materials and Minerals, 33(2), 115–122.",
        "Boonmee, S., & Worakhut, K. (2018). Thermal analysis system for iron melt quality control. Materials Today: Proceedings, 5(3), 9497–9505."
      ],
      pubsLabelTh: "ผลงานตีพิมพ์ที่คัดเลือก",
      publicationsTh: [
        "Worakhut, K. et al. (2026). Effect of carbon equivalent on thermal conductivity of titanium-alloyed gray cast iron. Materials Science Forum, 1196, 195–200.",
        "Worakhut, K., & Boonmee, S. (2023). Microstructure and wear properties of titanium-alloyed gray irons. Journal of Metals, Materials and Minerals, 33(2), 115–122.",
        "Boonmee, S., & Worakhut, K. (2018). Thermal analysis system for iron melt quality control. Materials Today: Proceedings, 5(3), 9497–9505."
      ],
      publications: [
        "Worakhut, K. et al. (2026). Materials Science Forum, 1196, 195–200.",
        "Worakhut, K., & Boonmee, S. (2023). Journal of Metals, Materials and Minerals, 33(2), 115–122.",
        "Boonmee, S., & Worakhut, K. (2018). Materials Today: Proceedings, 5(3), 9497–9505."
      ]
    },
    {
      id: "res-9",
      discipline: "industrial",
      deptCode: "09",
      deptNameEn: "Department of Industrial Engineering",
      majorEn: "Major: Chemical Engineering",
      deptNameTh: "ภาควิชาวิศวกรรมอุตสาหการ",
      majorTh: "สาขาวิชาวิศวกรรมเคมี",
      academicTitle: "",
      fullName: "วีรวรรณ วีรชัยพิเชษฐ์กุล",
      fullNameEn: "Weerawun Weerachaipichasgul",
      email: "",
      portraitText: "Portrait\n3 : 4",
      portraitUrl: "img/weerawun-portrait.jpg",
      topicEn: "Chemical Process Simulation, Optimization and Control",
      topicTh:
        "การจำลองกระบวนการทางวิศวกรรมเคมี การหาสภาวะที่เหมาะสม และการควบคุมกระบวนการ",
      biographyEn:
        "Lecturer and researcher in the Division of Chemical Engineering, Department of Industrial Engineering, Faculty of Engineering, Naresuan University. Her research focuses on chemical process simulation, optimization, heat integration network design, biomass gasification with CCUS, and product/organization carbon footprint assessment.",
      biography:
        "อาจารย์และนักวิจัย สาขาวิชาวิศวกรรมเคมี ภาควิชาวิศวกรรมอุตสาหการ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยนเรศวร งานวิจัยมุ่งเน้นการจำลองกระบวนการทางเคมี การเพิ่มประสิทธิภาพและการควบคุมกระบวนการ การบูรณาการโครงข่ายความร้อน และการประเมินคาร์บอนฟุตพริ้นท์",
      interestsLabelEn: "My recent research interests are",
      interestsEn: [
        "Process simulation for biomass gasification with CCUS",
        "Heat integration network design, optimization, and control",
        "Carbon footprint for product / organization"
      ],
      interestsLabelTh: "หัวข้อวิจัยที่สนใจอยู่ในปัจจุบัน ได้แก่",
      interestsTh: [
        "การจำลองกระบวนการแปรสภาพเป็นก๊าซชีวมวลร่วมกับ CCUS",
        "การประเมินคาร์บอนฟุตพริ้นท์ของผลิตภัณฑ์/องค์กร",
        "การจำลอง เพิ่มประสิทธิภาพ ควบคุมกระบวนการ และบูรณาการโครงข่ายความร้อน"
      ],
      interests: [
        "Biomass Gasification & CCUS Simulation",
        "Process Optimization & Control",
        "Heat Integration & Carbon Footprint"
      ],
      inFutureLabelEn: "In the Future",
      inFutureEn:
        "We work on biomass gasification integrated with carbon dioxide capture to produce syngas or utilize captured CO2, alongside techno-enviro-economic assessment and carbon footprint evaluation in process and plant design.",
      afterGradLabelEn: "After Graduation",
      afterGradEn:
        "Students can apply skills in techno-enviro-economic assessment, heat integration network design, and chemical process simulation, optimization, and control to improve process performance and product quality.",
      inFutureLabelTh: "ในอนาคต:",
      inFutureTh:
        "มุ่งพัฒนากระบวนการแปรสภาพก๊าซจากชีวมวลร่วมกับการดักจับคาร์บอนไดออกไซด์เพื่อใช้ประโยชน์ ร่วมกับการประเมินเทคโนโลยี-สิ่งแวดล้อม-เศรษฐกิจ และการประเมินคาร์บอนฟุตพริ้นท์ในการออกแบบโรงงาน",
      afterGradLabelTh: "เมื่อสิ้นสุดการศึกษา:",
      afterGradTh:
        "นิสิตสามารถประยุกต์ใช้ทักษะการประเมินเทคโนโลยี-สิ่งแวดล้อม-เศรษฐกิจ ร่วมกับการออกแบบโครงข่ายการถ่ายเทความร้อน และการจำลอง เพิ่มประสิทธิภาพ และควบคุมกระบวนการเพื่อปรับปรุงสมบัติผลิตภัณฑ์",
      figures: [
        {
          url: "img/weerawun-fig1.png",
          captionEn: "An extractive distillation column",
          captionTh: "หอกลั่นสกัด (Extractive distillation column)"
        },
        {
          url: "img/weerawun-fig2.png",
          captionEn:
            "Block flow diagram of the combined biomass gasification with CO2 capture process",
          captionTh:
            "แผนภาพกระบวนการผลิตก๊าซชีวมวลร่วมกับการดักจับก๊าซคาร์บอนไดออกไซด์"
        },
        {
          url: "img/weerawun-fig3.png",
          captionEn: "Effect of CaO/C on reactor temperature at steam/C = 4",
          captionTh: "ผลของอัตราส่วน CaO/C ต่ออุณหภูมิเครื่องปฏิกรณ์ที่ steam/C = 4"
        }
      ],
      pubsLabelEn: "Selected Publications",
      publicationsEn: [
        "Chantam, P., Kaewpradit, P., Ukaew, S., Chanpirak, A., & Weerachaipichasgul, W. (2024). Design Extractive Dividing Wall Distillation Column Based on Response Surface Methodology Using Propylene-Glycol (PG) as an Entrainer, Separate the Mixture of Methylal and Methanol. Journal of Engineering Science and Technology, 19(6), 2056–2071.",
        "Weerachaipichasgul, W., Chanpirak, A., Wanwongka, A., Saengdaw, S., & Kittisupakorn, P. (2021). Response Surface Methodology to Evaluate Energy in Extractive Distillation Process for the Mixture of Methylal and Methanol with Glycerol as Entrainer. Journal of Engineering Science and Technology, 16(5), 4235–4249."
      ],
      pubsLabelTh: "ผลงานตีพิมพ์ที่คัดเลือก",
      publicationsTh: [
        "Chantam, P., Kaewpradit, P., Ukaew, S., Chanpirak, A., & Weerachaipichasgul, W. (2024). Design Extractive Dividing Wall Distillation Column ... Separate the Mixture of Methylal and Methanol. Journal of Engineering Science and Technology, 19(6), 2056–2071.",
        "Weerachaipichasgul, W., Chanpirak, A., Wanwongka, A., Saengdaw, S., & Kittisupakorn, P. (2021). Response Surface Methodology to Evaluate Energy in Extractive Distillation Process ... Journal of Engineering Science and Technology, 16(5), 4235–4249."
      ],
      publications: [
        "Chantam, P., ... & Weerachaipichasgul, W. (2024). JESTEC, 19(6), 2056–2071.",
        "Weerachaipichasgul, W. et al. (2021). JESTEC, 16(5), 4235–4249."
      ]
    },
    {
      id: "res-10",
      discipline: "mechanical",
      deptCode: "10",
      deptNameEn: "Department of Mechanical Engineering",
      majorEn: "Major: Thermo-Fluid Mechanics",
      deptNameTh: "ภาควิชาวิศวกรรมเครื่องกล",
      majorTh: "สาขาวิชาอุณหภาพและกลศาสตร์ของไหล",
      academicTitle: "รศ. ดร.",
      fullName: "ปิยะนันท์ เจริญสวรรค์",
      fullNameEn: "Assoc. Prof. Dr. Piyanun Charoensawan",
      email: "",
      portraitText: "Portrait\n3 : 4",
      portraitUrl: "img/piyanun-portrait.jpg",
      topicEn:
        "Temperature Reduction in Attic with Metal Sheet Roof Cooled by CLOHP",
      topicTh:
        "การลดอุณหภูมิในห้องใต้หลังคาแผ่นเรียบเมทัลชีทที่หล่อเย็นด้วยท่อความร้อนแบบสั่นวงรอบ",
      biographyEn:
        "Since most solar heat is transferred into buildings through the roof, prolonged exposure to sunlight raises temperatures in both the attic and interior, causing thermal discomfort. Developing a roof cooling system helps lower attic and indoor temperatures, reducing air-conditioning loads and saving electrical energy costs.",
      biography:
        "เนื่องจากความร้อนส่วนใหญ่จากรังสีดวงอาทิตย์ถูกถ่ายโอนเข้าสู่ตัวอาคารผ่านทางหลังคา เมื่อหลังคาได้รับแสงแดดเป็นเวลานาน อุณหภูมิในห้องใต้หลังคาและภายในอาคารจะสูงขึ้น ส่งผลให้เกิดความไม่สบายทางความร้อน จึงจำเป็นต้องพัฒนาระบบระบายความร้อนสำหรับหลังคาเพื่อลดอุณหภูมิ ลดภาระระบบปรับอากาศ และประหยัดค่าไฟฟ้า",
      interestsLabelEn: "Field of interest:",
      interestsEn: [
        "Heat pipe technology & Heat transfer",
        "Two-phase flow & Solar water heater",
        "Energy conservation"
      ],
      interestsLabelTh: "หัวข้อวิจัยที่สนใจ:",
      interestsTh: [
        "เทคโนโลยีท่อความร้อน และการถ่ายเทความร้อน",
        "การไหลสองสถานะ และการทำน้ำร้อนพลังงานแสงอาทิตย์",
        "การอนุรักษ์พลังงาน"
      ],
      interests: [
        "Heat Pipe Technology",
        "Two-Phase Flow & Solar Thermal",
        "Energy Conservation"
      ],
      inFutureLabelEn: "In the future:",
      inFutureEn:
        "Closed-loop oscillating heat pipes (CLOHP) can be applied to cool flat metal sheet roofs and attics, targeting at least a 10% improvement in cooling performance compared with natural air convection on bare metal roofs.",
      afterGradLabelEn: "After Graduation",
      afterGradEn:
        "Students understand the principles of heat transfer along with the design, fabrication, and performance testing of heat pipes, gaining practical skills to solve thermal engineering problems.",
      inFutureLabelTh: "การประยุกต์ใช้ในอนาคต:",
      inFutureTh:
        "ท่อความร้อนแบบสั่นวงรอบ (CLOHP) สามารถนำมาใช้ระบายความร้อนของหลังคาโลหะแผ่นเรียบและห้องใต้หลังคา โดยคาดว่าจะช่วยเพิ่มประสิทธิภาพการระบายความร้อนได้อย่างน้อย 10% เมื่อเทียบกับการพาความร้อนตามธรรมชาติ",
      afterGradLabelTh: "หลังจบการศึกษา:",
      afterGradTh:
        "นิสิตมีความรู้ความเข้าใจหลักการถ่ายเทความร้อน การออกแบบ สร้าง และทดสอบสมรรถนะการทำงานของท่อความร้อน พร้อมทักษะในการประยุกต์ใช้แก้ปัญหาเชิงวิศวกรรม",
      figures: [
        {
          url: "img/piyanun-fig1.png",
          captionEn: "Fig. 1 Heat transfer system in attic metal sheet roof",
          captionTh: "รูปที่ 1 ระบบการถ่ายเทความร้อนบริเวณหลังคาและห้องใต้หลังคา"
        },
        {
          url: "img/piyanun-fig2.png",
          captionEn: "Fig. 2 Schematic diagram of CLOHP cooling system",
          captionTh: "รูปที่ 2 ผังการทำงานของระบบท่อความร้อนแบบสั่นวงรอบ"
        }
      ],
      publicationsEn: [],
      publicationsTh: [],
      publications: []
    },
    {
      id: "res-11",
      discipline: "mechanical",
      deptCode: "11",
      deptNameEn: "Department of Mechanical Engineering",
      majorEn: "Major: Automotive Engineering",
      deptNameTh: "ภาควิชาวิศวกรรมเครื่องกล",
      majorTh: "สาขาวิชาวิศวกรรมยานยนต์",
      academicTitle: "ผศ. ดร.",
      fullName: "อนันต์ชัย อยู่แก้ว",
      fullNameEn: "Asst. Prof. Dr. Ananchai U-kaew",
      email: "",
      portraitText: "Portrait\n3 : 4",
      portraitUrl: "img/ananchai-portrait.jpg",
      topicEn:
        "Comparative Analysis of Energy Consumption in Autonomous Delivery Navigation: User-Driven Route Cloning vs Generative AI-Based Control",
      topicTh:
        "การวิเคราะห์เปรียบเทียบการใช้พลังงานในการนำทางยานส่งของอัตโนมัติ: User-Driven Route Cloning กับการควบคุมด้วย Generative AI",
      biographyEn:
        "This study evaluates energy consumption of two autonomous navigation models for delivery vehicles: User-Driven Route Cloning and Generative AI-based Control. Real-world field tests under unloaded and 20 kg loaded conditions over a 500-meter route showed the User-Driven model consumed up to 55% more energy than the AI model due to less efficient path control and frequent corrective maneuvers.",
      biography:
        "การศึกษานี้ประเมินประสิทธิภาพการใช้พลังงานของโมเดลนำทางอัตโนมัติสำหรับยานส่งของ 2 รูปแบบ ได้แก่ User-Driven Route Cloning และการควบคุมด้วย Generative AI โดยทดสอบภาคสนามทั้งสภาพบรรทุกเปล่าและบรรทุกน้ำหนัก 20 กิโลกรัม บนเส้นทาง 500 เมตร พบว่าโมเดล User-Driven ใช้พลังงานมากกว่าโมเดล AI สูงสุดถึง 55% จากการควบคุมเส้นทางและการแก้ทิศทางที่เกิดขึ้นบ่อยครั้ง",
      interestsLabelEn: "Field of Interest:",
      interestsEn: [
        "Autonomous Driving System, ADAS, Software Defined Vehicle",
        "Electric Vehicle Conversion",
        "Mobility As a Service (MAAS), System Engineering"
      ],
      interestsLabelTh: "งานวิจัยที่สนใจ:",
      interestsTh: [
        "Autonomous Driving System, ADAS, Software Defined Vehicle",
        "Electric Vehicle Conversion",
        "Mobility As a Service (MAAS)"
      ],
      interests: [
        "Autonomous Driving & ADAS",
        "EV Conversion",
        "Mobility As a Service & Systems"
      ],
      inFutureLabelEn: "In the Future",
      inFutureEn:
        "This study compares User-Driven Route Cloning and Generative AI-based Control in energy consumption and operational efficiency for autonomous delivery vehicles (ADVs), guiding the design of energy-efficient autonomous logistics systems.",
      afterGradLabelEn: "After Graduation",
      afterGradEn:
        "Autonomous delivery vehicles (ADVs) offer a promising solution for last-mile logistics with operational efficiency, scalability, and contactless delivery valuable for urban and semi-urban settings.",
      inFutureLabelTh: "การประยุกต์ใช้ในอนาคต",
      inFutureTh:
        "เปรียบเทียบกลยุทธ์การนำทางอัตโนมัติ 2 รูปแบบ ได้แก่ User-Driven Route Cloning และ Generative AI-based Control ในด้านการใช้พลังงานและประสิทธิภาพการปฏิบัติงานของยานส่งของอัตโนมัติ (ADVs)",
      afterGradLabelTh: "หลังจบการศึกษา",
      afterGradTh:
        "การใช้งานยานส่งของอัตโนมัติ (ADVs) เป็นแนวทางที่มีศักยภาพสูงสำหรับการขนส่งช่วงสุดท้าย (last-mile logistics) มอบประสิทธิภาพการปฏิบัติงาน การขยายระบบ และการส่งแบบไร้การสัมผัส",
      figures: [
        {
          url: "img/ananchai-fig1.png",
          captionEn: "The autonomous delivery vehicle (ADV) implemented in this project",
          captionTh: "ยานส่งของอัตโนมัติ (ADV) ที่ถูกนำไปใช้งานในโครงการนี้"
        },
        {
          url: "img/ananchai-fig2.png",
          captionEn: "System Architectures for Generative AI Tool Coding",
          captionTh: "สถาปัตยกรรมระบบสำหรับการสร้างโค้ดด้วยเครื่องมือ Generative AI"
        }
      ],
      pubsLabelEn: "Biography & Education",
      publicationsEn: [
        "Born in Sukhothai Province, Dr. Ananchai received a Royal Thai Government Scholarship to study in the United States for 11 years, earning B.S., M.S., and Ph.D. degrees in Mechanical Engineering from Lehigh University, Pennsylvania, USA.",
        "Primary expertise: Automotive engineering, system engineering, and sustainable mobility solutions."
      ],
      pubsLabelTh: "ประวัติการศึกษาและความเชี่ยวชาญ",
      publicationsTh: [
        "เกิดที่จังหวัดสุโขทัย ได้รับทุนรัฐบาลไทยไปศึกษาต่อ ณ ประเทศสหรัฐอเมริกา เป็นเวลา 11 ปี สำเร็จการศึกษาระดับปริญญาตรี โท และเอก สาขาวิศวกรรมเครื่องกล จาก Lehigh University รัฐเพนซิลเวเนีย สหรัฐอเมริกา",
        "ความเชี่ยวชาญหลัก: วิศวกรรมยานยนต์ วิศวกรรมระบบ และระบบขับเคลื่อนเพื่อความยั่งยืน"
      ],
      publications: [
        "Ph.D., M.S., B.S. in Mechanical Engineering, Lehigh University, Pennsylvania, USA (Royal Thai Government Scholar)."
      ]
    },
    {
      id: "res-12",
      discipline: "mechanical",
      deptCode: "12",
      deptNameEn: "Department of Mechanical Engineering",
      majorEn: "Major: Mechanical Engineering",
      deptNameTh: "ภาควิชาวิศวกรรมเครื่องกล",
      majorTh: "สาขาวิชาวิศวกรรมเครื่องกล",
      academicTitle: "ดร.",
      fullName: "ปองพันธ์ โอทกานนท์",
      fullNameEn: "Pongpun Othaganont, Ph.D.",
      email: "",
      portraitText: "Portrait\n3 : 4",
      portraitUrl: "img/pongpun-portrait.jpg",
      topicEn:
        "Agricultural and Automotive Mechatronics, Optimization and Energy Management",
      topicTh:
        "เมคคาทรอนิกส์ทางการเกษตรและยานยนต์ การหาค่าเหมาะที่สุด และการจัดการพลังงาน",
      biographyEn:
        "Battery-electric and hybrid electric vehicles are key pathways toward zero-emission road transport and lower fossil-fuel dependency. Existing research highlights powertrain architecture design, component sizing, control strategy optimization, and alternative energy storage as essential levers for next-generation electric vehicles.",
      biography:
        "การใช้พลังงานอย่างคุ้มค่าในการขนส่งทางถนนเป็นสิ่งจำเป็นต่อการลดมลพิษและพลังงานฟอสซิล รถยนต์ไฟฟ้าไฮบริดและรถยนต์ไฟฟ้าแบตเตอรี่ (BEV) เป็นระบบขนส่งหลักสู่อนาคต การปรับปรุงสถาปัตยกรรมระบบส่งกำลัง ขนาดส่วนประกอบ ระบบควบคุม และการกักเก็บพลังงานทางเลือกจึงเป็นหัวใจสำคัญของการแก้ปัญหาอย่างยั่งยืน",
      interestsLabelEn: "Field of interests:",
      interestsEn: [
        "Automotive Mechatronics and Battery Electric Vehicles",
        "Agricultural Mechatronics",
        "Optimization and Energy Management & Automatic control / IoT"
      ],
      interestsLabelTh: "หัวข้อวิจัยที่สนใจ:",
      interestsTh: [
        "Automotive Mechatronics and Battery Electric Vehicles",
        "Agricultural Mechatronics",
        "Optimization, Energy Management & Automatic control / IoT"
      ],
      interests: [
        "Automotive & BEV Mechatronics",
        "Agricultural Mechatronics",
        "Optimization, Energy Management & IoT"
      ],
      inFutureLabelEn: "In the Future",
      inFutureEn:
        "Improving tank-to-wheel energy consumption of battery electric vehicles by evaluating novel powertrain architectures and building analytical simulation tools that balance performance with environmental stewardship.",
      afterGradLabelEn: "Powertrain Topologies",
      afterGradEn:
        "Topologies studied include single-motor single-axle, double-motor double-axle, in-wheel single-axle, and in-wheel double-axle configurations, providing deeper insight for EV powertrain design optimization.",
      inFutureLabelTh: "ในอนาคต:",
      inFutureTh:
        "มุ่งปรับปรุงประสิทธิภาพการใช้พลังงานของยานยนต์ไฟฟ้าผ่านรูปแบบสถาปัตยกรรมระบบส่งกำลังที่เป็นไปได้และการพัฒนาเครื่องมือวิเคราะห์ระบบส่งกำลัง เพื่อการแก้ปัญหาที่ยั่งยืนและเป็นมิตรต่อสิ่งแวดล้อม",
      afterGradLabelTh: "รูปแบบระบบขับเคลื่อน",
      afterGradTh:
        "ศึกษาสถาปัตยกรรมส่งกำลังแบบเพลาเดี่ยวมอเตอร์เดี่ยว เพลาคู่มอเตอร์คู่ เพลาเดี่ยวในล้อ และเพลาคู่ในล้อ ช่วยให้ผู้ออกแบบยานยนต์เข้าใจเชิงลึกและปรับปรุงระบบส่งกำลัง BEV ได้ดียิ่งขึ้น",
      figures: [
        {
          url: "img/pongpun-fig1.png",
          captionEn: "Power flow of vehicle model",
          captionTh: "เส้นทางพลังงานของแบบจำลองยานยนต์ไฟฟ้า"
        },
        {
          url: "img/pongpun-fig2.png",
          captionEn: "Powertrain architecture (Axle motors)",
          captionTh: "รูปแบบระบบขับเคลื่อนยานยนต์ไฟฟ้า (มอเตอร์เพลาขับ)"
        },
        {
          url: "img/pongpun-fig3.png",
          captionEn: "Powertrain architecture (In-wheel motors)",
          captionTh: "รูปแบบระบบขับเคลื่อนยานยนต์ไฟฟ้า (มอเตอร์ในล้อ)"
        }
      ],
      publicationsEn: [],
      publicationsTh: [],
      publications: []
    },
    {
      id: "res-13",
      discipline: "mechanical",
      deptCode: "13",
      deptNameEn: "Department of Mechanical Engineering",
      majorEn: "Major: Mechanical Engineering",
      deptNameTh: "ภาควิชาวิศวกรรมเครื่องกล",
      majorTh: "สาขาวิชาวิศวกรรมเครื่องกล",
      academicTitle: "ดร.",
      fullName: "สัตยา ยิ้มประเสริฐ",
      fullNameEn: "Dr. Sattaya Yimprasert",
      email: "",
      portraitText: "Portrait\n3 : 4",
      portraitUrl: "img/sattaya-portrait.jpg",
      topicEn:
        "Fluid Mechanics, Fluid Dynamics Management for Drainage System Optimization, Electric and Hybrid Automotive Innovation",
      topicTh:
        "กลศาสตร์ของไหล, การจัดการพลศาสตร์ของไหลเพื่อเพิ่มประสิทธิภาพระบบการระบายน้ำ, พัฒนานวัตกรรมยานยนต์ไฟฟ้าและไฮบริด",
      biographyEn:
        "Addressing intensifying flooding in Thailand, my research mitigates the hydraulic Choking Effect in drainage systems using polymer drag reduction to increase flow capacity without replacing existing infrastructure. In parallel, I develop electric and hybrid vehicle technologies supporting sustainable mobility, greenhouse gas reduction, and community innovation.",
      biography:
        "มุ่งแก้ปัญหาอุทกภัยและปรากฏการณ์การรองรับน้ำเกินพิกัด (Choking Effect) ในระบบระบายน้ำ โดยประยุกต์ใช้ปรากฏการณ์การลดแรงเสียดทาน (Drag Reduction) ด้วยสารละลายพอลิเมอร์เพื่อเพิ่มประสิทธิภาพการระบายน้ำโดยไม่ต้องรื้อถอนโครงสร้างเดิม พร้อมพัฒนาเทคโนโลยียานยนต์ไฟฟ้าและไฮบริดเพื่อลดก๊าซเรือนกระจกและยกระดับคุณภาพชีวิตชุมชน",
      interestsLabelEn: "Field of interest:",
      interestsEn: [
        "Fluid Mechanics, Polymer Drag Reduction & Turbulent Flow Management",
        "Flow Visualization Techniques",
        "EV and Hybrid Vehicle Technologies & Thermal Management"
      ],
      interestsLabelTh: "หัวข้อวิจัยที่สนใจ:",
      interestsTh: [
        "กลศาสตร์ของไหล, การลดแรงเสียดทานในท่อด้วยสารพอลิเมอร์",
        "การจัดการการไหลแบบปั่นป่วนในท่อ, เทคนิคการสร้างภาพการไหล",
        "เทคโนโลยียานยนต์ไฟฟ้าและไฮบริด และการจัดการความร้อน"
      ],
      interests: [
        "Polymer Drag Reduction & Turbulence",
        "Flow Visualization Techniques",
        "EV & Hybrid Thermal Management"
      ],
      inFutureLabelEn: "In the future:",
      inFutureEn:
        "Graduates pursue careers in applied fluid mechanics to design sustainable urban drainage systems that mitigate flood risks, and lead electric and hybrid vehicle innovations toward a low-carbon society.",
      afterGradLabelEn: "After Graduation",
      afterGradEn:
        "Students develop expertise in advanced flow mechanisms, precision instrumentation, and flow-visualization techniques, alongside EV and hybrid powertrain architectures and intelligent energy management.",
      inFutureLabelTh: "ในอนาคต:",
      inFutureTh:
        "ทำงานด้านกลศาสตร์ของไหลทั้งทฤษฎีและปฏิบัติเพื่อแก้ปัญหาอุทกภัยอย่างยั่งยืนด้วยเทคโนโลยีเพิ่มสมรรถนะการไหล พร้อมสร้างสรรค์นวัตกรรมยานยนต์ไฟฟ้าและระบบไฮบริดอย่างต่อเนื่อง",
      afterGradLabelTh: "หลังจบการศึกษา:",
      afterGradTh:
        "นิสิตสามารถวิเคราะห์และจัดการกลไกการไหลขั้นสูง เชี่ยวชาญเครื่องมือวัดและเทคนิคสร้างภาพการไหล รวมถึงเข้าใจสถาปัตยกรรมยานยนต์ไฟฟ้าและไฮบริดทั้งระบบขับเคลื่อนและการจัดการพลังงาน",
      figures: [
        {
          url: "img/sattaya-fig1.jpg",
          captionEn: "Figure 1 Turbulent flow control and manipulation within a pipe system",
          captionTh: "รูปที่ 1 การควบคุมการไหลแบบปั่นป่วนภายในท่อ"
        },
        {
          url: "img/sattaya-fig2.jpg",
          captionEn: "Figure 2 Study and Modification of a Hybrid Electric Motorcycle",
          captionTh: "รูปที่ 2 การศึกษาและดัดแปลงมอเตอร์ไซค์ไฟฟ้าแบบไฮบริด"
        }
      ],
      pubsLabelEn: "Selected Publications",
      publicationsEn: [
        "Yimprasert, S., Ukaew, A., Ketpratum, S., & Bunprasop, B. (2026). The Modification of Hybrid Electric Motorcycles for Low-Carbon Tourism: A Case Study of Thung Luang Community, Sukhothai Province. ME-NETT 2026.",
        "Yimprasert, S., Ukaew, A., & Ketpratum, S. (2026). Experimental Investigation of Turbulent Manipulation in Pipe Flow. GMSARN International Journal, 20(1).",
        "Yimprasert, S., Kentaro, K., Alfredsson, P. H., & Matsubara, M. (2023). Effects of Polymer Addition on Transition and Length Scales of Flow Structures in Transitional Channel Flow. JFST, 18(1), 1–7.",
        "Yimprasert, S., Kvick, M., Alfredsson, P. H., & Matsubara, M. (2021). Flow visualization and skin friction determination in transitional channel flow. Exp. Fluids, 62(31), 1–16.",
        "Yimprasert, S., & Ukaew, A. (2015). Increasing Draining Capacity for Overloaded Sewers During Flooding by Means of Polymer Addition. Applied Mechanics and Materials, 773-774, 323–331."
      ],
      pubsLabelTh: "ผลงานตีพิมพ์ที่คัดเลือก",
      publicationsTh: [
        "Yimprasert, S., Ukaew, A., Ketpratum, S., & Bunprasop, B. (2026). Hybrid Electric Motorcycles for Low-Carbon Tourism. ME-NETT 2026.",
        "Yimprasert, S., Ukaew, A., & Ketpratum, S. (2026). Experimental Investigation of Turbulent Manipulation in Pipe Flow. GMSARN International Journal, 20(1).",
        "Yimprasert, S., Kentaro, K., Alfredsson, P. H., & Matsubara, M. (2023). JFST, 18(1), 1–7.",
        "Yimprasert, S., Kvick, M., Alfredsson, P. H., & Matsubara, M. (2021). Exp. Fluids, 62(31), 1–16.",
        "Yimprasert, S., & Ukaew, A. (2015). Applied Mechanics and Materials, 773-774, 323–331."
      ],
      publications: [
        "Yimprasert, S. et al. (2026). ME-NETT 2026.",
        "Yimprasert, S. et al. (2026). GMSARN International Journal, 20(1).",
        "Yimprasert, S. et al. (2023). JFST, 18(1), 1–7.",
        "Yimprasert, S. et al. (2021). Exp. Fluids, 62(31), 1–16.",
        "Yimprasert, S., & Ukaew, A. (2015). Applied Mechanics and Materials, 773-774, 323–331."
      ]
    },
    {
      id: "res-14",
      discipline: "mechanical",
      deptCode: "14",
      deptNameEn: "Department of Mechanical Engineering",
      majorEn: "Major: Mechanical Engineering",
      deptNameTh: "ภาควิชาวิศวกรรมเครื่องกล",
      majorTh: "สาขาวิชาวิศวกรรมเครื่องกล",
      academicTitle: "ดร.",
      fullName: "สุรัตน์ ปัญญาแก้ว",
      fullNameEn: "Dr. Surat Punyakaew",
      email: "",
      portraitText: "Portrait\n3 : 4",
      portraitUrl: "img/surat-portrait.jpg",
      topicEn: "Vibration and Control",
      topicTh: "การสั่นสะเทือนและการควบคุม",
      biographyEn:
        "My research focuses on mechanical vibration and control. I develop vibration absorbers that can retune as excitation changes, and use dynamic models and simulations to study their response and stability.",
      biography:
        "ปัจจุบันศึกษาการสั่นสะเทือนและการควบคุม โดยพัฒนาตัวดูดซับที่ปรับจูนได้เมื่อความถี่ของแรงกระตุ้นเปลี่ยนไป และใช้แบบจำลองพลวัตกับการจำลองเชิงตัวเลขเพื่อศึกษาการตอบสนองและเสถียรภาพของระบบ",
      interestsLabelEn: "Current research interests",
      interestsEn: [
        "Adaptive and active vibration absorbers",
        "Structural dynamics and vibration control",
        "Energy harvesting from vibration"
      ],
      interestsLabelTh: "หัวข้อวิจัยที่สนใจในปัจจุบัน",
      interestsTh: [
        "ตัวดูดซับการสั่นสะเทือนแบบปรับจูนและแบบแอกทีฟ",
        "พลศาสตร์โครงสร้างและการควบคุมการสั่นสะเทือน",
        "การเก็บเกี่ยวพลังงานจากการสั่นสะเทือน"
      ],
      interests: [
        "Adaptive & Active Vibration Absorbers",
        "Structural Dynamics & Control",
        "Vibration Energy Harvesting"
      ],
      inFutureLabelEn: "In the Future",
      inFutureEn:
        "I plan to develop absorbers that adjust to changing excitation and test how well they perform on laboratory prototypes.",
      afterGradLabelEn: "After Graduation",
      afterGradEn:
        "Graduates will be able to model vibrating systems, interpret measured data, and design and test vibration control solutions.",
      inFutureLabelTh: "ในอนาคต",
      inFutureTh:
        "ตั้งใจพัฒนาตัวดูดซับที่ปรับจูนตามแรงกระตุ้นที่เปลี่ยนไป และทดสอบประสิทธิภาพด้วยต้นแบบในห้องปฏิบัติการ",
      afterGradLabelTh: "เมื่อสิ้นสุดการศึกษา",
      afterGradTh:
        "นิสิตจะสามารถสร้างแบบจำลองระบบสั่นสะเทือน วิเคราะห์ข้อมูลการวัด และออกแบบพร้อมทดสอบวิธีลดการสั่นสะเทือนได้",
      figures: [
        {
          url: "img/surat-fig1.png",
          urlTh: "img/surat-fig1-th.png",
          captionEn: "Fig. 1 Cone CVT tuning (2022)",
          captionTh: "ภาพที่ 1 การปรับจูนด้วยชุดส่งกำลังแบบกรวย (2565)"
        },
        {
          url: "img/surat-fig2.png",
          urlTh: "img/surat-fig2-th.png",
          captionEn: "Fig. 2 Active pendulum control (2024)",
          captionTh: "ภาพที่ 2 การควบคุมตัวดูดซับแบบลูกตุ้ม (2567)"
        }
      ],
      pubsLabelEn: "Selected Publications",
      publicationsEn: [
        "Punyakaew, S. (2024). Active pendulum vibration absorber utilizing a rotating inertia actuator with time delay in the position feedback. Advances in Mechanical Engineering, 16(12). doi:10.1177/16878132241302029",
        "Punyakaew, S. (2022). Adaptively tuned vibration absorber using cone based continuously variable transmission. Cogent Engineering, 9(1), 2102044.",
        "Punyakaew, S., & Parnichkun, M. (2020). Vibration energy harvesting for low frequency using auto-tuning parametric rolling pendulum under exogenous multi-frequency excitations. Theoretical & Applied Mechanics Letters, 10(6), 448–455."
      ],
      pubsLabelTh: "ผลงานตีพิมพ์ที่คัดเลือก",
      publicationsTh: [
        "Punyakaew, S. (2024). Active pendulum vibration absorber utilizing a rotating inertia actuator with time delay in the position feedback. Advances in Mechanical Engineering, 16(12).",
        "Punyakaew, S. (2022). Adaptively tuned vibration absorber using cone based continuously variable transmission. Cogent Engineering, 9(1), 2102044.",
        "Punyakaew, S., & Parnichkun, M. (2020). Vibration energy harvesting for low frequency using auto-tuning parametric rolling pendulum under exogenous multi-frequency excitations. Theoretical & Applied Mechanics Letters, 10(6), 448–455."
      ],
      publications: [
        "Punyakaew, S. (2024). Advances in Mechanical Engineering, 16(12).",
        "Punyakaew, S. (2022). Cogent Engineering, 9(1), 2102044.",
        "Punyakaew, S., & Parnichkun, M. (2020). Theoretical & Applied Mechanics Letters, 10(6), 448–455."
      ]
    }
  ]
};
