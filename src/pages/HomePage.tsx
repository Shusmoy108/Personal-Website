import { useEffect } from 'react';
import AppAppBar from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';


function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
     <AppAppBar/>
     <Hero/>
     <Footer/>
    </div>
  );
}

export default HomePage;
