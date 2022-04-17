import React, { useState, useEffect } from 'react';
import logo from './images/bargoat-app-icon.png';
import './App.css';
import './App.scss';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaRobot, FaHome, FaUsers, FaBuilding, FaPlusCircle, FaChartPie } from 'react-icons/fa';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);

  {/* Performs similarly to componentDidMount in classes */ }
  useEffect(() => {
    window.addEventListener("resize", () => {
      const isMobile = window.innerWidth < 750;
      if (isMobile !== isMobile) setIsMobile(isMobile);
    }, false);
  }, [isMobile]);

  return (
    <div className="App">
      <ProSidebar iconShape="circle">
        <SidebarHeader>
          <img src={logo} alt="Logo" className="logo" />
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<FaHome />}>Dashboard</MenuItem>
            <MenuItem icon={<FaUsers />} suffix={<span className="badge green">ACTIVE</span>}>Queue</MenuItem>
            <MenuItem icon={<FaRobot />}>Bot Settings</MenuItem>
            <MenuItem icon={<FaChartPie />}>Reports</MenuItem>
            <SubMenu title="Venues" icon={<FaBuilding />}>
              <MenuItem suffix={<span className="badge gray">SELECTED</span>}>Venue 1</MenuItem>
              <MenuItem>Venue 2</MenuItem>
              <MenuItem>Venue 3</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 24px',
            }}
          >
            <a
              href="#!"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaPlusCircle />
              <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                New Guestlist
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
}

export default App;
