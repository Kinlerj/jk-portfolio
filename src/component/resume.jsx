import React, { Component } from 'react'
import { motion } from "framer-motion"
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { School, Work } from '@material-ui/icons';
import '../css/resume.css'

const timelineItems = [
    { icon: <School />, title: "University of Texas at Arlington", subtitle: "Bachelor's Degree: 2012 - 2016", text: "Lorem ipsum dolor sit amet, id electram reprimique his, dicta saepe oporteat eos an, esse erat doming at lam. Nec quodsi suscipiantur an, ad graece nemore ocurreret lam, agam ipsum meliore quo ut." },
    { icon: <Work />, title: "Bottle Rocket Studios", subtitle: "Jun 2016 - Nov 2016", text: "Lorem ipsum dolor sit amet, id electram reprimique his, dicta saepe oporteat eos an, esse erat doming at lam. Nec quodsi suscipiantur an, ad graece nemore ocurreret lam, agam ipsum meliore quo ut." },
    { icon: <Work />, title: "Wipro Limited", subtitle: "Feb 2017 - Mar 2018", text: "Lorem ipsum dolor sit amet, id electram reprimique his, dicta saepe oporteat eos an, esse erat doming at lam. Nec quodsi suscipiantur an, ad graece nemore ocurreret lam, agam ipsum meliore quo ut." },
    { icon: <Work />, title: "Allstate Corporation", subtitle: "Mar 2018 - Present", text: "Lorem ipsum dolor sit amet, id electram reprimique his, dicta saepe oporteat eos an, esse erat doming at lam. Nec quodsi suscipiantur an, ad graece nemore ocurreret lam, agam ipsum meliore quo ut." },
];

export default class Resume extends Component {
    render() {
        const items = timelineItems.map(({ icon, title, subtitle, text }) => {
            return <TimelineItem>
                <TimelineOppositeContent style={{display: 'none'}} />
                <TimelineSeparator>
                    <TimelineDot color="#293012">
                        {icon}
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div className="timeline-content sub-section">
                        <h4>{title}</h4>
                        <h5>{subtitle}</h5>
                        <p className="text-block">{text}</p>
                    </div>
                </TimelineContent>
            </TimelineItem>
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
                <div className="section-header">
                    <h2>My <strong className="color">Timeline</strong></h2>
                </div>
                <section className="resume page">
                    <Timeline className="timeline" align="left">
                        {items}
                    </Timeline>
                </section>
            </motion.div>
        );
    }
}

/*
<div className="section-header">
    <h2>My <strong className="color">Education</strong></h2>
</div>
<ul className="timeline">
    <li>
        <div className="timeline-content sub-section">
            <h4>CSS College Larkana</h4>
            <h5>
                <span>Masters Degree</span>
                <span>2013-2016</span>
            </h5>
            <p className="text-block">
            Lorem ipsum dolor sit amet, id electram reprimique his, dicta saepe oporteat eos an, esse erat doming at lam. Nec quodsi suscipiantur an, ad graece nemore ocurreret lam, agam ipsum meliore quo ut.
            </p>
        </div>
    </li>
    <li>
        <div className="timeline-content sub-section">
            <h4>CSS College Larkana</h4>
            <h5>
                <span>Masters Degree</span>
                <span>2013-2016</span>
            </h5>
            <p className="text-block">
            Lorem ipsum dolor sit amet, id electram reprimique his, dicta saepe oporteat eos an, esse erat doming at lam. Nec quodsi suscipiantur an, ad graece nemore ocurreret lam, agam ipsum meliore quo ut.
            </p>
        </div>
    </li>
    <li>
        <div className="timeline-content sub-section">
            <h4>CSS College Larkana</h4>
            <h5>
                <span>Masters Degree</span>
                <span>2013-2016</span>
            </h5>
            <p className="text-block">
            Lorem ipsum dolor sit amet, id electram reprimique his, dicta saepe oporteat eos an, esse erat doming at lam. Nec quodsi suscipiantur an, ad graece nemore ocurreret lam, agam ipsum meliore quo ut.
            </p>
        </div>
    </li>
</ul>
<div className="section-header">
    <h2>My <strong className="color">Experience</strong></h2>
</div>
<ul className="timeline">
    <li>
    <div className="timeline-content">
        <h4>CSS College Larkana</h4>
        <em>
        <span>Masters Degree</span>
        <span>2013-2016</span>
        </em>
        <p>
        Lorem ipsum dolor sit amet, id electram reprimique his, dicta saepe oporteat eos an, esse erat doming at lam. Nec quodsi suscipiantur an, ad graece nemore ocurreret lam, agam ipsum meliore quo ut.
        </p>
    </div>
    </li>
    <li>
    <div className="timeline-content">
        <h4>CSS College Larkana</h4>
        <em>
        <span>Masters Degree</span>
        <span>2013-2016</span>
        </em>
        <p>
        Lorem ipsum dolor sit amet, id electram reprimique his, dicta saepe oporteat eos an, esse erat doming at lam. Nec quodsi suscipiantur an, ad graece nemore ocurreret lam, agam ipsum meliore quo ut.
        </p>
    </div>
    </li>
    <li>
    <div className="timeline-content">
        <h4>CSS College Larkana</h4>
        <em>
        <span>Masters Degree</span>
        <span>2013-2016</span>
        </em>
        <p>
        Lorem ipsum dolor sit amet, id electram reprimique his, dicta saepe oporteat eos an, esse erat doming at lam. Nec quodsi suscipiantur an, ad graece nemore ocurreret lam, agam ipsum meliore quo ut.
        </p>
    </div>
    </li>
</ul>
*/