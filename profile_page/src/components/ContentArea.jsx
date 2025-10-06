import React from 'react';
import FormInput from './FormInput';
import LogoUpload from './LogoUpload';

const ContentArea = ({ activeItem, formData, errors, logoUrl, handleInputChange, handleLogoUpload }) => {
  return (
    <div className="content-area">
      {activeItem === 'Основные данные' ? (
        <>
          <LogoUpload logoUrl={logoUrl} handleLogoUpload={handleLogoUpload} errors={errors} />
          <div className="form-section">
            <FormInput
              label="Название компании"
              secondaryText="Введите полное название компании"
              name="companyName"
              value={formData.companyName}
              errors={errors}
              handleInputChange={handleInputChange}
            />
            <hr />
            <FormInput
              label="Адрес компании"
              secondaryText="Введите текущий юридический адрес"
              name="address"
              value={formData.address}
              errors={errors}
              handleInputChange={handleInputChange}
            />
            <hr />
            <FormInput
              label="ИНН"
              name="inn"
              value={formData.inn}
              errors={errors}
              handleInputChange={handleInputChange}
            />
            <hr />
            <FormInput
              label="Виртуал касса номер"
              name="kassaNumber"
              value={formData.kassaNumber}
              errors={errors}
              handleInputChange={handleInputChange}
            />
            <hr />
            <FormInput
              label="Телеграм Чат ID"
              name="telegramChatId"
              value={formData.telegramChatId}
              errors={errors}
              handleInputChange={handleInputChange}
            />
            <hr />
            <FormInput
              label="Дополнительная информация в телеграме"
              name="telegramInfo"
              value={formData.telegramInfo}
              errors={errors}
              handleInputChange={handleInputChange}
            />
            <hr />
          </div>
        </>
      ) : (
        <div style={{ padding: '40px', color: '#777', textAlign: 'center' }}>
          <p style={{ fontSize: '18px', fontWeight: '500' }}>
            **{activeItem}** bo'limi uchun ma'lumotlar hali kiritilmagan.
          </p>
          <p>Iltimos, "Основные данные" bo'limiga qayting.</p>
        </div>
      )}
    </div>
  );
};

export default ContentArea;