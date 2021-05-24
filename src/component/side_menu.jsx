import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import '../css/side_menu.css'

const menuOptions = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/resume', label: 'Resume' }
  ];

export default class SideMenu extends Component {
    render() {

        this.menuState = this.props.isOpen ? 'open' : 'closed'

        const links = menuOptions.map(({ to, label }) => {
            return <li><NavLink
                className="noselect"
                strict exact to={to}
                key={to}
                onClick={this.props.onItemClick}
            >{label}</NavLink></li>
        })

      return (
        <div className={"side-menu-"+this.menuState}>
            <nav className="menu-items">
                {links}
            </nav>
        </div>
      );
    }
}