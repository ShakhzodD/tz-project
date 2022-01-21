import React from "react";
import "./featured.css";
import { MdOutlineGroups } from "react-icons/md";
import { FaSignal } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
export default function Featured() {
  return (
    <div className="featured py-5 my-4">
      <div className="featured_title text-center pt-3 pb-4">
        <h2 className="text-blue font-popinus font-weight-bold">
          Our <span className="text-orange">Featured</span>
        </h2>
        <p className="text-p font-popinus">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
      </div>

      <div className="featured_info">
        <div className="row m-0 d-flex justify-content-center align-items-center">
          <div className="col-md-7 p-4">
            <div className="featured_info_img">
              <span className="featured_info_img_span"></span>
              <span className="featured_info_img_span2"></span>
              <span className="featured_info_img_span3"></span>
              <span className="featured_info_img_span4"></span>
              <div className="featured_info_card">
                <div className="featured_info_header p-1">
                  <span className="double1"></span>
                  <span className="double2"></span>
                  <span className="double3"></span>
                </div>
                <div className="featured_info_card_albom p-3">
                  <div className="featured_info_card_img">
                    <div className="featured_info_card_img_info">
                      <FaSignal />
                      <button className="btn">Instructor</button>
                      <p className="mb-0">Eveny Howard</p>
                    </div>
                  </div>
                  <div className="featured_info_card_img1 ml-5">
                    <div className="featured_info_card_img2">
                      <div className="featured_info_card_img2_info text-white">
                        <FaSignal />
                        <p className="mb-0 mr-1">Tamara Clarke</p>
                      </div>
                    </div>
                    <span className=""></span>
                    <div className="featured_info_card_img3 mt-3">
                      <div className="featured_info_card_img3_info text-white">
                        <FaSignal />
                        <p className="mb-0 mr-1">Humbert Holland</p>
                      </div>
                    </div>
                  </div>
                  <div className="featured_info_card_img1 ml-5">
                    <div className="featured_info_card_img4">
                      <div className="featured_info_card_img4_info text-white">
                        <FaSignal />
                        <p className="mb-0 mr-1">Adam Levin</p>
                      </div>
                    </div>
                    <div className="featured_info_card_img5 mt-3">
                      <div className="featured_info_card_img5_info text-white">
                        <FaSignal />
                        <p className="mb-0 mr-1">Patricia Mendoza</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="featured_btn_group mt-3 d-inline-block">
                  <button className="btn featured_info_btn font-nunito">
                    Present
                  </button>
                  <button className="btn font-nunito featured_info_btn2">
                    <AiOutlinePhone /> Call
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <h3 className="text-blue font-weight-bold font-popinus">
              A <span className="text-orange">user interface</span> designed{" "}
              <br /> for the classroom
            </h3>
            <div className="featured_info_classroom">
              <div className="featured_info_classroom_flex">
                <div className="featured_info_cubic">
                  <span className="featured_cubic1"></span>
                  <span className="featured_cubic2"></span>

                  <span className="featured_cubic3"></span>
                  <span className="featured_cubic4"></span>
                </div>
                <p className="text-p pl-3 m-0 font-popinus">
                  Teachers don’t get lost in the grid view and have a dedicated
                  Podium space.
                </p>
              </div>
              <div className="featured_info_classroom_flex">
                <div className="featured_info_cubic featured_info_cubic_width">
                  <span className="featured_cubic_1"></span>
                  <span className="featured_cubic_2"></span>
                </div>
                <p className="text-p m-0 pl-3 font-popinus">
                  TA’s and presenters can be moved to the front of the class.
                </p>
              </div>
              <div className="featured_info_classroom_flex">
                <div className="featured_info_cubic featured_info_cubic_width2">
                  <MdOutlineGroups />
                </div>
                <p className="text-p m-0 pl-3 font-popinus">
                  Teachers can easily see all students and class data at one
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
