// Get the file input element
const avatarInput = document.getElementById('avatar-input');
// Get the choose image button
const chooseImageBtn = document.getElementById('choose-image-btn');

// Add an event listener to the choose image button
chooseImageBtn.addEventListener('click', function () {
  // Trigger a click event on the file input
  avatarInput.click();
});

// Get the avatar container element
const avatarContainer = document.querySelector('.avatar-container');

// Add an event listener to the file input
avatarInput.addEventListener('change', function () {
  // Get the selected file
  const file = this.files[0];

  // Create a new FileReader instance
  const reader = new FileReader();

  // When the file has been read
  reader.onload = function () {
    // Create a new image element
    const img = document.createElement('img');
    img.src = reader.result;
    img.classList.add('avatar-preview');

    // Remove any existing preview image
    const existingPreview = avatarContainer.querySelector('.avatar-preview');
    if (existingPreview) {
      avatarContainer.removeChild(existingPreview);
    }

    // Append the new image to the container
    avatarContainer.appendChild(img);
  }

  // Read the file as a data URL
  reader.readAsDataURL(file);
});

// Get the or Press RETURN text
const pressReturnText = document.getElementById('press-return-text');

// Add an event listener to the choose image button
chooseImageBtn.addEventListener('click', function () {
  // Trigger a click event on the file input
  avatarInput.click();
});

// Add an event listener to the file input
avatarInput.addEventListener('change', function () {
  // Get the selected file
  const file = this.files[0];

  // Show the or Press RETURN text if a file is selected
  if (file) {
    pressReturnText.style.display = 'block';
  } else {
    pressReturnText.style.display = 'none';
  }

  // Your existing code for handling the image preview goes here
});

window.onload = function () {
  document.getElementById('imageForm').onsubmit = function () {
    // Check if an image is selected
    if (!document.getElementById('image').value) {
      alert('Please select an image.');
      return false; // Prevent form submission
    }
  };
};
