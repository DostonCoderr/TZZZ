import React from 'react';

const Sidebar = ({ activeItem, setActiveItem, sidebarItems }) => {
  return (
    <div className="sidebar">
      {sidebarItems.map((item) => (
        <a
          key={item.key}
          className={`nav-item ${activeItem === item.key ? 'active' : ''}`}
          onClick={() => setActiveItem(item.key)}
        >
          <img
            src={item.iconUrl}
            alt={item.label}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = activeItem === item.key
                ? "https://placehold.co/20x20/00359E/fff?text=i"
                : "https://placehold.co/20x20/5a677e/fff?text=i";
            }}
          />
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;