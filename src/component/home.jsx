import React, { Component } from 'react'
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom';
import '../css/home.css'

const homeButtons = [
    { to: '/about', label: 'Discover More' }
    //{ to: '/contact', label: 'Hire Me' }
  ];

export default class Home extends Component {
    render() {

        const links = homeButtons.map(({ to, label }) => {
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
                <section className="home page">
                    <div className="home-text">
                        <h1>I'm Joseph Kinler</h1>
                        <p>
                            A Friend, Dude and Buddy From Earth
                        </p>
                        <div className="home-btns">
                            {links}
                        </div>
                    </div>
                </section>
            </motion.div>
        );
    }
}