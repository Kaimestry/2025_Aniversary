

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

let stopChangingMsg = false;
function changingMsg (list, duration = 10000, delayPerMsg = 2000, loop = false, ) {
  let index = 0;
  let startTime = Date.now();

  function showNextMsg() {


    // Fade out
    math_rant.classList.remove('fade-in', 'show');
    math_rant.classList.add('fade-out');

        //stop
    if(stopChangingMsg) {
      return
    } else {

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
    }, 400);}
  }
   showNextMsg(); // Start looping
   
}

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


//Test
    //fadeInSequence(messages_psw_group, 10, false, 4000);
    //fadeInSequence(clock_fade_01, 0, 0, false);



