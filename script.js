const letter_container = document.getElementById('letter_container');
const acp_letter_btn = document.getElementById('acp_letter_btn');
const messages_psw_group = document.querySelectorAll('.msg_group_psw');
const messages_clock_group = document.querySelectorAll('.msg_group_clock');

const test_btn = document.getElementById('test_btn');
const form = document.getElementById('form');
const psw_input = document.getElementById('psw_input');
const hint = document.getElementById('hint');
const hint_reveal_btn = document.getElementById('hint_reveal_btn');
const loader = document.getElementById('loader');
const test = document.getElementById('testing');
const byHour = document.getElementById('byHour');
const byMin = document.getElementById('byMin');
const bySec = document.getElementById('bySec');

//FADE IN AND OUT FUNCTION
function fadeInEffect(element, delayMs = 0) {
  setTimeout(() => {
    element.classList.remove('hidden', 'fade-out', 'hide'); // reset state
    element.classList.add('fade-in');

    // Trigger reflow to ensure pao_loading_animation works
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
function fadeInOutInEffect(el1, el2, delayBefore = 1500, showEl1Duration = 2170, afterDelay = 900) {
  setTimeout(() => {
    fadeInEffect(el1); // Show the loader

    setTimeout(() => {
      fadeOutAndHide(el1); // Hide the loader

      setTimeout(() => {
        fadeInEffect(el2); // Show the next element
      }, afterDelay);

    }, showEl1Duration);

  }, delayBefore);
}

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

//Paok math rant
const math_rant = document.getElementById('math_rant');

const mathRanting = [
  'First we get todays date and the other one',
  'then start subtracting',
  'then we get the days',
  'at that point we could start multiplying it up by 24 for hours',
  'another * 60 for minutes',
  'do it again then we have seconds',
  'we could even do it backwards',
  'by calculating the total seconds first',
  'use (end - start)/1000',
  'Then to get date just think of how much seconds in a day',
  'iz 86400s',
  'by counting 24x60x60',
  'Then for hours iz (remaining s)/3600',
  'extracting the mins we have',
  'remaining/60',
  'how exciting'
];

function changingMsg (list, duration = 10000, delayPerMsg = 2000, loop = false) {
  let index = 0;
   let startTime = Date.now();

  function showNextMsg() {
    // Fade out
    math_rant.classList.remove('fade-in', 'show');
    math_rant.classList.add('fade-out');

    setTimeout(() => {
      const now = Date.now();
      const elapsed = now - startTime;

      // Stop if time is up and not looping
      if (!loop && elapsed >= duration) return;

      // Reset if looping and time exceeded
      if (loop && elapsed >= duration) {
        startTime = Date.now();
        index = 0;
      }

      // Change message
      math_rant.innerHTML = list[index % list.length];
      index++;


      // Fade in
        fadeInEffect(math_rant);
      //next msg
        setTimeout(showNextMsg, delayPerMsg);
    }, 400);
  }
   showNextMsg(); // Start looping
}


//letter fade in at the start
    //fadeInEffect(letter_container);
    //fadeInSequence(messages_psw_group, 10, false, 4000);
    fadeInSequence(messages_clock_group);
    setTimeout(() => {
        changingMsg(mathRanting, 9999, 1200, true);
        
    }, 3300);

//letter accept button
acp_letter_btn.addEventListener('click', () => {
    fadeOutAndHide(letter_container);
    setTimeout(() => {
        fadeInSequence(messages_psw_group, 3000, false, 4000);
    }, 600); // Match your fade-out duration
});

//Password box
const password = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(password === psw_input.value) {
        messages_psw_group.forEach((msg, i) => {
            fadeOutAndHide(msg, i * 100);
        });
        fadeInOutInEffect(loader, test)
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



