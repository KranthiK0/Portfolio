/**
 * ============================================
 * PORTFOLIO WEBSITE - MAIN JAVASCRIPT
 * ============================================
 * 
 * Features:
 * - Sidebar toggle functionality
 * - Page navigation system
 * - Scroll reveal animations
 * - Typewriter effect for title
 * - Neural network background animation
 * - Form validation
 * - Portfolio filtering
 * 
 * Last Updated: January 2025
 * ============================================
 */

'use strict';

/**
 * ============================================
 * UTILITY FUNCTIONS
 * ============================================
 */

/**
 * Toggle active class on element
 * @param {HTMLElement} elem - Element to toggle
 * Used for sidebar expand/collapse and other UI toggles
 */
const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}



/**
 * ============================================
 * SIDEBAR FUNCTIONALITY
 * ============================================
 */

// Sidebar DOM elements
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

/**
 * Sidebar toggle for mobile devices
 * Expands/collapses contact information section
 */
if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { 
    elementToggleFunc(sidebar); 
  });
}



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



/**
 * ============================================
 * PAGE NAVIGATION SYSTEM
 * ============================================
 * 
 * Handles navigation between different portfolio sections
 * - Shows/hides appropriate content sections
 * - Updates active navigation state
 * - Manages sidebar visibility (only on About page)
 * - Scrolls to top on page change
 */

// Navigation DOM elements
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

/**
 * Initialize page navigation
 * Adds click handlers to all navigation links
 * Manages active states and sidebar visibility
 */
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const sidebar = document.querySelector("[data-sidebar]");
    const clickedPage = this.innerHTML.toLowerCase().trim();

    // Loop through all pages and update active states
    for (let i = 0; i < pages.length; i++) {
      if (clickedPage === pages[i].dataset.page) {
        // Activate clicked page
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0); // Scroll to top
        
        // Sidebar visibility logic: Only show on About page
        if (clickedPage !== "about") {
          sidebar.classList.add("hidden");
        } else {
          sidebar.classList.remove("hidden");
        }
        
        // Re-initialize scroll reveal for new page content
        setTimeout(initScrollReveal, 100);
      } else {
        // Deactivate other pages
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}


/**
 * ============================================
 * TYPEWRITER EFFECT
 * ============================================
 * 
 * Animated typewriter effect for the title in sidebar
 * Cycles through different role titles
 * Creates engaging visual effect
 */

// Titles to cycle through in typewriter effect
const titles = ["AI Engineer", "RAG Architect", "MLOps Specialist", "LLM Developer"];
const titleElement = document.querySelector(".info-content .title");

// Typewriter state variables
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

/**
 * Typewriter animation function
 * Recursively types and deletes text character by character
 * TODO: Add pause/play functionality, customize titles array
 */
function typeWriter() {
  if (!titleElement) return;

  const currentTitle = titles[titleIndex];
  
  // Delete mode: Remove characters
  if (isDeleting) {
    titleElement.textContent = currentTitle.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 50; // Faster deletion
  } 
  // Type mode: Add characters
  else {
    titleElement.textContent = currentTitle.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 100; // Normal typing speed
  }

  // Pause at end of word before deleting
  if (!isDeleting && charIndex === currentTitle.length) {
    isDeleting = true;
    typeSpeed = 2000; // 2 second pause
  } 
  // Move to next title after deletion
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length; // Cycle through titles
    typeSpeed = 500; // Brief pause before new word
  }

  setTimeout(typeWriter, typeSpeed);
}

/**
 * ============================================
 * INITIALIZATION
 * ============================================
 * 
 * Initialize all features when DOM is ready
 * Runs once on page load
 */
document.addEventListener('DOMContentLoaded', () => {
  // Start typewriter effect if title element exists
  if(titleElement) {
    typeWriter();
  }
  
  // Initialize all animation features
  initScrollReveal();        // Scroll-triggered animations
  initNeuralParticles();      // Hero section particles
  initBackgroundCanvas();     // Background neural network
  animateSkillBars();         // Skill progress animations
});


/**
 * ============================================
 * SCROLL REVEAL ANIMATION
 * ============================================
 * 
 * Animates elements as they come into viewport
 * Uses Intersection Observer API for performance
 * Adds "revealed" class when element is visible
 * 
 * @param {void}
 * @returns {void}
 */
function initScrollReveal() {
  // Elements to animate on scroll
  const revealElements = document.querySelectorAll(
    ".service-item, .project-item, .timeline-item, .skills-item"
  );
  
  // Intersection Observer for scroll detection
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  }, {
    threshold: 0.1, // Trigger when 10% visible
    rootMargin: "0px 0px -50px 0px" // Trigger 50px before element enters viewport
  });

  // Observe all reveal elements
  revealElements.forEach((el) => {
    el.classList.add("reveal-item"); // Add base animation class
    observer.observe(el);
  });
}


/**
 * ============================================
 * NEURAL PARTICLES ANIMATION
 * ============================================
 * 
 * Creates animated particles around AI brain visual
 * Used in hero section for visual appeal
 * 
 * @param {void}
 * @returns {void}
 */
function initNeuralParticles() {
  const container = document.getElementById('neuralParticles');
  if (!container) return;

  const particleCount = 15; // Number of particles
  
  // Create and position particles
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random starting position (percentage-based)
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    
    // Random movement direction
    const moveX = (Math.random() - 0.5) * 100;
    const moveY = (Math.random() - 0.5) * 100;
    
    // Apply styles
    particle.style.left = startX + '%';
    particle.style.top = startY + '%';
    particle.style.setProperty('--tx', moveX + 'px'); // CSS custom property for animation
    particle.style.setProperty('--ty', moveY + 'px');
    particle.style.animationDelay = (Math.random() * 3) + 's'; // Stagger animations
    
    container.appendChild(particle);
  }
}


/**
 * ============================================
 * SKILL BARS ANIMATION
 * ============================================
 * 
 * Animates skill progress bars when they enter viewport
 * Creates smooth fill animation from 0% to target percentage
 * 
 * @param {void}
 * @returns {void}
 */
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress-fill');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.style.width; // Store target width
        bar.style.width = '0%'; // Start from 0
        
        // Animate to target width after brief delay
        setTimeout(() => {
          bar.style.width = targetWidth;
          bar.style.transition = 'width 1.5s ease-out';
        }, 100);
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% visible
  });

  // Observe all skill bars
  skillBars.forEach((bar) => {
    observer.observe(bar);
  });
}


/**
 * ============================================
 * ANIMATED BACKGROUND CANVAS
 * ============================================
 * 
 * Creates neural network particle system background
 * Particles move and connect when close to each other
 * Represents AI/ML network visualization
 * 
 * Performance: Uses requestAnimationFrame for smooth 60fps animation
 * TODO: Add pause/resume functionality, optimize for mobile
 * 
 * @param {void}
 * @returns {void}
 */
function initBackgroundCanvas() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationFrameId;
  
  /**
   * Resize canvas to match viewport
   * Called on window resize and initial load
   */
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  /**
   * Particle class for neural network nodes
   * Each particle represents a node in the network
   */
  class Particle {
    constructor() {
      // Random starting position
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      // Random velocity (movement speed)
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      // Random size
      this.radius = Math.random() * 2 + 1;
    }
    
    /**
     * Update particle position
     * Bounces off edges
     */
    update() {
      this.x += this.vx;
      this.y += this.vy;
      
      // Bounce off edges
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    
    /**
     * Draw particle on canvas
     */
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 167, 38, 0.5)'; // Orange-yellow color
      ctx.fill();
    }
  }
  
  /**
   * Create particles based on screen size
   * More particles on larger screens, max 100 for performance
   */
  const particleCount = Math.min(Math.floor(canvas.width / 15), 100);
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
  
  /**
   * Draw connections between nearby particles
   * Creates neural network effect
   * Opacity decreases with distance
   */
  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Connect particles within 150px
        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          // Opacity based on distance (farther = more transparent)
          ctx.strokeStyle = `rgba(255, 167, 38, ${0.2 * (1 - distance / 150)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
  }
  
  /**
   * Main animation loop
   * Updates and redraws everything each frame
   */
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw all particles
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    
    // Draw connections
    drawConnections();
    
    // Continue animation
    animationFrameId = requestAnimationFrame(animate);
  }
  
  // Start animation
  animate();
  
  // Clean up animation on page unload
  window.addEventListener('beforeunload', () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  });
}

/**
 * ============================================
 * PAGE LOADER FUNCTIONALITY
 * ============================================
 * 
 * Handles the animated loading screen
 * Shows when page first loads
 * Hides when DOM and resources are ready
 * 
 * Features:
 * - Waits for DOM to be ready
 * - Waits for all images and resources to load
 * - Smooth fade out animation
 * - Minimum display time for better UX
 * ============================================
 */

/**
 * Initialize page loader
 * Hides loader when page is fully loaded
 */
function initPageLoader() {
  const pageLoader = document.getElementById('pageLoader');
  
  if (!pageLoader) return;
  
  // Minimum display time for better UX (prevents flash)
  const minDisplayTime = 1000; // 1 second
  const startTime = Date.now();
  
  /**
   * Hide loader function
   * Adds 'hidden' class to trigger fade out animation
   */
  function hideLoader() {
    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(0, minDisplayTime - elapsedTime);
    
    setTimeout(() => {
      pageLoader.classList.add('hidden');
      
      // Remove from DOM after animation completes
      setTimeout(() => {
        if (pageLoader.parentNode) {
          pageLoader.remove();
        }
      }, 600); // Match CSS transition duration
    }, remainingTime);
  }
  
  // Check if page is already loaded
  if (document.readyState === 'complete') {
    // Wait for all resources (images, fonts, etc.)
    window.addEventListener('load', hideLoader);
  } else {
    // Wait for DOM to be ready, then wait for all resources
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        window.addEventListener('load', hideLoader);
      });
    } else {
      window.addEventListener('load', hideLoader);
    }
  }
  
  // Fallback: Hide loader after maximum wait time (3 seconds)
  setTimeout(() => {
    if (!pageLoader.classList.contains('hidden')) {
      hideLoader();
    }
  }, 3000);
}

// Initialize page loader when script loads
initPageLoader();
