import React from "react";
import "../CSS/Sidebaroption.css";

const SidebarOption = ({ active, text, Icon }) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h3>{text}</h3>
    </div>
  );
};

export default SidebarOption;
