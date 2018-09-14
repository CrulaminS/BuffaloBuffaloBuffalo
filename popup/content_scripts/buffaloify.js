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