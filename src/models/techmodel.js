import mongoose from 'mongoose'

const techSchema = mongoose.Schema({
  name: String,
});

const Tech = mongoose.models.tech || mongoose.model("tech", techSchema);

export default Tech;