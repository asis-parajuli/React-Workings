import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Row,
  Col
} from "shards-react";

const Discussions = ({ title, discussions }) => (
  <Card small className="blog-comments">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="p-0">
      {discussions.map((discussion, idx) => (
        <div key={idx} className="blog-comments__item d-flex p-3">
          {/* Avatar */}
          <div className="blog-comments__avatar mr-3">
            <img src={discussion.author.image} alt={discussion.author.name} />
          </div>

          {/* Content */}
          <div className="blog-comments__content">
            {/* Content :: Title */}
            <div className="blog-comments__meta text-mutes">
              <a className="text-secondary" href={discussion.author.url}>
                {discussion.author.name}
              </a>{" "}
              <a className="text-secondary" href={discussion.post.url}>
                {discussion.post.title}
              </a>
              <span className="text-mutes"> {discussion.date}</span>
            </div>

            {/* Content :: Body */}
            <p className="m-0 my-1 mb-2 text-muted">{discussion.body}</p>

            {/* Content :: Actions */}
            <div className="blog-comments__actions"></div>
          </div>
        </div>
      ))}
    </CardBody>

    <CardFooter className="border-top">
      <Row>
        <Col className="text-left view-report">
          <Button
            theme="white"
            type="submit"
            href="http://bhimadmun.gov.np/officials"
            target="_blank"
          >
            अन्य प्रतिनिधि ...
          </Button>
          <Button
            theme="white"
            type="submit"
            href="http://bhimadmun.gov.np/officials"
            target="_blank"
          >
            कर्मचारीहरु ...
          </Button>
        </Col>
      </Row>
    </CardFooter>
  </Card>
);

Discussions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The discussions dataset.
   */
  discussions: PropTypes.array
};

Discussions.defaultProps = {
  title: "जन प्रतिनिधि",
  discussions: [
    {
      id: 1,
      date: "",
      author: {
        image: require("../../images/avatars/1.jpg"),
        name: "श्री मेख बहादुर थापा",
        url: "http://bhimadmun.gov.np/content/मेख-बहादुर-थापा"
      },
      post: {
        title: "",
        url: "#"
      },
      body: "नगर प्रमुख \n (९८५६००४००१)"
    },
    {
      id: 2,
      date: "",
      author: {
        image: require("../../images/avatars/0.jpg"),
        name: "श्री शारदा खनाल ",
        url: "http://bhimadmun.gov.np/content/शारदा-खनाल"
      },
      post: {
        title: "",
        url: "#"
      },
      body: "उप– प्रमुख \n (९८५६००४००२)"
    },
    {
      id: 3,
      date: "",
      author: {
        image: require("../../images/avatars/1.jpg"),
        name: "थमन सिंह थापा",
        url: "http://bhimadmun.gov.np/content/थमन-सिंह-थापा"
      },
      post: {
        title: "",
        url: "#"
      },
      body: "प्रमुख प्रशासकीय अधिकृत \n (९८५६००२७७७)"
    }
  ]
};

export default Discussions;
