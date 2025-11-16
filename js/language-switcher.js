// Language Switcher
const translations = {
    ar: {
        // Navigation
        home: "الرئيسية",
        about_course: "عن الدورة",
        about_trainer: "عن المدرب",
        features: "المميزات",
        testimonials: "آراء المتدربين",
        registration: "التسجيل",
        
        // Hero Section
        hero_title: "ابدأ تجارتك الإلكترونية مع دورة الدروبشيبنج الشاملة",
        hero_subtitle: "تعلم كيفية بناء متجرك الإلكتروني من الصفر دون الحاجة لرأس مال أو مخزون، وابدأ رحلتك نحو الاستقلال المالي",
        register_now: "سجل الآن",
        learn_more: "اعرف أكثر",
        
        // About Course
        course_learn: "ماذا ستتعلم في هذه الدورة؟",
        basics_title: "أساسيات الدروبشيبنج",
        basics_desc: "فهم نموذج العمل وكيفية تطبيقه بشكل صحيح",
        basics_item1: "مقدمة شاملة عن الدروبشيبنج",
        basics_item2: "اختيار المنتجات المناسبة",
        basics_item3: "إيجاد الموردين الموثوقين",
        basics_item4: "تحليل المنافسة والسوق",
        
        store_title: "بناء المتجر الإلكتروني",
        store_desc: "تصميم متجر احترافي يجذب العملاء",
        store_item1: "اختيار منصة المتجر المناسبة",
        store_item2: "تصميم واجهة مستخدم جذابة",
        store_item3: "إعداد صفحات المنتجات",
        store_item4: "تحسين تجربة المستخدم",
        
        marketing_title: "التسويق وجذب العملاء",
        marketing_desc: "استراتيجيات تسويقية فعالة لزيادة المبيعات",
        marketing_item1: "التسويق عبر وسائل التواصل الاجتماعي",
        marketing_item2: "تحسين محركات البحث (SEO)",
        marketing_item3: "الإعلانات الممولة (Facebook Ads)",
        marketing_item4: "التسويق بالمحتوى",
        
        // About Trainer
        trainer_name: "محمد أحمد",
        trainer_desc1: "خبير في التجارة الإلكترونية والدروبشيبنج مع أكثر من 5 سنوات من الخبرة العملية.",
        trainer_desc2: "ساعد أكثر من 500 متدرب على بدء مشاريعهم الناجحة في مجال الدروبشيبنج وتحقيق دخل مستدام.",
        trainer_desc3: "متخصص في بناء استراتيجيات تسويقية فعالة وتحليل البيانات لتحسين الأداء وزيادة المبيعات.",
        join_course: "انضم للدورة الآن",
        
        // Features
        course_features: "مميزات الدورة",
        feature1_title: "محتوى متكامل",
        feature1_desc: "دورة شاملة تغطي جميع جوانب الدروبشيبنج من البداية حتى الاحتراف",
        feature2_title: "تدريب مباشر",
        feature2_desc: "جلسات مباشرة مع المدرب للإجابة على استفساراتك وتقديم الدعم",
        feature3_title: "نتائج عملية",
        feature3_desc: "تطبيق عملي خلال الدورة لضمان تحقيق نتائج ملموسة",
        feature4_title: "تحديث مستمر",
        feature4_desc: "محتويات الدورة يتم تحديثها باستمرار لتواكب أحدث التطورات",
        
        // Testimonials
        students_reviews: "آراء المتدربين",
        testimonial1_text: "\"الدورة غيرت حياتي بشكل كامل، بعد 3 أشهر من الانتهاء من الدورة حققت أول 1000 دولار من متجري الإلكتروني. شكراً للمدرب على الدعم المستمر!\"",
        testimonial1_author: "- أحمد محمد",
        testimonial2_text: "\"المحتوى كان شاملاً ومنظماً، والأهم هو الدعم المستمر من المدرب حتى بعد انتهاء الدورة. أنصح بها لكل من يريد بدء مشروعه في الدروبشيبنج.\"",
        testimonial2_author: "- سارة خالد",
        testimonial3_text: "\"كنت أخشى الدخول في مجال التجارة الإلكترونية، ولكن الدورة قدمت كل شيء بطريقة مبسطة وسهلة. الآن لدي متجرين يعملان ويحققان أرباحاً جيدة.\"",
        testimonial3_author: "- يوسف عبدالله",
        
        // Registration
        register_desc: "احجز مقعدك وابدأ رحلتك نحو النجاح في التجارة الإلكترونية",
        full_name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        register_button: "سجل الآن واحصل على خصم 20%",
        
        // Footer
        brand_name: "دروبشيبنج",
        footer_desc: "نقدم دورات تدريبية متخصصة في مجال الدروبشيبنج والتجارة الإلكترونية لمساعدتك على بناء مشروعك الناجح.",
        quick_links: "روابط سريعة",
        contact_us: "اتصل بنا",
        contact_email: "البريد الإلكتروني: info@dropshipping-course.com",
        contact_phone: "الهاتف: +1234567890",
        contact_address: "العنوان: مدينة، دولة",
        facebook: "فيسبوك",
        twitter: "تويتر",
        instagram: "انستجرام",
        youtube: "يوتيوب",
        copyright: "جميع الحقوق محفوظة © 2023 دورة الدروبشيبنج"
    },
    en: {
        // Navigation
        home: "Home",
        about_course: "About Course",
        about_trainer: "About Trainer",
        features: "Features",
        testimonials: "Testimonials",
        registration: "Registration",
        
        // Hero Section
        hero_title: "Start Your E-commerce Business with Comprehensive Dropshipping Course",
        hero_subtitle: "Learn how to build your online store from scratch without capital or inventory, and start your journey towards financial independence",
        register_now: "Register Now",
        learn_more: "Learn More",
        
        // About Course
        course_learn: "What Will You Learn in This Course?",
        basics_title: "Dropshipping Basics",
        basics_desc: "Understanding the business model and how to apply it correctly",
        basics_item1: "Comprehensive introduction to dropshipping",
        basics_item2: "Choosing suitable products",
        basics_item3: "Finding reliable suppliers",
        basics_item4: "Analyzing competition and market",
        
        store_title: "Building Online Store",
        store_desc: "Design a professional store that attracts customers",
        store_item1: "Choosing the right store platform",
        store_item2: "Designing attractive user interface",
        store_item3: "Setting up product pages",
        store_item4: "Improving user experience",
        
        marketing_title: "Marketing & Customer Acquisition",
        marketing_desc: "Effective marketing strategies to increase sales",
        marketing_item1: "Social media marketing",
        marketing_item2: "Search engine optimization (SEO)",
        marketing_item3: "Paid advertising (Facebook Ads)",
        marketing_item4: "Content marketing",
        
        // About Trainer
        trainer_name: "Mohamed Ahmed",
        trainer_desc1: "Expert in e-commerce and dropshipping with over 5 years of practical experience.",
        trainer_desc2: "Helped more than 500 trainees start their successful projects in dropshipping and achieve sustainable income.",
        trainer_desc3: "Specialized in building effective marketing strategies and data analysis to improve performance and increase sales.",
        join_course: "Join the Course Now",
        
        // Features
        course_features: "Course Features",
        feature1_title: "Comprehensive Content",
        feature1_desc: "A comprehensive course covering all aspects of dropshipping from beginner to professional",
        feature2_title: "Live Training",
        feature2_desc: "Live sessions with the trainer to answer your questions and provide support",
        feature3_title: "Practical Results",
        feature3_desc: "Practical application during the course to ensure tangible results",
        feature4_title: "Continuous Updates",
        feature4_desc: "Course contents are continuously updated to keep up with the latest developments",
        
        // Testimonials
        students_reviews: "Students Reviews",
        testimonial1_text: "\"The course completely changed my life, after 3 months of completing the course I achieved my first $1000 from my online store. Thanks to the trainer for the continuous support!\"",
        testimonial1_author: "- Ahmed Mohamed",
        testimonial2_text: "\"The content was comprehensive and organized, and most importantly is the continuous support from the trainer even after the course ended. I recommend it to anyone who wants to start their project in dropshipping.\"",
        testimonial2_author: "- Sara Khaled",
        testimonial3_text: "\"I was afraid to enter the field of e-commerce, but the course presented everything in a simplified and easy way. Now I have two stores working and making good profits.\"",
        testimonial3_author: "- Youssef Abdullah",
        
        // Registration
        register_desc: "Book your seat and start your journey towards success in e-commerce",
        full_name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        register_button: "Register Now and Get 20% Discount",
        
        // Footer
        brand_name: "Dropshipping",
        footer_desc: "We provide specialized training courses in dropshipping and e-commerce to help you build your successful project.",
        quick_links: "Quick Links",
        contact_us: "Contact Us",
        contact_email: "Email: info@dropshipping-course.com",
        contact_phone: "Phone: +1234567890",
        contact_address: "Address: City, Country",
        facebook: "Facebook",
        twitter: "Twitter",
        instagram: "Instagram",
        youtube: "YouTube",
        copyright: "All Rights Reserved © 2023 Dropshipping Course"
    }
};

class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('selectedLanguage') || 'ar';
        this.init();
    }

    init() {
        this.setLanguage(this.currentLang);
        this.setupEventListeners();
    }

    setupEventListeners() {
        const languageSwitcher = document.getElementById('languageSwitcher');
        if (languageSwitcher) {
            languageSwitcher.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }
    }

    toggleLanguage() {
    const newLang = this.currentLang === 'ar' ? 'en' : 'ar';
    this.setLanguage(newLang);
    
    // Trigger custom event for language change
    const event = new CustomEvent('languageChanged', { 
        detail: { 
            language: newLang,
            previousLanguage: this.currentLang 
        } 
    });
    document.dispatchEvent(event);
}

    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('selectedLanguage', lang);
        
        // Update HTML direction and lang attribute
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        
        // Update all translatable elements
        this.updateTextContent(lang);
        
        // Update language switcher button text
        const languageSwitcher = document.getElementById('languageSwitcher');
        if (languageSwitcher) {
            languageSwitcher.textContent = lang === 'ar' ? 'EN' : 'AR';
        }
    }

    updateTextContent(lang) {
        const translatableElements = document.querySelectorAll('[data-translate]');
        
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }
}

// Initialize language switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LanguageSwitcher();
});