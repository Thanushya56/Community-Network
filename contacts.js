// Emergency Contacts Page-specific Scripts
const darkModeToggle = document.getElementById('darkModeToggle');
const contactsGrid = document.getElementById('contactsGrid');
const searchBox = document.getElementById('searchBox');
const searchButton = document.getElementById('searchButton');

// Hardcoded Emergency Contacts Data
const contacts = [
  {
    id: 1,
    name: "Police",
    phone: "100",
    email: "police@example.com",
    description: "Contact the police for emergencies."
  },
  {
    id: 2,
    name: "Ambulance",
    phone: "102",
    email: "ambulance@example.com",
    description: "Call for medical emergencies."
  },
  {
    id: 3,
    name: "Fire Department",
    phone: "101",
    email: "fire@example.com",
    description: "Contact the fire department for fire-related emergencies."
  },
  {
    id: 4,
    name: "Women's Helpline",
    phone: "1091",
    email: "womensupport@example.com",
    description: "24/7 helpline for women in distress."
  },
  {
    id: 5,
    name: "Local Hospital",
    phone: "123-456-7890",
    email: "hospital@example.com",
    description: "Nearest hospital for medical assistance."
  },
  {
    id: 6,
    name: "Roadside Assistance",
    phone: "987-654-3210",
    email: "roadside@example.com",
    description: "24/7 roadside assistance for vehicle breakdowns."
  }
];

// Render Contacts
function renderContacts(filteredContacts = contacts) {
  contactsGrid.innerHTML = '';
  filteredContacts.forEach(contact => {
    const contactCard = document.createElement('div');
    contactCard.classList.add('contact-card');
    contactCard.innerHTML = `
      <h3>${contact.name}</h3>
      <p>${contact.description}</p>
      <p><a href="tel:${contact.phone}">Phone: ${contact.phone}</a></p>
      <p><a href="mailto:${contact.email}">Email: ${contact.email}</a></p>
    `;
    contactsGrid.appendChild(contactCard);

    // GSAP Animation
    gsap.from(contactCard, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay: 0.1,
    });
  });
}

// Search Functionality
searchButton.addEventListener('click', () => {
  const searchTerm = searchBox.value.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm) ||
    contact.description.toLowerCase().includes(searchTerm)
  );
  renderContacts(filteredContacts);
});

// Dark Mode Toggle
darkModeToggle.addEventListener('click', () => {
  document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  darkModeToggle.innerHTML = document.body.dataset.theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  localStorage.setItem('theme', document.body.dataset.theme);
});

// Load Saved Theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.dataset.theme = savedTheme;
darkModeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

// Initial Render
renderContacts();