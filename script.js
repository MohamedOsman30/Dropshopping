// Lightweight form handling (no backend) — collects leads to localStorage and shows message
document.getElementById('leadForm').addEventListener('submit', function(e){
  e.preventDefault();
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var formMsg = document.getElementById('formMsg');

  if(!name || !email){ 
    formMsg.textContent = 'Please enter name and email.'; 
    return; 
  }

  // Basic email validation
  var re = /^\S+@\S+\.\S+$/;
  if(!re.test(email)){ 
    formMsg.textContent = 'Please enter a valid email.'; 
    return; 
  }

  var leads = JSON.parse(localStorage.getItem('leads')||'[]');
  leads.push({name:name,email:email,at:new Date().toISOString()});
  localStorage.setItem('leads', JSON.stringify(leads));

  // تحديث رسالة التأكيد بناءً على اللغة الحالية
  var isEnglish = document.documentElement.lang === 'en';
  formMsg.textContent = isEnglish ? 'Thanks — we will contact you soon!' : 'شكرًا لك — سنتواصل معك قريبًا!';
  
  this.reset();

  // Clear thank-you message briefly
  setTimeout(()=>{ formMsg.textContent = ''; },4000);
});


// ------------------------------------------
// منطق تبديل اللغة
// ------------------------------------------

function toggleLanguage() {
    var htmlElement = document.documentElement;
    var currentLang = htmlElement.lang;
    var newLang = currentLang === 'ar' ? 'en' : 'ar';
    
    // 1. تغيير السمة lang في HTML
    htmlElement.lang = newLang;
    
    // 2. تطبيق اتجاه الكتابة (Direction)
    if (newLang === 'en') {
        document.body.style.direction = 'ltr';
        // تغيير محاذاة النص في الهيدر والبطاقات لتناسب الـ LTR
        document.querySelector('.brand').style.direction = 'ltr'; 
        document.querySelector('.wrap').style.direction = 'ltr'; 
    } else {
        document.body.style.direction = 'rtl';
        // إعادة تعيين الاتجاه للغة العربية
        document.querySelector('.brand').style.direction = 'rtl';
        document.querySelector('.wrap').style.direction = 'rtl';
    }

    // 3. تبديل رؤية النصوص
    // إخفاء اللغة النشطة حاليًا وإظهار اللغة الجديدة
    var arElements = document.querySelectorAll('.lang-ar');
    var enElements = document.querySelectorAll('.lang-en');

    arElements.forEach(function(el) {
        el.classList.toggle('hidden', newLang === 'en');
    });

    enElements.forEach(function(el) {
        el.classList.toggle('hidden', newLang === 'ar');
    });
}

// ربط زر تبديل اللغة بالدالة
document.getElementById('langToggle').addEventListener('click', toggleLanguage);
document.getElementById('langToggleEn').addEventListener('click', toggleLanguage);