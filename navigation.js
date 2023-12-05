// const navBar = document.getElementById("navBar");
// const mobileNav = document.getElementById("mobileNav");


// showNav.addEventListener('click', () => {
//     mobileNav.style.display = 'block';
//     document.body.style.overflow = 'hidden'; // Disable scrolling
// });

function showPopup() {
    document.getElementById('mobileNav').style.display = 'flex';
}

function closePopup() {
    document.getElementById('mobileNav').style.display = 'none';
}

//Text to be typed
const textToType = "I commit to capturing your special moments with creativity and precision. Your vision is my priority, and I promise to deliver stunning photographs that tell your unique story. With attention to detail and a passion for my craft, I guarantee a seamless and enjoyable experience. Trust me to freeze those cherished memories in time, creating images that will be cherished for a lifetime.";

// Speed of typing (in milliseconds)
const typingSpeed = 100;

// Get the element where the typing effect will be displayed
const typingElement = document.getElementById('typing-text');

// Function to simulate typing effect
function typeText() {
    let i = 0;
    const typingInterval = setInterval(() => {
        typingElement.textContent += textToType[i];
        i++;

        // Check if all text is typed
        if (i === textToType.length) {
            clearInterval(typingInterval);
        }
    }, typingSpeed);
}

// Call the function to start typing effect
typeText();


document.addEventListener('DOMContentLoaded', function () {
  const weddingDateInput = document.getElementById('weddingDate');

  // Prevent the default behavior of the date input
  weddingDateInput.addEventListener('focus', function () {
    weddingDateInput.type = 'date';
  });

  // Revert to text input when losing focus
  weddingDateInput.addEventListener('blur', function () {
    if (!weddingDateInput.value) {
      weddingDateInput.type = 'text';
    }
  });

  weddingDateInput.addEventListener();
});



