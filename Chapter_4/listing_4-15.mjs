setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

process.nextTick(() => {
  console.log("nextTick");
});
queueMicrotask(() => {
  console.log("queueMicrotask");
});
/*
Promise
queueMicrotask
nextTick
setTimeout

Promise
queueMicrotask
nextTick
setTimeout
*/
