import React from "react"
import styles from '../styles/footer.module.scss';
import Image from "next/image";
import FaceBookIcon from '../assets/icons/facebook.png';
import LinkedInIcon from '../assets/icons/linkedin.png';
import TwitterIcon from '../assets/icons/twitter.png';
import SkypeIcon from '../assets/icons/skype.png';
import InstagramIcon from '../assets/icons/instagram.png';

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      {/* <div className={styles.outerWrapper}>
        <div className={styles.leftSide}>
          <p style={{ fontSize: '25px' }}>Newsletter Signup</p>
          <div className={styles.inputContainer}>
            <input />
            <button>Click me!</button>
          </div>
          <p style={{ fontSize: '25px' }}>Social Media Sharing</p>
        
        </div>
        <div className={styles.rightSide}>2</div>
      </div> */}
      <div className={styles.topWrapper}>
        <div>
          <p style={{ fontSize: '20px', fontWeight: 500 }}>Ecomm</p>
          <p style={{ fontWeight: 500, fontStyle: 'italic' }}>We got it all!</p>
        </div>
        <div>
          <p>Weebly Themes</p>
          <p>Pre-sale FAQ</p>
          <p>Submit a ticket</p>
        </div>
        <div>
          <p>Services</p>
          <p>Theme tweak</p>
        </div>
        <div>
          <p>Showcase</p>
          <p>Widgetkit</p>
          <p>Support</p>
        </div>
        <div>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Affiliates</p>
          <p>Resources</p>
        </div>
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.socialContainer}>
          <div className={styles.iconWrapper}>
            <Image src={FaceBookIcon} alt="facebook icon" width={40} height={40} />
          </div>
          <div className={styles.iconWrapper}>
            <Image src={LinkedInIcon} alt="linkedin icon" width={40} height={40} />
          </div>
          <div className={styles.iconWrapper}>
            <Image src={TwitterIcon} alt="twitter icon" width={40} height={40} />
          </div>
          <div className={styles.iconWrapper}>
            <Image src={SkypeIcon} alt="skype icon" width={40} height={40} />
          </div>
          <div className={styles.iconWrapper}>
            <Image src={InstagramIcon} alt="instagram icon" width={40} height={40} />
          </div>
        </div>
      </div>
      <p style={{ fontWeight: '300', textAlign: 'center', fontStyle: 'italic' }}>Copyright.All rights reserved {new Date().getFullYear()}</p>
    </div>
  )
}