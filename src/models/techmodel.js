const mongoose = require("mongoose");

const techSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for this technology."],
  },
  lightLogo: {
    type: String,
    required: [
      true,
      "A light logo URL is as essential as a cup of coffee in the morning.",
    ],
  },
  darkLogo: {
    type: String,
    required: [
      true,
      "A dark logo URL is required, just like a villain in every story.",
    ],
  },
  type: {
    type: String,
    required: [true, "Don't leave us in suspense! What type is this?"],
    enum: {
      values: [
        "Frontend Library",
        "Backend Library",
        "Web Language",
        "Programming Language",
        "CSS Framework",
        "Full Stack Framework",
        "Developer Tool",
        "Design Tool",
      ],
      message: "That's not a valid type! Choose wisely.",
    },
  },
  description: {
    type: String,
    required: [
      true,
      "Description is missing! How would we know what this tech does?",
    ],
  },
  timeOfLearning: {
    type: Number,
    required: [
      true,
      "Learning time is required. We need to set the clock right.",
    ],
    validate: {
      validator: Number.isInteger,
      message: "Time of learning should be a valid Unix timestamp (integer).",
    },
  },
  isFeatured: {
    type: Boolean, 
    default: false
  }
});

const Tech = mongoose.models.tech || mongoose.model("tech", techSchema);

module.exports = Tech;
