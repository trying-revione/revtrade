import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from'styled-components'

let Form = props => {
  return (
      <form>
        <ContainerBlock>
          <label htmlFor="average">Average</label>
          <Field name="average" component="input" type="number" />
        </ContainerBlock>
      </form>
    )
}

const ContainerBlock = styled.div`
  margin: 0 10px;
`;

// Decorate the form component
Form = reduxForm({
  form: 'revForm' // a unique name for this form
})(Form);

// You have to connect() to any reducers that you wish to connect to yourself
// InitializeFromStateForm = connect(
//   state => ({
//     initialValues: state.account.data // pull initial values from account reducer
//   }),
//   { load: loadAccount }               // bind account loading action creator
// )(InitializeFromStateForm)

export default Form;