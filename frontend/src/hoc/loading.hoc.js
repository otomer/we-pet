import './loading.hoc.scss';

import React from 'react';

const LoadingHOC = propName => WrappedComponent => {
  return props => {
    const isEmpty = prop => {
      return prop === null || prop === undefined;
    };

    return isEmpty(props[propName]) ? (
      <div className="loader" />
    ) : (
      <WrappedComponent {...props} {...props} />
    );
  };
};

export default LoadingHOC;
