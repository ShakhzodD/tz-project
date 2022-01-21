import "./resources.css";
export default function Resources() {
  return (
    <div className="resources my-5 pt-5">
      <div className="row font-popinus m-0">
        <div className="col-12 text-center">
          <h2 className="text-blue my-4">Lastest News and Resources</h2>
          <p className="text-p mb-4">
            See the developments that have occurred to Skillines in the world
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <div className="resources_info">
            <img
              src="https://images.pexels.com/photos/6347914/pexels-photo-6347914.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />

            <span className="resources_info_new">NEWS</span>
            <h5 className="resources_info_h5">
              Class adds $30 million to its balance sheet for <br /> a
              Zoom-friendly edtech solution
            </h5>

            <p className="m-0 text-p my-3">
              Class, launched less than a year ago by Blackboard <br />
              co-founder Michael Chasen, integrates exclusively...
            </p>

            <a href="/" className="text-p resources_info_a">
              Read more
            </a>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <div className="resources_card">
            <div className="resources_card_box">
              <div className="resources_card_box_info">
                <img
                  src="https://images.pexels.com/photos/3755511/pexels-photo-3755511.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                  className="resources_img"
                />
                <div className="resources_card_text">
                  <h6>
                    Class Technologies Inc. Closes $30 Million <br /> Series A
                    Financing to Meet High Demand
                  </h6>
                  <p className="m-0 text-p">
                    Class Technologies Inc., the company that created Class,...
                  </p>
                </div>
              </div>
              <div className="resources_card_box_info">
                <img
                  src="https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                  className="resources_img"
                />
                <div className="resources_card_text">
                  <h6>
                    Zoom’s earliest investors are betting <br /> millions on a
                    better Zoom for schools
                  </h6>
                  <p className="m-0 text-p">
                    Zoom was never created to be a consumer <br /> product.
                    Nonetheless, the...
                  </p>
                </div>
              </div>
              <div className="resources_card_box_info">
                <img
                  src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                  className="resources_img"
                />
                <div className="resources_card_text">
                  <h6>
                    Former Blackboard CEO Raises $16M to <br /> Bring LMS
                    Features to Zoom Classrooms
                  </h6>
                  <p className="m-0 text-p">
                    This year, investors have reaped big <br /> financial
                    returns from betting on Zoom...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
