const getTechnologies = async () => {
  const response = await fetch("http:///0/api/technologies", {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
};

export default getTechnologies;
