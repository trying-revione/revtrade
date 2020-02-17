import React from 'react';
import styled from 'styled-components'
import { Charts } from './index';

const Main = (props) => {
  const { children } = props;
  
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