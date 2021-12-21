// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


function init() {

  let errorMess = document.getElementById('modal');
  // errorMess.hidden = true;

  let like = document.getElementsByClassName('like');
  console.log(like);

  mimicServerCall(url = "http://mimicServer.example.com", config = {})
    .then(res => {
      console.log('its a success')
      let actHeart = document.getElementsByClassName('like-glyph')

      for (let i = 0; i < actHeart.length; i++) {
        actHeart[i].addEventListener("click", fill => {
          if (actHeart[i].innerHTML == EMPTY_HEART) {
            actHeart[i].innerHTML = FULL_HEART
            actHeart[i].classList.add("activated-heart")

          } else {
            actHeart[i].innerHTML = EMPTY_HEART;
            actHeart[i].classList.remove("activated-heart")

          }
        })
      }
      console.log(actHeart);

    })
    .catch(data => {
      errorMess.classList.remove("hidden");
      setTimeout(() => errorMess.classList.add("hidden")
        , 3000)

    })

}

init()


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}



