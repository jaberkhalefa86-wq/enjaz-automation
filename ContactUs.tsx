
import React, { useState } from 'react';
import { PhoneIcon, LocationIcon, ClockIcon } from './Icons';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(formData.name && formData.email && formData.message) {
        setFormStatus('شكراً لك! تم استلام رسالتك بنجاح.');
        setFormData({ name: '', email: '', message: '' });
        // Here you would typically send the form data to a server
    } else {
        setFormStatus('يرجى ملء جميع الحقول.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">تواصل معنا</h2>
          <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
            هل لديك سؤال أو مشروع؟ نحن هنا للمساعدة.
          </p>
        </div>
        <div className="bg-slate-800 rounded-xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">معلومات التواصل</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-emerald-400 mr-4">
                    <PhoneIcon />
                  </div>
                  <div>
                    <h4 className="text-lg text-white font-semibold">رقم الهاتف</h4>
                    <p className="text-slate-400" dir="ltr">+96878358648</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-emerald-400 mr-4">
                    <LocationIcon />
                  </div>
                  <div>
                    <h4 className="text-lg text-white font-semibold">الموقع</h4>
                    <p className="text-slate-400">مسقط، عمان (الخدمة متاحة أونلاين)</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-emerald-400 mr-4">
                    <ClockIcon />
                  </div>
                  <div>
                    <h4 className="text-lg text-white font-semibold">ساعات العمل</h4>
                    <p className="text-slate-400">متوفرون لخدمتك 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">أرسل لنا رسالة</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">الاسم</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="w-full bg-slate-700 border border-slate-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">البريد الإلكتروني</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="w-full bg-slate-700 border border-slate-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">الرسالة</label>
                  <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} className="w-full bg-slate-700 border border-slate-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500" required></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-emerald-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-emerald-600 transition-colors duration-300">
                    إرسال
                  </button>
                </div>
                {formStatus && <p className="text-center text-emerald-400 mt-4">{formStatus}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
