document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: 'Tapete de Yoga', description: 'Equilíbrio em cada pose, você deve ter.', price: 'R$ 120,00' },
        { name: 'Bloco de Yoga', description: 'Suporte e estabilidade, você encontrará.', price: 'R$ 45,00' },
        { name: 'Garrafa de Água Ecológica', description: 'Hidratação, essencial é.', price: 'R$ 60,00' }
    ];

    const classes = [
        { title: 'Domine a Força: Yoga para Iniciantes', level: 'Iniciante' },
        { title: 'Força Interior: Yoga Poderosa', level: 'Avançado' },
        { title: 'Mindfulness e Meditação', level: 'Todos os Níveis' }
    ];

    const productContainer = document.querySelector('.product-list');
    const classContainer = document.querySelector('.class-list');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>${product.price}</strong></p>
        `;
        productContainer.appendChild(productItem);
    });

    classes.forEach(yogaClass => {
        const classItem = document.createElement('div');
        classItem.classList.add('class-item');
        classItem.innerHTML = `
            <h3>${yogaClass.title}</h3>
            <p>Nível: ${yogaClass.level}</p>
        `;
        classContainer.appendChild(classItem);
    });

    // Adicionando evento de clique ao botão para exibir a navbar e o conteúdo
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        // Esconder o header
        document.querySelector('header').style.display = 'none';
        
        // Exibir a navbar, o conteúdo principal e o footer
        document.getElementById('main-navbar').classList.remove('hidden');
        document.querySelector('main').classList.remove('hidden');
        document.querySelector('footer').classList.remove('hidden');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: 'Tapete de Yoga', description: 'Equilíbrio em cada pose, você deve ter.', price: 'R$ 120,00', discountPrice: 'R$ 90,00', category: 'yoga' },
        { name: 'Bloco de Yoga', description: 'Suporte e estabilidade, você encontrará.', price: 'R$ 45,00', discountPrice: 'R$ 30,00', category: 'yoga' },
        { name: 'Garrafa de Água Ecológica', description: 'Hidratação, essencial é.', price: 'R$ 60,00', discountPrice: 'R$ 50,00', category: 'acessório' }
    ];

    const classes = [
        { title: 'Domine a Força: Yoga para Iniciantes', level: 'Iniciante' },
        { title: 'Força Interior: Yoga Poderosa', level: 'Avançado' },
        { title: 'Mindfulness e Meditação', level: 'Todos os Níveis' }
    ];

    const productContainer = document.querySelector('.product-list');
    const classContainer = document.querySelector('.class-list');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        // Se for um produto relacionado a Yoga, adiciona uma classe especial
        if (product.category === 'yoga') {
            productItem.classList.add('yoga-product');
        }

        // Adiciona a formatação de preço e desconto
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><small>Preço original: <del>${product.price}</del></small></p>
            <p><strong>Preço com desconto: ${product.discountPrice}</strong></p>
        `;
        productContainer.appendChild(productItem);
    });

    classes.forEach(yogaClass => {
        const classItem = document.createElement('div');
        classItem.classList.add('class-item');
        classItem.innerHTML = `
            <h3>${yogaClass.title}</h3>
            <p>Nível: ${yogaClass.level}</p>
        `;
        classContainer.appendChild(classItem);
    });

    // Adicionando evento de clique ao botão para exibir a segunda "página"
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        document.querySelector('header').style.display = 'none'; // Esconde a tela principal
        document.querySelector('main').classList.remove('hidden'); // Exibe a segunda parte
        document.querySelector('footer').classList.remove('hidden'); // Exibe o rodapé
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: 'Tapete de Yoga', description: 'Equilíbrio em cada pose, você deve ter.', price: 'R$ 120,00', discountPrice: 'R$ 90,00', category: 'yoga', image: 'path/to/tapete.jpg' },
        { name: 'Bloco de Yoga', description: 'Suporte e estabilidade, você encontrará.', price: 'R$ 45,00', discountPrice: 'R$ 30,00', category: 'yoga', image: 'path/to/bloco.jpg' },
        { name: 'Garrafa de Água Ecológica', description: 'Hidratação, essencial é.', price: 'R$ 60,00', discountPrice: 'R$ 50,00', category: 'acessório', image: 'path/to/garrafa.jpg' }
    ];

    const productContainer = document.querySelector('.product-list');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        // Adiciona a classe especial para produtos de Yoga
        if (product.category === 'yoga') {
            productItem.classList.add('yoga-product');
        }

        // Adiciona o conteúdo do produto com a imagem de fundo
        productItem.innerHTML = `
            <div class="product-image" style="background-image: url(${product.image});"></div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><small>Preço original: <del>${product.price}</del></small></p>
            <p><strong>Preço com desconto: ${product.discountPrice}</strong></p>
        `;
        productContainer.appendChild(productItem);
    });
});
