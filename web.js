
// Add to cart functionality
document.querySelectorAll('.fa-shopping-cart').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const product = this.closest('.bg-white');
        const productName = product.querySelector('h3').textContent;
        
        // Animation feedback
        this.classList.add('text-green-600');
        setTimeout(() => {
            this.classList.remove('text-green-600');
        }, 1000);

        // You could implement actual cart functionality here
        console.log(`Added ${productName} to cart`);
    });
});

// Search functionality
const searchInput = document.querySelector('input[type="search"]');
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        // Implement search functionality here
        console.log(`Searching for: ${searchTerm}`);
    });
}

// Newsletter subscription
const newsletterForm = document.querySelector('.bg-blue-50 .flex');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        if (email) {
            // Implement newsletter subscription here
            console.log(`Subscribing email: ${email}`);
            this.querySelector('input[type="email"]').value = '';
            alert('Thank you for subscribing!');
        }
    });
}

// Mobile responsiveness enhancements
const handleResize = () => {
    const sidebar = document.querySelector('aside');
    if (window.innerWidth < 768) {
        sidebar?.classList.add('hidden');
    } else {
        sidebar?.classList.remove('hidden');
    }
};

window.addEventListener('resize', handleResize);


