import React from 'react';

export default contentType => {
  const renderSummary = () => {
    return (
      <div className="navContent">
        <p>
          This is a a client side React web app that allows users to get the
          current weather and the next five days.
        </p>
      </div>
    );
  };

  const renderFeatures = () => {
    return (
      <div className="navContent">
        <ul className="features">
          <li>Uses Google's geolocation API to determine current location</li>
          <li>Uses OpenWeatherMap's API to see next five day cycle</li>
        </ul>
      </div>
    );
  };

  const renderStack = () => {
    return (
      <div className="navContent">
        <h3>Languages</h3>
        <hr />
        <ul className="stack">
          <li>HTML </li>
          <li>CSS</li>
          <li>Javascript</li>
        </ul>
        <h3>Tools</h3>
        <hr />
        <ul className="stack">
          <li>React</li>
          <li>Semantic UI</li>
        </ul>
      </div>
    );
  };

  switch (contentType) {
    case 'Features':
      return renderFeatures();
    case 'Stack':
      return renderStack();
    default:
      return renderSummary();
  }
};
