import React from 'react';
import '../App.css';
import { Binary } from '../services';
import { Header } from '../components';
import { Main } from '../components'

const App = () => {

  return (
      <>
        <Binary />
        <Header text='Rev Trade' />
        <Main />

      {/* <Router>
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/operation">Operations</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router> */}
    </>
    
  );
}

export default App;
