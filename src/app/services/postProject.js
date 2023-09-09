const postProject = async (body) => {
  try {
    const response = await fetch(
      `http://https://${process.env.VERCEL_URL}/api/education/api/projects`,
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
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export default postProject;
