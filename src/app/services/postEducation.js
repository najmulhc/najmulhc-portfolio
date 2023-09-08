const postEducation = async (body) => {
  try {
    const response = await fetch("http:///0/api/education", {
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

export default postEducation;
