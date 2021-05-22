import React, { Component } from 'react'
import '../css/side_menu.css'

export default class SideMenu extends Component {
    render() {

        this.menuState = this.props.isOpen ? 'open' : 'closed'

      return (
        <div className={"side-menu-"+this.menuState}>
            <ul className="menu-items">
                <li>
                <a class="noselect" onClick={() => this.props.onItemClick("home")}>
                    HOME
                </a>
                </li>
                <li>
                <a class="noselect" onClick={() => this.props.onItemClick("about")}>
                    ABOUT
                </a>
                </li>
                <li>
                <a class="noselect" onClick={() =>this.props.onItemClick("resume")}>
                    RESUME
                </a>
                </li>
                <li>
                <a class="noselect" onClick={() =>this.props.onItemClick("portfolio")}>
                    PORTFOLIO
                </a>
                </li>
                <li>
                <a class="noselect" onClick={() => this.props.onItemClick("contact")}>
                    CONTACT
                </a>
                </li>
            </ul>
        </div>
      );
    }
  }

/*

*/