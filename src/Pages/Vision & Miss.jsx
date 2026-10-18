import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import University_Campus from '../assets/Image/Background/vission.jpg';
import '../Style/Vision& Miss.css'; // افتراض إن اسم الملف اتغيّر إلى VisionMission.css

const VisionMission = () => {
  const { isEnglish } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className={`vision-mission-page ${theme === 'dark' ? 'dark-mode' : ''} ${isEnglish ? 'english-layout' : 'arabic-layout'}`}>
      {/* Banner Section */}
      <div className="university-Banner">
        <img src={University_Campus} alt="University Campus" />
        <div className="Banner-overlay">
          <h1 className='Banner-overlay-title'>{isEnglish ? "Vision & Mission" : "الرؤية والرسالة"}</h1>
        </div>
      </div>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="section-container">
          <h2 className="Section-title">
            {isEnglish ? "University Vision" : "رؤية الجامعة"}
          </h2>
          <div className="section-content">
            <p className='vision-paragraph'>
              {isEnglish 
                ? `Fayoum Technological University strives to be a beacon of excellence and innovation in technological and applied education at both the national and international levels. The university aims to offer integrated educational programs that keep pace with rapid industrial and scientific developments, producing highly skilled graduates capable of competing, creating, and leading in various technological fields. It seeks to be a model institution in linking education with industry and achieving sustainable development while serving the community.`
                : `تسعى جامعة الفيوم التكنولوجية إلى أن تكون منارة للتميز والابتكار في التعليم التكنولوجي والتطبيقي على المستويين المحلي والدولي، من خلال تقديم برامج تعليمية متكاملة تواكب التطورات الصناعية والعلمية المتسارعة، وتسهم في تخريج كوادر فنية ومهنية قادرة على المنافسة والإبداع في مختلف المجالات التكنولوجية. وتطمح الجامعة إلى أن تصبح نموذجًا يحتذى به في ربط التعليم بالصناعة وتحقيق التنمية المستدامة وخدمة المجتمع.`}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="section-container">
          <h2 className="Section-title">
            {isEnglish ? "University Mission" : "رسالة الجامعة"}
          </h2>
          <div className="section-content">
            <p>
              {isEnglish 
                ? `Fayoum Technological University is committed to providing an innovative and stimulating educational environment that supports skill-based learning and practical applications. Through high-quality academic programs tailored to labor market needs and built on modern teaching methodologies, the university emphasizes hands-on training and integration with industrial and production sectors. The university’s mission is to graduate technically and professionally qualified students equipped with critical thinking, teamwork, and innovation skills—guided by ethical values and national identity—who contribute effectively to the national economy and comprehensive development.`
                : `تتمثل رسالة جامعة الفيوم التكنولوجية في توفير بيئة تعليمية مبتكرة ومحفزة تدعم التعلم القائم على المهارات والتطبيقات العملية، من خلال تقديم برامج دراسية ذات جودة عالية مصممة وفقًا لمتطلبات سوق العمل، واعتماد منهجيات تعليمية حديثة تركز على التدريب العملي والتكامل مع القطاعات الإنتاجية والصناعية. وتلتزم الجامعة بتخريج طلاب مؤهلين تقنيًا وفنيًا، يمتلكون القدرة على التفكير النقدي، والعمل الجماعي، والابتكار، مع تعزيز القيم الأخلاقية والانتماء الوطني، والمساهمة الفاعلة في دعم الاقتصاد القومي وتحقيق التنمية الشاملة.`}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default VisionMission;