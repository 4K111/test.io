// Инициализация анимаций AOS
AOS.init({
    duration: 1000,
    once: true
});

// Функция для лайков
function incrementLike(button) {
    const countSpan = button.querySelector('.like-count');
    const heartIcon = button.querySelector('i.fa-heart');
    let count = parseInt(countSpan.textContent);

    if (button.classList.contains('liked')) {
        count--;
        button.classList.remove('liked');
        heartIcon.classList.remove('fas');
        heartIcon.classList.add('far');
    } else {
        count++;
        button.classList.add('liked');
        heartIcon.classList.remove('far');
        heartIcon.classList.add('fas');
    }

    countSpan.textContent = count;
}

// Переключение фотографий
document.querySelectorAll('.photo-nav-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.photo-nav-button').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        const targetId = button.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Сворачивание/разворачивание профиля
const profileSidebar = document.querySelector('.profile-sidebar');

profileSidebar.addEventListener('mouseenter', () => {
    profileSidebar.classList.remove('collapsed');
});

profileSidebar.addEventListener('mouseleave', () => {
    profileSidebar.classList.add('collapsed');
});