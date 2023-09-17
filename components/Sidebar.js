import React from "react";
import {
  Svg,
  CalendertIcon,
  ChatIcon,
  EmailIcon,
  KanbanIcon,
  SettingsIcon,
  InvoicesIcon,
  CoursesIcon,
  ShoptIcon,
  ContactIcon,
  HumburgerIcon,
  DashboardIcon,
  DownarrowIcon,
  RightarrowIcon,
  Doottedvector,
  Footerarrow,
} from "./Svg";
import Navbar from "./Navbar";
import { useState } from "react";
const Sidebar = () => {
  return (
    <>
      <div className="side__main">
        <div className="top__menu d-flex">
          <h2>weframetech</h2>
          <div className="humIcon">
            <HumburgerIcon />
          </div>
        </div>
        <div className="side__mainmenu">
          <h3>MAIN MENU</h3>
          {/* meeeeeeeeeenuuuuiteeeeemmmmm */}
          <div className="sidemenu__item">
            <div className="side__menuIcons">
              <DashboardIcon></DashboardIcon>
            </div>
            <p>Dashboard</p>
          </div>

          <div className="sidemenu__item">
            <div className="side__menuIcons">
              <EmailIcon />
            </div>
            <p>Email</p>
            <div className="numberbtn">17</div>
            <div className="arrowdown arrow">
              <DownarrowIcon />
            </div>
          </div>

          <div className="sidemenu__item kanban ">
            <div className="side__menuIcons">
              <KanbanIcon />
            </div>
            <p className="isActive">Kanban</p>
            <div className="arrowright arrow">
              <RightarrowIcon />
            </div>
          </div>
          <div className="sidemenu__item">
            <div className="side__menuIcons">
              <ContactIcon />
            </div>
            <p>Contact</p>
            <div className="newbtn">New</div>
          </div>
          <div className="sidemenu__item">
            <div className="side__menuIcons">
              <CalendertIcon />
            </div>
            <p>Calendar</p>
          </div>
          <div className="sidemenu__item">
            <div className="side__menuIcons">
              <CoursesIcon />
            </div>
            <p>Courses</p>
            <div className="arrowright arrow">
              <RightarrowIcon />
            </div>
          </div>
          <div className="sidemenu__item">
            <div className="side__menuIcons">
              <ShoptIcon />
            </div>
            <p>Shop</p>
          </div>
          <div className="sidemenu__item">
            <div className="side__menuIcons">
              <InvoicesIcon></InvoicesIcon>
            </div>
            <p>Invoices</p>
            <div className="arrowright arrow">
              <RightarrowIcon />
            </div>
          </div>
          <div className="sidemenu__item">
            <div className="side__menuIcons">
              <SettingsIcon />
            </div>
            <p>Settings</p>
          </div>

          {/* meeeeeeeeeenuuuuiteeeeemmmmm  enddddddd*/}
        </div>
        <div className="sideFooter">
          <div className="sdftcorner"></div>
          <div>
            <Doottedvector />
          </div>
          <h2>Increase your</h2>
          <h3>work with kanban</h3>
          <div className="ftarrow">
            <Footerarrow />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
