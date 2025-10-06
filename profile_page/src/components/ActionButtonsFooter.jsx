import React from 'react';


const ActionButtonsFooter = ({ onClearReports, onClearWarehouse }) => {
  return (
    <div className="action-buttons-footer">
      <div className="action-buttons">
        <button className="clear-button" onClick={onClearReports}>
          <img src="/images/alert.png" alt="" />
          Очистить все данные
        </button>
        <button className="clear-button" onClick={onClearWarehouse}>
      <img src="/images/alert.png" alt="" />
          Очистить весь склад
        </button>
      </div>
    </div>
  );
};

export default ActionButtonsFooter;