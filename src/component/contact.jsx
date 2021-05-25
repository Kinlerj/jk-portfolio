import React, { Component } from 'react'
import { motion } from "framer-motion"

import { Email, Link, Place, Phone } from '@material-ui/icons';
import '../css/home.css'

const contactInfo = [
    { icon: <Place />, details: 'Richland Hills, TX' },
    { icon: <Phone />, details: '(xxx)xxx-xxxx' },
    { icon: <Email />, details: 'kinlerj@gmail.com' },
    { icon: <Link />, details: 'www.linkedin.com/in/kinlerj/' }
  ];

export default class Contact extends Component {
    render() {

        const details = contactInfo.map(({ icon, details }) => {
            return <div className="contact-info">
                {icon}
                <p className="text-block">{details}</p>
            </div>
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
                    duration: 1,
                    when: "afterChildren"
                }}
            >
                <section className="contact page">
                    <div className="section-header">
                        <h2>Contact <strong className="color">Me</strong></h2>
                    </div>
                    <div className="left-column-big">
                        <form id="contact-form" data-toggle="validator" method="post" action="mail.php">
                            <div id="contact-form-result" />
                            <div className="sub-left-column">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name" name="name" required />
                                    <div className="help-block with-errors" />
                                </div>												
                            </div>
                            <div className="sub-right-column">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" name="email" required />
                                    <div className="help-block with-errors" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject" name="subject" required />
                                <div className="help-block with-errors" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Message" name="message" rows={5} required defaultValue={""} />
                                <div className="help-block with-errors" />
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" className="btn-custom btn-color">
                                Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="right-column-small">
                        <div className="contact-info-icons">
                            {details}
                        </div>
                    </div>
                </section>
            </motion.div>
        );
    }
}