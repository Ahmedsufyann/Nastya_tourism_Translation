// التمرير السلس عند الضغط على الروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// تأثير تفاعلي بسيط: طباعة اسم اللغة في الكونسول عند الضغط عليها
const langCards = document.querySelectorAll('.lang-card');

langCards.forEach(card => {
    card.addEventListener('click', () => {
        const lang = card.getAttribute('data-lang');
        alert(`لقد اخترت لغة التواصل: ${lang}`);
    });
});

console.log("تم تحميل ملف البرمجة بنجاح - الموقع جاهز!");