import React from 'react';

const ToastNotification = ({ message, type, show }) => {
  return (
    <div className={`toast-notification ${show ? 'show' : ''} ${type === 'success' ? 'success' : ''}`}>
      {message}
    </div>
  );
};

export default ToastNotification;