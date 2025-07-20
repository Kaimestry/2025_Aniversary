const accept_btn = document.getElementById('acp_letter');
const letter = document.getElementById('letter');
const intro_content = document.getElementById('intro_content');
const inters_1 = document.getElementById('inters_1');
const password_container = document.getElementById('password_container');
const password_input = document.getElementById('password_input');
const form = document.getElementById('form');
const status = document.getElementById('pw_status');
const intro_clock = document.getElementById('intro_clock');
const continue_ui_btn = document.getElementById('continue_ui_btn');
const hint_btn = document.getElementById('hint_btn');
const hint = document.getElementById('hint');
const clock_container = document.getElementById('clock_container');

const fade_in_1 = document.querySelectorAll('.fade-in-1');
const fade_out_1 = document.querySelectorAll('.fade-out-1');
const fade_in_2 = document.querySelectorAll('.fade-in-2');
const fade_out_2 = document.querySelectorAll('.fade-out-2');
const fade_in_3 = document.querySelectorAll('.fade-in-3');
const fade_out_3 = document.querySelectorAll('.fade-out-3');


accept_btn.addEventListener('click', () => {
    // Hide the letter
    letter.classList.add('hidden'); //adding hidden to letter

    // Show the pao_talk
    intro_content.classList.remove('hidden');
    password_container.classList.remove('hidden');

     // Animate each line
    fade_in_1.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('show');
      }, index * 1900);
    });
});

const password = '081024';


form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload

  if (password_input.value === password) {
    // Step 1: Add 'hide' class to fade out
    fade_out_1.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('hide');
        // Step 2: Wait for transition to finish before hiding
        setTimeout(() => {
          item.classList.add('hidden'); 
        }, 600); 
      }, index * 200); // slight stagger if needed
    });

// Step 3: Show inters_1 after all fades out
    // Show the pao_talk
    intro_clock.classList.remove('hidden');
    continue_ui_btn.classList.remove('hidden');

    setTimeout(() => {
    fade_in_2.forEach((item, index) => { //inters_1 has fade in
      setTimeout(() => {
        item.classList.add('show');
      }, index * 1900);
    });
    }, fade_out_1.length * 100 + 600);


} else {
    alert("Try again.");
    password_input.value = "";
  }
});


//use hint button

hint_btn.addEventListener('click', () => {
    hint.classList.remove('hidden')
});

//continue btn
continue_ui_btn.addEventListener('click', () => {
  //hide everything
  inters_1.classList.add('hidden');
  
    //clock appear
    clock_container.classList.remove('hidden');
     // Animate each line
    fade_in_3.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('show');
      }, index * 1900);
    });
  });

//clock counter

const date = new Date("October 8, 2024, 10:00:00");

function updateCounter() {
  const now = new Date();
    const elapsed = now - date; // in milliseconds

    const seconds = Math.floor(elapsed / 1000) % 60;
    const minutes = Math.floor(elapsed / (1000 * 60)) % 60;
    const hours = Math.floor(elapsed / (1000 * 60 * 60)) % 24;
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));

    document.getElementById("counter").innerText = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

setInterval(updateCounter, 1000);
updateCounter();


