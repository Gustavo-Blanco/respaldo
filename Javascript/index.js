// objeto = {
//   value: 1,
//   next: {},
// };

// const addLinkedList = (objeto, n) => {
//   console.log(n);
//   if (n ==1) {
//     objeto.next = { value: objeto.value+1, next: null };
//   } else {
//     objeto.next = addLinkedList({ value: objeto.value + 1 }, n - 1);
//   }
//   return objeto;
// };

const suma = (...args) => args.reduce((prev,current) => prev+current);
console.log(suma(1,2,3,4,6));