var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.nodes.length; j++) {
        var node = element.nodes[j];

        if (node.nodeType === 3) {
            var target = "a"
			var str = node.nodeValue;
            var replacedstr = str.replace(strTarget, 'buffalo','gi'); 

            if (replacedstr !== str) {
                element.replaceChild(document.createstrNode(replacedstr), node);
            }
        }
    }
}