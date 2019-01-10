import { Field, reduxForm } from 'redux-form';

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import { generateUpTo } from '../../helpers/time-helper';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.cuisine_id) {
    errors.cuisine_id = 'Required';
  }
  if (!values.max_delivery_time) {
    errors.max_delivery_time = 'Required';
  }

  return errors;
};

const createRenderer = render => ({
  input,
  meta,
  label,
  fieldName,
  placeholder,
  ...rest
}) => (
  <div
    className={classNames(
      'form-control',
      `form-${fieldName}`,
      meta.error && meta.touched ? 'error' : '',
      meta.active ? 'active' : '',
    )}
  >
    <label htmlFor={fieldName}>{label}:</label>
    {render(input, label, rest)}
    {meta.error && meta.touched && (
      <span className="error">» This field is {meta.error}</span>
    )}
  </div>
);

const RenderInput = createRenderer((input, label) => {
  return <input {...input} placeholder={label} />;
});

const RenderSelect = createRenderer((input, label, { children }) => {
  return <select {...input}> {children} </select>;
});

let AddRestaurantForm = ({
  handleSubmit,
  addRestaurant,
  submitting,
  cuisines,
  pristine,
  closeModal,
  reset,
}) => {
  const submission = res => {
    addRestaurant(res)
      .then(response => {
        if (response.status === 201) {
          reset();
        } else {
          alert('Oops! Failed to add restaurant');
        }
        closeModal();
      })
      .catch(err => {
        alert(`Error! ${err.message}`);
      });
  };
  const upToTimes = generateUpTo(10, 30);

  return (
    <form onSubmit={handleSubmit(submission)}>
      <h2>Add a new Restaurant</h2>
      <hr />
      <Field
        name="name"
        fieldName="name"
        label="Restaurant Name"
        component={RenderInput}
        placeholder="Name"
      />
      <Field
        name="cuisine_id"
        fieldName="cuisine_id"
        component={RenderSelect}
        label="Restaurant Cuisine"
      >
        <option>Choose a cuisine...</option>
        {cuisines &&
          cuisines.map(cuisine => {
            return (
              <option key={cuisine.id} value={cuisine.id}>
                {cuisine.name}
              </option>
            );
          })}
      </Field>
      <Field
        name="max_delivery_time"
        fieldName="max_delivery_time"
        component={RenderSelect}
        label="Maximum Delivery time"
      >
        <option>Maximum Delivery Time...</option>
        {upToTimes.map(time => {
          return (
            <option key={time.value} value={time.value}>
              Up to {time.text}
            </option>
          );
        })}
      </Field>
      <div className="form-control form-tenbis">
        <label htmlFor="is_tenbis">
          <Field name="is_tenbis" component="input" type="checkbox" />
          Working with 10bis?
        </label>
      </div>

      <div className="form-control form-location">
        <label>Btw, We'll randomize a location for you :)</label>
      </div>

      <div className="buttons">
        <button type="submit" className="btn-submit" disabled={submitting}>
          {submitting ? 'Hold on, Submitting...' : 'Submit'}
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

AddRestaurantForm.propTypes = {
  closeModal: PropTypes.func,
  resetForm: PropTypes.func,

  submitting: PropTypes.bool,
  addRestaurant: PropTypes.func,
  handleSubmit: PropTypes.func,
  cuisines: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
};

AddRestaurantForm = reduxForm({
  form: 'add-restaurant-form',
  destroyOnUnmount: false,
  validate,
})(AddRestaurantForm);

export default AddRestaurantForm;
