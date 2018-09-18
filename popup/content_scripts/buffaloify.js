var buffaloButton = function buffaloify(){
	var elements = document.getElementsByTagName('*');

	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];

		for (var j = 0; j < element.nodes.length; j++) {
			var node = element.nodes[j];

			if (node.nodeType === 3) {
				var str = node.nodeValue;
				var replacedstr = str.replace(/a/gi, "buffalo");

				if (replacedstr !== str) {
					element.replaceChild(document.createTextNode(replacedstr), node);
				}
			}
		}
	}
}

function onExecuted(result) {
  console.log(`Buffalo`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var executing = browser.tabs.executeScript({
  code: buffaloButton
});
executing.then(onExecuted, onError);