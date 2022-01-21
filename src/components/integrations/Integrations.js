import "./integrations.css";
export default function Integrations() {
  return (
    <div className="integrations my-5 py-4">
      <div className="row m-0">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="integrations_icon p-4">
            <div className="integrations_icon_style">
              <img
                src="https://technewsinc.com/wp-content/uploads/2021/06/OneDrive-New-Image-Processing-Functions-COMPUTER-BILD.jpg"
                alt=""
              />
              <img
                src="https://coderlessons.com/wp-content/uploads/images/stp/641c2973f479162576f305b347f2211d.jpg"
                alt=""
              />
            </div>
            <div className="integrations_icon_style">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUZw2h2GghNr5HNaRKpGdWnef-JD8_wLQYoJD86viS38B2_9M06xdqwgLDizP3gWnZm4&usqp=CAU"
                alt=""
              />

              <img
                src="https://logowik.com/content/uploads/images/microsoft-teams.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <div className="integrations_text font-nunito">
            <h6 className="my-4">
              <span></span>INTEGRATIONS
            </h6>

            <h3 className="text-blue my-4 font-weight-bold">
              200+ educational tools and <br />
              platform <span className="text-orange">integrations</span>
            </h3>

            <p className="text-p m-0 my-4">
              Schoology has every tool your classroom needs and comes <br />
              pre-integrated with more than 200+ tools, student information{" "}
              <br />
              systems (SIS), and education platforms.
            </p>

            <button className="btn integrations_btn">
              See All Integrations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
