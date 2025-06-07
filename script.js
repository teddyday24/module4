// Function to add tabindex attribute to all figures
function addTabIndex() {
    const figures = document.querySelectorAll('figure');
    figures.forEach((figure, index) => {
        figure.setAttribute('tabindex', '0');
        console.log(`Tabindex added to figure ${index + 1}`);
    });
}

// Event listeners for focus and blur
function addFocusBlurListeners() {
    const figures = document.querySelectorAll('figure');
    figures.forEach((figure) => {
        figure.addEventListener('focus', () => {
            figure.style.border = '2px solid blue';
            console.log('Figure focused');
        });
        figure.addEventListener('blur', () => {
            figure.style.border = 'none';
            console.log('Figure blurred');
        });
    });
}

// Event listeners for mouseover and mouseleave
function addMouseListeners() {
    const figures = document.querySelectorAll('figure');
    figures.forEach((figure) => {
        figure.addEventListener('mouseover', () => {
            figure.style.backgroundColor = '#f0f0f0';
            console.log('Mouse over figure');
        });
        figure.addEventListener('mouseleave', () => {
            figure.style.backgroundColor = 'transparent';
            console.log('Mouse left figure');
        });
    });
}

// Onload event to initialize the gallery
window.onload = () => {
    console.log('Page loaded');
    addTabIndex();
    addFocusBlurListeners();
    addMouseListeners();
};