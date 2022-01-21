import "./one.css";

export default function One() {
  return (
    <div className="one py-2">
      <div className="row m-0 justify-content-center align-items-center">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="one_card">
            <span className="one_card_span1"></span>
            <span className="one_card_span2">
              <span className="one_card_rounded"></span>
            </span>
            <div className="one_card_img">
              <div className="one_card_img_info">
                <div className="one_card_img_info_header">
                  <span className="one_card_img_info_header_span1"></span>
                  <span className="one_card_img_info_header_span2"></span>
                  <span className="one_card_img_info_header_span3"></span>
                </div>
                <div className="one_card_img_box p-3">
                  <img
                    src="	https://image.freepik.com/free-photo/portrait-teacher-giving-online-class_23-2148779843.jpg"
                    alt=""
                  />
                  <img
                    src="https://image.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5378.jpg"
                    alt=""
                  />
                </div>
                <div className="one_card_footer py-2">
                  <div className="one_card_footer_info font-popinus">
                    <h6>Private Discussion</h6>
                    <p className="m-0 text-p ">
                      Your videos can't be seen bt others
                    </p>
                  </div>
                  <div className="one_card_footer_btn">
                    <button className="btn">End Discussion</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="one_card_title font-popinus">
            <h2 className="text-blue font-weight-bold">
              One-on-One <br />
              <span className="text-orange">Discussions</span>
            </h2>
            <p className="m-b text-p">
              Teachers and teacher assistants can talk with <br /> students
              privately without leaving the Zoom <br /> environment.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center one_card_footer_btn_style">
        <button className="btn one_card_footer_btn2">See more features</button>
      </div>
    </div>
  );
}
