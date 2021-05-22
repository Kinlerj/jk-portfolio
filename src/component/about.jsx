import React, { Component } from 'react'
import '../css/about.css'

export default class About extends Component {
    render() {
      return (
        <section className="about-page">
            <div className="about-section">
                <div className="section-header">
                    <h2>
                        I'm a <strong className="color">Programmer</strong>
                    </h2>
                </div>
                <ul className="info-list">
                    <li>
                        <strong>Name:</strong>
                        <span>Joseph Kinler</span>
                    </li>
                    <li>
                        <strong>Current Position:</strong>
                        <span>Data Engineer at Allstate</span>
                    </li>
                    <li>
                        <strong>Age:</strong>
                        <span>27 Years</span>
                    </li>
                    <li>
                        <strong>Country:</strong>
                        <span>United States</span>
                    </li>
                    <li>
                        <strong>Area:</strong>
                        <span>DFW, Texas</span>
                    </li>
                </ul>
                <div className="about-text">
                    <p>
                        Qui ne indoctum electram vituperatoribus. Eirmod tamquam efficiendi mei cu, eum idque voluptatum ad, quo id tollit regione prompta. Cu probo iusto assentior eos, usu summo perpetua ne. Te suas phaedrum ullamcorper has. Ea mei ponderum rationibus dissentias. Inani phaedrum suavitate eu qui, vide aperiri facilis est eu. Te appetere cotidieque pro, duo eu assum facete instructior, no autem aeterno reprimique nec. Pri cu delectus adolescens, eruditi placerat cu sed, zril nonumes forensibus in eam. Eam ne dolore diceret pericula, in vis numquam pertinax. Vel ne dolorum eloquentiam, et vel senserit incorrupte neglegentur, pro cu audiam ocurreret reprimique.
                    </p>
                    <p>
                        Qui ne indoctum electram vituperatoribus. Eirmod tamquam efficiendi mei cu, eum idque voluptatum ad, quo id tollit regione prompta. Cu probo iusto assentior. Qui ne indoctum electram vituperatoribus. Eirmod tamquam efficiendi mei cu, eum idque voluptatum ad.
                    </p>
                </div>
                <div className="about-btns">
                    <a href="#" className="btn-custom btn-color">
                        Download Resume
                    </a>
                    <a href="#" className="btn-custom btn-color">
                        Hire Me
                    </a>
                </div>
            </div>
            <div className="skills-section">
                <div className="section-header">
                    <h2>
                        My <strong className="color">Skills</strong>
                    </h2>
                </div>
                <div className="skill">
                    <h4>HTML/CSS</h4>
                    <div className="bar">
                        <div className="percent" style={{width: '85%'}} />
                    </div>
                </div>
                <div className="skill">
                    <h4>php</h4>
                    <div className="bar">
                        <div className="percent" style={{width: '90%'}} />
                    </div>
                </div>
                <div className="skill">
                    <h4>jQuery</h4>
                    <div className="bar">
                        <div className="percent" style={{width: '75%'}} />
                    </div>
                </div>
                <div className="skill">
                    <h4>JavaScript</h4>
                    <div className="bar">
                        <div className="percent" style={{width: '85%'}} />
                    </div>
                </div>
                <div className="skill">
                    <h4>WordPress</h4>
                    <div className="bar">
                        <div className="percent" style={{width: '90%'}} />
                    </div>
                </div>
                <div className="skill">
                    <h4>SEO</h4>
                    <div className="bar">
                        <div className="percent" style={{width: '75%'}} />
                    </div>
                </div>
            </div>
        </section>
      );
    }
  }

/*


*/