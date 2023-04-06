import mongoose, { Schema } from "mongoose";

const CommentSchema = new Schema({
  value: String,
  publish: { type: Date, default: Date.now },
});

const StudentSchema = new Schema({
  name: String,
  age: Number,
  fees: Number,
  hobbies: [String],
  isActive: Boolean,
  comments: [CommentSchema],
  join: { type: Date, default: Date.now },
});

const StudentModel = mongoose.model("student", StudentSchema);

export { StudentModel };
