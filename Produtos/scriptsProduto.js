document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { 
            name: 'Tapete de Yoga', 
            description: 'Tapete de alta qualidade para melhor suporte em suas sessões de yoga.', 
            price: 'R$ 120,00', 
            discountPrice: 'R$ 100,00',
            image: 'path/to/yoga-mat.jpg' // Adicione o caminho da imagem
        },
        { 
            name: 'Bloco de Yoga', 
            description: 'Bloco de apoio para aprimorar suas posições e melhorar o equilíbrio.', 
            price: 'R$ 45,00', 
            discountPrice: 'R$ 40,00',
            image: 'path/to/yoga-block.jpg' // Adicione o caminho da imagem
        },
        { 
            name: 'Garrafa de Água Ecológica', 
            description: 'Garrafa sustentável para se manter hidratado durante as práticas.', 
            price: 'R$ 60,00', 
            discountPrice: 'R$ 50,00',
            image: 'path/to/water-bottle.jpg' // Adicione o caminho da imagem
        },
        { 
            name: 'Conjunto de Roupa de Yoga', 
            description: 'Conjunto confortável e estiloso para suas práticas diárias.', 
            price: 'R$ 150,00', 
            discountPrice: 'R$ 130,00',
            image: 'path/to/yoga-clothes.jpg' // Adicione o caminho da imagem
        },
        // Adicione mais produtos aqui...
    ];

    const productContainer = document.querySelector('.product-list');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <div class="product-image" style="background-image: url(${product.image})"></div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><del>${product.price}</del> <strong>${product.discountPrice}</strong></p>
            <button class="buy-button">Comprar</button>
        `;
        productContainer.appendChild(productItem);
    });
});
