const target = new EventTarget();

target.addEventListener("coustomEvent", (event) => {
  console.log(`${event.type} was triggered`);
  //Output: coustomEvent was triggered
});

const event = new Event("coustomEvent");

target.dispatchEvent(event);
