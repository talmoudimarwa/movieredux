import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Trailer = props => {
  const movie = props.tabMovie.filter(el => {
    return el.title === props.match.params.title;
  })[0]; //type obj
  return (
    <div className="trailer">
      <h1 className="trailer-title">{movie.title}</h1>
      <iframe
        title="trailer"
        width="700"
        height="300"
        src={movie.trailer}
        frameBorder="0"
        allowFullScreen
        // className="trailer-vid"
      />
      <Link to="/" className="back-btn">
        <button> Back</button>
      </Link>
    </div>
  );
};
const mapStateToProps = state => ({
  tabMovie: state.tabMovie
});

export default connect(mapStateToProps)(Trailer);
