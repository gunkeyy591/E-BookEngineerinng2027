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
    }
  ]
};
