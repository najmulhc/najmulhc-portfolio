const getTechnologies = async () => {
  const response = await fetch("http://localhost:3000/api/technologies", {cache :"no-store"});
  const data = await response.json();
  return data 
}

export default getTechnologies;