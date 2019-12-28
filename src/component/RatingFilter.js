import React from 'react'
import MovieRating from "../component/MovieRating";
import { connect } from 'react-redux'
import { onChangeR } from "../action/action.js";
const RatingFilter = ({ onChangeR = () => { }, count }) => (
    <div className="rating-filter">
        <span className="rating">Minumum rating</span>
        <span><MovieRating
            count={count}
            onChangeRating={(newRating) => { onChangeR(newRating) }
            } />
        </span>
    </div>
)

const mapStateToProps = state => {
    return {
        count: state.minRatingFilter
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onChangeR: payload => dispatch(onChangeR(payload)),

    };
};
const RatingFContainer = connect(mapStateToProps, mapDispatchToProps)(RatingFilter)
export default RatingFContainer