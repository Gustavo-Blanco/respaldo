const matematica = {};

const add = (n1, n2) => n1 + n2;
const substract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n2 == 0 ? "error" : n1 / n2;

matematica.add = add;
matematica.substract = substract;
matematica.multiply = multiply;
matematica.divide = divide;


module.exports = matematica;