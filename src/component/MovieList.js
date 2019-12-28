import React from "react";
import CardMovie from "../component/CardMovie";
import { connect } from "react-redux";
const MovieList = (props) => {
  return (

    <div className="movie-list">
      {props.tabMovie.map((el) =>
        <CardMovie
          key={el.id}
          film={el} />
      )}
    </div >)
}


const mapStateToProps = state => {
  return {
    tabMovie: state.tabMovie.filter(
      el =>
        el.rating >= state.minRatingFilter &&
        el.title.toLowerCase().includes(
          state.titleFilter.toLowerCase().trim()
        ))
  }
};

export default connect(mapStateToProps)(MovieList)