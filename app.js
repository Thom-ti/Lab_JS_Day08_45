// -- Class

// - Lab 1
// class Calculator {
//   constructor(_value) {
//     this.value = _value;
//   }
//   add(_num) {
//     this.value += _num;
//     return this.value;
//   }
//   subtract(_num) {
//     this.value -= _num;
//     return this.value;
//   }
//   multiply(_num) {
//     this.value *= _num;
//     return this.value;
//   }
//   divide(_num) {
//     this.value /= _num;
//     return this.value;
//   }
//   show() {
//     console.log(this.value);
//   }
// }
// let num1 = new Calculator(10);
// num1.add(5);
// num1.show();
// num1.subtract(2);
// num1.show();
// num1.multiply(5);
// num1.show();
// num1.divide(10);
// num1.show();

// - Lab 2
// class Sale {
//   constructor(_name, _amount, _price) {
//     this.name = _name;
//     this.amount = _amount;
//     this.price = _price;
//   }
//   calcPrice() {
//     return this.amount * this.price;
//   }
// }
// class Beverage extends Sale {
//   constructor(_name, _amount, _price) {
//     super();
//     this.amount = _amount;
//     this.price = _price;
//     // super(_name, _amount, _price); // same output
//   }
// }
// let beverage = new Beverage("Pepsi", 3, 19);
// console.log(beverage.calcPrice());


// -- Static Method

// - Lab 1
// let arr = []
// let isArray = (input) => Array.isArray(input)
// console.log(isArray(arr));


// -- Object keys, values, entries

// - Lab 1
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };
// let values = Object.values(salaries)
// let sum = values.reduce((acc, curr) => {
//   return acc += curr;
// }, 0)
// console.log(sum);

// - Lab 2
// let checkEmptyObj = (obj) => {
//   if (Object.keys(obj) == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let checkEmptyObj = (obj) => Object.keys(obj) == 0 ? true : false


// -- Rest Parameter

// - Lab 1
// let sumMultiply = (...item) => {
//   let sum = 1;
//   for (let i of item) {
//     sum *= i
//   }
//   return sum;
// }
// result = sumMultiply(2,3,5)
// console.log(result)

// - Lab 2
// let filterOutOdds = (...nums) => {
//   let odd = nums.filter((item) => {
//     return item % 2 == 0
//   })
//   return odd;
// }
// result = filterOutOdds(2,3,5,6,8)
// console.log(result)

// - Lab 3
// let mergeObjects = (...obj) => {
//   let empty = {}
//   for (let i = 0; i < obj.length; i++) {
//     Object.assign(empty, obj[i])
//   }
//   return empty;
// }
// let obj1 = {
//   fname: 'Thom',
//   lname: 'Santi'
// }
// let obj2 = {
//   nickName: 'Ti'
// }
// let result = mergeObjects(obj1, obj2)
// console.log(result)


// -- Spread Syntax

// - Lab 4
// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];
// let nums3 = [5, ...nums1, -6, -1, ...nums2]
// console.log(nums3)
// let sum = nums3.reduce((acc, curr) => acc += curr)
// console.log(sum)

// - Lab 5
// let num = (([...array1]) => {
//   let arr = array1;
//   arr[3] *= arr[3];
//   return arr;
// })
// let result = num([1,2,3,4,5]);
// console.log(result)

// - Lab 6
// let profile = (([name, surname, ...hobby]) => {
//   let arr = [name, surname, ...hobby, hobby.length];
//   return arr;
// })
// let result = profile(['Thom', 'Santi', 'Movie', 'Game'])
// console.log(result)

// - Lab 7
// let doubleAndReturnArgs = (([...nums], ...num) => {
//   let arr = [...nums];
//   for (let i of num) {
//     arr.push(i * 2);
//   }
//   return arr;
// })
// let result = doubleAndReturnArgs([1,2,3],10,4);
// console.log(result)

// - Lab 9
// let cloneArray = (([...item]) => {
//   return [...item]
// })
// let result = cloneArray([1,2,3])
// console.log(result)

// - Lab 10
// let cloneObject = (({...item}) => {
//   return {...item}
// })
// let result = cloneObject({Thom: 1, Santi: 2})
// console.log(result)


// -- Destructuring

// - Lab 11
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); //Maya
// console.log(second); //Marisa
// console.log(third); //Chi

// - Lab 12
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); //Raindrops on roses
// console.log(whiskers); //whiskers on kittens
// console.log(aFewOfMyFavoriteThings); //['Bright copper kettles', 'warm woolen mittens']

// - Lab 13
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); //[10, 30, 20]

// - Lab 14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); //8
// console.log(yearNeptuneDiscovered); //1846

// - Lab 15
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); //{yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// - Lab 16
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); //Your name is Alejandro and you like purple
// getUserData({ firstName: 'Melissa' }); //Your name is Melissa and you like green
// getUserData({}); // Your name is undefined and you like green

// - Lab 17
// let guest = 'Jane';
// let admin = 'Pete';
// let [name1, name2] = [guest, admin]
// guest = name2;
// admin = name1;
// console.log(guest)
// console.log(admin)

// - Lab 18
// const user = {
//   firstName: 'Thom',
//   lastName: 'Santi',
//   age: 26
// }
// let { firstName, lastName, age} = user;
// let checkAge = ((firstName, lastName, age) => {
//   if (age > 18) {
//     return console.log(`Hello ${firstName} ${lastName}`)
//   } else if (age <= 18) {
//     return console.log('No permission to entry')
//   }
// })
// checkAge(firstName, lastName, age)

// - Lab 19
// let user = {
//   name: 'John',
//   years: 27
// };
// let { name , years: age , isAdmin = false} = user;
// console.log(name)
// console.log(age)
// console.log(isAdmin)

// - Lab 21
// let arr = [1, [2, [[[3, 4], 5], 6]]];
// let [a, [b, [[[c, d], e], f]]] = arr
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)

// - Lab 22
// const obj = { prop: 5, prop2: 10 };
// let {prop: a, prop2: b} = obj;
// console.log(a)
// console.log(b)

// - Lab 23
// let{ a, b } = { a: 1, b: 2 };
// console.log(a) //1
// console.log(b) //2

// - Lab 24
// const [, , , a, b] = [1, 2, 3];
// console.log(a) //undefined
// console.log(b) //undefined

// - Lab 25
// const q = { prop: 5, prop2: [10, 100] };
// let { prop: x, prop2: [, y]} = q;
// console.log(x)
// console.log(y)

// - Lab 26
// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };
// let {
//   prop: x,
//   prop2: {
//     prop2: {
//       nested: [, y, ]
//     }
// }} = q;
// console.log(x)
// console.log(y)

// - Lab 27
// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];
// for (let i of names) {
//   let { firstName, lastName } = i
//   console.log(firstName + ' ' + lastName)
// }

// - Lab 28
// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];
// for (let i of users) {
//   let { user, age = 'unknown' } = i
//   console.log(user + ' ' + age)
// }
