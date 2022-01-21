import React from "react";
import "./skilline.css";
import { BsFillPlayFill } from "react-icons/bs";
export default function Skilline() {
  return (
    <div className="skilline my-5">
      <div className="skilline_info_title text-center">
        <h2 className="text-blue font-popinus py-4 font-weight-bold">
          What is <span className="text-orange">Skilline?</span>
        </h2>
        <p className="text-p pb-4 font-popinus">
          Skilline is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>
      </div>

      <div className="skilline_info_img">
        <div className="row m-0 text-center mt-4">
          <div className="col-md-6 text-center">
            <div className="skilline_info_img_info">
              <h6 className="font-popinus">FOR INSTRUCTORS</h6>
              <button className="btn skilline_info_btn font-popinus">
                Start a class today
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skilline_info_img_info skilline_img_photo">
              <h6 className="font-popinus">FOR INSTRUCTORS</h6>
              <button className="btn skilline_info_btn  font-popinus">
                Start a class today
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="skilline_info_room mt-5 py-5">
        <div className="row m-0 align-items-center">
          <div className="col-md-6">
            <div className="skilline_info_room_title">
              <span className="skilline_orange bg-orange2"></span>
              <div className="skilline_info_absolute">
                <h3 className="text-blue font-popinus mb-3">
                  Everything you can do in a physical <br />
                  classroom,
                  <span className="text-orange">you can do with Skilline</span>
                </h3>

                <p className="font-popinus text-p ml-0">
                  Skilline’s school management software helps traditional and
                  online schools manage scheduling, attendance, payments and
                  virtual classrooms all in one secure cloud-based system.
                  <span className="bg-orange2"></span>
                </p>

                <a href="/" className="skilline_info_room_a text-p">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 p-3">
            <div className="skilline_info_room_img ">
              <span className="skilline_bg1"></span>
              <span className="skilline_bg2"></span>
              <div className="skilline_info_room_img_photo d-flex align-items-center justify-content-center  p-4">
                <button className="btn skilline_info_room_btn">
                  <BsFillPlayFill />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
