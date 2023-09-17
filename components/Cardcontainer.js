import React from "react";
import Card from "./Card";
import Tiltcard from "@/components/Tiltcard";
const Cardcontainer = () => {
  return (
    <>
      {/* <Card/> */}
      <div className="cardcontainer__main">
        <div className="todo">
          <div className="todohead">
            <div className="content">To-Do List(24)</div>
            <div className="addicon  todoaddicon">+</div>
          </div>
          <div className="todocards">
            <Card
              title="Important"
              color="#ffab2d"
              content="Create sign up Sheet for holiday student/parent conferences"
            />

            <Card
              title="Instructor Meeting"
              color="#E328AF"
              content="Plan holiday demonstration program. Create outline."
            />
            <Card
              title="Databse"
              color="#38E25D"
              content="Determine how many boards need to be ordered for testing demo."
            />
          </div>
        </div>
        <div className="inprogress">
          <div className="todo">
            <div className="todohead">
              <div className="content">In Progress(2)</div>
              <div className="addicon">+</div>
            </div>
            <div className="todocards">
              <Card
                title="Video"
                color="#5ECFFF"
                content="Create sparring tutorial video for the weekly class."
              />
              <Tiltcard
                title="Instructor Meeting"
                color="#FF4A55"
                content="Payment gateway needs reauthorization."
              />
            </div>
          </div>
        </div>
        <div className="done">
          <div className="todo">
            <div className="todohead">
              <div className="content">Done(3)</div>
              <div className="addicon">+</div>
            </div>
            <div className="todocards">
              <Card
                title="Bugs fixing"
                color="#FF4A55"
                content="Action Button needed for Google Maps visits."
              />
              <Card
                title="Database"
                color="#38E25D"
                content="Updat new instructor photos"
              />
              <Card
                title="Instructor Meeting"
                color="#E328AF"
                content="Review/correct yellow belt techniques."
              />
            </div>
          </div>
        </div>
        <div className="revised">
          <div className="todo">
            <div className="todohead">
              <div className="content">Revised(24)</div>
              <div className="addicon">+</div>
            </div>
            <div className="todocards">
              <div className="cont">
                <div className="empty">Move card here</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardcontainer;
