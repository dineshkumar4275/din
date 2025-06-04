



document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // Calculate offset for fixed header
        const headerHeight = document.querySelector('nav').offsetHeight;
        const offset = targetSection.offsetTop - headerHeight - 20;

        // Smooth scroll
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });

        // Add visual feedback
        targetSection.style.border = '2px solid #f03d4e';
        setTimeout(() => {
          targetSection.style.border = 'none';
        }, 2000);
      }
    });
  });



    // Product Data
    const products = {
      "SILK SAREES": [
        {
          id: "silk-1",
          name: "Silk Saree 1",
          price: 1299,
          image: "/templates/Silksareeimages/silk saree 1.jpg",
          rating: "★★★★★ (5.0)"
        },
        {
          id: "silk-2",
          name: "Silk Saree 2",
          price: 1100,
          image: "/templates/Silksareeimages/silk saree 2.jpg",
          rating: "★★★☆☆ (3.0)"
        },
        {
          id: "silk-3",
          name: "Silk Saree 3",
          price: 1500,
          image: "/templates/Silksareeimages/silk saree 3.jpg",
          rating: "★★★★☆ (4.0)"
        },
        {
          id: "silk-4",
          name: "Silk Saree 4",
          price: 1209,
          image: "/templates/Silksareeimages/silk saree 4.jpg",
          rating: "★★★½☆ (3.5)"
        },
        {
          id: "silk-5",
          name: "Silk Saree 5",
          price: 1900,
          image: "/templates/Silksareeimages/silk saree 5.jpg",
          rating: "★★★★☆ (4.0)"
        },
        {
          id: "silk-6",
          name: "Silk Saree 6",
          price: 1199,
          image: "/templates/Silksareeimages/silk saree 6.jpg",
          rating: "★★★☆☆ (3.0)"
        },
        {
          id: "silk-7",
          name: "Silk Saree 7",
          price: 1999,
          image: "/templates/Silksareeimages/silk saree 7.jpg",
          rating: "★★★★★ (5.0)"
        },
        {
          id: "silk-8",
          name: "Silk Saree 8",
          price: 1909,
          image: "/templates/Silksareeimages/silk saree 8.jpg",
          rating: "★★★★★ (5.0)"
        },
        {
          id: "silk-9",
          name: "Silk Saree 9",
          price: 800,
          image: "/templates/Silksareeimages/silk saree 9.jpg",
          rating: "★★☆☆☆ (2.0)"
        },
        {
          id: "silk-10",
          name: "Silk Saree 10",
          price: 1109,
          image: "/templates/Silksareeimages/silk saree 10.jpg",
          rating: "★★★☆☆ (3.0)"
        },
        {
          id: "silk-11",
          name: "Silk Saree 11",
          price: 1109,
          image: "/templates/Silksareeimages/silk saree 11.jpg",
          rating: "★★★☆☆ (3.0)"
        },
        {
          id: "silk-12",
          name: "Silk Saree 12",
          price: 1219,
          image: "/templates/Silksareeimages/silk saree 12.jpg",
          rating: "★★★★★ (5.0)"
        }
      ],
      "COTTON SAREES": [
        {
          id: "cotton-1",
          name: "Cotton Saree 1",
          price: 1299,
          image: "/templates/cottonsareesimages/cotton_1.jpg",
          rating: "★★★★★ (5.0)"
        },
        {
          id: "cotton-2",
          name: "Cotton Saree 2",
          price: 1299,
          image: "/templates/cottonsareesimages/cotton_2.jpg",
          rating: "★★★☆☆ (3.0)"
        },
        {
          id: "cotton-3",
          name: "Cotton Saree 3",
          price: 1299,
          image: "/templates/cottonsareesimages/cotton_3.jpg",
          rating: "★★★★☆ (4.0)"
        },
        {
          id: "cotton-4",
          name: "Cotton Saree 4",
          price: 1299,
          image: "/templates/cottonsareesimages/cotton_4.jpg",
          rating: "★★★☆☆ (3.0)"
        },
        {
          id: "cotton-5",
          name: "Cotton Saree 5",
          price: 1299,
          image: "/templates/cottonsareesimages/cotton_5.jpg",
          rating: "★★★★☆ (4.0)"
        },
        {
          id: "cotton-6",
          name: "Cotton Saree 6",
          price: 1299,
          image: "/templates/cottonsareesimages/cotton_6.jpg",
          rating: "★★★★☆ (4.0)"
        },
        {
          id: "cotton-7",
          name: "Cotton Saree 7",
          price: 1299,
          image: "/templates/cottonsareesimages/cotton_7.jpg",
          rating: "★★★★★ (5.0)"
        },
        {
          id: "cotton-8",
          name: "Cotton Saree 8",
          price: 1299,
          image: "/templates/cottonsareesimages/cotton_8.jpg",
          rating: "★★★★☆ (4.0)"
        },
        {
          id: "cotton-9",
          name: "Cotton Saree 9",
          price: 1299,
          image: "/templates/cottonsareesimages/cotton_9.jpg",
          rating: "★★★★★ (5.0)"
        },
        {
          id: "cotton-10",
          name: "Cotton Saree 10",
          price: 1299,
          image: "/templates/cottonsareesimages/cotton_10.jpg",
       rating: "★★★★☆ (4.0)"
        },
        {
          id: "cotton-11",
          name: "Cotton Saree 11",
          price: 1299,
          image: "/templates/cottonsareesimages/cotton_11.jpg",
        rating: "★★★★★ (5.0)"
        },
        {
          id: "cotton-12",
          name: "Cotton Saree 12",
          price: 1299,
          image: "/templates/cottonsareesimages/cotton_12.jpg",
         rating: "★★★★☆ (4.0)"
        }
      ],
      "GEORGETTE SAREES": [
        {
          id: "georgette-1",
          name: "Georgette Saree 1",
          price: 900,
          image: "/templates/georgette sareeimages/Georgette Sarees1.jpg",
          rating: "★★★☆☆ (3.0)"        },
        {
          id: "georgette-2",
          name: "Georgette Saree 2",
          price:1000,
          image: "/templates/georgette sareeimages/Georgette Sarees 2.jpg"
        },
        {
          id: "georgette-3",
          name: "Georgette Saree 3",
          price: 699,
          image: "/templates/georgette sareeimages/Georgette Sarees 3.jpg",
          rating: "★★★☆☆ (3.0)" 
        },
        {
          id: "georgette-4",
          name: "Georgette Saree 4",
          price: 1109,
          image: "/templates/georgette sareeimages/Georgette Sarees 4.jpg",
       rating: "★★★★☆ (4.0)"
        },
        {
          id: "georgette-5",
          name: "Georgette Saree 5",
          price: 777,
          image: "/templates/georgette sareeimages/Georgette Sarees 5.jpg",
          rating: "★★★☆☆ (3.0)" 
        },
        {
          id: "georgette-6",
          name: "Georgette Saree 6",
          price: 799,
          image: "/templates/georgette sareeimages/Georgette Sarees 6.jpg",
          rating: "★★★☆☆ (3.0)" 
        },
        {
          id: "georgette-7",
          name: "Georgette Saree 7",
          price: 779,
          image: "/templates/georgette sareeimages/Georgette Sarees 7.jpg",
          rating: "★★★☆☆ (3.0)" 
        },
        {
          id: "georgette-8",
          name: "Georgette Saree 8",
          price: 899,
          image: "/templates/georgette sareeimages/Georgette Sarees 8.jpg",
       rating: "★★★★☆ (4.0)"
        },
        {
          id: "georgette-9",
          name: "Georgette Saree 9",
          price: 797,
          image: "/templates/georgette sareeimages/Georgette Sarees 9.jpg",
          rating: "★★★☆☆ (3.0)" 
        },
        {
          id: "georgette-10",
          name: "Georgette Saree 10",
          price: 1099,
          image: "/templates/georgette sareeimages/Georgette Sarees 10.jpg",
            rating: "★★★★☆ (4.0)"
        },
        {
          id: "georgette-11",
          name: "Georgette Saree 11",
          price: 1299,
          image: "/templates/georgette sareeimages/Georgette Sarees 11.jpg",
          rating: "★★★★★ (5.0)"
        },
        {
          id: "georgette-12",
          name: "Georgette Saree 12",
          price: 666,
          image: "/templates/georgette sareeimages/Georgette Sarees 12.jpg",
          rating: "★★★☆☆ (3.0)" 
        }
      ],
      
      "Sharara Sets": [
        {
          id: "Sharara-1",
          name: "Sharara Sets 1",
          price: 1299,
          image: "/templates/Sharara Setsimages/Sharara Sets 1.jpg",
        rating: "★★★★★ (5.0)"
        },
        {
          id: "Sharara-2",
          name: "Sharara Sets 2",
          price: 1499,
          image: "/templates/Sharara Setsimages/Sharara Sets 2.jpg",
        rating: "★★★★★ (5.0)"
        },
        {
          id: "Sharara-3",
          name: "Sharara Sets 3",
          price: 1799,
          image: "/templates/Sharara Setsimages/Sharara Sets 3.jpg",
          rating: "★★★★★ (5.0)"
        },
        {
          id: "Sharara Sets-4",
          name: "Sharara Sets 4",
          price: 1199,
          image: "/templates/Sharara Setsimages/Sharara Sets 4.jpg",
       rating: "★★★★☆ (4.0)"
        },
        {
          id: "Sharara-5",
          name: "Sharara Sets 5",
          price: 1929,
          image: "/templates/Sharara Setsimages/Sharara Sets 5.jpg",
        rating: "★★★★★ (5.0)"
        },
        {
          id: "Sharara-6",
          name: "Sharara Sets 6",
          price: 1129,
          image: "/templates/Sharara Setsimages/Sharara Sets 6.jpg",
         rating: "★★★★☆ (4.0)"
        },
        {
          id: "Sharara-7",
          name: "Sharara Sets 7",
          price: 1129,
          image: "/templates/Sharara Setsimages/Sharara Sets 7.jpg",
          rating: "★★★☆☆ (3.0)" 
        },
        {
          id: "Sharara-8",
          name: "Sharara Sets 8",
          price: 1100,
          image: "/templates/Sharara Setsimages/Sharara Sets 8.jpg",
         rating: "★★★★☆ (4.0)"
        },
        {
          id: "Sharara-9",
          name: "Sharara Sets 9",
          price: 1200,
          image: "/templates/Sharara Setsimages/Sharara Sets 9.jpg",
        rating: "★★★★☆ (4.0)"
        },
        {
          id: "Sharara-10",
          name: "Sharara Sets 10",
          price: 1200,
          image: "/templates/Sharara Setsimages/Sharara Sets 10.jpg",
          rating: "★★★☆☆ (3.0)" 
        },
        {
          id: "Sharara-11",
          name: "Sharara Sets 11",
          price: 1200,
          image: "/templates/Sharara Setsimages/Sharara Sets 11.jpg",
          rating: "★★★★☆ (4.0)"
        },
        {
          id: "Sharara-12",
          name: "Sharara Sets 12",
          price: 1200,
          image: "/templates/Sharara Setsimages/Sharara Sets 12.jpg",
         rating: "★★★★☆ (4.0)"
        },
       
       
      ],
      
      "Palazzo Sets": [
        {
          id: "Palazzo-1",
          name: "Palazzo Sets 1",
          price: 1299,
          image: "/templates/Palazzo Setsimages/Palazzo Sets 1.jpg",
         rating: "★★★★★ (5.0)"
        },
        {
          id: "Palazzo-2",
          name: "Palazzo Sets 2",
          price: 1499,
          image: "/templates/Palazzo Setsimages/Palazzo Sets 2.jpg",
         rating: "★★★★★ (5.0)"
        },
        {
          id: "Palazzo-3",
          name: "Palazzo Sets 3",
          price: 1099,
          image: "/templates/Palazzo Setsimages/Palazzo Sets 3.jpg",
          rating: "★★★☆☆ (3.0)" 
        },
        {
          id: "Palazzo-4",
          name: "Palazzo Sets 4",
          price: 1499,
          image: "/templates/Palazzo Setsimages/Palazzo Sets 4.jpg",
        rating: "★★★★☆ (4.0)"
        },
        {
          id: "Palazzo-5",
          name: "Palazzo Sets 5",
          price: 1199,
          image: "/templates/Palazzo Setsimages/Palazzo Sets 5.jpg",
        rating: "★★★★☆ (4.0)"
        },
        {
          id: "Palazzo-6",
          name: "Palazzo Sets 6",
          price: 1099,
          image: "/templates/Palazzo Setsimages/Palazzo Sets 6.jpg",
          rating: "★★★☆☆ (3.0)" 
        },
        {
          id: "Palazzo-7",
          name: "Palazzo Sets 7",
          price: 1299,
          image: "/templates/Palazzo Setsimages/Palazzo Sets 7.jpg",
        rating: "★★★★☆ (4.0)"
        },
        {
          id: "Palazzo-8",
          name: "Palazzo Sets 8",
          price: 1699,
          image: "/templates/Palazzo Setsimages/Palazzo Sets 8.jpg",
         rating: "★★★★★ (5.0)"
        },
        {
          id: "Palazzo-9",
          name: "Palazzo Sets 9",
          price: 999,
          image: "/templates/Palazzo Setsimages/Palazzo Sets 9.jpg",
                rating: "★★★★☆ (4.0)"
        },
        {
          id: "Palazzo-10",
          name: "Palazzo Sets 10",
          price: 1299,
          image: "/templates/Palazzo Setsimages/Palazzo Sets 10.jpg",
                rating: "★★★★☆ (4.0)"
        },
        {
          id: "Palazzo-11",
          name: "Palazzo Sets 11",
          price: 609,
          image: "/templates/Palazzo Setsimages/Palazzo Sets 11.jpg",
          rating: "★★★☆☆ (3.0)" 
        },
        {
          id: "Palazzo-12",
          name: "Palazzo Sets 12",
          price: 509,
          image: "/templates/Palazzo Setsimages/Palazzo Sets 12.jpg",
          rating: "★★★☆☆ (3.0)" 
        },
       
       
      ],
      "Rayon Kurtis": [
        {
          id: "Rayon-1",
          name: "Rayon Kurtis 1",
          price: 1299,
          image: "/templates/Rayon Kurtisimages/Rayon Kurtis 1.jpg",
              rating: "★★★★☆ (4.0)"
        },
        {
          id: "Rayon-2",
          name: "Rayon Kurtis 2",
          price: 899,
          image: "/templates/Rayon Kurtisimages/Rayon Kurtis 2.jpg"
        },
        {
          id: "Rayon-3",
          name: "Rayon Kurtis 3",
          price: 999,
          image: "/templates/Rayon Kurtisimages/Rayon Kurtis 3.jpg"
        },
        {
          id: "Rayon-4",
          name: "Rayon Kurtis 4",
          price: 777,
          image: "/templates/Rayon Kurtisimages/Rayon Kurtis 4.jpg",
          rating: "★★★☆☆ (3.0)"
        },
        {
         
          id: "Rayon-5",
          name: "Rayon Kurtis 5",
          price: 650,
          image: "/templates/Rayon Kurtisimages/Rayon Kurtis 5.jpg",
          rating: "★★★☆☆ (3.0)"
        },
        {
          id: "Rayon-6",
          name: "Rayon Kurtis 6",
          price:750,
          image: "/templates/Rayon Kurtisimages/Rayon Kurtis 6.jpg",
         rating: "★★★☆☆ (3.0)"
        },
        {
          id: "Rayon-7",
          name: "Rayon Kurtis 7",
          price: 799,
          image: "/templates/Rayon Kurtisimages/Rayon Kurtis 7.jpg",
        rating: "★★★★☆ (4.0)"
        },
        {
          id: "Rayon-8",
          name: "Rayon Kurtis 8",
          price: 599,
          image: "/templates/Rayon Kurtisimages/Rayon Kurtis 8.jpg",
         rating: "★★★☆☆ (3.0)"
        },
        {
          id: "Rayon-9",
          name: "Rayon Kurtis 9",
          price: 399,
          image: "/templates/Rayon Kurtisimages/Rayon Kurtis 9.jpg",
        rating: "★★★☆☆ (3.0)"
        },
        {
          id: "Rayon-10",
          name: "Rayon Kurtis 10",
          price: 899,
          image: "/templates/Rayon Kurtisimages/Rayon Kurtis 10.jpg",
        rating: "★★★★☆ (4.0)"
        },
        {
          id: "Rayon-11",
          name: "Rayon Kurtis 11",
          price: 959,
          image: "/templates/Rayon Kurtisimages/Rayon Kurtis 11.jpg",
        rating: "★★★★☆ (4.0)"
        },
        {
          id: "Rayon-12",
          name: "Rayon Kurtis 12",
          price: 1099,
          image: "/templates/Rayon Kurtisimages/Rayon Kurtis 12.jpg",
         rating: "★★★★☆ (4.0)"
        },
       
       
      ],
      "Anarkali Kurtis": [
        {
          id: "Anarkali-1",
          name: "Anarkali Kurtis 1",
          price: 1009,
          image: "/templates/Anarkali Kurtisimages/Anarkali Kurtis 1.jpg",
              rating: "★★★★☆ (4.0)"
        },
        {
          id: "Anarkali-2",
          name: "Anarkali Kurtis 1",
          price: 1289,
          image: "/templates/Anarkali Kurtisimages/Anarkali Kurtis 2.jpg",
          rating: "★★★★★ (5.0)"
        } ,
        {
          id: "Anarkali-3",
          name: "Anarkali Kurtis 3",
          price: 1111,
          image: "/templates/Anarkali Kurtisimages/Anarkali Kurtis 3.jpg",
              rating: "★★★★☆ (4.0)"
        },
        {
          id: "Anarkali-4",
          name: "Anarkali Kurtis 4",
          price: 1009,
          image: "/templates/Anarkali Kurtisimages/Anarkali Kurtis 4.jpg",
              rating: "★★★★☆ (4.0)"
        },
        {
          id: "Anarkali-5",
          name: "Anarkali Kurtis 5",
          price: 1899,
          image: "/templates/Anarkali Kurtisimages/Anarkali Kurtis 5.jpg",
              rating: "★★★★☆ (4.0)"
        },
        {
          id: "Anarkali-6",
          name: "Anarkali Kurtis 6",
          price: 1099,
          image: "/templates/Anarkali Kurtisimages/Anarkali Kurtis 6.jpg",
              rating: "★★★★☆ (4.0)"
        },
        {
          id: "Anarkali-7",
          name: "Anarkali Kurtis 7",
          price: 799,
          image: "/templates/Anarkali Kurtisimages/Anarkali Kurtis 7.jpg",
          rating: "★★★☆☆ (3.0)"    
        },
        {
          id: "Anarkali-8",
          name: "Anarkali Kurtis 8",
          price: 889,
          image: "/templates/Anarkali Kurtisimages/Anarkali Kurtis 8.jpg",
              rating: "★★★☆☆ (3.0)"
        },
        {
          id: "Anarkali-9",
          name: "Anarkali Kurtis 9",
          price: 999,
          image: "/templates/Anarkali Kurtisimages/Anarkali Kurtis 9.jpg",
              rating: "★★★★☆ (4.0)"
        },
        {
          id: "Anarkali-10",
          name: "Anarkali Kurtis 10",
          price: 1199,
          image: "/templates/Anarkali Kurtisimages/Anarkali Kurtis 10.jpg",
              rating: "★★★★☆ (4.0)"
        },
        {
          id: "Anarkali-11",
          name: "Anarkali Kurtis 11",
          price: 1699,
          image: "/templates/Anarkali Kurtisimages/Anarkali Kurtis 11.jpg",
              rating: "★★★★☆ (4.0)"
        },
        {
          id: "Anarkali-12",
          name: "Anarkali Kurtis 12",
          price: 1099,
          image: "/templates/Anarkali Kurtisimages/Anarkali Kurtis 12.jpg",
               rating: "★★★☆☆ (3.0)"
        },
       
       
      ],

    };

    // Cart Management
    let cartItems = [];

    // DOM Elements
    const cartIcon = document.getElementById('cart-icon');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCartBtn = document.getElementById('close-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const noItemsMsg = document.getElementById('no-items');
    const cartCount = document.getElementById('cart-count');

    // Initialize the page
    document.addEventListener('DOMContentLoaded', function() {
      renderProducts();
      setupEventListeners();
    });

    // Render all products
    function renderProducts() {
      Object.entries(products).forEach(([category, items]) => {
        const section = document.createElement('section');
        section.innerHTML = `
          <div class="section-title">
            <h3 id="pro">${category}</h3>
          </div>
          <div class="product-row" id="${category.toLowerCase().replace(/\s+/g, '-')}"></div>
        `;
        document.body.insertBefore(section, document.querySelector('footer'));
        
        const container = document.getElementById(category.toLowerCase().replace(/\s+/g, '-'));
        items.forEach(product => {
          const card = document.createElement('div');
          card.className = 'product-card';
          card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${product.rating ? `<div class="rating">${product.rating}</div>` : ''}
            <p>₹${product.price}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
          `;
          container.appendChild(card);
        });
      });
    }

    // Setup event listeners
    function setupEventListeners() {
      // Cart toggle
      cartIcon.addEventListener('click', toggleCart);
      closeCartBtn.addEventListener('click', toggleCart);
      
      // Event delegation for add to cart buttons
      document.addEventListener('click', function(e) {
        // Add to cart
        if (e.target.classList.contains('add-to-cart')) {
          const productId = e.target.dataset.id;
          const product = Object.values(products)
            .flat()
            .find(p => p.id === productId);
          if (product) addToCart(product);
        }
        
        // Cart quantity controls
        if (e.target.classList.contains('increase')) {
          const productId = e.target.dataset.id;
          const item = cartItems.find(item => item.id === productId);
          if (item) {
            item.quantity++;
            updateCartDisplay();
          }
        }
        
        if (e.target.classList.contains('decrease')) {
          const productId = e.target.dataset.id;
          const itemIndex = cartItems.findIndex(item => item.id === productId);
          if (itemIndex !== -1) {
            if (cartItems[itemIndex].quantity > 1) {
              cartItems[itemIndex].quantity--;
            } else {
              cartItems.splice(itemIndex, 1);
            }
            updateCartDisplay();
          }
        }
      });

      // Search functionality
      document.querySelector('.search-bar').addEventListener('submit', function(e) {
        e.preventDefault();
        const query = this.querySelector('input').value.trim();
        if (query) {
          alert(`Search feature coming soon. You searched for: "${query}"`);
        }
      });

      // Dropdown hover effects
      let dropdownTimer;
      document.querySelectorAll('.dropdown').forEach(dropdown => {
        const content = dropdown.querySelector('.dropdown-content');
        dropdown.addEventListener('mouseenter', () => {
          clearTimeout(dropdownTimer);
          content.style.opacity = '1';
          content.style.visibility = 'visible';
          content.style.transform = 'translateY(0)';
          content.style.pointerEvents = 'auto';
        });
        dropdown.addEventListener('mouseleave', () => {
          dropdownTimer = setTimeout(() => {
            content.style.opacity = '0';
            content.style.visibility = 'hidden';
            content.style.transform = 'translateY(10px)';
            content.style.pointerEvents = 'none';
          }, 300);
        });
      });
    }

    // Cart functions
    function toggleCart() {
      cartSidebar.classList.toggle('active');
    }

    function addToCart(product) {
      const existingItem = cartItems.find(item => item.id === product.id);
      if (existingItem) {
        
        existingItem.quantity++;
      } else {
        cartItems.push({...product, quantity: 1});
      }
      updateCartDisplay();
    }

    function updateCartDisplay() {
      cartItemsContainer.innerHTML = '';
      
      if (cartItems.length === 0) {
        noItemsMsg.style.display = 'block';
        cartCount.textContent = '0';
        return;
      }
      
      noItemsMsg.style.display = 'none';
      
      cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div class="item-details">
            <p class="item-name">${item.name}</p>
             <p class="item-rating">${item.rating}</p>
            <p class="item-price">₹${item.price}</p>
            <div class="quantity-control">
              <button class="decrease" data-id="${item.id}">-</button>
              <input type="text" value="${item.quantity}" readonly>
              <button class="increase" data-id="${item.id}">+</button>
            </div>
          </div>
        `;
        cartItemsContainer.appendChild(itemElement);
      });
      
      cartCount.textContent = cartItems.reduce((total, item) => total + item.quantity, 0);
    }
function updateCartDisplay() {
  cartItemsContainer.innerHTML = '';
  let total = 0; // Add total calculation

  if (cartItems.length === 0) {
    noItemsMsg.style.display = 'block';
    cartCount.textContent = '0';
    return;
  }

  noItemsMsg.style.display = 'none';

  cartItems.forEach(item => {
    total += item.price * item.quantity; // Calculate total
    const itemElement = document.createElement('div');
    itemElement.className = 'cart-item';
    itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="item-details">
        <p class="item-name">${item.name}</p>
        ${item.rating ? `<p class="item-rating">${item.rating}</p>` : ''}
        <p class="item-price">₹${item.price}</p>
        <div class="quantity-control">
          <button class="decrease" data-id="${item.id}">-</button>
          <input type="text" value="${item.quantity}" readonly>
          <button class="increase" data-id="${item.id}">+</button>
        </div>
      </div>
    `;
    cartItemsContainer.appendChild(itemElement);
  });

  // Add total display
  const totalElement = document.createElement('div');
  totalElement.className = 'cart-total';
  totalElement.innerHTML = `
    <div style="padding: 15px; border-top: 2px solid #444; margin-top: 20px;">
      <h3>Total: ₹${total.toFixed(2)}</h3>
    </div>
  `;
  cartItemsContainer.appendChild(totalElement);

  cartCount.textContent = cartItems.reduce((total, item) => total + item.quantity, 0);
}
    
    updateCartDisplay();
    
  
    

    // GST Configuration
    const GST_RATE = 0.05; // 5% GST

    // Modified updateCartDisplay function
    function updateCartDisplay() {
      cartItemsContainer.innerHTML = '';
      let subtotal = 0;

      if (cartItems.length === 0) {
        noItemsMsg.style.display = 'block';
        cartCount.textContent = '0';
        return;
      }

      noItemsMsg.style.display = 'none';

      // Render cart items
      cartItems.forEach(item => {
        subtotal += item.price * item.quantity;
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div class="item-details">
            <p class="item-name">${item.name}</p>
            ${item.rating ? `<p class="item-rating">${item.rating}</p>` : ''}
            <p class="item-price">₹${item.price.toFixed(2)}</p>
            <div class="quantity-control">
              <button class="decrease" data-id="${item.id}">-</button>
              <input type="text" value="${item.quantity}" readonly>
              <button class="increase" data-id="${item.id}">+</button>
            </div>
          </div>
        `;
        cartItemsContainer.appendChild(itemElement);
      });

      // Calculate GST and totals
      const gst = subtotal * GST_RATE;
      const total = subtotal + gst;

      // Create summary HTML
      const summaryHTML = `
        <div class="cart-summary">
          <div class="summary-row">
            <span>Subtotal:</span>
            <span>₹${subtotal.toFixed(2)}</span>
          </div>
          <div class="summary-row">
            <span>GST (${(GST_RATE * 100)}%):</span>
            <span>₹${gst.toFixed(2)}</span>
          </div>
          <div class="summary-row total-row">
            <span>Total:</span>
            <span class="total-amount">₹${total.toFixed(2)}</span>
          </div>
        </div>
      `;

      // Append summary to cart
      cartItemsContainer.insertAdjacentHTML('beforeend', summaryHTML);
      cartCount.textContent = cartItems.reduce((total, item) => total + item.quantity, 0);
    }

    // Keep all other functions same as before



    let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // Update login status display
  function updateAuthStatus() {
    const loginText = document.getElementById('login-text');
    if(isLoggedIn) {
      loginText.textContent = 'Account';
    } else {
      loginText.textContent = 'Login/Signup';
    }
  }

  function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("active");
  }

  function toggleCart() {
    document.querySelector('.cart-sidebar').classList.toggle('active');
  }

  // Modified Add to Cart functionality
  // document.addEventListener('click', function(e) {
    // if (e.target.classList.contains('add-to-cart')) {
    //   if(!isLoggedIn) {
    //     e.preventDefault();
    //     const returnUrl = encodeURIComponent(window.location.href);
    //     window.location.href = `/Loginpage/Login.html?return=${returnUrl}`;
    //     return;
    //   }
      
    //   // Existing add to cart logic
    //   const productId = e.target.dataset.id;
    //   const product = getProductById(productId);
    //   addToCart(product);
    // }
  // });