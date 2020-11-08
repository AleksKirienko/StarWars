const endpoint = 'https://swapi.dev/api/planets/';

function sendRequest(url, method = 'GET', body = null) {
    const init = {
        method: method
    }
    if (body) init.body = JSON.stringify(body);
    if (method === 'POST') init.headers = {'Content-Type': 'application/json; charset=UTF-8'};
    return fetch(url, init).then(response => response.json());
}

const test = document.getElementById('planets');
let res;

fetch(endpoint)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        res = data.results;

        const html = res.map(planet => {
            return `
        <li>
            <span><h5 align="center">${planet.name}</h5></span>
            <span><b>climate:</b> ${planet.climate}</span><br>
            <span><b>created:</b> ${planet.created}</span><br>
            <span><b>diameter:</b> ${planet.diameter}</span><br>
            <span><b>edited:</b> ${planet.edited}</span><br>
            <span><b>gravity:</b> ${planet.gravity}</span><br>
            <span><b>orbital period:</b> ${planet.orbital_period}</span><br>
            <span><b>population:</b> ${planet.population}</span><br>
            <span><b>rotation period:</b> ${planet.rotation_period}</span><br>
            <span><b>surface_water:</b> ${planet.surface_water}</span><br>
            <span><b>terrain:</b> ${planet.terrain}</span><br>
<!--            <p><button id="residents" onclick="alert(\`resident: ${planet.name}\`)">People</button></p>-->
            <p><button id="residents" onclick="peopleGenerate('${planet.name}')">People</button></p>
        </li>   
         `
        }).join('')

        test.innerHTML = html;
    });

function peopleGenerate(planet) {
    console.log(res);
    alert(`${planet}`);
}
