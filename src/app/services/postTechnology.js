const postTechnology = async (body) => {
  try {
    const response = await fetch(
      `http://https://${process.env.VERCEL_URL ? process.env.VERCEL_URL : process.env.VERCEL_BRANCH_URL}/api/technologies`,
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

export default postTechnology;
