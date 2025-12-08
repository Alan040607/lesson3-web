// let a = "Alan";
// let b = "Alex";
// let c = "Sex";
// console.log(`${a}+${b}=${c}`);

// let a = 2.0;
// let b = 1.5;
// let c = 4.5;
// let d = 5.5;
// console.log(((a+b)*c)/d);

// function smartadd(a, b){
//     if (typeof a == 'string' && typeof b == 'string'){
//         return Number(a) + Number(b)
//     }
//     if (typeof a == 'number' && typeof b == 'number'){
//         return a+b
//     }
//     return String(a)+String(b)
// }
// console.log(smartadd("10", 5))


// const input = "   Привет, меня зовут Иван! Мне 25 лет. Я люблю JavaScript.  "
// const s1 = input.trim()
// const s2 = input.toLowerCase()
// const len = input.length
// const first = input[0]
// const last = input[len - 1]
// let c = 0
// for (let i = 0; i < len; i++){
//     if (s2[i] == "a" || s2[i] == "а"){
//         c+=1
//     }
// }
// const words = input.split(/[^a-zа-яA-ZА-Я0-9]+/).filter(word => word != "")
// let longest = ''
// for (let i = 0; i<words.length; i++){
//     if (words[i].length > longest.length) {
//         longest = words[i]
//     }
// }
// const result = `Слов в тексте: ${words.length}. Самое длинное слово: ${longest}.`;
// console.log(result)


// const profile = {
//   name: "Иван",
//   age: 30,
//   contacts: {
//     city: "Москва",
//     street: "Ленина",
//     house: 20,
//     phone: "+79998887766"
//   },
//   skills: ["JavaScript", "HTML", "CSS"],
//   job: null
// } ;
// function getFullAddress(user) {
//   const { city, street, house } = user.contacts
//   return `${city}, ${street}, ${house}`
// }
// console.log(getFullAddress(profile))
// console.log(`Имя: ${profile.name}, возраст: ${profile.age}, город: ${profile.contacts.city}, улица: ${profile.contacts.street}, дом: ${profile.contacts.house}`)
// if (profile.job?.title) {
//   console.log("Работа найдена")
// } else {
//   console.log("Работа отсутствует")
// }

// function processArray(first, ...rest) {
//   console.log(first)
//   console.log(rest)
//   return { first, rest }
// }
// const a = [10, 20, 30, 40, 50]
// processArray(...a)

// const a = [1, 2, 3, 4, 5]
// let b = a.pop()
// a.push(1)
// a.push(2)
// console.log(a)

// let arr2 = ['JavaScript', 'is', 'awesome']
// arr2.shift()
// arr2.unshift('easy','difficult')
// console.log(arr2)

// arr = [1, 2, 3];
// let sum = 0;
// arr.forEach((element) => {
//   sum += element;
// });
// console.log(sum);

// const a = [1, 2, 3, 4, 5]
// const a2 = a.map(a => a=a*a)
// console.log(a2)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// const evenNumbers = numbers.filter(num => num % 2 === 0)
// const sumOfEvenNumbers = evenNumbers.reduce((sum, current) => sum + current, 0);
// console.log(sumOfEvenNumbers)


function manageGuests(commands) {
  const guests = [];
  commands.forEach(x => {
    if (x.startsWith("add")) {
      const name = x.split(" ")[1];
      guests.push(name);
    } else if (x === "remove") {
      guests.pop();
    }
  });
  return guests;
}
const commands = [
  "add Alice",
  "add Bob",
  "remove",
  "add Charlie"
];
console.log(manageGuests(commands));
