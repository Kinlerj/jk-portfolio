import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import Border from './component/border'
import MenuButton from './component/menu_button'
import SideMenu from './component/side_menu'

import Home from './component/home'
import About from './component/about'

class App extends Component{
  constructor(props) {
    super(props);
  
    this.state = {
       page: "home",
       isMenuOpen: false
    }
 }

 menuIconClick() {
   this.setState({isMenuOpen: !this.state.isMenuOpen});
 }

 menuItemClick = menuSelection => {
   console.log("menu selection: "+menuSelection)
  this.setState({page: menuSelection, isMenuOpen: false});
 }

  render() { 

    let displayPage;
    
    switch(this.state.page) {
      case "home":
      default:
        displayPage = <Home onItemClick={this.menuItemClick} />
        break;
      case "about":
        displayPage = <About />
        break;
    }
    
    return (
      <div className="App">
        <Border />
        <MenuButton onIconClick={this.menuIconClick.bind(this)} />
        <SideMenu isOpen={this.state.isMenuOpen} onItemClick={this.menuItemClick} />
        {displayPage}
      </div>
    )
  }
}

export default App;
