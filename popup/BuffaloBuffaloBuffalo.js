function listenForClicks() {
  document.addEventListener("click", (e) => {
	document.getElementById('buffalo').onclick = function() {
		command: "buffalo";
	};
	
	function reset(tabs) {
      browser.tabs.sendMessage(tabs[0].id, {
        command: "reset",
      });
    }
    
    if (e.target.classList.contains("buffalo")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(buffalo);
    }
    else if (e.target.classList.contains("reset")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(reset);
    }
  });
}

browser.tabs.executeScript({file: "/content_scripts/buffaloify.js"})
.then(listenForClicks);