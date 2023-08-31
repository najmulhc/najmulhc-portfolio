const postTechnology = async (body) => {
  try {
    const response = await fetch("http://localhost:3000/api/technologies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export default postTechnology;