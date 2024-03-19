import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faYoutube,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={ styles.footer }>
      <div className={ styles.icons }>
        <a href="https://youtube.com/c/DonizetiCamargoOficial" target="_blank" rel="noopener noreferrer" className={ styles.icon }>
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://www.facebook.com/donizeti.camargo.37" target="_blank" rel="noopener noreferrer" className={ styles.icon }>
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://open.spotify.com/intl-pt/artist/6cMq7NYafvIGCCwWqfkVRh?si=5Pj2nmIGSAueIYFWPDfCqQ" target="_blank" rel="noopener noreferrer" className={ styles.icon }>
          <FontAwesomeIcon icon={faSpotify} />
        </a>
        <a href="https://instagram.com/cantordonizeti" target="_blank" rel="noopener noreferrer" className={ styles.icon }>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.tiktok.com/@cantordonizeti?_t=8knOFOSfyOD&_r=1" target="_blank" rel="noopener noreferrer" className={ styles.icon }>
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
