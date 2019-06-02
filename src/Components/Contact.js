import React, { Component } from 'react';
import '../css/contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.contactRef = React.createRef();
  }

  componentDidMount() {
    this.props.passRefUpward('contactRef', this.contactRef);
  }

  render() {
    return (
      <section id="contact" ref={this.contactRef}>
        <div className="contactrow">
          <h1>Contact</h1>
          <ul>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:jeffliang@nevada.unr.edu?subject=Portfolio+Message"
              className="group"
            >
              <img alt="" src={require('../Assets/email_icon.svg')} />
              <li>Email</li>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/jeff-liang-9a81a0152/"
              className="group"
            >
              <img alt="" src={require('../Assets/linkedin_icon.svg')} />
              <li>LinkedIn</li>
            </a>
          </ul>
        </div>
      </section>
    );
  }
}

export default Contact;
