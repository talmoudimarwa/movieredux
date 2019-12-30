import { Modal, Button } from 'antd';
import { connect } from "react-redux";
import React from "react";
import { editMovie, addtitle, addimage, addyear, addrating } from "../action/action.js";
class EditMovie extends React.Component {
  state = {
    visible: false,

  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Edit Movie
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={() => {
            this.props.handleOk({
              title: this.props.title,
              id: this.props.film.id,
              image: this.props.image,
              year: this.props.year,
              rating: this.props.rating
            }
            ); this.handleCancel()
          }}
          //   onClick={ () =>  { this.props.handleEdit ({id:this.props.Task.id,text:this.props.text}) ;  this.closeModal()}}


          onCancel={this.handleCancel}
        >
          <input
            className="enterTitle"
            type="text"
            placeholder="Edit Title"
            onChange={(event) => this.props.handeltitle(event.target.value)}
          ></input>
          <br />
          <input
            type="text"
            placeholder="Edit Image"
            className="enterTitle"
            onChange={(event) => this.props.handleimage(event.target.value)}
          ></input>
          <br />
          <input
            type="number"
            placeholder="Edit Year"
            className="enterTitle"
            onChange={(event) => this.props.handleyear(event.target.value)}
          ></input>
          <br />
          <input
            type="text"
            placeholder="Edit Rating"
            className="enterTitle"
            onChange={(event) => this.props.handlerating(event.target.value)}
          ></input>

        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    tabMovie: state.tabMovie,
    title: state.title,
    image: state.image,
    year: state.year,
    rating: state.rating

  };
};
const mapDispatchToProps = dispatch => {
  return {
    handeltitle: payload => dispatch(addtitle(payload)),
    handleimage: payload => dispatch(addimage(payload)),
    handleyear: payload => dispatch(addyear(payload)),
    handlerating: payload => dispatch(addrating(payload)),
    handleOk: (payload) => dispatch(editMovie(payload)),

  };
};

const ModalEdit = connect(mapStateToProps, mapDispatchToProps)(EditMovie);
export default ModalEdit