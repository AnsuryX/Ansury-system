
import React from 'react';
import { Layout, BrainCircuit, MessageSquareQuote, RefreshCcw, LayoutTemplate, Bot, Zap, LineChart } from 'lucide-react';
import { Service, CaseStudy, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'conversion-pages',
    title: { en: 'Explosive Growth Layouts', ar: 'تخطيطات النمو المتفجرة' },
    description: {
      en: 'Stop losing half your visitors to slow speeds. We build high-performance pages that turn Qatari traffic into immediate bookings.',
      ar: 'توقف عن فقدان نصف زوارك بسبب السرعات البطيئة. نحن نبني صفحات عالية الأداء تحول الزيارات القطرية إلى حجوزات فورية.'
    },
    icon: 'LayoutTemplate'
  },
  {
    id: 'ai-qualification',
    title: { en: 'Filter Out Tire-Kickers', ar: 'تصفية المتفرجين' },
    description: {
      en: 'Your sales team speaks only to ready-to-pay investors. Our AI filters high-intent buyers based on budget and urgency automatically.',
      ar: 'فريق مبيعاتك سيتحدث فقط مع المستثمرين المستعدين للدفع. يقوم ذكاؤنا الاصطناعي بتصفية المشترين ذوي النية العالية بناءً على الميزانية والإلحاح تلقائياً.'
    },
    icon: 'BrainCircuit'
  },
  {
    id: 'follow-up-engine',
    title: { en: 'Close Deals While You Sleep', ar: 'إغلاق الصفقات أثناء نومك' },
    description: {
      en: 'Never let a lead go cold. Our autonomous follow-up reaches your customers on WhatsApp and SMS within seconds of contact.',
      ar: 'لا تترك أي عميل يبرد أبداً. متابعتنا الذاتية تصل إلى عملائك عبر واتساب والرسائل النصية في غضون ثوانٍ من الاتصال.'
    },
    icon: 'Zap'
  },
  {
    id: 'growth-sync',
    title: { en: 'Master Your ROI', ar: 'إتقان عائد استثمارك' },
    description: {
      en: 'Get 100% visibility on your marketing spend. We sync every lead to your revenue, showing you exactly what drives your growth.',
      ar: 'احصل على رؤية بنسبة 100% على إنفاقك التسويقي. نحن نربط كل عميل بإيراداتك، لنبين لك بالضبط ما الذي يحرك نموك.'
    },
    icon: 'LineChart'
  }
];

export const SERVICE_DETAILS = {
  'conversion-pages': {
    tools: ['Next.js', 'Vercel Edge', 'A/B Testing'],
    roi: { en: '3.5x higher conversion than standard templates.', ar: 'تحويل أعلى بـ 3.5 ضعف من القوالب القياسية.' },
    features: {
      en: [
        { name: 'Khaleeji-Focused UX', explanation: 'Visual layouts precisely tuned for Qatari luxury tastes and Arabic reading patterns.' },
        { name: 'Sub-Second Speeds', explanation: 'Eliminate drop-offs with pages that load in under 500ms across Doha.' },
        { name: 'Psych-Driven Copy', explanation: 'Headlines engineered to trigger immediate action from local high-net-worth traffic.' }
      ],
      ar: [
        { name: 'تجربة مستخدم خليجية', explanation: 'تخطيطات مرئية مضبوطة بدقة للأذواق القطرية الفاخرة وأنماط القراءة العربية.' },
        { name: 'سرعات أقل من ثانية', explanation: 'القضاء على التسرب من خلال صفحات يتم تحميلها في أقل من 500 مللي ثانية في جميع أنحاء الدوحة.' },
        { name: 'نصوص مدفوعة بعلم النفس', explanation: 'عناوين مصممة لتحفيز إجراءات فورية من الزيارات المحلية ذات الملاءة المالية العالية.' }
      ]
    }
  },
  'ai-qualification': {
    tools: ['GPT-4o', 'Condition Logic', 'NLP Dialects'],
    roi: { en: 'Reclaim 20+ hours of sales team time per week.', ar: 'استعادة أكثر من 20 ساعة من وقت فريق المبيعات أسبوعياً.' },
    features: {
      en: [
        { name: 'Budget Verification', explanation: 'AI agents that pinpoint funding and budget availability before you ever pick up the phone.' },
        { name: 'Intent Scoring', explanation: 'Automatically rank leads from "just browsing" to "ready to buy now".' },
        { name: 'Multi-Channel Screening', explanation: 'Unified qualification logic across your Website, WhatsApp, and Instagram DMs.' }
      ],
      ar: [
        { name: 'التحقق من الميزانية', explanation: 'وكلاء ذكاء اصطناعي يحددون التمويل وتوافر الميزانية قبل أن ترفع الهاتف.' },
        { name: 'سجل النية', explanation: 'تصنيف العملاء تلقائياً من "مجرد تصفح" إلى "مستعد للشراء الآن".' },
        { name: 'فحص متعدد القنوات', explanation: 'منطق تأهيل موحد عبر موقعك الإلكتروني وواتساب ورسائل إنستغرام.' }
      ]
    }
  },
  'follow-up-engine': {
    tools: ['Ansury Automate', 'WhatsApp API', 'SMTP Relay'],
    roi: { en: '90% faster response than human teams.', ar: 'استجابة أسرع بنسبة 90% من الفرق البشرية.' },
    features: {
      en: [
        { name: 'The 60-Second Rule', explanation: 'The "sweet spot" response time. Connect with leads while their interest is at its peak.' },
        { name: 'Persistent Nurturing', explanation: 'Multi-day sequences that handle objections and share proof without manual effort.' },
        { name: 'Auto-Scheduling', explanation: 'Let qualified leads book directly into your calendar with zero back-and-forth.' }
      ],
      ar: [
        { name: 'قاعدة الـ 60 ثانية', explanation: 'وقت الاستجابة المثالي. تواصل مع العملاء بينما اهتمامهم في ذروته.' },
        { name: 'رعاية مستمرة', explanation: 'سلاسل متابعة لعدة أيام تتعامل مع الاعتراضات وتشارك الإثباتات دون جهد يدوي.' },
        { name: 'جدولة تلقائية', explanation: 'دع العملاء المؤهلين يحجزون مباشرة في تقويمك دون أي مراسلات متبادلة.' }
      ]
    }
  },
  'growth-sync': {
    tools: ['Looker Studio', 'Zapier', 'Custom Webhooks'],
    roi: { en: '100% clarity on marketing ROI.', ar: 'وضوح بنسبة 100% على عائد استثمار التسويق.' },
    features: {
      en: [
        { name: 'ROI Dashboard', explanation: 'Watch your revenue grow in real-time with zero manual data entry.' },
        { name: 'Ad Spend Guard', explanation: 'Instantly identify which ads are wasting money and which are winning leads.' },
        { name: 'Executive Digests', explanation: 'Weekly performance summaries sent to your WhatsApp — no more spreadsheets.' }
      ],
      ar: [
        { name: 'لوحة تحكم ROI', explanation: 'شاهد نمو إيراداتك في الوقت الفعلي دون أي إدخال يدوي للبيانات.' },
        { name: 'حارس الإنفاق الإعلاني', explanation: 'حدد فوراً أي الإعلانات تهدر المال وأيها تجذب العملاء.' },
        { name: 'ملخصات تنفيذية', explanation: 'ملخصات أداء أسبوعية تُرسل إلى واتساب الخاص بك - لا مزيد من جداول البيانات.' }
      ]
    }
  }
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'lusail-apartments',
    client: 'Lusail Prime Reality',
    title: { en: 'Converting Passive Browsers into Qualified Investors', ar: 'تحويل المتصفحين السلبيين إلى مستثمرين مؤهلين' },
    category: { en: 'Real Estate / Funnel Automation', ar: 'عقارات / أتمتة الأقماع' },
    description: {
      en: 'We replaced their static website with a high-conversion engine that qualified leads via WhatsApp.',
      ar: 'استبدلنا موقعهم الإلكتروني الثابت بمحرك تحويل عالي الأداء يقوم بتأهيل العملاء عبر واتساب.'
    },
    results: {
      en: ['400% ROI on ad spend', '85% Automatic qualification', '2min Lead response time'],
      ar: ['400% عائد على الإنفاق الإعلاني', '85% تأهيل تلقائي', 'دقيقتان وقت الاستجابة للعملاء']
    },
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=1200',
    tags: ['Landing Page', 'AI Qualify', 'Real Estate']
  },
  {
    id: 'doha-dentistry',
    client: 'Pearl Dental Clinic',
    title: { en: 'Automating the Patient Booking Loop', ar: 'أتمتة حلقة حجز المرضى' },
    category: { en: 'Medical / Lead Automation', ar: 'طبي / أتمتة العملاء' },
    description: {
      en: 'A 24/7 AI receptionist that qualifies insurance and books appointments instantly.',
      ar: 'موظف استقبال ذكاء اصطناعي يعمل 24/7 يتحقق من التأمين ويحجز المواعيد فوراً.'
    },
    results: {
      en: ['120 New bookings/mo', 'Zero missed inquiries', '60% Admin time saved'],
      ar: ['120 حجزاً جديداً شهرياً', 'صفر استفسارات مفقودة', '60% توفير في الوقت الإداري']
    },
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200',
    tags: ['Healthcare', 'Appointment AI', 'Automation']
  }
];


export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Khalid Al-Mansouri',
    role: { en: 'CEO', ar: 'الرئيس التنفيذي' },
    company: 'TechPulse Qatar',
    logo: '/logos/tech_startup.png',
    content: {
      en: "Ansury Systems completely transformed our lead generation. We've seen a 300% increase in qualified bookings since implementing their AI engine.",
      ar: "قامت شركة أنسوري للأنظمة بتحويل عملية توليد العملاء المحتملين لدينا تمامًا. لقد شهدنا زيادة بنسبة 300% في الحجوزات المؤهلة منذ تنفيذ محرك الذكاء الاصطناعي الخاص بهم."
    }
  },
  {
    id: '2',
    name: 'Sarah Henderson',
    role: { en: 'Marketing Director', ar: 'مديرة التسويق' },
    company: 'Elite Estates Doha',
    logo: '/logos/luxury_realestate.png',
    content: {
      en: "The automation is seamless. Our sales team now only speaks to serious investors, saving us countless hours every week.",
      ar: "الأتمتة سلسة للغاية. يتحدث فريق المبيعات لدينا الآن فقط مع المستثمرين الجادين، مما يوفر لنا ساعات لا حصر لها كل أسبوع."
    }
  },
  {
    id: '3',
    name: 'Dr. Faisal Al-Thani',
    role: { en: 'Founder', ar: 'المؤسس' },
    company: 'Verdant Health Center',
    logo: '/logos/modern_healthcare.png',
    content: {
      en: "Finally, a solution that understands the local market. The Arabic NLP capabilities of their bots are unmatched.",
      ar: "أخيرًا، حل يفهم السوق المحلي. قدرات معالجة اللغات الطبيعية العربية لبوتاتهم لا ميل لها."
    }
  }
];

export const CHATBOT_WELCOME_MESSAGES = [
  {
    en: "Protocol initiated. I am Ansur. What is the single biggest bottleneck currently stopping your business from scaling in Qatar?",
    ar: "تم بدء البروتوكول. أنا أنسور. ما هي أكبر عقبة تواجه عملك حالياً وتمنعه من التوسع في قطر؟"
  },
  {
    en: "Neural link established. How can I help you automate your lead generation and boost your ROI today?",
    ar: "تم إنشاء الارتباط العصبي. كيف يمكنني مساعدتك في أتمتة توليد العملاء وزيادة عائد الاستثمار اليوم؟"
  },
  {
    en: "Welcome to the future of Qatari business growth. What strategic challenge are we solving together today?",
    ar: "مرحباً بك في مستقبل نمو الأعمال في قطر. ما التحدي الاستراتيجي الذي سنقوم بحله سوياً اليوم؟"
  },
  {
    en: "Ansur Interface active. Ready to turn your static traffic into a high-performance lead engine. Where should we start?",
    ar: "واجهة أنسور نشطة. جاهزون لتحويل زياراتك الثابتة إلى محرك عملاء عالي الأداء. من أين نبدأ؟"
  }
];
