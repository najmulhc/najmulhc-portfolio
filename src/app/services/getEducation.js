const getEducation = async () => {
  const response = await fetch(`http://localhost:3000/api/education`, {
    cache: "no-store",
  });
  const data = await response.json();
  console.log(data);
  if (data.educations) {
    return data.educations;
  }
};

export default getEducation;
