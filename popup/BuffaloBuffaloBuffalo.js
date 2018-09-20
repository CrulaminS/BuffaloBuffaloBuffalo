let replacements = new Map();
	replacements.set('a', 'Buffalo');

let tempArray = Array.from(replacements);
tempArray.sort((pair1, pair2) => {
  const firstWord = pair1[0];
  const secondWord = pair2[0];

  if (firstWord.length > secondWord.length) {
    return -1;
  }
  if (secondWord.length > firstWord.length) {
    return 1;
  }
  return 0;
});

let sortedReplacements = new Map(tempArray);

function listenForClicks(){
	document.getElementById("activate").addEventListener("click", activate()); 
	document.getElementById("addWord").addEventListener("click", displayDate); 
	document.getElementById("removeWord").addEventListener("click", displayDate); 
	document.getElementById("reset").addEventListener("click", displayDate);
}

browser.tabs.executeScript({file: "/content_scripts/buffaloify.js"})
.then(listenForClicks);