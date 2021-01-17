import './style.css';
const component = () => {
  const element = document.createElement('div');
  element.innerHTML = 'Hello webpack';
  element.classList.add('hello');
  element.classList.add('icon-rain');
  return element;
};

document.body.appendChild(component());