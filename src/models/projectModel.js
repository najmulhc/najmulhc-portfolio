const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Project name is required."],
  },
  shortDescription: {
    type: String,
    required: [true, "Project description is required."],
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
    
  },
  liveSite: {
    type: String,
    required: [true, "Live site URL is required."],
  },
  logo: {
    type: String,
    required: [true, "Project logo URL is required."],
  },
  screenshots: {
    type: [String],
    required: [true, "Add a screenshot!"],
  },
  techStack: [
    {
      label: {
        type: String,
        required: true,
      },
      value: {
        type: String,
        required: true,
      },
    },
  ],
  type: {
    type: String,
    enum: ["Full Stack", "Frontend", "Backend", "CLI app"],
    required: [true, "Project type is required."],
  },
});
 
const Project = mongoose.models?.project || mongoose.model("project", projectSchema);

module.exports = Project;