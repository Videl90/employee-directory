import React from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import TableTitles from './components/TableTitles';
import UsersTable from './components/UsersTable';
import SearchBox from './components/SearchBox';
import './App.css';

function App() {
  return (
    <Wrapper>
      <Header></Header>
      <SearchBox></SearchBox>
      <TableTitles></TableTitles>
      <UsersTable></UsersTable>
    </Wrapper>
  );
}

export default App;
