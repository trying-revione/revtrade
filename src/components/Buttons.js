import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { setAction } from '../redux/actions/actions.actions'

const Buttons = () => {
  // const state = useSelector(state => state)
  const dispatch = useDispatch()

  function comprarUnContrato () {
    console.log('comprar el contrato')
    dispatch(setAction('buy'))
  }

  return (
    <>
        <Button onClick={comprarUnContrato}>
          Comprar un contrato
        </Button>

        {/* <Button start onClick={comprarUnContrato}>
          Stop
        </Button>

        <Button stop onClick={comprarUnContrato}>
          Start
        </Button>

        <Button onClick={comprarUnContrato}>
          Guardar el precio
        </Button> */}
    </>
  )
}
const Button = styled.button`
    font-size: 2em;
    padding: 1em;
    border-radius: 12px;
    margin: 0 10px;
    background-color: ${props => props.start ? "red" : props.stop ? "green" : "white" };
`;


export default Buttons;