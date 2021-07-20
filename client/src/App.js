import './App.css';
import React from 'react'
import Header from './components/Jumbotron/Jumbotron';
import Navbar from './components/Nav/Nav';
import MovieList from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <MovieList />
    </div>
  );
}

export default App;
