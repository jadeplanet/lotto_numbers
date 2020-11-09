import React from 'react';
import Lotto from './Lotto';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000;
  }
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Lotto} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
