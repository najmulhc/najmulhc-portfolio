import dbconnect from "../../config/dbconnect";
import Tech from "../../models/techmodel";

const postTechnology = async (body) => {
  const response = await fetch(`http://localhost:3000/api/technologies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return data;
};

export default postTechnology;
