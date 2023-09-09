const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Project name is required."],
  },
  description: {
    type: String,
    required: [true, "Project description is required."],
  },
  date: {
    type: Number,
    required: [true, "Project date is required."],
  },
  repo: {
    type: String,
    required: [true, "Repository URL is required."],
    validate: {
      validator: (value) => {
        // You can use a regex pattern for validation
        const regex = /^https:\/\/github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/;
        return regex.test(value);
      },
      message: "Invalid GitHub repository URL.",
    },
  },
  liveSite: {
    type: String,
    required: [true, "Live site URL is required."],
  },
  logo: {
    type: String,
    required: [true, "Project logo URL is required."],
  },
  screenshot: {
    type: String,
    required: [true, "Add a screenshot!"],
  },
  techStack: {
    type: [String],
    required: [true, "Tech stack of the project is requierd"],
  },
  type: {
    type: String,
    enum: ["Full Stack", "Frontend", "Backend", "CLI app"],
    required: [true, "Project type is required."],
  },
});
 
const Project = mongoose.models.project || mongoose.model("project", projectSchema);

module.exports = Project