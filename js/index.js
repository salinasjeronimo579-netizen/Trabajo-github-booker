const personajes = [
    { id: 1, foto: "https://imgs.search.brave.com/vBJXhFcMlN2_-T-1OTLf_SZQ_3Lu9h7goLQ4yZKz9Go/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdHVk/eS5jb20vY2ltYWdl/cy9tdWx0aW1hZ2Vz/LzE2L3NpbW9uX2Jv/bGl2YXJfYnlfdG92/YXJfMjg3MjcxODQ2/OTY3MjkxMDk2Mi5q/cGc", foto2: "https://imgs.search.brave.com/DUE-sLnDC3gXoZmAj7y-SZdHigca-j5s0wXhe9R9Uj0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zdGF0/dWUtc2ltb24tYm9s/aXZhci10ZXJvci1n/cmFuLWNhbmFyaWEt/Y2FuYXJ5LWlzbGFu/ZHMtc3BhaW4tc3Rh/dHVlLXNpbW9uLWJv/bGl2YXItdGVyb3It/Z3Jhbi1jYW5hcmlh/LWNhbmFyeS0yMTQ2/OTAxNjMuanBn", nombre: "Simón Bolívar", epoca: "1783 – 1830", biografia: "Libertador de gran parte de Sudamérica y líder de la independencia. Su sueño de una América unida lo convirtió en una de las figuras más influenciuales de la historia del continente." },
    { id: 2, foto: "https://imgs.search.brave.com/zG75u9NiNiDVlpqpTIMCzLT032KOeLCPw1Qc4vi56XQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3cy4xMjNyZi5j/b20vaW1hZ2VzL2Nh/bmR5bWFuL2NhbmR5/bWFuMTIwMy9jYW5k/eW1hbjEyMDMwMDAz/Mi8xMjgxMjkwMS1m/cmFuY2lzY28tZGUt/cGF1bGEtc2FudGFu/ZGVyLTE3OTItMTg0/MC1vbi01MDAtcGVz/b3Mtb3JvLTE5OTMt/YmFua25vdGUtZnJv/bS1jb2xvbWJpYS1j/b2xvbWJpYW4uYXZp/Zg", foto2: "https://imgs.search.brave.com/rcuEHJV2J7LcJ5b1B6wUlj8TF4NDw8HZllD8hTwtvrs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWN1cmVkLmN1L2lt/YWdlcy90aHVtYi8w/LzA2L0ZyYW5jaXNj/b19kZV9QYXVsYV9T/YW50YW5kZXIuanBn/LzI2MHB4LUZyYW5j/aXNjb19kZV9QYXVs/YV9TYW50YW5kZXIu/anBn", nombre: "Francisco de Paula Santander", epoca: "1792 – 1840", biografia: "Militar, estadista y primer presidente de la Nueva Granada. Mientras Bolívar lideraba las guerras, Santander construía las bases legales e institucionales del nuevo Estado." },
    { id: 3, foto: "https://imgs.search.brave.com/PTDrqGBhAasNgQjgBCPVa995cbJFVWclUALra_Y-5bc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGlmZWRlci5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MTEvSm9yZ2UtRWxp/ZWNlci1HYWl0YW4u/anBn", foto2: "https://imgs.search.brave.com/2zOHz4t1O_lF7Jpt2eGO03w-e9XsX7-rIR9U4RrOlUk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wZW9w/bGVzZGlzcGF0Y2gu/b3JnL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA0L0pvcmdl/LUVsaWVjZXItR2Fp/dGFuLmpwZw", nombre: "Jorge Eliecer Gaitan", epoca: "1898 – 1948", biografia: "Líder político que dio voz a las clases populares colombianas. Su asesinato en 1948 desencadenó el Bogotazo y marcó un antes y un después en la historia nacional." }
];

// VARIABLES GLOBALES DECLARADAS CORRECTAMENTE
let indice = 0;

// FUNCIÓN PARA RENDERIZAR EL CARRUSEL
function renderCarrusel(id) {
    const informacion = document.querySelector(".informacion");
    const descripcionCarrusel = document.querySelector("#descripcionCarrusel");
    const nombreCarrusel = document.querySelector("#nombreCarrusel");
    
    const personaje = personajes.find(p => p.id == id);

    if (personaje && informacion) {
        informacion.style.backgroundImage = `url("${personaje.foto}")`;
        
        if (nombreCarrusel) nombreCarrusel.textContent = personaje.nombre;
        if (descripcionCarrusel) descripcionCarrusel.textContent = personaje.biografia;
    }
}

// FUNCIÓN PARA CONFIGURAR LOS BOTONES Y ANIMACIONES
function ActualizarCarrusel() {
    const btn_anterior = document.querySelector("#btn-anterior");
    const btn_siguiente = document.querySelector("#btn-siguiente");
    const informacion = document.querySelector(".informacion");
    const descripcionCarrusel = document.querySelector("#descripcionCarrusel");
    const nombreCarrusel = document.querySelector("#nombreCarrusel");

    // Carga inicial
    renderCarrusel(personajes[indice].id);

    function transicionCarrusel(nuevoIndice, direccion) {
        if (descripcionCarrusel) descripcionCarrusel.classList.add("texto-oculto");
        if (nombreCarrusel) nombreCarrusel.classList.add("texto-oculto");
        
        if (informacion) {
            if (direccion === "siguiente") {
                informacion.classList.add("desplazar-izq");
            } else {
                informacion.classList.add("desplazar-der");
            }
        }

        setTimeout(() => {
            indice = nuevoIndice;
            renderCarrusel(personajes[indice].id);

            if (descripcionCarrusel) descripcionCarrusel.classList.remove("texto-oculto");
            if (nombreCarrusel) nombreCarrusel.classList.remove("texto-oculto");
            if (informacion) informacion.classList.remove("desplazar-izq", "desplazar-der");
        }, 250); 
    }

    if (btn_siguiente) {
        btn_siguiente.addEventListener("click", () => {
            let proximoIndice = (indice === personajes.length - 1) ? 0 : indice + 1;
            transicionCarrusel(proximoIndice, "siguiente");
        });
    }

    if (btn_anterior) {
        btn_anterior.addEventListener("click", () => {
            let proximoIndice = (indice === 0) ? personajes.length - 1 : indice - 1;
            transicionCarrusel(proximoIndice, "anterior");
        });
    }
}

// FUNCIÓN PARA GENERAR LA GALERÍA INFERIOR
function addCart(listaPersonajes) {
    const galeria = document.querySelector(".galeria");
    if (!galeria) return;

    galeria.innerHTML = "<h2>Personajes Destacados en la Historia de Colombia.</h2>";

    listaPersonajes.forEach(personaje => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("id", `${personaje.id}`);
        card.innerHTML = `
            <img src="${personaje.foto}" alt="${personaje.nombre}">
            <div class="info-card">
                <h3>${personaje.nombre}<br><br>${personaje.epoca}</h3>
                <p>${personaje.biografia}</p>
            </div>
        `;
        
        card.addEventListener("click", () => {
            window.location.href = `biografia.html?id=${personaje.id}`;
        });

        galeria.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    addCart(personajes);
    ActualizarCarrusel();
});