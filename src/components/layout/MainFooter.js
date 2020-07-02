import React from "react";
import PropTypes from "prop-types";
import { Container, Row } from "shards-react";

const MainFooter = ({ contained, vimadfooter, copyright }) => (
  <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
    <Container fluid={contained}>
      <Row>
        <span className="copyright ml-auto my-auto mr-2">
          <div className="nav-link-icon__wrapper">
            <i className="material-icons">phone</i>
            065-572436
            {Array(8)
              .fill("\xa0")
              .join("")}
            <i className="material-icons">email</i>
            info@bhimadmun.gov.np
          </div>
        </span>
        <span className="copyright ml-auto my-auto mr-2">{vimadfooter}</span>
        <span className="copyright ml-auto my-auto mr-2">{copyright}</span>
      </Row>
    </Container>
  </footer>
);

MainFooter.propTypes = {
  /**
   * Whether the content is contained, or not.
   */
  contained: PropTypes.bool,
  /**
   * The menu items array.
   */

  /**
   * The copyright info.
   */
  copyright: PropTypes.string,

  vimadfooter: PropTypes.string
};

MainFooter.defaultProps = {
  contained: false,
  copyright: "Copyright ©  4G Engineering Solution",
  vimadfooter: "भिमाद नगरपालिका, गण्डकी प्रदेश, तनहुँ, नेपाल"
};

export default MainFooter;
