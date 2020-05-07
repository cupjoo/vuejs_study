import React from 'react';
import './App.css';
import Header from './containers/Header';
import Article from './containers/Article';
import Nav from './containers/Nav';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Article></Article>   
    </div>
  );
};

export default App;
