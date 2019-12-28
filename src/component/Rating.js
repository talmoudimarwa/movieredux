import React from 'react'
import { connect } from 'react-redux'
import { addtitlefilter } from "../action/action.js";
const Rating = ({ value = '', addtitlefilter = () => { } }) => {
   return (
      <div className="filter-name">
         <input className="filter-text"
            type="text"
            value={value}
            onChange={(event) => {
               addtitlefilter(event.target.value)
            }}
         />
      </div>
   )
}
const mapStateToProps = state => {
   return {
      value: state.titleFilter
   }
}
const mapDispatchToProps = dispatch => {
   return {
      addtitlefilter: payload => dispatch(addtitlefilter(payload)),

   };
};

const RatingContainer = connect(mapStateToProps, mapDispatchToProps)(Rating)
export default RatingContainer