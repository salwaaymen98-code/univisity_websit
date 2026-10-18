import React, { useState, useEffect } from 'react';
import '../Style/depart.css';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext'; // استيراد ThemeContext
import Chart from 'chart.js/auto';

// استيراد الصور المحلية
import headImage from '../assets/Image/Dr/Dr.jpeg';
import i1 from '../assets/Image/Image/7.png';
import i2 from '../assets/Image/Image/5.png';
import i3 from '../assets/Image/Image/H.jpeg';
import i4 from '../assets/Image/Image/4.png';
import i5 from '../assets/Image/Image/images2.png';

import first from '../assets/Image/Semester/firstYear.png';
import second from '../assets/Image/Semester/secondYear.png';
import third from '../assets/Image/Semester/thirdYear.png';
import fifth from '../assets/Image/Semester/fifthYear.png';

const Auto = () => {
  const [activeSection, setActiveSection] = useState('about');
  const { isEnglish } = useLanguage();
  const { theme } = useTheme(); // استخدام ThemeContext بدل darkMode
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top when section changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const trainingCourses = () => [
    isEnglish ? "Arabi for Engineering Industries (Toshiba)." : "شركة العربى للصناعات الهندسية (توشيبا).",
    isEnglish ? "Al-Jawhara Company for Sanitary Ware Manufacturing." : "شركة الجوهرة لتصنيع الأدوات الصحية.",
    isEnglish ? "El Sewedy Group of Factories and other factories." : "مجموعة مصانع السويدى وغيرها من المصانع.",
    isEnglish ? "Computer Networks and Cybersecurity" : "شبكات الحاسوب والأمن السيبراني",
    isEnglish ? "Egyptian Company for Education Development Systems (Pedo)." : "الشركة المصرية لتطوير نظم التعليم (بيدو).",
    isEnglish ? "Egyptian Company for Metro Management and Operation." : "الشركة المصرية لإدارة وتشغيل المترو.",
    isEnglish ? "Egypt Ceramic Factory." : "مصنع سيراميك مصر."
  ];

  const [activeYear, setActiveYear] = useState(2024);

  const data = {
    2022: { first: 75 },
    2023: { first: 72, second: 68 },
    2024: { first: 78, second: 75, third: 72 }
  };

  const HeadImageComponent = () => (
    <div className={`head-image-container ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="circle-frame">
        <img src={headImage} alt={isEnglish ? "Department Head" : "رئيس القسم"} />
      </div>
      <div className="head-info">
        <h3>{isEnglish ? "Dr. Mohamed Badr Fargly" : "د. محمد بدر فرغلي"}</h3>
        <p className='depart-paragraph'>{isEnglish ? "Head of Autotronics Department" : "رئيس قسم الأوتوترونكس"}</p>
      </div>
    </div>
  );

  const StatsSection = () => {
    const { isEnglish } = useLanguage();
    const [chartInstance, setChartInstance] = useState(null);

    useEffect(() => {
      if (chartInstance) {
        chartInstance.destroy();
      }
      const ctx = document.getElementById('successChart').getContext('2d');
      const newChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["2022", "2023", "2024"],
          datasets: [
            {
              label: isEnglish ? "First Year" : "السنة الأولى",
              data: [75, 72, 78],
              backgroundColor: "#4a6baf",
              borderColor: "#4a6baf",
              borderWidth: 1
            },
            {
              label: isEnglish ? "Second Year" : "السنة الثانية",
              data: [0, 68, 75],
              backgroundColor: "#6a8bcf",
              borderColor: "#6a8bcf",
              borderWidth: 1
            },
            {
              label: isEnglish ? "Third Year" : "السنة الثالثة",
              data: [0, 0, 72],
              backgroundColor: "#8aabef",
              borderColor: "#8aabef",
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              title: {
                display: true,
                text: isEnglish ? "Success Rate (%)" : "نسبة النجاح (%)"
              }
            },
            x: {
              title: {
                display: true,
                text: isEnglish ? "Year" : "السنة"
              }
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'top'
            },
            title: {
              display: false
            }
          }
        }
      });
      setChartInstance(newChartInstance);

      return () => {
        if (chartInstance) {
          chartInstance.destroy();
        }
      };
    }, [theme, isEnglish]); // تحديث المخطط عند تغيير الثيم أو اللغة

    const maxFirst = Math.max(...Object.values(data).map(d => d.first));
    const maxSecond = Math.max(...Object.values(data).map(d => d.second || 0));
    const maxThird = Math.max(...Object.values(data).map(d => d.third || 0));

    return (
      <section className={`stats-section ${theme === 'dark' ? 'dark' : ''}`}>
        <header className="section-header">
          <h2 className="section-title">
            {isEnglish ? "📊 Success Development Statistics" : "📊 إحصاءات تطور النجاح"}
          </h2>
        </header>
        <div className="percentage-cards">
        </div>
        <div className="path-chart">
          <h3>{isEnglish ? "Success Rates Over Years" : "نسب النجاح عبر السنوات"}</h3>
          <div className="chart-container">
            <canvas id="successChart"></canvas>
          </div>
        </div>
      </section>
    );
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return (
          <>
            <section className={`section about-section ${theme === 'dark' ? 'dark' : ''}`}>
              <header>
                <h3>{isEnglish ? "About Autotronics Department" : "عن قسم الأوتوترونكس"}</h3>
              </header>
              <div className="section-content">
                <article>
                  {isEnglish ? (
                    <>
                      <p className='depart-text'>
                        The field of mechatronics is one of the vital fields that is increasingly in demand, as shown in future job reports prepared by many countries around the world. The educational system in the mechatronics technology program enables graduates to work in many fields, including:
                      </p>
                      <ul>
                        <li>Working in factories producing and assembling CNC machines and Routers, etc.</li>
                        <li>Working in companies and factories producing sanitary ware and ceramic factories.</li>
                        <li>Working in 3D printing centers.</li>
                        <li>Working in factories producing medical supplies, prosthetic devices, and pharmaceutical factories.</li>
                        <li>Working in factories producing food and beverages.</li>
                        <li>Working in companies producing and marketing educational equipment and devices.</li>
                      </ul>
                      <p className='depart-text'>
                        Workshops and labs of the mechatronics technology program:
                      </p>
                      <p className='depart-paragraph'>
                        The program provides many workshops and labs designed with the latest contemporary technological systems to enable students to acquire practical skills related to mechatronics. Among these workshops and labs:
                      </p>
                      <p className='depart-text'>
                        * Non-traditional machining and computer-aided manufacturing workshop (CNC):
                      </p>
                      <p className='depart-paragraph'>
                        The workshop is designed to allow students to learn in three stages: The first stage aims to learn how to deal with CNC machine software through computers equipped with the necessary software. The second stage aims to train students on mini CNC machines until the student's proficiency in dealing with CNC machines is confirmed. Then the student moves to the third stage where they deal with CNC machines at the industrial level, similar to the machines used in machining and production processes in real life.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className='depart-text'>
                        يعتبر مجال الميكاترونكس من المجالات الحيوية والتى يزداد الطلب عليها وظهر ذلك من خلال تقارير وظائف المستقبل التى أعدتها الكثير من دول العالم , ويتيح النظام التعليمى ببرنامج تكنولوجيا الميكاترونكس للخريج أن يعمل فى العديد من المجالات والتى من بينها:
                      </p>
                      <ul>
                        <li>العمل فى مصانع إنتاج وتجميع ماكينات CNC والـ Routers ...... إلخ.</li>
                        <li>العمل فى شركات ومصانع إنتاج الأدوات الصحية ومصانع السيراميك.</li>
                        <li>العمل فى مراكز الطباعة ثلاثية الأبعاد (3D Printing).</li>
                        <li>العمل فى مصانع إنتاج المستلزمات الطبية والأجهزة التعويضية ومصانع الأدوية.</li>
                        <li>العمل فى مصانع إنتاج المواد الغذائية والمشروبات الغازية.</li>
                        <li>العمل فى شركات إنتاج وتسويق الأجهزة والمعدات التعليمية.</li>
                      </ul>
                      <p className='depart-text'>
                        ورش ومعامل برنامج تكنولوجيا الميكاترونكس:
                      </p>
                      <p className='depart-paragraph'>
                        يتوفر بالبرنامج العديد من الورش والمعامل والتى تم تصميمها على أحدث النظم التكنولوجية المعاصرة لتتيح للطالب إكتساب المهارات العملية والمرتبطة بتخصص الميكاترونكس , ومن هذه الورش والمعامل:
                      </p>
                      <p className='depart-text'>
                        * ورشة التشغيل الغير تقليدى والتصنيع بالحاسب الآلى (CNC):
                      </p>
                      <p className='depart-paragraph'>
                        تم تصميم الورشة بحيث تتيح للطالب التعلم على ثلاثة مراحل وهى: المرحلة الأولى وتهدف إلى تعلم كيفية التعامل مع البرمجيات الخاصة بماكينات CNC من خلال توافر أجهزة كمبيوتر مزودة بالسوفت وير اللازم , المرحلة الثانية وتهدف إلى تدريب الطلاب على ماكينات CNC مصغرة حتى يتم التأكد من إجادة الطالب التعامل مع ماكينات CNC ثم ينتقل الطالب إلى المرحلة الثالثة والتى يتعامل فيها الطالب مع ماكينات CNC على المستوى الصناعى والمشابه للماكينات المستخدمة فى عمليات التشغيل والإنتاج فى الحياة العملية.
                      </p>
                    </>
                  )}
                </article>
              </div>
            </section>
            <StatsSection />
          </>
        );
      case 'head':
        return (
          <section className={`section head-section ${theme === 'dark' ? 'dark' : ''}`}>
            <header>
              <h3>{isEnglish ? "Head Message" : "كلمة رئيس القسم"}</h3>
            </header>
            <div className="section-content">
              <article className="head-message">
                {isEnglish ? (
                  <>
                    <p className='depart-paragraph'>
                      The Autotronics program has gained great importance and is very popular among various technological specializations due to the urgent need for it in the world of industry and the remarkable technological progress in various aspects of life.
                    </p>
                    <p className='depart-paragraph'>
                      The Autotronics program is a specialization concerned with the field of modern car technology and its electronics, as well as modern car mechanics and its electricity, and is directly concerned with the technological aspect of cars. The program was introduced as a result of the needs of the local and global market in order to basically meet the market's need for specialized technologists.
                    </p>
                    <p className='depart-paragraph'>
                      The Autotronics program at the university began in 2019, and Delta Technological University is considered one of the pioneering universities in this specialization. The program is an attractive environment for students from various governorates of Egypt.
                    </p>
                    <p className='depart-paragraph'>
                      The Autotronics program is distinguished by a teaching staff with high scientific qualifications. The teaching staff members in the department are also distinguished by their research production in various fields of autotronics technology. The program includes many laboratories equipped with the latest devices and technologies that contribute to preparing autotronics technologists with knowledge and practical experience that qualifies them to enter the labor market with confidence and competence.
                    </p>
                    <address className="dr-name">
                      <p className='depart-paragraph'>Dr. Mohamed Badr Fargly</p>
                      <p className='depart-paragraph'>Head of Autotronics Technology Department</p>
                    </address>
                  </>
                ) : (
                  <>
                    <p className='depart-paragraph'>
                      حظى برنامج تكنولوجيا الأوتوترونكس بأهمية كبيرة و يلقى رواجًا كبيرًا بين مختلف التخصصات التكنولوجية نظرًا للحاجة الملحة له في عالم الصناعة والتقدم التكنولوجي الملحوظ في مختلف نواحي الحياة. 
                    </p>
                    <p className='depart-paragraph'>
                      برنامج الأوتوترونكس هو تخصص يهتم بمجال تكنولوجيا السيارات الحديثة وإلكترونياتها وكذلك مكانيكا السيارات الحديثة وكهربائها، ويهتم بالجانب التكنولوجي للسيارات بشكل مباشر وقد تم طرح البرنامج نتيجة لإحتياج السوق المحلي والعالمي وذلك لسد حاجة السوق بشكل أساسي من التكنولوجيين المختصين، بدأ برنامج الأوتوترونكس بالجامعة عام 2019، وتعتبر جامعة الدلتا التكنولوجية من الجامعات الرائدة في هذا التخصص ويعد البرنامج بيئة جاذبة للطلبة من مختلف محافظات مصر.
                    </p>
                    <p className='depart-paragraph'>
                      ويتميز برنامج الاوتوترونكس بهيئة تدريسية ذات مؤهلات علمية عالية، كما يتميز أعضاء الهيئة التدريسية في القسم بإنتاجهم البحثي في مختلف مجالات تكنولوجيا الأوتوترونكس، ويضم البرنامج العديد من المختبرات المجهزة بأحدث الأجهزة والتقنيات التي من شأنها المساهمة في إعداد تكنولوجي الاوتوترونكس ذو معرفة و خبرة عملية تؤهلهم لدخول سوق العمل بثقة واقتدار.
                    </p>
                    <address className="dr-name">
                      <p className='depart-paragraph'>د. محمد بدر فرغلي</p>
                      <p className='depart-paragraph'>رئيس قسم تكنولوجيا الأوتوترونكس</p>
                    </address>
                  </>
                )}
              </article>
            </div>
          </section>
        );
      case 'program':
        return (
          <section className={`section program-section ${theme === 'dark' ? 'dark' : ''}`}>
            <header>
              <h3>{isEnglish ? "Study Program" : "البرنامج الدراسي"}</h3>
            </header>
            <div className="section-content">
              <div className="semester">
                <h3>{isEnglish ? "First Year" : "الفرقة الاولى"}</h3>
                <figure>
                  <img src={first} alt={isEnglish ? "First year study plan" : "الخطة الدراسية للفصل الأول"} />
                </figure>
                <h3>{isEnglish ? "Second Year" : "الفرقة الثانية"}</h3>
                <figure>
                  <img src={second} alt={isEnglish ? "Second year study plan" : "الخطة الدراسية للفصل الثاني"} />
                </figure>
                <h3>{isEnglish ? "Third Year" : "الفرقة الثالثة"}</h3>
                <figure>
                  <img src={third} alt={isEnglish ? "Third year study plan" : "الخطة الدراسية للفصل الثالث"} />
                </figure>
                <h3>{isEnglish ? "Fourth Year" : "الفرقة الرابعة"}</h3>
                <figure>
                  <img src={fifth} alt={isEnglish ? "Fourth year study plan" : "الخطة الدراسية للفصل الرابع"} />
                </figure>
              </div>
            </div>
          </section>
        );
      case 'photos':
        return (
          <section className={`section photos-section ${theme === 'dark' ? 'dark' : ''}`}>
            <header>
              <h3>{isEnglish ? "Photo Gallery" : "معرض الصور"}</h3>
            </header>
            <div className="section-content">
              <div className="gallery">
                <figure className="photo-item">
                  <img src={i1} alt={isEnglish ? "Advanced computer lab" : "معمل الحاسوب المتقدم"} />
                </figure>
                <figure className="photo-item">
                  <img src={i2} alt={isEnglish ? "Student workshop" : "ورشة عمل للطلاب"} />
                </figure>
                <figure className="photo-item">
                  <img src={i3} alt={isEnglish ? "Graduation ceremony" : "حفل تخريج الدفعة الجديدة"} />
                </figure>
                <figure className="photo-item">
                  <img src={i4} alt={isEnglish ? "Field visit" : "زيارة ميدانية لشركة تقنية"} />
                </figure>
                <figure className="photo-item">
                  <img src={i5} alt={isEnglish ? "National Day events" : "فعاليات اليوم الوطني"} />
                </figure>
              </div>
            </div>
          </section>
        );
      case 'courses':
        return (
          <section className={`section courses-section ${theme === 'dark' ? 'dark' : ''}`}>
            <header>
              <h3>{isEnglish ? "Training Courses" : "الدورات التدريبية"}</h3>
            </header>
            <div className="section-content">
              <article className="courses-intro">
                <p className='depart-paragraph'>
                  {isEnglish
                    ? "The program is keen to train its students in factories and companies with the aim of graduating a generation capable of working skillfully to meet the requirements of the labor market. Visits and training have been conducted in many factories and companies, including:"
                    : "يهتم البرنامج بتدريب طلابه فى المصانع والشركات وذلك بهدف تخريج جيل قادر على العمل بمهارة ملبيًا لمتطلبات سوق العمل , وقد تم عمل زيارات وتدريبات فى العديد من المصانع والشركات ومنها:"}
                </p>
              </article>
              <div className="courses-list">
                {trainingCourses().map((course, index) => (
                  <div key={index} className="course-item">
                    <span className="course-icon">✓</span>
                    <span className="course-text">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`it-department ${theme === 'dark' ? 'dark-mode' : ''}`}
      style={{ '--dir': isEnglish ? 'ltr' : 'rtl' }}
      dir={isEnglish ? 'ltr' : 'rtl'}
    >
      <header className={`header ${theme === 'dark' ? 'dark' : ''}`}>
        <div className="header-content">
          <button className="hamburger-menu" onClick={toggleMenu}>
            {isMenuOpen ? '✖' : '☰'}
          </button>
          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`} aria-label="Main navigation">
            <ul>
              <li className={activeSection === 'about' ? 'active' : ''} onClick={() => handleSectionChange('about')}>
                {isEnglish ? "About" : "عن القسم"}
              </li>
              <li className={activeSection === 'head' ? 'active' : ''} onClick={() => handleSectionChange('head')}>
                {isEnglish ? "Head Message" : "كلمة رئيس القسم"}
              </li>
              <li className={activeSection === 'program' ? 'active' : ''} onClick={() => handleSectionChange('program')}>
                {isEnglish ? "Study Program" : "البرنامج الدراسي"}
              </li>
              <li className={activeSection === 'photos' ? 'active' : ''} onClick={() => handleSectionChange('photos')}>
                {isEnglish ? "Photos" : "معرض الصور"}
              </li>
              <li className={activeSection === 'courses' ? 'active' : ''} onClick={() => handleSectionChange('courses')}>
                {isEnglish ? "Training Courses" : "الدورات التدريبية"}
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className={`main-content ${theme === 'dark' ? 'dark' : ''}`}>
        {renderSection()}
        {activeSection !== null && <HeadImageComponent />}
      </main>
    </div>
  );
};

export default Auto;