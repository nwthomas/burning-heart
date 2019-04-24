import React, { useContext } from "react";
import { Dimensions } from "react-native";
import { Store } from "../../store/store";

import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";

const { width } = Dimensions.get("window");

const LineChart = props => {
  const { state } = useContext(Store);
  const { donationsGraphData } = state;
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
        data={donationsGraphData}
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

export default LineChart;
