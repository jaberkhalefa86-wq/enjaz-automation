
import React from 'react';
import { SERVICES } from './constants';
import type { Service } from './types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-emerald-500/20 transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
        <div className="flex-shrink-0 w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mb-6 text-emerald-400">
           {service.icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
        <p className="text-slate-400 leading-relaxed flex-grow">{service.description}</p>
    </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">كيف يمكننا مساعدتك؟</h2>
          <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
            نقدم حلول أتمتة متكاملة لتحسين كفاءة أعمالك وزيادة إنتاجيتك.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
                <ServiceCard key={index} service={service} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
