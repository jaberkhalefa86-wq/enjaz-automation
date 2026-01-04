
import React, { useState } from 'react';
import { WHY_US_DATA } from './constants';
import { ChevronDownIcon } from './Icons';
import type { AccordionItem } from './types';

const Accordion: React.FC<{ item: AccordionItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-700">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-right py-6 text-xl font-semibold text-white focus:outline-none"
            >
                <span>{item.question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDownIcon />
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <p className="pb-6 pr-4 text-slate-400 leading-relaxed">{item.answer}</p>
            </div>
        </div>
    );
};

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-4xl font-extrabold text-white mb-6">لماذا تختار إنجاز للأتمتة؟</h2>
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                    نحن لا نقدم مجرد خدمة، بل نقدم شراكة حقيقية مبنية على الخبرة، الثقة، والنتائج الملموسة. هدفنا هو تبسيط عملياتك لتمكينك من التركيز على ما يهم حقًا: نمو أعمالك.
                </p>
                <img src="https://picsum.photos/600/400" alt="Team discussing automation" className="rounded-lg shadow-lg"/>
            </div>
            <div className="max-w-2xl mx-auto w-full">
                {WHY_US_DATA.map((item, index) => (
                    <Accordion key={index} item={item} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
