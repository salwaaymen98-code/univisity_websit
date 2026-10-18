import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../Style/result.css';

const ResultsPage = () => {
  const [seatNumber, setSeatNumber] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!seatNumber && !idNumber && !department) {
      Swal.fire({
        title: 'خطأ',
        text: 'يجب ملء البيانات أولاً',
        icon: 'error',
        confirmButtonText: 'حسناً'
      });
      return;
    }

    if (!seatNumber || !idNumber || !department) {
      Swal.fire({
        title: 'خطأ',
        text: 'يجب إدخال جميع البيانات',
        icon: 'error',
        confirmButtonText: 'حسناً'
      });
      return;
    }

    try {
      Swal.fire({
        title: 'جاري التحميل...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      setLoading(true);
      
      // Simulate API call (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock data - Arabic only
      const mockResults = [
        {
          percentage: "78.6",
          total: "629",
          computerArchitecture: "77",
          microprocessors: "92",
          networkAdministration: "139",
          dataCommunication: "131",
          dataProgramming: "86",
          ccna: "104",
          status: "ناجح",
          name: "احمد ابراهيم عبدالله علي"
        }
      ];

      setResults(mockResults);
      Swal.close();
    } catch (error) {
      Swal.fire({
        title: 'خطأ',
        text: 'حدث خطأ أثناء جلب النتائج. يرجى المحاولة مرة أخرى.',
        icon: 'error',
        confirmButtonText: 'حسناً'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Results-container">
      {!results ? (
        <div className="form-container">
          <h2>استعلام عن النتائج</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className='form-label' htmlFor="department">القسم:</label>
              <select
                name="form-control"
                id="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="">اختر القسم</option>
                <option value="برنامج تكنولوجيا المعلومات">برنامج تكنولوجيا المعلومات</option>
                <option value="برنامج ميكاترونكس">برنامج ميكاترونكس</option>
                <option value="برنامج الهندسة الصناعية">برنامج اليه الصناعية</option>
                <option value="برنامج أوتوترونكس">برنامج أوتوترونكس</option>
              </select>
            </div>
            <div className="form-group">
              <label className='form-label' htmlFor="seatNumber">رقم الجلوس:</label>
              <input
                className="form-control"
                type="text"
                id="seatNumber"
                value={seatNumber}
                onChange={(e) => setSeatNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className='form-label' htmlFor="idNumber">رقم البطاقة:</label>
              <input
                className="form-control"
                type="text"
                id="idNumber"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'جاري التحميل...' : 'عرض النتيجة'}
            </button>
          </form>
        </div>
      ) : (
        <div className="Result-container">
          <h2>جامعة الفيوم التكنولوجية الدولية</h2>
          <h3 className="Result-subtitle">الكلية التكنولوجية بالفيوم</h3>
          <h4 className="Result-program">برنامج تكنولوجيا المعلومات - الفرقة الثانية</h4>
          <h4 className="Result-term">نتيجة امتحانات الفصل الدراسي الأول - تخصص شبكات</h4>
          <h5 className="Result-year">للعام الدراسي 2024 / 2025</h5>
          
          <table className="Result-table">
            <thead>
              <tr>
                <th>النسبة</th>
                <th>المجموع</th>
                <th>هندسة الحاسب</th>
                <th>المعالجات الدقيقة</th>
                <th>إدارة الشبكات</th>
                <th>اتصالات البيانات</th>
                <th>برمجة البيانات</th>
                <th>CCNA RS&IT</th>
                <th>الحالة</th>
                <th>الاسم</th>
              </tr>
            </thead>
            <tbody>
              {results.map((student, index) => (
                <tr key={index}>
                  <td>{student.percentage}</td>
                  <td>{student.total}</td>
                  <td>{student.computerArchitecture}</td>
                  <td>{student.microprocessors}</td>
                  <td>{student.networkAdministration}</td>
                  <td>{student.dataCommunication}</td>
                  <td>{student.dataProgramming}</td>
                  <td>{student.ccna}</td>
                  <td>{student.status}</td>
                  <td>{student.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/AppealForm" className="appeal-btn">طلب التماس</Link>
        </div>
      )}
    </div>
  );
};

export default ResultsPage;