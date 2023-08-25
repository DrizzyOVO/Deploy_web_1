"use client"; 
import styles from "./style.module.scss"; 
import { AnimatePresence } from "framer-motion"; 
import { useRef, useState, useLayoutEffect } from "react"; 
import Nav from "./nav/index";  
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";  
import { scale } from "./animation";
import Button from "../common/Button"; 
import Magnetic from "../common/Magnetic"; 

export default function index(){
    const [isActive, setIsActive] = useState(false); 
    const burger = useRef(null); 

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger); 
        gsap.to(burger.current, {
            scrollTrigger: {
                trigger: document.documentElement, 
                start: 0, 
                end: window.innerHeight, 
                onLeave: () => {gsap.to(burger.current, {scale: 1, duration: 0.55, ease: "power1.out"})}, 
                onEnterBack: () => {gsap.to(burger.current, {scale: 0, duration: 0.55, ease: "power1.out"})} 
            }
        })
    }, [])

    return (
        <div className={styles.header}> 
            <div className={styles.logo}>  
                <Magnetic>
                    <a>
                        <div className={styles.copyright}>©</div>
                        <div className={styles.name}>
                            <p className={styles.codeBy}>This is </p>   
                            <p className={styles.dennis}>Dizzy</p>  
                            <p className={styles.snellenberg}>IsSicko</p>   
                        </div> 
                    </a>
                </Magnetic>
            </div>
            <div className={styles.nav}>
                    <div className={styles.el}>
                        <Magnetic>
                            <a>Work</a> 
                        </Magnetic>
                        <div className={styles.indicator}></div>
                    </div>
                    <div className={styles.el}>
                        <Magnetic>
                            <a>About</a> 
                        </Magnetic>
                        <div className={styles.indicator}></div>
                    </div>
                    <div className={styles.el}>
                        <Magnetic>
                            <a>Contact</a> 
                        </Magnetic>
                        <div className={styles.indicator}></div>
                    </div>
            </div>
                <div ref={burger} className={styles.headerButtonContainer}>    
                    <Button onClick={() => {setIsActive(!isActive)}} className={`${styles.button}`}>  
                        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    </Button> 
                </div>
            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </div>
    )

}
