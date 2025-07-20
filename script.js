const accept_btn = document.getElementById('acp_letter');
const letter = document.getElementById('letter');
const intro_content = document.getElementById('intro_content');
const main = document.getElementById('main');
const password_container = document.getElementById('password_container');
const password_input = document.getElementById('password_input');
const form = document.getElementById('form');
const status = document.getElementById('pw_status');
const intro_clock = document.getElementById('intro_clock');
const clock = document.getElementById('clock');
const clock_container= document.getElementById('clock_container');


const fade_in_1 = document.querySelectorAll('.fade-in-1');
const fade_out_1 = document.querySelectorAll('.fade-out-1');
const fade_in_2 = document.querySelectorAll('.fade-in-2');

accept_btn.addEventListener('click', () => {
    // Hide the letter
    letter.classList.add('hidden'); //adding hidden to letter

    // Show the pao_talk and clock
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

// Step 3: Show main after all fades out
    // Show the pao_talk
    intro_clock.classList.remove('hidden');
    clock_container.classList.remove('hidden');

    setTimeout(() => {
    fade_in_2.forEach((item, index) => { //main has fade in
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
const hint_btn = document.getElementById('hint_btn');
const hint = document.getElementById('hint');

hint_btn.addEventListener('click', () => {
    hint.classList.remove('hidden')
});

