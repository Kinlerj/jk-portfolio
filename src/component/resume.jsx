import React, { Component } from 'react'
import { motion } from "framer-motion"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import { MdSchool, MdWork } from "react-icons/md";
import 'react-vertical-timeline-component/style.min.css';
import '../css/resume.css'

const timelineItems = [
    { icon: <MdSchool />, title: "University of Texas at Arlington", subtitle: "Bachelor's Degree: 2012 - 2016", text: "Lorem ipsum dolor sit amet, id electram reprimique his, dicta saepe oporteat eos an, esse erat doming at lam. Nec quodsi suscipiantur an, ad graece nemore ocurreret lam, agam ipsum meliore quo ut." },
    { icon: <MdWork />, title: "Bottle Rocket Studios", subtitle: "Jun 2016 - Nov 2016", text: "Lorem ipsum dolor sit amet, id electram reprimique his, dicta saepe oporteat eos an, esse erat doming at lam. Nec quodsi suscipiantur an, ad graece nemore ocurreret lam, agam ipsum meliore quo ut." },
    { icon: <MdWork />, title: "Wipro Limited", subtitle: "Feb 2017 - Mar 2018", text: "Lorem ipsum dolor sit amet, id electram reprimique his, dicta saepe oporteat eos an, esse erat doming at lam. Nec quodsi suscipiantur an, ad graece nemore ocurreret lam, agam ipsum meliore quo ut." },
    { icon: <MdWork />, title: "Allstate Corporation", subtitle: "Mar 2018 - Present", text: "Lorem ipsum dolor sit amet, id electram reprimique his, dicta saepe oporteat eos an, esse erat doming at lam. Nec quodsi suscipiantur an, ad graece nemore ocurreret lam, agam ipsum meliore quo ut." },
];

export default class Resume extends Component {
    render() {

        const items = timelineItems.map(({ icon, title, subtitle, text }) => {
            return <VerticalTimelineElement
                    className="timeline-content"
                    contentStyle={{ background: '#293012', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #293012' }}
                    position="right"
                    iconStyle={{ background: '#293012', color: '#fff' }}
                    icon={icon}
                >
                    <h4>{title}</h4>
                    <h5>{subtitle}</h5>
                    <p>{text}</p>
                </VerticalTimelineElement>
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
                    <VerticalTimeline className="timeline" layout="1-column-left">
                        {items}
                    </VerticalTimeline>
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