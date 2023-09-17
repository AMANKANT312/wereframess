import React from "react";
import {
  Navsvg,
  SearchIcon,
  NotificationIcon,
  ActivityIcon,
  CheckboxIcon,
  OfficeIcon,
  FlagIcon,
  NavdownIcon,
} from "./Navsvg";
import { HumburgerIcon } from "./Svg";
import Sidebar from "./Sidebar";
import { useState } from "react";
const Navbar = () => {
  const [data,changedata]=useState('none')
  const changed=()=>{
    changedata("block")
  }
  const dchanged = () => {
    changedata("none");
  };
  return (
    <>
      <div className="sidebat" style={{ display: data ,position:'absolute',zIndex:'5'}}>
        <Sidebar />
      </div>
      <div className="nav__main" >
        <div className="cross" style={{position:'fixed',left:"298px",fontSize:'2rem',top:"15px",fontWeight:"700",display:data,zIndex:"10"}} onClick={dchanged}> 
         X
        </div>
        <div className="humbergermenu" onClick={changed}>
          <HumburgerIcon />
        </div>
        <div className="wereframe">
          wereframe
        </div>
        <div className="nav__cont1 searchbar searchsnone">
          <div >
            <SearchIcon />
          </div>
          <input type="text" placeholder="Search here" />
        </div>
        <p className="othername">OTHER MENU</p>
        <div className="nav__cont2 othermenu">
          <div className="navmenu__firt Notification">
            <div className="number">7</div>
            <div className="navIcon">
              <NotificationIcon />
            </div>
          </div>
          <div className="navmenu__firt">
            <div className="number">12</div>
            <div className="navIcon">
              <ActivityIcon />
            </div>
          </div>
          <div className="navmenu__firt">
            <div className="number">1</div>
            <div className="navIcon">
              <CheckboxIcon />
            </div>
          </div>
          <div className="navmenu__firt office">
            <div className="number">!</div>
            <div className="navIcon">
              <OfficeIcon />
            </div>
          </div>
        </div>
        <div className="nav__cont3 country">
          <div className="flagIcon">
            <FlagIcon />
          </div>
          <div className="language">English</div>
          <div className="DropIcon">
            <NavdownIcon />
          </div>
        </div>
        <div className="nav__cont4 user">
          <div className="user__profpic"></div>
          <div className="userInfo">
            <h2>username</h2>
            <h3>designation</h3>
          </div>
          <div className="Navdown">
            <NavdownIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
