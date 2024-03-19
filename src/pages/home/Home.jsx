import Nav from '@components/nav'
import Footer from '@components/footer'
import styles from './Home.module.css';
  
  const App = () => {
    return (
      <div className={ styles.background }>
        <Nav />
        <Footer />
      </div>
    );
  };
  
  export default App;
  