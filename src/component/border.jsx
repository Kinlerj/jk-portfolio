import React, { Component } from 'react'
import '../css/border.css'

export default class Border extends Component {
    render() {
      return (
        <div>
          <div className="page-border border-left" />
          <div className="page-border border-right" />
          <div className="page-border border-top" />
          <div className="page-border border-bottom" />
        </div>
      );
    }
  }