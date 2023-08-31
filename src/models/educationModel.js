import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  institute: {
    type: String,
    required: [true, "Institute name is required."],

    minlength: [2, "Institute name must be at least 2 characters."],
    maxlength: [100, "Institute name cannot exceed 100 characters."],
  },
  logo: {
    type: String,
    required: [true, "Logo of the inistitute is required."],
  },
  course: {
    type: String,
    required: [true, "Course name is required."],

    minlength: [2, "Course name must be at least 2 characters."],
    maxlength: [100, "Course name cannot exceed 100 characters."],
  },
  start: {
    type: Number,
    required: [true, "Start date is required."],
    min: [0, "Start date must be a positive number."],
  },
  end: {
    type: Number,
    required: [true, "End date is required."],
    min: [0, "End date must be a positive number."],
    validate: {
      validator: function (value) {
        return value >= this.start;
      },
      message: "End date must be after the start date.",
    },
  },
  description: {
    type: String,
    required: [true, "Description is required."],
    minlength: [480, "Description must be at least 480 characters."],
    maxlength: [500, "Description cannot exceed 500 characters."],
  },
  logo: {
    type: String,
    required: [true, "Logo URL is required."],

    validate: {
      validator: function (value) {
        return /^https?:\/\/\S+$/.test(value);
      },
      message: "Invalid logo URL format.",
    },
  },
  certificate: {
    type: String,
    trim: true,
    validate: {
      validator: function (value) {
        return /^https?:\/\/\S+$/.test(value);
      },
      message: "Invalid certificate URL format.",
    },
  },
});

const Education =
  mongoose.models.education || mongoose.model("education", educationSchema);

export default Education;
