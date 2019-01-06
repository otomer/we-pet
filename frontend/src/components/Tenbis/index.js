import React from 'react';
import PropTypes from 'prop-types';
import './tenbis.scss';

const Tenbis = props => {
  const { isTenbis } = props;

  return (
    <React.Fragment>
      {isTenbis && (
        <img className="tenbis" alt="tenbis" src="/assets/images/tenbis.png" />
      )}
    </React.Fragment>
  );
};

Tenbis.propTypes = {
  isTenbis: PropTypes.bool.isRequired,
};

export default Tenbis;
