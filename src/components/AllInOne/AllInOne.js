import React from "react";
import "./allInOne.css";
import { SiAirbnb } from "react-icons/si";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdContacts, IoIosPaper } from "react-icons/io";
export default function AllInOn() {
  return (
    <div className="all_in_one">
      <div className="all_in_one_brand text-center">
        <h6>Trusted by 5.0.0 + Companies Worldwide</h6>
        <div className="all_in_one_brand_flex">
          <h3>Google</h3>
          <h3>NETFLIX</h3>
          <h3>
            <SiAirbnb />
            airbnb
          </h3>
          <h3>amazon</h3>
          <h3>facebook</h3>
          <h3>Grab</h3>
        </div>
      </div>
      <div className="all_in_one_cloud">
        <div className="all_in_one_cloud_title text-center my-5">
          <h2 className="text-blue mb-3 font-popinus font-weight-bold">
            All-In-One <span className="text-orange">Cloud Software.</span>
          </h2>
          <p className="font-popinus">
            Skilline is one powerful online software suite that combines all the
            <br />
            tools needed to run a successful school or office.
          </p>
        </div>
        <br />

        <div className="all_in_one_card row m-0 mt-3">
          <div className="col-md-4">
            <div className="all_in_one_card1 font-popinus">
              <div className="all_in_one_icons bg-blue">
                <IoIosPaper />
              </div>
              <div className="all_in_one_card1_info text-center">
                <h4 className="text-blue">
                  Online Billing, <br /> Invoicing, & Contracts
                </h4>

                <p className="m-0">
                  Simple and secure control of your organization’s financial and
                  legal transactions. Send customized invoices and contracts
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="all_in_one_card1 font-popinus">
              <div className="all_in_one_icons bg-orange">
                <FaRegCalendarAlt />
              </div>
              <div className="all_in_one_card1_info text-center">
                <h4 className="text-blue">
                  Easy Scheduling & <br /> Attendance Tracking
                </h4>

                <p className="m-0">
                  Schedule and reserve classrooms at one campus or multiple
                  campuses. Keep detailed records of student attendance
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="all_in_one_card1 font-popinus">
              <div className="all_in_one_icons bg-infoo">
                <IoMdContacts />
              </div>
              <div className="all_in_one_card1_info text-center">
                <h4 className="text-blue all_in_h4">Customer Tracking</h4>

                <p className="m-0">
                  Automate and track emails to individuals or groups. Skilline’s
                  built-in system helps organize your organization
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
