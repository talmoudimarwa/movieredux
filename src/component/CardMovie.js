import React from 'react'
import MovieRating from "../component/MovieRating";
import { connect } from "react-redux";
import EditMovie from "./EditMovie"
import { deleteMovie } from "../action/action.js";
import { Link } from "react-router-dom";

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
      <div className="edit">
      < EditMovie 
      film={film} />
      </div>
      <Link
          to={"/Trailer" + film.title }
          
          
          className="trailer-btn btn "
        >
          Trailer
        </Link>
      
    </div>
  )
}
const mapDispatchToProps = dispatch => {
  return {

    deleteMovie: (payload) => dispatch(deleteMovie(payload)),

  };
};
export default connect(null, mapDispatchToProps)(CardMovie);
