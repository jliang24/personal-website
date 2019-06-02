import React, { Component } from 'react';

class ProjectLinks extends Component {
  render() {
    const { webLink, gitLink, webIco, webName } = this.props;

    return (
      <div className="links">
        <hr />
        <p>
          <strong>Website:</strong>
          <a target="_blank" href={webLink}>
            {webName}
            <img src={webIco} />
          </a>
        </p>
        <p>
          <strong>Github:</strong>
          <a target="_blank" href={gitLink}>
            jliang24
            <img src={require('../../Assets/github_icon.png')} />
          </a>
        </p>
      </div>
    );
  }
}

export default ProjectLinks;
