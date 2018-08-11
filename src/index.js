import _ from 'lodash';
import './style.css';
import './variables.scss';

function component(name) {
  let element = document.createElement('div');

  const text = `Hello, ${name}`;

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join([text, 'World'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component('Ayako'));