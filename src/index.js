import _ from 'lodash';
import './style.css';
import './variables.scss';
import Icon from '../public/icon.png';

function component(name) {
  let element = document.createElement('div');

  const text = `Hello, ${name}`;

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join([text, 'World'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component('Ayako'));