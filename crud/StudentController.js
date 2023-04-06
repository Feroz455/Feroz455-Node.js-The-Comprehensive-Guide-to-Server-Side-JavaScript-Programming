import { StudentModel } from "./student.js";

class StudentController {
  static createDoc = async (req, res) => {
    try {
      const { name, age, fees, hobbies, isActive, comments } = req.body;
      const student = new StudentModel({
        name,
        age,
        fees,
        hobbies,
        isActive,
        comments,
      });
      const result = await student.save();
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  static getAllDoc = async (req, res) => {
    try {
      const result = await StudentModel.find();
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  };

  static getSingleDocById = async (req, res) => {
    try {
      const result = await StudentModel.findById(req.params.id);
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  };
  static UpdateDocById = async (req, res) => {
    try {
      const { name, age, fees, hobbies, isActive, comments } = req.body;

      // create an object with the updated fields and their new values
      const updateFields = {};
      if (name) updateFields.name = name;
      if (age) updateFields.age = age;
      if (fees) updateFields.fees = fees;
      if (hobbies) updateFields.hobbies = hobbies;
      if (typeof isActive === "boolean") updateFields.isActive = isActive;
      if (comments) {
        updateFields.comments = comments.map((comment) => ({
          value: comment.value,
          publish: comment.publish || new Date(),
        }));
      }

      // update the document with the validated fields
      const updatedStudent = await StudentModel.findByIdAndUpdate(
        req.params.id,
        updateFields,
        { new: true }
      );

      res.json(updatedStudent);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static deleteDocById = async (req, res) => {
    try {
      const deletedStudent = await StudentModel.findByIdAndDelete(
        req.params.id
      );

      if (!deletedStudent) {
        return res
          .status(404)
          .json({ message: `Student with ID ${req.params.id} not found` });
      }

      res.json({ message: `Deleted student with ID ${deletedStudent._id}` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

export { StudentController };
