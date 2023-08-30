const getData = async () =>  {
     const response = await fetch("http://localhost:3000/api/technologies", {cache:"no-cache"});
     const data = await response.json();
     console.log(data);
     return data;
}

export default getData;