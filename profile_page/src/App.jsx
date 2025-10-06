import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import Modal from './components/Modal';
import ToastNotification from './components/ToastNotification';
import ActionButtonsFooter from './components/ActionButtonsFooter';



// Fake data input uchun boshida chiqib turish uchun

const DEFAULT_FORM_DATA = {
  companyName: "Mechegan LLTD",
  address: "Yunusobod tumani, Anorzor kochasi, 12A",
  inn: "1234567",
  kassaNumber: "12",
  telegramChatId: "7847856058:AAG9H8Ew9xNlVr-oAaVvDMSsmsDGVAKxwS8",
  telegramInfo: "",
};

const App = () => {
  const [activeItem, setActiveItem] = useState('Основные данные');
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [logoUrl, setLogoUrl] = useState(null);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [pendingClearAction, setPendingClearAction] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('default');

  const PRIMARY_COLOR = '#00359E';
  const SUCCESS_COLOR = '#28a745';

  const sidebarItems = [
    { key: 'Основные данные', label: 'Основные данные', iconUrl: '/images/file.png' },
    { key: 'Основные настройки', label: 'Основные настройки', iconUrl: '/images/settings.png' },
    { key: 'Чеки', label: 'Чеки', iconUrl: '/images/qr-code.png' },
    { key: 'Онлайн меню', label: 'Онлайн меню', iconUrl: '/images/menu.png' },
    { key: 'Другие настройки', label: 'Другие настройки', iconUrl: '/images/dots.png' },
    { key: 'Скидки', label: 'Скидки', iconUrl: '/images/percent.png' },
  ];

  const validateInput = (name, value, type) => {
    let error = '';
    const textOnlyRegex = /^[A-Za-z\s]+$/;
    const numberRegex = /^\d*$/;

    if (type === 'number' && !numberRegex.test(value)) {
      error = "Faqat raqamlar kiritish mumkin.";
    }

    if (type === 'text' && name !== 'address' && name !== 'companyName' && name !== 'telegramChatId' && name !== 'telegramInfo' && value.trim() && !textOnlyRegex.test(value)) {
      error = "Faqat harflar kiritish mumkin.";
    }

    if (!value.trim() && name !== 'telegramInfo') {
      error = "Bu maydon to'ldirilishi shart.";
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value, dataset } = e.target;
    const inputType = dataset.type;

    if (inputType === 'number' && !/^\d*$/.test(value)) {
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateInput(name, value, inputType);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleLogoUpload = (file) => {
    if (file && file.type.startsWith('image/')) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, logo: "Rasm hajmi 5MB dan oshmasligi kerak." }));
        setLogoUrl(null);
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoUrl(reader.result);
        setErrors((prev) => ({ ...prev, logo: '' }));
      };
      reader.readAsDataURL(file);
    } else {
      setErrors((prev) => ({ ...prev, logo: "Faqat rasm fayllarini (SVG, PNG, JPG, GIF) yuklash mumkin." }));
      setLogoUrl(null);
    }
  };

  const showToastNotification = (message, type = 'default') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const performClearAll = () => {
    setFormData({
      companyName: "",
      address: "",
      inn: "",
      kassaNumber: "",
      telegramChatId: "",
      telegramInfo: "",
    });
    setErrors({});
    setLogoUrl(null);
    showToastNotification("Forma ma'lumotlari muvaffaqiyatli o'chirildi!", 'default');
  };

  const performClearWarehouse = () => {
    showToastNotification("Ombor ma'lumotlari muvaffaqiyatli o'chirildi (Simulyatsiya)!", 'default');
  };

  const handleConfirmClear = () => {
    setShowConfirmModal(false);
    if (pendingClearAction === 'CLEAR_ALL') {
      performClearAll();
    } else if (pendingClearAction === 'CLEAR_WAREHOUSE') {
      performClearWarehouse();
    }
    setPendingClearAction(null);
  };

  const handleCancel = () => {
    setPendingClearAction('CLEAR_ALL');
    setShowConfirmModal(true);
  };

  const handleClearReports = () => {
    setPendingClearAction('CLEAR_ALL');
    setShowConfirmModal(true);
  };

  const handleClearWarehouse = () => {
    setPendingClearAction('CLEAR_WAREHOUSE');
    setShowConfirmModal(true);
  };

  const handleSave = () => {
    let newErrors = {};
    let isValid = true;
    Object.keys(formData).forEach((key) => {
      const value = formData[key];
      const inputType = key === 'inn' || key === 'kassaNumber' ? 'number' : 'text';

      if (key !== 'telegramInfo') {
        const error = validateInput(key, value, inputType);
        if (error) {
          newErrors[key] = error;
          isValid = false;
        }
      } else if (value.trim() && inputType === 'text') {
        const error = validateInput(key, value, inputType);
        if (error) {
          newErrors[key] = error;
          isValid = false;
        }
      }
    });

    setErrors(newErrors);

    if (isValid) {
      console.log("Saqlanmoqda:", formData, "Logo URL:", logoUrl);
      setShowSaveModal(true);
      setTimeout(() => setShowSaveModal(false), 1500);
      showToastNotification("Ma'lumotlar muvaffaqiyatli saqlandi!", 'success');
    } else {
      showToastNotification("Iltimos, barcha majburiy maydonlarni to'g'ri to'ldiring.", 'default');
    }
  };

  const getConfirmModalContent = () => {
    switch (pendingClearAction) {
      case 'CLEAR_ALL':
        return {
          title: "Forma ma'lumotlarini o'chirish",
          text: "Haqiqatan ham forma bo'yicha barcha kiritilgan ma'lumotlarni bekor qilmoqchimisiz? Bu amalni qaytarib bo'lmaydi.",
        };
      case 'CLEAR_WAREHOUSE':
        return {
          title: "Omborni tozalash (Simulyatsiya)",
          text: "Haqiqatan ham butun ombor ma'lumotlarini o'chirmoqchimisiz? Bu amalni qaytarib bo'lmaydi.",
        };
      default:
        return { title: "Tasdiqlash", text: "Amalni davom ettirishni tasdiqlang." };
    }
  };

  return (
    <div className="profile-settings-page">
      <Header onCancel={handleCancel} onSave={handleSave} />
      <div className="main-content">
        <Sidebar
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          sidebarItems={sidebarItems}
        />
        <ContentArea
          activeItem={activeItem}
          formData={formData}
          errors={errors}
          logoUrl={logoUrl}
          handleInputChange={handleInputChange}
          handleLogoUpload={handleLogoUpload}
        />
      </div>
      <ActionButtonsFooter
        onClearReports={handleClearReports}
        onClearWarehouse={handleClearWarehouse}
      />
      {showSaveModal && (
        <Modal
          title="Saqlandi!"
          text="Ma'lumotlaringiz muvaffaqiyatli saqlandi."
          onClose={() => setShowSaveModal(false)}
          primaryColor={PRIMARY_COLOR}
          showConfirmButton={false}
        />
      )}
      {showConfirmModal && (
        <Modal
          title={getConfirmModalContent().title}
          text={getConfirmModalContent().text}
          onClose={() => setShowConfirmModal(false)}
          onConfirm={handleConfirmClear}
          showConfirmButton={true}
        />
      )}
      {showToast && (
        <ToastNotification
          message={toastMessage}
          type={toastType}
          show={showToast}
        />
      )}
    </div>
  );
};

export default App;