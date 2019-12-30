import React , { Component } from 'react';
import MovieList from './component/MovieList';
import Rating from './component/Rating';
import RatingFilter from './component/RatingFilter';
import './App.css';
import AddMovie from './component/AddMovie';
import {Route,Switch} from "react-router-dom";
import Trailer from './component/Trailer';


const App =()=> {
  
  return (
    <div className="movie-app">
      <div className="movie-app-header">
      <Rating/>
      <RatingFilter/>
      </div>
 
       <main className="movie-app-main">
          <Switch>
            <Route exact path='/' component={MovieList} /> 
            <Route exact path="/Trailer:title" component={Trailer} />
      
          </Switch>
       </main>
   <AddMovie/>
  
    </div>
   
  )
}

export default App;
