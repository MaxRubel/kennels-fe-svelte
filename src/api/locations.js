const endpoint = "http://localhost:8080";

const getAllLocations = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/locations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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

export default getAllLocations;
