import React from 'react';
import '../Style/learn-about.css';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext'; // استيراد ThemeContext
import universityImage from '../assets/Image/Background/learn.jpg';

const UniversityIntro = () => {
  const { isEnglish } = useLanguage();
  const { theme } = useTheme(); // استخدام ThemeContext

  // تنظيم البيانات في مصفوفات لتسهيل الصيانة
  const goals = isEnglish
    ? [
        "Establishing a new integrated path for applied and technological education parallel to the academic education path.",
        "Applying and utilizing technology for the benefit of society.",
        "Providing technological education that offers integrated educational and training services.",
        "Preparing technologists capable of continuing education and flexible transition between specialties.",
        "Establishing strategic partnerships with education and training institutions."
      ]
    : [
        "استحداث مسار جديد متكامل للتعليم والتدريب التطبيقي والتكنولوجي مواز لمسار التعليم الأكاديمي.",
        "القيام على تطبيق واستغلال التكنولوجيا لما فيه صالح المجتمع.",
        "توفير تعليم تكنولوجي يقدم خدمات تعليمية وتدريبية متكاملة ذات جودة مناظرة لنظم الجودة العالمية.",
        "إعداد تكنولوجيين تتوافر لديهم المقدرة على الاستمرار في التعليم والتحول المرن بين التخصصات.",
        "عقد شراكات استراتيجية مع مؤسسات التعليم والتدريب في القطاعين العام والخاص."
      ];

  const mechatronicsLabs = isEnglish
    ? [
        "Computer-Aided Manufacturing Lab",
        "Programmable Logic Controller Lab",
        "Hydraulics and Pneumatics Lab",
        "Microcontrollers Lab"
      ]
    : [
        "معمل التصنيع بواسطة الحاسب",
        "معمل التحكم المنطقي القابل للبرمجة",
        "معمل الهيدروليك والنيوماتيك",
        "معمل المتحكمات الدقيقة"
      ];

  const academicDegrees = isEnglish
    ? [
        "Higher Professional Diploma in Technology in the specialization",
        "Professional Bachelor's in Technology in the specialization",
        "Professional Master's in Technology in the specialization",
        "Professional Doctorate in Technology in the specialization"
      ]
    : [
        "الدبلوم العالي المهني في التكنولوجيا في التخصص",
        "البكالوريوس المهني في التكنولوجيا في التخصص",
        "الماجستير المهني في التكنولوجيا في التخصص",
        "الدكتوراه المهنية في التكنولوجيا في التخصص"
      ];

  const admissionRequirements = isEnglish
    ? [
        "The student must obtain the minimum admission score determined by the Coordination Office.",
        "The student must be fully dedicated to studying at the college.",
        "Passing the medical examination required by the college."
      ]
    : [
        "حصول الطالب على الحد الأدنى للقبول بالكلية والتي يحددها مكتب التنسيق",
        "أن يكون الطالب متفرغاً للدراسة بالكلية",
        "اجتياز الكشف الطبي الخاص بالكلية"
      ];

  const tuitionFees = isEnglish
    ? [
        "First academic year fees: 15,000 EGP",
        "Second academic year fees: 15,000 EGP",
        "Third academic year fees: 20,000 EGP",
        "Fourth academic year fees: 20,000 EGP"
      ]
    : [
        "مصروفات السنة الدراسية الأولى: 15 ألف جنيه مصري",
        "مصروفات السنة الدراسية الثانية: 15 ألف جنيه مصري",
        "مصروفات السنة الدراسية الثالثة: 20 ألف جنيه مصري",
        "مصروفات السنة الدراسية الرابعة: 20 ألف جنيه مصري"
      ];

  return (
    <div className={`university-container ${theme === 'dark' ? 'dark-mode' : ''} ${isEnglish ? 'english' : 'arabic'}`}>
      {/* Hero Section */}
      <div className="hero-section">
        <img
          src={universityImage}
          alt={isEnglish ? "University Campus" : "حرم الجامعة"}
          className="hero-image"
        />
        <div className='learn-Hero'>
            <h1 className="Hero-text">
            {isEnglish ? "About the University" : "تعرف على الجامعة"}
          </h1>
        </div>
        
      </div>

      {/* Content Section */}
      <div className={`Content-section ${theme === 'dark' ? 'dark' : ''}`}>
        <div className="heading-primary">{isEnglish ? "International Technological University of Fayoum" : "جامعة الفيوم التكنولوجية الدولية"}</div>

        {/* University Introduction */}
        <div className="text-paragraph">
          {isEnglish
            ? "The presidential decree to establish the International Technological University of Fayoum was published in the official gazette on June 3, 2019, under Law No. 72 of 2019 for the establishment of technological universities, marking an important step in creating a new path for technical education in Egypt."
            : "صدر القرار الجمهوري بإنشاء جامعة الفيوم التكنولوجية الدولية بالجريدة الرسمية بتاريخ 3 يونيو 2019، والخاص بإصدار القانون رقم 72 لسنة 2019 بإنشاء الجامعات التكنولوجية، لتعد هذه الخطوة نقلة هامة في استحداث مسار جديد للتعليم الفني في مصر."}
        </div>
        <div className="text-paragraph">
          {isEnglish
            ? "The university is an extension of the path for technical education students, providing them with practical and scientific skills to meet the requirements of the local and international labor market through the technological programs implemented in its colleges, which are based on the needs of national projects and the university's geography."
            : "وتعد الجامعة امتداداً لمسار طلاب التعليم الفني والتي تعمل على إكسابهم المهارات العملية والعلمية لمواكبة متطلبات سوق العمل المحلي والدولي، وذلك من خلال البرامج التكنولوجية التي يتم تطبيقها بالكليات التابعة للجامعة، والتي وضعت بناء على احتياجات المشروعات القومية وجغرافية الجامعات."}
        </div>

        <hr className="section-divider"/>

        {/* University Goals */}
        <div className="heading-secondary">{isEnglish ? "University Goals" : "أهداف الجامعة"}</div>
        <ul className="custom-list">
          {goals.map((goal, index) => (
            <li key={index} className="custom-list-item">{goal}</li>
          ))}
        </ul>

        <hr className="section-divider"/>

        {/* University Programs */}
        <div className="heading-secondary">{isEnglish ? "University Programs" : "برامج الجامعة"}</div>
        <div className="text-paragraph">
          {isEnglish
            ? "The International Technological University of Fayoum includes the International College of Industry and Energy Technology."
            : "تضم جامعة الفيوم التكنولوجية الدولية الكلية الدولية لتكنولوجيا الصناعة والطاقة."}
        </div>

        <div className="heading-tertiary">{isEnglish ? "Mechatronics Technology Program" : "برنامج تكنولوجيا الميكاترونكس"}</div>
        <div className="text-paragraph">
          {isEnglish
            ? "The program features an applied and technological approach that provides basic skills and concepts in mathematics, physics, mechatronics, mechanical systems design, hydraulics, machines, electronics, programming, and digital signal processing."
            : "يتميز البرنامج بالأسلوب التطبيقي والتكنولوجي والذي يقدم من خلاله المهارات والمفاهيم الأساسية في الرياضيات والفيزياء والميكاترونكس، وتصميم الأنظمة الميكانيكية والهيدروليكية والماكينات والإلكترونيات والبرمجة ومعالجة الإشارات الرقمية."}
        </div>

        <div className="heading-quaternary">{isEnglish ? "Mechatronics Labs" : "معامل الميكاترونكس"}</div>
        <ul className="custom-list">
          {mechatronicsLabs.map((lab, index) => (
            <li key={index} className="custom-list-item">{lab}</li>
          ))}
        </ul>

        <hr className="section-divider"/>

        {/* Academic Degrees */}
        <div className="heading-secondary">{isEnglish ? "Academic Degrees" : "الدرجات العلمية"}</div>
        <div className="text-paragraph">
          {isEnglish
            ? "The International Technological University of Fayoum grants the following academic degrees based on the approval of the University Council:"
            : "تمنح جامعة الفيوم التكنولوجية الدولية بناءً على اعتماد مجلس الجامعة الدرجات العلمية الآتية:"}
        </div>
        <ul className="custom-list">
          {academicDegrees.map((degree, index) => (
            <li key={index} className="custom-list-item">{degree}</li>
          ))}
        </ul>

        <hr className="section-divider"/>

        {/* Student Admission */}
        <div className="heading-secondary">{isEnglish ? "Student Admission" : "قبول الطلاب"}</div>
        <div className="text-paragraph">
          {isEnglish
            ? "The International College of Industry and Energy Technology accepts Egyptian students who have obtained a technical secondary school certificate (three-year system and five-year system) or equivalent technical certificates, and general secondary school certificate or equivalent, and international students."
            : "تقبل الكلية الدولية لتكنولوجيا الصناعة والطاقة الطلاب المصريين الحاصلين على شهادة إتمام التعليم الثانوي الفني نظام الثلاث سنوات ونظام الخمس سنوات وما يعادلها من الشهادات الفنية، وشهادة إتمام الثانوية العامة وما يعادلها والوافدين."}
        </div>

        <div className="heading-tertiary">{isEnglish ? "Admission Requirements" : "شروط القبول"}</div>
        <ol className="custom-list custom-list-numbered">
          {admissionRequirements.map((requirement, index) => (
            <li key={index} className="custom-list-item">{requirement}</li>
          ))}
        </ol>

        <hr className="section-divider"/>

        {/* Tuition Fees */}
        <div className="heading-secondary">{isEnglish ? "Tuition Fees" : "المصروفات الدراسية"}</div>
        <ul className="custom-list">
          {tuitionFees.map((fee, index) => (
            <li key={index} className="custom-list-item">{fee}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UniversityIntro;