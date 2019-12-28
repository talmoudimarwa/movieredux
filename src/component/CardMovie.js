import React from 'react'
import MovieRating from "../component/MovieRating";
import { connect } from "react-redux";
import EditMovie from "./EditMovie"
import { deleteMovie } from "../action/action.js";
const CardMovie = ({ film, deleteMovie }) => {
  // let id=Math.random();
  return (
    <div className="movie-card">
      <div className="movie-rating"> <MovieRating count={film.rating} /> </div>
      <div className="movie-image"><img className="imgR" src={film.image} /></div>
      <div className="movie-description">{film.title}-{film.year}

      </div>
      <div className="movie-delete-button " onClick={e => {
        e.preventDefault();
        deleteMovie(film.id);
      }} >X</div>
      <EditMovie film={film} />
    </div>
  )
}
const mapDispatchToProps = dispatch => {
  return {

    deleteMovie: (payload) => dispatch(deleteMovie(payload)),

  };
};
export default connect(null, mapDispatchToProps)(CardMovie);
