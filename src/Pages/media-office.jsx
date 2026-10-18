import React, { useState, useRef } from 'react';
import '../Style/media-office.css';
import { useLanguage } from '../context/LanguageContext';
import backgroundImage from '../assets/Image/Background/Media Office.jpg';
import news1 from '../assets/Image/News/news.jpg';
import news2 from '../assets/Image/News/news2.jpg';
import news3 from '../assets/Image/News/news3.jpg';
import news4 from '../assets/Image/News/G.jpeg';
import news5 from '../assets/Image/News/N.jpeg';
import news6 from '../assets/Image/News/Q.jpeg';

const MediaOffice = () => {
    const { isEnglish } = useLanguage();
    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 5;
    const newsListRef = useRef(null);

    // بيانات الأخبار (25 خبر)
    const allNewsItems = [
        {
            id: 1,
            title: isEnglish ? "College launches new AI research center" : "الكلية تطلق مركز أبحاث جديد للذكاء الاصطناعي",
            date: "2025-06-5",
            image: news1,
            summary: isEnglish ? 
                "" 
                : "عيد اضحى مبارك",
            content: isEnglish ? 
                `Fayoum International Technological University is pleased to extend its warmest congratulations and blessings on 
                the occasion of the blessed birthday of Abdel-Aziz Al-Adhi, the founder and student.
                 We also extend our sincere congratulations to the faculty, staff, and dear parents.
                  We ask God to bring us all goodness, blessings, and prosperity. May He accept our good deeds and grant us success.
                   May He fill our lives with security, tranquility, and joy.`
                : `يسر جامعة الفيوم التكنولوجية الدولية  
                 أن تتقدم بإطيب التهاني و التبريكات بمتاسبة عبد الأضعى المبارك إلى إنشاء وبذلك الطالب.  
                والسادة أعضاء هيئة التدريس والعاملين، وأولياء الأمور الأعزاء.  
                نسأل الله أن يعيده علينا جميعاً بالخير واليمن والبركات.  
                وأن يتقبل منا ومتحكم صالح الأعمال.  
                ويجعل إيا محكم عامرة بالأمن والسكنية والفرح.`
        },
        {
            id: 2,
            title: isEnglish ? "Guidelines" : "توجيهات",
            date: "2025-06-1",
            image: news2,
            summary: isEnglish ? 
                " Dr. Islam Hilali, Dean of the Faculty of Technology in Fayoum" 
                : "توجيهات الاستاذ الدكتور اسلام هلالى عميد الكلية التكنولوجية بالفيوم",
            content: isEnglish ? 
                "Fayoum International Technological University, with a strong commitment to linking academic activities with the job market, has visited many industries to design and produce educational materials"
                : " جامعه الفيوم التكنولوجية الدولية وحرصاً على ربط العملية التعليمية بسوق العمل وفى إطار خطة الكلية فى تنفيذ زيارات ميدانية للعديد من المؤسسات الصناعية . تم زيارة مصنع بيدو لتصميم وتصنيع المعامل التعليمية "
        },
        {
            id: 3,
            title: isEnglish ? "Honoring the college students" : "تكريم ابناء الكلية ",
            date: "2025-05-15",
            image: news3,
            summary: isEnglish ? 
                "By the grace of God Almighty, the Fayoum College of Technology, Fayoum International Technological University" 
                : `بفضل من الله سبحانه و تعالى الكلية التكنولوجية بالفيوم جامعة الفيوم التكنولوجية الدولية  فى تقدم  و ازدهار.`,
            content: isEnglish ? 
                `By the grace of God Almighty, the Fayoum College of Technology, Fayoum International Technological University, is progressing and thriving.
                At a ceremony organized by the Education Development Fund, headed by Professor Dr. Rasha Saad, Secretary General of the Education Development Fund, in coordination with the Ministry of Higher Education, the college's students were honored by His Excellency the Minister of Higher Education and Scientific Research for winning the Cisco Professional Track Scholarships under the supervision of the Ministry of Communications and the Education Development Fund, affiliated with the Council of Ministers.
                Our sincere thanks and appreciation to His Excellency the Minister of Higher Education and Scientific Research for his support of technological education, as well as to the Minister of Communications, His Excellency Ayman, General Secretary of the Education Development Fund, His Excellency the President of Fayoum University, and the Vice Presidents of Fayoum University for their support of the college and the university.
                We also extend our congratulations to our students, faculty members, and college administration on this success.`
                :`فى حفل قام  بتنظيمه صندوق تطوير التعليم برئاسة الاستاذة الدكتورة رشا سعد امين عام صندوق تطوير التعليم  بالتنسيق مع وزارة التعليم العالى تم تكريم ابناء الكلية من معالى وزير التعليم العالى و البحث العلمى بفوزهم بجوائز منح المسار الاحترافي لمبادرة سيسكو تحت اشراف وزارة الاتصالات و صندوق تطوير  التعليم التابع لمجلس لرئاسة مجلس الوزراء  
                كل الشكر و التقدير لمعالى وزير التعليم العالى و البحث العلمى  على دعمه للتعليم التكنولوجى و السيد وزير الاتصالات و معالى ايمن عام صندوق تطوير التعليم ومعالى رئيس جامعة الفيوم و السادةً نواب جامعة الفيوم على الدعم المقدم للكلية و الجامعة
                و كل التهنئة لابناءنا طلاب الكلية و السادة اعضاء هيئة التدريس وادارة الكلية بهذا النجاح`
        },
        {
            id: 4,
            title: isEnglish ? "Industrial engineering department accreditation renewed" : "تجديد اعتماد قسم الهندسة الصناعية",
            date: "2023-08-22",
            image: news4,
            summary: isEnglish ? 
                "The industrial engineering program has received renewed accreditation for another 5 years." 
                : "حصل برنامج الهندسة الصناعية على تجديد الاعتماد لمدة 5 سنوات أخرى.",
            content: isEnglish ? 
                "The accreditation committee praised the program's curriculum, faculty qualifications, and laboratory facilities. This recognition confirms the program meets international standards and prepares students for the job market."
                : "أشادت لجنة الاعتماد بمنهج البرنامج ومؤهلات أعضاء هيئة التدريس ومرافق المعامل. ويؤكد هذا الاعتراف أن البرنامج يلبي المعايير الدولية ويعد الطلاب لسوق العمل."
        },
        {
            id: 5,
            title: isEnglish ? "College hosts national technology conference" : "الكلية تستضيف المؤتمر الوطني للتكنولوجيا",
            date: "2023-07-15",
            image: news5,
            summary: isEnglish ? 
                "Over 500 participants attended the 3-day conference on emerging technologies and their industrial applications." 
                : "حضر أكثر من 500 مشارك المؤتمر الذي استمر 3 أيام حول التكنولوجيات الناشئة وتطبيقاتها الصناعية.",
            content: isEnglish ? 
                "The conference featured 35 technical sessions, workshops, and an exhibition of student projects. Topics included Industry 4.0, smart manufacturing, and sustainable technologies. Several memorandums of understanding were signed with industry partners."
                : "شمل المؤتمر 35 جلسة تقنية وورش عمل ومعرضًا لمشاريع الطلاب. وتناولت الموضوعات الصناعة 4.0 والتصنيع الذكي والتقنيات المستدامة. وتم توقيع عدة مذكرات تفاهم مع شركاء صناعيين."
        },
        {
            id: 6,
            title: isEnglish ? "New scholarship program for outstanding students" : "برنامج منح جديد للطلاب المتفوقين",
            date: "2023-06-30",
            image: news6,
            summary: isEnglish ? 
                "The college announced a new scholarship fund that will cover tuition for top-performing students." 
                : "أعلنت الكلية عن صندوق منح جديد سيغطي الرسوم الدراسية للطلاب المتفوقين.",
            content: isEnglish ? 
                "Funded by alumni donations, the program will support 20 students annually. Selection criteria include academic achievement, research potential, and participation in extracurricular activities."
                : "سيدعم البرنامج الذي يموله تبرعات الخريجين 20 طالبًا سنويًا. وتشمل معايير الاختيار التحصيل الأكاديمي والإمكانات البحثية والمشاركة في الأنشطة اللامنهجية."
        },
        {
            id: 7,
            title: isEnglish ? "Autotronics lab receives major equipment upgrade" : "ترقية كبرى لمعدات معمل الأوتوترونكس",
            date: "2023-06-12",
            image: news1,
            summary: isEnglish ? 
                "The autotronics department has installed new diagnostic and testing equipment worth $500,000." 
                : "قام قسم الأوتوترونكس بتركيب معدات تشخيص واختبار جديدة بقيمة 500 ألف دولار.",
            content: isEnglish ? 
                "The upgrade includes advanced vehicle diagnostic systems, electric vehicle testing stations, and autonomous driving simulation equipment. This investment will significantly enhance practical training and research capabilities."
                : "تشمل الترقية أنظمة تشخيص مركبات متقدمة ومحطات اختبار المركبات الكهربائية ومعدات محاكاة القيادة الذاتية. وسيعزز هذا الاستثمار بشكل كبير قدرات التدريب العملي والبحث."
        },
        {
            id: 8,
            title: isEnglish ? "Faculty members publish groundbreaking research" : "أعضاء هيئة تدريس ينشرون بحثًا رائدًا",
            date: "2023-05-25",
            image: news2,
            summary: isEnglish ? 
                "A research team from the IT department has published innovative findings in a top-tier journal." 
                : "فريق بحثي من قسم تكنولوجيا المعلومات ينشر نتائج مبتكرة في دورية علمية مرموقة.",
            content: isEnglish ? 
                "Their work on quantum computing algorithms has been recognized as a significant contribution to the field. The research was conducted in collaboration with international partners and has potential applications in cryptography and optimization."
                : "تم الاعتراف بعملهم حول خوارزميات الحوسبة الكمية كمساهمة مهمة في هذا المجال. وأجري البحث بالتعاون مع شركاء دوليين وله تطبيقات محتملة في التشفير والتحسين."
        },
        {
            id: 9,
            title: isEnglish ? "Student team develops smart campus solution" : "فريق طلابي يطور حلًا للجامعة الذكية",
            date: "2023-05-10",
            image: news3,
            summary: isEnglish ? 
                "An interdisciplinary student project has created an IoT-based campus management system." 
                : "مشروع طلابي متعدد التخصصات يطور نظام إدارة للحرم الجامعي يعتمد على إنترنت الأشياء.",
            content: isEnglish ? 
                "The system integrates smart parking, energy monitoring, and facility booking into a single platform. It won first prize in the national innovation competition and is being considered for implementation across the university."
                : "يدمج النظام مواقف السيارات الذكية ومراقبة الطاقة وحجز المرافق في منصة واحدة. وفاز بالجائزة الأولى في مسابقة الابتكار الوطنية ويجري النظر في تطبيقه عبر الجامعة."
        },
        {
            id: 10,
            title: isEnglish ? "College expands industry advisory board" : "الكلية توسع مجلسها الاستشاري الصناعي",
            date: "2023-04-18",
            image: news4,
            summary: isEnglish ? 
                "Twelve new industry leaders have joined the college's advisory board to strengthen industry-academia collaboration." 
                : "انضم 12 من قادة الصناعة الجدد إلى المجلس الاستشاري للكلية لتعزيز التعاون بين الصناعة والأكاديميا.",
            content: isEnglish ? 
                "The expanded board includes executives from technology, manufacturing, and automotive sectors. They will provide guidance on curriculum development, research priorities, and student employability skills."
                : "يشمل المجلس الموسع مسؤولين من قطاعات التكنولوجيا والتصنيع والسيارات. وسيقدمون التوجيه حول تطوير المناهج وأولويات البحث ومهارات توظيف الطلاب."
        },
        {
            id: 11,
            title: isEnglish ? "New student entrepreneurship incubator launched" : "إطلاق حاضنة جديدة لريادة الأعمال الطلابية",
            date: "2023-04-05",
            image: news5,
            summary: isEnglish ? 
                "The college has established an incubator to support student startups and innovative projects." 
                : "أقامت الكلية حاضنة لدعم المشاريع الناشئة والابتكارات الطلابية.",
            content: isEnglish ? 
                "The incubator will provide mentorship, funding opportunities, and workspace for student entrepreneurs. First batch includes 15 promising projects in various technical fields."
                : "ستوفر الحاضنة الإرشاد وفرص التمويل ومساحة العمل لرواد الأعمال الطلاب. تضم الدفعة الأولى 15 مشروعًا واعدًا في مجالات تقنية متنوعة."
        },
        {
            id: 12,
            title: isEnglish ? "College ranked among top technical institutions" : "الكلية من بين أفضل المؤسسات التقنية",
            date: "2023-03-22",
            image: news6,
            summary: isEnglish ? 
                "The college has been ranked in the top 10 technical colleges in the region for the third consecutive year." 
                : "احتلت الكلية المرتبة العاشرة بين أفضل الكليات التقنية في المنطقة للعام الثالث على التوالي.",
            content: isEnglish ? 
                "The ranking considers academic reputation, employer feedback, research output, and student satisfaction. Our college scored particularly high in industry partnerships and graduate employability."
                : "يأخذ التصنيف في الاعتبار السمعة الأكاديمية وتقييمات أصحاب العمل والإنتاج البحثي ورضا الطلاب. سجلت كليتنا درجات عالية بشكل خاص في شراكات الصناعة وقابلية توظيف الخريجين."
        },
        {
            id: 13,
            title: isEnglish ? "Annual career fair attracts 100+ companies" : "معرض الوظائف السنوي يجذب أكثر من 100 شركة",
            date: "2023-03-10",
            image: news1,
            summary: isEnglish ? 
                "The college's annual career fair provided employment opportunities for graduating students." 
                : "وفر معرض الوظائف السنوي للكلية فرص عمل للطلاب الخريجين.",
            content: isEnglish ? 
                "Participating companies offered over 500 positions in various technical fields. The event also included resume workshops and mock interviews to prepare students for the job market."
                : "عرضت الشركات المشاركة أكثر من 500 وظيفة في مجالات تقنية متنوعة. وشمل الحدث ورش عمل للسير الذاتية ومقابلات وهمية لإعداد الطلاب لسوق العمل."
        },
        {
            id: 14,
            title: isEnglish ? "New continuing education programs announced" : "إعلان برامج جديدة للتعليم المستمر",
            date: "2023-02-28",
            image: news2,
            summary: isEnglish ? 
                "The college has launched 12 new professional development programs for working professionals." 
                : "أطلقت الكلية 12 برنامجًا جديدًا للتطوير المهني للموظفين العاملين.",
            content: isEnglish ? 
                "The evening and weekend programs cover emerging technologies and industry-specific skills. Courses are designed in collaboration with industry partners to address current workforce needs."
                : "تغطي البرامج المسائية وعطلة نهاية الأسبوع التقنيات الناشئة والمهارات الخاصة بالصناعة. تم تصميم الدورات بالتعاون مع شركاء الصناعة لمعالجة احتياجات القوى العاملة الحالية."
        },
        {
            id: 15,
            title: isEnglish ? "Student develops assistive technology for visually impaired" : "طالب يطور تقنية مساعدة للمكفوفين",
            date: "2023-02-15",
            image: news3,
            summary: isEnglish ? 
                "An IT student has created a wearable device that helps visually impaired individuals navigate indoor spaces." 
                : "طور طالب تكنولوجيا معلومات جهازًا قابلًا للارتداء يساعد المكفوفين على التنقل في الأماكن المغلقة.",
            content: isEnglish ? 
                "The innovative device uses ultrasonic sensors and haptic feedback to detect obstacles. The project won several innovation awards and is being considered for commercialization."
                : "يستخدم الجهاز المبتكر مستشعرات فوق صوتية وردود فعل لمسية للكشف عن العوائق. فاز المشروع بعدة جوائز ابتكار ويجري النظر في تسويقه."
        },
        {
            id: 16,
            title: isEnglish ? "College partners with international university for dual degree program" : "شراكة بين الكلية وجامعة دولية لبرنامج شهادة مزدوجة",
            date: "2023-02-01",
            image: news4,
            summary: isEnglish ? 
                "Students can now earn degrees from both institutions through the new collaboration." 
                : "يمكن للطلاب الآن الحصول على شهادات من المؤسستين من خلال التعاون الجديد.",
            content: isEnglish ? 
                "The 4-year program allows students to study two years at each institution, gaining international experience. Initial offerings include programs in mechatronics and information technology."
                : "يسمح البرنامج الذي مدته 4 سنوات للطلاب بالدراسة لمدة عامين في كل مؤسسة، واكتساب خبرة دولية. تشمل العروض الأولية برامج في الميكاترونكس وتكنولوجيا المعلومات."
        },
        {
            id: 17,
            title: isEnglish ? "New research grant for renewable energy projects" : "منحة بحثية جديدة لمشاريع الطاقة المتجددة",
            date: "2023-01-20",
            image: news5,
            summary: isEnglish ? 
                "The college has received $1 million grant to support student and faculty research in renewable energy." 
                : "حصلت الكلية على منحة بقيمة مليون دولار لدعم أبحاث الطلاب وأعضاء هيئة التدريس في الطاقة المتجددة.",
            content: isEnglish ? 
                "The funding will support 10 research projects over three years, focusing on solar energy applications, energy storage, and smart grid technologies."
                : "سيدعم التمويل 10 مشاريع بحثية على مدى ثلاث سنوات، مع التركيز على تطبيقات الطاقة الشمسية وتخزين الطاقة وتقنيات الشبكة الذكية."
        },
        {
            id: 18,
            title: isEnglish ? "Industrial visit to leading manufacturing facility" : "زيارة صناعية لمنشأة تصنيع رائدة",
            date: "2023-01-10",
            image: news6,
            summary: isEnglish ? 
                "Students toured a state-of-the-art manufacturing plant to observe Industry 4.0 technologies in practice." 
                : "تجول الطلاب في مصنع تصنيع متطور لمراقبة تقنيات الصناعة 4.0 في الممارسة العملية.",
            content: isEnglish ? 
                "The visit provided hands-on exposure to automated production lines, robotics, and IoT applications in manufacturing. Students reported gaining valuable insights into modern industrial practices."
                : "وفرت الزيارة خبرة عملية مع خطوط الإنتاج الآلي والروبوتات وتطبيقات إنترنت الأشياء في التصنيع. أفاد الطلاب بأنهم اكتسبوا رؤى قيمة حول الممارسات الصناعية الحديثة."
        },
        {
            id: 19,
            title: isEnglish ? "College hosts hackathon for smart city solutions" : "الكلية تستضيف هاكاثون لحلول المدن الذكية",
            date: "2022-12-15",
            image: news1,
            summary: isEnglish ? 
                "Over 200 participants competed to develop innovative technological solutions for urban challenges." 
                : "تنافس أكثر من 200 مشارك لتطوير حلول تكنولوجية مبتكرة للتحديات الحضرية.",
            content: isEnglish ? 
                "The 48-hour event produced prototypes for smart traffic management, waste reduction, and energy efficiency. Winning teams received cash prizes and incubation support."
                : "أنتج الحدث الذي استمر 48 ساعة نماذج أولية للإدارة الذكية لحركة المرور والحد من النفايات وكفاءة الطاقة. وحصلت الفرق الفائزة على جوائز نقدية ودعم حاضنة."
        },
        {
            id: 20,
            title: isEnglish ? "New student counseling center opens" : "افتتاح مركز جديد للإرشاد الطلابي",
            date: "2022-12-05",
            image: news2,
            summary: isEnglish ? 
                "The college has established a counseling center to support student mental health and wellbeing." 
                : "أقامت الكلية مركز إرشاد لدعم الصحة النفسية والعافية للطلاب.",
            content: isEnglish ? 
                "Services include individual counseling, stress management workshops, and academic support programs. The center is staffed by licensed professionals and trained peer counselors."
                : "تشمل الخدمات الإرشاد الفردي وورش عمل إدارة الإجهاد وبرامج الدعم الأكاديمي. المركز موظف من قبل محترفين مرخصين ومستشارين أقران مدربين."
        },
        {
            id: 21,
            title: isEnglish ? "Faculty member receives prestigious teaching award" : "عضو هيئة تدريس يحصل على جائزة تدريس مرموقة",
            date: "2022-11-25",
            image: news3,
            summary: isEnglish ? 
                "A professor from the IT department has been recognized for excellence in technical education." 
                : "تم تكريم أستاذ من قسم تكنولوجيا المعلومات لتميزه في التعليم التقني.",
            content: isEnglish ? 
                "The award acknowledges innovative teaching methods that improve student engagement and learning outcomes. The professor's project-based approach has been adopted college-wide."
                : "تقر الجائزة بأساليب التدريس المبتكرة التي تعزز مشاركة الطلاب ونتائج التعلم. تم اعتماد نهج الأستاذ القائم على المشاريع على مستوى الكلية."
        },
        {
            id: 22,
            title: isEnglish ? "College upgrades computer labs with latest technology" : "الكلية ترقى معامل الحاسوب بأحدث التقنيات",
            date: "2022-11-15",
            image: news4,
            summary: isEnglish ? 
                "All computer labs have been equipped with new hardware and software for the academic year." 
                : "تم تجهيز جميع معامل الحاسوب بأجهزة وبرامج جديدة للعام الدراسي.",
            content: isEnglish ? 
                "The upgrade includes high-performance workstations, VR equipment, and industry-standard software licenses. The investment ensures students train on technology used in the workplace."
                : "تشمل الترقية محطات عمل عالية الأداء ومعدات الواقع الافتراضي وتراخيص البرامج وفقًا لمعايير الصناعة. يضمن الاستثمار تدريب الطلاب على التكنولوجيا المستخدمة في مكان العمل."
        },
        {
            id: 23,
            title: isEnglish ? "Student team develops water conservation system" : "فريق طلابي يطور نظامًا للحفاظ على المياه",
            date: "2022-11-05",
            image: news5,
            summary: isEnglish ? 
                "An interdisciplinary project has created an IoT-based solution for monitoring and reducing water usage." 
                : "أنشأ مشروع متعدد التخصصات حلاً قائمًا على إنترنت الأشياء لمراقبة وتقليل استخدام المياه.",
            content: isEnglish ? 
                "The system uses sensors and machine learning to detect leaks and optimize irrigation. It has been piloted on campus with 30% reduction in water consumption."
                : "يستخدم النظام أجهزة استشعار وتعلم الآلة للكشف عن التسربات وتحسين الري. تم اختباره في الحرم الجامعي مع خفض استهلاك المياه بنسبة 30٪."
        },
        {
            id: 24,
            title: isEnglish ? "New industry advisory board for autotronics program" : "مجلس استشاري صناعي جديد لبرنامج الأوتوترونكس",
            date: "2022-10-25",
            image: news6,
            summary: isEnglish ? 
                "Automotive industry experts will guide curriculum development and student projects." 
                : "سيوجه خبراء صناعة السيارات تطوير المناهج الدراسية ومشاريع الطلاب.",
            content: isEnglish ? 
                "The board includes representatives from vehicle manufacturers, parts suppliers, and diagnostic equipment companies. Their input ensures the program remains aligned with industry needs."
                : "يضم المجلس ممثلين عن مصنعي المركبات وموردي قطع الغيار وشركات معدات التشخيص. يضمن مدخلاتهم بقاء البرنامج متوافقًا مع احتياجات الصناعة."
        },
        {
            id: 25,
            title: isEnglish ? "College celebrates 10th anniversary with tech exhibition" : "الكلية تحتفل بالذكرى العاشرة بمعرض تقني",
            date: "2022-10-15",
            image: news1,
            summary: isEnglish ? 
                "The event showcased student innovations and the college's impact on technical education." 
                : "عرض الحدث ابتكارات الطلاب وتأثير الكلية على التعليم التقني.",
            content: isEnglish ? 
                "Over 100 projects were displayed, ranging from robotics to renewable energy solutions. The exhibition attracted industry partners, alumni, and prospective students."
                : "تم عرض أكثر من 100 مشروع، تتراوح من الروبوتات إلى حلول الطاقة المتجددة. جذب المعرض شركاء الصناعة والخريجين والطلاب المحتملين."
        }
    ];

    // حساب الأخبار للصفحة الحالية
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = allNewsItems.slice(indexOfFirstNews, indexOfLastNews);
    const totalPages = Math.ceil(allNewsItems.length / newsPerPage);

    // تغيير الصفحة
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        if (newsListRef.current) {
            newsListRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`media-office-page ${isEnglish ? 'media-office-english' : 'media-office-arabic'}`}>
            {/* Background Section */}
            <div className="media-office-hero">
                <img 
                    src={backgroundImage} 
                    alt={isEnglish ? "Media office background" : "خلفية المكتب الإعلامي"} 
                    className="media-office-hero-img"
                />
                <div className="media-office-hero-overlay">
                    <h1 className="media-office-title">
                        {isEnglish ? "Media Office" : "المكتب الإعلامي"}
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="media-office-content">
                {/* Introduction */}
                <p className="media-office-intro">
                    {isEnglish ? 
                        "Stay updated with the latest news, events, and achievements from our college community."
                        : 
                        "ابق على اطلاع بأحدث الأخبار والفعاليات والإنجازات من مجتمع كليتنا."}
                </p>

                <div className="media-office-divider"></div>

                {/* News List */}
                <div className="media-office-news-list" ref={newsListRef}>
                    {currentNews.map(news => (
                        <div key={news.id} className="media-office-news-item">
                            <div className="media-office-news-img-container">
                                <img src={news.image} alt={news.title} className="media-office-news-img" />
                                <div className="media-office-news-date">
                                    {news.date}
                                </div>
                            </div>
                            <div className="media-office-news-content">
                                <h2 className="media-office-news-title">{news.title}</h2>
                                <p className="media-office-news-summary">{news.summary}</p>
                                <p className="media-office-news-full-content">{news.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="media-office-pagination">
                    <button 
                        onClick={() => paginate(currentPage - 1)} 
                        disabled={currentPage === 1}
                        className="media-office-page-btn"
                    >
                        « {isEnglish ? "Previous" : "السابق"}
                    </button>
                    <button 
                        onClick={() => paginate(currentPage + 1)} 
                        disabled={currentPage === totalPages}
                        className="media-office-page-btn"
                    >
                        {isEnglish ? "Next" : "التالي"} »
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default MediaOffice;