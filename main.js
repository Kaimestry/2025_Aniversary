

const byHour = document.getElementById('byHour');
const byMin = document.getElementById('byMin');
const bySec = document.getElementById('bySec');

//Clock counting times
const date = new Date('October 8, 2024 10:00:00');
function updateCounter(){
  const now = new Date();
  const total = now - date;

  const seconds = Math.floor(total / 1000) % 60;
  const minutes = Math.floor(total / (1000 * 60)) % 60;
  const hours = Math.floor(total / (1000 * 60 * 60)) % 24;
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  const h = Math.floor(total / (1000 * 60 * 60));
  const m = Math.floor(total / (1000 * 60));
  const s = Math.floor(total / 1000);

  document.getElementById("counter").innerText = 
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

  byHour.innerHTML = `${h} hours`
  byMin.innerHTML = `${m} minutes`
  bySec.innerHTML = `${s} seconds`

};
setInterval(updateCounter, 1000);
updateCounter();




