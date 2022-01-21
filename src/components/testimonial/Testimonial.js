import "./testimonial.css";
import { AiTwotoneStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { GrFormNext } from "react-icons/gr";
export default function Testimonial() {
  return (
    <div className="testimonial my-5">
      <div className="row m-0">
        <div className="col-md-5 justify-content-center d-flex">
          <div className="testimonial_text font-nunito">
            <h6>
              <span></span>
              TESTIMONIAL
            </h6>

            <h2 className="text-blue font-weight-bold my-4">What They Say?</h2>

            <p className="text-p m-0 mb-4">
              Skilline has got more than 100k positive <br /> ratings from our
              users around the world.
            </p>
            <p className="text-p m-0 mb-4">
              Some of the students and teachers were <br /> greatly helped by
              the Skilline.
            </p>
            <p className="text-p m-0 mb-4">
              Are you too? Please give your assessment
            </p>

            <button className="testimonial_btn btn text-left">
              Write your assessment
              <span>
                <BsArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="col-md-7">
          <div className="testimonial_img d-flex justify-content-center">
            <div className="testimonial_img_card">
              <div className="testimonial_img_card_info font-nunito">
                <div className="testimonial_img_card_flex1">
                  <div className="testimonial_img_card_flex2">
                    <span></span>
                    <p className="text-p">
                      "Thank you so much for your help. It's exactly what <br />
                      I've been looking for. You won't regret it. It really{" "}
                      <br />
                      saves me time and effort. Skilline is exactly what <br />
                      our business has been lacking."
                    </p>
                  </div>
                  <div className="testimonial_box text-p">
                    Gloria Rosie
                    <div className="testimonial_box_info">
                      <div className="d-flex justify-content-end testimonial_box_info_span text-orange">
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                      </div>
                      <p className="text-p m-0">12 reviews at Yelp</p>
                    </div>
                  </div>
                </div>
              </div>
              <span className="next_icon">
                <GrFormNext />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
