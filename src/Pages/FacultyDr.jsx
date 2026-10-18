import React from 'react';
import '../Style/FacultyDr.css';
import { useLanguage } from '../context/LanguageContext';

// استيراد صور الدكاترة
import Dr from '../assets/Image/Dr/download2.png';
import Drs from '../assets/Image/Dr/Dr.jpeg';
import backgroundImage from '../assets/Image/Background/Member.jpg';

const FacultyMembers = () => {
    const { isEnglish } = useLanguage();

    // بيانات أعضاء هيئة التدريس مع الصور المحلية
    const facultyData = [
        {
            id: 1,
            name: { en: "Dr. Israa Hariri", ar: "د.  اسراء الحريري " },
            image: Dr,
            courses: [
                { en: "Basic Programming in Python, C, C++", ar: "اساسيات لغة البرمجة بالغة ال سي والبايثون والسي بلص بلص " },
                { en: "Advanced C & C++ programming", ar: "تقنيات لغة البرمجة بالغة ال سي والسي بلص بلص" }
            ],
            assistants: [
                { en: "Assistant: Abdullah Amam", ar: "معيد:  عبدالله امام " }
            ]
        },
        {
            id: 2,
            name: { en: "Dr. Esraa Reslan", ar: "د.  اسراء رسلان" },
            image: Dr,
            courses: [
                { en: "Web 1 & Web 2", ar: " ويب 1  & ويب2 " },
                { en: "Java 1 & Java 2", ar: " جافا1 & جافا2" },
                { en: "Computer Technology", ar: "تكنولوجيا الحاسوب" }
            ],
            assistants: [
                { en: "Assistant: Ayad Adel", ar: "معيد:اية عادل " },
                { en: "Assistant: Hadil Ahmed", ar: "معيد:هديل احمد   " },

            ]
        },
        {
            id: 3,
            name: { en: "Dr. Asmaa Hashem", ar: "د.  اسماء هاشم " },
            image: Dr,
            courses: [
                { en: "Database ", ar: " قواعد البيانات" },
                { en: "IT Essentials", ar: "اساسيات تكنولوجيا الحاسوب" }
            ],
            assistants: [
                { en: "Assistant: Ayad Adel", ar: "معيد: اية عادل" },
                { en: "Assistant: Aroui", ar: " معيد: اروى " },
                { en: "Assistant: Eithab", ar: "معيد: ايثاب" }
            ]
        },
        {
            id: 4,
            name: { en: "Dr. Masoud Esmaeil", ar: "د. مسعود اسماعيل " },
            image: Drs,
            courses: [
                { en: "Computer Networks", ar: "شبكات الحاسوب" },
                { en: "Operating Systems Linux", ar: " نظام التشغيل لينكس "  }
            ],
            assistants: [
                { en: "Assistant: Mohamed Abdelfatah", ar: "معيد: محمد عبدالفتاح" },
                { en: "Assistant: Ahmed Samir", ar: "معيد: احمد سمير" }
            ]
        },
        {
            id: 5,
            name: { en: "Dr. Ahmed Farhan", ar: "د.  احمد فرحان " },
            image: Drs,
            courses: [
                { en: "Digital Engineering", ar: " الهندسة الرقمية " },
                { en: "Automation and mechatronics systems", ar: " انظمة الاتمتة والميكاترونيك" }
            ],
            assistants: [
                { en: "Assistant: Rania Ashraf", ar: "معيد:  اسراء عادل " },
                { en: "Assistant: Abraham Khalil", ar: "معيد:ابراهيم خليل " }
            ]
        },
        {
            id: 6,
            name: { en: "Dr. Sayed Hamouda ", ar: "د. سعيد حمودة " },
            image: Drs,
            courses: [
                { en: "basic cybersecurity", ar: " اساسيات الامن السيبراني " },
                { en: "offices", ar: " الاوفيس " }
            ],
            assistants: [
                { en: "Assistant: Ahmed Samir", ar: "معيد : احمد سمير" }
            ]
        },
        {
            id: 7,
            name: { en: "Dr. Mohamed Badr", ar: "د. محمد بدر " },
            image: Drs,
            courses: [
                { en: "piping and instrumentation drawing(p&id)", ar: "  رسم الانابيب والاجهزة " },
                { en: "hydrological and meteorological engineering ,air filtration system", ar: "  تنظمة التشريح الهيدروليكية والهوائية " }
            ],
            assistants: [
                { en: "Assistant: Ali Saeed ", ar: "معيد: علي  سعيد  " },
                { en: "Assistant: Mustafa Ahmed", ar: "معيد: مصطفى احمد  " }
            ]
        },
        {
            id: 8,
            name: { en: "Dr. Habba Mohamed", ar: "د. هبة محمد " },
            image: Dr,
            courses: [
                { en: "Math 1", ar: "1 رياضة"},
                { en: "Math 2", ar: " رياضة 2 " }
            ],
            assistants: [{en: "Assistant: Hamed ", ar: "معيد: حامد "}]
        },
        {
            id: 9,
            name: { en: "Dr. Sozan", ar: "د.  سوزان " },
            image: Dr,
            courses: [
                { en: "Physics", ar: " فيزياء" }           
             ],
            assistants: [{en: "Assistant: Nehall ", ar: "معيد: نهال "}]
        },
        {
            id: 10,
            name: { en: "Dr. Nabila Ali", ar: "د. نبيلة علي " },
            image: Dr,
            courses: [
                { en: "Tchnical English 1 ", ar: " اللغة الانجليزية التنقنية 1 " },
                { en: "Tchnical English 2", ar: " اللغة الانجليزية التنقنية 2" }
            ],
            assistants: [
                {en: "Assistant: Isaa ", ar: "معيد: عيسى  "},
                {en: "Assistant: Mohamed Athman ", ar: "معيد: محمود عثمان  "}
            ]
        },
        {
            id: 11,
            name: { en: "Dr. Sumia El-Sayed", ar: "د. سمية السيد " },
            image: Dr,
            courses: [
                { en: "Physics ", ar: "فيزياء" },
            ],
            assistants: [
                {en: "Assistant: Nehall ", ar: "معيد : نهال "},
                {en: "Assistant: Mey ", ar: "معيد:  مي   "},
            ]
        },
        {
            id: 12,
            name: { en: "Dr. Abdallah Shukri", ar: "د. عبدالله شكري " },
            image: Drs,
            courses: [
                { en: "Technologies for metallic manufacturing process ", ar: " تقنيات عمليات تصنيع المعادن " }
            ],
            assistants: [{en: "Assistant: Mahmoud Abdelfatah ", ar: "معيد: محمود عبدالفتاح  "}]
        },
        {
            id: 13,
            name: { en: "Dr. Sabri Saeed", ar: "د.صبري سعيد " },
            image: Drs,
            courses: [
                { en: "Material Science ", ar: " علم المواد " }
            ],
            assistants: [{en: "Assistant: Abdulaziz Hashem ", ar: "معيد: عبدالعزيز هاشم   "}]
        },
        {
            id: 14,
            name: { en: "Dr. Mohamed Elrebiy", ar: "محمد الربيعي " },
            image: Drs,
            courses: [
                { en: "Chemistry ", ar: "كيمياء " }
            ],
            assistants: [{en: "Assistant: Nehal Rjeb ", ar: "معيد: نهال رجب  "}]
        },
        {
            id: 15,
            name: { en: "Dr. Khaled Farouk", ar:"د.محمد عبدالوهاب " },
            image: Drs,
            courses: [
                { en: "basic cybersecurity", ar: " اساسيات الامن السيبراني " },
                { en: "offices", ar: " الاوفيس " }
            ],
            assistants: [
                { en: "Assistant: Ahmed Samir", ar: "معيد : احمد سمير" }
            ]
        },
        {
            id: 16,
            name: { en: "Dr. Issam Khalaf", ar: "د.عصام خلف  " },
            image: Drs,
            courses: [
                { en: "Computer-Aided Kinematics ", ar: "علم الحركة بمساعدة الحاسوب " }         
            ],
            assistants: [{en: "Assistant: Mahmoud Abdelfatah ", ar: "معيد : وليد السيد  "}]
        },
        {
            id: 17,
            name: { en: "Dr. Hajaj Maher", ar: "د. حجاج ماهر   " },
            image: Drs,
            courses: [
                { en: "Health , Safety and Risks ", ar: "الصحة والسلامة والمخاطر " }         
            ],
            assistants: [{en: "Assistant: Mahmoud Abdelfatah ", ar: "معيد :  محمد ذكريا  "}]
        }
    ];

    return (
        <div className={`faculty-container ${isEnglish ? 'english' : 'arabic'}`}>
            {/* قسم البانر الرئيسي */}
            <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="hero-overlay"></div>
                <h1 className="hero-text">
                    {isEnglish ? "Faculty Members" : "أعضاء هيئة التدريس"}
                </h1>
            </div>

            {/* المحتوى الرئيسي */}
            <div className="content-section">
                <div className="faculty-page-description">{isEnglish ? 
                    "Meet our distinguished faculty members who are dedicated to providing high-quality education and research."
                    : 
                    "تعرف على أعضاء هيئة التدريس المتميزين لدينا والذين يكرسون جهودهم لتقديم تعليم وبحث عالي الجودة."}
                </div>
                
                <hr className="section-divider"/>
                
                {/* قائمة أعضاء هيئة التدريس */}
                <div className="faculty-list">
                    {facultyData.map((member) => (
                        <div key={member.id} className="faculty-member-card">
                            <div className="member-main-info">
                                <div className="image-container">
                                    <img 
                                        src={member.image} 
                                        alt={isEnglish ? member.name.en : member.name.ar} 
                                        className="member-profile-image"
                                    />
                                    <div className="image-border"></div>
                                </div>
                                <div className="member-details">
                                    <div className="name-container">
                                        <div className="faculty-member-name">{isEnglish ? member.name.en : member.name.ar}</div>
                                        <div className="name-underline"></div>
                                    </div>
                                    
                                    <div className="member-courses-section">
                                        <div className="faculty-courses-title">{isEnglish ? "Courses" : "المقررات الدراسية"}</div>
                                        <ul className="courses-list">
                                            {member.courses.map((course, index) => (
                                                <li key={index} className="faculty-course-item">
                                                    {isEnglish ? course.en : course.ar}
                                                </li>
                                            ))}
                                        </ul>
                                        
                                        {member.assistants.length > 0 && (
                                            <>
                                                <div className="faculty-assistants-title">{isEnglish ? "Assistants" : "المعيدين"}</div>
                                                <ul className="assistants-list">
                                                    {member.assistants.map((assistant, index) => (
                                                        <li key={index} className="faculty-assistant-item">
                                                            {isEnglish ? assistant.en : assistant.ar}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default FacultyMembers;