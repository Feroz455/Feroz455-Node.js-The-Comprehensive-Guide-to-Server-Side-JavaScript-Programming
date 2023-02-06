const textEncoder = new TextEncoder();

const encoderString = textEncoder.encode("Hello World");

console.log(encoderString);
/*
Uint8Array(11) [
   72, 101, 108, 108,
  111,  32,  87, 111,
  114, 108, 100
]
*/

const textDecoder = new TextDecoder();

const decoderString = textDecoder.decode(encoderString);
console.log(decoderString);
/*
Uint8Array(11) [
   72, 101, 108, 108,
  111,  32,  87, 111,
  114, 108, 100
]
Hello World
*/
