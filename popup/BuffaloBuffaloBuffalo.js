function listenForClicks() {
  document.addEventListener("click", (e) => {
    function buffalo(tabs) {
       browser.tabs.sendMessage(tabs[0].id, {
        command: "buffalo"
      });
    }
	
	function reset(tabs) {
      browser.tabs.sendMessage(tabs[0].id, {
        command: "reset",
      });
    }
	
    function reportError(error) {
      console.error(`Could not Buffaloify: ${error}`);
    }
    
    if (e.target.classList.contains("buffalo")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(buffalo)
        .catch(reportError);
    }
    else if (e.target.classList.contains("reset")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(reset)
        .catch(reportError);
    }
  });
}

function reportExecuteScriptError(error) {
  document.querySelector("#popup-content").classList.add("hidden");
  document.querySelector("#error-content").classList.remove("hidden");
  console.error(`Failed to execute BuffaloBuffaloBuffalo content script: ${error.message}`);
}

browser.tabs.executeScript({file: "/content_scripts/buffaloify.js"})
.then(listenForClicks)
.catch(reportExecuteScriptError);