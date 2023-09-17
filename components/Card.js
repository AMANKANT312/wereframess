import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card__main">
        <div className="card__top">
          <div className="card__top__left" style={{ color: "red" }}>
            <span className="carddot" style={{ backgroundColor: props.color }}></span>
            <span className="cardheadt" style={{color: props.color }}>
              {props.title}
            </span>
          </div>
          <div className="card__top__right">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="card__content">
          <p> {props.content} </p>
        </div>
        <div className="card__progress">
          <span className="pfullbar">
            <span className="pactbar" style={{backgroundColor:props.color}}></span>
          </span>
        </div>
        <div className="card__bottom">
          <div className="card__userprof">
            <div className="userprof"></div>
            <div className="userprof"></div>
            <div className="userprof"></div>
            <div className="userprof"></div>
          </div>
          <div className="card__due">
            <div className="icon">o</div>
            <div className="card__due__data">Due in 4 days</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
