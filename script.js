const letter_container = document.getElementById('letter_container');
const acp_letter_btn = document.getElementById('acp_letter_btn');
const messages = document.querySelectorAll('.message-group');
const test_btn = document.getElementById('test_btn');
const form = document.getElementById('form');
const psw_input = document.getElementById('psw_input');
const hint = document.getElementById('hint');
const hint_reveal_btn = document.getElementById('hint_reveal_btn');


//FADE IN AND OUT FUNCTION
function fadeInEffect(element, delayMs = 0) {
  setTimeout(() => {
    element.classList.remove('hidden', 'fade-out', 'hide'); // reset state
    element.classList.add('fade-in');

    // Trigger reflow to ensure animation works
    void element.offsetWidth;

    element.classList.add('show'); // will fade to opacity 1
  }, delayMs);
};

function fadeOutAndHide(element, delayMs = 0) {
  setTimeout(() => {
    element.classList.remove('fade-in', 'show');
    element.classList.add('fade-out');

    void element.offsetWidth;

    element.classList.add('hide'); // opacity goes to 0

    setTimeout(() => {
      element.classList.add('hidden');
      element.classList.remove('fade-out', 'hide');
    }, 500); // match transition
  }, delayMs);
};

function fadeInSequence(elements, delay = 1000, autoHide = false, hideDelay = 2000) {
  elements.forEach((el, index) => {
    const fadeInTime = index * delay;
    fadeInEffect(el, fadeInTime);

    if (autoHide) {
      const fadeOutTime = fadeInTime + hideDelay;
      fadeOutAndHide(el, fadeOutTime);
    }
  });
};

//letter fade in at the start
    fadeInEffect(letter_container);
    //fadeInSequence(messages, 10, false, 4000);

//letter accept button
acp_letter_btn.addEventListener('click', () => {
    fadeOutAndHide(letter_container);
    setTimeout(() => {
        fadeInSequence(messages, 1200, false, 4000);
    }, 600); // Match your fade-out duration
});

//Password box
const password = '081024';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(password === psw_input.value) {
        messages.forEach((msg, i) => {
            fadeOutAndHide(msg, i * 100);
        });
    } else if( psw_input.value == '' ){
      alert('You need to type something in bruh...')
    } else {
        alert('Try again');
        psw_input.value = '';
    }
});

// Hint button
hint_reveal_btn.addEventListener('click', () => {
  hint.classList.remove('hidden');
});



