
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import WhyUs from './WhyUs';
import HowItWorks from './HowItWorks';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Footer from './Footer';

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
