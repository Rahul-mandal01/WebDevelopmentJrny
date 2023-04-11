// string in primitive
// let lastName='  Mandal  ';
// string in object
// let firstName = new String('Rahul');

// using backtics for printing everything
// let message=`Hello India,
// Thanks for everything

// Regards,
// Rahul
// `;

// console.log(message);
// let words=message.split(' ');
// console.log(words);

// let date = new Date();
// let date2 = new Date('April 27 2001 14:12');
// let date3 = new Date(2001, 3, 27, 14)
// date3.setFullYear(2002);
// date3.setDate(25);
// console.log(date3);


// let numbers=[2,3,5,6];

// end-> push

// start -> unshift

// middle -> splice

// Searching
// console.log(numbers);
// console.log(numbers.indexOf(5));

// want to check if the numbers is present in array or not
// ----------------But Not the efficient method-------------
// if(numbers.indexOf(2) != -1)
//     console.log('present');
// else
//     console.log('absent');


// -------------------efficient method-------------
// console.log(numbers.includes(222));

// ------------another method----------
// indexOf(numberSearch,fromWhereToStartSearching)
// console.log(numbers.indexOf(5,4));
// ----------------------till  here we were using searching with primitive------------

// using reference type
// let courses=[
//     {no:1, naam:'Rahul'},
//     {no:2, naam:'Love'}

// ];

// console.log(courses);

// console.log(courses.includes({no:1, naam:'Rahul'}));



// let course= courses.find(course => course.naam === 'Rahul');

// console.log(course);


// Removing Function

// let numbers=[1,2,3,4,5,6,7];

// end
// numbers.pop();

// begining
// numbers.shift();

// middle
// numbers.splice(2,1)
// console.log(numbers);


// Emptying an Array

// let numbers=[1,2,3,6,4,5];
// let numbers2=numbers;

// // numbers=[];
// // numbers.length=0;
// numbers.splice(0,numbers.length);

// console.log(numbers);
// console.log(numbers2);



// combining $$ slicing Arrays on primitive
// let first=[2,3,4];
// let second=[4,5,6,7];

// let combined = first.concat(second);
// console.log(combined);

// let combined= first.concat(second);
// console.log(combined);

// let marks=[10,20,30,40,50,60,70,80,90];
// let sliced= marks.slice(2,5);
// let sliced = marks.slice();
// let sliced = marks.slice(2);

// console.log(sliced);


// spread operator

// let first=[2,3,4];
// let second=[5,6,7];

// // let combined=[...first, ...second];
// let combined=[...first,'a', ...second,'b',true];
// console.log(combined);

// // how to create a copy
// let another=[...combined];
// console.log(another);

// let arr=[10,20,30,50,60,70];
// for(let value of arr){
//     console.log(value);
// }

// arr.forEach(function(number){
//     console.log(number);
// });

// using Arrow function
// arr.forEach(number => console.log(number));



// Joining Array $$ spliting Array
// let numbers=[10,20,30,50];
// const joined = numbers.join(',');
// console.log(joined);

// let message = 'This is my first message';
// let parts = message.split(' ');
// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);


// Sorting Array $$ Reversing Array
// let numbers=[50,40,10,80,60,20];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);


// filtering method
// let numbers=[1,2,-1,-2];
// let filtered = numbers.filter(function(value){
//     // return value>=0;
//     return value<0;
// });

// let filtered = numbers.filter(value =>  value<0);

// console.log(filtered);


// Mapping Array
// let numbers=[5,6,8,9,10];
// console.log(numbers);

// let items = numbers.map(function(value){
//     return 'student_no_' + value;
// });

// let items = numbers.map(value=>'student_no_' + value);
// console.log(items);


// mapping with objects
// let numbers=[1,2,-10,-6];
// let filtered= numbers.filter(value=> value>=0);

// let items = filtered.map(function(num){
//     let obj = {value: num};
//     return obj;
// })

// let items = filtered.map(num=> {value: num});

// chaining

// let numbers=[1,2,-10,-6];
// let items = numbers
//                 .filter(value=> value>=0)
//                 .map(num=> {value: num});
// console.log(items);