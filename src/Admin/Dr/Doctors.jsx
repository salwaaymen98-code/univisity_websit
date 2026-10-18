import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Doctors.css';

const DoctorsManagement = () => {
  const [doctorsList, setDoctorsList] = useState([]);
  const [action, setAction] = useState('add');
  const [name, setName] = useState('');
  const [subjects, setSubjects] = useState({
    subject1: '',
    subject2: '',
    subject3: '',
    subject4: '',
    subject5: ''
  });
  const [assistants, setAssistants] = useState(['']);
  const [searchName, setSearchName] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // إضافة معيد جديد إلى القائمة
  const addAssistant = () => {
    setAssistants([...assistants, '']);
  };

  // تحديث اسم معيد
  const updateAssistant = (index, value) => {
    const updatedAssistants = [...assistants];
    updatedAssistants[index] = value;
    setAssistants(updatedAssistants);
  };

  // إزالة معيد
  const removeAssistant = (index) => {
    if (assistants.length > 1) {
      setAssistants(assistants.filter((_, i) => i !== index));
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'تحذير',
        text: 'يجب أن يكون هناك معيد واحد على الأقل!',
        confirmButtonText: 'حسناً'
      });
    }
  };

  // تحديث حقل مادة
  const updateSubject = (key, value) => {
    setSubjects({ ...subjects, [key]: value });
  };

  // التحقق من الحقول
  const validateInputs = () => {
    const hasAtLeastOneSubject = Object.values(subjects).some(s => s.trim());
    return name.trim() && hasAtLeastOneSubject && assistants.every(a => a.trim());
  };

  // التعامل مع إرسال النموذج (إضافة أو تعديل)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (action === 'add') {
      if (!validateInputs()) {
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: 'يجب إدخال اسم الدكتور، مادة واحدة على الأقل، وأسماء المعيدين',
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

        const newDoctor = {
          id: Date.now(),
          name: name.trim(),
          subjects: Object.values(subjects).filter(s => s.trim()),
          assistants: assistants.map(a => a.trim()).filter(a => a)
        };
        console.log('Adding doctor:', newDoctor);
        setDoctorsList([...doctorsList, newDoctor]);
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'نجاح',
          text: 'تم إضافة الدكتور بنجاح!',
          confirmButtonText: 'حسناً'
        });

        setName('');
        setSubjects({
          subject1: '',
          subject2: '',
          subject3: '',
          subject4: '',
          subject5: ''
        });
        setAssistants(['']);
      } catch (error) {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: 'حدث خطأ أثناء إضافة الدكتور. يرجى المحاولة مرة أخرى.',
          confirmButtonText: 'حسناً'
        });
      } finally {
        setLoading(false);
      }
    } else if (action === 'edit') {
      if (!searchName.trim()) {
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: 'يجب إدخال اسم الدكتور للبحث',
          confirmButtonText: 'حسناً'
        });
        return;
      }

      const doctor = doctorsList.find(d => d.name === searchName.trim());
      if (!doctor) {
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: 'لم يتم العثور على دكتور بهذا الاسم',
          confirmButtonText: 'حسناً'
        });
        return;
      }

      if (!validateInputs()) {
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: 'يجب إدخال اسم الدكتور، مادة واحدة على الأقل، وأسماء المعيدين',
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

        const updatedDoctorsList = doctorsList.map(d =>
          d.id === doctor.id
            ? {
                ...d,
                name: name.trim() || d.name,
                subjects: Object.values(subjects).filter(s => s.trim()) || d.subjects,
                assistants: assistants.map(a => a.trim()).filter(a => a) || d.assistants
              }
            : d
        );
        console.log('Updated doctors list:', updatedDoctorsList);
        setDoctorsList(updatedDoctorsList);
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'نجاح',
          text: 'تم تعديل بيانات الدكتور بنجاح!',
          confirmButtonText: 'حسناً'
        });

        setName('');
        setSubjects({
          subject1: '',
          subject2: '',
          subject3: '',
          subject4: '',
          subject5: ''
        });
        setAssistants(['']);
        setSearchName('');
        setEditingId(null);
      } catch (error) {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: 'حدث خطأ أثناء تعديل بيانات الدكتور. يرجى المحاولة مرة أخرى.',
          confirmButtonText: 'حسناً'
        });
      } finally {
        setLoading(false);
      }
    }
  };

  // البحث عن دكتور لتعديله
  const handleSearchForEdit = () => {
    if (!searchName.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'يجب إدخال اسم الدكتور للبحث',
        confirmButtonText: 'حسناً'
      });
      return;
    }

    const doctor = doctorsList.find(d => d.name === searchName.trim());
    if (doctor) {
      setEditingId(doctor.id);
      setName(doctor.name);
      setSubjects({
        subject1: doctor.subjects[0] || '',
        subject2: doctor.subjects[1] || '',
        subject3: doctor.subjects[2] || '',
        subject4: doctor.subjects[3] || '',
        subject5: doctor.subjects[4] || ''
      });
      setAssistants(doctor.assistants.length > 0 ? doctor.assistants : ['']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'لم يتم العثور على دكتور بهذا الاسم',
        confirmButtonText: 'حسناً'
      });
    }
  };

  // البحث عن دكتور لحذفه
  const handleSearchForDelete = () => {
    if (!searchName.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'يجب إدخال اسم الدكتور للبحث',
        confirmButtonText: 'حسناً'
      });
      return;
    }

    const doctor = doctorsList.find(d => d.name === searchName.trim());
    if (doctor) {
      setSelectedDoctor(doctor);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'لم يتم العثور على دكتور بهذا الاسم',
        confirmButtonText: 'حسناً'
      });
      setSelectedDoctor(null);
    }
  };

  // حذف دكتور
  const handleDelete = (id) => {
    Swal.fire({
      icon: 'warning',
      title: 'تأكيد الحذف',
      text: 'هل أنت متأكد من حذف بيانات هذا الدكتور؟',
      showCancelButton: true,
      confirmButtonText: 'نعم، احذف',
      cancelButtonText: 'إلغاء'
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedDoctorsList = doctorsList.filter(doctor => doctor.id !== id);
        console.log('After deletion:', updatedDoctorsList);
        setDoctorsList(updatedDoctorsList);
        setSelectedDoctor(null);
        setSearchName('');
        Swal.fire({
          icon: 'success',
          title: 'نجاح',
          text: 'تم حذف بيانات الدكتور بنجاح!',
          confirmButtonText: 'حسناً'
        });
      }
    });
  };

  return (
    <div className="doctorsManagement-results-container">
      <div className="doctorsManagement-form-container">
        <h2 className="doctorsManagement-form-title">إدارة الدكاترة</h2>
        <div className="doctorsManagement-form-group">
          <label htmlFor="action" className="doctorsManagement-input-label">اختر الإجراء:</label>
          <select
            className="doctorsManagement-input-select"
            id="action"
            value={action}
            onChange={(e) => {
              console.log('Action changed to:', e.target.value);
              setAction(e.target.value);
              setName('');
              setSubjects({
                subject1: '',
                subject2: '',
                subject3: '',
                subject4: '',
                subject5: ''
              });
              setAssistants(['']);
              setSearchName('');
              setEditingId(null);
              setSelectedDoctor(null);
            }}
          >
            <option value="add">إضافة دكتور</option>
            <option value="edit">تعديل دكتور</option>
            <option value="delete">حذف دكتور</option>
            <option value="view">عرض جميع الدكاترة</option>
          </select>
        </div>

        {action === 'add' && (
          <>
            <div className="doctorsManagement-form-group">
              <label htmlFor="name" className="doctorsManagement-input-label">اسم الدكتور:</label>
              <input
                className="doctorsManagement-input-field"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="doctorsManagement-form-group">
              <label className="doctorsManagement-input-label">المواد:</label>
              {['subject1', 'subject2', 'subject3', 'subject4', 'subject5'].map((key, index) => (
                <div key={key} className="doctorsManagement-subject-group doctorsManagement-mb-2">
                  <label className="doctorsManagement-input-label">{`المادة ${index + 1}:`}</label>
                  <input
                    className="doctorsManagement-input-field"
                    type="text"
                    value={subjects[key]}
                    onChange={(e) => updateSubject(key, e.target.value)}
                    placeholder={`أدخل المادة ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <div className="doctorsManagement-form-group">
              <label className="doctorsManagement-input-label">المعيدين:</label>
              {assistants.map((assistant, index) => (
                <div key={index} className="doctorsManagement-flex doctorsManagement-items-center doctorsManagement-mb-2">
                  <input
                    className="doctorsManagement-input-field doctorsManagement-flex-1"
                    type="text"
                    value={assistant}
                    onChange={(e) => updateAssistant(index, e.target.value)}
                    placeholder={`اسم المعيد ${index + 1}`}
                  />
                  {assistants.length > 1 && (
                    <button
                      type="button"
                      className="doctorsManagement-ml-2 doctorsManagement-bg-red-600 doctorsManagement-text-white doctorsManagement-px-2 doctorsManagement-py-1 doctorsManagement-rounded doctorsManagement-hover:bg-red-700"
                      onClick={() => removeAssistant(index)}
                    >
                      إزالة
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                className="doctorsManagement-bg-green-600 doctorsManagement-text-white doctorsManagement-px-4 doctorsManagement-py-2 doctorsManagement-rounded doctorsManagement-hover:bg-green-700 doctorsManagement-mt-2"
                onClick={addAssistant}
              >
                إضافة معيد
              </button>
            </div>
            <button
              className="doctorsManagement-submit-button"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'جاري التحميل...' : 'إضافة الدكتور'}
            </button>
          </>
        )}

        {(action === 'edit' && editingId === null) || action === 'delete' ? (
          <div className="doctorsManagement-form-group">
            <label htmlFor="searchName" className="doctorsManagement-input-label">اسم الدكتور للبحث:</label>
            <input
              className="doctorsManagement-input-field"
              type="text"
              id="searchName"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            <button
              className="doctorsManagement-search-button doctorsManagement-mt-2 doctorsManagement-bg-blue-600 doctorsManagement-text-white doctorsManagement-px-4 doctorsManagement-py-2 doctorsManagement-rounded doctorsManagement-hover:bg-blue-700"
              onClick={action === 'edit' ? handleSearchForEdit : handleSearchForDelete}
            >
              بحث
            </button>
          </div>
        ) : null}

        {action === 'edit' && editingId !== null && (
          <>
            <div className="doctorsManagement-form-group">
              <label htmlFor="name" className="doctorsManagement-input-label">اسم الدكتور:</label>
              <input
                className="doctorsManagement-input-field"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="doctorsManagement-form-group">
              <label className="doctorsManagement-input-label">المواد:</label>
              {['subject1', 'subject2', 'subject3', 'subject4', 'subject5'].map((key, index) => (
                <div key={key} className="doctorsManagement-subject-group doctorsManagement-mb-2">
                  <label className="doctorsManagement-input-label">{`المادة ${index + 1}:`}</label>
                  <input
                    className="doctorsManagement-input-field"
                    type="text"
                    value={subjects[key]}
                    onChange={(e) => updateSubject(key, e.target.value)}
                    placeholder={`أدخل المادة ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <div className="doctorsManagement-form-group">
              <label className="doctorsManagement-input-label">المعيدين:</label>
              {assistants.map((assistant, index) => (
                <div key={index} className="doctorsManagement-flex doctorsManagement-items-center doctorsManagement-mb-2">
                  <input
                    className="doctorsManagement-input-field doctorsManagement-flex-1"
                    type="text"
                    value={assistant}
                    onChange={(e) => updateAssistant(index, e.target.value)}
                    placeholder={`اسم المعيد ${index + 1}`}
                  />
                  {assistants.length > 1 && (
                    <button
                      type="button"
                      className="doctorsManagement-ml-2 doctorsManagement-bg-red-600 doctorsManagement-text-white doctorsManagement-px-2 doctorsManagement-py-1 doctorsManagement-rounded doctorsManagement-hover:bg-red-700"
                      onClick={() => removeAssistant(index)}
                    >
                      إزالة
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                className="doctorsManagement-bg-green-600 doctorsManagement-text-white doctorsManagement-px-4 doctorsManagement-py-2 doctorsManagement-rounded doctorsManagement-hover:bg-green-700 doctorsManagement-mt-2"
                onClick={addAssistant}
              >
                إضافة معيد
              </button>
            </div>
            <button
              className="doctorsManagement-submit-button"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'جاري التحميل...' : 'حفظ التعديلات'}
            </button>
          </>
        )}

        {action === 'delete' && selectedDoctor && (
          <div className="doctorsManagement-main-container doctorsManagement-mt-4">
            <h3 className="doctorsManagement-doctor-name">{selectedDoctor.name}</h3>
            <p>المواد: {selectedDoctor.subjects.length > 0 ? selectedDoctor.subjects.join(', ') : '-'}</p>
            <p>المعيدين:{selectedDoctor.assistants.length > 0 ? selectedDoctor.assistants.join(', ') : '-'}</p>
            <button
              className="doctorsManagement-delete-button doctorsManagement-mt-4 doctorsManagement-bg-red-600 doctorsManagement-text-white doctorsManagement-px-4 doctorsManagement-py-2 doctorsManagement-rounded doctorsManagement-hover:bg-red-700"
              onClick={() => handleDelete(selectedDoctor.id)}
            >
              حذف الدكتور
            </button>
          </div>
        )}

        {action === 'view' && (
          <div className="doctorsManagement-table-container doctorsManagement-mt-8">
            <h2 className="doctorsManagement-table-title">جميع الدكاترة</h2>
            {doctorsList.length === 0 ? (
              <p className="doctorsManagement-no-data-text doctorsManagement-text-gray-700">لا توجد بيانات للدكاترة لعرضها</p>
            ) : (
              <table className="doctorsManagement-result-table doctorsManagement-w-full">
                <thead className="doctorsManagement-table-header">
                  <tr className="doctorsManagement-header-row">
                    <th className="doctorsManagement-table-cell">اسم الدكتور</th>
                    <th className="doctorsManagement-table-cell">المواد</th>
                    <th className="doctorsManagement-table-cell">المعيدين</th>
                  </tr>
                </thead>
                <tbody className="doctorsManagement-table-body">
                  {doctorsList.map((doctor) => (
                    <tr key={doctor.id} className="doctorsManagement-data-row">
                      <td className="doctorsManagement-table-cell">{doctor.name}</td>
                      <td className="doctorsManagement-table-cell">{doctor.subjects.length > 0 ? doctor.subjects.join(', ') : '-'}</td>
                      <td className="doctorsManagement-table-cell">{doctor.assistants.length > 0 ? doctor.assistants.join(', ') : '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsManagement;