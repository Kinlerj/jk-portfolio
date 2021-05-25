import React, { Component } from 'react'
import { AnimatePresence } from "framer-motion"
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import './App.css';

import Border from './component/border'
import MenuButton from './component/menu_button'
import SideMenu from './component/side_menu'

import Home from './component/home'
import About from './component/about'
import Experience from './component/experience'
import Contact from './component/contact'

class App extends Component{
  constructor(props) {
    super(props);
  
    this.state = {
       showPage: false,
       isMenuOpen: false
    }
 }

 menuIconClick = () => {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
 }

 menuItemClick = () => {
   this.setState({isMenuOpen: false})
 }

  render() {
    
    return (
      <BrowserRouter>
        <div className="App">
          <Border />
          <MenuButton onIconClick={this.menuIconClick} />
          <SideMenu isOpen={this.state.isMenuOpen} onItemClick={this.menuItemClick}/>
          <Route render={({ location }) => {
            return (
              <AnimatePresence>
                <Switch location={location} key={location.pathname}>
                  <Route exact path="/" component={Home}/>
                  <Route path="/about" component={About} />
                  <Route path="/experience" component={Experience} />
                  <Route path="/contact" component={Contact} />
                </Switch>
              </AnimatePresence>
            )
          }}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
