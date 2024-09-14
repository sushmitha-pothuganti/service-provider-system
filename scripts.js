document.addEventListener('DOMContentLoaded', function() {
    const signUpBtn = document.getElementById('sign-up-btn');
    const loginBtn = document.getElementById('login-btn');
    const authPanel = document.getElementById('auth-panel');
    const signUpForm = document.getElementById('sign-up-form');
    const loginForm = document.getElementById('login-form');

    // Initially hide the auth panel and forms
    authPanel.classList.add('hidden');
    signUpForm.classList.add('hidden');
    loginForm.classList.add('hidden');

    // Show the auth panel with sign-up form when "Sign Up" is clicked
    signUpBtn.addEventListener('click', function() {
        authPanel.classList.remove('hidden');
        signUpForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });

    // Show the auth panel with login form when "Login" is clicked
    loginBtn.addEventListener('click', function() {
        authPanel.classList.remove('hidden');
        loginForm.classList.remove('hidden');
        signUpForm.classList.add('hidden');
    });

    // Hide the auth panel when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!authPanel.contains(event.target) && !event.target.closest('.menu-bar button')) {
            authPanel.classList.add('hidden');
        }
    });
});

