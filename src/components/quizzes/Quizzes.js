import React from "react";
import "./quizzes.css";
import { AiOutlineSend, AiOutlineCloseCircle } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
export default function Quizzes() {
  return (
    <div className="quizzes my-5">
      <div className="row align-items-center justify-content-center m-0 py-4">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="quizzes_card">
            <span className="quizzes_card_span"></span>
            <span className="quizzes_card_span2"></span>
            <span className="quizzes_card_span3"></span>
            <span className="quizzes_card_span4"></span>
            <div className="font-popinus quizzes_card_info p-4">
              <span className="quizzes_card_info_span quizzes_card_span_style">
                <AiOutlineCloseCircle />
              </span>
              <span className="quizzes_card_info_span quizzes_card_span_style2">
                <BsCheckCircle />
              </span>
              <button className="btn quizzes_card_info_btn font-popinus">
                Question
              </button>
              <h4 className="text-blue font-weight-bold my-4">
                True or false? This play <br /> takes place in Italy
              </h4>
              <div className="quizzes_img">
                <div className="quizzes_link font-popinus">
                  <AiOutlineSend />
                  <p className="mb-0">
                    Your answer was <br /> sent successfully
                    <span></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="quizzes_title">
            <h2 className="text-blue font-popinus font-weight-bold">
              Assessments, <br />
              <span className="text-orange">Quizzes</span>, Tests
            </h2>

            <p className="font-popinus text-p">
              Easily launch live assignments, quizzes, and tests. Student
              results are automatically entered in the online gradebook.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
