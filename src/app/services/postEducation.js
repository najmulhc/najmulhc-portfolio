 

const postEducation = async (body) => {
  const response = await fetch(
      `http://localhost:3000/api/education`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();
    console.log(data);
  
};

export default postEducation;
