import React, { Component } from 'react';
import '../css/projects/main.css';

import NavBar from './ProjectDetails/NavBar';
import Airbnb from './ProjectDetails/Airbnb';
import Weather from './ProjectDetails/Weather';
import Noteskeeper from './ProjectDetails/Noteskeeper';
import ProjectLinks from './ProjectDetails/ProjectLinks';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Airbnb: 'Summary',
      Noteskeeper: 'Summary',
      Weather: 'Summary'
    };
    this.projectRef = React.createRef();
  }

  changeContentType = (projectName, value) => {
    this.setState({ [projectName]: value });
  };

  componentDidMount() {
    this.props.passRefUpward('projectRef', this.projectRef);
  }

  render() {
    return (
      <section ref={this.projectRef} id="projects">
        <h1 className="underline">Projects</h1>
        <div id="card-group" className="container">
          <div className="card">
            <img src={require('../Assets/Noteskeeper Demo.jpg')} />
            <h2>Noteskeeper</h2>
            <NavBar
              content={'Noteskeeper'}
              changeContentType={this.changeContentType}
              currentlySelected={this.state.Noteskeeper}
            />
            {Noteskeeper(this.state.Noteskeeper)}
            <ProjectLinks
              webName="Noteskeeper"
              webLink={'https://noteskeeper.herokuapp.com/'}
              gitLink={'https://github.com/jliang24/Noteskeeper'}
              webIco={require('../Assets/Airbnb.ico')}
            />
          </div>
          <div className="card">
            <img src={require('../Assets/Listing Demo.jpg')} />
            <h2>Airbnb Clone</h2>
            <NavBar
              content={'Airbnb'}
              changeContentType={this.changeContentType}
              currentlySelected={this.state.Airbnb}
            />
            {Airbnb(this.state.Airbnb)}
            <ProjectLinks
              webName="Airbnb"
              webLink={'https://airbnb-clone-jeff.herokuapp.com/'}
              gitLink={'https://github.com/jliang24/airbnb_clone'}
              webIco={require('../Assets/Airbnb.ico')}
            />
          </div>
          <div className="card">
            <img src={require('../Assets/Weather Demo.jpg')} />
            <h2>Weather App</h2>
            <NavBar
              content={'Weather'}
              changeContentType={this.changeContentType}
              currentlySelected={this.state.Weather}
            />
            {Weather(this.state.Weather)}
            <ProjectLinks
              webName="Weather App"
              webLink={'https://liang-weather-app.herokuapp.com/'}
              gitLink={'https://github.com/jliang24/weather_app'}
              webIco={require('../Assets/Airbnb.ico')}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
