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
                border: 1px solid var(--card-border, transparent);
                border-radius: 12px;
                padding: 0;
                text-align: left;
                box-shadow: 0 10px 30px var(--shadow-color, rgba(0,0,0,0.05));
                transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                overflow: hidden;
                display: flex;
                flex-direction: column;
                height: 100%;
            }

            .product-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 20px 40px var(--shadow-color, rgba(0,0,0,0.1));
            }

            .image-container {
                width: 100%;
                padding-top: 100%; /* 1:1 Aspect Ratio */
                position: relative;
                overflow: hidden;
                background-color: #f0f0f0;
            }

            .product-card img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.6s ease;
            }

            .product-card:hover img {
                transform: scale(1.05);
            }

            .content {
                padding: 1.5rem;
                display: flex;
                flex-direction: column;
                flex-grow: 1;
            }

            h3 {
                font-family: var(--font-serif, 'Nanum Myeongjo', serif);
                font-size: 1.1rem;
                margin: 0 0 0.5rem 0;
                font-weight: 600;
            }

            p {
                color: var(--accent-color, #8d6e63);
                font-weight: 500;
                margin: auto 0 0 0;
                font-size: 1rem;
            }
        `;

        const content = document.createElement('div');
        content.setAttribute('class', 'content');
        
        const imageContainer = document.createElement('div');
        imageContainer.setAttribute('class', 'image-container');
        
        imageContainer.appendChild(image);
        content.appendChild(name);
        content.appendChild(price);

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(imageContainer);
        wrapper.appendChild(content);
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
