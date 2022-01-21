import "./footer.css";
import { BsFillSuitDiamondFill, BsSuitDiamond } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="footer text-center font-popinus py-5">
      <div className="d-flex justify-content-center align-items-center">
        <div className="footer_brand font-popinus ">
          <div className="footer_brand_info">
            <BsSuitDiamond className="footer_brand_info_svg" />
            <span className="footer_brand_info_span">Skilline</span>
          </div>
          <span className="footer_height"></span>
          <h6 className="footer_h6">
            Virtual Class <br /> for Zoom
          </h6>
        </div>
      </div>
      <h5 className="my-4" style={{ color: "#B2B3CF" }}>
        Subscribe to get our Newsletter
      </h5>
      <div className="footer_input d-flex justify-content-center my-4">
        <input
          type="text"
          className="footer_input_info"
          placeholder="Your email"
        />
        <button className="btn footer_btn">Subscribe</button>
      </div>

      <div
        className="d-flex align-items-center justify-content-center footer_box my-4"
        style={{ color: "#B2B3CF" }}
      >
        <span>Careers</span>
        <span className="mx-4">Privacy Policy</span>
        <span>Terms & Conditions</span>
      </div>

      <p className="text-center" style={{ color: "#B2B3CF" }}>
        2021 Class Technologies Inc.
      </p>
    </div>
  );
}
