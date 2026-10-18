import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './News.css';

const NewsManagement = () => {
  const [newsList, setNewsList] = useState([]);
  const [action, setAction] = useState('add');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [searchTitle, setSearchTitle] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  // دالة لتنسيق التاريخ بصيغة DD/MM/YYYY
  const formatDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // التعامل مع إرسال النموذج (إضافة أو تعديل)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (action === 'add') {
      if (!title.trim() || !subtitle.trim() || !content.trim() || !image) {
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: 'يجب إدخال جميع الحقول (العنوان الرئيسي، العنوان الفرعي، الخبر، والصورة)',
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

        const newNews = {
          id: Date.now(),
          title: title.trim(),
          subtitle: subtitle.trim(),
          content: content.trim(),
          image: image,
          date: formatDate()
        };
        console.log('Adding news:', newNews);
        setNewsList([...newsList, newNews]);
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'نجاح',
          text: 'تم إضافة الخبر بنجاح!',
          confirmButtonText: 'حسناً'
        });

        setTitle('');
        setSubtitle('');
        setContent('');
        setImage(null);
      } catch (error) {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: 'حدث خطأ أثناء إضافة الخبر. يرجى المحاولة مرة أخرى.',
          confirmButtonText: 'حسناً'
        });
      } finally {
        setLoading(false);
      }
    } else if (action === 'edit') {
      if (!searchTitle.trim()) {
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: 'يجب إدخال العنوان الرئيسي للبحث عن الخبر',
          confirmButtonText: 'حسناً'
        });
        return;
      }

      const news = newsList.find(n => n.title === searchTitle.trim());
      if (!news) {
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: 'لم يتم العثور على خبر بهذا العنوان',
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

        const updatedNewsList = newsList.map(n =>
          n.id === news.id
            ? {
                ...n,
                title: title.trim() || n.title,
                subtitle: subtitle.trim() || n.subtitle,
                content: content.trim() || n.content,
                image: image || n.image,
                date: n.date
              }
            : n
        );
        console.log('Updated news list:', updatedNewsList);
        setNewsList(updatedNewsList);
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'نجاح',
          text: 'تم تعديل الخبر بنجاح!',
          confirmButtonText: 'حسناً'
        });

        setTitle('');
        setSubtitle('');
        setContent('');
        setImage(null);
        setSearchTitle('');
        setEditingId(null);
      } catch (error) {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: 'حدث خطأ أثناء تعديل الخبر. يرجى المحاولة مرة أخرى.',
          confirmButtonText: 'حسناً'
        });
      } finally {
        setLoading(false);
      }
    }
  };

  // البحث عن خبر لتعديله
  const handleSearchForEdit = () => {
    if (!searchTitle.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'يجب إدخال العنوان الرئيسي للبحث عن الخبر',
        confirmButtonText: 'حسناً'
      });
      return;
    }

    const news = newsList.find(n => n.title === searchTitle.trim());
    if (news) {
      setEditingId(news.id);
      setTitle(news.title);
      setSubtitle(news.subtitle);
      setContent(news.content);
      setImage(news.image);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'لم يتم العثور على خبر بهذا العنوان',
        confirmButtonText: 'حسناً'
      });
    }
  };

  // البحث عن خبر لحذفه
  const handleSearchForDelete = () => {
    if (!searchTitle.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'يجب إدخال العنوان الرئيسي للبحث عن الخبر',
        confirmButtonText: 'حسناً'
      });
      return;
    }

    const news = newsList.find(n => n.title === searchTitle.trim());
    if (news) {
      setSelectedNews(news);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'لم يتم العثور على خبر بهذا العنوان',
        confirmButtonText: 'حسناً'
      });
      setSelectedNews(null);
    }
  };

  // حذف خبر
  const handleDelete = (id) => {
    Swal.fire({
      icon: 'warning',
      title: 'تأكيد الحذف',
      text: 'هل أنت متأكد من حذف هذا الخبر؟',
      showCancelButton: true,
      confirmButtonText: 'نعم، احذف',
      cancelButtonText: 'إلغاء'
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedNewsList = newsList.filter(news => news.id !== id);
        console.log('After deletion:', updatedNewsList);
        setNewsList(updatedNewsList);
        setSelectedNews(null);
        setSearchTitle('');
        Swal.fire({
          icon: 'success',
          title: 'نجاح',
          text: 'تم حذف الخبر بنجاح!',
          confirmButtonText: 'حسناً'
        });
      }
    });
  };

  // معاينة الصورة
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="news-container">
      <div className="news-form">
        <h2 className="news-title">إدارة الأخبار</h2>
        <div className="news-group">
          <label htmlFor="action" className="news-label">اختر الإجراء:</label>
          <select
            className="news-select"
            id="action"
            value={action}
            onChange={(e) => {
              setAction(e.target.value);
              setTitle('');
              setSubtitle('');
              setContent('');
              setImage(null);
              setSearchTitle('');
              setEditingId(null);
              setSelectedNews(null);
            }}
          >
            <option value="add">إضافة خبر</option>
            <option value="edit">تعديل خبر</option>
            <option value="delete">حذف خبر</option>
            <option value="view">عرض جميع الأخبار</option>
          </select>
        </div>

        {action === 'add' && (
          <>
            <div className="news-group">
              <label htmlFor="title" className="news-label">العنوان الرئيسي:</label>
              <input
                className="news-input"
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="news-group">
              <label htmlFor="subtitle" className="news-label">العنوان الفرعي:</label>
              <input
                className="news-input"
                type="text"
                id="subtitle"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </div>
            <div className="news-group">
              <label htmlFor="content" className="news-label">الخبر:</label>
              <textarea
                className="news-textarea"
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="5"
              />
            </div>
            <div className="news-group">
              <label htmlFor="image" className="news-label">الصورة:</label>
              <input
                className="news-file"
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
              />
              {image && (
                <img
                  src={typeof image === 'string' ? image : URL.createObjectURL(image)}
                  alt="معاينة الصورة"
                  className="news-image-preview"
                />
              )}
            </div>
            <button className="news-submit" onClick={handleSubmit} disabled={loading}>
              {loading ? 'جاري التحميل...' : 'إضافة الخبر'}
            </button>
          </>
        )}

        {(action === 'edit' || action === 'delete') && (
          <div className="news-group">
            <label htmlFor="searchTitle" className="news-label">العنوان الرئيسي للبحث:</label>
            <input
              className="news-input"
              type="text"
              id="searchTitle"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
            />
            <button
              className="news-search"
              onClick={action === 'edit' ? handleSearchForEdit : handleSearchForDelete}
            >
              بحث
            </button>
          </div>
        )}

        {action === 'edit' && editingId !== null && (
          <>
            <div className="news-group">
              <label htmlFor="date" className="news-label">تاريخ الإضافة:</label>
              <input
                className="news-input"
                type="text"
                id="date"
                value={newsList.find(n => n.id === editingId)?.date || ''}
                disabled
              />
            </div>
            <div className="news-group">
              <label htmlFor="title" className="news-label">العنوان الرئيسي:</label>
              <input
                className="news-input"
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="news-group">
              <label htmlFor="subtitle" className="news-label">العنوان الفرعي:</label>
              <input
                className="news-input"
                type="text"
                id="subtitle"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </div>
            <div className="news-group">
              <label htmlFor="content" className="news-label">الخبر:</label>
              <textarea
                className="news-textarea"
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="5"
              />
            </div>
            <div className="news-group">
              <label htmlFor="image" className="news-label">الصورة:</label>
              <input
                className="news-file"
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
              />
              {image && (
                <img
                  src={typeof image === 'string' ? image : URL.createObjectURL(image)}
                  alt="معاينة الصورة"
                  className="news-image-preview"
                />
              )}
            </div>
            <button className="news-submit" onClick={handleSubmit} disabled={loading}>
              {loading ? 'جاري التحميل...' : 'حفظ التعديلات'}
            </button>
          </>
        )}

        {action === 'delete' && selectedNews && (
          <div className="news-details">
            <h3 className="news-details-title">{selectedNews.title}</h3>
            <p className="news-details-text"><strong>العنوان الفرعي:</strong> {selectedNews.subtitle}</p>
            <p className="news-details-text"><strong>الخبر:</strong> {selectedNews.content}</p>
            <p className="news-details-text"><strong>تاريخ الإضافة:</strong> {selectedNews.date}</p>
            {selectedNews.image && (
              <img
                src={typeof selectedNews.image === 'string' ? selectedNews.image : URL.createObjectURL(selectedNews.image)}
                alt={selectedNews.title}
                className="news-image"
              />
            )}
            <button
              className="news-delete"
              onClick={() => handleDelete(selectedNews.id)}
            >
              حذف الخبر
            </button>
          </div>
        )}

        {action === 'view' && (
          <div className="news-table-container">
            <h2 className="news-table-title">جميع الأخبار</h2>
            {newsList.length === 0 ? (
              <p className="news-no-data">لا توجد أخبار لعرضها</p>
            ) : (
              <table className="news-table">
                <thead className="news-table-header">
                  <tr className="news-header-row">
                    <th className="news-table-cell">العنوان الرئيسي</th>
                    <th className="news-table-cell">العنوان الفرعي</th>
                    <th className="news-table-cell">الخبر</th>
                    <th className="news-table-cell">الصورة</th>
                    <th className="news-table-cell">تاريخ الإضافة</th>
                  </tr>
                </thead>
                <tbody className="news-table-body">
                  {newsList.map((news) => (
                    <tr key={news.id} className="news-data-row">
                      <td className="news-table-cell">{news.title}</td>
                      <td className="news-table-cell">{news.subtitle}</td>
                      <td className="news-table-cell">{news.content.substring(0, 100)}...</td>
                      <td className="news-table-cell">
                        {news.image && (
                          <img
                            src={typeof news.image === 'string' ? news.image : URL.createObjectURL(news.image)}
                            alt={news.title}
                            className="news-table-image"
                          />
                        )}
                      </td>
                      <td className="news-table-cell">{news.date || 'غير متوفر'}</td>
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

export default NewsManagement;