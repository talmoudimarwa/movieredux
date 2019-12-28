import { Modal, Button } from 'antd';
import { connect } from "react-redux";
import React from "react";
import { addMovie } from "../action/action.js";

class AddMovie extends React.Component {
  state = {
    visible: false,
    addMovie: {
      title: "",
      image: "",
      rating: "",
      year: "",
    },
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    e.preventDefault();
    if (Object.values(this.state.addMovie).indexOf("") > -1) {
      e.preventDefault();
      alert("Enter a valid informations");
    } else {
      this.setState({
        visible: false,
        addMovie: {
          id: Math.random(),
          title: "",
          image: "",
          rating: "",
          year: "",
        },
      });
      this.props.addMovie({ ...this.state.addMovie })
    }
  };
  handleTitle = event => {
    this.setState({
      addMovie: {
        ...this.state.addMovie,
        title: event.target.value
      }
    });
    console.log(this.state.title)
  };
  handleImage = event => {
    this.setState({
      addMovie: {
        ...this.state.addMovie,
        image: event.target.value
      }
    })
    console.log(this.state.image)
  };
  handleYear = event => {
    this.setState({
      addMovie: {
        ...this.state.addMovie,
        year: event.target.value <= 2020
          ? event.target.value
          : ""
      }
    });
    console.log(this.state.year)
  }
  handleRating = event => {
    this.setState({
      addMovie: {
        ...this.state.addMovie,
        rating: /^[0-9]{1}$/.test(event.target.value) && event.target.value <= 5
          ? event.target.value
          : ""
      }
    });
    console.log(this.state.rating)
  }


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
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <input className="enterTitle"
            placeholder="Enter new title"
            onChange={this.handleTitle}
            value={this.state.addMovie.title}
          />
          <br />
          <input className="enterTitle"
            placeholder="Enter new link"
            onChange={this.handleImage}
            value={this.state.addMovie.image}
          />
          <br />
          <input className="enterTitle"
            placeholder="Enter new year"
            onChange={this.handleYear}
            value={this.state.addMovie.year}
          />
          <br />
          <input className="enterTitle"
            placeholder="Enter new rating"
            onChange={this.handleRating}
            value={this.state.addMovie.rating}
          />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tabMovie: state.tabMovie

  };
};
const mapDispatchToProps = dispatch => {
  return {

    addMovie: (payload) => dispatch(addMovie(payload))
  };
};

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(AddMovie);
export default ModalContainer