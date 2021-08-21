import './style.css';
const images = {
  treasure: '💰',
  leafs: '🍃'
};

const elements = document.querySelectorAll('.tree');

elements.forEach(element => {
  element.addEventListener('mouseover', e => {
    if (element.classList.value.includes('treasure')) {
      element.innerHTML = images.treasure;
      alert('Wygrałeś');
    } else {
      element.innerHTML = images.leafs;
    }
  });
});
