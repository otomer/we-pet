import './tenbis.scss';

import PropTypes from 'prop-types';
import React from 'react';

const Tenbis = ({ isTenbis }) => {
  return (
    <React.Fragment>
      {isTenbis && (
        <img className="tenbis" alt="tenbis" src="/assets/images/tenbis.png" />
      )}
    </React.Fragment>
  );
};

Tenbis.propTypes = {
  isTenbis: PropTypes.bool,
};

export default Tenbis;
