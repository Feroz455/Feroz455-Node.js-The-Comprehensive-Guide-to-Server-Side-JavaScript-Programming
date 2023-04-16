import mongoose, { Schema } from "mongoose";

const movieSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
});

const MovieModel = mongoose.model("movie", movieSchema);

export { MovieModel };
