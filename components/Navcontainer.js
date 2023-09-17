import React from "react";
import { NavcontMessageIcon, NavbackarrowIcon ,NavcomapnyogoIcon,NavaddfriendIcon} from "./Navsvg";
const Navcontainer = () => {
  return (
    <>
      <div className="navcont__main">
        <div className="navcont__upper">
          <div className="left">
            <div className="task">
              <div className="arrow">
                <NavbackarrowIcon />
              </div>
              <div>
                <div className="con">School November Tasks</div>
                <div className="creator">
                  Created by Instructor Day on November 31, 2022
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="company">
              <div className="company__content">
                <h2>Centered Martial Arts</h2>
                <h3>Sunnyvale, CA</h3>
              </div>
              <div className="company__logo">
                <NavcomapnyogoIcon />
              </div>
            </div>
            <div className="threedot">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="navcont__lower">
          <div className="left">
            <div className="navonctlowleft1">
              <div className="userprof userprof1"></div>
              <div className="userprof userprof2"></div>
              <div className="userprof userprof3"></div>
              <div className="userprof userprof4"></div>
              <div className="userprof userprof5">
                <span>5+</span>
              </div>
            </div>
            <div className="navonctlowleft2">
              <div className="icons">
                <NavaddfriendIcon />
              </div>
              <p>Invite People</p>
            </div>
            <div className="navonctlowleft3">
              <span>Private</span>
            </div>
            <div className="navonctlowleft4">
              <span>Edit</span>
            </div>
            <div className="navonctlowleft5">
              <div className="icons">
                <NavcontMessageIcon />
              </div>
              <p>
                <span>45 Comments</span>
              </p>
            </div>
          </div>
          <div className="right">
            <div className="navprogress">
              <div className="content">Total Progress 60%</div>
              <div className="pbar">
                <span className="fullbar">
                  <span className="barsuccess"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navcontainer;
