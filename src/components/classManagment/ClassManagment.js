import React from "react";
import "./classManagment.css";
import { AiFillStar } from "react-icons/ai";
import { FiBook } from "react-icons/fi";
export default function ClassManagment() {
  return (
    <div className="classManagment my-5 py-5">
      <div className="row align-items-center justify-content-center m-0">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="classManagment_title">
            <h2 className="text-blue font-popinus font-weight-bold">
              <span className="text-orange">Class Managment</span>
              <br />
              Tools for Educators
            </h2>

            <p className="text-p mb-0 font-popinus" width="300px">
              Class provides tools to help run and manage the class such as
              Class Roster, Attendance, and more. With the Gradebook, teachers
              can review and grade tests and quizzes in real-time.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <span className="classManagment_card_span"></span>
          <span className="classManagment_card_span2"></span>
          <span className="classManagment_card_span3"></span>

          <div className="classManagment_card">
            <div className="classManagment_card_stack">
              <span>
                <AiFillStar />
              </span>
            </div>
            <div className="classManagment_card_book">
              <span>
                <FiBook />
              </span>
            </div>
            <div className="classManagment_card_header">
              <p className="mb-0 font-popinus">GradeBook</p>
            </div>
            <div className="classManagment_card_box1">
              <div className="classManagment_card_box1_img">
                <img
                  src="https://image.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5378.jpg"
                  alt=""
                />
                <span className="classManagment_card-span1">98</span>
              </div>
            </div>
            <div className="classManagment_card_box2">
              <div className="classManagment_card_box2_img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72Cn6wsRe4hmbJsMyQJPWZquCfQ2jqxsgag&usqp=CAU"
                  alt=""
                />
                <span className="classManagment_card-span2">100</span>
              </div>
            </div>
            <div className="classManagment_card_box3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72Cn6wsRe4hmbJsMyQJPWZquCfQ2jqxsgag&usqp=CAU"
                alt=""
              />
              <span className="classManagment_card-span3">75</span>
            </div>
            <div className="classManagment_card_box4">
              <img
                src="https://image.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5378.jpg"
                alt=""
              />
              <span className="classManagment_card-span4">85</span>
            </div>

            <button className="btn classManage_card_btn">Export</button>
          </div>
        </div>
      </div>
    </div>
  );
}
