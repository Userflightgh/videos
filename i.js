// Abrir modal de login ao clicar no botão "Perfil"
document.querySelector('nav ul li:nth-child(4) a').addEventListener('click', function() {
  document.getElementById('login-modal').style.display = 'block';
});

// Fechar modal ao clicar no botão "Fechar"
document.querySelectorAll('.close').forEach(function(closeButton) {
  closeButton.addEventListener('click', function() {
    this.parentElement.parentElement.style.display = 'none';
  });
});

// Simular login
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Login bem-sucedido!');
});

// Abrir modal de compartilhamento ao clicar em uma postagem
document.getElementById('video-feed').addEventListener('click', function(event) {
  if (event.target.tagName === 'VIDEO') {
    document.getElementById('share-modal').style.display = 'block';
  }
});

// Carregar vídeos adicionais ao rolar para baixo
window.addEventListener('scroll', function() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // Adicione aqui a lógica para carregar mais vídeos
  }
});


