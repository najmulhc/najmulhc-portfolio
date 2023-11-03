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
  caseStudy: {
    type: String,
    required: [true, "explain the case!"],
  },
  problemsFaced: {
    type: [String],
    default: [],
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
  banner: {
    type: String,
    required: true,
  },
});

const Project =
  mongoose.models?.project || mongoose.model("project", projectSchema);

module.exports = Project;
