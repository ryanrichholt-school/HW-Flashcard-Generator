var BasicCard = require('./BasicCard');
var ClozeCard = require('./ClozeCard');

// BasicCard constructor
var firstPresident = new BasicCard(
           "Who was the first president of the United States?", "George Washington");

// Test BasicCard.front
console.assert(
        firstPresident.front === "Who was the first president of the United States?",
        'BasicCard.front failed unit test'); 

// Test BasicCard.back
console.assert(
        firstPresident.back === "George Washington",
        'BasicCard.back failed unit test'); 

// ClozeCard constructor
var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// Test ClozeCard.cloze
console.assert(
        firstPresidentCloze.cloze === "George Washington",
        'ClozeCard.cloze failed unit test'); 

// Test ClozeCard.partial
console.assert(
        firstPresidentCloze.partial === "... was the first president of the United States.", 
        'ClozeCard.partial failed unit test'); 

// Test ClozeCard.fullText
console.assert(
        firstPresidentCloze.fullText === "George Washington was the first president of the United States.", 
        'ClozeCard.fullText failed unit test');

// Negative unit test for ClozeCard
//Should throw or log an error because "oops" doesn't appear in "This doesn't work"
try{
    var brokenCloze = new ClozeCard("This doesn't work", "oops");
    console.log('Invalid ClozeCard failed negative unit test');
    process.exit(1);
}
catch(err) {
    // There was an error thrown, working as intended
}

// If nothing fails we're all good
console.log('All unit tests passed');

