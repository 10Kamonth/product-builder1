class ProductCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'product-card');

        const image = document.createElement('img');
        image.src = this.getAttribute('image');
        image.alt = this.getAttribute('name');

        const name = document.createElement('h3');
        name.textContent = this.getAttribute('name');

        const price = document.createElement('p');
        price.textContent = this.getAttribute('price');

        const style = document.createElement('style');
        style.textContent = `
            .product-card {
                background-color: var(--card-bg, white);
                color: var(--text-color, #333);
                border: 1px solid var(--card-border, #e0e0e0);
                border-radius: 8px;
                padding: 20px;
                text-align: center;
                box-shadow: 0 4px 8px var(--shadow-color, rgba(0,0,0,0.1));
                transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease;
            }

            .product-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 8px 16px var(--shadow-color, rgba(0,0,0,0.2));
            }

            .product-card img {
                max-width: 100%;
                height: auto;
                border-radius: 8px;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(image);
        wrapper.appendChild(name);
        wrapper.appendChild(price);
    }
}

customElements.define('product-card', ProductCard);

// Theme Toggle Logic
const themeBtn = document.getElementById('theme-btn');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    themeBtn.textContent = '라이트 모드';
}

themeBtn.addEventListener('click', () => {
    let theme = document.body.getAttribute('data-theme');
    if (theme === 'dark') {
        document.body.removeAttribute('data-theme');
        themeBtn.textContent = '다크 모드';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeBtn.textContent = '라이트 모드';
        localStorage.setItem('theme', 'dark');
    }
});

// Clock Logic
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    clockElement.textContent = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call
