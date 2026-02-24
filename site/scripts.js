// Плавная прокрутка при клике на пункты меню
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // убираем #
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // учитываем высоту шапки
                behavior: 'smooth'
            });
        }
    });
});

// Мобильное меню
const mobileToggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav');

mobileToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});