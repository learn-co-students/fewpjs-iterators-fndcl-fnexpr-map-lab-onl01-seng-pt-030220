const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(phrase => {
    let words = phrase.split(" ");
    console.log(words);
    let capitalWord = words.map(word => word[0].toUpperCase() + word.slice(1));
    console.log(capitalWord);
    let result = capitalWord.join(' ');
    return result
  })
}

titleCased();