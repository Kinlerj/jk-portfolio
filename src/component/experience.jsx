import React, { Component } from 'react'
import { motion } from "framer-motion"
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import { ExpandMore, ExpandLess, School, Work } from '@material-ui/icons';
import '../css/experience.css'

const timelineItems = [
    { icon: <School />, title: "University of Texas at Arlington", subtitle: "Bachelor's Degree: 2012 - 2016", text: "Lorem ipsum dolor sit amet, id electram reprimique his, dicta saepe oporteat eos an, esse erat doming at lam. Nec quodsi suscipiantur an, ad graece nemore ocurreret lam, agam ipsum meliore quo ut." },
    { icon: <Work />, title: "Bottle Rocket Studios", subtitle: "Jun 2016 - Nov 2016", text: "Lorem ipsum dolor sit amet, id electram reprimique his, dicta saepe oporteat eos an, esse erat doming at lam. Nec quodsi suscipiantur an, ad graece nemore ocurreret lam, agam ipsum meliore quo ut." },
    { icon: <Work />, title: "Wipro Limited", subtitle: "Feb 2017 - Mar 2018", text: "Lorem ipsum dolor sit amet, id electram reprimique his, dicta saepe oporteat eos an, esse erat doming at lam. Nec quodsi suscipiantur an, ad graece nemore ocurreret lam, agam ipsum meliore quo ut." },
    { icon: <Work />, title: "Allstate Corporation", subtitle: "Mar 2018 - Present", text: "Lorem ipsum dolor sit amet, id electram reprimique his, dicta saepe oporteat eos an, esse erat doming at lam. Nec quodsi suscipiantur an, ad graece nemore ocurreret lam, agam ipsum meliore quo ut." },
];

export default class Experience extends Component {
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
                    duration: 1,
                    when: "afterChildren"
                }}
            >
                <section className="resume page">
                    <div className="section-header">
                        <h2>My <strong className="color">Experience</strong></h2>
                    </div>
                    <Timeline className="timeline" align="left">
                        <TimelineItem>
                            <TimelineOppositeContent style={{display: 'none'}} />
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="#293012">
                                    <ExpandMore />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className="timeline-content sub-section">
                                    <h5>The start of the universe...</h5>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                            {items}
                        <TimelineItem>
                            <TimelineOppositeContent style={{display: 'none'}} />
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="#293012" >
                                    <ExpandLess />
                                </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className="timeline-content sub-section">
                                    <h5>The end of time...</h5>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </section>
            </motion.div>
        );
    }
}