import React from 'react';

export default contentType => {
  const renderSummary = () => {
    return (
      <div className="navContent">
        <p>
          This is a Airbnb clone that allows users to create and schedule
          lodging for guests.
        </p>
        <p>
          This was built with the MERN stack (MongoDB, Express, React, and
          Node.js).
        </p>
      </div>
    );
  };

  const renderFeatures = () => {
    return (
      <div className="navContent">
        <ul className="features">
          <li>Responsive design</li>
          <li>Messaging/Inbox system</li>
          <li>Building a REST API for consuming data</li>
          <li>Google Maps integration for displaying addresses</li>
          <li>Authetication (JSON Web Tokens)</li>
          <li>AWS Buckets for storing pictures</li>
          <li>CRUD operations on listings</li>
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
          <br />
          <li>AWS-S3 Bucket</li>
          <li>Semantic UI</li>
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
