import styles from './Nav.module.css';

export default function Nav() {
    return (
      <nav>
        <a href="#" className={ styles.nav }>sobre</a>
        <a href="#" className={ styles.nav }>videos</a>
        <a href="#" className={ styles.nav }>ínicio</a>
        <a href="#" className={ styles.nav }>agenda</a>
        <a href="#" className={ styles.nav }>contato</a>
      </nav>
    );
  }