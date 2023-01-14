import React from "react";
import { BarChart } from "react-charts-d3";
const data = [
  {
    key: "Group 1",
    values: [
      { x: 20, y: 80 },
      { x: 40, y: 80 }
    ]
  },
  {
    key: "Group 2",
    values: [
      { x: 60, y: 80 },
      { x: 80, y: 80 }
    ]
  }
];
class Graphcomponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <BarChart data={data} width={100} />
      </>
    );
  }
}

export default Graphcomponent;
