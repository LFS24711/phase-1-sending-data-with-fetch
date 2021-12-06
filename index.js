// Add your code here
/* const formData = {
  dogName: "Byron",
  dogBreed: "Poodle",
};

const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  })
  .catch(function (error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  }); */

function submitData(name, email) {

  const newUser = {
    "name": name,
    "email": email
  }
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newUser),
  };

  return fetch("http://localhost:3000/users", configurationObject)
  .then((response) => response.json())
  .then((object) => {
    const {id} = object;
    console.log(id);
    document.body.textContent = id;
  })
  .catch(function (error) {
    document.body.textContent = 'Unauthorized Access';
    console.log(error.message);
  });
  
}
  
