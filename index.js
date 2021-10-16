const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];




let newArray = tutorials.map( (title) =>{
  let name = '';
for (let i = 0; i < title.length; i++){
  if (i === 0){
    name += title[i].toUpperCase();
  } else if(title[i-1] === ' '){
    name += title[i].toUpperCase();
  } else{
     name += title[i];
  }
}
return name;
})

function titleCased() {
  return newArray;
}

console.log(titleCased());

/// PLEASE READ ///
/*

The function I've included below takes any array as an argument and returns
all elements within that array to titleCased. It throws no errors and returns
what I want it to return when I run "node
index.js" in my terminal. It also returns the titleCased array when I run it in
node. However, for some reason when I run "learn", I get the error message
"cannot read property 'map' of undefined." My guess is that I receive this error
message because 'list' is a parameter, and doesn't have any definitive value,
so when I run map on it within my titleCased function, map doesn't recognize
it as a valid array. But wouldn't this 
error be caught by running "node index.js" as well? What is the difference 
between the processes being run by "learn" and the processes being
run by "node index.js"? The way I managed to pass
the test still uses map appropriately, and still returns the
titleCased array, but it seems kind of sneaky. 
Was this how we were supposed to pass the test? Did I miss something? Thanks!

*/



// function titleCased(list) {
//   let newArray = list.map( (title) =>{
//     let name = '';
//   for (let i = 0; i < title.length; i++){
//     if (i === 0){
//       name += title[i].toUpperCase();
//     } else if(title[i-1] === ' '){
//       name += title[i].toUpperCase();
//     } else{
//        name += title[i];
//     }
//   }
//   return name;
// })
// //console.log(newArray);
// return newArray;
// }

//  console.log(titleCased(tutorials));




//This is just a test function.

//const array = [1, 2, 3, 4];

// Each element of Flebby is twice the value of the corresponding element of array



// const Flebby = array.map( function(element){
//   return element *2;
// })

// console.log(array);

// console.log(Flebby);
 














// let bleg = 'what does the this keyword mean?';

// function uppercase(title) {
//   let name = ''
//   for (let i = 0; i < title.length; i++){
//     if (i === 0){
//       name += title[i].toUpperCase();
//     } else if(title[i-1] === ' '){
//       name += title[i].toUpperCase();
//     } else{
//        name += title[i];
//     }
//   }
//   console.log(name)
//   return name;
// }

// uppercase(bleg);

// return tutorials
