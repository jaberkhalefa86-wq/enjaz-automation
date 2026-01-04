import React from 'react';
// 1. حذفنا استدعاء types غير الموجود
// import type { NavLink, Service, AccordionItem, HowItWorksStep } from './types'; 
// 2. عدلنا المسار ليأخذ الايقونات من نفس المجلد
import { AutomationIcon, IntegrationIcon, ReportingIcon, AnalysisIcon, DesignIcon, ExecutionIcon, SupportIcon } from './Icons';

// عرفنا الانواع هنا مباشرة لكي لا يطلب ملف خارجي
type NavLink = { href: string; label: string; };
type Service = { icon: React.ReactNode; title: string; description: string; };
type AccordionItem = { question: string; answer: string; };
type HowItWorksStep = { number: number; icon: React.ReactNode; title: string; description: string; };

export const NAV_LINKS: NavLink[] = [
  { href: '#services', label: 'خدماتنا' },
  { href: '#why-us', label: 'لماذا نحن؟' },
  { href: '#how-it-works', label: 'آلية العمل' },
  { href: '#about', label: 'عنا' },
  { href: '#contact', label: 'تواصل معنا' },
];

export const SERVICES: Service[] = [
    {
        icon: <AutomationIcon />,
        title: "أتمتة المهام اليومية",
        description: "تقليل الأخطاء البشرية وزيادة الكفاءة عبر أتمتة إدخال البيانات، الردود الآلية، إنشاء الفواتير، وغيرها من المهام المتكررة."
    },
    {
        icon: <IntegrationIcon />,
        title: "ربط التطبيقات والأنظمة",
        description: "ضمان تدفق البيانات بسلاسة بين جميع أقسام شركتك وتطبيقاتك المختلفة (CRM, ERP, تطبيقات التسويق) لتكوين نظام بيئي متكامل."
    },
    {
        icon: <ReportingIcon />,
        title: "بناء تقارير آلية",
        description: "احصل على رؤية واضحة ومحدثة لأداء عملك من خلال تقارير مخصصة يتم إنشاؤها وتوزيعها تلقائيًا لاتخاذ قرارات أفضل وأسرع."
    }
];

export const WHY_US_DATA: AccordionItem[] = [
    {
        question: "هل الأتمتة مكلفة؟",
        answer: "ننظر إلى الأتمتة كاستثمار ذو عائد مرتفع (High ROI). من خلال توفير ساعات العمل، تقليل الأخطاء، وزيادة الإنتاجية، فإن تكلفة الحلول التي نقدمها غالبًا ما يتم استردادها في وقت قصير، لتتحول بعد ذلك إلى أرباح صافية."
    },
    {
        question: "هل طبيعة عملي مناسبة للأتمتة؟",
        answer: "كل عمل لديه عمليات يمكن تحسينها. سواء كنت شركة ناشئة أو مؤسسة كبيرة، نقوم بتحليل عملياتك بدقة لتحديد الفرص المثالية للأتمتة وتقديم حلول مخصصة تناسب حجم وطبيعة عملك تمامًا."
    },
    {
        question: "هل التنفيذ معقد ويستغرق وقتًا طويلًا؟",
        answer: "مهمتنا هي جعل العملية بسيطة وسلسة بالنسبة لك. فريقنا من الخبراء يتولى كل شيء بدءًا من التحليل والتصميم، وصولًا إلى التنفيذ والربط والاختبار، مع إبقائك على اطلاع دائم بكل خطوة."
    }
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
    {
        number: 1,
        icon: <AnalysisIcon />,
        title: "الاستشارة والتحليل",
        description: "نجلس معك لفهم أهدافك وتحدياتك الحالية، ونقوم بتحليل عمليات عملك لتحديد أفضل فرص الأتمتة."
    },
    {
        number: 2,
        icon: <DesignIcon />,
        title: "تصميم الحل",
        description: "بناءً على التحليل، نقوم بتصميم خريطة طريق وحل أتمتة مخصص يلبي احتياجاتك بدقة ويحقق أهدافك."
    },
    {
        number: 3,
        icon: <ExecutionIcon />,
        title: "التنفيذ والربط",
        description: "يقوم فريقنا ببناء وتطبيق حل الأتمتة، وربط جميع تطبيقاتك وأنظمتك لضمان تدفق عمل سلس ومتكامل."
    },
    {
        number: 4,
        icon: <SupportIcon />,
        title: "الدعم والمتابعة",
        description: "بعد الإطلاق، نقدم الدعم المستمر ونراقب أداء النظام لضمان عمله بكفاءة وإجراء أي تحسينات مستقبلية."
    }
];
