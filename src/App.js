import React from 'react';
import logo from './LifewayIt.png';
import './App.css';
import { Provider } from 'react-redux';


import Posts from './components/Posts';
import Postsform from './components/Postsform';

import store from './components/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="Posts">
            <Postsform />
            <hr />
            <Posts />
          </div>
        </header>
      </div>
    </Provider>
  );
}

export default App;
