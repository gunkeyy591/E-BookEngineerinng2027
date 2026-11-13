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
    showcaseYear: "2026–2027",
    coverTitleLine1: "Engineering",
    coverTitleLine2: "Research",
    coverTitleLine3: "Collection",
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
    phone: "055-964-000",
    email: "eng@nu.ac.th",
    website: "www.eng.nu.ac.th",
    colophonText:
      "กิตติกรรมประกาศ: ขอขอบคุณทุนสนับสนุนการวิจัยจากแหล่งทุนภายในและภายนอกมหาวิทยาลัย ตลอดจนพันธมิตรภาคอุตสาหกรรมและคณาจารย์ทุกท่านที่ร่วมส่งผลงานในเล่มนี้"
  },
  researchers: [
    {
      id: "res-1",
      deptCode: "01",
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
        code: "01",
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
      id: "res-2",
      deptCode: "02",
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
        code: "02",
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
      id: "res-3",
      deptCode: "03",
      deptNameEn: "Electrical & Computer Engineering",
      majorEn: "Major: Electrical & Computer Engineering",
      deptNameTh: "ภาควิชาวิศวกรรมไฟฟ้าและคอมพิวเตอร์",
      majorTh: "สาขาวิชาวิศวกรรมไฟฟ้าและคอมพิวเตอร์",
      academicTitle: "ศ.ดร.",
      fullName: "อัครเดช วรโชติเมธี",
      fullNameEn: "Prof. Dr. Akaradet Worachotmethee",
      email: "akaradet.w@university.ac.th",
      portraitText: "Portrait\n3 : 4",
      portraitUrl: "",
      topicEn:
        "Real-Time Surface Defect Inspection on Metal Stamping Lines via Lightweight Vision Transformers",
      topicTh:
        "ระบบตรวจสอบคุณภาพชิ้นงานโลหะความเร็วสูงบนสายพานการผลิตด้วยโครงข่ายประสาทเทียมเชิงลึกแบบน้ำหนักเบา",
      biographyEn:
        "Head of the Computer Vision and Embedded Systems Laboratory, focusing on applying Edge AI and smart sensors to industrial manufacturing (Smart Factory) and smart grid power networks.",
      biography:
        "หัวหน้าห้องปฏิบัติการวิทัศน์คอมพิวเตอร์และระบบสมองกลฝังตัว มุ่งเน้นการนำ Edge AI และเซ็นเซอร์อัจฉริยะไปประยุกต์ใช้ในโรงงานอุตสาหกรรม (Smart Factory) และระบบโครงข่ายไฟฟ้าสมาร์ทกริด",
      interestsLabelEn: "Field of interest:",
      interestsEn: [
        "Edge AI & Computer Vision",
        "Smart Grid Systems",
        "Embedded Systems & IIoT"
      ],
      interestsLabelTh: "หัวข้อวิจัยที่สนใจ:",
      interestsTh: [
        "ปัญญาประดิษฐ์บนระบบสมองกลฝังตัวและวิทัศน์คอมพิวเตอร์",
        "ระบบโครงข่ายไฟฟ้าอัจฉริยะ (Smart Grid)",
        "อินเทอร์เน็ตของสรรพสิ่งสำหรับงานอุตสาหกรรม (IIoT)"
      ],
      interests: ["Edge AI & Vision", "Smart Grid", "Embedded Systems", "IIoT"],
      inFutureLabelEn: "In the Future",
      inFutureEn:
        "Develop sub-millimeter surface defect detection algorithms compressed for direct execution on embedded edge boards without cloud dependency.",
      afterGradLabelEn: "Expected Impact",
      afterGradEn:
        "Achieves 99.2% defect sorting accuracy at 90 parts per minute, reducing production line waste by over 40%.",
      inFutureLabelTh: "การประยุกต์ใช้ในอนาคต",
      inFutureTh:
        "พัฒนาอัลกอริทึมตรวจจับรอยร้าวและตำหนิระดับซับมิลลิเมตรบนผิวโลหะด้วยโมเดลปัญญาประดิษฐ์ที่ประมวลผลบนบอร์ดสมองกลฝังตัวได้โดยตรง",
      afterGradLabelTh: "ผลลัพธ์และการนำไปใช้",
      afterGradTh:
        "มีความแม่นยำในการคัดแยกชิ้นงานบกพร่อง 99.2% ที่ความเร็ว 90 ชิ้นต่อนาที ลดการสูญเสียในสายการผลิตได้กว่า 40%",
      figures: [],
      publications: [
        "A. Worachotmethee et al., IEEE Transactions on Industrial Informatics (Q1), 2026."
      ],
      research: {
        code: "03",
        title:
          "ระบบตรวจสอบคุณภาพชิ้นงานโลหะความเร็วสูงบนสายพานการผลิตด้วยโครงข่ายประสาทเทียมเชิงลึกแบบน้ำหนักเบา",
        titleEn:
          "Real-Time Surface Defect Inspection on Metal Stamping Lines via Lightweight Vision Transformers",
        abstract:
          "พัฒนาอัลกอริทึมตรวจจับรอยร้าวและตำหนิระดับซับมิลลิเมตรบนผิวโลหะด้วยโมเดลปัญญาประดิษฐ์ที่บีบอัดให้ประมวลผลบนบอร์ดสมองกลฝังตัวได้โดยตรงโดยไม่ต้องเชื่อมต่อคลาวด์",
        methodology:
          "ออกแบบโครงสร้าง Mixed-Precision Quantization ร่วมกับระบบกล้องความเร็วสูงและไฟส่องสว่างแบบ Dark-Field",
        findings:
          "มีความแม่นยำในการคัดแยกชิ้นงานบกพร่อง 99.2% ที่ความเร็ว 90 ชิ้นต่อนาที ลดการสูญเสียในสายการผลิตได้กว่า 40%",
        figureCaption:
          "Fig. 3 — สถาปัตยกรรมระบบ Edge AI Inspection และตัวอย่างผลลัพธ์การตรวจจับตำหนิ",
        figureUrl: "",
        publication:
          "A. Worachotmethee et al., IEEE Transactions on Industrial Informatics (Q1), 2026.",
        link: "https://doi.org/10.1109/TII.2026.03"
      }
    },
    {
      id: "res-4",
      deptCode: "04",
      deptNameEn: "Industrial & Logistics Engineering",
      majorEn: "Major: Industrial Engineering",
      deptNameTh: "ภาควิชาวิศวกรรมอุตสาหการและโลจิสติกส์",
      majorTh: "สาขาวิชาวิศวกรรมอุตสาหการ",
      academicTitle: "[ตำแหน่งทางวิชาการ",
      fullName: "ชื่อ-นามสกุล อาจารย์ท่านต่อไป]",
      fullNameEn: "[Academic Title & Full Name — Template Placeholder]",
      email: "email@university.ac.th",
      portraitText: "Portrait\n3 : 4",
      portraitUrl: "",
      topicEn: "[English Research Topic Placeholder]",
      topicTh: "[ชื่อหัวข้อผลงานวิจัยเด่นของอาจารย์ — ภาษาไทย]",
      biographyEn:
        "[Template placeholder for the next faculty member's English profile: educational background, areas of expertise, and research experience.]",
      biography:
        "[พื้นที่ตัวอย่างสำหรับใส่ข้อมูลอาจารย์ท่านต่อไป: ระบุประวัติการศึกษา ความเชี่ยวชาญ และประสบการณ์การทำงานวิจัย สามารถเพิ่มหรือแก้ไขข้อมูลได้ที่ไฟล์ js/data.js]",
      interestsLabelEn: "Field of interest:",
      interestsEn: ["Interest 01", "Interest 02", "Interest 03"],
      interestsLabelTh: "หัวข้อวิจัยที่สนใจ:",
      interestsTh: ["ความเชี่ยวชาญ 01", "ความเชี่ยวชาญ 02", "ความเชี่ยวชาญ 03"],
      interests: ["Interest 01", "Interest 02", "Interest 03"],
      inFutureLabelEn: "In the Future",
      inFutureEn:
        "[Future research direction and industrial applications in English.]",
      afterGradLabelEn: "After Graduation",
      afterGradEn:
        "[Expected outcomes and benefits for industry and students after graduation.]",
      inFutureLabelTh: "ในอนาคต",
      inFutureTh:
        "[แนวทางการศึกษาวิจัยต่อยอดและการประยุกต์ใช้งานในอนาคต]",
      afterGradLabelTh: "เมื่อสิ้นสุดการศึกษา",
      afterGradTh:
        "[ผลลัพธ์ที่คาดหวังและการนำผลงานวิจัยไปใช้ประโยชน์จริง]",
      figures: [],
      publications: ["[Author(s). Title. Journal, Year. DOI]"],
      research: {
        code: "04",
        title: "[ชื่อผลงานวิจัยเด่นของอาจารย์ — Research Title Goes Here]",
        titleEn: "[English Research Title Placeholder]",
        abstract:
          "[บทคัดย่อ (Abstract): อธิบายที่มา ความสำคัญ และวัตถุประสงค์ของงานวิจัยชิ้นนี้โดยสังเขป]",
        methodology:
          "[วิธีดำเนินการวิจัย (Methodology): ระบุกระบวนการทดลอง เครื่องมือ หรืออัลกอริทึมที่ใช้]",
        findings:
          "[ผลลัพธ์และการนำไปใช้ประโยชน์ (Key findings & Impact): สรุปผลสำเร็จและการประยุกต์ใช้งานจริง]",
        figureCaption: "Fig. 4 — [คำอธิบายรูปภาพประกอบหรือกราฟผลการทดลอง]",
        figureUrl: "",
        publication: "[Author(s). Title. Journal, Year. DOI]",
        link: "https://eng.nu.ac.th"
      }
    }
  ]
};
