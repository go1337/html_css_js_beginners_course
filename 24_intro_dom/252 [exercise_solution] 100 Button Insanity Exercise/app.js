const container = document.querySelector('#container');

for(let i = 0; i < 100; i++){
  const btn = document.createElement('BUTTON');
  btn.innerText = 'Click';
  container.appendChild(btn);
}