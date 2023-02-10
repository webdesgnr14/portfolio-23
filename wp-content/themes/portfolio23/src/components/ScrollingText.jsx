import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const ScrollingText = ({text}) => {
    const containerRef = useRef();

    useLayoutEffect(() => {
        if(containerRef.current) {
            gsap.to(containerRef.current, {x: +containerRef.current.offsetWidth, ease: 'power1.inOut', scrollTrigger: {trigger: containerRef.current, start: 'top bottom', end: '+=2000', scrub: 0.05, }})
        }
    }, [containerRef.current])

    return(
        <div className='scrolling-text'>
            <div className='scrolling-text--container'>
                <div className='scrolling-text--fragments' ref={containerRef}>
                    <span className="scrolling-text--fragment">{text}</span>
                    <span className="scrolling-text--fragment">{text}</span>
                    <span className="scrolling-text--fragment">{text}</span>
                    <span className="scrolling-text--fragment">{text}</span>
                    <span className="scrolling-text--fragment">{text}</span>
                    <span className="scrolling-text--fragment">{text}</span>
                    <span className="scrolling-text--fragment">{text}</span>
                    <span className="scrolling-text--fragment">{text}</span>
                    <span className="scrolling-text--fragment">{text}</span>
                </div>
            </div>
        </div>
    )
}