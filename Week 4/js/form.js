// Task 1: Annual Membership Cost Display

const tierRadios = document.querySelectorAll('input[name="tier"]');

const annualCostMessage = document.querySelector('#annual-cost-message');

const membershipPrices = {
    community: 0,
    pro: 144,
    enterprise: 588
};

// Looks for changes to the membership tier
tierRadios.forEach(function(radio) {
    radio.addEventListener('change', function() {
        const selectedTier = this.value;
        const annualCost = membershipPrices[selectedTier];

        annualCostMessage.textContent =
            `Annual membership cost: $${annualCost}/yr`;
    });
});

// Task 2: Show / Hide Password Toggle

const passwordInput = document.querySelector('#password');

const showPasswordCheckbox = document.querySelector('#show-password-checkbox');

showPasswordCheckbox.addEventListener('change', function() {
    if (this.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

// Task 3: Textarea Character Counter

const commentsTextarea = document.querySelector('#comments');

const charCounter = document.querySelector('#char-counter');

commentsTextarea.addEventListener('input', function() {
    const characterCount = this.value.length;

    charCounter.textContent = `${characterCount} characters`;
});

// Task 4: In-Page Error Validation Before Submit

const registrationForm = document.querySelector('#registration-form');
const errorContainer = document.querySelector('#error-container');

function handleFormSubmit(event) {
    const errors = [];

    // Get the values from the form
    const fullName = document.querySelector('#full-name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value;
    const terms = document.querySelector('#terms').checked;

    // 1. Check full  name
    if (fullName.length < 2) {
        errors.push('Full name must contain at least 2 characters.');
    }

    // 2. Check email 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        errors.push('Please enter a valid email address.');
    }

    // 3. Check username length
    if (username.length < 4 || username.length > 20) {
        errors.push('Username must be between 4 and 20 characters.');
    }

    // 4. Check password length
    if (password.length < 8) {
        errors.push('Password must contain at least 8 characters.');
    }

    // 5. Check terms and conditions
    if (!terms) {
        errors.push('You must accept the Terms of Service.');
    }

    // If errors exist stop form submission
    if (errors.length > 0) {
        event.preventDefault();

        errorContainer.innerHTML = `
            <h3>Please fix the following errors:</h3>
            <ul>
                ${errors.map(error => `<li>${error}</li>`).join('')}
            </ul>
        `;

        errorContainer.style.display = 'block';

        errorContainer.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    } else {
        errorContainer.innerHTML = '';
        errorContainer.style.display = 'none';
    }
}

registrationForm.addEventListener('submit', handleFormSubmit);
