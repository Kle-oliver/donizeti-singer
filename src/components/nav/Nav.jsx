import styles from './Nav.module.css';

export default function Nav() {
    return (
      <nav className={ styles.nav }>
        <a href="#" className={ styles.tab }>sobre</a>
        <a href="#" className={ styles.tab }>videos</a>
        <a href="#" className={ styles.tab }>ínicio</a>
        <a href="#" className={ styles.tab }>agenda</a>
        <a href="#" className={ styles.tab }>contato</a>
      </nav>
    );
  }