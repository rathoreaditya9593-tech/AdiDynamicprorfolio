import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
      offset: 100,
      delay: 200, 
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero  /> 
      <About />
      <Skills />
      <Works /> 
      <Services /> 
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;