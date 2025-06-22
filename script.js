document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    // Toggle Nav for mobile
    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burgerMenu.classList.toggle('toggle'); // Optional: untuk animasi burger icon
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile nav after clicking a link
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                burgerMenu.classList.remove('toggle');
            }
        });
    });

    // Optional: Implement a simple testimonial slider
    // (Ini membutuhkan lebih banyak kode HTML dan CSS untuk navigasi slider)
    // Misalnya, Anda bisa menggunakan library seperti Swiper.js atau Slick Carousel
    // Jika tidak menggunakan library, Anda perlu menulis logika JavaScript sendiri
    // untuk menggeser testimonial.

    // Contoh dasar untuk slider (tanpa navigasi, hanya item yang berubah)
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonialItems.forEach((item, i) => {
            item.style.display = (i === index) ? 'block' : 'none';
        });
    }

    // Panggil setiap beberapa detik
    // setInterval(() => {
    //     currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
    //     showTestimonial(currentTestimonial);
    // }, 5000); // Ganti setiap 5 detik

    showTestimonial(currentTestimonial); // Tampilkan yang pertama saat load
});