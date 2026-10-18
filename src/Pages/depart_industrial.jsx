import React, { useState, useEffect } from 'react';
import '../Style/depart.css';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import Chart from 'chart.js/auto';

// استيراد الصور المحلية
import headImage from '../assets/Image/Dr/Dr.jpeg';
import i1 from '../assets/Image/Image/H.jpeg';
import i2 from '../assets/Image/Image/5.png';
import i3 from '../assets/Image/Image/Ijpeg.jpeg';
import i4 from '../assets/Image/Image/6.png';
import i5 from '../assets/Image/Image/images4.png';

import first from '../assets/Image/Semester/firstYear.png';
import second from '../assets/Image/Semester/secondYear.png';
import third from '../assets/Image/Semester/thirdYear.png';
import fifth from '../assets/Image/Semester/fifthYear.png';

const Industrial = () => {
  const [activeSection, setActiveSection] = useState('about');
  const { isEnglish } = useLanguage();
  const { theme } = useTheme();
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
    2024: { first: 78, second: 75, third: 72 },
    2025: { first: 80, second: 77, third: 74, fourth: 70 }
  };

  const HeadImageComponent = () => (
    <div className={`head-image-container ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="circle-frame">
        <img src={headImage} alt={isEnglish ? "Department Head" : "رئيس القسم"} />
      </div>
      <div className="head-info">
        <h3>{isEnglish ? "Dr. Hajjaj Maher" : "د. حجاج ماهر"}</h3>
        <p className='depart-paragraph'>{isEnglish ? "Head of Industrial Mechanism Department" : "رئيس قسم الآلية الصناعية"}</p>
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
          labels: ["2022", "2023", "2024", "2025"],
          datasets: [
            {
              label: isEnglish ? "First Year" : "السنة الأولى",
              data: [75, 72, 78, 80],
              backgroundColor: "#4a6baf",
              borderColor: "#4a6baf",
              borderWidth: 1
            },
            {
              label: isEnglish ? "Second Year" : "السنة الثانية",
              data: [78, 68, 75, 77],
              backgroundColor: "#6a8bcf",
              borderColor: "#6a8bcf",
              borderWidth: 1
            },
            {
              label: isEnglish ? "Third Year" : "السنة الثالثة",
              data: [85, 89, 72, 74],
              backgroundColor: "#8aabef",
              borderColor: "#8aabef",
              borderWidth: 1
            },
            {
              label: isEnglish ? "Fourth Year" : "السنة الرابعة",
              data: [75, 76, 77, 70],
              backgroundColor: "#aacbff",
              borderColor: "#aacbff",
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
    }, [theme, isEnglish]);

    const maxFirst = Math.max(...Object.values(data).map(d => d.first));
    const maxSecond = Math.max(...Object.values(data).map(d => d.second || 0));
    const maxThird = Math.max(...Object.values(data).map(d => d.third || 0));
    const maxFourth = Math.max(...Object.values(data).map(d => d.fourth || 0));

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
                <h3>{isEnglish ? "About Industrial Mechanisms Department" : "عن قسم الآلية الصناعية"}</h3>
              </header>
              <div className="section-content">
                <article>
                  {isEnglish ? (
                    <>
                      <p className='depart-paragraph'>
                        The Industrial Mechanisms Department is one of the applied engineering disciplines that focuses on designing, operating, and maintaining mechanical systems and mechanisms used in factories and industrial facilities. This specialization differs from Industrial Engineering in that it is more specialized in the mechanical and kinematic aspects of machines, rather than focusing on process improvement and management.
                      </p>
                      <p className='depart-text'>
                        About the Department:
                      </p>
                      <ul>
                        <li>Design of industrial machines such as conveyors, robots, and transportation systems</li>
                        <li>Analysis of mechanical motion of systems (Kinematics & Dynamics)</li>
                        <li>Maintenance of industrial equipment and fault diagnosis</li>
                        <li>Automation using hydraulic, pneumatic, and PLC systems</li>
                      </ul>
                      <h4 className='depart-text'>Graduate Work Fields:</h4>
                      <ul>
                        <li>Industrial Mechanical Maintenance Technician</li>
                        <li>Industrial Robotics Operator and Programmer</li>
                        <li>Hydraulic and Pneumatic Systems Technician</li>
                        <li>CNC Machine Operator</li>
                        <li>Automation Control Technician</li>
                        <li>Industrial Safety Systems Technician</li>
                        <li>Industrial Spare Parts Salesperson</li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <p className='depart-paragraph'>
                        قسم آليات صناعية (Industrial Mechanism) هو أحد التخصصات الهندسية التطبيقية التي تركز على تصميم، تشغيل، وصيانة الأنظمة الميكانيكية والآليات المستخدمة في المصانع والمنشآت الصناعية. يختلف هذا التخصص عن الهندسة الصناعية (Industrial Engineering) في كونه أكثر تخصصًا في الجانب الميكانيكي والحركي للآلات، بدلًا من التركيز على تحسين العمليات والإدارة.
                      </p>
                      <p className='depart-text'>
                        عن القسم:
                      </p>
                      <ul>
                        <li>تصميم الآلات الصناعية مثل الناقلات (Conveyors)، الروبوتات، وأنظمة النقل</li>
                        <li>تحليل الحركة الميكانيكية للأنظمة (Kinematics & Dynamics)</li>
                        <li>صيانة المعدات الصناعية وتشخيص الأعطال</li>
                        <li>التشغيل الآلي (Automation) باستخدام أنظمة هيدروليك، نيوماتيك، وPLC</li>
                      </ul>
                      <h4 className='depart-text'>مجالات عمل خريجي قسم آلية صناعية:</h4>
                      <ul>
                        <li>فني صيانة ميكانيكية صناعية</li>
                        <li>مشغل ومبرمج روبوتات صناعية</li>
                        <li>فني أنظمة هيدروليك ونيوماتيك</li>
                        <li>مشغل آلات CNC</li>
                        <li>فني تحكم آلي</li>
                        <li>تقني أنظمة السلامة الصناعية</li>
                        <li>بائع قطع غيار صناعية</li>
                      </ul>
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
                      Within the framework of Egypt's Vision 2030 and the Egyptian state's interest in technical and technological education as a fundamental pillar for industrial development, and coinciding with the establishment of technological universities in 2019 as an advanced educational edifice that keeps pace with the requirements of the age, I am pleased to welcome you to the Industrial Mechanisms Department at Delta Technological University.
                    </p>
                    <p className='depart-paragraph'>
                      The department has been equipped with the latest laboratories and workshops equipped with advanced machines and technologies to graduate technical cadres capable of leading the industrial sector. The opening of this program comes in response to the urgent needs of the local and regional labor market, and in line with the major development projects witnessed by Egypt in all industrial fields.
                    </p>
                    <address className="dr-name">
                      <p className='depart-paragraph'>Dr. Hajjaj Maher</p>
                      <p className='depart-paragraph'>Head of Industrial Mechanism Department</p>
                    </address>
                  </>
                ) : (
                  <>
                    <p className='depart-paragraph'>
                      في إطار رؤية مصر 2030 واهتمام الدولة المصرية بالتعليم الفني والتكنولوجي كركيزة أساسية للتنمية الصناعية، وتزامناً مع إنشاء الجامعات التكنولوجية عام 2019 كصرح تعليمي متطور يواكب متطلبات العصر، يسرني أن أرحب بكم في قسم الآليات الصناعية بجامعة الدلتا التكنولوجية.
                    </p>
                    <p className='depart-paragraph'>
                      لقد تم تجهيز القسم بأحدث المعامل والورش المجهزة بالآلات والتقنيات المتطورة لتخريج كوادر فنية قادرة على قيادة القطاع الصناعي، حيث يأتي افتتاح هذا البرنامج استجابةً للاحتياجات الملحة لسوق العمل المحلي والإقليمي، وتماشياً مع المشروعات التنموية الكبرى التي تشهدها مصر في كافة المجالات الصناعية.
                    </p>
                    <address className="dr-name">
                      <p className='depart-paragraph'>د. حجاج ماهر</p>
                      <p className='depart-paragraph'>رئيس قسم الآلية الصناعية</p>
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

export default Industrial;