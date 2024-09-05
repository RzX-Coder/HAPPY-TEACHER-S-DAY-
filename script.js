// Toggle background music
function toggleMusic() {
  const music = document.getElementById('bg-music');
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// Open the card (flips it to reveal the inner content)
function openCard() {
  const card = document.getElementById('card');
  card.style.transform = 'rotateY(180deg)';
  document.querySelector('.card-inner').classList.remove('hidden');
}

// Show message on chalkboard click
function showMessage(id) {
  document.getElementById(id).classList.remove('hidden');
}

// Open and close gallery
function openGallery() {
  document.getElementById('gallery-modal').classList.remove('hidden');
}

function closeGallery() {
  document.getElementById('gallery-modal').classList.add('hidden');
}