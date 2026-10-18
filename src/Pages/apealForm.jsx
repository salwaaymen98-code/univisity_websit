import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../Style/apealForm.css';

const AppealForm = () => {
  const navigate = useNavigate();

  // بيانات المواد الدراسية لكل قسم ودفعة مع IDs فريدة
  const departmentSubjects = {
    "تكنولوجيا المعلومات": {
      "الدفعة الأولى": [
        { id: 1, name: 'Intro.to Cyber Security', semester: 'الأول' },
        { id: 2, name: 'IT Essentials', semester: 'الأول' },
        { id: 3, name: 'Mathematics 1', semester: 'الأول' },
        { id: 4, name: 'Physics', semester: 'الأول' },
        { id: 5, name: 'Programming Essentials in Python', semester: 'الأول' },
        { id: 6, name: 'Technical English 1', semester: 'الأول' },
        { id: 7, name: 'Programming Essentials in C', semester: 'الثاني' },
        { id: 8, name: 'Cyber Security Essentials', semester: 'الثاني' },
        { id: 9, name: 'Intro.to IOT & Connecting Things', semester: 'الثاني' },
        { id: 10, name: 'MS Office', semester: 'الثاني' },
        { id: 11, name: 'Technical English 2', semester: 'الثاني' },
        { id: 12, name: 'Mathematics 2', semester: 'الثاني' }
      ],
      "الدفعة الثانية": [
        { id: 13, name: 'Linux Essentials', semester: 'الأول' },
        { id: 14, name: 'Programming Essentials in C++', semester: 'الأول' },
        { id: 15, name: 'Web Programming 1', semester: 'الأول' },
        { id: 16, name: 'Introduction to DB', semester: 'الأول' },
        { id: 17, name: 'Digital Engineering', semester: 'الأول' },
        { id: 18, name: 'Operating Systems', semester: 'الأول' },
        { id: 19, name: 'Java Programming 1', semester: 'الثاني' },
        { id: 20, name: 'Web Programming 2', semester: 'الثاني' },
        { id: 21, name: 'CCNA R&S 1', semester: 'الثاني' },
        { id: 22, name: 'Data Structures', semester: 'الثاني' },
        { id: 23, name: 'Database Programming', semester: 'الثاني' },
        { id: 24, name: 'Capstone Design', semester: 'الثاني' }
      ],
      "الدفعة الثالثة": {
        "شبكات": [
          { id: 25, name: 'CCNA R&S 2', semester: 'الأول' },
          { id: 26, name: 'Java Programming 2', semester: 'الأول' },
          { id: 27, name: 'Data Communication', semester: 'الأول' },
          { id: 28, name: 'Network Administration', semester: 'الأول' },
          { id: 29, name: 'Microprocessor', semester: 'الأول' },
          { id: 30, name: 'Computer Architecture', semester: 'الأول' },
          { id: 31, name: 'CCNA R&S 3', semester: 'الثاني' },
          { id: 32, name: 'Network Programming', semester: 'الثاني' },
          { id: 33, name: 'CCNA Security', semester: 'الثاني' },
          { id: 34, name: 'Embedded System', semester: 'الثاني' },
          { id: 35, name: 'Distributed System', semester: 'الثاني' },
          { id: 36, name: 'S/W Engineering', semester: 'الثاني' }
        ],
        "برمجة": [
          { id: 37, name: 'Advanced Programming in C', semester: 'الأول' },
          { id: 38, name: 'Data Communication', semester: 'الأول' },
          { id: 39, name: 'Java Programming 2', semester: 'الأول' },
          { id: 40, name: 'Computer Architecture', semester: 'الأول' },
          { id: 41, name: 'Microprocessor', semester: 'الأول' },
          { id: 42, name: 'Computer Graphics', semester: 'الأول' },
          { id: 43, name: 'Advanced Programming in C++', semester: 'الثاني' },
          { id: 44, name: 'Mobile Programming 1', semester: 'الثاني' },
          { id: 45, name: 'Embedded System', semester: 'الثاني' },
          { id: 46, name: 'Network Programming', semester: 'الثاني' },
          { id: 47, name: 'Algorithm', semester: 'الثاني' },
          { id: 48, name: 'S/W Engineering', semester: 'الثاني' }
        ]
      },
      "الدفعة الرابعة": {
        "شبكات": [
          { id: 49, name: 'CCNA R&S IV', semester: 'الأول' },
          { id: 50, name: 'IoT Architecture & Protocols/IoT Programming', semester: 'الأول' },
          { id: 51, name: 'Artificial Intelligence', semester: 'الأول' },
          { id: 52, name: 'CCNA CyberSecurity Operations', semester: 'الأول' },
          { id: 53, name: 'Server Administration', semester: 'الأول' },
          { id: 54, name: 'Encryption Algorithm', semester: 'الأول' },
          { id: 55, name: 'CCNP Route', semester: 'الثاني' },
          { id: 56, name: 'CCNP Switch', semester: 'الثاني' },
          { id: 57, name: 'Machine Learning', semester: 'الثاني' },
          { id: 58, name: 'Big Data & Analytics', semester: 'الثاني' },
          { id: 59, name: 'IoT Security', semester: 'الثاني' },
          { id: 60, name: 'Entrepreneurship', semester: 'الثاني' }
        ],
        "برمجة": [
          { id: 61, name: 'CCNA R&S IV', semester: 'الأول' },
          { id: 62, name: 'Mobile Programming 2', semester: 'الأول' },
          { id: 63, name: 'IoT Architecture & Protocols/IoT Programming', semester: 'الأول' },
          { id: 64, name: 'Artificial Intelligence', semester: 'الأول' },
          { id: 65, name: 'Windows Programming 1', semester: 'الأول' },
          { id: 66, name: 'Signal Processing', semester: 'الأول' },
          { id: 67, name: 'Robotics', semester: 'الثاني' },
          { id: 68, name: 'Windows Programming 2', semester: 'الثاني' },
          { id: 69, name: 'Big Data & Analytics', semester: 'الثاني' },
          { id: 70, name: 'IoT Security', semester: 'الثاني' },
          { id: 71, name: 'Machine Learning', semester: 'الثاني' },
          { id: 72, name: 'Entrepreneurship', semester: 'الثاني' }
        ]
      }
    },
    "اليه صناعية": {
      "الدفعة الأولى": [
        { id: 73, name: 'English Language (I)', semester: 'الأول' },
        { id: 74, name: 'Mathematics (I)', semester: 'الأول' },
        { id: 75, name: 'Physics', semester: 'الأول' },
        { id: 76, name: 'Information Technology', semester: 'الأول' },
        { id: 77, name: 'Graphics', semester: 'الأول' },
        { id: 78, name: 'Basics of Workshops', semester: 'الأول' },
        { id: 79, name: 'English Language (II)', semester: 'الثاني' },
        { id: 80, name: 'Mathematics (II)', semester: 'الثاني' },
        { id: 81, name: 'Occupational Safety and Health', semester: 'الثاني' },
        { id: 82, name: 'Hydraulics Basics', semester: 'الثاني' },
        { id: 83, name: 'Automotive Engines (I)', semester: 'الثاني' },
        { id: 84, name: 'Principles of Electricity and Auto', semester: 'الثاني' },
        { id: 85, name: 'Practical Training', semester: 'الثاني' }
      ],
      "الدفعة الثانية": [
        { id: 86, name: 'English (3)', semester: 'الأول' },
        { id: 87, name: 'Thermodynamics', semester: 'الأول' },
        { id: 88, name: 'Engineering Materials and Tests', semester: 'الأول' },
        { id: 89, name: 'Automotive Engines (2)', semester: 'الأول' },
        { id: 90, name: 'Traditional Transmission Systems', semester: 'الأول' },
        { id: 91, name: 'Electrical Systems of Motor Vehicle', semester: 'الأول' },
        { id: 92, name: 'Writing Technical Reports', semester: 'الثاني' },
        { id: 93, name: 'Functional Behavior and Communication Skills', semester: 'الثاني' },
        { id: 94, name: 'Guidance and Entrepreneurship', semester: 'الثاني' },
        { id: 95, name: 'Brake Systems', semester: 'الثاني' },
        { id: 96, name: 'Suspension and Steering Systems', semester: 'الثاني' },
        { id: 97, name: 'Maintenance and Repair of Engine', semester: 'الثاني' }
      ],
      "الدفعة الثالثة": [
        { id: 98, name: 'English', semester: 'الأول' },
        { id: 99, name: 'Fluid Mechanics', semester: 'الأول' },
        { id: 100, name: 'Electronic Ignition Circuits', semester: 'الأول' },
        { id: 101, name: 'Gasoline and Diesel Fuel Systems', semester: 'الأول' },
        { id: 102, name: 'Vehicle Dynamics (I)', semester: 'الأول' },
        { id: 103, name: 'Electric Circuits and Luxury Vehicles', semester: 'الثاني' },
        { id: 104, name: 'Vehicle Security and Safety Systems', semester: 'الثاني' },
        { id: 105, name: 'Automatic Transmission', semester: 'الثاني' },
        { id: 106, name: 'Air Conditioning and Heating Systems', semester: 'الثاني' },
        { id: 107, name: 'Vehicle Dynamics (II)', semester: 'الثاني' }
      ],
      "الدفعة الرابعة": [
        { id: 108, name: 'English', semester: 'الأول' },
        { id: 109, name: 'Electronic Motor Control Systems', semester: 'الأول' },
        { id: 110, name: 'Electronic Control Systems for Suspension, Steering and Brake', semester: 'الأول' },
        { id: 111, name: 'Management of Transport and Traffic Systems', semester: 'الأول' },
        { id: 112, name: 'Computer Graphic', semester: 'الأول' },
        { id: 113, name: 'English', semester: 'الثاني' },
        { id: 114, name: 'Hybrid Vehicles and Fuel Substitutes', semester: 'الثاني' },
        { id: 115, name: 'Planning and Management of Maintenance Centers', semester: 'الثاني' },
        { id: 116, name: 'Advanced Field Training', semester: 'الثاني' },
        { id: 117, name: 'Discuss', semester: 'الثاني' }
      ]
    },
    "ميكاترونكس": {
      "الدفعة الأولى": [
        { id: 118, name: 'Technical English at Work Place 1', semester: 'الأول' },
        { id: 119, name: 'Mathematics For Technicians', semester: 'الأول' },
        { id: 120, name: 'Physics For Technicians', semester: 'الأول' },
        { id: 121, name: 'Communication Skills in Technology', semester: 'الأول' },
        { id: 122, name: 'Application of Math and Science in Technology', semester: 'الأول' },
        { id: 123, name: 'Health, Safety and Risk Assessment in Workplaces', semester: 'الأول' },
        { id: 124, name: 'Technical English at Work Place 2', semester: 'الثاني' },
        { id: 125, name: 'Environmental Studies', semester: 'الثاني' },
        { id: 126, name: 'Basic Mechatronics Workshop', semester: 'الثاني' },
        { id: 127, name: 'Computer Technology', semester: 'الثاني' },
        { id: 128, name: 'Electric Circuits', semester: 'الثاني' },
        { id: 129, name: 'CAD For Technicians', semester: 'الثاني' },
        { id: 130, name: 'Computer-Aided Design', semester: 'الثاني' }
      ],
      "الدفعة الثانية": [
        { id: 131, name: 'Pneumatics and Hydraulics Practice', semester: 'الأول' },
        { id: 132, name: 'Programming for Mechatronics Applications', semester: 'الأول' },
        { id: 133, name: 'Material Selection for Technical Applications', semester: 'الأول' },
        { id: 134, name: 'Fundamentals of PC-based Control', semester: 'الأول' },
        { id: 135, name: 'PLC', semester: 'الأول' },
        { id: 136, name: 'Electrical and Electronics Workshop', semester: 'الثاني' },
        { id: 137, name: 'Electromechanical Systems Maintenance', semester: 'الثاني' },
        { id: 138, name: 'Capstone Design', semester: 'الثاني' },
        { id: 139, name: 'Mechatronic Systems for Technologists', semester: 'الثاني' },
        { id: 140, name: 'Selective Course - I', semester: 'الثاني' },
        { id: 141, name: 'Enterprise & Entrepreneurship 1', semester: 'الثاني' }
      ],
      "الدفعة الثالثة": [
        { id: 142, name: 'Mathematics Design for Technologists', semester: 'الأول' },
        { id: 143, name: '2D CAD and Mechanical Modeling', semester: 'الأول' },
        { id: 144, name: 'Automatic Control', semester: 'الأول' },
        { id: 145, name: 'Robotic Systems', semester: 'الأول' },
        { id: 146, name: 'Sensors and Instrumentation', semester: 'الأول' },
        { id: 147, name: 'Power Electronics and Drives', semester: 'الثاني' },
        { id: 148, name: 'CNC Technology', semester: 'الثاني' },
        { id: 149, name: 'Mechanism Design for Technologists', semester: 'الثاني' },
        { id: 150, name: 'Microprocessor Technology', semester: 'الثاني' },
        { id: 151, name: 'Production System Planning & Control', semester: 'الثاني' }
      ],
      "الدفعة الرابعة": [
        { id: 152, name: 'Business Communication and Ethics & Employability Skills', semester: 'الأول' },
        { id: 153, name: 'Embedded Systems', semester: 'الأول' },
        { id: 154, name: 'Digital Signal Processing', semester: 'الأول' },
        { id: 155, name: 'Dynamic Systems: Modeling & Design', semester: 'الأول' },
        { id: 156, name: 'Metrology and Quality Control for Technologists', semester: 'الأول' },
        { id: 157, name: 'Human-Machine Interface Technology', semester: 'الأول' },
        { id: 158, name: 'Selective Course - II', semester: 'الثاني' },
        { id: 159, name: 'Enterprise & Entrepreneurship II', semester: 'الثاني' },
        { id: 160, name: 'Advanced PLC', semester: 'الثاني' },
        { id: 161, name: 'Graduation Project', semester: 'الثاني' }
      ]
    },
    "اتوترونكس": {
      "الدفعة الأولى": [
        { id: 162, name: 'English Language (I)', semester: 'الأول' },
        { id: 163, name: 'Mathematics (I)', semester: 'الأول' },
        { id: 164, name: 'Physics', semester: 'الأول' },
        { id: 165, name: 'Information Technology', semester: 'الأول' },
        { id: 166, name: 'Graphics', semester: 'الأول' },
        { id: 167, name: 'Basics of Workshops', semester: 'الأول' },
        { id: 168, name: 'English Language (II)', semester: 'الثاني' },
        { id: 169, name: 'Mathematics (II)', semester: 'الثاني' },
        { id: 170, name: 'Occupational Safety and Health', semester: 'الثاني' },
        { id: 171, name: 'Hydraulics Basics', semester: 'الثاني' },
        { id: 172, name: 'Automotive Engines (I)', semester: 'الثاني' },
        { id: 173, name: 'Principles of Electricity and Auto', semester: 'الثاني' },
        { id: 174, name: 'Practical Training', semester: 'الثاني' }
      ],
      "الدفعة الثانية": [
        { id: 175, name: 'English (3)', semester: 'الأول' },
        { id: 176, name: 'Thermodynamics', semester: 'الأول' },
        { id: 177, name: 'Engineering Materials and Tests', semester: 'الأول' },
        { id: 178, name: 'Automotive Engines (2)', semester: 'الأول' },
        { id: 179, name: 'Traditional Transmission Systems', semester: 'الأول' },
        { id: 180, name: 'Electrical Systems of Motor Vehicle', semester: 'الأول' },
        { id: 181, name: 'Writing Technical Reports', semester: 'الثاني' },
        { id: 182, name: 'Functional Behavior and Communication Skills', semester: 'الثاني' },
        { id: 183, name: 'Guidance and Entrepreneurship', semester: 'الثاني' },
        { id: 184, name: 'Brake Systems', semester: 'الثاني' },
        { id: 185, name: 'Suspension and Steering Systems', semester: 'الثاني' },
        { id: 186, name: 'Maintenance and Repair of Engine', semester: 'الثاني' }
      ],
      "الدفعة الثالثة": [
        { id: 187, name: 'English', semester: 'الأول' },
        { id: 188, name: 'Fluid Mechanics', semester: 'الأول' },
        { id: 189, name: 'Electronic Ignition Circuits', semester: 'الأول' },
        { id: 190, name: 'Gasoline and Diesel Fuel Systems', semester: 'الأول' },
        { id: 191, name: 'Vehicle Dynamics (I)', semester: 'الأول' },
        { id: 192, name: 'Electric Circuits and Luxury Vehicles', semester: 'الثاني' },
        { id: 193, name: 'Vehicle Security and Safety Systems', semester: 'الثاني' },
        { id: 194, name: 'Automatic Transmission', semester: 'الثاني' },
        { id: 195, name: 'Air Conditioning and Heating Systems', semester: 'الثاني' },
        { id: 196, name: 'Vehicle Dynamics (II)', semester: 'الثاني' }
      ],
      "الدفعة الرابعة": [
        { id: 197, name: 'English', semester: 'الأول' },
        { id: 198, name: 'Electronic Motor Control Systems', semester: 'الأول' },
        { id: 199, name: 'Electronic Control Systems for Suspension, Steering and Brake', semester: 'الأول' },
        { id: 200, name: 'Management of Transport and Traffic Systems', semester: 'الأول' },
        { id: 201, name: 'Computer Graphic', semester: 'الأول' },
        { id: 202, name: 'English', semester: 'الثاني' },
        { id: 203, name: 'Hybrid Vehicles and Fuel Substitutes', semester: 'الثاني' },
        { id: 204, name: 'Planning and Management of Maintenance Centers', semester: 'الثاني' },
        { id: 205, name: 'Advanced Field Training', semester: 'الثاني' },
        { id: 206, name: 'Discuss', semester: 'الثاني' }
      ]
    }
  };

  const [formData, setFormData] = useState({
    fullName: '',
    seatNumber: '',
    idNumber: '',
    phoneNumber: '',
    semester: '',
    batch: '',
    department: '',
    subDepartment: '',
    selectedSubjects: [],
    paymentMethod: '',
    bankName: '',
    transactionNumber: '',
    totalAmount: 0,
    availableSubjects: []
  });

  const paymentMethods = [
    { id: 1, name: 'حوالة بنكية' },
    { id: 2, name: 'الدفع في الخزينة' }
  ];

  // تحديث المواد المتاحة عند تغيير القسم أو الدفعة أو الفصل أو القسم الفرعي
  useEffect(() => {
    if (formData.department && formData.batch && formData.semester) {
      let subjects = [];
      if (
        formData.department === 'تكنولوجيا المعلومات' &&
        ['الدفعة الثالثة', 'الدفعة الرابعة'].includes(formData.batch) &&
        formData.subDepartment
      ) {
        subjects =
          departmentSubjects[formData.department]?.[formData.batch]?.[
            formData.subDepartment
          ]?.filter((subject) => subject.semester === formData.semester) || [];
      } else if (
        formData.department !== 'تكنولوجيا المعلومات' ||
        !['الدفعة الثالثة', 'الدفعة الرابعة'].includes(formData.batch)
      ) {
        subjects =
          departmentSubjects[formData.department]?.[formData.batch]?.filter(
            (subject) => subject.semester === formData.semester
          ) || [];
      }
      setFormData((prev) => ({
        ...prev,
        availableSubjects: subjects,
        selectedSubjects: [],
        totalAmount: 0,
      }));
    }
  }, [formData.department, formData.batch, formData.semester, formData.subDepartment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'semester'
        ? {
            department: '',
            batch: '',
            subDepartment: '',
            availableSubjects: [],
            selectedSubjects: [],
            totalAmount: 0,
          }
        : {}),
      ...(name === 'department'
        ? { batch: '', subDepartment: '', availableSubjects: [], selectedSubjects: [], totalAmount: 0 }
        : {}),
      ...(name === 'batch'
        ? { subDepartment: '', availableSubjects: [], selectedSubjects: [], totalAmount: 0 }
        : {}),
    }));
  };

  const handleSubjectChange = (subjectId) => {
    setFormData((prev) => {
      const newSelectedSubjects = prev.selectedSubjects.includes(subjectId)
        ? prev.selectedSubjects.filter((id) => id !== subjectId)
        : [...prev.selectedSubjects, subjectId];

      return {
        ...prev,
        selectedSubjects: newSelectedSubjects,
        totalAmount: newSelectedSubjects.length * 100,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // تحقق من الحقول المطلوبة
    const missingFields = [];
    if (!formData.fullName) missingFields.push('الاسم الرباعي');
    if (!formData.seatNumber) missingFields.push('رقم الجلوس');
    if (!formData.idNumber) missingFields.push('رقم البطاقة');
    if (!formData.phoneNumber) missingFields.push('رقم الموبايل');
    if (!formData.semester) missingFields.push('الفصل الدراسي');
    if (!formData.batch) missingFields.push('الدفعة');
    if (!formData.department) missingFields.push('القسم');
    if (formData.selectedSubjects.length === 0) missingFields.push('المواد الدراسية');
    if (!formData.paymentMethod) missingFields.push('طريقة الدفع');
    if (
      formData.department === 'تكنولوجيا المعلومات' &&
      ['الدفعة الثالثة', 'الدفعة الرابعة'].includes(formData.batch) &&
      !formData.subDepartment
    ) {
      missingFields.push('التخصص');
    }

    if (missingFields.length > 0) {
      Swal.fire({
        title: 'خطأ',
        text: `يرجى ملء الحقول التالية: ${missingFields.join(', ')}`,
        icon: 'error',
      });
      return;
    }

    // تحقق من تفاصيل الدفع للحوالة البنكية
    if (
      formData.paymentMethod === 'حوالة بنكية' &&
      (!formData.bankName || !formData.transactionNumber)
    ) {
      Swal.fire({
        title: 'خطأ',
        text: 'يرجى إدخال اسم البنك ورقم الحوالة',
        icon: 'error',
      });
      return;
    }

    try {
      const appealData = {
        studentInfo: {
          name: formData.fullName,
          seatNumber: formData.seatNumber,
          idNumber: formData.idNumber,
          phone: formData.phoneNumber,
          semester: formData.semester,
          batch: formData.batch,
          department: formData.department,
          subDepartment: formData.subDepartment || null,
        },
        appealDetails: {
          subjects: formData.selectedSubjects.map((id) => {
            const subject = formData.availableSubjects.find((sub) => sub.id === id);
            if (!subject) {
              throw new Error(`Subject with ID ${id} not found`);
            }
            return subject.name;
          }),
          payment: {
            method: formData.paymentMethod,
            amount: formData.totalAmount,
            bankName: formData.bankName || null,
            transactionNumber: formData.transactionNumber || null,
          },
        },
      };

      console.log('بيانات الالتماس:', appealData);

      Swal.fire({
        title: 'تم بنجاح!',
        text: `تم تقديم طلب الالتماس بنجاح. المبلغ المستحق: ${formData.totalAmount} جنيه`,
        icon: 'success',
        confirmButtonText: 'موافق',
      }).then(() => {
        navigate('/');
      });
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      Swal.fire({
        title: 'خطأ',
        text: `حدث خطأ أثناء تقديم الطلب: ${error.message || 'غير معروف'}`,
        icon: 'error',
      });
    }
  };

  const handleSubmitClick = (e) => {
    if (formData.selectedSubjects.length === 0) {
      Swal.fire({
        title: 'خطأ',
        text: 'يرجى اختيار مادة دراسية واحدة على الأقل لتقديم الطلب',
        icon: 'warning',
      });
    } else {
      handleSubmit(e);
    }
  };

  return (
    <div className="appeal-form-container">
      <div className="appeal-form-title">نموذج طلب التماس</div>

      <form onSubmit={handleSubmit}>
        <div className="appeal-form">
          <div className="appeal-form-section">
            <div className="appeal-section-title">البيانات الشخصية</div>

            <div className="appeal-form-group">
              <div className="appeal-form-label">الاسم الرباعي:</div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="appeal-form-input"
              />
            </div>

            <div className="appeal-form-group">
              <div className="appeal-form-label">رقم الجلوس:</div>
              <input
                type="text"
                name="seatNumber"
                value={formData.seatNumber}
                onChange={handleChange}
                required
                className="appeal-form-input"
              />
            </div>

            <div className="appeal-form-group">
              <div className="appeal-form-label">رقم البطاقة:</div>
              <input
                type="text"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
                required
                className="appeal-form-input"
              />
            </div>

            <div className="appeal-form-group">
              <div className="appeal-form-label">رقم الموبايل:</div>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="appeal-form-input"
              />
            </div>

            <div className="appeal-form-group">
              <div className="appeal-form-label">الفصل الدراسي:</div>
              <select
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                required
                className="appeal-form-select"
              >
                <option value="">اختر الفصل الدراسي</option>
                <option value="الأول">الفصل الدراسي الأول</option>
                <option value="الثاني">الفصل الدراسي الثاني</option>
              </select>
            </div>

            <div className="appeal-form-group">
              <div className="appeal-form-label">القسم:</div>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                disabled={!formData.semester}
                className="appeal-form-select"
              >
                <option value="">اختر القسم</option>
                <option value="تكنولوجيا المعلومات">تكنولوجيا المعلومات</option>
                <option value="ميكاترونكس">ميكاترونكس</option>
                <option value="اليه صناعية">اليه صناعية</option>
                <option value="اتوترونكس">اتوترونكس</option>
              </select>
            </div>

            <div className="appeal-form-group">
              <div className="appeal-form-label">الدفعة:</div>
              <select
                name="batch"
                value={formData.batch}
                onChange={handleChange}
                required
                disabled={!formData.department}
                className="appeal-form-select"
              >
                <option value="">اختر الدفعة</option>
                <option value="الدفعة الأولى">الدفعة الأولى</option>
                <option value="الدفعة الثانية">الدفعة الثانية</option>
                <option value="الدفعة الثالثة">الدفعة الثالثة</option>
                <option value="الدفعة الرابعة">الدفعة الرابعة</option>
              </select>
            </div>

            {formData.department === 'تكنولوجيا المعلومات' &&
             ['الدفعة الثالثة', 'الدفعة الرابعة'].includes(formData.batch) && (
              <div className="appeal-form-group">
                <div className="appeal-form-label">التخصص:</div>
                <select
                  name="subDepartment"
                  value={formData.subDepartment}
                  onChange={handleChange}
                  required
                  className="appeal-form-select"
                >
                  <option value="">اختر التخصص</option>
                  <option value="شبكات">شبكات</option>
                  <option value="برمجة">برمجة</option>
                </select>
              </div>
            )}
          </div>

          {formData.department && formData.batch && formData.semester && (
            <div className="appeal-form-section">
              <div className="appeal-section-title">
                المواد الدراسية للدفعة {formData.batch} - قسم {formData.department}
                {formData.subDepartment && ` - ${formData.subDepartment}`} - الفصل {formData.semester}
              </div>
              <div className="appeal-section-text">سعر التماس على كل مادة: 100 جنيه</div>

              {formData.availableSubjects.length > 0 ? (
                <div className="appeal-subjects-grid">
                  {formData.availableSubjects.map((subject) => (
                    <div key={subject.id} className="appeal-subject-checkbox">
                      <input
                        type="checkbox"
                        id={`subject-${subject.id}`}
                        checked={formData.selectedSubjects.includes(subject.id)}
                        onChange={() => handleSubjectChange(subject.id)}
                        className="appeal-checkbox-input"
                      />
                      <label htmlFor={`subject-${subject.id}`} className="appeal-checkbox-label">
                        {subject.name}
                      </label>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="appeal-section-text">لا توجد مواد متاحة لهذا الاختيار</div>
              )}

              {formData.selectedSubjects.length > 0 && (
                <div className="appeal-total-amount">
                  <div className="appeal-total-text">المبلغ الإجمالي: {formData.totalAmount} جنيه</div>
                </div>
              )}
            </div>
          )}

          {formData.selectedSubjects.length > 0 && (
            <div className="appeal-form-section">
              <div className="appeal-section-title">طريقة الدفع</div>

              <div className="appeal-payment-methods">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="appeal-payment-option">
                    <input
                      type="radio"
                      id={`payment-${method.id}`}
                      name="paymentMethod"
                      value={method.name}
                      checked={formData.paymentMethod === method.name}
                      onChange={handleChange}
                      required
                      className="appeal-radio-input"
                    />
                    <label htmlFor={`payment-${method.id}`} className="appeal-radio-label">
                      {method.name}
                    </label>
                  </div>
                ))}
              </div>

              {formData.paymentMethod === 'حوالة بنكية' && (
                <div className="appeal-payment-details">
                  <div className="appeal-form-group">
                    <div className="appeal-form-label">اسم البنك:</div>
                    <input
                      type="text"
                      name="bankName"
                      value={formData.bankName}
                      onChange={handleChange}
                      placeholder="أدخل اسم البنك"
                      required
                      className="appeal-form-input"
                    />
                  </div>
                  <div className="appeal-form-group">
                    <div className="appeal-form-label">رقم الحوالة:</div>
                    <input
                      type="text"
                      name="transactionNumber"
                      value={formData.transactionNumber}
                      onChange={handleChange}
                      placeholder="أدخل رقم الحوالة"
                      required
                      className="appeal-form-input"
                    />
                  </div>
                  <div className="appeal-section-text">يرجى إرفاق صورة الحوالة في الخزينة</div>
                </div>
              )}

              {formData.paymentMethod === 'الدفع في الخزينة' && (
                <div className="appeal-payment-details">
                  <div className="appeal-section-text">يرجى التوجه إلى خزينة الكلية لسداد المبلغ</div>
                  <div className="appeal-section-text">ميعاد الخزينة: من 9 صباحًا إلى 2 ظهرًا</div>
                </div>
              )}
            </div>
          )}

          <button
            type="submit"
            className="appeal-submit-btn"
            disabled={formData.selectedSubjects.length === 0}
            onClick={handleSubmitClick}
          >
            تقديم الطلب
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppealForm;