import React from "react";
import styles from "./Testimonials.module.css";
 
function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="https://i.pinimg.com/564x/b6/33/6e/b6336e54722e71e418e7f44a52bfca44.jpg"
            alt=""
          />
          <h4>Loopy</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="https://i.pinimg.com/564x/b7/07/ce/b707ce3237cc1ff27dd44cfe26946cca.jpg"
            alt=""
          />
          <h4>Macaronia</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="https://i.pinimg.com/564x/c4/d2/05/c4d205f72f6cf0d58d920473189d2060.jpg"
            alt=""
          />
          <h4>My melody</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}
 
export default Testimonials;