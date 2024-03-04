import React from 'react'
import styles from './Portfolio.module.css'
 
function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="https://i.pinimg.com/564x/c2/e5/76/c2e576cd41df89675bae670cca8285b5.jpg" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.pinimg.com/564x/ae/ea/86/aeea86faa8404293bca86e0780df3b89.jpg" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.pinimg.com/564x/88/7b/66/887b666c3565035a621850d386b90044.jpg" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.pinimg.com/564x/4c/9b/72/4c9b724a63bf1aec2c0143401df76adc.jpg" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.pinimg.com/564x/7f/ce/2f/7fce2ff3e023e0b9a5036add409f1aef.jpg" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.pinimg.com/564x/47/b5/b1/47b5b110076a8042affa7f3db2ff4141.jpg" alt="" />
            <p>Project Title</p>
        </div>
      </div>
    </div>
  )
}
 
export default Portfolio