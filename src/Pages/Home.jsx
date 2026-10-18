import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import '../Style/Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import itImage from '../assets/Image/Image/it.jpg';
import industrialImage from '../assets/Image/Image/industrial.jpg';
import mechatronicsImage from '../assets/Image/Image/mica.jpg';
import autotronicsImage from '../assets/Image/Image/autotronics.jpg';
import back1 from '../assets/Image/Background/background1.jpg';
import back2 from '../assets/Image/Background/background2.jpg';
import back3 from '../assets/Image/Background/background12.jpg';
import back4 from '../assets/Image/Background/background13.jpg';
import back5 from '../assets/Image/Background/back21.jpg';
import back6 from '../assets/Image/Background/background15.jpg';
import back7 from '../assets/Image/Background/background16.jpg';
import back8 from '../assets/Image/Background/back22.jpg';
import back9 from '../assets/Image/Background/background18.jpg';
import back10 from '../assets/Image/Background/background19.jpg';

const Home = () => {
  const { isEnglish } = useLanguage();
  const { theme } = useTheme();
  const [currentBackground, setCurrentBackground] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleNews, setVisibleNews] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const statsRef = useRef(null);
  const sliderRef = useRef(null);
  const slideInterval = useRef(null);

  const backgrounds = [
    back1, back2, back3, back4, back5, back6, back7, back8, back9, back10
  ];

  const programs = [
    {
      image: itImage,
      title: isEnglish ? "Information Technology" : "تكنولوجيا المعلومات",
      alt: isEnglish ? "IT Program" : "برنامج تكنولوجيا المعلومات"
    },
    {
      image: industrialImage,
      title: isEnglish ? "Industrial Engineering" : "الهندسة الصناعية",
      alt: isEnglish ? "Industrial Engineering" : "برنامج الهندسة الصناعية"
    },
    {
      image: mechatronicsImage,
      title: isEnglish ? "Mechatronics" : "ميكاترونكس",
      alt: isEnglish ? "Mechatronics Program" : "برنامج ميكاترونكس"
    },
    {
      image: autotronicsImage,
      title: isEnglish ? "Automation & Control" : "أوتوترونكس",
      alt: isEnglish ? "Automation & Control" : "برنامج أوتوترونكس"
    }
  ];

  const newsData = [
    {
      id: 1,
      title: isEnglish ? "Opening of the new campus of Fayoum International Technological University" : "افتتاح الحرم الجديد لجامعة الفيوم التكنولوجية الدولية",
      summary: isEnglish ? "In the presence of the Minister of Higher Education, the new university campus was opened, which includes the latest technical equipment and advanced laboratories." : "بحضور وزير التعليم العالي، تم افتتاح الحرم الجامعي الجديد الذي يضم أحدث التجهيزات التقنية والمختبرات المتطورة.",
      date: isEnglish ? "10-15-2023" : "15-10-2023",
      category: isEnglish ? "General News" : "أخبار عامة",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 2,
      title: isEnglish ? "Signing a partnership agreement with IBM" : "توقيع اتفاقية شراكة مع شركة IBM",
      summary: isEnglish ? "The university signed a cooperation agreement with IBM to provide specialized training programs in artificial intelligence and data analysis." : "وقعت الجامعة اتفاقية تعاون progenitors شركة IBM لتوفير برامج تدريبية متخصصة في الذكاء الاصطناعي وتحليل البيانات.",
      date: isEnglish ? "12-22- 2023" : "22-12-2023",
      category: isEnglish ? "Partnerships" : "شراكات",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 3,
      title: isEnglish ? "Launch of Master's program in Internet of Things" : "إطلاق برنامج ماجستير في إنترنت الأشياء",
      summary: isEnglish ? "The university announced the start of registration for the specialized Master's program in Internet of Things (IoT) starting next semester." : "أعلنت الجامعة عن بدء التسجيل في برامج الماجستير المتخصص في إنترنت الأشياء (IoT) ابتداءً من الفصل القادم.",
      date: isEnglish ? "12-5-2023" : "5-12-2023",
      category: isEnglish ? "Academic Programs" : "برامج أكاديمية",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 4,
      title: isEnglish ? "University team wins Arab Robotics Competition" : "فوز فريق الجامعة بمسابقة الروبوتات العربية",
      summary: isEnglish ? "A student team from the Faculty of Engineering won first place in the Arab Robotics Competition held in Dubai." : "حقق فريق طلابي من كلية الهندسة المركز الأول في المسابقة العربية للروبوتات التي أقيمت في دبي.",
      date: isEnglish ? "1-10-2024" : "10-1-2024",
      category: isEnglish ? "Student Achievements" : "إنجازات طلابية",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 5,
      title: isEnglish ? "International symposium on the future of renewable energy" : "ندوة دولية حول مستقبل الطاقة المتجددة",
      summary: isEnglish ? "The university is organizing an international symposium with the participation of experts from 15 countries to discuss the latest developments in the field of clean energy." : "تنظم الجامعة ندوة دولية بمشاركة خبراء من 15 دولة لمناقشة أحدث التطورات في مجال الطاقة النظيفة.",
      date: isEnglish ? "2-18-2024" : "18-2-2024",
      category: isEnglish ? "Events" : "فعاليات",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
    }
  ];

  // Debounce function defined outside useEffect for stability
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      debounceDelay: 50,
      throttleDelay: 99
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 12000); // Changed from 8000 to 12000
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    startSlider();
    return () => {
      stopSlider();
    };
  }, []);

  useEffect(() => {
    const getRandomNews = () => {
      const shuffled = [...newsData].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 3);
    };

    setVisibleNews(getRandomNews());

    const intervalId = setInterval(() => {
      if (!isPaused) {
        setVisibleNews(getRandomNews());
      }
    }, 8000);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const startSlider = () => {
    stopSlider();
    slideInterval.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % programs.length);
    }, 3000);
  };

  const stopSlider = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    startSlider();
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % programs.length);
    startSlider();
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + programs.length) % programs.length);
    startSlider();
  };

  useEffect(() => {
    let animationFrameId;
    let hasAnimated = false;

    const animateCounters = () => {
      if (hasAnimated) return; // Prevent re-animation

      const statsPosition = statsRef.current?.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (statsPosition < screenPosition) {
        hasAnimated = true; // Mark as animated
        const counters = document.querySelectorAll('.counter');
        const duration = 2000; // Reduced from 3000 for faster animation
        const startTime = performance.now();

        const updateAllCounters = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const value = Math.floor(progress * target);
            counter.innerText = value.toLocaleString();
          });

          if (progress < 1) {
            animationFrameId = requestAnimationFrame(updateAllCounters);
          } else {
            counters.forEach(counter => {
              const target = +counter.getAttribute('data-target');
              counter.innerText = target.toLocaleString();
            });
          }
        };

        animationFrameId = requestAnimationFrame(updateAllCounters);
        window.removeEventListener('scroll', debouncedAnimate); // Remove listener after starting
      }
    };

    const debouncedAnimate = debounce(animateCounters, 200);
    window.addEventListener('scroll', debouncedAnimate);

    return () => {
      window.removeEventListener('scroll', debouncedAnimate);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`home ${theme === 'dark' ? 'dark-mode' : ''} ${isEnglish ? 'english-layout' : 'arabic-layout'}`}>
      <div 
        className="background-slider"
        style={{
          backgroundImage: `url(${backgrounds[currentBackground]})`,
          transition: 'opacity 0.5s ease-in-out'
        }}
      />
      
      <section className="hero" data-aos="fade-up">
        <div className="hero-content">
          <h1>{isEnglish ? "Fayoum International Technological University" : "جامعة الفيوم التكنولوجية الدولية"}</h1>
          <p>{isEnglish ? "Towards a Promising Digital Future" : "نحو مستقبل رقمي واعد"}</p>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2 className="section-title">{isEnglish ? "About the University" : "عن الجامعة"}</h2>
          <div className="divider"></div>
          
          <div className="about-content">
            <p>
              {isEnglish ? `The presidential decree to establish Fayoum International Technological University was published in the official gazette on June 3, 2022, regarding the issuance of Law No. 72 of 2019 to establish technological universities, as this step is an important shift in creating a new path for technical education in Egypt.` : 
                `صدر القرار الجمهوري بإنشاء جامعة الفيوم التكنولوجية الدولية بالجريدة الرسمية بتاريخ 3 يونيو 2022 والخاص بإصدار القانون رقم 72 لسنة 2019 بإنشاء الجامعات التكنولوجية، لتعد هذه الخطوة نقلة هامة في استحداث مسار جديد للتعليم الفني في مصر.`}
            </p>
            <p>
              {isEnglish ? `The technological universities are an extension of the path for technical education students, working to provide them with practical and scientific skills to keep pace with the requirements of the local and international labor market, through the technological programs implemented in the university's affiliated colleges, which were established based on the needs of national projects and the geography of the universities.` :
                `وتعد الجامعات التكنولوجية امتدادًا لمسار طلاب التعليم الفني التي تعمل على إكسابهم المهارات العملية والعلمية لمواكبة متطلبات سوق العمل المحلي والدولي، وذلك من خلال البرامج التكنولوجية التي يتم تطبيقها بالكليات التابعة للجامعة، والتي وضعت بناءً على احتياجات المشروعات القومية وجغرافية الجامعات.`}
            </p>
            <p className='about-paragraph'>
              {isEnglish ? "Fayoum International Technological University includes the Egyptian College of Technology, and the college has four programs as follows:" : "تضم جامعة الفيوم التكنولوجية الدولية الكلية التكنولوجية بالفيوم، ويوجد بالكلية أربعة برامج وهم كالآتي:"}
            </p>
            <ul>
              <li>{isEnglish ? "Mechatronics Program" : "برنامج الميكاترونكس"}</li>
              <li>{isEnglish ? "Information Technology Program" : "برنامج تكنولوجيا المعلومات"}</li>
              <li>{isEnglish ? "Autotronics Program" : "برنامج الأوتوترونكس"}</li>
              <li>{isEnglish ? "Industrial Engineering Program" : "برنامج الهندسة الصناعية"}</li>
            </ul>
            <p className='about-paragraph'>
              {isEnglish ? "Fayoum International Technological University grants the following academic degrees based on the approval of the University Council:" : "تمنح جامعة الفيوم التكنولوجية الدولية بناءً على اعتماد مجلس الجامعة الدرجات العلمية الآتية:"}
            </p>
            <ul>
              <li>{isEnglish ? "Higher Professional Diploma in Technology in the specialization" : "الدبلوم العالي المهني في التكنولوجيا في التخصص"}</li>
              <li>{isEnglish ? "Professional Bachelor's in Technology in the specialization" : "البكالوريوس المهني في التكنولوجيا في التخصص"}</li>
              <li>{isEnglish ? "Professional Master's in Technology in the specialization" : "الماجستير المهني في التكنولوجيا في التخصص"}</li>
              <li>{isEnglish ? "Professional Doctorate in Technology in the specialization" : "الدكتوراه المهنية في التكنولوجيا في التخصص"}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="university-stats-ultimate" ref={statsRef} data-aos="fade-up">
        <div className="stats-container">
          <div className="stats-header">
            <h2 className="section-title">{isEnglish ? "Our Achievements in Numbers" : "إنجازاتنا في أرقام"}</h2>
            <div className="divider"></div>
            <p className="stats-subtitle">{isEnglish ? "The milestones we're proud of" : "المعالم التي نفخر بها"}</p>
          </div>
          <div className="stats-grid">
            <div className="stat-card" data-aos="fade">
              <div className="stat-circle student-stat">
                <div className="stat-icon"></div>
                <div className="counter" data-target="5000">0</div>
                <div className="stat-title">{isEnglish ? "Students" : "طلاب"}</div>
              </div>
              <div className="stat-description">{isEnglish ? "Future innovators learning with us" : "مبتكرون المستقبل يتعلمون معنا"}</div>
            </div>
            <div className="stat-card" data-aos="fade">
              <div className="stat-circle faculty-stat">
                <div className="stat-icon"></div>
                <div className="counter" data-target="50">0</div>
                <div className="stat-title">{isEnglish ? "Faculty Members" : "أعضاء هيئة تدريس"}</div>
              </div>
              <div className="stat-description">{isEnglish ? "Experts guiding the way" : "خبراء يرشدون الطريق"}</div>
            </div>
            <div className="stat-card" data-aos="fade">
              <div className="stat-circle programs-stat">
                <div className="stat-icon"></div>
                <div className="counter" data-target="4">0</div>
                <div className="stat-title">{isEnglish ? "Study Programs" : "برامج دراسية"}</div>
              </div>
              <div className="stat-description">{isEnglish ? "Cutting-edge disciplines" : "تخصصات متطورة"}</div>
            </div>
            <div className="stat-card" data-aos="fade">
              <div className="stat-circle graduates-stat">
                <div className="stat-icon"></div>
                <div className="counter" data-target="1200">0</div>
                <div className="stat-title">{isEnglish ? "Graduates" : "خريجون"}</div>
              </div>
              <div className="stat-description">{isEnglish ? "Building successful careers" : "يبنون مستقبلًا ناجحًا"}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="programs-section">
        <div className="container">
          <h2 className="section-title">{isEnglish ? "Our Study Programs" : "البرامج الدراسية"}</h2>
          <div className="divider"></div>
          <div className="programs-slider" ref={sliderRef}>
            <div className="slider-container">
              {programs.map((program, index) => (
                <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                  <div className="image_container">
                    <img
                      className="slider-image"
                      src={program.image}
                      alt={program.alt}
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/800x400?text=${program.title.replace(/\s+/g, '+')}`;
                        e.target.onerror = null;
                      }}
                      loading="lazy"
                    />
                    <h3>{program.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <button className="slider-nav prev" onClick={prevSlide} aria-label="Previous">
              <span>&lt;</span>
            </button>
            <button className="slider-nav next" onClick={nextSlide} aria-label="Next">
              <span>&gt;</span>
            </button>
            <div className="slider-dots">
              {programs.map((_, index) => (
                <button
                  key={index}
                  className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="news-section" data-aos="fade-up">
        <header className="section-header">
          <h2 className="news-main-title">{isEnglish ? "Latest News" : "أحدث الأخبار"}</h2>
          <div className="divider"></div>
          <p className="news-subtitle">
            {isEnglish ? "Stay updated with our university news" : "تابع آخر المستجدات والتطورات في جامعتنا"}
          </p>
        </header>
        <div className="news-content">
          <div className="news-controls">
            <button onClick={() => setIsPaused(!isPaused)} className="pause-button">
              {isPaused ? (isEnglish ? "Resume" : "استئناف") : (isEnglish ? "Pause" : "إيقاف مؤقت")}
            </button>
          </div>
          <div className="news-grid">
            {visibleNews.map(item => (
              <article key={item.id} className="news-card" data-aos="fade-up">
                <div className="news-image-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="news-image"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/800x400?text=${item.title.replace(/\s+/g, '+')}`;
                      e.target.onerror = null;
                    }}
                  />
                </div>
                <div className="card-content">
                  <div className={`card-header ${isEnglish ? 'english-header' : 'arabic-header'}`}>
                    <span className="news-category">{item.category}</span>
                    <time className="news-date">{item.date}</time>
                  </div>
                  <h3 className="News-title">{item.title}</h3>
                  <p className="news-summary">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="news-footer">
            <Link to="/MediaOffice" className="view-all-btn">
              {isEnglish ? "View All News" : "عرض جميع الأخبار"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;