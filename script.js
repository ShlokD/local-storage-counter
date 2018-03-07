var counter = document.querySelector('#counter');
var proceed = document.querySelector('#proceed');


const updateCounter = () => {
  let count = localStorage.getItem('count') || 0;
  count++;
  if (count > 3) {
    proceed.disabled = true;
  }
  counter.innerHTML = `Session Count: ${count}`;
  localStorage.setItem('count', count);
};

const onProceed = () => {
  window.location.reload();
}


proceed.addEventListener('click', onProceed);
updateCounter();