import React, { useState, useEffect } from 'react';
import '../Style/depart.css';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext'; // استيراد ThemeContext
import Chart from 'chart.js/auto';

// استيراد الصور المحلية
import headImage from '../assets/Image/Dr/face.jpg';
import labImage from '../assets/Image/Image/3.png';
import graduationImage from '../assets/Image/Image/1.png';
import workshopImage from '../assets/Image/Image/4.png';
import visitImage from '../assets/Image/Image/download.jpeg';
import eventImage from '../assets/Image/Image/2.png';

import first_year from '../assets/Image/Semester/sem1.png';
import second_year from '../assets/Image/Semester/sem2.png';
import third_year_pro from '../assets/Image/Semester/sem3.jpg';
import third_year_net from '../assets/Image/Semester/sem4n.png';
import fifth_year_pro from '../assets/Image/Semester/sem4.png';
import fifth_year_net from '../assets/Image/Semester/semester1.2.png';

const ITDepartment = () => {
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
    isEnglish ? "Programming Fundamentals" : "أساسيات البرمجة",
    isEnglish ? "Web Development (HTML, CSS, JavaScript)" : "تطوير الويب (HTML, CSS, JavaScript)",
    isEnglish ? "Mobile App Development (Android, iOS)" : "برمجة تطبيقات الهاتف (Android, iOS)",
    isEnglish ? "Computer Networks and Cybersecurity" : "شبكات الحاسوب والأمن السيبراني",
    isEnglish ? "Databases (SQL, NoSQL)" : "قواعد البيانات (SQL, NoSQL)",
    isEnglish ? "Data Analysis and Machine Learning" : "تحليل البيانات والتعلم الآلي",
    isEnglish ? "Web Development with React" : "تطوير الويب باستخدام React",
    isEnglish ? "Operating Systems and Server Management" : "أنظمة التشغيل وإدارة الخوادم",
    isEnglish ? "Internet of Things (IoT)" : "إنترنت الأشياء (IoT)"
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
        <h3>{isEnglish ? "Dr. Israa Al-Hariri" : "د. إسراء الحريري"}</h3>
        <p className='depart-paragraph'>{isEnglish ? "Head of Information Technology Department" : "رئيس قسم تكنولوجيا المعلومات"}</p>
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
                <h3>{isEnglish ? "About IT Department" : "عن قسم تكنولوجيا المعلومات"}</h3>
              </header>
              <div className="section-content">
                <article>
                  <p className='depart-paragraph'>
                    {isEnglish
                      ? "This specialization includes a wide range of curricula that all aim to produce competent specialists who can perform the tasks assigned to IT specialists. Among the fields of IT specialization:"
                      : "هذا التخصص يضم مجموعة واسعة من المناهج الدراسية التي تصب جميعها إلى إخراج متخصصين أكفاء يستطيعون أداء المهام المنوطة حول أخصائي تكنولوجيا المعلومات:"}
                  </p>
                  <p className='depart-text'>
                    {isEnglish
                      ? "Among the areas of specialization in information technology:"
                      : "من ضمن مجالات تخصص تقنية المعلومات:"}
                  </p>
                  <ul>
                    <li>{isEnglish ? "IT Fundamentals" : "أساسيات تكنولوجيا المعلومات"}</li>
                    <li>{isEnglish ? "Computer Science and Computer Engineering" : "علوم الحاسبات وهندسة الكمبيوتر"}</li>
                    <li>{isEnglish ? "Databases and Networks" : "قواعد البيانات والشبكات"}</li>
                    <li>{isEnglish ? "E-Management and Informatics" : "الإدارة الإلكترونية والمعلوماتية"}</li>
                    <li>{isEnglish ? "Communications and Computing Programs" : "مجالات الاتصالات وبرامج الحوسبة"}</li>
                    <li>{isEnglish ? "Information and Network Systems" : "الأنظمة المعلوماتية والشبكية"}</li>
                  </ul>
                  <p className='depart-paragraph'>
                    {isEnglish
                      ? "Along with many academic courses that have a commercial and financial nature, as a way to teach all the fields in which an IT specialist can work after graduation."
                      : "إلى جانب العديد من المقررات الدراسية التي تحمل طابعًا تجاريًا وماليًا، كنوع من تدريس كافة المجالات التي من الممكن أن يعمل بها متخصص تكنولوجيا المعلومات بعد تخرجه."}
                  </p>
                  <h4 className='depart-text'>{isEnglish ? "Graduate Work:" : "عمل الخريجين:"}</h4>
                  <p className='depart-paragraph'>
                    {isEnglish
                      ? "IT specialists find themselves in a sea of career opportunities that never runs out due to the great demand from various institutions in all fields to employ experts and specialists in this field."
                      : "يجد المتخصص في مجال تكنولوجيا المعلومات نفسه في بحر من الفرص الوظيفية، لا ينضب أبدًا بسبب الإقبال الكبير من كافة المؤسسات بمختلف مجالاتها، في توظيف خبراء ومتخصصين في هذا المجال."}
                  </p>
                  <p className='depart-text'>
                    {isEnglish
                      ? "Among the functional tasks performed by an IT specialist:"
                      : "من ضمن المهام الوظيفية التي يقوم بها المتخصص في مجالات تكنولوجيا المعلومات:"}
                  </p>
                  <ul>
                    <li>{isEnglish
                      ? "Planning and applying digital technology techniques to meet organizational goals"
                      : "تخطيط وتطبيق تقنيات التكنولوجيا الرقمية لتلبية الأهداف المؤسساتية"}</li>
                    <li>{isEnglish
                      ? "Developing information systems in administrative and engineering ways"
                      : "تطوير نظم المعلومات بشكل إداري وهندسي"}</li>
                    <li>{isEnglish
                      ? "Using and following up on the latest information systems technologies"
                      : "استخدام ومتابعة أحدث تقنيات نظم المعلومات"}</li>
                    <li>{isEnglish
                      ? "Software Delivery Specialist"
                      : "متخصص تسليم برمجيات"}</li>
                    <li>{isEnglish
                      ? "Information Systems Management Director"
                      : "مدير إدارة نظم معلومات"}</li>
                  </ul>
                  <p className='depart-paragraph'>
                    {isEnglish
                      ? "Along with many other functional tasks performed by IT specialists, in a way that ensures rapid career progression in all institutions where they can work. Salaries in the IT field are actually very competitive and are considered the best salary category in all industries; because this field combines the skills that are highly demanded in the labor market."
                      : "إلى جانب العديد من المهام الوظيفية الأخرى، التي يقوم بها المتخصص في تكنولوجيا المعلومات، بطريقة تضمن له التدرج الوظيفي السريع، في كافة المؤسسات التي من الممكن أن يعمل بها. رواتب العاملين في مجال تكنولوجيا المعلومات في الواقع تعد تنافسية جدًا، وتعتبر فئة الرواتب الأفضل في كل الصناعات؛ نظرًا لأن هذا المجال يجمع المهارات المطلوبة بشدة في سوق العمل."}
                  </p>
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
                <p className='depart-paragraph'>{isEnglish ? "Dear students," : "أعزائي الطلاب،"}</p>
                <p className='depart-paragraph'>
                  {isEnglish
                    ? "The IT department represents the cornerstone of your academic and professional journey. This department is not just a source for learning modern technology, but your gateway to a world full of opportunities and potentials that can change your professional life."
                    : "إن قسم تكنولوجيا المعلومات يمثل حجر الأساس في مسيرتكم الأكاديمية والمهنية. إن هذا القسم ليس مجرد مصدر لتعلم التقنية الحديثة وحسب، بل هو بوابتكم إلى عالم مليء بالفرص والإمكانات التي يمكن أن تغير حياتكم المهنية."}
                </p>
                <p className='depart-paragraph'>
                  {isEnglish
                    ? "In our current era, technology plays a vital role in all areas of life. From software development to network systems management, from data analysis to designing innovative solutions, this department will provide you with the tools and knowledge needed to be creative in this growing field."
                    : "في عصرنا الحالي، تلعب التكنولوجيا دورًا حيويًا في جميع مجالات الحياة. من تطوير البرمجيات إلى إدارة الأنظمة الشبكية، ومن تحليل البيانات إلى تصميم الحلول المبتكرة، وهذا القسم سوف يقدم لكم الأدوات والمعرفة اللازمة لتكونوا مبدعين في هذا المجال المتنامي."}
                </p>
                <p className='depart-paragraph'>
                  {isEnglish
                    ? "We are here to support you with all possible means, and to provide an educational environment that stimulates creativity and excellence. Your success is our success, and we look forward to seeing you achieve your goals and contribute to the advancement of this exciting field."
                    : "نحن هنا لدعمكم بكل الوسائل الممكنة، وتوفير بيئة تعليمية تحفز على الإبداع والتفوق. إن نجاحكم هو نجاح لنا، ونتطلع إلى رؤيتكم تحققون أهدافكم وتساهمون في تقدم هذا المجال المثير."}
                </p>
                <p className='depart-paragraph'>
                  {isEnglish
                    ? "Through your learning in the IT department, you will acquire the skills you need to keep up with the latest technological developments and apply them effectively. The department focuses on teaching you how to think critically and solve problems, which will support you in facing future challenges with confidence and professionalism. The department provides you with a set of specialized labs to effectively apply what you have studied. It also provides training opportunities in prestigious companies to keep pace with developing technology."
                    : "من خلال تعلمكم في قسم تكنولوجيا المعلومات، ستكتسبون المهارات التي تحتاجونها لمواكبة أحدث التطورات التكنولوجية وتطبيقها بشكل فعال. إن القسم يركز على تعليمكم كيفية التفكير النقدي وحل المشكلات، مما سيدعمكم لمواجهة تحديات المستقبل بثقة واحترافية. إن القسم يوفر لكم مجموعة من المعامل المتخصصة لتستطيعوا تطبيق ما تم دراسته بشكل فعال. ويوفر أيضًا فرص تدريبية في شركات مرموقة لمواكبة التكنولوجيا المتطورة."}
                </p>
                <p className='depart-paragraph'>
                  {isEnglish
                    ? "We wish you an outstanding educational experience and look forward to your wonderful achievements in the world of information technology."
                    : "نتمنى لكم تجربة تعليمية متميزة ونتطلع إلى إنجازاتكم الرائعة في عالم تكنولوجيا المعلومات."}
                </p>
                <address className="dr-name">
                  <p className='depart-paragraph'>{isEnglish ? "Dr. Israa Al-Hariri" : "أ.د./ إسراء الحريري"}</p>
                  <p className='depart-paragraph'>{isEnglish ? "Head of IT Department" : "رئيس قسم تكنولوجيا المعلومات"}</p>
                </address>
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
                  <img src={first_year} alt={isEnglish ? "First semester study plan" : "الخطة الدراسية للفصل الأول"} />
                </figure>
                <h3>{isEnglish ? "Second Year" : "الفرقة الثانية"}</h3>
                <figure>
                  <img src={second_year} alt={isEnglish ? "Second semester study plan" : "الخطة الدراسية للفصل الثاني"} />
                </figure>
                <h3>{isEnglish ? "Third Year: 'Programming Specialization'" : "الفرقة الثالثة: 'تخصص برمجة'"}</h3>
                <figure>
                  <img src={third_year_pro} alt={isEnglish ? "Third semester study plan" : "الخطة الدراسية للفصل الثالث"} />
                </figure>
                <h3>{isEnglish ? "Third Year: 'Networks Specialization'" : "الفرقة الثالثة: 'تخصص شبكات'"}</h3>
                <figure>
                  <img src={third_year_net} alt={isEnglish ? "Fourth semester study plan" : "الخطة الدراسية للفصل الرابع"} />
                </figure>
                <h3>{isEnglish ? "Fourth Year: 'Programming Specialization'" : "الفرقة الرابعة: 'تخصص برمجة'"}</h3>
                <figure>
                  <img src={fifth_year_pro} alt={isEnglish ? "Fifth semester study plan" : "الخطة الدراسية للفصل الخامس"} />
                </figure>
                <h3>{isEnglish ? "Fourth Year: 'Networks Specialization'" : "الفرقة الرابعة: 'تخصص شبكات'"}</h3>
                <figure>
                  <img src={fifth_year_net} alt={isEnglish ? "Sixth semester study plan" : "الخطة الدراسية للفصل السادس"} />
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
                  <img src={labImage} alt={isEnglish ? "Advanced computer lab" : "معمل الحاسوب المتقدم"} />
                </figure>
                <figure className="photo-item">
                  <img src={graduationImage} alt={isEnglish ? "New batch graduation ceremony" : "حفل تخريج الدفعة الجديدة"} />
                </figure>
                <figure className="photo-item">
                  <img src={workshopImage} alt={isEnglish ? "Student workshop" : "ورشة عمل للطلاب"} />
                </figure>
                <figure className="photo-item">
                  <img src={visitImage} alt={isEnglish ? "Field visit to a tech company" : "زيارة ميدانية لشركة تقنية"} />
                </figure>
                <figure className="photo-item">
                  <img src={eventImage} alt={isEnglish ? "National Day events" : "فعاليات اليوم الوطني"} />
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
                    ? "The IT department offers a variety of training courses aimed at enhancing students' skills and qualifying them for the job market:"
                    : "يقدم قسم تكنولوجيا المعلومات مجموعة متنوعة من الدورات التدريبية التي تهدف إلى تعزيز مهارات الطلاب وتأهيلهم لسوق العمل:"}
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

export default ITDepartment;