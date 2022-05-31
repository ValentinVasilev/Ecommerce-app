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
      <div className={styles.outerWrapper}>
        <div className={styles.leftSide}>
          <p style={{ fontSize: '25px' }}>Newsletter Signup</p>
          <div className={styles.inputContainer}>
            <input />
            <button>Click me!</button>
          </div>
          <p style={{ fontSize: '25px' }}>Social Media Sharing</p>
          <div className={styles.socialContainer}>
            <div>
              <Image src={FaceBookIcon} alt="facebook icon" width={32} height={32}/>
            </div>
            <div>
              <Image src={LinkedInIcon} alt="linkedin icon" width={32} height={32}/>
            </div>
            <div>
              <Image src={TwitterIcon} alt="twitter icon" width={32} height={32}/>
            </div>
            <div>
              <Image src={SkypeIcon} alt="skype icon" width={32} height={32}/>
            </div>
            <div>
              <Image src={InstagramIcon} alt="instagram icon" width={32} height={32}/>
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>2</div>
      </div>
    </div>
  )
}