import React, { useState, useEffect } from 'react';
import '../Style/depart.css';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext'; // استيراد ThemeContext
import Chart from 'chart.js/auto';

// استيراد الصور المحلية
import headImage from '../assets/Image/Dr/Dr.jpeg';
import i1 from '../assets/Image/Image/H.jpeg';
import i2 from '../assets/Image/Image/5.png';
import i3 from '../assets/Image/Image/Ijpeg.jpeg';
import i4 from '../assets/Image/Image/4.png';
import i5 from '../assets/Image/Image/images4.png';

import first from '../assets/Image/Semester/firstYear.png';
import second from '../assets/Image/Semester/secondYear.png';
import third from '../assets/Image/Semester/thirdYear.png';
import fifth from '../assets/Image/Semester/fifthYear.png';

const DepartMica = () => {
  const [activeSection, setActiveSection] = useState('about');
  const { isEnglish } = useLanguage();
  const { theme } = useTheme(); // استخدام ThemeContext بدل darkMode
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const trainingCourses = () => (isEnglish ? [
    "Arabi for Engineering Industries (Toshiba).",
    "Al-Jawhara Company for Sanitary Ware Manufacturing.",
    "El Sewedy Group of Factories and other factories.",
    "Computer Networks and Cybersecurity",
    "Egyptian Company for Education Development Systems (Pedo).",
    "Egyptian Company for Metro Management and Operation.",
    "Egypt Ceramic Factory."
  ] : [
    "شركة العربى للصناعات الهندسية (توشيبا).",
    "شركة الجوهرة لتصنيع الأدوات الصحية.",
    "مجموعة مصانع السويدى وغيرها من المصانع.",
    "شبكات الحاسوب والأمن السيبراني",
    "الشركة المصرية لتطوير نظم التعليم (بيدو).",
    "الشركة المصرية لإدارة وتشغيل المترو.",
    "مصنع سيراميك مصر."
  ]);

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
        <h3>{isEnglish ? "Dr. Ahmed Farhan" : "د. أحمد فرحان"}</h3>
        <p className='depart-paragraph'>{isEnglish ? "Head of Mechatronics Department" : "رئيس قسم ميكاترونكس"}</p>
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
              data: [80, 85, 80],
              backgroundColor: "#4a6baf",
              borderColor: "#4a6baf",
              borderWidth: 1
            },
            {
              label: isEnglish ? "Second Year" : "السنة الثانية",
              data: [0, 80, 78],
              backgroundColor: "#6a8bcf",
              borderColor: "#6a8bcf",
              borderWidth: 1
            },
            {
              label: isEnglish ? "Third Year" : "السنة الثالثة",
              data: [0, 0, 88],
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

    return (
      <section className={`stats-section ${theme === 'dark' ? 'dark' : ''}`}>
        <header className="section-header">
          <h2 className="section-title">
            {isEnglish ? "📊 Success Development Statistics" : "📊 إحصاءات تطور النجاح"}
          </h2>
        </header>
        <div className="percentage-cards"></div>
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
                <h3>{isEnglish ? "About Mechatronics Department" : "عن قسم ميكاترونكس"}</h3>
              </header>
              <div className="section-content">
                <article>
                  {isEnglish ? (
                    <>
                      <p className='depart-paragraph'>
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
                        يعتبر مجال الميكاترونكس من المجالات الحيوية والتي يزداد الطلب عليها وظهر ذلك من خلال تقارير وظائف المستقبل التي أعدتها الكثير من دول العالم، ويتيح النظام التعليمي ببرنامج تكنولوجيا الميكاترونكس للخريج أن يعمل في العديد من المجالات والتي من بينها:
                      </p>
                      <ul>
                        <li>العمل في مصانع إنتاج وتجميع ماكينات CNC والـ Routers ...... إلخ.</li>
                        <li>العمل في شركات ومصانع إنتاج الأدوات الصحية ومصانع السيراميك.</li>
                        <li>العمل في مراكز الطباعة ثلاثية الأبعاد (3D Printing).</li>
                        <li>العمل في مصانع إنتاج المستلزمات الطبية والأجهزة التعويضية ومصانع الأدوية.</li>
                        <li>العمل في مصانع إنتاج المواد الغذائية والمشروبات الغازية.</li>
                        <li>العمل في شركات إنتاج وتسويق الأجهزة والمعدات التعليمية.</li>
                      </ul>
                      <p className='depart-text'>
                        ورش ومعامل برنامج تكنولوجيا الميكاترونكس:
                      </p>
                      <p className='depart-paragraph'>
                        يتوفر بالبرنامج العديد من الورش والمعامل والتي تم تصميمها على أحدث النظم التكنولوجية المعاصرة لتتيح للطالب اكتساب المهارات العملية والمرتبطة بتخصص الميكاترونكس، ومن هذه الورش والمعامل:
                      </p>
                      <p className='depart-text'>
                        * ورشة التشغيل الغير تقليدي والتصنيع بالحاسب الآلي (CNC):
                      </p>
                      <p className='depart-paragraph'>
                        تم تصميم الورشة بحيث تتيح للطالب التعلم على ثلاثة مراحل وهي: المرحلة الأولى وتهدف إلى تعلم كيفية التعامل مع البرمجيات الخاصة بماكينات CNC من خلال توافر أجهزة كمبيوتر مزودة بالسوفت وير اللازم، المرحلة الثانية وتهدف إلى تدريب الطلاب على ماكينات CNC مصغرة حتى يتم التأكد من إجادة الطالب التعامل مع ماكينات CNC ثم ينتقل الطالب إلى المرحلة الثالثة والتي يتعامل فيها الطالب مع ماكينات CNC على المستوى الصناعي والمشابه للماكينات المستخدمة في عمليات التشغيل والإنتاج في الحياة العملية.
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
                    <p className='depart-paragraph'>Dear students,</p>
                    <p className='depart-paragraph'>
                      The mechatronics technology program is one of the programs imposed by industrial development and technological progress. In the past, production lines relied mainly on mechanical systems and some electrical components such as electric motors. But now, production lines largely depend on mechanical systems, electronic circuits, sensors, electrical components, microcontrollers and their specialized software. Many of these lines also rely on robotic systems to increase productivity, improve product efficiency and quality, and reduce human intervention in some sensitive industries such as pharmaceutical manufacturing.
                    </p>
                    <p className='depart-paragraph'>
                      Therefore, it was necessary to have an educational program that could provide learners with the skills to deal with such modern systems in terms of participation in design, operation, maintenance, installation, etc. Hence, the mechatronics technology program was established. In fact, the mechatronics technology program is one of the distinguished programs with a promising future, as clearly shown in future job reports published by many countries around the world, which show global interest in the fields of automation, 3D printing, and robotics, for example, reflecting the importance of studying the program.
                    </p>
                    <p className='depart-paragraph'>
                      The program focuses on training its students at a high level, as the study system in the program depends on 60% on practical training in the department's workshops and labs, in addition to practical training and field visits to factories and companies. I conclude by saying: 'A bright future requires good planning and non-traditional education that elevates you forward in a global system witnessing rapid scientific and technological developments and leaps.'
                    </p>
                    <address className="dr-name">
                      <p className='depart-paragraph'>Dr. Ahmed Farhan</p>
                      <p className='depart-paragraph'>Head of Mechatronics Technology Department</p>
                    </address>
                  </>
                ) : (
                  <>
                    <p className='depart-paragraph'>أعزائي الطلاب،</p>
                    <p className='depart-paragraph'>
                      يعد برنامج تكنولوجيا الميكاترونكس من البرامج التي فرضها التطور الصناعي والتقدم التكنولوجي، حيث كانت تعتمد خطوط الإنتاج قديمًا على المنظومات الميكانيكية بشكل أساسي وبعض المكونات الكهربائية كالمحركات الكهربائية مثلًا، ولكن الآن باتت خطوط الإنتاج تعتمد بشكل كبير على المنظومات الميكانيكية – الدوائر الإلكترونية – الحساسات والمستشعرات – المكونات الكهربائية – المتحكمات الدقيقة والبرمجيات الخاصة بها، كما باتت الكثير من هذه الخطوط تعتمد على الأنظمة الروبوتية بهدف زيادة الإنتاجية ورفع كفاءة وجودة المنتج وتقليل تدخل العامل البشري في بعض الصناعات الحساسة كصناعات الأدوية مثلًا، ولذلك كان من الضروري وجود برنامج تعليمي يستطيع إكساب الدارس المهارات التي تمكنه من التعامل مع مثل هذه الأنظمة الحديثة من حيث المشاركة في التصميم – التشغيل – الصيانة – التركيب ..... إلخ، ولذلك كان برنامج تكنولوجيا الميكاترونكس، وفي الحقيقة يعتبر برنامج تكنولوجيا الميكاترونكس من البرامج المتميزة وذات المستقبل الواعد ويظهر ذلك جليًا في تقارير وظائف المستقبل والتي نشرتها العديد من دول العالم والتي تظهر فيها الاهتمام العالمي بمجال الآتمتة – الطباعة ثلاثية الأبعاد – الروبوتات على سبيل الأمثلة بما يعكس أهمية الدراسة بالبرنامج.
                    </p>
                    <p className='depart-paragraph'>
                      ويهتم البرنامج بتدريب طلابه على مستوى عالٍ حيث أن نظام الدراسة بالبرنامج يعتمد على 60% على التدريب العملي بورش ومعامل القسم هذا بالإضافة إلى التدريب العملي والزيارات الميدانية في المصانع والشركات، وأختم قائلًا: "إن المستقبل المشرق يلزمه تخطيط جيد وتعليم غير نمطي يرتقي بك إلى الأمام في ظل نظام عالمي يشهد تطورات وقفزات علمية وتكنولوجية متسارعة".
                    </p>
                    <address className="dr-name">
                      <p className='depart-paragraph'>د. أحمد فرحان</p>
                      <p className='depart-paragraph'>رئيس قسم تكنولوجيا الميكاترونكس</p>
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
                <h3>{isEnglish ? "First Year" : "الفرقة الأولى"}</h3>
                <figure>
                  <img src={first} alt={isEnglish ? "First semester study plan" : "الخطة الدراسية للفصل الأول"} />
                </figure>
                <h3>{isEnglish ? "Second Year" : "الفرقة الثانية"}</h3>
                <figure>
                  <img src={second} alt={isEnglish ? "Second semester study plan" : "الخطة الدراسية للفصل الثاني"} />
                </figure>
                <h3>{isEnglish ? "Third Year" : "الفرقة الثالثة"}</h3>
                <figure>
                  <img src={third} alt={isEnglish ? "Third semester study plan" : "الخطة الدراسية للفصل الثالث"} />
                </figure>
                <h3>{isEnglish ? "Fourth Year" : "الفرقة الرابعة"}</h3>
                <figure>
                  <img src={fifth} alt={isEnglish ? "Fourth semester study plan" : "الخطة الدراسية للفصل الرابع"} />
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
                  <img src={i3} alt={isEnglish ? "Graduation ceremony" : "حفل تخرج الدفعة الجديدة"} />
                </figure>
                <figure className="photo-item">
                  <img src={i4} alt={isEnglish ? "Field visit to a tech company" : "زيارة ميدانية لشركة تقنية"} />
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
                    ? "The program is keen to train its students in factories and companies with the aim of graduating a generation capable of working skillfully to meet the requirements of the labor market. Visits and training courses have been conducted in many factories and companies, including:"
                    : "يهتم البرنامج بتدريب طلابه في المصانع والشركات وذلك بهدف تخريج جيل قادر على العمل بمهارة ملبيًا لمتطلبات سوق العمل، وقد تم عمل زيارات وتدريبات في العديد من المصانع والشركات ومنها:"}
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
                {isEnglish ? "Photos" : "الصور"}
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

export default DepartMica;