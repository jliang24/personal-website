import React, { Component } from 'react';
import '../css/landing.css';

class Landing extends Component {
  scrollToRef(ref) {
    const { offsetWidth, offsetTop } = ref;
    return offsetWidth > 768
      ? window.scrollTo(0, offsetTop - 160)
      : window.scrollTo(0, offsetTop - 50);
  }

  render() {
    const { appRefs } = this.props;

    return (
      <>
        <section id="landing">
          <div className="container">
            <h1>Hi! I'm Jeff Liang, a web developer.</h1>
            <h1 className="secondary">
              I enjoy designing and developing challenging projects to a
              professional level.
            </h1>
            <div className="fade-in">
              <nav>
                <ul>
                  <div
                    onClick={() => this.scrollToRef(appRefs.projectRef.current)}
                    className="group"
                  >
                    <img alt="" src={require('../Assets/project_icon.svg')} />
                    <li>Projects</li>
                  </div>
                  <a
                    className="group"
                    href="https://github.com/jliang24"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="" src={require('../Assets/github_icon.png')} />
                    <li>Github</li>
                  </a>
                  <a
                    className="group"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={require('../Assets/Liang Resume Portfolio.pdf')}
                  >
                    <img alt="" src={require('../Assets/resume_icon.png')} />
                    <li>Resume</li>
                  </a>
                  <div
                    onClick={() => this.scrollToRef(appRefs.contactRef.current)}
                    className="group"
                  >
                    <img alt="" src={require('../Assets/contact_icon.png')} />
                    <li>Contact</li>
                  </div>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Landing;
