
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
                background-color: white;
                border: 1px solid #e0e0e0;
                border-radius: 8px;
                padding: 20px;
                text-align: center;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            .product-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 8px 16px rgba(0,0,0,0.2);
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
