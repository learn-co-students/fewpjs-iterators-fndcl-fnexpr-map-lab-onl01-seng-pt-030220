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
//
const titleCased = () => {
  return tutorials.map(function(student){
  let   s = student.split(" ");
    let i = 0;
    while(i < s.length){
      s[i] = s[i][0].toUpperCase() + s[i].slice(1);
      i++;
    }
      return s.join(" ");
  });
}
