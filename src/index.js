import './style.css';
import Logo from './assets/images/logo.jpg';

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello webpack';
  element.classList.add('hello');
  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Logo;

  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());