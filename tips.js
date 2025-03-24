// Safety Tips Page-specific Scripts
const darkModeToggle = document.getElementById('darkModeToggle');
const tipsGrid = document.getElementById('tipsGrid');
const filterButtons = document.querySelectorAll('.filter-button');

let currentCategory = 'all';

// Hardcoded Tips Data
const tips = [
  {
    id: 1,
    title: "Be Aware of Your Surroundings",
    description: "Always stay alert and avoid distractions like using your phone in public. Be mindful of people around you and trust your instincts.",
    category: "general"
  },
  {
    id: 2,
    title: "Travel in Groups",
    description: "Whenever possible, travel with friends or family, especially at night. There’s safety in numbers.",
    category: "travel"
  },
  {
    id: 3,
    title: "Use Well-Lit Routes",
    description: "Stick to well-lit and busy streets, especially after dark. Avoid shortcuts through alleys or isolated areas.",
    category: "travel"
  },
  {
    id: 4,
    title: "Keep Emergency Contacts Handy",
    description: "Save emergency contacts on your phone and keep a physical copy in your wallet. Know the local emergency numbers.",
    category: "emergency"
  },
  {
    id: 5,
    title: "Trust Your Instincts",
    description: "If something feels off, trust your instincts and remove yourself from the situation. It’s better to be safe than sorry.",
    category: "general"
  },
  {
    id: 6,
    title: "Carry a Personal Safety Device",
    description: "Consider carrying a whistle, pepper spray, or a personal alarm for emergencies.",
    category: "general"
  },
  {
    id: 7,
    title: "Plan Your Route in Advance",
    description: "Know your route before you start your journey. Share your travel plans with someone you trust.",
    category: "travel"
  },
  {
    id: 8,
    title: "Have a Safety Plan",
    description: "Know the nearest exits, safe zones, and emergency services in your area. Practice what to do in case of an emergency.",
    category: "emergency"
  },
  {
    id: 9,
    title: "Avoid Walking Alone at Night",
    description: "If you must walk alone, stay in well-lit areas and avoid using headphones.",
    category: "travel"
  },
  {
    id: 10,
    title: "Stay Calm in Emergencies",
    description: "If you find yourself in an emergency, stay calm and assess the situation before taking action.",
    category: "emergency"
  }
];

// Render Tips
function renderTips() {
  tipsGrid.innerHTML = '';
  const filteredTips = currentCategory === 'all'
    ? tips
    : tips.filter(tip => tip.category === currentCategory);

  filteredTips.forEach(tip => {
    const tipCard = document.createElement('div');
    tipCard.classList.add('tip-card');
    tipCard.innerHTML = `
      <h3>${tip.title}</h3>
      <p>${tip.description}</p>
      <div class="category">${tip.category}</div>
    `;
    tipsGrid.appendChild(tipCard);

    // GSAP Animation
    gsap.from(tipCard, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay: 0.1,
    });
  });
}

// Filter Tips by Category
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    currentCategory = button.dataset.category;
    renderTips();
  });
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
renderTips();