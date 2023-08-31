import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Project =
  mongoose.models.project || mongoose.model("project", projectSchema);

export default Project;
