const translations = {
    ko: {
        page_title: "나노 바나나 콜렉션",
        logo: "Nano Banana",
        nav_home: "홈",
        nav_products: "제품",
        nav_about: "소개",
        nav_contact: "문의",
        hero_title: "미래를 여는 나노 바나나",
        hero_subtitle: "최첨단 나노 기술과 예술이 결합된 특별한 바나나를 만나보세요.",
        products_title: "나노 바나나 시리즈",
        theme_dark: "다크 모드",
        theme_light: "라이트 모드",
        footer_name: "나노 바나나 스튜디오",
        products: [
            { name: "나노 바나나 청자 에디션", price: "450,000원", image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=2030&auto=format&fit=crop" },
            { name: "나노 바나나 백자 달항아리", price: "650,000원", image: "https://images.unsplash.com/photo-1594283359529-875151240409?q=80&w=1974&auto=format&fit=crop" },
            { name: "나노 바나나 분청사기 한정판", price: "380,000원", image: "https://images.unsplash.com/photo-1587334274328-64186a80aeee?q=80&w=2081&auto=format&fit=crop" }
        ]
    },
    en: {
        page_title: "Nano Banana Collection",
        logo: "Nano Banana",
        nav_home: "Home",
        nav_products: "Products",
        nav_about: "About",
        nav_contact: "Contact",
        hero_title: "Nano Banana: The Future",
        hero_subtitle: "Discover special bananas where cutting-edge nano-tech meets art.",
        products_title: "Nano Banana Series",
        theme_dark: "Dark Mode",
        theme_light: "Light Mode",
        footer_name: "Nano Banana Studio",
        products: [
            { name: "Nano Banana Celadon Edition", price: "₩450,000", image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=2030&auto=format&fit=crop" },
            { name: "Nano Banana Moon Jar Edition", price: "₩650,000", image: "https://images.unsplash.com/photo-1594283359529-875151240409?q=80&w=1974&auto=format&fit=crop" },
            { name: "Nano Banana Buncheong Limited", price: "₩380,000", image: "https://images.unsplash.com/photo-1587334274328-64186a80aeee?q=80&w=2081&auto=format&fit=crop" }
        ]
    },
    ja: {
        page_title: "ナノバナナコレクション",
        logo: "Nano Banana",
        nav_home: "ホーム",
        nav_products: "製品",
        nav_about: "紹介",
        nav_contact: "お問い合わせ",
        hero_title: "未来を創るナノバナナ",
        hero_subtitle: "最先端ナノ技術と芸術が融合した特別なバナナに出会ってください。",
        products_title: "ナノバナナシリーズ",
        theme_dark: "ダークモード",
        theme_light: "ライトモード",
        footer_name: "ナノバナナスタジオ",
        products: [
            { name: "ナノバナナ青磁エディション", price: "450,000ウォン", image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=2030&auto=format&fit=crop" },
            { name: "ナノバナナ白磁月壺", price: "650,000ウォン", image: "https://images.unsplash.com/photo-1594283359529-875151240409?q=80&w=1974&auto=format&fit=crop" },
            { name: "ナノバナナ粉青沙器限定版", price: "380,000ウォン", image: "https://images.unsplash.com/photo-1587334274328-64186a80aeee?q=80&w=2081&auto=format&fit=crop" }
        ]
    }
};

class ProductCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'product-card');

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
                padding-top: 100%;
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
            .product-card:hover img { transform: scale(1.05); }
            .content { padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1; }
            h3 { font-family: var(--font-serif, serif); font-size: 1.1rem; margin: 0 0 0.5rem 0; font-weight: 600; }
            p { color: var(--accent-color, #8d6e63); font-weight: 500; margin: auto 0 0 0; font-size: 1rem; }
        `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['name', 'price', 'image'];
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const wrapper = this.shadowRoot.querySelector('.product-card');
        if (!wrapper) return;
        
        wrapper.innerHTML = `
            <div class="image-container">
                <img src="${this.getAttribute('image')}" alt="${this.getAttribute('name')}">
            </div>
            <div class="content">
                <h3>${this.getAttribute('name')}</h3>
                <p>${this.getAttribute('price')}</p>
            </div>
        `;
    }
}

customElements.define('product-card', ProductCard);

// Language & Theme State
let currentLang = localStorage.getItem('lang') || 'ko';

function updateUI() {
    // Update static text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    // Update dynamic products
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    translations[currentLang].products.forEach(p => {
        const card = document.createElement('product-card');
        card.setAttribute('name', p.name);
        card.setAttribute('price', p.price);
        card.setAttribute('image', p.image);
        productList.appendChild(card);
    });

    // Update active lang button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });

    // Update theme button text
    const themeBtn = document.getElementById('theme-btn');
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    themeBtn.textContent = translations[currentLang][isDark ? 'theme_light' : 'theme_dark'];
}

// Event Listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentLang = btn.getAttribute('data-lang');
        localStorage.setItem('lang', currentLang);
        updateUI();
    });
});

const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    updateUI();
});

// Initialize
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') document.body.setAttribute('data-theme', 'dark');

function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    clockElement.textContent = now.toLocaleString(currentLang === 'ko' ? 'ko-KR' : (currentLang === 'ja' ? 'ja-JP' : 'en-US'));
}

setInterval(updateClock, 1000);
updateClock();
updateUI();
