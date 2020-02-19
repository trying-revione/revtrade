import React from 'react';
import styled from 'styled-components'

const Header = (props) => {
  const { text } = props;
  return (
    <Menu>
      {text}
    </Menu>
  )
}

const Menu = styled.header`
  padding: 1em;
  background: #40ddef;
  text-align: center;
  font-size: 2em;
`;

export default Header;