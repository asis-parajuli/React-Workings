import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody, CardFooter } from "shards-react";

import Chart from "../../utils/chart";

class ChartByReligion extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const chartConfig = {
      type: "pie",
      data: this.props.chartData,
      options: {
        ...{
          legend: {
            position: "bottom",
            labels: {
              padding: 15,
              boxWidth: 20
            }
          },
          cutoutPercentage: 0,
          tooltips: {
            custom: false,
            mode: "index",
            position: "nearest"
          }
        },
        ...this.props.chartOptions
      }
    };

    new Chart(this.canvasRef.current, chartConfig);
  }

  render() {
    const { title } = this.props;
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{title}</h6>
        </CardHeader>
        <CardBody className="d-flex py-0">
          <canvas
            height="220"
            ref={this.canvasRef}
            className="blog-users-by-device m-auto"
          />
        </CardBody>
        <CardFooter className="border-top"></CardFooter>
      </Card>
    );
  }
}

ChartByReligion.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart config object.
   */
  chartConfig: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object,
  /**
   * The chart data.
   */
  chartData: PropTypes.object
};

ChartByReligion.defaultProps = {
  title: "धर्म अनुसार घरमूली",
  chartData: {
    datasets: [
      {
        hoverBorderColor: "#ffffff",
        data: [0.0, 2.3, 0.1, 0.8, 2.1, 94.7],
        backgroundColor: [
          "rgba(0,123,255,0.9)",
          "rgba(0,123,255,0.5)",
          "rgba(131, 102, 153, 0.6)",
          "rgba(127, 63, 191, 0.6)",
          "rgba(63, 127, 191, 0.6)",
          "rgba(178, 137, 76, 0.6)"
        ]
      }
    ],
    labels: [
      "किरात",
      "मुस्लिम(Islam)",
      "अन्य",
      "ईसाई(Christianity)",
      "बौद्ध",
      "हिन्दु"
    ]
  }
};

export default ChartByReligion;
