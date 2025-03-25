// 1. Написать функцию возведения числа в степень.

// function power(base, exponent) {
//   return Math.pow(base, exponent);
// }

// console.log(power(2, 3));

// 2. Написать функцию поиска наибольшего общего делителя.

// function gcd(a, b) {
//   while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// }

// console.log(gcd(48, 18));

// 3. Написать функцию для поиска максимальной цифры в числе.

// function maxDigit(num) {
//   return Math.max(...num.toString().split("").map(Number));
// }

// console.log(maxDigit(7593));

// 4. Написать функцию, которая определяет простое ли переданное число.

// function isPrime(num) {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// console.log(isPrime(7));

// 5. Напиши функцию checkAge(age, callback), которая принимает возраст и
// функцию обратного вызова.

// ● Если age >= 18, вызывай callback, передав туда строку "Доступ
// разрешён".
// ● Если age < 18, вызывай callback, передав "Доступ запрещён".

// function checkAge(age, callback) {
//   if (age >= 18) {
//     callback("Доступ разрешён");
//   } else {
//     callback("Доступ запрещён");
//   }
// }

// checkAge(20, console.log);

// 6. Проверка на палиндром
// Палиндром — это слово, которое читается одинаково в обе стороны ("racecar",
// "madam").

// function isPalindrome(str) {
//   let reversed = str.split("").reverse().join("");
//   return str === reversed;
// }

// console.log(isPalindrome("racecar"));

// 7. Написать функцию, которая возвращает число Фибоначчи по переданному
// порядковому номеру. Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на том,
// что каждое число равно сумме двух предыдущих чисел. Например: порядковый номер
// 3 – число 2, порядковый номер 6 – число 8.

// ❌ //
