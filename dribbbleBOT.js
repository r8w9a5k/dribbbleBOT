javascript:

function run(){ //function run wraps all the code into one run() function
var like = document.querySelector(".like-shot"); //select like button
var next = document.querySelector(".shot-nav-next a"); //select next page

	function simulateClick (elem) { 		     //core of simulate click function
		var evt = new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
			view: window 
		});
		var canceled = !elem.dispatchEvent(evt); // end of core simulate click function
	};

		if (!like.classList.contains('current-user-likes')){
			simulateClick(like);	//then like
			simulateClick(next);	//&& go next
		}
		else {				//else don't like anything and go next
			simulateClick(next);
		}

}

setInterval((run),2000); //setInterval for my run() function to 2000ms

void 0;
