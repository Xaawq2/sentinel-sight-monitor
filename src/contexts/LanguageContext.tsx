
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.howItWorks': 'How It Works',
    'nav.features': 'Features',
    'nav.demo': 'Demo',
    'nav.technology': 'Technology',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title1': 'Automated Environmental',
    'hero.title2': 'Monitoring',
    'hero.title3': 'with Satellite Imagery',
    'hero.subtitle': 'Tracking vegetation, soil, and water changes using AI & remote sensing technology. Get monthly insights delivered automatically.',
    'hero.viewDemo': 'View Demo',
    'hero.getStarted': 'Get Started',
    
    // How It Works
    'howItWorks.title': 'How It Works',
    'howItWorks.step1.title': 'Data Retrieval',
    'howItWorks.step1.desc': 'Automatically download monthly Sentinel satellite imagery of your area of interest',
    'howItWorks.step2.title': 'AI Analysis',
    'howItWorks.step2.desc': 'Advanced algorithms analyze NDVI, soil conditions, and water presence patterns',
    'howItWorks.step3.title': 'Data Storage',
    'howItWorks.step3.desc': 'All environmental metrics are stored in a robust geospatial database for tracking',
    'howItWorks.step4.title': 'Reports & Maps',
    'howItWorks.step4.desc': 'Generate comparative reports and interactive maps showing environmental changes',
    
    // Features
    'features.title': 'Key Features',
    'features.1.title': 'Monthly Automated Updates',
    'features.1.desc': 'Set it and forget it - our system automatically retrieves and processes new satellite data every month',
    'features.2.title': 'NDVI & Environmental Indices',
    'features.2.desc': 'Advanced vegetation health monitoring using Normalized Difference Vegetation Index and other key metrics',
    'features.3.title': 'Interactive Comparisons',
    'features.3.desc': 'Easy-to-use interface for comparing environmental changes across different time periods',
    'features.4.title': 'Simple Map Interface',
    'features.4.desc': 'User-friendly mapping tools accessible to both technical and non-technical users',
    'features.5.title': 'Historical Tracking',
    'features.5.desc': 'Build a comprehensive database of environmental changes over time for trend analysis',
    'features.6.title': 'Automated Reports',
    'features.6.desc': 'Receive detailed environmental change reports delivered directly to your inbox',
    
    // Demo
    'demo.title': 'Dashboard Preview',
    'demo.subtitle': 'Real-time Environmental Dashboard',
    'demo.feature1': 'Interactive map with satellite imagery overlay',
    'demo.feature2': 'NDVI trend charts and vegetation health metrics',
    'demo.feature3': 'Comparative analysis tools for month-over-month changes',
    'demo.feature4': 'Automated alert system for significant environmental changes',
    'demo.liveData': 'Live Data',
    
    // Technology
    'technology.title': 'Powered by Advanced Technology',
    'technology.python': 'Core data processing and analysis engine',
    'technology.arcgis': 'Professional GIS analysis and visualization',
    'technology.postgres': 'Robust geospatial database management',
    'technology.dash': 'Interactive web dashboard framework',
    'technology.description': 'Built on industry-leading geospatial technologies, our platform combines the power of satellite remote sensing with advanced AI algorithms to deliver accurate, timely environmental insights.',
    
    // Contact
    'contact.title': 'Request Access',
    'contact.subtitle': 'Ready to start monitoring your area? Get in touch with us to schedule a demo or request access to our platform.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.organization': 'Organization',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell us about your monitoring needs...',
    'contact.submit': 'Send Request',
    'contact.success': 'Request Submitted!',
    'contact.successDesc': "We'll get back to you within 24 hours.",
    
    // Footer
    'footer.copyright': 'Automated Environmental Monitoring © 2024',
    'footer.powered': 'Powered by Python, ArcGIS Pro & AI',
  },
  ar: {
    // Navigation
    'nav.howItWorks': 'كيف يعمل',
    'nav.features': 'الميزات',
    'nav.demo': 'العرض التوضيحي',
    'nav.technology': 'التقنية',
    'nav.contact': 'اتصل بنا',
    
    // Hero Section
    'hero.title1': 'المراقبة البيئية',
    'hero.title2': 'الآلية',
    'hero.title3': 'بصور الأقمار الصناعية',
    'hero.subtitle': 'تتبع تغيرات النباتات والتربة والمياه باستخدام الذكاء الاصطناعي وتقنيات الاستشعار عن بُعد. احصل على رؤى شهرية مُقدمة تلقائياً.',
    'hero.viewDemo': 'عرض توضيحي',
    'hero.getStarted': 'ابدأ الآن',
    
    // How It Works
    'howItWorks.title': 'كيف يعمل النظام',
    'howItWorks.step1.title': 'استرداد البيانات',
    'howItWorks.step1.desc': 'تنزيل تلقائي شهري لصور الأقمار الصناعية سنتينل لمنطقة اهتمامك',
    'howItWorks.step2.title': 'تحليل الذكاء الاصطناعي',
    'howItWorks.step2.desc': 'خوارزميات متقدمة تحلل مؤشر النباتات الطبيعية وظروف التربة ووجود المياه',
    'howItWorks.step3.title': 'تخزين البيانات',
    'howItWorks.step3.desc': 'يتم تخزين جميع المقاييس البيئية في قاعدة بيانات جغرافية مكانية قوية للتتبع',
    'howItWorks.step4.title': 'التقارير والخرائط',
    'howItWorks.step4.desc': 'إنشاء تقارير مقارنة وخرائط تفاعلية تظهر التغيرات البيئية',
    
    // Features
    'features.title': 'الميزات الرئيسية',
    'features.1.title': 'التحديثات الشهرية التلقائية',
    'features.1.desc': 'اضبط واتركه - نظامنا يسترد ويعالج بيانات الأقمار الصناعية الجديدة تلقائياً كل شهر',
    'features.2.title': 'مؤشرات NDVI والبيئة',
    'features.2.desc': 'مراقبة متقدمة لصحة النباتات باستخدام مؤشر الفرق النباتي المُعدل والمقاييس الرئيسية الأخرى',
    'features.3.title': 'المقارنات التفاعلية',
    'features.3.desc': 'واجهة سهلة الاستخدام لمقارنة التغيرات البيئية عبر فترات زمنية مختلفة',
    'features.4.title': 'واجهة خرائط بسيطة',
    'features.4.desc': 'أدوات رسم خرائط سهلة الاستخدام يمكن الوصول إليها للمستخدمين التقنيين وغير التقنيين',
    'features.5.title': 'التتبع التاريخي',
    'features.5.desc': 'بناء قاعدة بيانات شاملة للتغيرات البيئية عبر الزمن لتحليل الاتجاهات',
    'features.6.title': 'التقارير الآلية',
    'features.6.desc': 'تلقي تقارير مفصلة عن التغيرات البيئية مُرسلة مباشرة إلى صندوق بريدك',
    
    // Demo
    'demo.title': 'معاينة لوحة المعلومات',
    'demo.subtitle': 'لوحة المعلومات البيئية في الوقت الفعلي',
    'demo.feature1': 'خريطة تفاعلية مع تراكب صور الأقمار الصناعية',
    'demo.feature2': 'مخططات اتجاه NDVI ومقاييس صحة النباتات',
    'demo.feature3': 'أدوات التحليل المقارن للتغيرات من شهر لآخر',
    'demo.feature4': 'نظام تنبيه تلقائي للتغيرات البيئية المهمة',
    'demo.liveData': 'بيانات مباشرة',
    
    // Technology
    'technology.title': 'مدعوم بتقنية متقدمة',
    'technology.python': 'محرك معالجة وتحليل البيانات الأساسي',
    'technology.arcgis': 'تحليل وتصور نظم المعلومات الجغرافية المهنية',
    'technology.postgres': 'إدارة قاعدة بيانات جغرافية مكانية قوية',
    'technology.dash': 'إطار عمل لوحة معلومات الويب التفاعلية',
    'technology.description': 'بُني على تقنيات جغرافية مكانية رائدة في الصناعة، تجمع منصتنا بين قوة الاستشعار عن بُعد عبر الأقمار الصناعية مع خوارزميات الذكاء الاصطناعي المتقدمة لتقديم رؤى بيئية دقيقة وفي الوقت المناسب.',
    
    // Contact
    'contact.title': 'طلب الوصول',
    'contact.subtitle': 'مستعد لبدء مراقبة منطقتك؟ تواصل معنا لجدولة عرض توضيحي أو طلب الوصول إلى منصتنا.',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.organization': 'المؤسسة',
    'contact.message': 'الرسالة',
    'contact.messagePlaceholder': 'أخبرنا عن احتياجاتك للمراقبة...',
    'contact.submit': 'إرسال الطلب',
    'contact.success': 'تم إرسال الطلب!',
    'contact.successDesc': 'سنعاود الاتصال بك خلال 24 ساعة.',
    
    // Footer
    'footer.copyright': 'المراقبة البيئية الآلية © 2024',
    'footer.powered': 'مدعوم بـ Python و ArcGIS Pro والذكاء الاصطناعي',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
