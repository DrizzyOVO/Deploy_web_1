import styles from './style.module.scss';
import Magnetic from "../../../common/Magnetic"; 

export default function index() {
  return (
    <div className={styles.nav}> 
      {/* <Magnetic>
        <a>Awwwards</a>  
      </Magnetic>
      <Magnetic>
        <a>Instagram</a>
      </Magnetic> 
      <Magnetic>
        <a>Dribble</a>
      </Magnetic> 
      <Magnetic>
        <a>LinkedIn</a>
      </Magnetic> */}


        <div className={styles.el}>
          <Magnetic> 
              <a>Awwwards</a>
          </Magnetic>  
          <div className={styles.indicator}></div> 
        </div>

        <div className={styles.el}>  
          <Magnetic> 
              <a>Instagram</a>
          </Magnetic>  
          <div className={styles.indicator}></div> 
        </div>

        <div className={styles.el}>  
          <Magnetic> 
              <a>Dribbble</a>
          </Magnetic> 
          <div className={styles.indicator}></div> 
        </div>

        <div className={styles.el}>  
          <Magnetic> 
              <a>Linkedin</a>
          </Magnetic> 
          <div className={styles.indicator}></div> 
        </div>

    </div>
  )
}

