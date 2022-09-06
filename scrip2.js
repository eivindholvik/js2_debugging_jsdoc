/**
 * Number or string containing number
 * @typedef {(number|string)} NumbersLike
 */

/**
 * String with an animal name
 * @typedef {string} AnimalsType
 */

/**
 * console logging out an animal
 * @param {AnimalsType} x Name of an animal
 * @returns {void} Does not return
 * @example
 * ```js
 * const animal = "Elephant";
 * logAnimal(animal);
 * //Exprects a console log of "Elephant"
 * ```
 */
const logAnimals = (x) => console.log(x);

let myVar = 0;

let list = [1, 2, 3, 4, 5, 3, 2, 1, 4];
// let myObj = {
//   name: "eivind",
//   age: list,
// };

// console.table(myObj);

// console.log("im here");

// for (let i = 0; i < 1000000; i++) {
//   myVar++; //myVar = myVar + 1; myVar += 1;
//   if (i === myVar) {
//     console.log(i + myVar);
//   }
// }

// let x = 5;

/**
 * Making a heading of weight headingWeight with content of headingContent and returns the dom element
 * @param {string} headingContent - The content of the header
 * @param {number} [headingWeight=2] - The weight of the heading, from 1 to 6
 * @returns {HTMLDomElement} The heading dom element with content and weight
 * @example
 * ```js
 * const content = "Example Text";
 * const weight = 1;
 * //making a new heading
 * myHeadingDom = makeHeadings(content, weight);
 * //expect to get a dom element of "<h1>Example Text</h1>"
 * ```
 */

function makeHeadings(headingContent, headingWeight = 2) {
  const headingDom = document.createElement(`h${headingWeight}`);
  headingDom.textContent = headingContent;
  return headingDom;
}

console.log(makeHeadings("hssi", 1212));
