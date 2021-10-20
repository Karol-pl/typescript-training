// const names: Array<string> = [];

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Karol", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj.age);
