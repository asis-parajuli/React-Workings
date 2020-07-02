import React from "react";
import { Row } from "shards-react";

export default () => (
  <div>
    <div>
      <img
        id="main-logo"
        className="d-inline-block align-top mr-1"
        style={{ maxWidth: "25px", height: "35px" }}
        src={require("../../../images/coatofarmsnepal.png")}
        alt="भिमाद नगरपालिका, गण्डकी प्रदेश, तनहुँ, नेपाल"
      />
      <h4 className="d-none d-md-inline ml-1">
        भिमाद नगरपालिका, गण्डकी प्रदेश, तनहुँ, नेपाल{" "}
        {Array(30)
          .fill("\xa0")
          .join("")}
      </h4>
    </div>
    <Row className="dropdown nav-link-icon text-right">
      <div className="nav-link-icon__wrapper">
        <i className="material-icons">&#xE8D1;</i>
        Households
      </div>
      {Array(8)
        .fill("\xa0")
        .join("")}
      <div className="nav-link-icon__wrapper">
        <i className="material-icons">&#xE2C7;</i>
        Institutional
      </div>
      {Array(8)
        .fill("\xa0")
        .join("")}
      <div className="nav-link-icon__wrapper">
        <i className="material-icons">&#xE6E1;</i>
        Analysis
      </div>
      {Array(8)
        .fill("\xa0")
        .join("")}
      <div className="nav-link-icon__wrapper">
        <i className="material-icons">login</i>
        Login
      </div>
    </Row>
  </div>
);
