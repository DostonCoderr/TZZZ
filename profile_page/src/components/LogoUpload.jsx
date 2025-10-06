import React from 'react';

const LogoUpload = ({ logoUrl, handleLogoUpload, errors }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleLogoUpload(file);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    handleLogoUpload(file);
  };

  return (
    <div className="logo-upload-section">
      <div className="logo-info">
        <label className="form-label">Лого компании</label>
        <p>Загрузите свое лого в платформу и развивайте себя</p>
      </div>
      <div
        className="upload-box"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => document.getElementById('logo-upload-input').click()}
      >
        {logoUrl ? (
          <div className="uploaded-logo-container">
            <img src={logoUrl} alt="Yuklangan logo" className="uploaded-logo" />
          </div>
        ) : (
          <>
            <img src="/images/features.png" alt="" />
            <div className="upload-text">
              Click to upload <span style={{ color: '#333' }}>or drag and drop</span>
            </div>
            <div className="upload-subtext">SVG, PNG, JPG or GIF (max. 5MB)</div>
          </>
        )}
        <input
          type="file"
          id="logo-upload-input"
          style={{ display: 'none' }}
          accept="image/*"
          onChange={handleFileSelect}
        />
      </div>
      {errors.logo && <div className="error-message" style={{ marginBottom: '20px' }}>{errors.logo}</div>}
    </div>
  );
};

export default LogoUpload;