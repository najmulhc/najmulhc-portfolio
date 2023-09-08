const getEducation = async () => {
  const response = await fetch(`http:///0/api/education`, {
    cache: "no-store",
  });
  const data = await response.json();
  if (data.educations) {
    return data.educations;
  }
};

export default getEducation;
