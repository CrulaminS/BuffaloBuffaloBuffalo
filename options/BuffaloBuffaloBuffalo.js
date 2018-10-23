const enteredReplacees = document.querySelector("#replacees");

function saveInput(){
	var replacees = {
        words: enteredReplacees.value.split("\n")
    };
   replacees = JSON.stringify(replacees);
   replacees = btoa(replacees);
   localStorage.setItem('_words', replacees);
}

function update(replee){
    enteredReplacees.value = replee.replacees.join("\n");
}

function reset(){
	enteredReplacees.value = "";
    browser.storage.local.clear();
}

browser.storage.local.get().then(update);

const saveButton = document.querySelector("#save-button");
const resetButton = document.querySelector("#reset-button");
saveButton.addEventListener("click", saveInput);
resetButton.addEventListener("click", reset);