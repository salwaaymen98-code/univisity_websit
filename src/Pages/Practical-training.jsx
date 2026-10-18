import React from 'react';
import '../Style/Practical-training.css';
import { useLanguage } from '../context/LanguageContext';
import backgroundImage from '../assets/Image/Background/ttt.jpg';
import itImage from '../assets/Image/Image/informatiom Technology.jpg';
import mechatronicsImage from '../assets/Image/Image/Mechatronics.jpg';
import autotronicsImage from '../assets/Image/Image/autotronics.jpg';
import industrialImage from '../assets/Image/Image/industrial.jpg';

const Practical = () => {
    const { isEnglish } = useLanguage();
    
    return (
        <div className={`practical-container ${isEnglish ? 'practical-english-lang' : 'practical-arabic-lang'}`}>
            {/* Background Section */}
            <div className="practical-hero-section">
                <img 
                    src={backgroundImage} 
                    alt={isEnglish ? "College Departments Background" : "خلفية أقسام الكلية"} 
                    className="practical-hero-image"
                />
                <div className="practical-hero-overlay">
                    <h1 className="practical-main-title">
                        {isEnglish ? "Practical Training" : " التدريب العملي"}
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="practical-content-section">
                {/* Introduction */}
                <p className="practical-intro-text">
                    {isEnglish ? 
                        "Our college offers specialized technical programs designed to meet labor market needs and equip students with practical and theoretical skills in various technical fields."
                        : 
                        "تقدم كليتنا برامج تقنية متخصصة مصممة لتلبية احتياجات سوق العمل وتزويد الطلاب بالمهارات العملية والنظرية في مختلف المجالات التقنية."}
                </p>

                <div className="practical-section-divider"></div>

                {/* IT Department */}
                <div className="practical-department-section">
                    <div className="practical-department-image-container">
                        <img src={itImage} alt={isEnglish ? "IT Department" : "قسم تكنولوجيا المعلومات"} className="practical-department-image" />
                    </div>
                    <div className="practical-department-text">
                        <h2 className="practical-department-title">
                            {isEnglish ? "Information Technology Department" : "قسم تكنولوجيا المعلومات"}
                        </h2>
                        <p className="practical-department-description">
                            {isEnglish ? 
                                "The IT department focuses on preparing qualified professionals in programming, network administration, cybersecurity, and database management. Students gain hands-on experience with the latest technologies and software development methodologies."
                                : 
                                "يركز قسم تكنولوجيا المعلومات على إعداد محترفين مؤهلين في البرمجة وإدارة الشبكات والأمن السيبراني وإدارة قواعد البيانات. يكتسب الطلاب خبرة عملية مع أحدث التقنيات ومنهجيات تطوير البرمجيات."}
                        </p>
                        <h3 className="practical-department-subtitle">
                            {isEnglish ? "Program Highlights:" : "أبرز مميزات البرنامج:"}
                        </h3>
                        <ul className="practical-department-features">
                            <li>{isEnglish ? "Modern programming languages (Python, Java, C#)" : "لغات برمجة حديثة (بايثون، جافا، سي شارب)"}</li>
                            <li>{isEnglish ? "Web and mobile application development" : "تطوير تطبيقات الويب والهواتف المحمولة"}</li>
                            <li>{isEnglish ? "Network administration and cybersecurity" : "إدارة الشبكات والأمن السيبراني"}</li>
                            <li>{isEnglish ? "Artificial intelligence basics" : "أساسيات الذكاء الاصطناعي"}</li>
                            <li>{isEnglish ? "Cloud computing technologies" : "تقنيات الحوسبة السحابية"}</li>
                        </ul>
                    </div>
                </div>

                <div className="practical-section-divider"></div>

                {/* Mechatronics Department */}
                <div className="practical-department-section practical-reverse">
                    <div className="practical-department-image-container">
                        <img src={mechatronicsImage} alt={isEnglish ? "Mechatronics Department" : "قسم الميكاترونكس"} className="practical-department-image" />
                    </div>
                    <div className="practical-department-text">
                        <h2 className="practical-department-title">
                            {isEnglish ? "Mechatronics Department" : "قسم الميكاترونكس"}
                        </h2>
                        <p className="practical-department-description">
                            {isEnglish ? 
                                "Mechatronics combines mechanical, electrical, and computer engineering to design and manufacture smart systems. Our program prepares students for careers in robotics, automation, and intelligent system design."
                                : 
                                "يجمع الميكاترونكس بين الهندسة الميكانيكية والكهربائية وعلوم الكمبيوتر لتصميم وتصنيع الأنظمة الذكية. يعد برنامجنا الطلاب لمسارات مهنية في الروبوتات والأتمتة وتصميم الأنظمة الذكية."}
                        </p>
                        <h3 className="practical-department-subtitle">
                            {isEnglish ? "Program Highlights:" : "أبرز مميزات البرنامج:"}
                        </h3>
                        <ul className="practical-department-features">
                            <li>{isEnglish ? "Robotics and automation systems" : "أنظمة الروبوتات والأتمتة"}</li>
                            <li>{isEnglish ? "Control systems and PLC programming" : "أنظمة التحكم وبرمجة متحكمات PLC"}</li>
                            <li>{isEnglish ? "Hydraulic and pneumatic systems" : "الأنظمة الهيدروليكية والهوائية"}</li>
                            <li>{isEnglish ? "Sensor technology and signal processing" : "تقنية المجسات ومعالجة الإشارات"}</li>
                            <li>{isEnglish ? "Industrial robotics applications" : "تطبيقات الروبوتات الصناعية"}</li>
                        </ul>
                    </div>
                </div>

                <div className="practical-section-divider"></div>

                {/* Autotronics Department */}
                <div className="practical-department-section">
                    <div className="practical-department-image-container">
                        <img src={autotronicsImage} alt={isEnglish ? "Autotronics Department" : "قسم الأوتوترونكس"} className="practical-department-image" />
                    </div>
                    <div className="practical-department-text">
                        <h2 className="practical-department-title">
                            {isEnglish ? "Autotronics Department" : "قسم الأوتوترونكس"}
                        </h2>
                        <p className="practical-department-description">
                            {isEnglish ? 
                                "Autotronics focuses on automotive electronics and computerized vehicle systems. Students learn to diagnose, maintain, and repair modern vehicle systems with advanced electronic components."
                                : 
                                "يركز الأوتوترونكس على الإلكترونيات Automotive والأنظمة المحوسبة للسيارات. يتعلم الطلاب تشخيص وصيانة وإصلاح أنظمة المركبات الحديثة ذات المكونات الإلكترونية المتطورة."}
                        </p>
                        <h3 className="practical-department-subtitle">
                            {isEnglish ? "Program Highlights:" : "أبرز مميزات البرنامج:"}
                        </h3>
                        <ul className="practical-department-features">
                            <li>{isEnglish ? "Automotive electronics and diagnostics" : "إلكترونيات السيارات والتشخيص"}</li>
                            <li>{isEnglish ? "Engine management systems" : "أنظمة إدارة المحرك"}</li>
                            <li>{isEnglish ? "Hybrid and electric vehicle technology" : "تقنية المركبات الهجينة والكهربائية"}</li>
                            <li>{isEnglish ? "Vehicle communication networks (CAN bus)" : "شبكات اتصال المركبات (CAN bus)"}</li>
                            <li>{isEnglish ? "Advanced driver assistance systems" : "أنظمة مساعدة السائق المتقدمة"}</li>
                        </ul>
                    </div>
                </div>

                <div className="practical-section-divider"></div>

                {/* Industrial Engineering Department */}
                <div className="practical-department-section practical-reverse">
                    <div className="practical-department-image-container">
                        <img src={industrialImage} alt={isEnglish ? "Industrial Engineering Department" : "قسم الهندسة الصناعية"} className="practical-department-image" />
                    </div>
                    <div className="practical-department-text">
                        <h2 className="practical-department-title">
                            {isEnglish ? "Industrial Engineering Department" : "قسم الهندسة الصناعية"}
                        </h2>
                        <p className="practical-department-description">
                            {isEnglish ? 
                                "Industrial engineering focuses on optimizing complex systems and processes. Our program combines engineering principles with business management to improve productivity and quality in manufacturing and service sectors."
                                : 
                                "تركز الهندسة الصناعية على تحسين الأنظمة والعمليات المعقدة. يجمع برنامجنا بين مبادئ الهندسة وإدارة الأعمال لتحسين الإنتاجية والجودة في قطاعي التصنيع والخدمات."}
                        </p>
                        <h3 className="practical-department-subtitle">
                            {isEnglish ? "Program Highlights:" : "أبرز مميزات البرنامج:"}
                        </h3>
                        <ul className="practical-department-features">
                            <li>{isEnglish ? "Production planning and control" : "تخطيط ومراقبة الإنتاج"}</li>
                            <li>{isEnglish ? "Quality control and Six Sigma" : "ضبط الجودة وسيكس سيجما"}</li>
                            <li>{isEnglish ? "Supply chain management" : "إدارة سلسلة التوريد"}</li>
                            <li>{isEnglish ? "Ergonomics and workplace design" : "بيئة العمل وتصميم أماكن العمل"}</li>
                            <li>{isEnglish ? "Industrial automation and robotics" : "الأتمتة الصناعية والروبوتات"}</li>
                        </ul>
                    </div>
                </div>

                <div className="practical-section-divider"></div>

                {/* Career Opportunities Section */}
                <h2 className="practical-section-title">
                    {isEnglish ? "Career Opportunities" : "الفرص الوظيفية"}
                </h2>
                <p className="practical-section-text">
                    {isEnglish ? 
                        "Our graduates find employment in various industries including manufacturing, automotive, IT, telecommunications, and industrial services. Many alumni have established successful careers in both public and private sectors."
                        : 
                        "يتمتع خريجونا بفرص عمل في مختلف الصناعات بما في ذلك التصنيع، السيارات، تكنولوجيا المعلومات، الاتصالات، والخدمات الصناعية. وقد أسس العديد من الخريجين مسارات مهنية ناجحة في القطاعين العام والخاص."}
                </p>
            </div>
            
        </div>
    );
};

export default Practical;