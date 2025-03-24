// Report Incident Page-specific Scripts
const form = document.getElementById('incidentForm');
const locationInput = document.getElementById('location');
const getLocationButton = document.getElementById('getLocationButton');
const descriptionInput = document.getElementById('description');
const fileUploadInput = document.getElementById('fileUpload');
const filePreview = document.getElementById('filePreview');
const submitButton = document.getElementById('submitButton');
const submitText = document.getElementById('submitText');
const loadingSpinner = document.getElementById('loadingSpinner');
const confirmationModal = document.getElementById('confirmationModal');
const closeModalButton = document.querySelector('.close');
const darkModeToggle = document.getElementById('darkModeToggle');

// Error Messages
const locationError = document.getElementById('locationError');
const descriptionError = document.getElementById('descriptionError');
const fileUploadError = document.getElementById('fileUploadError');

// Dark Mode Toggle
darkModeToggle.addEventListener('click', () => {
  document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  darkModeToggle.innerHTML = document.body.dataset.theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Get User Location
getLocationButton.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        locationInput.value = `Lat: ${latitude}, Long: ${longitude}`;
        locationError.style.display = 'none';
      },
      (error) => {
        locationError.textContent = 'Unable to retrieve your location.';
        locationError.style.display = 'block';
      }
    );
  } else {
    locationError.textContent = 'Geolocation is not supported by your browser.';
    locationError.style.display = 'block';
  }
});

// File Upload Preview
fileUploadInput.addEventListener('change', () => {
  filePreview.innerHTML = '';
  const file = fileUploadInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (file.type.startsWith('image')) {
        filePreview.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
      } else if (file.type.startsWith('video')) {
        filePreview.innerHTML = `<video controls src="${e.target.result}"></video>`;
      }
    };
    reader.readAsDataURL(file);
  }
});

// Form Validation
form.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValid = true;

  // Validate Location
  if (!locationInput.value.trim()) {
    locationError.textContent = 'Location is required.';
    locationError.style.display = 'block';
    isValid = false;
  } else {
    locationError.style.display = 'none';
  }

  // Validate Description
  if (!descriptionInput.value.trim()) {
    descriptionError.textContent = 'Description is required.';
    descriptionError.style.display = 'block';
    isValid = false;
  } else {
    descriptionError.style.display = 'none';
  }

  // Validate File Upload (Optional)
  if (fileUploadInput.files.length > 0) {
    const file = fileUploadInput.files[0];
    const allowedTypes = ['image/jpeg', 'image/png', 'video/mp4'];
    if (!allowedTypes.includes(file.type)) {
      fileUploadError.textContent = 'Only JPEG, PNG, and MP4 files are allowed.';
      fileUploadError.style.display = 'block';
      isValid = false;
    } else {
      fileUploadError.style.display = 'none';
    }
  }

  // Submit Form if Valid
  if (isValid) {
    submitText.style.display = 'none';
    loadingSpinner.style.display = 'inline-block';
    submitButton.disabled = true;

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      submitText.style.display = 'inline-block';
      loadingSpinner.style.display = 'none';
      submitButton.disabled = false;
      confirmationModal.style.display = 'block';
    }, 2000);
  }
});

// Close Modal
closeModalButton.addEventListener('click', () => {
  confirmationModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === confirmationModal) {
    confirmationModal.style.display = 'none';
  }
});