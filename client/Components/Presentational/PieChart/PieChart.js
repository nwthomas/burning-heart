import React from "react";
import { Dimensions } from "react-native";

import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";

const { width } = Dimensions.get("window");

const dummyData = [
  { x: "Jan", y: 1 },
  { x: "Feb", y: 2 },
  { x: "Mar", y: 2 },
  { x: "Apr", y: 5 },
  { x: "May", y: 3 },
  { x: "June", y: 1 },
  { x: "July", y: 0 },
  { x: "Aug", y: 6 },
  { x: "Sept", y: 3 },
  { x: "Oct", y: 2 },
  { x: "Nov", y: 1 },
  { x: "Dec", y: 7 }
];

const PieChart = props => {
  return (
    <VictoryChart
      title="Yearly Donations"
      width={width / 1.02}
      height={width / 1.2}
      theme={VictoryTheme.material}
      style={{
        fontSize: 8
      }}
    >
      <VictoryLine
        data={dummyData}
        style={{
          data: { stroke: "#ffb2b3" },
          parent: { border: "1px solid #cacacf", fontSize: 12 }
        }}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }}
        interpolation="natural"
      />
    </VictoryChart>
  );
};

export default PieChart;
