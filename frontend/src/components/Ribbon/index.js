import './ribbon.scss';

import React from 'react';

const Ribbon = () => {
  return (
    <div className="corner-ribbon bottom-right sticky green shadow">
      <a
        href="https://wetasty-api.herokuapp.com/api-docs/"
        title="API Docs - Swagger UI"
        target="_blank"
      >
        <img alt="Swagger UI" src="/assets/images/swagger.png" />
      </a>
      <a
        href="https://github.com/otomer/we-pet"
        title="Github Repository"
        target="_blank"
      >
        <img alt="Github" src="/assets/images/github.png" />
      </a>
    </div>
  );
};

export default Ribbon;
