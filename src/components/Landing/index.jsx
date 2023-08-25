import Image from 'next/image';
import styles from './style.module.scss';
import { useRef, useEffect } from 'react';
import gsap from 'gsap'; 
import { slideUp } from './animation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';  

export default function Home() { 

  const slider = useRef(null); 
  const firstText = useRef(null); 
  const secondtext = useRef(null); 
  let xPercent = 0; 
  let direction = 1; 

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger); 
    requestAnimationFrame(animation);  

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement, 
        start: 0, 
        end: window.innerHeight,  
        scrub: 0.25, 
        onUpdate: e => direction = e.direction * -1
      }, 
      x: "-=300px",
    })

  }, [])

  const animation = () => {
    if (xPercent <= -100){
      xPercent = 0; 
    }
    if (xPercent > 0){
      xPercent = -100; 
    }
    gsap.set(firstText.current, {xPercent: xPercent}) 
    gsap.set(secondtext.current, {xPercent: xPercent}) 
    xPercent += 0.1 * direction; 
    requestAnimationFrame(animation); 
  }


  return (
    <main className={styles.main}>
      <Image 
        fill={true}  
        src="/images/background_cpy.jpg"
        alt="image"  
      />
      <div className={styles.sliderContainer}> 
        <div ref={slider} className={styles.slider}>    
          <p ref={firstText}>Freelance Developer -</p> 
          <p ref={secondtext}>Freelance Developer -</p>  
        </div>
      </div>
    </main>
  )
}
