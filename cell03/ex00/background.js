// Function to generate a random number between 0 and 255
function Rint(max)
{
    return Math.floor(Math.random() * (max + 1));
}

// Function to generate a random RGB color string
function Rcolor() {
    const r = Rint(255);
    const g = Rint(255);
    const b = Rint(255);
    return `rgb(${r}, ${g}, ${b})`;
}

// Select the button element from the HTML
const button = document.getElementById('clickMeBtn');

// Add an event listener for the 'click' event
button.addEventListener('click', function()
{
    // Change the background color of the body to a random color
    document.body.style.backgroundColor = Rcolor();
});
