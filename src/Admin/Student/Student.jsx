import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Student.css';

const StudentsManagement = () => {
  const [studentsList, setStudentsList] = useState([]);
  const [action, setAction] = useState('');
  const [name, setName] = useState('');
  const [seatNumber, setSeatNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [term, setTerm] = useState('');
  const [selectedViewTerm, setSelectedViewTerm] = useState('');
  const [grades, setGrades] = useState({
    '1': '',
    '2': '',
    '3': '',
    '4': '',
    '5': '',
    '6': '',
    '7': '',
    '8': '',
    '9': '',
    '10': '',
    '11': '',
    '12': ''
  });
  const [searchSeatNumber, setSearchSeatNumber] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  const firstTermSubjects = [
    { id: '1', name: 'linux' },
    { id: '2', name: 'C++' },
    { id: '3', name: 'opreating systems' },
    { id: '4', name: 'web1' },
    { id: '5', name: 'introduction to DB' },
    { id: '6', name: 'digital engineering' }
  ];

  const secondTermSubjects = [
    { id: '7', name: 'data structures' },
    { id: '8', name: 'java 1' },
    { id: '9', name: 'web 2' },
    { id: '10', name: 'CCNA R&S' },
    { id: '11', name: 'BD programming' },
    { id: '12', name: 'capstone design' }
  ];

  const getSubjects = () => {
    return term === 'first' ? firstTermSubjects : term === 'second' ? secondTermSubjects : [];
  };

  const getViewSubjects = () => {
    return selectedViewTerm === 'first' ? firstTermSubjects : selectedViewTerm === 'second' ? secondTermSubjects : [];
  };

  const calculateTotal = (grades, term) => {
    if (!term) return 0; // في حالة عدم وجود ترم
    const subjects = term === 'first' ? firstTermSubjects : secondTermSubjects;
    console.log('Calculating total for grades:', grades, 'term:', term);
    const total = subjects.reduce((sum, subject) => {
      const grade = grades[subject.id];
      if (grade && grade !== 'غير مدخلة' && !isNaN(Number(grade))) {
        return sum + Number(grade);
      }
      return sum;
    }, 0);
    console.log('Calculated total:', total);
    return total;
  };

  const validateGrades = (grades) => {
    const subjects = getSubjects();
    return subjects.every(subject => {
      const grade = grades[subject.id];
      if (grade === '') return true;
      const num = Number(grade);
      return !isNaN(num);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting with action:', action, 'term:', term);

    if (action === 'add') {
      if (!name.trim() || !seatNumber.trim() || !department || !year || !term || !validateGrades(grades) || getSubjects().every(s => grades[s.id] === '')) {
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: 'يجب إدخال جميع الحقول (الاسم، رقم الجلوس، القسم، السنة، الترم، ودرجة واحدة على الأقل) ويجب أن تكون الدرجات أرقامًا',
          confirmButtonText: 'حسناً'
        });
        return;
      }

      if (studentsList.some(s => s.seatNumber === seatNumber.trim())) {
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: 'رقم الجلوس موجود بالفعل!',
          confirmButtonText: 'حسناً'
        });
        return;
      }

      try {
        setLoading(true);
        Swal.fire({
          title: 'جاري التحميل...',
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          }
        });

        await new Promise(resolve => setTimeout(resolve, 1000));

        const newStudent = {
          id: Date.now(),
          name: name.trim(),
          seatNumber: seatNumber.trim(),
          idNumber: 'غير مدخل',
          department,
          year,
          specialization: department === 'تكنولوجيا المعلومات' && (year === 'third' || year === 'fourth') ? specialization : '',
          term,
          grades: {
            '1': term === 'first' ? (grades['1'] || 'غير مدخلة') : 'غير مدخلة',
            '2': term === 'first' ? (grades['2'] || 'غير مدخلة') : 'غير مدخلة',
            '3': term === 'first' ? (grades['3'] || 'غير مدخلة') : 'غير مدخلة',
            '4': term === 'first' ? (grades['4'] || 'غير مدخلة') : 'غير مدخلة',
            '5': term === 'first' ? (grades['5'] || 'غير مدخلة') : 'غير مدخلة',
            '6': term === 'first' ? (grades['6'] || 'غير مدخلة') : 'غير مدخلة',
            '7': term === 'second' ? (grades['7'] || 'غير مدخلة') : 'غير مدخلة',
            '8': term === 'second' ? (grades['8'] || 'غير مدخلة') : 'غير مدخلة',
            '9': term === 'second' ? (grades['9'] || 'غير مدخلة') : 'غير مدخلة',
            '10': term === 'second' ? (grades['10'] || 'غير مدخلة') : 'غير مدخلة',
            '11': term === 'second' ? (grades['11'] || 'غير مدخلة') : 'غير مدخلة',
            '12': term === 'second' ? (grades['12'] || 'غير مدخلة') : 'غير مدخلة'
          },
          totalGrades: calculateTotal(grades, term),
          hasAppeal: false
        };
        console.log('Adding student:', newStudent);
        setStudentsList([...studentsList, newStudent]);
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'نجاح',
          text: 'تم إضافة الطالب بنجاح!',
          confirmButtonText: 'حسناً'
        });

        setName('');
        setSeatNumber('');
        setDepartment('');
        setYear('');
        setSpecialization('');
        setTerm('');
        setGrades({
          '1': '',
          '2': '',
          '3': '',
          '4': '',
          '5': '',
          '6': '',
          '7': '',
          '8': '',
          '9': '',
          '10': '',
          '11': '',
          '12': ''
        });
      } catch (error) {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: 'حدث خطأ أثناء إضافة الطالب. يرجى المحاولة مرة أخرى.',
          confirmButtonText: 'حسناً'
        });
      } finally {
        setLoading(false);
      }
    } else if (action === 'edit') {
      if (!searchSeatNumber.trim()) {
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: 'يجب إدخال رقم الجلوس للبحث',
          confirmButtonText: 'حسناً'
        });
        return;
      }

      const student = studentsList.find(s => s.seatNumber === searchSeatNumber.trim());
      if (!student) {
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: 'لم يتم العثور على طالب بهذا الرقم',
          confirmButtonText: 'حسناً'
        });
        return;
      }

      if (!validateGrades(grades)) {
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: 'يجب أن تكون الدرجات أرقامًا',
          confirmButtonText: 'حسناً'
        });
        return;
      }

      try {
        setLoading(true);
        Swal.fire({
          title: 'جاري التحميل...',
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          }
        });

        await new Promise(resolve => setTimeout(resolve, 1000));

        const updatedStudentsList = studentsList.map(s =>
          s.id === student.id
            ? {
                ...s,
                name: name.trim() || s.name,
                seatNumber: seatNumber.trim() || s.seatNumber,
                department: department || s.department,
                year: year || s.year,
                specialization: department === 'تكنولوجيا المعلومات' && (year === 'third' || year === 'fourth') ? specialization : s.specialization,
                term: term || s.term,
                grades: {
                  '1': term === 'first' ? (grades['1'] !== '' ? grades['1'] : s.grades['1']) : 'غير مدخلة',
                  '2': term === 'first' ? (grades['2'] !== '' ? grades['2'] : s.grades['2']) : 'غير مدخلة',
                  '3': term === 'first' ? (grades['3'] !== '' ? grades['3'] : s.grades['3']) : 'غير مدخلة',
                  '4': term === 'first' ? (grades['4'] !== '' ? grades['4'] : s.grades['4']) : 'غير مدخلة',
                  '5': term === 'first' ? (grades['5'] !== '' ? grades['5'] : s.grades['5']) : 'غير مدخلة',
                  '6': term === 'first' ? (grades['6'] !== '' ? grades['6'] : s.grades['6']) : 'غير مدخلة',
                  '7': term === 'second' ? (grades['7'] !== '' ? grades['7'] : s.grades['7']) : 'غير مدخلة',
                  '8': term === 'second' ? (grades['8'] !== '' ? grades['8'] : s.grades['8']) : 'غير مدخلة',
                  '9': term === 'second' ? (grades['9'] !== '' ? grades['9'] : s.grades['9']) : 'غير مدخلة',
                  '10': term === 'second' ? (grades['10'] !== '' ? grades['10'] : s.grades['10']) : 'غير مدخلة',
                  '11': term === 'second' ? (grades['11'] !== '' ? grades['11'] : s.grades['11']) : 'غير مدخلة',
                  '12': term === 'second' ? (grades['12'] !== '' ? grades['12'] : s.grades['12']) : 'غير مدخلة'
                },
                totalGrades: calculateTotal(grades, term || s.term),
                hasAppeal: s.hasAppeal
              }
            : s
        );
        console.log('Updated students list:', updatedStudentsList);
        setStudentsList(updatedStudentsList);
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'نجاح',
          text: 'تم تعديل بيانات الطالب بنجاح!',
          confirmButtonText: 'حسناً'
        });

        setName('');
        setSeatNumber('');
        setDepartment('');
        setYear('');
        setSpecialization('');
        setTerm('');
        setGrades({
          '1': '',
          '2': '',
          '3': '',
          '4': '',
          '5': '',
          '6': '',
          '7': '',
          '8': '',
          '9': '',
          '10': '',
          '11': '',
          '12': ''
        });
        setSearchSeatNumber('');
        setEditingId(null);
      } catch (error) {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: 'حدث خطأ أثناء تعديل بيانات الطالب. يرجى المحاولة مرة أخرى.',
          confirmButtonText: 'حسناً'
        });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSearchForEdit = () => {
    if (!searchSeatNumber.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'يجب إدخال رقم الجلوس للبحث',
        confirmButtonText: 'حسناً'
      });
      return;
    }

    const student = studentsList.find(s => s.seatNumber === searchSeatNumber.trim());
    if (student) {
      console.log('Student found:', student);
      setEditingId(student.id);
      setName(student.name);
      setSeatNumber(student.seatNumber);
      setDepartment(student.department);
      setYear(student.year || '');
      setSpecialization(student.specialization || '');
      setTerm(student.term);
      setGrades({
        '1': student.grades['1'] === 'غير مدخلة' ? '' : student.grades['1'],
        '2': student.grades['2'] === 'غير مدخلة' ? '' : student.grades['2'],
        '3': student.grades['3'] === 'غير مدخلة' ? '' : student.grades['3'],
        '4': student.grades['4'] === 'غير مدخلة' ? '' : student.grades['4'],
        '5': student.grades['5'] === 'غير مدخلة' ? '' : student.grades['5'],
        '6': student.grades['6'] === 'غير مدخلة' ? '' : student.grades['6'],
        '7': student.grades['7'] === 'غير مدخلة' ? '' : student.grades['7'],
        '8': student.grades['8'] === 'غير مدخلة' ? '' : student.grades['8'],
        '9': student.grades['9'] === 'غير مدخلة' ? '' : student.grades['9'],
        '10': student.grades['10'] === 'غير مدخلة' ? '' : student.grades['10'],
        '11': student.grades['11'] === 'غير مدخلة' ? '' : student.grades['11'],
        '12': student.grades['12'] === 'غير مدخلة' ? '' : student.grades['12']
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'لم يتم العثور على طالب بهذا الرقم',
        confirmButtonText: 'حسناً'
      });
    }
  };

  return (
    <div className="studentsManagement-results-container">
      <div className="studentsManagement-form-container">
        <h2 className="studentsManagement-form-title">إدارة الطلاب</h2>
        <div className="studentsManagement-form-group">
          <label htmlFor="action" className="studentsManagement-input-label">اختر الإجراء:</label>
          <select
            className="studentsManagement-input-select"
            id="action"
            value={action}
            onChange={(e) => {
              console.log('Action changed to:', e.target.value);
              setAction(e.target.value);
              setName('');
              setSeatNumber('');
              setDepartment('');
              setYear('');
              setSpecialization('');
              setTerm('');
              setSelectedViewTerm('');
              setGrades({
                '1': '',
                '2': '',
                '3': '',
                '4': '',
                '5': '',
                '6': '',
                '7': '',
                '8': '',
                '9': '',
                '10': '',
                '11': '',
                '12': ''
              });
              setSearchSeatNumber('');
              setEditingId(null);
            }}
          >
            <option value="">اختر إجراء</option>
            <option value="add">إضافة درجات طالب</option>
            <option value="edit">تعديل درجات طالب</option>
            <option value="viewAppeals">عرض الطلاب الذين قدموا طلب التماس</option>
            <option value="viewAll">عرض جميع الطلاب</option>
          </select>
        </div>

        {(action === 'add' || (action === 'edit' && editingId !== null)) && (
          <>
            {console.log('Rendering form with action:', action, 'editingId:', editingId, 'term:', term)}
            <div className="studentsManagement-form-group">
              <label htmlFor="name" className="studentsManagement-input-label">اسم الطالب:</label>
              <input
                className="studentsManagement-input-field"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="studentsManagement-form-group">
              <label htmlFor="seatNumber" className="studentsManagement-input-label">رقم الجلوس:</label>
              <input
                className="studentsManagement-input-field"
                type="text"
                id="seatNumber"
                value={seatNumber}
                onChange={(e) => setSeatNumber(e.target.value)}
              />
            </div>
            <div className="studentsManagement-form-group">
              <label htmlFor="department" className="studentsManagement-input-label">القسم:</label>
              <select
                className="studentsManagement-input-select"
                id="department"
                value={department}
                onChange={(e) => {
                  setDepartment(e.target.value);
                  setYear('');
                  setSpecialization('');
                }}
              >
                <option value="">اختر القسم</option>
                <option value="تكنولوجيا المعلومات">تكنولوجيا المعلومات</option>
                <option value="ميكاترونكس">ميكاترونكس</option>
                <option value="أوتوترونكس">أوتوترونكس</option>
                <option value="آليات صناعية">آليات صناعية</option>
              </select>
            </div>
            <div className="studentsManagement-form-group">
              <label htmlFor="year" className="studentsManagement-input-label">السنة:</label>
              <select
                className="studentsManagement-input-select"
                id="year"
                value={year}
                onChange={(e) => {
                  setYear(e.target.value);
                  setSpecialization('');
                }}
              >
                <option value="">اختر السنة</option>
                <option value="first">السنة الأولى</option>
                <option value="second">السنة الثانية</option>
                <option value="third">السنة الثالثة</option>
                <option value="fourth">السنة الرابعة</option>
              </select>
            </div>
            {department === 'تكنولوجيا المعلومات' && (year === 'third' || year === 'fourth') && (
              <div className="studentsManagement-form-group">
                <label htmlFor="specialization" className="studentsManagement-input-label">التخصص:</label>
                <select
                  className="studentsManagement-input-select"
                  id="specialization"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                >
                  <option value="">اختر التخصص</option>
                  <option value="شبكات">شبكات</option>
                  <option value="برمجة">برمجة</option>
                </select>
              </div>
            )}
            <div className="studentsManagement-form-group">
              <label htmlFor="term" className="studentsManagement-input-label">الترم:</label>
              <select
                className="studentsManagement-input-select"
                id="term"
                value={term}
                onChange={(e) => {
                  console.log('Term changed to:', e.target.value);
                  setTerm(e.target.value);
                  setGrades({
                    '1': '',
                    '2': '',
                    '3': '',
                    '4': '',
                    '5': '',
                    '6': '',
                    '7': '',
                    '8': '',
                    '9': '',
                    '10': '',
                    '11': '',
                    '12': ''
                  });
                }}
              >
                <option value="">اختر الترم</option>
                <option value="first">الترم الأول</option>
                <option value="second">الترم الثاني</option>
              </select>
            </div>
            {term && (
              <div className="studentsManagement-form-group">
                <label className="studentsManagement-input-label">الدرجات:</label>
                {getSubjects().map(subject => (
                  <div key={subject.id} className="studentsManagement-grade-group studentsManagement-flex studentsManagement-items-center studentsManagement-mb-2">
                    <label className="studentsManagement-grade-label studentsManagement-w-1-2 studentsManagement-pr-2">{subject.name}:</label>
                    <input
                      className="studentsManagement-grade-input studentsManagement-w-1-2"
                      type="number"
                      value={grades[subject.id]}
                      onChange={(e) => setGrades({ ...grades, [subject.id]: e.target.value })}
                    />
                  </div>
                ))}
              </div>
            )}
            <button className="studentsManagement-submit-button" onClick={handleSubmit} disabled={loading}>
              {loading ? 'جاري التحميل...' : action === 'add' ? 'إضافة الطالب' : 'حفظ التعديلات'}
            </button>
          </>
        )}

        {action === 'edit' && editingId === null && (
          <div className="studentsManagement-form-group">
            <label htmlFor="searchSeatNumber" className="studentsManagement-input-label">رقم الجلوس للبحث:</label>
            <input
              className="studentsManagement-input-field"
              type="text"
              id="searchSeatNumber"
              value={searchSeatNumber}
              onChange={(e) => setSearchSeatNumber(e.target.value)}
            />
            <button
              className="studentsManagement-search-button studentsManagement-mt-2 studentsManagement-bg-blue-600 studentsManagement-text-white studentsManagement-px-4 studentsManagement-py-2 studentsManagement-rounded studentsManagement-hover:bg-blue-700"
              onClick={handleSearchForEdit}
            >
              بحث
            </button>
          </div>
        )}

        {(action === 'viewAppeals' || action === 'viewAll') && (
          <div className="studentsManagement-form-group">
            <label htmlFor="viewTerm" className="studentsManagement-input-label">اختر الترم للعرض:</label>
            <select
              className="studentsManagement-view-term-select"
              id="viewTerm"
              value={selectedViewTerm}
              onChange={(e) => {
                console.log('View term changed to:', e.target.value);
                setSelectedViewTerm(e.target.value);
              }}
            >
              <option value="">اختر الترم</option>
              <option value="first">الترم الأول</option>
              <option value="second">الترم الثاني</option>
            </select>
          </div>
        )}

        {action === 'viewAppeals' && selectedViewTerm && (
          <div className="studentsManagement-table-container studentsManagement-mt-8">
            <h2 className="studentsManagement-table-title">الطلاب الذين قدموا طلب التماس</h2>
            {studentsList.filter(s => s.hasAppeal && s.term === selectedViewTerm).length === 0 ? (
              <p className="studentsManagement-no-data-text studentsManagement-text-gray-700">لا يوجد طلاب قدموا طلب التماس</p>
            ) : (
              <table className="studentsManagement-result-table studentsManagement-w-full">
                <thead className="studentsManagement-table-header">
                  <tr className="studentsManagement-header-row">
                    <th className="studentsManagement-table-cell">اسم الطالب</th>
                    <th className="studentsManagement-table-cell">رقم الجلوس</th>
                    <th className="studentsManagement-table-cell">القسم</th>
                    <th className="studentsManagement-table-cell">السنة</th>
                    <th className="studentsManagement-table-cell">التخصص</th>
                    <th className="studentsManagement-table-cell">الترم</th>
                    {getViewSubjects().map(subject => (
                      <th key={subject.id} className="studentsManagement-table-cell">{subject.name}</th>
                    ))}
                    <th className="studentsManagement-table-cell">المجموع </th>
                  </tr>
                </thead>
                <tbody className="studentsManagement-table-body">
                  {studentsList.filter(s => s.hasAppeal && s.term === selectedViewTerm).map(student => {
                    console.log('Rendering appeal student:', student);
                    return (
                      <tr key={student.id} className="studentsManagement-data-row">
                        <td className="studentsManagement-table-cell">{student.name}</td>
                        <td className="studentsManagement-table-cell">{student.seatNumber}</td>
                        <td className="studentsManagement-table-cell">{student.department}</td>
                        <td className="studentsManagement-table-cell">
                          {student.year === 'first' ? 'السنة الأولى' : 
                           student.year === 'second' ? 'السنة الثانية' : 
                           student.year === 'third' ? 'السنة الثالثة' : 
                           student.year === 'fourth' ? 'السنة الرابعة' : 'غير محدد'}
                        </td>
                        <td className="studentsManagement-table-cell">
                          {student.department === 'تكنولوجيا المعلومات' && (student.year === 'third' || student.year === 'fourth') ? 
                           student.specialization || 'غير محدد' : 'غير مطبق'}
                        </td>
                        <td className="studentsManagement-table-cell">{student.term === 'first' ? 'الترم الأول' : 'الترم الثاني'}</td>
                        {getViewSubjects().map(subject => (
                          <td key={subject.id} className="studentsManagement-table-cell">{student.grades[subject.id]}</td>
                        ))}
                        <td className="studentsManagement-table-cell">{student.totalGrades ?? '-'}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        )}

        {action === 'viewAll' && selectedViewTerm && (
          <div className="studentsManagement-table-container studentsManagement-mt-8">
            <h2 className="studentsManagement-table-title">جميع الطلاب</h2>
            {studentsList.filter(s => s.term === selectedViewTerm).length === 0 ? (
              <p className="studentsManagement-no-data-text studentsManagement-text-gray-700">لا يوجد طلاب لعرضهم</p>
            ) : (
              <table className="studentsManagement-result-table studentsManagement-w-full">
                <thead className="studentsManagement-table-header">
                  <tr className="studentsManagement-header-row">
                    <th className="studentsManagement-table-cell">اسم الطالب</th>
                    <th className="studentsManagement-table-cell">رقم الجلوس</th>
                    <th className="studentsManagement-table-cell">القسم</th>
                    <th className="studentsManagement-table-cell">السنة</th>
                    <th className="studentsManagement-table-cell">التخصص</th>
                    <th className="studentsManagement-table-cell">الترم</th>
                    {getViewSubjects().map(subject => (
                      <th key={subject.id} className="studentsManagement-table-cell">{subject.name}</th>
                    ))}
                    <th className="studentsManagement-table-cell">المجموع Total 800</th>
                    <th className="studentsManagement-table-cell">طلب التماس</th>
                  </tr>
                </thead>
                <tbody className="studentsManagement-table-body">
                  {studentsList.filter(s => s.term === selectedViewTerm).map(student => {
                    console.log('Rendering all student:', student);
                    return (
                      <tr key={student.id} className="studentsManagement-data-row">
                        <td className="studentsManagement-table-cell">{student.name}</td>
                        <td className="studentsManagement-table-cell">{student.seatNumber}</td>
                        <td className="studentsManagement-table-cell">{student.department}</td>
                        <td className="studentsManagement-table-cell">
                          {student.year === 'first' ? 'السنة الأولى' : 
                           student.year === 'second' ? 'السنة الثانية' : 
                           student.year === 'third' ? 'السنة الثالثة' : 
                           student.year === 'fourth' ? 'السنة الرابعة' : 'غير محدد'}
                        </td>
                        <td className="studentsManagement-table-cell">
                          {student.department === 'تكنولوجيا المعلومات' && (student.year === 'third' || student.year === 'fourth') ? 
                           student.specialization || 'غير محدد' : 'غير مطبق'}
                        </td>
                        <td className="studentsManagement-table-cell">{student.term === 'first' ? 'الترم الأول' : 'الترم الثاني'}</td>
                        {getViewSubjects().map(subject => (
                          <td key={subject.id} className="studentsManagement-table-cell">{student.grades[subject.id]}</td>
                        ))}
                        <td className="studentsManagement-table-cell">{student.totalGrades ?? '-'}</td>
                        <td className="studentsManagement-table-cell">{student.hasAppeal ? 'نعم' : 'لا'}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentsManagement;