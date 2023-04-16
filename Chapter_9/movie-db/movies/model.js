// const data = [
//   { id: 1, title: "Iron Man", year: "2008" },
//   { id: 2, title: "The Dark Knight", year: "2008" },
//   { id: 3, title: "Avatar", year: "2009" },
//   { id: 4, title: "Inception", year: "2010" },
//   { id: 5, title: "The Social Network", year: "2010" },
//   { id: 6, title: "The Avengers", year: "2012" },
//   { id: 7, title: "Interstellar", year: "2014" },
//   { id: 8, title: "Inside Out", year: "2015" },
//   { id: 9, title: "La La Land", year: "2016" },
//   { id: 10, title: "Parasite", year: "2019" },
// ];
let data;
import { MovieModel } from "../Database/schema.js";

const listAction = async () => {
  try {
    data = await MovieModel.find();
  } catch (error) {
    console.log(error.massage);
  }
};
export function getAll() {
  return Promise.resolve(data);
}
