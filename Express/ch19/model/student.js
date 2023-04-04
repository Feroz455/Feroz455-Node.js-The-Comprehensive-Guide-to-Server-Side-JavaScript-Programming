import mongoose from "mongoose";
//Defining Schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 50 },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 5500.5,
  },
  hobbies: { type: Array },
  isactive: { type: Boolean },
  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
  join: { type: Date, default: Date.now },
});
// console.log(studentSchema.path("age"));
//Compiling Schema

const studentModel = mongoose.model("student", studentSchema);

const createDoc = async () => {
  try {
    const studentDoc = new studentModel({
      name: "Mahmud",
      age: 24,
      fees: 6500.5,
      hobbies: ["Reading", "Yogo"],
      isactive: true,
      comments: [{ value: "This is good mongoose" }],
    });
    //Saving Document
    const result = await studentDoc.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
// const createDoc = async (name, age, fees, hobbies, isactive, comments) => {
//   try {
//     const studentDoc = new studentModel({
//       name: name,
//       age: age,
//       fees: fees,
//       hobbies: hobbies,
//       isactive: isactive,
//       comments: comments,
//     });
//     //Saving Document
//     const result = await studentDoc.save();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

const createMultiDoc = async () => {
  try {
    const MahmudDoc = new studentModel({
      name: "Mahmud",
      age: 24,
      fees: 6500.5,
      hobbies: ["Reading", "Yogo"],
      isactive: true,
      comments: [{ value: "This is good mongoose" }],
    });
    const RohanDoc = new studentModel({
      name: "Rohan",
      age: 24,
      fees: 6500.5,
      hobbies: ["Reading", "Yogo"],
      isactive: true,
      comments: [{ value: "This is good mongoose" }],
    });
    const TylorDoc = new studentModel({
      name: "Tlor",
      age: 24,
      fees: 6500.5,
      hobbies: ["Reading", "Yogo"],
      isactive: true,
      comments: [{ value: "This is good mongoose" }],
    });
    //Saving Document
    let result = await studentModel.insertMany([MahmudDoc, RohanDoc, TylorDoc]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { studentModel, createDoc };
