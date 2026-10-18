import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './login.css';

const AdminPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // Track user role
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // إزالة المسافات الزائدة من المدخلات
    const trimmedEmail = email.trim();
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    // التحقق من أن جميع الحقول ليست فارغة
    if (!trimmedEmail && !trimmedUsername && !trimmedPassword) {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'يجب ملء البيانات أولاً',
        confirmButtonText: 'حسناً'
      });
      return;
    }

    if (!trimmedEmail || !trimmedUsername || !trimmedPassword) {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'يجب إدخال جميع البيانات',
        confirmButtonText: 'حسناً'
      });
      return;
    }

    try {
      // عرض مؤشر التحميل
      setLoading(true);
      Swal.fire({
        title: 'جاري التحميل...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      // محاكاة استدعاء API
      await new Promise(resolve => setTimeout(resolve, 1500));

      // التحقق من صحة البيانات
      if (
        (trimmedUsername === 'Tasneemmoameed' && trimmedPassword === '123456789' && trimmedEmail === 'shm1111mo@gmail.com') ||
        (trimmedUsername === 'Tasneem' && trimmedPassword === '12345' && trimmedEmail === 'tasneem@example.com')
      ) {
        Swal.close(); // إغلاق مؤشر التحميل
        Swal.fire({
          icon: 'success',
          title: 'نجاح',
          text: 'العملية تمت بنجاح ومسموح لكِ بالدخول',
          confirmButtonText: 'حسناً'
        }).then(() => {
          setIsLoggedIn(true); // الانتقال إلى عرض الأزرار
          setUserRole(trimmedUsername === 'Tasneem' ? 'newsEditor' : 'admin'); // Set role based on user
          setEmail(''); // إعادة تعيين الحقول
          setUsername('');
          setPassword('');
        });
      } else {
        Swal.close(); // إغلاق مؤشر التحميل
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: 'بيانات تسجيل الدخول غير صحيحة',
          confirmButtonText: 'حسناً'
        });
      }
    } catch (error) {
      Swal.close(); // إغلاق مؤشر التحميل
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'حدث خطأ أثناء تسجيل الدخول. يرجى المحاولة مرة أخرى.',
        confirmButtonText: 'حسناً'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-admin-container">
      {!isLoggedIn ? (
        <div className="admin-login-container">
          <h2 className="admin-form-title">تسجيل الدخول</h2>
          <div className="admin-form-group">
            <label htmlFor="email" className="admin-input-label">البريد الإلكتروني:</label>
            <input
              className="admin-input-field"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="admin-form-group">
            <label htmlFor="username" className="admin-input-label">اسم المستخدم:</label>
            <input
              className="admin-input-field"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="admin-form-group">
            <label htmlFor="password" className="admin-input-label">كلمة المرور:</label>
            <input
              className="admin-input-field"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="admin-submit-button" onClick={handleSubmit} disabled={loading}>
            {loading ? 'جاري التحميل...' : 'تسجيل الدخول'}
          </button>
        </div>
      ) : (
        <div className="admin-dashboard-container">
          <h2 className="admin-dashboard-title">الصلاحيات الخاصة بك </h2>
          <div className="admin-dashboard-grid">
            {userRole === 'admin' && (
              <>
                <div className="admin-dashboard-item">
                  <p className="admin-item-label">الصفحة الخاصة بالطلاب </p>
                  <Link to="/student" className="admin-dashboard-link">الطلاب</Link>
                </div>
                <div className="admin-dashboard-item">
                  <p className="admin-item-label">الصفحة الخاصة بالدكاترة </p>
                  <Link to="/Doctor" className="admin-dashboard-link">الدكاترة</Link>
                </div>
              </>
            )}
            <div className="admin-dashboard-item">
              <p className="admin-item-label">الصفحة الخاصة بالأخبار </p>
              <Link to="/news" className="admin-dashboard-link">{userRole === 'newsEditor' ? 'إضافة خبر' : 'الأخبار'}</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;