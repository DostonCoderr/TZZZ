import React from 'react';

const Modal = ({ title, text, onClose, onConfirm, primaryColor, showConfirmButton }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 style={{ color: primaryColor }}>{title}</h2>
        <p>{text}</p>
        {showConfirmButton ? (
          <div className="modal-actions">
            <button onClick={onConfirm} className="save-btn yes-btn">
              Ha (O'chirish)
            </button>
            <button onClick={onClose} className="save-btn no-btn">
              Yo'q (Bekor qilish)
            </button>
          </div>
        ) : (
          <button onClick={onClose} className="save-btn" style={{ marginTop: '15px' }}>
            Yopish
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;