import React from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header'
import SearchBox from './components/SearchBox';
import './App.css';

function App() {
  return (
    <Wrapper>
      <Header></Header>
      <SearchBox></SearchBox>
    </Wrapper>
  );
}

export default App;
