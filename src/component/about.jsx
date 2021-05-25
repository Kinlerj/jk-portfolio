import React, { Component } from 'react'
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import '../css/about.css'

const aboutButtons = [
    { to: '/experience', label: 'My Experience' },
    { to: '/contact', label: 'Contact Me' }
];

export default class About extends Component {
    render() {

        const links = aboutButtons.map(({ to, label }) => {
            return <NavLink
                className="btn-custom noselect"
                strict exact to={to}
                key={to}
                onClick={() => this.props.onItemClick}
            >{label}</NavLink>
        })

      return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={{
                initial: {opacity: 0},
                in: {opacity: 1},
                out: {opacity: 0}
            }}
            transition={{
                duration: 0.5,
                when: "afterChildren"
            }}
        >
            <section className="about page">
                <div className="section-header">
                    <h2>
                        I'm a <strong className="color">Programmer</strong>
                    </h2>
                </div>
                <div className="about-section">
                    <ul className="info-list left-column-small">
                        <li>
                            <strong>Name:</strong>
                            <span>Joseph Kinler</span>
                        </li>
                        <li>
                            <strong>Employment:</strong>
                            <span>Data Engineer at Allstate Insurance</span>
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
                    <div className="right-column-large">
                        <div className="text-block">
                            <p>
                                Qui ne indoctum electram vituperatoribus. Eirmod tamquam efficiendi mei cu, eum idque voluptatum ad, quo id tollit regione prompta. Cu probo iusto assentior eos, usu summo perpetua ne. Te suas phaedrum ullamcorper has. Ea mei ponderum rationibus dissentias. Inani phaedrum suavitate eu qui, vide aperiri facilis est eu. Te appetere cotidieque pro, duo eu assum facete instructior, no autem aeterno reprimique nec. Pri cu delectus adolescens, eruditi placerat cu sed, zril nonumes forensibus in eam. Eam ne dolore diceret pericula, in vis numquam pertinax. Vel ne dolorum eloquentiam, et vel senserit incorrupte neglegentur, pro cu audiam ocurreret reprimique.
                            </p>
                            <p>
                                Qui ne indoctum electram vituperatoribus. Eirmod tamquam efficiendi mei cu, eum idque voluptatum ad, quo id tollit regione prompta. Cu probo iusto assentior. Qui ne indoctum electram vituperatoribus. Eirmod tamquam efficiendi mei cu, eum idque voluptatum ad.
                            </p>
                        </div>
                        <div className="about-btns">
                            {links}
                        </div>
                    </div>
                </div>
                <div className="section-header">
                    <h2>
                        My <strong className="color">Skills</strong>
                    </h2>
                </div>
                <div className="skills-section">
                    <div className="left-column">
                        <div className="sub-section">
                            <h4>HTML/CSS</h4>
                            <h5>1 Years</h5>
                            <div className="bar">
                                <div className="percent" style={{width: ((1/5)*100)+'%'}} />
                            </div>
                        </div>
                        <div className="sub-section">
                            <h4>php</h4>
                            <h5>2 Years</h5>
                            <div className="bar">
                                <div className="percent" style={{width: ((2/5)*100)+'%'}} />
                            </div>
                        </div>
                        <div className="sub-section">
                            <h4>jQuery</h4>
                            <h5>2.5 Years</h5>
                            <div className="bar">
                                <div className="percent" style={{width: ((2.5/5)*100)+'%'}} />
                            </div>
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="sub-section">
                            <h4>JavaScript</h4>
                            <h5>3 Years</h5>
                            <div className="bar">
                                <div className="percent" style={{width: ((3/5)*100)+'%'}} />
                            </div>
                        </div>
                        <div className="sub-section">
                            <h4>WordPress</h4>
                            <h5>4 Years</h5>
                            <div className="bar">
                                <div className="percent" style={{width: ((4/5)*100)+'%'}} />
                            </div>
                        </div>
                        <div className="sub-section">
                            <h4>SEO</h4>
                            <h5>5 Years</h5>
                            <div className="bar">
                                <div className="percent" style={{width: ((5/5)*100)+'%'}} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
      );
    }
  }