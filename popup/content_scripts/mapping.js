/* Useless tip of the day! Having regex problems with word borders? Just make four cases for the word then! Start of sentence (space behind), middle of sentence (space on both sides), and end of sentence (space in front + space in front and period).
   Is it efficient? No! But it works, and thats what matters here. Regex word boundaries are far superior, but only if you can get them to work. I can't. */
let replacements = new Map();
	replacements.set( ' '+'a'+' ', ' '+'Buffalo'+' ');

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