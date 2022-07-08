import './style.css';
import logo from './img/logo.png';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello World!');

  const app = document.querySelector('#app');

  app.innerHTML = `<img src=${logo} >`;
});
