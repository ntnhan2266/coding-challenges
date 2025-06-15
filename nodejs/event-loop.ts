console.log("start");

setTimeout(() => console.log("setTimeout"), 0);
setImmediate(() => console.log("setImmediate"));
process.nextTick(() => console.log("nextTick"));
Promise.resolve().then(() => console.log("promise"));

console.log("end");

// Expected output order:
// 1. "start"
// 2. "end"
// 3. "nextTick"
// 4. "promise"
// 5. "setTimeout"
// 6. "setImmediate"
// Explanation:
// - "nextTick" is executed first because it is part of the microtask queue.
// - "promise" follows as it is also a microtask.
// - "setTimeout" is executed next as it is part of the macrotask queue.
// - "setImmediate" is executed last, after all microtasks and macrotasks from the current event loop cycle.
// Note: The actual order of "setTimeout" and "setImmediate" can vary based on the Node.js version and environment, but generally, "setImmediate" runs after all I/O tasks, while "setTimeout" runs after the current event loop cycle.
// This code demonstrates the order of execution in Node.js's event loop using `setTimeout`, `setImmediate`, `process.nextTick`, and a resolved Promise.

console.log("A");

Promise.resolve().then(() => {
  console.log("B");
});

setTimeout(() => {
  console.log("C");
}, 0);

new Promise((resolve) => {
  setTimeout(() => {
    resolve("D");
  }, 0);
}).then(console.log);

console.log("E");
// Expected output order:
// 1. "A"
// 2. "E"
// 3. "B"
// 4. "C"
// 5. "D"
// Explanation:
// - "A" and "E" are logged first as they are synchronous.
// - The Promise's `then` callback ("B") is executed next as it is a microtask.
// - The `setTimeout` callback ("C") is executed after the microtasks.
// - The Promise created with `setTimeout` resolves and logs "D" last, as it is also a microtask but queued after the first Promise's `then` callback.
// Note: The order of "C" and "D" can vary based on the timing of the `setTimeout` execution, but generally, "C" will execute before "D" because "C" is a direct callback from `setTimeout`, while "D" is resolved from a Promise that was created later.
// This code demonstrates the order of execution in Node.js's event loop using `setTimeout`, `setImmediate`, `process.nextTick`, and a resolved Promise.


Promise.resolve().then(() => {
  console.log("F");

  Promise.resolve().then(() => {
    console.log("G");
  });
});

setTimeout(() => {
  console.log("H");
}, 0);

console.log("I");
// Expected output order:
// 1. "I"
// 2. "F"
// 3. "G"
// 4. "H"
// Explanation:
// - "I" is logged first as it is synchronous.
// - The first Promise's `then` callback ("F") is executed next as it is a microtask.
// - The nested Promise's `then` callback ("G") is executed immediately after "F" as it is also a microtask.
// - The `setTimeout` callback ("H") is executed last as it is a macrotask.
// Note: The order of "F" and "G" is guaranteed because "G" is part of the same microtask queue as "F", and it will execute immediately after "F" before any macrotasks like `setTimeout`.