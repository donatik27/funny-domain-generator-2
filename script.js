const domains = ['bozo12.base.eth', 'funny123.base.eth', 'coolname.base.eth', 'randomword.base.eth'];
const domainElement = document.getElementById('domain');
const generateBtn = document.getElementById('generate-btn');

// Функція для генерації випадкового домену
function getRandomDomain() {
    return domains[Math.floor(Math.random() * domains.length)];
}

// Слухач для кнопки, що змінює домен при натисканні
generateBtn.addEventListener('click', () => {
    // Прибираємо попередню анімацію
    domainElement.style.opacity = 0; 
    domainElement.style.transform = 'scale(0)'; 

    // Генерація нового домену
    const newDomain = getRandomDomain();
    setTimeout(() => {
        domainElement.textContent = newDomain;

        // Запускаємо анімацію появи
        domainElement.style.animation = 'none'; // Скидаємо анімацію
        domainElement.offsetHeight; // Примусово оновлюємо
        domainElement.style.animation = 'pixelAppear 0.5s forwards'; // Знову запускаємо анімацію
    }, 300); // Затримка перед появою нового домену
});
