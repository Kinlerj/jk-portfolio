import React, { Component } from 'react'
import '../css/home.css'

export default class Home extends Component {
    render() {
      return (
        <section className="home-page">
            <div className="home-text">
                <h1>I'm Joseph Kinler</h1>
                <p>
                    A Friend, Dude and Buddy From Earth
                </p>
                <div className="home-btns">
                    <a className="btn-custom" onClick={() => this.props.onItemClick("about")}>
                        Discover More
                    </a>
                    <a className="btn-custom" onClick={() => this.props.onItemClick("contact")}>
                        Hire Me
                    </a>
                </div>
            </div>
        </section>
      );
    }
  }