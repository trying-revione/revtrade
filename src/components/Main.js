import React from 'react';
import styled from 'styled-components'
import { Charts } from './index';
import { Indicators } from './index';


const Main = (props) => {
  const { children } = props;

  Indicators();
  
  return (
    <Body>

      <Charts>

      </Charts>

      {children}
    </Body>
  )
}

const Body = styled.main`
  padding: 2em;
  text-align: center;
`;

export default Main;