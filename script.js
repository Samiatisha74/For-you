// Script for envelope interactivity

// Function to handle envelope click event for interactivity
function handleEnvelopeClick() {
    const envelope = document.getElementById('envelope');
    envelope.classList.toggle('open'); // toggle open class for animation
}

// Event listener for envelope click
document.getElementById('envelope').addEventListener('click', handleEnvelopeClick);

// Heart animation function
function startHeartAnimation() {
    const heart = document.getElementById('heart');
    heart.classList.add('animate'); // add animation class
    // remove animation class after animation completes
    heart.addEventListener('animationend', () => {
        heart.classList.remove('animate');
    });
}

// Function to play audio
function playAudio() {
    const audio = new Audio('path/to/your/audio/file.mp3'); // specify your audio file path
    audio.play();
}

// Function to generate and display QR code
function generateQRCode(url) {
    const qrCodeContainer = document.getElementById('qr-code');
    // Assuming you are using a QR code library like qrious or similar
    const qr = new QRious({
        element: qrCodeContainer,
        value: url,
    });
}

// Example usage
// Start the heart animation when the page loads
window.onload = function() {
    startHeartAnimation();
};

// Generate QR code for a specific URL
generateQRCode('https://example.com');