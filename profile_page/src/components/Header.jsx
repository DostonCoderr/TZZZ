import React from 'react';

const Header = ({ onCancel, onSave }) => {
  return (
    <div className="header">
      <h1>Настройка профиля</h1>
      <div className="header-actions">
        <button className="cancel-btn" onClick={onCancel}>
          Отменить
        </button>
        <button className="save-btn" onClick={onSave}>
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default Header;