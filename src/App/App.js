import React from 'react';
import '../App.css';
import { useBinary } from '../services';
import { Header } from '../components';
import { Main } from '../components'

const App = () => {
  useBinary()
  return (
    <>
      <Header text='Rev Trade' />
      <Main />
    </>
    
  );
}

export default App;
