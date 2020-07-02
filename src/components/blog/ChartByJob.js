import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody, CardFooter } from "shards-react";

import Chart from "../../utils/chart";

class ChartByJob extends React.Component {
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

ChartByJob.propTypes = {
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

ChartByJob.defaultProps = {
  title: "पेशकाे अनुसार  घरमूली",
  chartData: {
    datasets: [
      {
        hoverBorderColor: "#ffffff",
        data: [1.8, 8.8, 78.5, 10.6, 0.2],
        backgroundColor: [
          "rgba(0,123,255,0.9)",
          "rgba(0,123,255,0.5)",
          "rgba(131, 102, 153, 0.6)",
          "rgba(127, 63, 191, 0.6)"
        ]
      }
    ],
    labels: [
      "ज्याला / मजदुरी",
      "जागिर",
      "कृषि / पशुपालन",
      "ब्यापार",
      "उद्योग धन्दा"
    ]
  }
};

export default ChartByJob;
