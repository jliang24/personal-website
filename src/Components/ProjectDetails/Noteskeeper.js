import React from 'react';

export default contentType => {
  const renderSummary = () => {
    return (
      <div className="navContent">
        <p>
          This is a Trello clone that allows users to create boards and keep
          track of notes.
        </p>
        <p>In addition, you can drag fields and reorder cards.</p>
      </div>
    );
  };

  const renderFeatures = () => {
    return (
      <div className="navContent">
        <ul className="features">
          <li>CRUD operations on notes/boards </li>
          <li>Building a REST API for consuming data</li>
          <li>React Beautiful DND integration</li>
          <li>Authetication (Google OAuth)</li>
          <li>Form Validation with Redux-Form</li>
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
          <li>Redux</li>
          <li>NodeJS</li>
          <li>Github</li>
          <li>Express</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Database</h3>
        <hr />
        <ul className="stack">
          <li>MongoDB</li>
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
