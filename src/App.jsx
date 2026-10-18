import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; // إضافة ThemeProvider
import { LanguageProvider } from './context/LanguageContext';
import Header from './Component/layout/Header/Header.jsx';
import Footer from './Component/layout/Footer/footer.jsx';
import Home from './Pages/Home.jsx';
import DepartIT from './Pages/depart_it.jsx';
import DepartMica from './Pages/depart_mica.jsx';
import Industrial from './Pages/depart_industrial.jsx';
import Auto from './Pages/depart_auto.jsx';
import ResultsPage from './Pages/result';
import VisionMission from './Pages/Vision & Miss.jsx';
import GoalsValues from './Pages/Goal&value.jsx';
import UniversityIntro from './Pages/learn-about.jsx';
import Dean from './Pages/dean.jsx';
import SupremeCouncil from './Pages/council.jsx';
import StudentActivities from './Pages/student-activities';
import Practical from './Pages/Practical-training';
import CareerOpportunities from './Pages/Work areas';
import MediaOffice from './Pages/media-office';
import ContactUs from './Pages/contact-us';
import FacultyMembers from './Pages/FacultyDr';
import AppealForm from './Pages/apealForm';
import AdminPanel from './Admin/Login/login.jsx';
import News from './Admin/News/News.jsx';
import DoctorsManagement from './Admin/Dr/Doctors.jsx';
import StudentsManagement from './Admin/Student/Student.jsx';   
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // نقل لأول الصفحة مع تأثير ناعم
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider> {/* إضافة ThemeProvider */}
      <LanguageProvider>
        <div className="App">
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/it" element={<DepartIT />} />
            <Route path="/mica" element={<DepartMica />} />
            <Route path="/ind" element={<Industrial />} />
            <Route path="/auto" element={<Auto />} />
            <Route path="/college-result" element={<ResultsPage />} />
            <Route path="/VisionMission" element={<VisionMission />} />
            <Route path="/GoalsValues" element={<GoalsValues />} />
            <Route path="/UniversityIntro" element={<UniversityIntro />} />
            <Route path="/DeanPro" element={<Dean />} />
            <Route path="/SupremeCouncil" element={<SupremeCouncil />} />
            <Route path="/StudentActivities" element={<StudentActivities />} />
            <Route path="/training" element={<Practical />} />
            <Route path="/Post" element={<CareerOpportunities />} />
            <Route path="/MediaOffice" element={<MediaOffice />} />
            <Route path="/Contact" element={<ContactUs />} />
            <Route path="/FacultyMembers" element={<FacultyMembers />} />
            <Route path="/AppealForm" element={<AppealForm />} />
            <Route path="/AdminPanel" element={<AdminPanel />} />
            <Route path="/news" element={<News />} />
            <Route path="/Doctor" element={<DoctorsManagement />} />
            <Route path="/student" element={<StudentsManagement />} />
          </Routes>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;