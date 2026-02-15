
let a11yEnabled = localStorage.getItem("a11y") === "true";


function speak(text) {
  if (!text || !a11yEnabled) return;

  speechSynthesis.cancel();

  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ar-SA";

  u.rate = 1.1;

  speechSynthesis.speak(u);
}

const toggleBtn = document.querySelector(".a11y-toggle");

function updateButton() {
  if (!toggleBtn) return;

  toggleBtn.classList.toggle("active", a11yEnabled);
  toggleBtn.setAttribute("aria-pressed", a11yEnabled);
}

updateButton();

toggleBtn?.addEventListener("click", () => {
  a11yEnabled = !a11yEnabled;
  localStorage.setItem("a11y", a11yEnabled);
  updateButton();


  speechSynthesis.cancel();

  const msg = a11yEnabled
    ? "تم تفعيل وضع الاحتياجات الخاصة"
    : "تم إيقاف وضع الاحتياجات الخاصة";

  const u = new SpeechSynthesisUtterance(msg);
  u.lang = "ar-SA";
  u.rate = 1.8;
  speechSynthesis.speak(u);
});

document.getElementById("intro-text")?.addEventListener("click", () => {
  speak("ابدأ مشوارك الجامعي في علوم الحاسب بسهولة");
});

document.getElementById("what-is-cs")?.addEventListener("click", () => {
  speak("ما هو تخصص علوم الحاسب؟ علوم الحاسب هو العلم الذي يدرس العمليات المرتبطة بالبيانات وكيفية تمثيلها على شكل برامج، ويعتمد على النظريات والتجارب والهندسة لتوظيف الخوارزميات في معالجة وتخزين ونقل المعلومات الرقمية.");
});

document.getElementById("cs-future")?.addEventListener("click", () => {
  speak("مستقبل التخصص. نمو المجال يواكب احتياجات السوق والتقنيات الحديثة عالميًا.");
});

document.getElementById("cs-impact")?.addEventListener("click", () => {
  speak("أثر التخصص. علوم الحاسب يساهم في تحسين التعليم والصحة والأعمال والخدمات المستقبلية.");
});


document.querySelectorAll(".skill, .trait").forEach(el => {
  el.addEventListener("click", () => {
    speak(el.innerText.trim());
  });
});



const footer = document.querySelector(".site-footer");

footer?.addEventListener("click", (e) => {

  if (e.target.closest(".email-input")) {
    speak("البريد الإلكتروني للتواصل محمد بامحرز");
    return;
  }

  if (e.target.closest(".instagram")) {
    speak("حساب دفعتنا كودرز 9");
    return;
  }

  if (e.target.closest(".telegram-icon")) {
    speak("الانتقال إلى بوت الدفعة على تيليجرام");
    return;
  }

  if (e.target.closest(".bot-box")) {
    speak("بوت الدفعة للملخصات والملازم والنماذج. كل ما تحتاجه موجود هنا لتسهيل دراستك.");
    return;
  }

  if (e.target.closest(".contact-box")) {
    speak("قسم تواصل معنا");
    return;
  }

  if (e.target.closest(".copyright")) {
    speak("جميع الحقوق محفوظة لعام 2025 سي إس هَب. تم الإنشاء بواسطة اللجنة العلمية.");
    return;
  }

  speak("تذييل الصفحة ومعلومات التواصل");
});

/* =========================
   قراءة المقررات من الجدول
========================= */

document.querySelectorAll(".course-table tbody tr").forEach(row => {
  row.addEventListener("click", () => {

    const cells = row.querySelectorAll("td");
    if (cells.length < 6) return;

    const code   = cells[1].innerText.trim();
    const name   = cells[2].innerText.trim();
    const theory = cells[3].innerText.trim();
    const lab    = cells[4].innerText.trim();
    const hours  = cells[5].innerText.trim();

    const text =
      `المقرر ${name}. ` +
      `رمز المقرر ${code}. ` +
      `نظري ${theory} ساعات. ` +
      `عملي ${lab} ساعات. ` +
      `إجمالي الساعات ${hours}.`;

    speak(text);
  });
});

/* =========================
   رأس صفحة الخطة الدراسية
========================= */
/* =========================
   رأس صفحة الخطة الدراسية — نطق منفصل
========================= */

/* اسم القسم */
document.querySelector(".main-title")?.addEventListener("click", () => {
  speak("قسم علوم الحاسوب");
});


/* مدة الدراسة */
document.querySelector(".subtitle")?.addEventListener("click", () => {
  speak("مدة الدراسة ثمانية فصول دراسية");
});


/* التنبيه */
document.querySelector(".alert-box")?.addEventListener("click", () => {
  speak(
    "تم تجهيز المقررات الدراسية بالترميز عال، " +
    "وهو الترميز الخاص بقسم علوم الحاسوب."
  );
});


// عنوان البريد الجامعي
document.querySelector(".university-email-header h1")?.addEventListener("click", () => {
  speak("البريد الجامعي");
});

// وصف البريد الجامعي
document.querySelector(".university-email-header p")?.addEventListener("click", () => {
  speak("يوفر البريد الجامعي وصولًا إلى حزمة جيتهب التعليمية وتطبيقات مايكروسوفت أوفيس وخدمات الذكاء الاصطناعي.");
});



/* =========================
   بطاقات الاشتراكات — كل بطاقة لحالها
=/* =========================
   بطاقات الاشتراكات — عربي فقط
========================= */
/* =========================
   بطاقات الاشتراكات — اسم عربي + نفس الوصف حرفيًا
========================= */

// DataCamp
document.querySelectorAll(".subscription-card")[0]?.addEventListener("click", () => {
  speak("داتا كامب. منصة تعليمية تساعدك على تعلم تحليل البيانات والبرمجة على يد خبراء عالميين.");
});

// FrontendMasters
document.querySelectorAll(".subscription-card")[1]?.addEventListener("click", () => {
  speak("فرونت إند ماسترز. منصة متخصصة في تطوير الويب تقدم دورات متعمقة في JavaScript و Node.js وهندسة الواجهات الأمامية.");
});

// Codédex
document.querySelectorAll(".subscription-card")[2]?.addEventListener("click", () => {
  speak("كوديديكس. منصة لتعلم البرمجة بطريقة ممتعة وتفاعلية فيها دورات في Python, HTML, CSS, JavaScript, React, Git وغيرها.");
});

// Scrimba
document.querySelectorAll(".subscription-card")[3]?.addEventListener("click", () => {
  speak("سكريمبا. منصة تفاعلية لتعلم تطوير الواجهات الأمامية. تقدم دورات ومشاريع وتحديات برمجية.");
});

// Visme
document.querySelectorAll(".subscription-card")[4]?.addEventListener("click", () => {
  speak("فيزمي. منصة شاملة تساعدك على إنشاء عروض تقديمية جذابة وتفاعلية، مستندات بصرية، تصوّرات بيانات، وفيديوهات قصيرة، ومحتوى بصري مميز.");
});

// GitKraken
document.querySelectorAll(".subscription-card")[5]?.addEventListener("click", () => {
  speak("جيت كراكن. برنامج يسهّل إدارة مشاريع Git بواجهة رسومية واضحة. ويتكامل مع GitHub عشان تدير التعديلات والمشاكل في نفس المكان.");
});



/* =========================
   رابط GitHub Education
========================= */
document.querySelector(".registration-link-section .link-item")
  ?.addEventListener("click", () => {
    speak("رابط التسجيل في GitHub Education للحصول على المزايا التعليمية.");
  });


/* =========================
   الفوتر
========================= */


footer?.addEventListener("click", (e) => {

  if (e.target.closest(".email-input")) {
    speak("البريد الإلكتروني للتواصل محمد بامحرز");
    return;
  }

  if (e.target.closest(".instagram")) {
    speak("حساب دفعتنا على إنستقرام كودرز 9");
    return;
  }

  if (e.target.closest(".telegram-icon")) {
    speak("الانتقال إلى بوت الدفعة على تيليجرام");
    return;
  }

  if (e.target.closest(".bot-box")) {
    speak("بوت الدفعة يوفر ملخصات وملازم ونماذج لتسهيل الدراسة.");
    return;
  }

  if (e.target.closest(".contact-box")) {
    speak("قسم تواصل معنا");
    return;
  }

  if (e.target.closest(".copyright")) {
    speak("جميع الحقوق محفوظة لعام 2025 سي إس هب. تم الإنشاء بواسطة اللجنة العلمية.");
    return;
  }

  speak("تذييل الصفحة ومعلومات التواصل");
});

if (document.body.classList.contains("certificates-page")) {

  /* ===== عنوان الصفحة ===== */
  document.getElementById("page-title")?.addEventListener("click", () => {
    speak("الشهادات المهنية");
  });

  document.getElementById("page-desc")?.addEventListener("click", () => {
    speak("استكشف الشهادات المهنية المعتمدة في علوم الحاسوب والتي تعزز خبراتك خطوة بخطوة");
  });


  /* ===== دالة قراءة بطاقة شهادة كاملة ===== */
  function readCert(card) {
    const name = card.querySelector(".cert-name")?.innerText.trim();
    const desc = card.querySelector(".cert-description")?.innerText.trim();

    const details = card.querySelectorAll(".detail-item");

    const duration = details[0]?.innerText.replace("المدة:", "").trim();
    const level    = details[1]?.innerText.trim();
    const provider = details[2]?.innerText.trim();

    const text =
      `الشهادة ${name}. ` +
      `${desc}. ` +
      `مدتها ${duration}. ` +
      `المستوى ${level}. ` +
      ` من ${provider}.`;

    speak(text);
  }


  /* ===== ربط كل البطاقات ===== */
  document.querySelectorAll(".cert-card").forEach(card => {
    card.addEventListener("click", () => readCert(card));
  });


}
/* ===== كلمة أخيرة ===== */
window.addEventListener("DOMContentLoaded", () => {

  const finalTitle = document.getElementById("final-title");
  const finalText  = document.getElementById("final-text");

  document.getElementById("final-title", () => {
    speak("كلمة أخيرة");
  });

  finalText?.addEventListener("click", () => {
    speak("وفي الختام، إن لسعيك رحلة قد تطول ولكنها تستحق كل خطوة خطوتها. نتمنى لكم كل التوفيق والنجاح");
  });

});


