//  FOR sikl

// Sonni teskari chiqarish 3 xonali
// let a = 153;
// let x3 = a % 10;
// let x2 = ((a - x3) / 10 % 10);
// let x1 = ((a - x2 * 10 - x3) / 100);
// console.log(100 * x3 + 10 * x2 + x1); 

// let a = 1534;
// let x4 = a % 10;
// let x3 = ((a - x4) / 10 % 10);
// let x2 = ((a - x3 * 10 - x4) / 100);
// let x1 = ((a - x2 * 100 - x3 - x4 / 1000 ))
// console.log(1000 * x4 + 100 * x3 + 10 * x2 + x1); 



// EXERCISE 1 

// let n = +prompt("n: ");
// let k = +prompt("k: ");

// for(let i = 1; i <= n; i++) {
//   console.log(k);
// }

// EXERCISE 2

// let a = 2;
// let b = 7;
// let count = 0;

// for(i = a; i <= b; i++) {
//   count++;
//   console.log(i);
// }

// console.log(`${a} va ${b} sonlar orasidagi butun sonlar ${count}`);

// EXERCISE 3

// let a = 2;
// let b = 7;
// let count = 0;

// for(i = b - 1; i > a; i--) {
//   count++;
//   console.log(i);
// }

// console.log(`${a} va ${b} sonlar orasidagi butun sonlar kamayish tartibi ${count}`);

// EXERCISE 4 

// let a = 1000;
// let b = 1;
// let c = 10;
// for(let i = b; i <= c; i++) {
//   console.log(i * a);
// }


// EXERCISE 5

// let a = 1000;
// let b = 0.1;
// let c = 1;
// for(let i = b; i <= c; i += b) {
//   console.log(i * a);
// }

// EXERCISE 6

// let a = 1000;
// let b = 1.1;
// let c = 2;
// for(let i = b; i <= c; i += 0.2) {
//   console.log(i * a);
// }


// EXERCISE 8 

// let a = 1;
// let b = 6;
// let count = 1;
// for(i = 1; i <= b; i++) {
//   count *= i;
// }

// console.log(count);

// EXERCISE 9 

// let a = 1;
// let b = 2;
// let count = 0;
// for(i = a; i <= b; i++) {
//   count += i**2;
// }

// console.log(count);

// let n = 10;
// let s = 0;
// for(let i = 1; i <= n; i++) {
//   s += 1 / i;
// }
 
// console.log(s);

// EXERCISE 11

// let n = 10;
// let s = 0;
// for(let i = 0; i < n; i++) {
//   s += (n + i)**2; 
// }

// console.log(s);

// EXERCISE 12

// let n = 1.5;
// let a = 1.1;
// let count = 1;
// for(i = a; i < n + 0.1; i+=0.1) {
//   count *= i;
// }

// console.log(count.toFixed(1));

// EXERCISE 13

// let a = 1.1;
// let b = 1.5;
// let sum = 0;
// let count = 0;

// for(let i = 1.1; i <= b + 0.1; i += 0.1) {
//   if (count == 0) {
//     sum += i;
//     count--;
//   } else {
//     sum -= i;
//     count++;
//   }
// }

// console.log(sum.toFixed(1));

// EXERCISE 14

// let n = 5;

// for(i = 1; i <= n; i += 2) {
//   console.log(i**2);
// }

// EXERCISE 15

// let n = 5;
// let s = 2;
// let sum = 1;
// for(let i = 1; i <= s; i++) {
//   sum *= n;
// }

// console.log(sum);


// EXERCISE 16

// let n = 8;
// let a = 2;
// for(let i = 1; i <= n; i++) {
//   console.log(a ** i);
// }

// EXERCISE 17

// let n = 5;
// let a = 2;
// let sum = 0;
// for(let i = 1; i <= n; i++) {
//   console.log(a**i);
//   sum += a**i;
// }
// console.log(`Darajalar yig'indisi - ${sum}`);

// EXERCISE 18

// let n = 5;
// let a = 2;
// let sum = 0;
// for(let i = 1; i < n; i++) {
//   console.log(a**i);
//   sum += a**i;
// }
// console.log(`Darajalar yig'indisi - ${sum}`);

// EXERCISE 19

// let a = 5;
// let count = 1;
// for(i = 1; i <= a; i++) {
//   count *= i;
// }

// console.log(count);

// EXERCISE 20

// let n = 5;
// let sum = 1;
// let count = 0;
// for(let i = 1; i <= n; i++) {
//   count += sum *= i;
// }
// console.log(count);

n = 3;
for(i = 1; i <= n; i++) {
  for(j = 1; j <= n; j++){
    console.log(n + i);
  }
}