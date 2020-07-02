import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardFooter
} from "shards-react";

const TopReferrals = ({ title, referralData }) => (
  <Card small>
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
      <div className="block-handle" />
    </CardHeader>

    <CardBody className="p-0">
      <ListGroup small flush className="list-group-small">
        {referralData.map((item, idx) => (
          <ListGroupItem key={idx} className="d-flex px-3">
            <span className="text-semibold text-fiord-blue">{item.title}</span>
            <span className="ml-auto text-right text-semibold text-reagent-gray">
              {item.value}
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
    </CardBody>
    <CardFooter className="border-top"></CardFooter>
  </Card>
);

TopReferrals.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The referral data.
   */
  referralData: PropTypes.array
};

TopReferrals.defaultProps = {
  title: "सामान्य जानकारी",
  referralData: [
    {
      title: "जनसंख्या :",
      value: "19,291"
    },
    {
      title: "घरधुरी संख्या :",
      value: "11,201"
    },
    {
      title: "पूरुष घरमूली :",
      value: "9,291"
    },
    {
      title: "महिला घरमूली :",
      value: "8,281"
    },
    {
      title: "वस्ती संख्या :",
      value: "28"
    },
    {
      title: "कुल क्षेत्र :",
      value: "१२२.७० कि मि"
    },
    {
      title: "मुख्य भाषा",
      value: "नेपाली"
    }
  ]
};

export default TopReferrals;
