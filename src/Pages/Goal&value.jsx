import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext'; // استيراد ThemeContext
import University_Campus from '../assets/Image/Background/Goals.jpg';
import '../Style/Goal&value.css';

const GoalsValues = () => {
  const { isEnglish } = useLanguage();
  const { theme } = useTheme(); // استخدام ThemeContext

  // بيانات الأهداف والقيم منظمة في مصفوفات عشان الكود يبقى أوضح
  const goals = isEnglish
    ? [
        "Providing high-quality technological education that combines theoretical and practical aspects through advanced academic programs and modern curricula that respond to scientific and industrial developments.",
        "Preparing qualified graduates who possess the technical and intellectual skills necessary to integrate quickly and effectively into the labor market, whether locally, regionally, or internationally.",
        "Enhancing cooperation with the industrial and production sectors to ensure that educational outcomes align with the actual needs of the labor market, through practical training and real-world applications.",
        "Supporting innovation and entrepreneurship by establishing innovation centers and business incubators that help students and graduates transform their ideas into successful projects.",
        "Expanding local and international partnerships with universities, research institutions, and industrial companies to exchange expertise and achieve sustainable development.",
        "Instilling the values of citizenship and social responsibility in students by engaging them in development and service projects that benefit the community.",
        "Utilizing digital transformation and modern technologies in all aspects of the educational and administrative processes within the university."
      ]
    : [
        "تقديم تعليم تكنولوجي عالي الجودة يجمع بين الجوانب النظرية والتطبيقية، من خلال برامج تعليمية متطورة ومناهج حديثة تستجيب للتطورات العلمية والصناعية.",
        "إعداد خريجين مؤهلين يمتلكون المهارات التقنية والفكرية اللازمة للاندماج السريع والفعّال في سوق العمل، سواء على المستوى المحلي أو الإقليمي أو الدولي.",
        "تعزيز التعاون مع قطاعات الصناعة والإنتاج لضمان مواءمة مخرجات التعليم مع الاحتياجات الفعلية لسوق العمل، عبر التدريب العملي والتطبيقات الواقعية.",
        "دعم الابتكار وريادة الأعمال من خلال إنشاء مراكز للابتكار وحاضنات أعمال تدعم الطلاب والخريجين في تحويل أفكارهم إلى مشاريع ناجحة.",
        "توسيع الشراكات المحلية والدولية مع الجامعات والمؤسسات البحثية والشركات الصناعية بهدف تبادل الخبرات وتحقيق التنمية المستدامة.",
        "غرس قيم المواطنة والمسؤولية المجتمعية لدى الطلاب، من خلال الانخراط في مشاريع تنموية وخدمية تعود بالنفع على المجتمع.",
        "الاستفادة من التحول الرقمي والتقنيات الحديثة في جميع جوانب العملية التعليمية والإدارية داخل الجامعة."
      ];

  const values = isEnglish
    ? [
        { title: "Quality and Excellence", description: "Commitment to the highest standards of quality in education, research, and community service." },
        { title: "Innovation and Creativity", description: "Encouraging creative thinking and innovative initiatives in all areas." },
        { title: "Justice and Inclusiveness", description: "Ensuring a fair educational environment that respects diversity and equal opportunity." },
        { title: "Social Responsibility", description: "Active contribution to the development and service of the local community." },
        { title: "Transparency and Accountability", description: "Applying principles of good governance in all policies and decisions." },
        { title: "Teamwork and Collaboration", description: "Promoting teamwork and collaboration among students, faculty, and administration." },
        { title: "Respect and Belonging", description: "Fostering a sense of loyalty and belonging to the university and its community." },
        { title: "Sustainability", description: "Supporting sustainable development in education, the environment, and society." }
      ]
    : [
        { title: "الجودة والتميّز", description: "الالتزام بأعلى معايير الجودة في التعليم والبحث وخدمة المجتمع." },
        { title: "الابتكار والإبداع", description: "تشجيع التفكير الخلّاق والمبادرات المبتكرة في جميع المجالات." },
        { title: "العدالة والشمولية", description: "ضمان بيئة تعليمية عادلة تحترم التنوع وتكافؤ الفرص." },
        { title: "المسؤولية المجتمعية", description: "المساهمة الفعّالة في خدمة وتنمية المجتمع المحلي." },
        { title: "الشفافية والمساءلة", description: "تطبيق مبادئ الحوكمة الرشيدة في جميع السياسات والقرارات." },
        { title: "العمل الجماعي والتعاون", description: "تعزيز روح الفريق والتعاون بين الطلاب والهيئة التدريسية والإدارية." },
        { title: "الاحترام والانتماء", description: "تعزيز الشعور بالولاء والانتماء للجامعة ومجتمعها." },
        { title: "الاستدامة", description: "دعم التنمية المستدامة في التعليم والبيئة والمجتمع." }
      ];

  return (
    <div className={`goals-values-page ${theme === 'dark' ? 'dark-mode' : ''} ${isEnglish ? 'english-layout' : 'arabic-layout'}`}>
      {/* Banner Section */}
      <div className="campus-banner">
        <img src={University_Campus} alt="University Campus" />
        <div className="banner-overlay">
          <h1 className='banner-overlay-title'>{isEnglish ? "Goals & Values" : "الأهداف والقيم"}</h1>
        </div>
      </div>

      {/* Goals Section */}
      <section className={`goals-section ${theme === 'dark' ? 'dark' : ''}`}>
        <div className="content-container">
          <h2 className="content-title">{isEnglish ? "Goals" : "الأهداف"}</h2>
          <div className="goal-about">
            {goals.map((goal, index) => (
              <h3 key={index} className="goal-value-text">{`${index + 1}. ${goal}`}</h3>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`values-section ${theme === 'dark' ? 'dark' : ''}`}>
        <div className="content-container">
          <h2 className="content-title">{isEnglish ? "Values" : "القيم"}</h2>
          <div className="goal-about">
            {values.map((value, index) => (
              <div key={index}>
                <h3 className="goal-value">{`${index + 1}. ${value.title}`}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoalsValues;