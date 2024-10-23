## Chapter 05 - Modules (Advanced)

- All the code of the module is wrapped inside a function whenever we use the require(path) method and then runs it and only if we export those variables/functions and all then only we can access it on another module.
- The function which wraps the code of module is IIFE (Immediately Invoked Function Expression) which is immediately called/invoked after we define it.
- Before giving the module code to V8 engine, Node.js wraps the whole code inside an IIFE as it immediately invokes the code and protects the variables and functions inside it.
- module and require are both provided by Node.js with the IIFE function as parameter and that's why we got the access of the module and require always

#### How does require() method works?

- Resolves the module
- Loads the content of the module
- Wraps everything inside the IIFE
- Evaluation of code (returns the module.exports)
- Caching of data
