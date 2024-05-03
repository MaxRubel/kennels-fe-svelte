const endpoint = 'http://localhost:8080';
console.log(endpoint)

const getAllAnimals = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/animals`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createNewAnimal = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/animals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => resolve(response))
      .catch(reject);
  });

export {getAllAnimals, createNewAnimal}