/* Useless tip of the day! Having regex problems with word borders? Just make four cases for the word then! Start of sentence (space behind), middle of sentence (space on both sides), and end of sentence (space in front + space in front and period).
   Is it efficient? No! But it works, and thats what matters here. Regex word boundaries are far superior, but only if you can get them to work. I can't. */   

var wordSet = browser.storage.local.get();
console.log(wordSet);
console.log("TEST MESSAGE");
let temp = "";
let temp2 = "";

let replacements = new Map();
  for(var i = 0; i < 1; i++){
    temp = wordSet[i].substring(0, wordSet[i].indexOf(","));
    temp2 = wordSet[i].substring(wordSet[i].indexOf(",")+1);
    replacements.set(temp, temp2);
  }

// Just sorts things. Or it should anyway.
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