/**
 * Architecture LP Demo - Enhanced Script
 * Handles animations, smooth scrolling, and parallax
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Reveal Animations (Intersection Observer)
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));


    // 2. Parallax Scrolling for Works Sections
    const workImages = document.querySelectorAll('.work-parallax-img');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        workImages.forEach(img => {
            const parent = img.closest('.work-section');
            const parentOffset = parent.offsetTop;
            const parentHeight = parent.offsetHeight;
            const winHeight = window.innerHeight;

            if (scrolled + winHeight > parentOffset && scrolled < parentOffset + parentHeight) {
                const relativeScroll = scrolled - parentOffset;
                const translateY = relativeScroll * 0.15;
                img.style.transform = `translateY(${translateY}px)`;
            }
        });
    });


    // 3. Header Visibility & Style on Scroll
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    // 4. Smooth Anchor Scrolling
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Contact Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('お問い合わせありがとうございます。メッセージを受け付けました。');
            contactForm.reset();
        });
    }

});
