const endpoint = 'https://swapi.dev/api/planets/';

function sendRequest(url, method = 'GET', body = null) {
    const init = {
        method: method
    }
    if (body) init.body = JSON.stringify(body);
    if (method === 'POST') init.headers = {'Content-Type': 'application/json; charset=UTF-8'};
    return fetch(url, init).then(response => response.json());
}

const planets = [];
fetch(endpoint)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });

