import React from 'react';
import './footer.css';
import { useLanguage } from '../../../context/LanguageContext';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { MdFax } from 'react-icons/md';
import logo from '../../../assets/Image/Logo/logo.jpeg';
const Footer = () => {
  const { isEnglish } = useLanguage();

  return (
    <div className={`footer-container-main ${isEnglish ? 'footer-english-lang' : 'footer-arabic-lang'}`}>
      <div className="footer-content-wrapper">

       {/* Contact Section */}
        <div className="footer-section-contact">
          <div className="footer-section-title">
            {isEnglish ? 'Contact Us' : 'تواصل معنا'}
          </div>
          <div className="footer-contact-info">
            <div className="footer-contact-item">{isEnglish ? 'Fayoum Technological University' : 'جامعة الفيوم  التكنولوجية'}</div>
            <div className="footer-contact-item">{isEnglish ? 'Fayoum Technological University - Fayoum - Old Demo' : ' جامعة الفيوم التكنولوجية - الفيوم - دمو القديمة '}</div>
            <div className="footer-contact-item"><span className="footer-contact-icon"><FaPhone /></span> 0020482590372</div>
            <div className="footer-contact-item"><span className="footer-contact-icon"><MdFax /></span> 0020482590375</div>
            <div className="footer-contact-item"><span className="footer-contact-icon"><FaEnvelope /></span> info@dtu.edu.eg</div>
          </div>
        </div>


        {/* Related Sites Section */}
        <div className="footer-section-links">
          <div className="footer-section-title">
            {isEnglish ? 'Related Sites' : 'مواقع ذات صلة'}
          </div>
          <div className="footer-links-list">
            <div className="footer-link-item"><a href="https://scu.eg/" target='_blank' className="footer-link">{isEnglish ? 'Supreme Council of Universities' : 'المجلس الأعلى للجامعات'}</a></div>
            <div className="footer-link-item"><a href="https://mohesr.gov.eg/ar-eg/Pages/Home.aspx" target='_blank' className="footer-link">{isEnglish ? 'Ministry of Higher Education' : 'وزارة التعليم العالي'}</a></div>
            <div className="footer-link-item"><a href="https://naqaae.eg/" target='_blank' className="footer-link">{isEnglish ? 'Education Quality Authority' : 'الهيئة القومية لضمان جودة التعليم'}</a></div>
            <div className="footer-link-item"><a href="https://scu.eg/eksc_units/%D8%B4%D8%A8%D9%83%D8%A9-%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D9%87/" target='_blank' className="footer-link">{isEnglish ? 'Egyptian Universities Network' : 'شبكة الجامعات المصرية  '}</a></div>
            <div className="footer-link-item"><a href="https://www.ekb.eg/" target='_blank' className="footer-link">{isEnglish ? 'Egyptian Knowledge Bank' : 'بنك المعرفة المصري '}</a></div>
          </div>
        </div>

       
        {/* About Section */}
        <div className="footer-section-about">
          <img src={logo} alt="DTU Logo" className="footer-logo-image" />
          <div className="footer-about-text">
            {isEnglish
              ? 'Technological universities aim to provide students with practical and scientific skills to match the labor market needs. These universities operate through affiliated colleges and focus on national project needs.'
              : 'تعد الجامعات التكنولوجية امتداداً لمسار طلاب التعليم الفني والتي تعمل على إكسابهم المهارات العملية والعلمية لمواكبة متطلبات سوق العمل المحلي والدولي. والتي يتم تطبيقها بالكليات التابعة للجامعة، والتي وضعت بناء على احتياجات المشروعات القومية وجغرافية الجامعات.'}
          </div>
        </div>

       
         {/* Educational Programs Section */}
        <div className="footer-section-programs">
          <div className="footer-section-title">
            {isEnglish ? 'Educational Programs' : 'البرامج التعليمية'}
          </div>
          <div className="footer-programs-list">
            <div className="footer-program-item"><a href="/it" className="footer-program-link">{isEnglish ? 'Information Technology Program' : 'برنامج تكنولوجيا المعلومات'}</a></div>
            <div className="footer-program-item"><a href="/mica" className="footer-program-link">{isEnglish ? 'Mechatronics Program' : 'برنامج  ميكاترونكس '}</a></div>
            <div className="footer-program-item"><a href="/ind" className="footer-program-link">{isEnglish ? 'Industrial Engineering Program' : 'برنامج  اليه صناعية '}</a></div>
            <div className="footer-program-item"><a href="/auto" className="footer-program-link">{isEnglish ? 'Automotive Engineering Program' : 'برنامج  اتوترونكس '}</a></div>
          </div>
        </div>


         
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom-section">
        <div className="footer-bottom-text">
          {isEnglish
            ? 'All rights reserved © 2025 -  Fayoum Technological University'
            : 'جميع الحقوق محفوظة © 2025 -  جامعة الفيوم التكنولوجية الدولية ' }
        </div>
      </div>
    </div>
  );
};

export default Footer;