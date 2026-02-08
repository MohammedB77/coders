function speak(text) {
  if (!text) return;

  // يوقف أي صوت شغال حاليًا
  speechSynthesis.cancel();

  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'ar-SA';
  u.rate = 1.2;

  speechSynthesis.speak(u);
}
document.getElementById('intro-text').onclick = () =>
  speak('ابدأ مشوارك الجامعي في علوم الحاسب بسهولة');

document.getElementById('about-cs').onclick = () =>
  speak('عن التخصص');

document.getElementById('what-is-cs').onclick = () =>
  speak('ما هو تخصص علوم الحاسب؟ علوم الحاسب هو العلم الذي يدرس العمليات المرتبطة بالبيانات...');

document.getElementById('cs-future').onclick = () =>
  speak('مستقبل التخصص نمو المجال يواكب احتياجات السوق عالميًا');

document.getElementById('cs-impact').onclick = () =>
  speak('أثر التخصص يساهم في تحسين التعليم والصحة والأعمال');

document.getElementById('cs-skills').onclick = () =>
  speak('صفات أخصائي علوم الحاسوب');
