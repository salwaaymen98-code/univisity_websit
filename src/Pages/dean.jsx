import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import '../Style/dean.css';
import deanBg from '../assets/Image/Background/dean.jpg';
import deanPhoto from '../assets/Image/Dr/Dr.jpeg';

const Dean = () => {
  const { isEnglish } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className={`dean-final-container ${theme === 'dark' ? 'dark-mode' : ''} ${isEnglish ? 'english-mode' : 'arabic-mode'}`}>
      <div className="dean-main-banner">
        <img 
          src={deanBg} 
          alt={isEnglish ? "University Background" : "خلفية الجامعة"} 
          className="dean-bg-image"
        />
        <div className="dean-banner-overlay">
          <h1 className="dean-heading-primary">{isEnglish ? "Dean of Technological College" : "عميد الكلية التكنولوجية"}</h1>
        </div>
      </div>

      <div className="dean-profile-section">
        <div className="dean-photo-wrapper">
          <img 
            src={deanPhoto} 
            alt={isEnglish ? "Dean Photo" : "صورة العميد"} 
            className="dean-main-photo"
          />
        </div>
        <div className="dean-title-wrapper">
          <div className="dean-name-title">
            {isEnglish ? "Prof. Dr. Islam Helaly Abdel Aziz Afifi" : "أ. د. إسلام هلال عبد العزيز عفيفي"}
          </div>
          <div className="dean-college-title">
            {isEnglish ? "Acting Dean of Technological College" : "القائم بأعمال عميد الكلية التكنولوجية"}
          </div>
          <div className="dean-university-title">
            {isEnglish ? "Egypt International Technological University - Fayoum" : "جامعة مصر التكنولوجية الدولية - الفيوم"}
          </div>
        </div>
      </div>
      <hr className="section-divider"/>

      <div className="dean-info-sections">
        <section className="dean-info-card">
          <div className="dean-card-header">
            <div className="dean-heading-secondary">{isEnglish ? "Academic Degrees" : "الدرجات العلمية"}</div>
          </div>
          <div className="dean-card-content">
            <div className="dean-education-item">
              <div className="dean-heading-tertiary">2005</div>
              <div className="dean-text-paragraph">{isEnglish ? "✓ PhD in Mechanical Engineering" : "✓ دكتوراه في الهندسة الميكانيكية"}</div>
              <div className="dean-uni-name dean-text-paragraph">{isEnglish ? "✓ Cairo University" : "✓ جامعة سبکاهرة"}</div>
            </div>
            <div className="dean-education-item">
              <div className="dean-heading-tertiary">2002</div>
              <div className="dean-text-paragraph">{isEnglish ? "✓ Master's in Mechanical Engineering" : "✓ ماجستير في الهندسة الميكانيكية"}</div>
              <div className="dean-uni-name dean-text-paragraph">{isEnglish ? "✓ Assiut University" : "✓ جامعة أسيوط"}</div>
            </div>
            <div className="dean-education-item">
              <div className="dean-heading-tertiary">1999</div>
              <div className="dean-text-paragraph">{isEnglish ? "✓ Bachelor's in Mechanical Engineering (Excellent)" : "✓ بكالوريوس الهندسة الميكانيكية (جيد جداً)"}</div>
              <div className="dean-uni-name dean-text-paragraph">{isEnglish ? "✓ Assiut University" : "✓ جامعة أسيوط"}</div>
            </div>
          </div>
          <div className="dean-card-divider"></div>
        </section>
        <hr className="section-divider"/>

        <section className="dean-info-card">
          <div className="dean-card-header">
            <div className="dean-heading-secondary">{isEnglish ? "Current Position" : "المنصب الحالي"}</div>
          </div>
          <div className="dean-card-content">
            <div className="dean-experience-item">
              <div className="dean-text-paragraph">{isEnglish ? "✓ Acting Dean of Technological College" : "✓ القائم بأعمال عميد الكلية التكنولوجية"}</div>
              <div className="dean-text-paragraph">{isEnglish ? "✓ Egypt International Technological University - Fayoum" : "✓ جامعة مصر التكنولوجية الدولية بالفيوم"}</div>
            </div>
          </div>
          <div className="dean-card-divider"></div>
        </section>
        <hr className="section-divider"/>

        <section className="dean-info-card">
          <div className="dean-card-header">
            <div className="dean-heading-secondary">{isEnglish ? "Professional Experience" : "الخبرات الوظيفية"}</div>
          </div>
          <div className="dean-card-content">
            <div className="dean-experience-item">
              <div className="dean-heading-tertiary">2022 - {isEnglish ? "Present" : "حاليًا"}</div>
              <div className="dean-text-paragraph">{isEnglish ? "✓ Acting Dean of Technological College" : "্রميد الكلية التكنولوجية"}</div>
            </div>
            <div className="dean-experience-item">
              <div className="dean-heading-tertiary">2019 - Present</div>
              <div className="dean-text-paragraph">{isEnglish ? "✓ Director of Integrated Technological Educational Community in Fayoum" : "✓ مدير المجتمع التعليمي التكنولوجي المتكامل بالفيوم"}</div>
            </div>
            <div className="dean-experience-item">
              <div className="dean-heading-tertiary">2017 - 2019</div>
              <div className="dean-text-paragraph">{isEnglish ? "✓ Vice Dean for Community Service and Environment Development" : "✓ وكيل كلية الهندسة لشئون خدمة المجتمع وتنمية البيئة - جامعة الفيوم"}</div>
            </div>
            <div className="dean-experience-item">
              <div className="dean-heading-tertiary">2013 - 2019</div>
              <div className="dean-text-paragraph">{isEnglish ? "✓ Director of Engineering Research and Consultations Center" : "✓ مدير مركز البحوث والاستشارات الهندسية"}</div>
            </div>
            <div className="dean-experience-item">
              <div className="dean-heading-tertiary">2009 - Present</div>
              <div className="dean-text-paragraph">{isEnglish ? "✓ Faculty Member at Industrial Engineering Department" : "✓ عضو هيئة تدريس بقسم الهندسة الصناعية - كلية الهندسة - جامعة الفيوم"}</div>
            </div>
          </div>
          <div className="dean-card-divider"></div>
        </section>
        <hr className="section-divider"/>

        <section className="dean-info-card">
          <div className="dean-card-header">
            <div className="dean-heading-secondary">{isEnglish ? "Other Activities" : "أعمال أخرى"}</div>
          </div>
          <div className="dean-card-content">
            <div className="dean-experience-item">
              <div className="dean-text-paragraph">{isEnglish ? "✓ Consultant for Egyptian Salts and Minerals Company (EMISAL)" : "✓ استشاري للشركة المصرية للأملاح والمعادن بالفيوم (إميسال)"}</div>
            </div>
            <div className="dean-experience-item">
              <div className="dean-text-paragraph">{isEnglish ? "✓ Mechanical Works Consultant for various projects" : "✓ استشاري للأعمال الميكانيكية للعديد من المشروعات"}</div>
            </div>
            <div className="dean-experience-item">
              <div className="dean-text-paragraph">{isEnglish ? "✓ Design and supervision of fire fighting systems" : "✓ التصميم والإشراف على تركيب نظم الإطفاء للحريق"}</div>
            </div>
            <div className="dean-experience-item">
              <div className="dean-text-paragraph">{isEnglish ? "✓ Design and supervision of elevator installations" : "✓ التصميم والإشراف على تركيب المصاعد"}</div>
            </div>
            <div className="dean-experience-item">
              <div className="dean-text-paragraph">{isEnglish ? "✓ Member of several university committees" : "✓ عضو في العديد من اللجان الجامعية"}</div>
            </div>
          </div>
          <div className="dean-card-divider"></div>
        </section>
        <hr className="section-divider"/>

        <section className="dean-info-card">
          <div className="dean-card-header">
            <div className="dean-heading-secondary">{isEnglish ? "Research Interests" : "مجالات البحث"}</div>
          </div>
          <div className="dean-card-content">
            <div className="dean-research-item">
              <div className="dean-text-paragraph">{isEnglish ? "✓ Reliability-Centered Maintenance" : "✓ الصيانة المعتمدة على الموثوقية"}</div>
            </div>
            <div className="dean-research-item">
              <div className="dean-text-paragraph">{isEnglish ? "✓ Industrial Safety and Risk Assessment" : "✓ السلامة الصناعية وتقييم المخاطر"}</div>
            </div>
            <div className="dean-research-item">
              <div className="dean-text-paragraph">{isEnglish ? "✓ Total Productive Maintenance" : "✓ الصيانة الإنتاجية الشاملة"}</div>
            </div>
            <div className="dean-research-item">
              <div className="dean-text-paragraph">{isEnglish ? "✓ Production Planning and Optimization" : "✓ تخطيط الإنتاج والتحسين"}</div>
            </div>
            <div className="dean-research-item">
              <div className="dean-text-paragraph">{isEnglish ? "✓ Industrial Systems Engineering" : "✓ هندسة النظم الصناعية"}</div>
            </div>
          </div>
          <div className="dean-card-divider"></div>
        </section>
        <hr className="section-divider"/>

        <section className="dean-info-card">
          <div className="dean-card-header">
            <div className="dean-heading-secondary">{isEnglish ? "Awards and Honors" : "الجوائز والتكريمات"}</div>
          </div>
          <div className="dean-card-content">
            <div className="dean-award-item">
              <div className="dean-heading-tertiary">2020</div>
              <div className="dean-text-paragraph">{isEnglish ? "✓ Excellence in International Scientific Publishing Award" : "✓ جائزة جامعة الفيوم للتميز في النشر العلمي الدولي"}</div>
            </div>
            <div className="dean-award-item">
              <div className="dean-heading-tertiary">2017</div>
              <div className="dean-text-paragraph">{isEnglish ? "✓ Pioneers in Mechanical Engineering Award" : "✓ جائزة رواد الهندسة الميكانيكية من نقابة المهندسين"}</div>
            </div>
            <div className="dean-award-item">
              <div className="dean-heading-tertiary">2016-2020</div>
              <div className="dean-text-paragraph">{isEnglish ? "✓ Multiple Awards for Excellence in Scientific Publishing" : "✓ جوائز متعددة للتميز في النشر العلمي الدولي"}</div>
            </div>
            <div className="dean-award-item">
              <div className="dean-heading-tertiary">2016</div>
              <div className="dean-text-paragraph">{isEnglish ? "✓ Award for Community Service and Environment Development" : "✓ جائزة جامعة الفيوم لخدمة المجتمع وتنمية البيئة"}</div>
            </div>
            <div className="dean-award-item">
              <div className="dean-heading-tertiary">2014</div>
              <div className="dean-text-paragraph">{isEnglish ? "✓ Best Teaching Professor Award (2008-2014)" : "✓ الأستاذ الأفضل شرحاً بكلية الهندسة جامعة الفيوم"}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dean;