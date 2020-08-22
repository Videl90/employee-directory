import React from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import UsersTable from './components/UsersTable';
import './App.css';

function App() {
  return (
    <Wrapper>
      <Header></Header>
      <UsersTable></UsersTable>
    </Wrapper>
  );
}

export default App;
