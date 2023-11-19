import React, { useRef, useEffect } from 'react';
import './App.css';
import { gsap, Power4, SteppedEase } from 'gsap'
import { Timeline } from 'gsap/gsap-core';
import { easeIn, easeInOut, easeOut, spring } from 'framer-motion';
import food1 from './food11.svg'
import food2 from './food22.svg'
import food3 from './food33.svg'
import food4 from './food44.svg'
import food5 from './food55.svg'
import food6 from './food66.svg'
import eyes from './eyefW.svg'
// import eyes from './eyesW.svg'

function App() {
    let con = useRef(null)
    let wof = useRef(null)
    let woo = useRef(null)
    let wh1 = useRef(null)
    let wh2 = useRef(null)
    let foo = useRef(null)
    let fo1 = useRef(null)
    let fo2 = useRef(null)
    let fo3 = useRef(null)
    let fo4 = useRef(null)
    let fo5 = useRef(null)
    // const t1 = new Timeline();

    useEffect(() => {
        let t1 = gsap.timeline();
        t1.to(wh1, {
            y: 0,

        }, '+=2')
            .to(wh1, {
                rotate: 10,
                ease: easeOut,
                duration: 0.1
            }, '+=0.6')
            .to(wh1, {
                rotate: -10,
                ease: easeOut,
                duration: 0.1
            })
            .to(wh1, {
                rotate: 0,
                ease: easeOut,
                duration: 0.1
            })
            .to(wh1, {
                rotate: 10,
                ease: easeOut,
                duration: 0.1
            })
            .to(wh1, {
                rotate: -10,
                ease: easeOut,
                duration: 0.1
            })
            .to(wh1, {
                rotate: 0,
                ease: easeOut,
                duration: 0.1
            })
            .to(wh1, {
                rotate: 10,
                ease: easeOut,
                duration: 0.1
            })
            .to(wh1, {
                rotate: -10,
                ease: easeOut,
                duration: 0.1
            })
            .to(wh1, {
                rotate: 0,
                ease: easeOut,
                duration: 0.1
            })
            .to(wh1, {
                rotate: 10,
                ease: easeOut,
                duration: 0.1
            })
            .to(wh1, {
                rotate: -10,
                ease: easeOut,
                duration: 0.1
            })
            .to(wh1, {
                rotate: 0,
                ease: easeOut,
                duration: 0.1
            }).to(wof, {
                width: 100,
                height: 100,
                duration: 1,
                background: 'radial-gradient(circle, rgb(15, 82, 163 / 92%) 0%, rgb(15, 82, 163) 100%)',
                width: window.innerWidth,
                height: window.innerHeight,
                borderRadius: 0,
                borderWidth: 0,
                ease: 'Power1.easeOut',
            }, '+=0.5').to(wh1, { color: 'wheat' })
            .to(woo, {
                height: 310,
                ease: "bounce"
            })
            .to(foo, {
                width: 80,
                height: 80,
            })
            .to(fo1, {
                width: 80,
                height: 80,
            })
            .to(fo2, {
                width: 90,
                height: 90,
            })
            .to(fo3, {
                width: 100,
                height: 100,
            })
            .to(fo4, {
                width: 60,
                height: 60,
            })
            .to(fo5, {
                width: 60,
                height: 60,
            })
    }, [])



    return (
        <div className='container' ref={el => con = el}>
            <div className="woof" ref={el => wof = el}>
                <div className="woofin" ref={el => woo = el}>
                    {/* <div className='texteye'> */}
                    <h1
                        ref={el => wh1 = el}
                    >Wooferzz</h1>
                    {/* <img src={eyes} alt="eye" className="eye" /> */}
                    <h2 ref={el => wh2 = el}>Coming Soon</h2>
                </div>
                {/* </div> */}


                <img src={food2} alt="f2" className='fo2' ref={el => fo1 = el} />
                <img src={food1} alt="f1" className='fo1' ref={el => foo = el} />
                <img src={food3} alt="f3" className='fo3' ref={el => fo2 = el} />
                <img src={food4} alt="f4" className='fo4' ref={el => fo3 = el} />
                <img src={food5} alt="f5" className='fo5' ref={el => fo4 = el} />
                <img src={food6} alt="f6" className='fo6' ref={el => fo5 = el} />
            </div>
        </div>
    )
}


export default App;