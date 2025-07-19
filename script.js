const accept_btn = document.getElementById('acp_letter');
const letter = document.getElementById('letter');
const intro_content = document.getElementById('intro_content');
const animtaion = document.querySelectorAll('.fade-in');

accept_btn.addEventListener('click', () => {
    // Hide the letter
    letter.classList.add('hidden'); //adding hidden to letter

    // Show the intro content container
    intro_content.classList.remove('hidden');

     // Animate each line
    animtaion.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('show');
      }, index * 1900);
    });
});

const password = "eurikalovesann";

const main = document.getElementById('main');
const password_input = document.getElementById('password_input')
const form = document.getElementById('form')
const status = document.getElementById('pw_status')

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    
    //check if password is correct
    if(password_input.value === password) {
        main.classList.remove('hidden');
    } else {
        alert("Try again.");
        input.value = "";
    }
});

//use hint button
const hint_btn = document.getElementById('hint_btn');
const hint = document.getElementById('hint');

hint_btn.addEventListener('click', () => {
    hint.classList.remove('hidden')
});