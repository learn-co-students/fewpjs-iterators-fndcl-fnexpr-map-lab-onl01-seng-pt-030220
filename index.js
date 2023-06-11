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
  let arrayOfStrings = tutorials.map((string => 
      string.split(" ")));
     
  

  for (let seperatedString of arrayOfStrings) {
      
      for (let i = 0; i < seperatedString.length; i++ ) {
          seperatedString[i] = seperatedString[i].charAt(0).toUpperCase() + seperatedString[i].slice(1)
          }
      }
      
       let newArrayOfStrings = arrayOfStrings.map((string) => string.join(" "));
       return newArrayOfStrings;
  }

