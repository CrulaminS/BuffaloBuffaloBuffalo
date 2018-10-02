const enteredReplacees = document.querySelector("#replacees");

function saveInput(){
	let replacees = enteredReplacees.value.split("\n");
	browser.storage.local.set({replacees});
}

function update(replee){
	enteredReplacees.value = replee.replacees.join("\n");
}

browser.storage.local.get().then(update);
enteredReplacees.addEventListener("change", saveInput);