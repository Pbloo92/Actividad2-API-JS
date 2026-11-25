
const API_URL = "https://jsonplaceholder.typicode.com/posts";

// CASO 1: Fetch clásico con .then()
console.log("CASO 1: FETCH");

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log("JSON obtenido mediante Fetch:");
        console.log(data);
    })
    .catch(error => console.error("Error:", error));


// CASO 2: Fetch utilizando async / await
console.log("CASO 2: ASYNC / AWAIT");

async function obtenerDatosAsync() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        console.log("JSON obtenido mediante Async/Await:");
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

obtenerDatosAsync();


// CASO 3: Callback clásico con XMLHttpRequest
console.log("CASO 3: CALLBACK");

function obtenerDatosCallback(callback) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", API_URL);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            callback(data);
        } else {
            console.error("Error HTTP:", xhr.status);
        }
    };

    xhr.onerror = function () {
        console.error("Error en la petición");
    };

    xhr.send();
}

obtenerDatosCallback(function (data) {
    console.log("JSON obtenido mediante Callback:");
    console.log(data);
});
