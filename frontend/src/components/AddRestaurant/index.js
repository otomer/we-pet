import './add-restaurant.scss';

import AddRestaurantForm from './form';
import Modal from '../Modal';
import PropTypes from 'prop-types';
import React from 'react';
import { addRestaurant } from '../../actions';
import { connect } from 'react-redux';

class AddRestaurant extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      isInnerModalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({
      isModalOpen: false,
    });
  }

  openModal() {
    this.setState({
      isModalOpen: true,
    });
  }

  render() {
    return (
      <div className="add-rest-container">
        <button onClick={this.openModal}>
          <i className="fa fa-plus-square" /> Add Restaurant
        </button>

        <Modal
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0,0.5)',
            },
          }}
        >
          <AddRestaurantForm
            cuisines={this.props.cuisines}
            addRestaurant={this.props.addRestaurant}
            closeModal={this.closeModal}
          />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { cuisines } = state.cuisinesReducer;
  return {
    cuisines,
  };
};

const mapDispatchToProps = {
  addRestaurant,
};

AddRestaurant.propTypes = {
  addRestaurant: PropTypes.func,
  cuisines: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddRestaurant);
