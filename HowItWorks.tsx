
import React from 'react';
import { HOW_IT_WORKS_STEPS } from './constants';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white">آلية العمل</h2>
          <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
            نتبع عملية منظمة وشفافة لضمان تقديم أفضل الحلول التي تناسب احتياجاتك.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-700 -translate-x-1/2"></div>

          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div key={index} className="relative mb-12 md:mb-0">
              <div className="md:flex items-center">
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:text-left'}`}>
                  <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                </div>

                {/* Icon on Timeline */}
                <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-16 h-16 bg-slate-700 rounded-full items-center justify-center border-4 border-slate-900 text-emerald-400">
                    {step.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
