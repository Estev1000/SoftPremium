document.addEventListener('DOMContentLoaded', () => {

    // DOM Elements
    const productsContainer = document.getElementById('products-container');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('product-modal');
    const closeModal = document.querySelector('.close-modal');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');

    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        if (navList.style.display === 'flex') {
            navList.style.display = 'none';
        } else {
            navList.style.display = 'flex';
            navList.style.flexDirection = 'column';
            navList.style.position = 'absolute';
            navList.style.top = '80px';
            navList.style.left = '0';
            navList.style.width = '100%';
            navList.style.backgroundColor = '#fff';
            navList.style.padding = '1rem';
            navList.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
        }
    });

    // Render Products
    function renderProducts(category = 'all') {
        productsContainer.innerHTML = '';

        const filteredProducts = category === 'all'
            ? products
            : products.filter(p => p.category === category);

        if (filteredProducts.length === 0) {
            productsContainer.innerHTML = '<p class="text-center">No se encontraron productos en esta categoría.</p>';
            return;
        }

        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            // Icon handling for placeholder
            let iconClass = 'fa-box-open';
            if (product.category === 'gastronomia') iconClass = 'fa-utensils';
            if (product.category === 'salud') iconClass = 'fa-heart-pulse';
            if (product.category === 'gestion') iconClass = 'fa-chart-pie';
            if (product.category === 'ventas') iconClass = 'fa-cash-register';
            if (product.category === 'transporte') iconClass = 'fa-car';
            if (product.category === 'educacion') iconClass = 'fa-graduation-cap';

            productCard.innerHTML = `
                <div class="product-img-wrapper" onclick="openModal(${product.id})">
                    ${product.image && !product.image.startsWith('img/')
                    ? `<img src="${product.image}" alt="${product.title}">`
                    : `<i class="fa-solid ${iconClass} product-placeholder"></i>`
                }
                </div>
                <div class="product-content">
                    <span class="product-cat">${product.category}</span>
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-desc">${product.description}</p>
                    <div class="product-footer">
                        <span class="product-price">${product.price === 'Consultar' ? 'Consultar Precio' : '$' + product.price}</span>
                        <a href="#" class="view-btn" onclick="openModal(${product.id}); return false;">Ver Detalle <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            `;
            productsContainer.appendChild(productCard);
        });
    }

    // Initial Render
    renderProducts();

    // Filter Logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');
            // Filter
            const filterValue = btn.getAttribute('data-filter');
            renderProducts(filterValue);
        });
    });

    // Modal Logic
    window.openModal = (id) => {
        const product = products.find(p => p.id === id);
        if (!product) return;

        // Populate Modal
        document.getElementById('modal-title').innerText = product.title;
        document.getElementById('modal-desc').innerText = product.description;
        document.getElementById('modal-category').innerText = product.category.toUpperCase();
        document.getElementById('modal-price').innerText = product.price === 'Consultar' ? 'Consultar' : '$' + product.price;

        // Image/Icon in modal
        const modalImgContainer = document.querySelector('.modal-image');
        modalImgContainer.innerHTML = ''; // Clear previous

        if (product.image && !product.image.startsWith('img/')) {
            const imgEl = document.createElement('img');
            imgEl.src = product.image;
            imgEl.alt = product.title;
            modalImgContainer.appendChild(imgEl);
        } else {
            let iconClass = 'fa-box-open';
            if (product.category === 'gastronomia') iconClass = 'fa-utensils';
            if (product.category === 'salud') iconClass = 'fa-heart-pulse';
            if (product.category === 'gestion') iconClass = 'fa-chart-pie';
            if (product.category === 'ventas') iconClass = 'fa-cash-register';
            if (product.category === 'transporte') iconClass = 'fa-car';
            if (product.category === 'educacion') iconClass = 'fa-graduation-cap';

            const iconEl = document.createElement('i');
            iconEl.className = `fa-solid ${iconClass}`;
            iconEl.style.fontSize = '8rem';
            iconEl.style.color = '#ccc';
            modalImgContainer.appendChild(iconEl);
        }

        // Features
        const featuresList = document.getElementById('modal-features');
        featuresList.innerHTML = '';
        if (product.features && product.features.length > 0) {
            product.features.forEach(feature => {
                const li = document.createElement('li');
                li.innerText = feature;
                featuresList.appendChild(li);
            });
        }

        // WhatsApp Link
        const message = `Hola, me interesa el software *${product.title}*. ¿Me podrías dar más información?`;
        const waLink = `https://wa.me/5492664024390?text=${encodeURIComponent(message)}`;
        document.getElementById('modal-buy-btn').href = waLink;

        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
});
