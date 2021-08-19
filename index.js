import './style.css';
const images = {
  treasure: '💰',
  leafs: '🍃'
};

const elements = document.querySelectorAll('.tree');

// console.log(elements);

elements.forEach((element, index) => {
  element.addEventListener('mouseover', e => {
    if (element.classList.value.includes('treasure')) {
      console.log('Wygrałeś');
      element.innerText = images.treasure;
      alert('Wygrałeś');
    } else {
      element.innerText = images.leafs;
    }
  });
});
