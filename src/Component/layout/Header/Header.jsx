import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../context/LanguageContext';
import { useTheme } from '../../../context/ThemeContext'; // إضافة ThemeContext
import './Header.css';
import logo1 from '../../../assets/Image/Logo/logo01.jpeg';
import logo2 from '../../../assets/Image/Logo/logo02.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const { isEnglish, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme(); // استخدام ThemeContext

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    }
  };

  const handleNavLinkClick = (title) => {
    setActiveDropdown(null); // Close any open dropdown
    setActiveSubmenu(null); // Close any open submenu
    if (window.innerWidth <= 1455) {
      setIsMobileMenuOpen(false); // Close mobile menu at <= 1455px
    }
    document.title = title; // Update the page title
  };

  const handleDropdownClick = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    } else {
      setActiveDropdown(dropdown);
      setActiveSubmenu(null);
    }
  };

  const handleSubmenuClick = (submenu, event) => {
    event.stopPropagation();
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  return (
    <div className={`header-wrapper ${isEnglish ? 'header-english-layout' : 'header-arabic-layout'}`}>
      <div className="header-top-header">
        <div className="header-top-header-container">
          <div className="header-logos-container">
            <Link to="/" className="header-logo header-logo-right" onClick={() => handleNavLinkClick(isEnglish ? "FAYOUM INTERNATIONAL TECHNOLOGICAL UNIVERSITY" : "جامعة الفيوم التكنولوجية الدولية")}>
              <img src={logo1} alt="جامعة الفيوم التكنولوجية الدولية" />
              <span>{isEnglish ? "FAYOUM INTERNATIONAL TECHNOLOGICAL UNIVERSITY" : "جامعة الفيوم التكنولوجية الدولية"}</span>
            </Link>
            <Link to="/" className="header-logo header-logo-left" onClick={() => handleNavLinkClick(isEnglish ? "FACULTY OF TECHNOLOGY IN FAYOUM" : "الكلية التكنولوجية بالفيوم")}>
              <img src={logo2} alt="الكلية التكنولوجية بالفيوم" />
              <span>{isEnglish ? "FACULTY OF TECHNOLOGY IN FAYOUM" : "الكلية التكنولوجية بالفيوم"}</span>
            </Link>
          </div>
        </div>
      </div>

      <div className={`header-main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <button 
            className="header-mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? '✖' : '☰'}
          </button>
          <nav className={`header-nav-links ${isMobileMenuOpen ? 'header-mobile-open' : ''}`}>
            <Link to="/" className="header-nav-link" onClick={() => handleNavLinkClick(isEnglish ? "Home" : "الرئيسية")}>
              {isEnglish ? "Home" : "الرئيسية"}
            </Link>
            
            <div className="header-dropdown-container">
              <p 
                className="header-dropdown-trigger"
                onClick={() => handleDropdownClick('about')}
                aria-expanded={activeDropdown === 'about'}
              >
                {isEnglish ? "About University ▾" : " عن الجامعة ▾ " }
              </p>
              {activeDropdown === 'about' && (
                <div className="header-dropdown-menu header-about-menu">
                  <div className="header-dropdown-item">
                    <Link to="/VisionMission" className="header-menu-link" onClick={() => handleNavLinkClick(isEnglish ? "Vision & Mission" : "الرؤية والرسالة")}>
                      <div className="header-menu-content">
                        {isEnglish ? "Vision & Mission" : "الرؤية والرسالة"}
                      </div>
                    </Link>
                  </div>
                  <div className="header-dropdown-item">
                    <Link to="/GoalsValues" className="header-menu-link" onClick={() => handleNavLinkClick(isEnglish ? "Goals & Values" : "الأهداف والقيم")}>
                      <div className="header-menu-content">
                        {isEnglish ? "Goals & Values" : "الأهداف والقيم"}
                      </div>
                    </Link>
                  </div>
                  <div className="header-dropdown-item">
                    <Link to="/UniversityIntro" className="header-menu-link" onClick={() => handleNavLinkClick(isEnglish ? "About the University" : "تعرف على الجامعة")}>
                      <div className="header-menu-content">
                        {isEnglish ? "About the University" : "تعرف على الجامعة"}
                      </div>
                    </Link>
                  </div>
                  <div className="header-dropdown-item">
                    <Link to="/DeanPro" className="header-menu-link" onClick={() => handleNavLinkClick(isEnglish ? "Dean of the College" : "عميد الكلية ")}>
                      <div className="header-menu-content">
                        {isEnglish ? "Dean of the College" : "عميد الكلية "}
                      </div>
                    </Link>
                  </div>
                  <div className="header-dropdown-item">
                    <Link to="/SupremeCouncil" className="header-menu-link" onClick={() => handleNavLinkClick(isEnglish ? "Supervisory Council" : " المجلس الاعلى للتعليم التكنولوجي")}>
                      <div className="header-menu-content">
                        {isEnglish ? "Supervisory Council" : " المجلس الاعلى للتعليم التكنولوجي"}
                      </div>
                    </Link>
                  </div>
                  <div className="header-dropdown-item">
                    <Link to="/FacultyMembers" className="header-menu-link" onClick={() => handleNavLinkClick(isEnglish ? "Faculty Members" : " اعضاء هيئة التدريس ")}>
                      <div className="header-menu-content">
                        {isEnglish ? "Faculty Members" : " اعضاء هيئة  التدريس "}
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="header-dropdown-container">
              <p 
                className="header-dropdown-trigger"
                onClick={() => handleDropdownClick('programs')}
                aria-expanded={activeDropdown === 'programs'}
              >
                {isEnglish ? "Academic Programs ▾" : " البرامج الأكاديمية ▾" }
              </p>
              {activeDropdown === 'programs' && (
                <div className="header-dropdown-menu header-programs-menu">
                  <div className="header-dropdown-item header-has-submenu">
                    <div className="header-submenu-header">
                      <p 
                        className="header-submenu-trigger"
                        onClick={(e) => handleSubmenuClick('engineering', e)}
                        aria-expanded={activeSubmenu === 'engineering'}
                      >
                        <span>{isEnglish ? "Engineering Programs ▸" : " تعرف على البرامج الجامعة ▸"}</span>
                      </p>
                    </div>
                    {activeSubmenu === 'engineering' && (
                      <div className="header-submenu">
                        <Link to="/it" className="header-submenu-item" onClick={() => handleNavLinkClick(isEnglish ? "Information Technology" : "برنامج تكنولوجيا المعلومات")}>
                          {isEnglish ? "Information Technology" : "برنامج تكنولوجيا المعلومات"}
                        </Link>
                        <Link to="/ind" className="header-submenu-item" onClick={() => handleNavLinkClick(isEnglish ? "Industrial Engineering" : "برنامج اليه صناعية")}>
                          {isEnglish ? "Industrial Engineering" : "برنامج اليه صناعية"}
                        </Link>
                        <Link to="/Auto" className="header-submenu-item" onClick={() => handleNavLinkClick(isEnglish ? "Automotive Engineering" : "برنامج اتوترونكس")}>
                          {isEnglish ? "Automotive Engineering" : "برنامج اتوترونكس"}
                        </Link>
                        <Link to="/mica" className="header-submenu-item" onClick={() => handleNavLinkClick(isEnglish ? "Mechatronics Engineering" : "برنامج ميكاترونكس")}>
                          {isEnglish ? "Mechatronics Engineering" : "برنامج ميكاترونكس"}
                        </Link>
                      </div>
                    )}
                  </div>
                  
                  <div className="header-dropdown-item header-has-submenu">
                    <div className="header-submenu-header">
                      <p 
                        className="header-submenu-trigger"
                        onClick={(e) => handleSubmenuClick('it', e)}
                        aria-expanded={activeSubmenu === 'it'}
                      >
                        <span>{isEnglish ? "Academic Programs ▸" : "المقررات الدراسية▸"}</span>
                      </p>
                    </div>
                    {activeSubmenu === 'it' && (
                      <div className="header-submenu">
                        <Link to="https://drive.google.com/drive/folders/1JTcYF-mKaUDrpN5aIZEgbvpyDisLghbC" className="header-submenu-item" onClick={() => handleNavLinkClick(isEnglish ? "Information Technology" : "برنامج تكنولوجيا المعلومات")}>
                          {isEnglish ? "Information Technology" : "برنامج تكنولوجيا المعلومات"}
                        </Link>
                        <Link to="https://drive.google.com/drive/folders/1SZgR3rl3KDFRz97d_xjqep9NRhRBeRbO" className="header-submenu-item" onClick={() => handleNavLinkClick(isEnglish ? "Industrial Engineering" : "برنامج اليه صناعية")}>
                          {isEnglish ? "Industrial Engineering" : "برنامج اليه صناعية"}
                        </Link>
                        <Link to="https://drive.google.com/drive/folders/1PNlT3XP2aRViZWdmL_cOkLvfHkFbhmaq" className="header-submenu-item" onClick={() => handleNavLinkClick(isEnglish ? "Automotive Engineering" : "برنامج اتوترونكس")}>
                          {isEnglish ? "Automotive Engineering" : "برنامج اتوترونكس"}
                        </Link>
                        <Link to="https://drive.google.com/drive/folders/1GQ7ffGkOTVJYHGnWOAQIlGDfC9c4sD_F" className="header-submenu-item" onClick={() => handleNavLinkClick(isEnglish ? "Mechatronics Engineering" : "برنامج ميكاترونكس")}>
                          {isEnglish ? "Mechatronics Engineering" : "برنامج ميكاترونكس"}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="header-dropdown-container">
              <p 
                className="header-dropdown-trigger"
                onClick={() => handleDropdownClick('education')}
                aria-expanded={activeDropdown === 'education'}
              >
                {isEnglish ? "Education and Students ▾" : "التعليم والطلاب ▾"}
              </p>
              {activeDropdown === 'education' && (
                <div className="header-dropdown-menu header-education-menu">
                  <div className="header-dropdown-item">
                    <Link to="/StudentActivities" className="header-menu-link" onClick={() => handleNavLinkClick(isEnglish ? "Activities Plan" : "خطة الأنشطة")}>
                      <div className="header-menu-content">
                        {isEnglish ? "Activities Plan" : "خطة الأنشطة"}
                      </div>
                    </Link>
                  </div>
                  <div className="header-dropdown-item">
                    <Link to="/training" className="header-menu-link" onClick={() => handleNavLinkClick(isEnglish ? "Workshop Training" : "التدريب العملي")}>
                      <div className="header-menu-content">
                        {isEnglish ? "Workshop Training" : "التدريب العملي"}
                      </div>
                    </Link>
                  </div>
                  <div className="header-dropdown-item">
                    <Link to="/Post" className="header-menu-link" onClick={() => handleNavLinkClick(isEnglish ? "Graduation Areas" : "مجالات ما بعد التخرج")}>
                      <div className="header-menu-content">
                        {isEnglish ? "Graduation Areas" : "مجالات ما بعد التخرج"}
                      </div>
                    </Link>
                  </div>
                  <div className="header-dropdown-item">
                    <Link to="https://www.facebook.com/share/16mjsQt1uN/" className="header-menu-link" onClick={() => handleNavLinkClick(isEnglish ? "Students Contact" : "تواصل الطلاب")}>
                      <div className="header-menu-content">
                        {isEnglish ? "Students Contact" : "تواصل الطلاب"}
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/college-result" className="header-nav-link" onClick={() => handleNavLinkClick(isEnglish ? "Result" : "عرض النتيجة")}>
              {isEnglish ? "Result" : "عرض النتيجة"}
            </Link>

            <Link to="/MediaOffice" className="header-nav-link" onClick={() => handleNavLinkClick(isEnglish ? "Admission" : " المكتب  الاعلامي ")}>
              {isEnglish ? "Admission" : " المكتب  الاعلامي "}
            </Link>

            <Link to="/Contact" className="header-nav-link" onClick={() => handleNavLinkClick(isEnglish ? "Contact Us" : "تواصل معنا ")}>
              {isEnglish ? "Contact Us" : "تواصل معنا "}
            </Link>
            
            <Link to="/AdminPanel" className="header-nav-link" onClick={() => handleNavLinkClick(isEnglish ? "Management" : " الادارة ")}>
              {isEnglish ? "Management" : "الادارة"}
            </Link>


            <div className="header-controls">
              <button 
                onClick={toggleLanguage} 
                className="header-language-btn"
                aria-label={isEnglish ? "Switch to Arabic" : "التبديل للغة الإنجليزية"}
              >
                {isEnglish ? "العربية" : "English"}
              </button>
              
              <button 
                onClick={toggleTheme} // استخدام toggleTheme بدل toggleDarkMode
                className="header-dark-mode-btn"
                aria-label={theme === 'dark' ? "Switch to Light Mode" : "التبديل للوضع الداكن"}
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;