console.log("Main entry point of the backend...");
// const add = require("./add.js");
// console.log(`Sum of two nos are`, add(10, 20));

// const { calculateSub, calculateSum } = require("./add.js");
// console.log(`Sum of two nos are`, calculateSum(10, 20));
// console.log(`Sum of two nos are`, calculateSub(30, 10));

//! ES Module
import { calculateSub, calculateSum } from "./add.js";
console.log(`Sum of two nos are`, calculateSum(10, 20));
console.log(`Sum of two nos are`, calculateSub(30, 10));
