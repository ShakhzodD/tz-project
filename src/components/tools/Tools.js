import React from "react";
import "./tools.css";
import { MdOutlineGroups } from "react-icons/md";
import { AiFillBoxPlot } from "react-icons/ai";
export default function Tools() {
  return (
    <div className="tools">
      <div className="row m-0 align-items-center">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="tools_title p-4">
            <h2 className="text-blue text-popinus">
              <span className="text-orange text-popinus">Tools </span> For
              Teachers <br /> And Learners
            </h2>
            <p className="text-p font-popinus ml-0">
              Class has a dynamic set of teaching tools built to be deployed and
              used during class. Teachers can handout assignments in real-time
              for students to complete and submit.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="tools_img">
            <div className="tools_img_card">
              <AiFillBoxPlot className="text-orange" />
            </div>
            <div className="tools_img_card2">
              <MdOutlineGroups />
            </div>
            <span className="tools_img_span tools_span1"></span>
            <span className="tools_img_span tools_span2"></span>
            <span className="tools_img_span tools_span3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
