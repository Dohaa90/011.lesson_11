let array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let result = array.reduce(function(sum, elem) {
    if (elem >= 0) {
        return sum + elem;
    } else {
        return sum;
    }
});
let resultNeg = array.reduce(function(sum, elem) {
    if (elem < 0) {
        return sum + elem;
    } else {
        return sum;
    }
});

let negative = array.filter(elem =>(elem<0))

console.log("сума позитивних елементів", result);

console.log("сума негативних елементів", resultNeg);

let positive = array.filter(elem =>(elem > 0))

console.log("кількість позитивних елементів:",positive.length)

console.log("кількість негативних елементів:", negative.length)

console.log("мінімальний елемент масиву:", Math.min.apply(null, array));

console.log("мінімальний елемент масиву та його порядковий номер:", array.indexOf(Math.min.apply(null, array)));

console.log("максимальний елемент масиву:", Math.max.apply(null, array));

console.log("максимальний елемент масиву та його порядковий номер:", array.indexOf(Math.max.apply(null, array)));

let res = array.filter(function(elem) {
    if (elem % 2 !== 0 && elem > 0) {
        return true;
    } else {
        return false;
    }
});

let res2 = array.filter(function(elem) {
    if (elem % 2 == 0 && elem > 0) {
        return true;
    } else {
        return false;
    }
});

console.log("кількість непарних позитивних елементів:", res.length);

console.log("кількість парних позитивних елементів:", res2.length);

let sumEven = res.reduce(function(sum, elem) {
    return sum + elem;
}, 0);

console.log("суму парних позитивних елементів:", sumEven);

let sumOdd = res2.reduce(function(sum, elem) {
    return sum + elem;
}, 0);

console.log("суму непарних позитивних елементів:", sumOdd);

const sumPositive = positive.reduce((acc, rec) => acc * rec);

console.log("добуток позитивних елементів:", sumPositive);

let maxNumber = array[0];
let max = 0;
for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        maxNumber = array[i];
        array[max] = 0;
        max = i;
    } else {
        array[i] = 0;
    }
}
console.log("найбільший серед елементів масиву, ост альні обнулити:", array);