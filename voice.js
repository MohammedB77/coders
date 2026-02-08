class VoiceManager {
  constructor() {
    this.synth = window.speechSynthesis;
    this.settings = this.loadSettings();
  }

  speak(text) {
    if (!text) return;

    // يوقف أي صوت شغال
    this.synth.cancel();

    const ut = new SpeechSynthesisUtterance(text);

    // اللغة
    ut.lang = 'ar-SA';
    ut.pitch = 1;


    // السرعة من الإعدادات
    ut.rate = this.settings.voiceSpeed || 1;

    // اختيار أفضل صوت عربي
    const voices = this.synth.getVoices();
    const arabicVoice =
      voices.find(v => v.lang === 'ar-SA') ||
      voices.find(v => v.lang.startsWith('ar'));

    if (arabicVoice) ut.voice = arabicVoice;

    this.synth.speak(ut);
  }
  

  loadSettings() {
    const s = localStorage.getItem('voice-settings');
    return s ? JSON.parse(s) : { voiceSpeed: 1 };
  }

  saveSettings(speed) {
    this.settings.voiceSpeed = speed;
    localStorage.setItem('voice-settings', JSON.stringify(this.settings));
  }
}
console.log(speechSynthesis.getVoices());

// إنشاء كائن واحد للصوت
const voice = new VoiceManager();
document.getElementById('intro-text').onclick = () =>
  voice.speak('ابدأ مشوارك الجامعي في علوم الحاسب بسهولة');

document.getElementById('about-cs').onclick = () =>
  voice.speak('عن التخصص');
