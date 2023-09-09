const getEducation = async () => {
  const response = await fetch(
    `https://${
      process.env.VERCEL_URL
        ? process.env.VERCEL_URL
        : process.env.VERCEL_BRANCH_URL
    }/api/education`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  if (data.educations) {
    return data.educations;
  }
};

export default getEducation;
