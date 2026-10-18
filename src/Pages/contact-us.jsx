// src/components/ContactUs.js
import React, { useState } from 'react';
import '../Style/contact-us.css';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import backgroundImage from '../assets/Image/Background/contact us.jpg';
import collegeLogo from '../assets/Image/Logo/logo.jpeg';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const ContactUs = () => {
  const { isEnglish } = useLanguage();
  const context = useTheme(); // نأخد القيمة كلها الأول
  const theme = context ? context.theme : 'light'; // fallback إذا كان undefined
  const toggleTheme = context ? context.toggleTheme : () => {}; // fallback للدالة

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      console.log('Form submitted:', formData);

      MySwal.fire({
        title: isEnglish ? 'Success!' : 'تم بنجاح!',
        text: isEnglish
          ? 'Your message has been sent successfully!'
          : 'تم إرسال رسالتك بنجاح',
        icon: 'success',
        confirmButtonText: isEnglish ? 'OK' : 'حسناً',
        confirmButtonColor: '#800000',
        timer: 3000
      });

      setIsLoading(false);
      setFormData({
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div
      className={`contact-us-container ${
        isEnglish ? 'contact-us-english-lang' : 'contact-us-arabic-lang'
      }`}
    >
      

      <div className="contact-us-hero-section">
        <img
          src={backgroundImage}
          alt={isEnglish ? 'Contact us background' : 'خلفية صفحة اتصل بنا'}
          className="contact-us-hero-image"
        />
        <div className="contact-us-hero-overlay">
          <h1 className="contact-us-main-title">
            {isEnglish ? 'Contact Us' : ' تواصل معنا '}
          </h1>
        </div>
      </div>

      <div className="contact-us-content-section">
        <div className="contact-us-grid">
          <div className="contact-us-form-container">
            <form onSubmit={handleSubmit} className="contact-us-form">
              <div className="contact-us-form-group">
                <label htmlFor="email">
                  {isEnglish ? 'Email' : 'البريد الإلكتروني'}
                </label>
                <input
                  className="contact-us-input"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-us-form-group">
                <label htmlFor="phone">
                  {isEnglish ? 'Phone Number' : 'رقم الهاتف'}
                </label>
                <input
                  className="contact-us-input"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-us-form-group">
                <label htmlFor="subject">
                  {isEnglish ? 'Subject' : 'الموضوع'}
                </label>
                <input
                  className="contact-us-input"
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-us-form-group">
                <label htmlFor="message">
                  {isEnglish ? 'Message' : 'الرسالة'}
                </label>
                <textarea
                  className="contact-us-textarea"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-us-submit-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    {isEnglish ? ' Sending...' : ' جاري الإرسال...'}
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    {isEnglish ? ' Send Message' : ' إرسال الرسالة'}
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="contact-us-college-info-container">
            <div className="contact-us-college-logo-container">
              <img
                src={collegeLogo}
                alt={isEnglish ? 'College Logo' : 'شعار الكلية'}
                className="contact-us-college-logo"
              />
            </div>
            <h2 className="contact-us-college-name">
              {isEnglish ? 'Fayoum Technical University' : 'جامعة الفيوم التكنولوجية'}
            </h2>
            <div className="contact-us-contact-info">
              <div className="contact-us-info-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>
                  {isEnglish
                    ? '123 College Street, Tech City, Country'
                    : '123 شارع الكلية، مدينة التقنية، البلد'}
                </p>
              </div>
              <div className="contact-us-info-item">
                <i className="fas fa-phone"></i>
                <p>+123 456 7890</p>
              </div>
              <div className="contact-us-info-item">
                <i className="fas fa-envelope"></i>
                <p>info@college.edu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;