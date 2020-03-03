// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the sentences property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      "Things are only impossible until they are not.",
      "The acquisition of wealth is no longer the driving force of our lives. We work to better ourselves and the rest of humanity.",
      "Make it so.",
      "Engage.",
      "Tea. Earl Grey. Hot.",
      "Reports of my assimilation are greatly exaggerated.",
      "Space, the final frontier.",
      "These are the voyages of the starship Enterprise.",
      "Its continuing mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no one has gone before!",
      "If we're going to be damned, let's be damned for what we really are.",
      "There can be no justice so long as laws are absolute. Even life itself is an exercise in exceptions.",
      "Being first at any cost is not always the point.",
      "Imprisonment is an injury, regardless of how you justify it.",
      "I am Locutus of Borg.",
      "Resistance is futile.",
      "There are four lights!",
      "The first duty of every Starfleet officer is to the truth!",
      "Scientific truth, or historical truth, or personal truth!",
      "It is the guiding principal upon which Starfleet is based!",
      "Now if you can't find it within yourself to stand up and tell the truth, you don't deserve to wear that uniform!",
      "Hmm. I'm entitled to ramble on about something everyone knows?",
      "You'll have to call again.",
      "You will respond to my questions.",
      "You are borg.",
      "Lock phasers on that vessel."

   ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function(firstQuote) {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 250;
  let firstSentence = firstQuote;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = firstSentence.concat(" " + this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
}

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  let firstQuote = "Darmok and Jalad at Tanagra.";
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph(firstQuote));
    firstQuote = "";
  }
  return allParagraphs;
}

module.exports = loremIpsum;