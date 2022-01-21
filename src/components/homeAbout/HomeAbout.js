import React from "react";
import "./homeAbout.css";
import { BsFillPlayFill } from "react-icons/bs";
import { IoIosStats } from "react-icons/io";
import { FaCalendarAlt, FaEnvelope, FaCheck } from "react-icons/fa";
export default function HomeAbout() {
  return (
    <div className="home_about_info">
      <div className="row m-0  justify-content-between">
        <div className="col-md-6">
          <div className="home_about_page ml-5 pt-4 ">
            <h1>
              <span>Studying </span>Online is now <br />
              much easier
            </h1>
            <p className="my-4">
              Skilline is an interesting platform that will teach <br />
              you in more an interactive way
            </p>

            <div className="home_about_btn">
              <button className="btn home_about_child">Join for free</button>
              <button className="btn home_about_icon">
                <BsFillPlayFill />
              </button>
              <p className="m-0 ml-3">Watch how it works</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="home_about_page_img">
            <div className="home_about_page_info mr-4">
              <div className="home_about_page_card1">
                <div className="home_about__icon">
                  <IoIosStats />
                </div>
              </div>
              <div className="home_about_page_card2">
                <FaCalendarAlt />
                <div className="home_about_page_card2_info">
                  <h6 className="m-0">250k</h6>
                  <p className="m-0">Assisted Student</p>
                </div>
              </div>
              <div className="home_about_page_card3">
                <FaEnvelope className="home_about_page_card3_icon" />
                <div className="home_about_page_card2_info">
                  <span>
                    <FaCheck />
                  </span>
                  <h6 className="m-0">Congratulations</h6>
                  <p className="m-0">Your admission completed</p>
                </div>
              </div>
              <div className="home_about_page_card4 text-center">
                <div className="home_about_page_flex">
                  <span>
                    <span className="online"></span>
                  </span>
                  <div className="home_about_page_flex_info">
                    <h6 className="m-0">User Experience Class</h6>
                    <p className="m-0">Today at 12.00 PM</p>
                  </div>
                </div>
                <button className="btn home_about_page_btn mt-2">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
