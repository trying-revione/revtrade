import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'


// import * as V from 'victory';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const Charts = () => {
  const dataChart = useSelector(state => state.ticks.dataChart)
  
  return (
    <ContainerCharts>
      
      <VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        {/* <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (`$${x / 10}k`)}
        /> */}
        <VictoryLine
          style={{
                  data: { stroke: "#c43a31" },
                  parent: { border: "1px solid #ccc"}
                }}
          data={dataChart}
        />
      </VictoryChart>

    </ContainerCharts>
  )
}

const ContainerCharts = styled.div`
  width: 400px;
  margin: 0 auto;
`

export default Charts;