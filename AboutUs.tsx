
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6">نبذة عنا</h2>
          <p className="text-lg text-slate-300 leading-loose">
            في <span className="text-emerald-400 font-semibold">إنجاز للأتمتة</span>، نؤمن بأن التكنولوجيا هي المفتاح لفتح إمكانيات غير محدودة للشركات. نحن فريق من الخبراء في مجال الأتمتة، مقرنا في مسقط، عمان، وشغفنا هو مساعدة الشركات من جميع الأحجام على تحويل تحدياتها التشغيلية إلى فرص للنمو والابتكار. باستخدام منصة n8n الرائدة، نصمم حلولًا مخصصة تزيد من الكفاءة، تقلل التكاليف، وتمكنك من التركيز على أهدافك الاستراتيجية.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
