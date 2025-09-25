
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
          حوّل عمليات شركتك إلى النظام الآلي <br className="hidden md:block" /> ووفر الوقت والمال
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 animate-fade-in-up">
          نحن نستخدم منصة n8n القوية لإيجاد حلول مبتكرة لمشاكل عملك اليومية
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-emerald-500 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-emerald-600 transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          اطلب استشارة مجانية الآن
        </a>
      </div>
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default Hero;
