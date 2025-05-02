// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar componentes de Materialize
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    // Inicializar dropdown
    var dropdowns = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(dropdowns, {
        coverTrigger: false,
        constrainWidth: false
    });

    // Carrito de compras
    const toggleBtn = document.getElementById('toggleCart');
    const cartPanel = document.getElementById('cartPanel');
    const closeCart = document.querySelector('.close-cart');
    const cartItems = document.querySelector('.cart-items');
    const emptyCartMsg = document.querySelector('.empty-cart');
    const subtotalElement = document.querySelector('.subtotal .price');
    const checkoutBtn = document.querySelector('.checkout-btn');

    // Array para almacenar los productos en el carrito
    let cart = [];

    // Función para actualizar la visualización del carrito
    function updateCartDisplay() {
        // Limpiar el contenido actual del carrito
        cartItems.innerHTML = '';

        // Si el carrito está vacío, mostrar el mensaje
        if (cart.length === 0) {
            cartItems.innerHTML = '<div class="empty-cart"><p>No has agregado alimentos a tu orden</p></div>';
            subtotalElement.textContent = '$0.00';
            checkoutBtn.classList.add('disabled');
            return;
        }

        // Si hay productos, eliminar el mensaje de carrito vacío
        checkoutBtn.classList.remove('disabled');

        // Calcular subtotal
        let subtotal = 0;

        // Mostrar cada producto en el carrito
        cart.forEach((item, index) => {
            subtotal += item.price * item.quantity;

            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <div class="item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="item-details">
                    <h6>${item.name}</h6>
                    <div class="item-meta">
                        <span class="item-price">$${item.price.toFixed(2)}</span>
                        <span class="item-size">${item.size}</span>
                    </div>
                </div>
                <div class="item-quantity">
                    <button class="quantity-btn decrease" data-index="${index}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn increase" data-index="${index}">+</button>
                </div>
                <button class="remove-item" data-index="${index}">
                    <i class="fas fa-trash"></i>
                </button>
            `;

            cartItems.appendChild(itemElement);
        });

        // Actualizar el subtotal
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;

        // Guardar carrito en localStorage para persistencia
        localStorage.setItem('cineBloomCart', JSON.stringify(cart));

        // Añadir listeners a los botones de cantidad y eliminar
        addCartItemListeners();
    }

    // Función para añadir listeners a los botones del carrito
    function addCartItemListeners() {
        // Botones para incrementar cantidad
        document.querySelectorAll('.quantity-btn.increase').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                cart[index].quantity++;
                updateCartDisplay();
            });
        });

        // Botones para disminuir cantidad
        document.querySelectorAll('.quantity-btn.decrease').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                } else {
                    cart.splice(index, 1);
                }
                updateCartDisplay();
            });
        });

        // Botones para eliminar producto
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                cart.splice(index, 1);
                updateCartDisplay();
            });
        });
    }

    // Función para añadir producto al carrito
    function addToCart(name, price, size, image) {
        // Comprobar si el producto ya está en el carrito
        const existingItemIndex = cart.findIndex(item =>
            item.name === name && item.size === size
        );

        if (existingItemIndex !== -1) {
            // Si ya existe, incrementar cantidad
            cart[existingItemIndex].quantity++;
        } else {
            // Si no existe, añadir nuevo item
            cart.push({
                name,
                price,
                size,
                image,
                quantity: 1
            });
        }

        // Actualizar visualización
        updateCartDisplay();

        // Mostrar notificación y abrir el carrito
        M.toast({html: `${name} agregado al carrito`, classes: 'rounded green'});
        cartPanel.classList.add('open');
    }

    // Cargar carrito desde localStorage si existe
    const savedCart = localStorage.getItem('cineBloomCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }

    // Evento para abrir/cerrar el carrito - reemplaza el código existente
    toggleBtn.addEventListener('click', () => {
        cartPanel.classList.toggle('open');
        document.body.classList.toggle('cart-open');
    });

    closeCart.addEventListener('click', (e) => {
        e.preventDefault();
        cartPanel.classList.remove('open');
        document.body.classList.remove('cart-open');
    });

    document.addEventListener('mousedown', (e) => {
        // Solo cerramos si hacemos clic fuera del carrito Y fuera del botón toggle
        if (!cartPanel.contains(e.target) && !toggleBtn.contains(e.target)) {
            cartPanel.classList.remove('open');
            document.body.classList.remove('cart-open');
        }
        // Si hacemos clic dentro del carrito, no hacemos nada (dejamos el carrito abierto)
    });

    // Botones de agregar al carrito
    const addButtons = document.querySelectorAll('.add-to-cart');
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtener información del producto
            const card = this.closest('.food-card');
            const name = card.querySelector('.food-title').textContent;
            const priceText = card.querySelector('.price').textContent;
            const price = parseFloat(priceText.replace('$', ''));
            const size = card.querySelector('.size').textContent;
            const image = card.querySelector('.food-image img').src;

            // Añadir al carrito
            addToCart(name, price, size, image);
        });
    });

    // Evento para el botón de checkout
    checkoutBtn.addEventListener('click', function(e) {
        if (cart.length === 0) {
            e.preventDefault();
            M.toast({html: 'Tu carrito está vacío', classes: 'rounded red'});
        } else {
            // Si estuviéramos en producción, aquí redirigimos a la página de pago
            // window.location.href = 'checkout.html';

            // Como es una demo, simplemente almacenamos los datos del carrito y simulamos la redirección
            localStorage.setItem('checkoutItems', JSON.stringify(cart));
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            localStorage.setItem('checkoutSubtotal', subtotal);

            alert('Redirigiendo a la página de pago...\nTotal: $' + subtotal.toFixed(2));
            window.location.href = 'checkout.html';
        }
    });
});