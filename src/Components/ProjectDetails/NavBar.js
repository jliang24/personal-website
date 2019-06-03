import React, { Component } from 'react';
import '../../css/projects/navbar.css';

class NavBar extends Component {
  render() {
    const { content, currentlySelected } = this.props;

    const moveLeftSlider = () => {
      switch (currentlySelected) {
        case 'Summary':
          return { left: '0%' };
        case 'Features':
          return { left: '33%' };
        case 'Stack':
          return { left: '66%' };
        default:
          return { left: '0%' };
      }
    };

    const activeItem = type => {
      return type === currentlySelected ? 'active item' : 'item';
    };

    return (
      <nav>
        <ul
          onClick={e =>
            this.props.changeContentType(content, e.target.innerHTML)
          }
        >
          <li className={activeItem('Summary')}>Summary</li>
          <li className={activeItem('Features')}>Features</li>
          <li className={activeItem('Stack')}>Stack</li>
          <div style={moveLeftSlider()} className="slider" />
        </ul>
      </nav>
    );
  }
}

export default NavBar;
