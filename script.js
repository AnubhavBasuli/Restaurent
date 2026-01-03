// script.js

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Set minimum date for booking (today)
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
});

// Booking form submission
function submitBooking() {
    const name = document.getElementById('bookingName').value;
    const email = document.getElementById('bookingEmail').value;
    const phone = document.getElementById('bookingPhone').value;
    const date = document.getElementById('bookingDate').value;
    const time = document.getElementById('bookingTime').value;
    const guests = document.getElementById('bookingGuests').value;
    
    if (name && email && phone && date && time) {
        alert(`Table booked for ${guests} guest(s) on ${date} at ${time}.\nConfirmation sent to ${email}`);
        
        // Clear form
        document.getElementById('bookingName').value = '';
        document.getElementById('bookingEmail').value = '';
        document.getElementById('bookingPhone').value = '';
        document.getElementById('bookingDate').value = '';
        document.getElementById('bookingTime').value = '';
        document.getElementById('bookingGuests').value = '2';
    } else {
        alert('Please fill in all required fields.');
    }
}

// Contact form submission
function submitContact() {
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;

    if (name && email && subject && message) {
        alert("Message sent successfully! We'll get back to you soon.");

        document.getElementById('contactName').value = '';
        document.getElementById('contactEmail').value = '';
        document.getElementById('contactSubject').value = '';
        document.getElementById('contactMessage').value = '';
    } else {
        alert("Please fill in all required fields.");
    }
}


// Login form submission
function submitLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (email && password) {
        alert('Login functionality would connect to a backend service.\nEmail: ' + email);
        
        // Clear form
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
    } else {
        alert('Please enter both email and password.');
    }
}


// menu filter
  const buttons = document.querySelectorAll(".filter-btn");
  const sections = document.querySelectorAll(".menu-section");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;

      sections.forEach(section => {
        if (filter === "all" || section.dataset.category === filter) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });
    });
  });


  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(item => item.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Auto-highlight based on current page
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });