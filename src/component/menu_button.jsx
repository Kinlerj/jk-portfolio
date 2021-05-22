import React, { Component } from 'react'
import '../css/menu_button.css'

export default class MenuButton extends Component {
    render() {
      return (
        <a onClick={this.props.onIconClick} className="menu-btn">
            <span className="lines">
                <span className="l1" />
                <span className="l2" />
                <span className="l3" />
            </span>
        </a>
      );
    }
  }