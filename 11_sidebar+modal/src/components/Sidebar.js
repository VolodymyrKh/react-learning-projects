import React from "react";
import { useGlobalContext } from '../context'
import { FaTimes } from "react-icons/fa";
import { links, social } from "../data";
import logo from "../logo.svg";

const Sidebar = () => {
const { isSidebarOpen, closeSideBar } = useGlobalContext();

  return (
    <aside className={` ${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <a href="#" className="logo">
          <img src={logo} alt="logo img" />
        </a>
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map(({ id, url, text, icon }) => {
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map(({ id, url, icon }) => {
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
