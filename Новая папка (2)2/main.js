// Задание: Счетчик нажатий

const countOne = document.getElementById('count');
const btn = document.getElementById('btn');
const count = localStorage.getItem('counterValue') || 0;
countOne.textContent = count;
btn.addEventListener('click', function() {
    count++;
    countOne.textContent = count;
    localStorage.setItem('counterValue', count);
});









    
       
       
    
  