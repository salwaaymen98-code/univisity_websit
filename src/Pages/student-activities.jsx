import React from 'react';
import '../Style/student-activities.css';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import backgroundImage from '../assets/Image/Background/student-activities.jpg';

const StudentActivities = () => {
    const { isEnglish } = useLanguage();
    const { theme } = useTheme();
    
    return (
       <div className={`student-activities-container ${theme === 'dark' ? 'dark-mode' : ''} ${isEnglish ? 'student-activities-english' : 'student-activities-arabic'}`}>
            {/* Background Section */}
            <div className="student-activities-hero">
                <img 
                    src={backgroundImage} 
                    alt={isEnglish ? "Student Activities Background" : "خلفية النشاط الطلابي"} 
                    className="student-activities-hero-img"
                />
                <div className="student-activities-hero-content">
                    <h1 className="student-activities-title">
                        {isEnglish ? "Student Activities Unit" : "وحدة النشاط الطلابي"}
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="student-activities-content">
                {/* Introduction */}
                <p className="student-activities-intro">
                    {isEnglish ? 
                        "Student activities are among the most important means of achieving educational goals, as they aim to build a balanced student personality that believes in dialogue and communication, while encouraging creativity and innovation."
                        : 
                        "يعد النشاط الطلابي من أهم وسائل تحقيق أهداف وغاية التعليم، حيث يسعى إلى بناء شخصية الطالب المتكاملة , المؤمنة بالحوار والتواصل المتسمة بالوسيطة والتوازن، كما يساعد في تنمية قدرات الطالب وتشجيعه على الإبداع والابتكار."}
                </p>

                {/* Objectives Section */}
                <h2 className="student-activities-section-title">
                    {isEnglish ? "Objectives of the Student Activities Unit:" : "أهداف وحدة النشاط الطلابي:"}
                </h2>
                <p className="student-activities-section-subtitle">
                    {isEnglish ? 
                        "The main objectives of the Student Activities Unit can be summarized as follows:"
                        : 
                        "ويمكن تحديد أهم أهداف وحدة النشاط الطلابي بشكل عام في الآتي:"}
                </p>
                <ol className="student-activities-list">
                    <li>{isEnglish ? "Confirming students' belonging to their nation and homeland, and helping them acquire human knowledge in various fields." : "تأكيد انتماء الطلاب لأمتهم ووطنهم، ومساعدتهم على التزود بالمعرفة الإنسانية في شتى مجالاتها."}</li>
                    <li>{isEnglish ? "Deepening proper social values and translating them into student actions and behavior." : "تعميق القيم الاجتماعية السليمة وترجمتها إلى أفعال وسلوك للطالب."}</li>
                    <li>{isEnglish ? "Instilling noble meanings derived from Islamic principles of love for the homeland, belonging to it, and performing duty towards it." : "غرس المعاني السامية المستمدة من مبادئ الدين الحنيف لحب الوطن والانتماء له وأداء الواجب نحوه."}</li>
                    <li>{isEnglish ? "Developing the student's personality through diverse cultural sources in light of Islamic faith." : "تنمية شخصية الطالب من خلال تنوع مصادر الثقافة في ضوء العقيدة الإسلامية."}</li>
                    <li>{isEnglish ? "Contributing to the comprehensive preparation of youth spiritually, scientifically, intellectually and physically, and developing self-confidence to perform their duty towards their country and nation." : "الإسهام في الإعداد المتكامل للشباب روحياً وعلمياً وفكرياً وجسدياً، وتنمية الثقة بالنفس, لأداء واجبهم تجاه بلادهم وأمتهم."}</li>
                    <li>{isEnglish ? "Benefiting from youth's free time and investing it well, developing and refining their talents, properly guiding them, and training them in effective intellectual participation." : "الإفادة من أوقات الفراغ لدى الشباب وحسن استثمارها وتنمية وصقل مواهبهم، وتوجيهها التوجيه السليم, وتدريبهم على المشاركة الفكرية الفعالة."}</li>
                    <li>{isEnglish ? "Preparing competent student leaders in all activity fields." : "إعداد قادة متمكنين من الطلاب في كافة مجالات الأنشطة."}</li>
                    <li>{isEnglish ? "Contributing to accustoming students to tolerance, moderation, constructive dialogue, and accepting others and opposing opinions." : "الإسهام في تعويد الطلاب على التسامح والوسطية والحوار البناء وتقبل الآخرين والآراء المخالفة."}</li>
                    <li>{isEnglish ? "Creating a spirit of cooperation and bonding between students and faculty members." : "إيجاد روح التعاون والترابط بين الطلاب وأعضاء هيئة التدريس."}</li>
                    <li>{isEnglish ? "Working to integrate youth into society." : "العمل على اندماج الشباب بالمجتمع."}</li>
                    <li>{isEnglish ? "Encouraging a spirit of creativity and innovation among students." : "تشجيع روح الإبداع والابتكار لدى الطلاب."}</li>
                    <li>{isEnglish ? "Keeping pace with development and learning about modern technologies and information gathering methods." : "مواكبة التطور والتعرف على ما توصلت إليه التقنيات الحديثة ووسائل جمع المعلومات."}</li>
                    <li>{isEnglish ? "Spreading awareness in all life fields among youth, in accordance with Islamic teachings." : "نشر الوعي في كافة مجالات الحياة بين الشباب، بما يتوافق مع تعاليم الدين الإسلامي الحنيف."}</li>
                </ol>

                <div className="student-activities-divider"></div>

                {/* Organizational Tasks */}
                <h2 className="student-activities-section-title">
                    {isEnglish ? "Organizational Tasks of the Student Activities Unit:" : "المهام التنظيمية لوحدة النشاط الطلابي:"}
                </h2>
                <ol className="student-activities-list">
                    <li>{isEnglish ? "Supervising diverse student activities." : "الإشراف على الأنشطة الطلابية المتنوعة."}</li>
                    <li>{isEnglish ? "Planning central activities and following up on their implementation at the college level." : "التخطيط للأنشطة المركزية ومتابعة تنفيذها على مستوى الكلية."}</li>
                    <li>{isEnglish ? "Issuing regulations, systems and general activity plans." : "إصدار اللوائح والأنظمة والخطط العامة للنشاط."}</li>
                    <li>{isEnglish ? "Following up on student activity programs in the college and evaluating them." : "متابعة برامج الأنشطة الطلابية في الكلية وتقويمها."}</li>
                    <li>{isEnglish ? "Proposing the student activities budget and distributing its items." : "اقتراح ميزانية الأنشطة الطلابية وتوزيع بنودها."}</li>
                </ol>

                <div className="student-activities-divider"></div>

                {/* General Committee Tasks */}
                <h2 className="student-activities-section-title">
                    {isEnglish ? "Tasks of the General Student Activities Committee:" : "مهام اللجنة العامة للنشاط الطلابى:"}
                </h2>
                <ol className="student-activities-list">
                    <li>{isEnglish ? "General supervision of student activities in the college." : "الإشراف العام على الأنشطة الطلابية في الكلية."}</li>
                    <li>{isEnglish ? "Approving programs and plans of activity committees." : "إقرار برامج وخطط لجان النشاط."}</li>
                    <li>{isEnglish ? "Approving the formation of activity committees." : "المصادقة على تشكيل لجان النشاط."}</li>
                    <li>{isEnglish ? "Forming subsidiary support committees (Media Committee, Organization Committee, etc.)." : "تشكيل لجان مساندة فرعية مثل ( لجنة الإعلام ,لجنة التنظيم , …..)"}</li>
                    <li>{isEnglish ? "Supporting activities morally and materially." : "دعم النشاط معنوياً ومادياً."}</li>
                    <li>{isEnglish ? "Approving the general committee's budget." : "المصادقة على ميزانية اللجنة العامة."}</li>
                    <li>{isEnglish ? "Spending on activities based on the general committee's recommendations and proposing transfers between items." : "الإنفاق على النشاط بناء على توصيات اللجنة العامة واقتراح المناقلة بين البنود."}</li>
                    <li>{isEnglish ? "Following up on the implementation of activity committees' programs." : "متابعة تنفيذ برامج لجان النشاط."}</li>
                    <li>{isEnglish ? "Preparing final activity reports." : "إعداد التقارير الختامية للنشاط."}</li>
                </ol>

                <div className="student-activities-divider"></div>

                {/* Sub-Committees Tasks */}
                <h2 className="student-activities-section-title">
                    {isEnglish ? "Tasks of Student Activity Unit Committees:" : "مهام لجان وحدة النشاط الطلابي:"}
                </h2>
                <ol className="student-activities-list">
                    <li>{isEnglish ? "Attracting new students to participate in the committee." : "استقطاب طلاب جدد للمشاركة في اللجنة."}</li>
                    <li>{isEnglish ? "Developing an activity plan for the academic year and submitting it to the General Activity Committee." : "وضع خطة لنشاط اللجنة خلال العام الدراسي ورفعها للجنة العامة للنشاط."}</li>
                    <li>{isEnglish ? "Proposing the committee's budget according to the relevant regulations and systems." : "اقتراح ميزانية اللجنة وفق اللوائح والأنظمة الخاصة بذلك."}</li>
                    <li>{isEnglish ? "Implementing the approved plan and distributing responsibilities among committee members." : "تنفيذ الخطة المعتمدة وتوزيع المسؤوليات على أفراد اللجنة."}</li>
                    <li>{isEnglish ? "Documenting the committee's work and preparing periodic and final reports about the committee." : "توثيق أعمال اللجنة وإعداد التقارير الدورية والنهائية عن اللجنة."}</li>
                </ol>

                <div className="student-activities-divider"></div>

                {/* Committees Section */}
                <h2 className="student-activities-section-title">
                    {isEnglish ? "Student Activity Unit Committees:" : "لجان وحدة النشاط الطلابي:"}
                </h2>
                <p className="student-activities-section-subtitle">
                    {isEnglish ? 
                        "The Student Activity Unit includes the following committees:"
                        : 
                        "تشمل لجان وحدة النشاط الطلابي اللجان التالية:"}
                </p>

                {/* Cultural Committee */}
                <h3 className="student-activities-committee-title">1. {isEnglish ? "Cultural Committee" : "اللجنة الثقافية"}</h3>
                <p className="student-activities-committee-description">
                    {isEnglish ? 
                        "The Cultural Committee aims to organize cultural activities that introduce students to their society's characteristics and needs, working to develop students' literary and cultural energies."
                        : 
                        "وتهدف اللجنة الثقافية إلى تنظيم أوجه النشاط الثقافي ,الذي يؤدي إلى تعريف الطالب بخصائص مجتمعة واحتياجاته, للعمل على تنمية الطاقات الأدبية والثقافية للطلاب."}
                </p>
                <p className="student-activities-committee-subtitle">
                    {isEnglish ? 
                        "Cultural activity always seeks to:"
                        : 
                        "ويسعى النشاط الثقافي دائماً إلى:"}
                </p>
                <ol className="student-activities-committee-list">
                    <li>{isEnglish ? "Developing students' literary, intellectual and religious talents and abilities." : "تنمية المواهب والقدرات الأدبية والفكرية والدينية لدى الطلاب."}</li>
                    <li>{isEnglish ? "Creating citizens capable of bearing responsibility through knowledge of their society." : "خلق المواطن القادر على تحمل المسئولية من خلال معرفته بمجتمعه."}</li>
                    <li>{isEnglish ? "Introducing youth to their society's problems through cultural competitions and seminars." : "تعريف الشباب بمشكلات مجتمعه من خلال المسابقات والندوات الثقافية."}</li>
                    <li>{isEnglish ? "Spreading proper religious awareness among members through religious seminars and competitions." : "نشر الوعي الديني السليم بين الأعضاء من خلال الندوات والمسابقات الدينية."}</li>
                    <li>{isEnglish ? "Developing love of loyalty and devotion to the country by deepening democracy in decision-making." : "تنمية حب الولاء والإخلاص للبلاد عن طريق تعميق الديمقراطية في اتخاذ القرار."}</li>
                </ol>

                <div className="student-activities-committee-divider"></div>

                {/* Art Committee */}
                <h3 className="student-activities-committee-title">2. {isEnglish ? "Art Committee" : "اللجنة الفنية"}</h3>
                <p className="student-activities-committee-description">
                    {isEnglish ? 
                        "It aims to develop students' artistic activity, working in accordance with its noble purposes to provide opportunities to showcase talents and artistic production, as art is the mirror that reflects the progress and advancement of nations, expressing their human and aesthetic feelings... The Art Committee organizes the following competitions:"
                        : 
                        "وتهدف إلى تنمية النشاط الفني للطلاب, والعمل بما يتفق مع أغراضه السامية على إتاحة الفرصة لإبراز مواهب مستوى إنتاجهم الفني، وذلك لأن الفن هو المرآة التي تعكس مدى تقدم الشعوب ورقيها، وهو الذي يعبر عن مشاعرها الإنسانية والجمالية... وتنظم اللجنة الفنية المسابقات التالية:"}
                </p>
                <ol className="student-activities-committee-list">
                    <li>{isEnglish ? "Theatrical arts competition" : "مسابقة الفنون المسرحية."}</li>
                    <li>{isEnglish ? "Folk arts competition" : "مسابقة الفنون الشعبية."}</li>
                    <li>{isEnglish ? "Organizing scientific exhibitions" : "إقامة معارض علمية."}</li>
                    <li>{isEnglish ? "Fine arts competition" : "مسابقة الفنون التشكيلية."}</li>
                    <li>{isEnglish ? "Variety competition" : "مسابقة المنوعات."}</li>
                    <li>{isEnglish ? "Music and choir competition" : "مسابقة الموسيقي والكورال."}</li>
                </ol>

                <div className="student-activities-committee-divider"></div>

                {/* Sports Committee */}
                <h3 className="student-activities-committee-title">3. {isEnglish ? "Sports Committee" : "اللجنة الرياضية"}</h3>
                <p className="student-activities-committee-description">
                    {isEnglish ? 
                        "It aims to spread sportsmanship among students, encourage sports talents, work to develop them, and organize sports activities, including forming sports teams, holding matches, competitions and sports festivals."
                        : 
                        "وتهدف إلى بث الروح الرياضية بين الطلاب، وتشجيع المواهب الرياضية ,والعمل على تنميتها وتنظيم النشاط الرياضي، بما في ذلك تكوين الفرق الرياضية، وإقامة المباريات والمسابقات والمهرجانات الرياضية."}
                </p>

                <div className="student-activities-committee-divider"></div>

                {/* Social and Trips Committee */}
                <h3 className="student-activities-committee-title">4. {isEnglish ? "Social and Trips Committee" : "اللجنة الاجتماعية والرحلات"}</h3>
                <p className="student-activities-committee-description">
                    {isEnglish ? 
                        "It aims to work on developing social ties between students and faculty members, and spreading a spirit of cooperation through all possible means by organizing social, cultural and recreational trips and camps that help develop students' hobbies. It also aims to:"
                        : 
                        "تهدف إلى العمل على تنمية الروابط الاجتماعية بين الطلاب وبين أعضاء هيئة التدريس ,وبث روح التعاون بشتى الوسائل الممكنة. عن طريق تنظيم الرحلات والمعسكرات الاجتماعية والثقافية والترويحية التي تساعد على تنمية هوايات الطلاب, وتهدف أيضاً إلى:"}
                </p>
                <ol className="student-activities-committee-list">
                    <li>{isEnglish ? "Helping members bear their responsibility towards their society." : "مساعدة الأعضاء على تحمل مسئوليتهم تجاه مجتمعهم."}</li>
                    <li>{isEnglish ? "Helping members develop individual skills." : "مساعدة الأعضاء على تنمية المهارات الفردية."}</li>
                    <li>{isEnglish ? "Conducting recreational trips throughout the Republic." : "القيام بعمل رحلات ترفيهية بمختلف أنحاء الجمهورية."}</li>
                    <li>{isEnglish ? "Addressing negative social phenomena, researching them and presenting treatment methods." : "تناول الظواهر الاجتماعية السلبية والبحث فيها وتقديم طرق علاجها."}</li>
                </ol>
            </div>
            
        </div>
    );
};

export default StudentActivities;