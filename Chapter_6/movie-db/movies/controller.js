import bodyParser from "body-parser";
import { MovieModel } from "../Database/schema.js";
import { FormRender } from "./form.js";
import { render } from "./views.js";

const listAction = async (req, res, next) => {
  try {
    const data = await MovieModel.find();
    const body = render(data);
    res.send(body);
  } catch (error) {
    console.log(error.massage);
  }
};

const removeAction = async (req, res) => {
  try {
    const deletedMovie = await MovieModel.deleteOne({ id: req.params.id });
    if (!deletedMovie) {
      return res.status(404).send(`Movie with id ${req.params.id} not found`);
    }
    res.redirect(301, "/movies");
    // res.send(`Movie with id ${req.params.id} successfully deleted`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const formAction = async (req, res, next) => {
  try {
    const data = await MovieModel.findOne({ id: req.params.id });
    const body = FormRender(data);
    res.send(body);
  } catch (error) {
    console.log(error.massage);
  }
};

const saveAction = async (req, res) => {
  try {
    const { id } = req.body;
    const updatedMovie = req.body;
    const result = await MovieModel.updateOne({ id }, updatedMovie);
    if (result.nModified === 0) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.redirect(301, "/movies");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const CreateAction = async (req, res) => {
  let new_Id;
  const count = await MovieModel.countDocuments();
  if (count === 0) {
    new_Id = 0;
  } else {
    const movie = await MovieModel.findOne({}, {}, { sort: { id: -1 } });
    new_Id = movie.id;
  }
  const newMovie = new MovieModel({
    id: new_Id + 1,
    title: req.body.title,
    year: req.body.year,
  });

  try {
    const movie = await newMovie.save();
    res.redirect(301, "/movies");
  } catch (err) {
    console.log(err);
  }
};

export { listAction, removeAction, formAction, saveAction, CreateAction };
