import React from 'react';
import '../Style/council.css';
import { useLanguage } from '../context/LanguageContext.js';
import backgroundImage from '../assets/Image/Background/background15.jpg';

const SupremeCouncil = () => {
  const { isEnglish } = useLanguage();

  return (
    <div className={`council-container ${isEnglish ? 'english-lang' : 'arabic-lang'}`}>
      {/* Header Section */}
      <div className="council-header-section">
        <img
          src={backgroundImage}
          alt={isEnglish ? 'Supreme Council Background' : 'خلفية المجلس الأعلى'}
          className="council-hero-image"
        />
        <div className="council-header-overlay">
          <h1 className="council-main-title">
          {isEnglish
            ? 'Supreme Council of Technological Education'
            : 'المجلس الأعلى للتعليم التكنولوجى'}
        </h1>
        </div>
        
      </div>

      {/* Main Content */}
      <div className="council-content-section">
        <p className="council-law-reference">
          {isEnglish
            ? 'According to Article (7) of the regulations organizing technological colleges under the Ministry of Higher Education issued by Ministerial Decision No. 2655 dated 10/10/2006.'
            : 'طبقًا لنص المادة (7) من اللائحة المنظمة للكليات التكنولوجية التابعة لوزارة التعليم العالي الصادرة بالقرار الوزاري رقم 2655 بتاريخ 10/10/2006م.'}
        </p>
        <h2 className="council-responsibilities-title">
          {isEnglish
            ? 'The Supreme Council of Technological Colleges is responsible for:'
            : 'يختص المجلس الأعـلى للكليات التكنولوجية بمـا يلي:'}
        </h2>

        <ul className="council-responsibilities-list">
          <li className="council-responsibilities-list-item">
            {isEnglish
              ? 'Developing the general policy for education and training in technological colleges according to society’s needs.'
              : 'وضع السياسة العامة للتعليم والتدريب بالكليات التكنولوجية في ضوء احتياجات المجتمع.'}
          </li>
          <li className="council-responsibilities-list-item">
            {isEnglish
              ? 'Meeting the needs of various state sectors for graduates of technical and vocational education.'
              : 'تلبية احتياجات قطاعات الدولة المختلفة من خريجي التعليم الفني والمهني.'}
          </li>
          <li className="council-responsibilities-list-item">
            {isEnglish
              ? 'Raising the level of technical and vocational education and ensuring quality in colleges.'
              : 'رفع مستوى التعليم الفني والمهني وضمان الجودة في الكليات.'}
          </li>
          <li className="council-responsibilities-list-item">
            {isEnglish
              ? 'Securing funding sources for colleges to achieve their goals.'
              : 'تأمين تدبير مصادر تمويل الكليات لتحقيق أهدافها.'}
          </li>
          <li className="council-responsibilities-list-item">
            {isEnglish
              ? 'Approving recommendations from the boards of trustees of technological colleges.'
              : 'اعتماد توصيات مجالس الأمناء بالكليات التكنولوجية.'}
          </li>
          <li className="council-responsibilities-list-item">
            {isEnglish
              ? 'Setting the general policy for textbooks and study materials and establishing related systems.'
              : 'رسم السياسة العامة للكتب والمذكرات الدراسية ووضع النظم الخاصة بها.'}
          </li>
          <li className="council-responsibilities-list-item">
            {isEnglish
              ? 'Establishing general regulations for the relationship and work distribution among faculty members in technological colleges.'
              : 'وضع الضوابط العامة للعلاقة وأسلوب توزيع العمل بين أعضاء هيئة التدريس بالكليات التكنولوجية.'}
          </li>
          <li className="council-responsibilities-list-item">
            {isEnglish
              ? 'Determining admission rules and proposed numbers of students to be accepted each year based on proposals from each college.'
              : 'تحديد قواعد القبول بالكليات والأعداد المقترح قبولها كل عام في ضوء الاقتراحات المقدمة من كل كلية.'}
          </li>
          <li className="council-responsibilities-list-item">
            {isEnglish
              ? 'Forming a technical committee to coordinate between similar institutes and departments in technological colleges.'
              : 'تشكيل لجنة فنية للتنسيق بين المعاهد والأقسام المتناظرة في الكليات التكنولوجية.'}
          </li>
          <li className="council-responsibilities-list-item">
            {isEnglish
              ? 'Approving the internal regulations of technological colleges.'
              : 'اعتماد اللوائح الداخلية للكليات التكنولوجية.'}
          </li>
          <li className="council-responsibilities-list-item">
            {isEnglish
              ? 'Discussing and approving the report prepared by the head of the education sector at the end of each academic year about technical education in technological colleges, as well as reports submitted by college directors.'
              : 'مناقشة واعتماد التقرير الذي يعده رئيس قطاع التعليم في نهاية كل عام دراسي عن التعليم الفني في الكليات التكنولوجية وكذلك التقارير التي يقدمها مديري الكليات.'}
          </li>
          <li className="council-responsibilities-list-item">
            {isEnglish
              ? 'Studying topics referred to the Council by the Minister of Higher Education.'
              : 'دراسة الموضوعات التي يحيلها وزير التعليم العالي للمجلس.'}
          </li>
        </ul>
      </div>

    </div>
  );
};

export default SupremeCouncil;