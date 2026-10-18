import React from 'react';
import '../Style/Work areas.css';
import { useLanguage } from '../context/LanguageContext';
import backgroundImage from '../assets/Image/Background/Post-graduation fields.jpg';
import itImage from '../assets/Image/Image/informatiom Technology.jpg';
import mechatronicsImage from '../assets/Image/Image/Mechatronics.jpg';
import autotronicsImage from '../assets/Image/Image/autotronics.jpg';
import industrialImage from '../assets/Image/Image/industrial.jpg';

const CareerOpportunities = () => {
    const { isEnglish } = useLanguage();
    
    return (
        <div className={`work-areas-container ${isEnglish ? 'work-areas-english-lang' : 'work-areas-arabic-lang'}`}>
            {/* Background Section */}
            <div className="work-areas-hero-section">
                <img 
                    src={backgroundImage} 
                    alt={isEnglish ? "Career opportunities background" : "خلفية مجالات العمل"} 
                    className="work-areas-hero-image"
                />
                <div className="work-areas-hero-overlay">
                    <h1 className="work-areas-main-title">
                        {isEnglish ? "Career Opportunities After Graduation" : "مجالات العمل بعد التخرج"}
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="work-areas-content-section">
                {/* Introduction */}
                <p className="work-areas-intro-text">
                    {isEnglish ? 
                        "Explore the diverse career paths available for graduates of our technical programs."
                        : 
                        "اكتشف المسارات الوظيفية المتنوعة المتاحة لخريجي برامجنا التقنية."}
                </p>

                <div className="work-areas-section-divider"></div>

                {/* IT Department Careers */}
                <div className="work-areas-department-section">
                    <div className="work-areas-department-image-container">
                        <img src={itImage} alt={isEnglish ? "IT careers" : "مجالات تكنولوجيا المعلومات"} className="work-areas-department-image" />
                    </div>
                    <div className="work-areas-department-text">
                        <h2 className="work-areas-department-title">
                            {isEnglish ? "Information Technology" : "تكنولوجيا المعلومات"}
                        </h2>
                        <h3 className="work-areas-career-subtitle">
                            {isEnglish ? "Career Opportunities:" : "مجالات العمل:"}
                        </h3>
                        <ul className="work-areas-career-list">
                            <li>{isEnglish ? "Software Developer/Engineer" : "مطور/مهندس برمجيات"}</li>
                            <li>{isEnglish ? "Web and Mobile App Developer" : "مطور تطبيقات ويب وهواتف"}</li>
                            <li>{isEnglish ? "Network and Systems Administrator" : "مدير شبكات وأنظمة"}</li>
                            <li>{isEnglish ? "Cybersecurity Specialist" : "أخصائي أمن سيبراني"}</li>
                            <li>{isEnglish ? "Database Administrator" : "مدير قواعد بيانات"}</li>
                            <li>{isEnglish ? "IT Project Manager" : "مدير مشاريع تكنولوجيا المعلومات"}</li>
                            <li>{isEnglish ? "Cloud Solutions Architect" : "مهندس حلول سحابية"}</li>
                            <li>{isEnglish ? "Data Analyst/Scientist" : "محلل/عالم بيانات"}</li>
                            <li>{isEnglish ? "AI and Machine Learning Engineer" : "مهندس ذكاء اصطناعي وتعلم آلي"}</li>
                        </ul>
                        <h3 className="work-areas-industry-subtitle">
                            {isEnglish ? "Potential Employers:" : "أصحاب العمل المحتملين:"}
                        </h3>
                        <ul className="work-areas-industry-list">
                            <li>{isEnglish ? "Software development companies" : "شركات تطوير البرمجيات"}</li>
                            <li>{isEnglish ? "IT consulting firms" : "شركات الاستشارات التقنية"}</li>
                            <li>{isEnglish ? "Banks and financial institutions" : "البنوك والمؤسسات المالية"}</li>
                            <li>{isEnglish ? "Telecommunications companies" : "شركات الاتصالات"}</li>
                            <li>{isEnglish ? "Government IT departments" : "أقسام تكنولوجيا المعلومات الحكومية"}</li>
                        </ul>
                    </div>
                </div>

                <div className="work-areas-section-divider"></div>

                {/* Mechatronics Department Careers */}
                <div className="work-areas-department-section work-areas-reverse">
                    <div className="work-areas-department-image-container">
                        <img src={mechatronicsImage} alt={isEnglish ? "Mechatronics careers" : "مجالات الميكاترونكس"} className="work-areas-department-image" />
                    </div>
                    <div className="work-areas-department-text">
                        <h2 className="work-areas-department-title">
                            {isEnglish ? "Mechatronics Engineering" : "هندسة الميكاترونكس"}
                        </h2>
                        <h3 className="work-areas-career-subtitle">
                            {isEnglish ? "Career Opportunities:" : "مجالات العمل:"}
                        </h3>
                        <ul className="work-areas-career-list">
                            <li>{isEnglish ? "Robotics Engineer" : "مهندس روبوتات"}</li>
                            <li>{isEnglish ? "Automation Engineer" : "مهندس أتمتة"}</li>
                            <li>{isEnglish ? "Control Systems Engineer" : "مهندس أنظمة تحكم"}</li>
                            <li>{isEnglish ? "Industrial Maintenance Engineer" : "مهندس صيانة صناعية"}</li>
                            <li>{isEnglish ? "Mechatronics Product Designer" : "مصمم منتجات ميكاترونيكية"}</li>
                            <li>{isEnglish ? "PLC Programming Specialist" : "أخصائي برمجة متحكمات PLC"}</li>
                            <li>{isEnglish ? "Research and Development Engineer" : "مهندس بحث وتطوير"}</li>
                            <li>{isEnglish ? "Manufacturing Systems Engineer" : "مهندس نظم تصنيع"}</li>
                        </ul>
                        <h3 className="work-areas-industry-subtitle">
                            {isEnglish ? "Potential Employers:" : "أصحاب العمل المحتملين:"}
                        </h3>
                        <ul className="work-areas-industry-list">
                            <li>{isEnglish ? "Industrial automation companies" : "شركات الأتمتة الصناعية"}</li>
                            <li>{isEnglish ? "Manufacturing and production plants" : "المصانع ووحدات الإنتاج"}</li>
                            <li>{isEnglish ? "Robotics companies" : "شركات الروبوتات"}</li>
                            <li>{isEnglish ? "Automotive industry" : "صناعة السيارات"}</li>
                            <li>{isEnglish ? "Aerospace and defense companies" : "شركات الطيران والدفاع"}</li>
                        </ul>
                    </div>
                </div>

                <div className="work-areas-section-divider"></div>

                {/* Autotronics Department Careers */}
                <div className="work-areas-department-section">
                    <div className="work-areas-department-image-container">
                        <img src={autotronicsImage} alt={isEnglish ? "Autotronics careers" : "مجالات الأوتوترونكس"} className="work-areas-department-image" />
                    </div>
                    <div className="work-areas-department-text">
                        <h2 className="work-areas-department-title">
                            {isEnglish ? "Autotronics Engineering" : "هندسة الأوتوترونكس"}
                        </h2>
                        <ul className="work-areas-career-list">
                            <li>{isEnglish ? "Automotive Electronics Engineer" : "مهندس إلكترونيات سيارات"}</li>
                            <li>{isEnglish ? "Vehicle Diagnostics Specialist" : "مهندس تشخيص أعطال المركبات"}</li>
                            <li>{isEnglish ? "Automotive Systems Designer" : "مصمم أنظمة سيارات"}</li>
                            <li>{isEnglish ? "Electric/Hybrid Vehicle Technician" : "فني مركبات كهرباء/هجينة"}</li>
                            <li>{isEnglish ? "Automotive Software Developer" : "مطور برمجيات سيارات"}</li>
                            <li>{isEnglish ? "Automotive Research Engineer" : "مهندس أبحاث سيارات"}</li>
                            <li>{isEnglish ? "Fleet Management Systems Engineer" : " مهندس نظم إدارة أساطيل المركبات"}</li>
                        </ul>
                        <h3 className="work-areas-industry-subtitle">
                            {isEnglish ? "Potential Employers:" : "أصحاب العمل المحتملين:"}
                        </h3>
                        <ul className="work-areas-industry-list">
                            <li>{isEnglish ? "Automotive manufacturers" : "شركات تصنيع السيارات"}</li>
                            <li>{isEnglish ? "Car dealerships and service centers" : "وكلاء السيارات ومراكز الخدمة"}</li>
                            <li>{isEnglish ? "Auto parts and electronics companies" : "شركات قطع غيار وإلكترونيات السيارات"}</li>
                            <li>{isEnglish ? "Public transportation companies" : "شركات النقل العام"}</li>
                            <li>{isEnglish ? "Vehicle testing and inspection centers" : "مراكز فحص واختبار المركبات"}</li>
                        </ul>
                    </div>
                </div>

                <div className="work-areas-section-divider"></div>

                {/* Industrial Engineering Department Careers */}
                <div className="work-areas-department-section work-areas-reverse">
                    <div className="work-areas-department-image-container">
                        <img src={industrialImage} alt={isEnglish ? 'Industrial engineering careers' : 'مجالات الهندسة الصناعية'} className="work-areas-department-image" />
                    </div>
                    <div className="work-areas-department-text">
                        <h2 className="work-areas-department-title">
                            {isEnglish ? "Industrial Engineering" : "الهندسة الصناعية"}
                        </h2>
                        <h3 className="work-areas-career-subtitle">
                            {isEnglish ? "Career Opportunities:" : "مجالات العمل:"}
                        </h3>
                        <ul className="work-areas-career-list">
                            <li>{isEnglish ? "Production and Planning Engineer" : "مهندس إنتاج وتخطيط"}</li>
                            <li>{isEnglish ? "Quality Control Engineer" : "مهندس ضبط جودة"}</li>
                            <li>{isEnglish ? "Supply Chain Manager" : "مدير سلسلة توريد"}</li>
                            <li>{isEnglish ? "Operations Manager" : "مدير عمليات"}</li>
                            <li>{isEnglish ? "Process Improvement Specialist" : "أخصائي تحسين العمليات"}</li>
                            <li>{isEnglish ? "Logistics Engineer" : "مهندس لوجستيات"}</li>
                            <li>{isEnglish ? "Health and Safety Engineer" : "مهندس صحةAxis2 وسلامة"}</li>
                            <li>{isEnglish ? "Industrial Systems Analyst" : "محلل نظم صناعية"}</li>
                        </ul>
                        <h3 className="work-areas-industry-subtitle">
                            {isEnglish ? "Potential Employers:" : "أصحاب العمل المحتملين:"}
                        </h3>
                        <ul className="work-areas-industry-list">
                            <li>{isEnglish ? "Manufacturing companies" : "شركات التصنيع"}</li>
                            <li>{isEnglish ? "Industrial facilities" : "المنشآت الصناعية"}</li>
                            <li>{isEnglish ? "Consulting firms" : "شركات الاستشارات"}</li>
                            <li>{isEnglish ? "Government industrial sectors" : "القطاعات الصناعية الحكومية"}</li>
                            <li>{isEnglish ? "Large retail and distribution companies" : "شركات التجزئة والتوزيع الكبرى"}</li>
                        </ul>
                    </div>
                </div>

                <div className="work-areas-section-divider"></div>

                {/* Career Development Section */}
                <h2 className="work-areas-career-development-title">
                    {isEnglish ? "Career Development Support" : "دعم التطور الوظيفي"}
                </h2>
                <p className="work-areas-career-development-text">
                    {isEnglish ? 
                        "Our college provides ongoing career support for graduates through:"
                        : 
                        "توفر كليتنا دعمًا وظيفيًا مستمرًا للخريجين من خلال:"}
                </p>
                <ul className="work-areas-support-list">
                    <li>{isEnglish ? "Alumni networking events" : "فعاليات التواصل بين الخريجين"}</li>
                    <li>{isEnglish ? "Continuing education programs" : "برامج التعليم المستمر"}</li>
                    <li>{isEnglish ? "Career counseling services" : "خدمات الإرشاد الوظيفي"}</li>
                    <li>{isEnglish ? "Job placement assistance" : "مساعدات التوظيف"}</li>
                    <li>{isEnglish ? "Professional certification guidance" : "توجيه للحصول على شهادات مهنية"}</li>
                </ul>
            </div>
            
        </div>
    );
};

export default CareerOpportunities;