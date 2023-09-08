export default function postImage(image) {
  const apiKey = "fa360e8f45d05bbe2bd58293a1c6d6af";
  const apiUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${apiKey}`;
 console.log(image)
  fetch(apiUrl, {
    method: "POST",
    body:  {
      image
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.log(error.message);
    });
}
