
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <HowItWorks />
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;
