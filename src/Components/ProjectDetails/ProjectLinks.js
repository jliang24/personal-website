import React, { Component } from 'react';

class ProjectLinks extends Component {
  render() {
    const { webLink, gitLink, webIco, webName } = this.props;

    return (
      <div className="links">
        <hr />
        <p>
          <strong>Website:</strong>
          <a rel="noopener noreferrer" target="_blank" href={webLink}>
            {webName}
            <img alt="" src={webIco} />
          </a>
        </p>
        <p>
          <strong>Github:</strong>
          <a rel="noopener noreferrer" target="_blank" href={gitLink}>
            jliang24
            <img alt="" src={require('../../Assets/github_icon.png')} />
          </a>
        </p>
      </div>
    );
  }
}

export default ProjectLinks;
