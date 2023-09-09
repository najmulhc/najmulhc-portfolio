import dbconnect from "../../config/dbconnect";
import Tech from '../../models/techmodel'

const getTechnologies = async () => {
   await dbconnect();
   const technologies = await Tech.find();
   console.log(technologies)
   return technologies
};

export default getTechnologies;
