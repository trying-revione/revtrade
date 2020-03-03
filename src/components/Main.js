import React from 'react';
import styled from 'styled-components'
import { Charts, Indicators, Buttons, Form } from './index'
import { useSelector } from 'react-redux'

const Main = (props) => {
  const { children } = props;
  const indicators = useSelector(state => state.indicators)
  Indicators();
  
  return (
    <Body>

      <Charts />

      {/* <h2>
        SMA :: {indicators.sma}
      </h2>

      <h2>
        EMA :: {indicators.ema}
      </h2> */}

      <Form />

      <Buttons />

      {children}

    </Body>
  )
}

const Body = styled.main`
  padding: 2em;
  text-align: center;
`;

export default Main;