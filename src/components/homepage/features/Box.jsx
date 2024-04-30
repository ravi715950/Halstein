import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const Box = (props) => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div className="mx-5 my-5">
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            {counterOn &&
            <span className="digit trasparent-white-color">
            <CountUp start={0} duration={2} end={props.digit} /></span>
}
            <h5 className="white-color">{props.title}</h5>
        </ScrollTrigger>
        </div>
    );
}

export default Box;