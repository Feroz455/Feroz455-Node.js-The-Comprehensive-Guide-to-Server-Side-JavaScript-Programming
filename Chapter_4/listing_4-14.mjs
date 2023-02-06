process.on("unhandledRejection", (error) => {
  console.log("unhandledRejection"); // Output unhandledRejection
  console.error(error); //OutPut: Whoops, an Error occurred
});

function withPromise() {
  return Promise.reject("Whoops, an Error occurred");
}

withPromise().then(() => {
  console.log("Prommise resolved");
});
