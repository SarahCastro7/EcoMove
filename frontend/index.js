// Estado da Aplicação
let isLoggedIn = false;

// Elementos DOM
const authBtn = document.getElementById('authBtn');
const loginModal = document.getElementById('loginModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelModalBtn = document.getElementById('cancelModalBtn');
const loginForm = document.getElementById('loginForm');
const createActivityCard = document.getElementById('createActivityCard');
const createActivityForm = document.getElementById('createActivityForm');
const feedContainer = document.getElementById('feedContainer');

// Perfil Sidebar
const profileName = document.getElementById('profileName');
const profileSection = document.getElementById('profileSection');
const userActivitiesCount = document.getElementById('userActivitiesCount');
const userCo2Count = document.getElementById('userCo2Count');

// Abrir e Fechar Modal
authBtn.addEventListener('click', () => {
  if (isLoggedIn) {
    // Logout
    setLoginState(false);
  } else {
    // Abrir Modal
    loginModal.classList.add('active');
  }
});

const closeModal = () => loginModal.classList.remove('active');
closeModalBtn.addEventListener('click', closeModal);
cancelModalBtn.addEventListener('click', closeModal);

// Evento de Login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  setLoginState(true);
  closeModal();
});

// Atualizar Interface conforme Login
function setLoginState(logged) {
  isLoggedIn = logged;
  if (logged) {
    authBtn.textContent = 'Logout';
    createActivityCard.classList.remove('hidden');
    
    // Atualizar Sidebar para perfil logado
    profileName.textContent = 'Usuário_01';
    userActivitiesCount.textContent = '2';
    userCo2Count.textContent = '0.7';
    
    const logoCircle = profileSection.querySelector('.avatar-circle');
    logoCircle.className = 'avatar-circle avatar-user';
    logoCircle.textContent = '👩';
  } else {
    authBtn.textContent = 'Login';
    createActivityCard.classList.add('hidden');
    
    // Restaurar Sidebar padrão
    profileName.textContent = 'EcoMove';
    userActivitiesCount.textContent = '5';
    userCo2Count.textContent = '1.62';
    
    const logoCircle = profileSection.querySelector('.avatar-circle');
    logoCircle.className = 'avatar-circle default-logo';
    logoCircle.innerHTML = '<div class="logo-shape"></div>';
  }
}

// Criar Nova Atividade
createActivityForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const type = document.getElementById('actType').value;
  const distanceMeters = parseFloat(document.getElementById('actDistance').value);
  const duration = document.getElementById('actDuration').value;
  
  const distanceKm = (distanceMeters / 1000).toFixed(1);
  const co2Saved = (distanceKm * 0.07).toFixed(2); // Cálculo estimado

  const now = new Date();
  const timeString = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} - ${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getFullYear()).slice(-2)}`;

  const newCard = document.createElement('article');
  newCard.className = 'card activity-card';
  newCard.innerHTML = `
    <div class="card-header">
      <span class="activity-title">${type}</span>
      <span class="activity-date">${timeString}</span>
    </div>
    <div class="card-body">
      <div class="user-avatar avatar-user">👩</div>
      <div class="activity-info">
        <span class="user-name">Usuário_01</span>
        <div class="metrics">
          <div><strong>${distanceKm} km</strong><small>Distância</small></div>
          <div><strong>${duration} min</strong><small>Duração</small></div>
          <div><strong>${co2Saved} kg</strong><small>CO₂ evitado</small></div>
        </div>
      </div>
      <div class="activity-actions">
        <button class="action-btn btn-like"><span class="heart-icon">♡</span> <span class="like-count">0</span></button>
        <button class="action-btn btn-comment-toggle">💬 <span class="comment-count">0</span></button>
      </div>
    </div>
    <div class="comments-section">
      <div class="comments-list"></div>
      <div class="comment-input-box">
        <input type="text" placeholder="Escrever um comentário..." class="comment-input">
        <button class="btn-send-comment">Enviar</button>
      </div>
    </div>
  `;

  feedContainer.prepend(newCard);
  createActivityForm.reset();
});

// Eventos Globais do Feed (Curtir e Comentar)
feedContainer.addEventListener('click', (e) => {
  // Curtir
  if (e.target.closest('.btn-like')) {
    const btn = e.target.closest('.btn-like');
    const heart = btn.querySelector('.heart-icon');
    const count = btn.querySelector('.like-count');
    
    if (heart.classList.contains('liked')) {
      heart.classList.remove('liked');
      heart.textContent = '♡';
      count.textContent = parseInt(count.textContent) - 1;
    } else {
      heart.classList.add('liked');
      heart.textContent = '♥';
      count.textContent = parseInt(count.textContent) + 1;
    }
  }

  // Enviar Comentário
  if (e.target.classList.contains('btn-send-comment')) {
    const card = e.target.closest('.activity-card');
    const input = card.querySelector('.comment-input');
    const commentsList = card.querySelector('.comments-list');
    const commentCount = card.querySelector('.comment-count');

    if (input.value.trim() !== '') {
      const commentDiv = document.createElement('div');
      commentDiv.className = 'comment-item';
      const currentUser = isLoggedIn ? 'Usuário_01' : 'Anônimo';
      commentDiv.innerHTML = `<strong>${currentUser}:</strong> ${input.value}`;
      
      commentsList.appendChild(commentDiv);
      commentCount.textContent = parseInt(commentCount.textContent) + 1;
      input.value = '';
    }
  }
});