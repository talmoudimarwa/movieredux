import React from 'react';
import MovieList from './component/MovieList';
import Rating from './component/Rating';
import RatingFilter from './component/RatingFilter';
import './App.css';
import AddMovie from './component/AddMovie';

function App() {
  return (
    <div className="movie-app">
      <div className="movie-app-header">
      <Rating/>
      <RatingFilter/>
      </div>
      
      <MovieList/> 
   <AddMovie/>
    </div>
   
  )
}

export default App;
