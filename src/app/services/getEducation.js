import dbconnect from "../../config/dbconnect";
import Education from "../../models/educationModel";

const getEducation = async () => {
  await dbconnect();
  const education = await Education.find();
  console.log(education);
  return education;
};

export default getEducation;
