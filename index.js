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

// const titleCased = () => {
//    return tutorials.map(function (tutorial) {
//     tut = tutorial.toLowerCase();
//     str = tut.split(' ');
//     for (let i = 0; i < str.length; i++) {
//       str[i] = `${str[i].charAt(0).toUpperCase()}${str[i].slice(1)}`
//     return str.join(' ');

//     // return Object.assign({}, robot, {
//     //   modes: robot.modes * 2,
//     //   isActivated: true,
//     // });
//   })
// }

//https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/


const titleCased = () => {

  return tutorials.map(tutorial => {
    tutorial = tutorial.split(' ')

    for (let i = 0; i < tutorial.length; i++) {
      tutorial[i] = `${tutorial[i].charAt(0).toUpperCase()}${tutorial[i].slice(1)}`
    }
    return tutorial.join(' ')
   
})
}


console.log(titleCased, "this is title case");
