// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Application started');
    
    // Example of adding dynamic content
    const contentSection = document.querySelector('.content');
    if (contentSection) {
        const dynamicContent = document.createElement('p');
        dynamicContent.textContent = 'This content was added dynamically with JavaScript!';
        contentSection.appendChild(dynamicContent);
    }

    // Example event listener
    document.querySelector('h1').addEventListener('click', () => {
        alert('Welcome to the application!');
    });
}); 