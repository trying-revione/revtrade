import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';

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