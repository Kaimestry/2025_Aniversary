
//letter accept button
const letter_container = document.getElementById('letter_container');
const acp_letter_btn = document.getElementById('acp_letter_btn');

acp_letter_btn.addEventListener('click', () => {
    fadeOutAndHide(letter_container);
    setTimeout(() => {
        fadeInSequence(messages_psw_group, 3000, false, 3000);
    }, 600); // Match your fade-out duration
});

//Password box
const form = document.getElementById('form');
const psw_input = document.getElementById('psw_input');
const messages_psw_group = document.querySelectorAll('.msg_group_psw');
const loader = document.getElementById('loader')
const password = '';

const clock_fade_01 = document.querySelectorAll('.clock_fade01');
const clock_fade_02 = document.querySelectorAll('.clock_fade02');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(password === psw_input.value) {
        //LOADING THEN CLOCK INTRO
        messages_psw_group.forEach((msg, i) => {
            fadeOutAndHide(msg, i * 100);
        setTimeout(()=>{
            fadeInEffect(loader);
            setTimeout(()=>{
                fadeOutAndHide(loader)
                setTimeout(()=>{
                    fadeInSequence(clock_fade_01, 2200);
                    setTimeout(() => {
                    changingMsg(mathRanting, 9999, 1800, true);
                    },8000);
                },1000)
            },2170)
        },1900);
        setTimeout(()=>{
            fadeInSequence(clock_fade_02, 2200);
        },20000)
        });
    } else if( psw_input.value == '' ){
      alert('You need to type something in bruh...')
    } else {
        alert('Try again');
        psw_input.value = '';
    }
});

// Hint button
const hint = document.getElementById('hint');
const hint_reveal_btn = document.getElementById('hint_reveal_btn');

hint_reveal_btn.addEventListener('click', () => {
  hint.classList.remove('hidden');
});


//STOP PAO
const stop_paom_btn = document.getElementById('stop_paom');
const bomb = document.getElementById('bomb');
const boom = document.getElementById('boom');


stop_paom_btn.addEventListener('click', (e)=>{
  e.preventDefault(); // Stop the link from reloading the page
  bomb.classList.add('appear')
  setTimeout(()=>{
    bomb.classList.add('drop')
    setTimeout(()=>{
        bomb.classList.add('hidden');
        boom.classList.remove('hidden')
        boom.classList.add('appear');
        stopChangingMsg = true;

        setTimeout(()=>{
          fadeOutAndHide(bomb);
          fadeOutAndHide(boom);
        }, 2000)
    },500)
  }, 900);
  setTimeout(()=>{
    clock_fade_01.forEach((msg, i)=>{
        fadeOutAndHide(msg, i * 100)
    })
    clock_fade_02.forEach((msg, i)=>{
        fadeOutAndHide(msg, i * 100)
    })
  }, 2000+500+900)
})

//TESTING GROUND
function TestAtLoader(){
    fadeInEffect(loader);
            setTimeout(()=>{
                fadeOutAndHide(loader)
                setTimeout(()=>{
                    fadeInSequence(clock_fade_01, 100);
                    setTimeout(() => {
                    changingMsg(mathRanting, 9999, 1800, true);
                    },8000);
                },1000)
            },2170)
setTimeout(()=>{
    fadeInSequence(clock_fade_02, 2200);
},5000)
}

fadeInEffect(letter_container); //at the start
//fadeInSequence(messages_psw_group, 0, false, 0); //Password
//TestAtLoader()


