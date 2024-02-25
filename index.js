let string = "abcd";
let array = [string, string.split("").join(".")];

for (let i = 1; i <= string.length; i++) {
  for (let j = i + 1; j < string.length; j++) {
    array.push(
      string.slice(0, i) + "." + string.slice(i),
      string.slice(0, i) + "." + string.slice(i, j) + "." + string.slice(j)
    );
  }
}

console.log(array);

let uniqueArray = new Set(array);
console.log(Array.from(uniqueArray));
