function run() {
var like = document.querySelector(".shot-overlay .like-shot");
var next = document.querySelector(".shot-nav-next a");

  function simulateClick (elem) {
    var evt = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window 
      });
      var canceled = !elem.dispatchEvent(evt);
      };

      if (!like.classList.contains("current-user-likes")){
	simulateClick(like);
	simulateClick(next);
      }
      else {
	simulateClick(next);
      }

  }

setInterval(run, 6000);
