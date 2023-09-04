const url = "https://jsonplaceholder.typicode.com/users";

document.addEventListener("DOMContentLoaded", () => {
    const botonEnviar = document.querySelector("button");
    botonEnviar.addEventListener("click", () => {
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let fecha = document.getElementById("fecha").value;

        let persona ={
            nombre: nombre,
            apellido: apellido,
            fecha: fecha
        }

        //Recuperado de: https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
        fetch(url, {
            method: "POST", 
            body: JSON.stringify(persona),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Correcto:", response));
        });
    });


