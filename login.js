
const emailInput = document.getElementById('email');
const loginForm = document.getElementById('loginForm');
const errorText = document.createElement('p');
errorText.className = 'error-text';
errorText.style.fontSize = '14px';
errorText.textContent = 'Invalid email! Please enter a valid @gmail.com address';

emailInput.addEventListener('input', function() {
const email = emailInput.value;
if (email.length > 0 && !email.includes('@gmail.com')) {
    errorText.style.display = 'block';
    emailInput.style.borderColor = '#ef4444';
} else {
    errorText.style.display = 'none';
    emailInput.style.borderColor = '#e5e7eb';
}
});

loginForm.addEventListener('submit', function(e) {
const email = emailInput.value;
if (!email.includes('@gmail.com')) {
    e.preventDefault();
    errorText.style.display = 'block';
    emailInput.style.borderColor = '#ef4444';
}
});

