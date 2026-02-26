const translations = {
    ko: {
        page_title: "한국 도자기",
        logo: "한국 도자기",
        nav_home: "홈",
        nav_products: "제품",
        nav_about: "소개",
        nav_contact: "문의",
        hero_title: "아름다운 한국의 미",
        hero_subtitle: "전통과 현대가 어우러진 특별한 도자기를 만나보세요.",
        products_title: "추천 제품",
        theme_dark: "다크 모드",
        theme_light: "라이트 모드",
        footer_name: "한국 도자기",
        products: [
            { name: "청자 상감 운학문 매병", price: "350,000원", image: "https://images.unsplash.com/photo-1578973625969-8e12d4d124d7?q=80&w=1974&auto=format&fit=crop" },
            { name: "백자 달항아리", price: "550,000원", image: "https://images.unsplash.com/photo-1615325852939-715c5a894a4a?q=80&w=2070&auto=format&fit=crop" },
            { name: "분청사기 박지철채화문 병", price: "280,000원", image: "https://images.unsplash.com/photo-1578973625969-8e12d4d124d7?q=80&w=1974&auto=format&fit=crop" }
        ]
    },
    en: {
        page_title: "Korean Pottery",
        logo: "K-Pottery",
        nav_home: "Home",
        nav_products: "Products",
        nav_about: "About",
        nav_contact: "Contact",
        hero_title: "The Beauty of Korea",
        hero_subtitle: "Discover special pottery where tradition meets modernity.",
        products_title: "Featured Collections",
        theme_dark: "Dark Mode",
        theme_light: "Light Mode",
        footer_name: "Korean Pottery Studio",
        products: [
            { name: "Celadon Prunus Vase", price: "₩350,000", image: "https://images.unsplash.com/photo-1578973625969-8e12d4d124d7?q=80&w=1974&auto=format&fit=crop" },
            { name: "White Porcelain Moon Jar", price: "₩550,000", image: "https://images.unsplash.com/photo-1615325852939-715c5a894a4a?q=80&w=2070&auto=format&fit=crop" },
            { name: "Buncheong Decorated Jar", price: "₩280,000", image: "https://images.unsplash.com/photo-1578973625969-8e12d4d124d7?q=80&w=1974&auto=format&fit=crop" }
        ]
    },
    ja: {
        page_title: "韓国の陶磁器",
        logo: "韓国陶磁器",
        nav_home: "ホーム",
        nav_products: "製品",
        nav_about: "紹介",
        nav_contact: "お問い合わせ",
        hero_title: "美しい韓国の美",
        hero_subtitle: "伝統と現代が調和した特別な陶磁器に出会ってください。",
        products_title: "おすすめ商品",
        theme_dark: "ダークモード",
        theme_light: "ライトモード",
        footer_name: "韓国陶磁器工房",
        products: [
            { name: "青磁象嵌雲鶴文梅瓶", price: "350,000ウォン", image: "https://images.unsplash.com/photo-1578973625969-8e12d4d124d7?q=80&w=1974&auto=format&fit=crop" },
            { name: "白磁月壺", price: "550,000ウォン", image: "https://images.unsplash.com/photo-1615325852939-715c5a894a4a?q=80&w=2070&auto=format&fit=crop" },
            { name: "粉青沙器剥地철채화문병", price: "280,000ウォン", image: "https://images.unsplash.com/photo-1578973625969-8e12d4d124d7?q=80&w=1974&auto=format&fit=crop" }
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
