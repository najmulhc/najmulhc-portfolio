const getTechnologies = async () => {
  const response = await fetch(
    `https://https://${process.env.VERCEL_URL}/api/education/api/technologies`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data;
};

export default getTechnologies;
