import React, { Component } from 'react';

import Projects from './Projects';
import Landing from './Landing';
import Contact from './Contact';
import '../css/style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.getRefs = this.getRefs.bind(this);
  }

  getRefs(name, childRef) {
    this.setState({
      [name]: childRef
    });
  }

  render() {
    return (
      <>
        <Landing appRefs={this.state} />
        <Projects passRefUpward={this.getRefs} />
        <Contact passRefUpward={this.getRefs} />
      </>
    );
  }
}

export default App;
