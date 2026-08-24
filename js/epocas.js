const personajes = [
    { id: 1, foto: "https://imgs.search.brave.com/vBJXhFcMlN2_-T-1OTLf_SZQ_3Lu9h7goLQ4yZKz9Go/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdHVk/eS5jb20vY2ltYWdl/cy9tdWx0aW1hZ2Vz/LzE2L3NpbW9uX2Jv/bGl2YXJfYnlfdG92/YXJfMjg3MjcxODQ2/OTY3MjkxMDk2Mi5q/cGc", nombre: "Simón Bolívar", epoca: "1783 – 1830", ocupacion: "Militar y líder independentista" },
    { id: 2, foto: "https://imgs.search.brave.com/zG75u9NiNiDVlpqpTIMCzLT032KOeLCPw1Qc4vi56XQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3cy4xMjNyZi5j/b20vaW1hZ2VzL2Nh/bmR5bWFuL2NhbmR5/bWFuMTIwMy9jYW5k/eW1hbjEyMDMwMDAz/Mi8xMjgxMjkwMS1m/cmFuY2lzY28tZGUt/cGF1bGEtc2FudGFu/ZGVyLTE3OTItMTg0/MC1vbi01MDAtcGVz/b3Mtb3JvLTE5OTMt/YmFua25vdGUtZnJv/bS1jb2xvbWJpYS1j/b2xvbWJpYW4uYXZp/Zg", nombre: "Francisco de Paula Santander", epoca: "1792 – 1840", ocupacion: "Político y primer presidente" },
    { id: 3, foto: "https://imgs.search.brave.com/PTDrqGBhAasNgQjgBCPVa995cbJFVWclUALra_Y-5bc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGlmZWRlci5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MTEvSm9yZ2UtRWxp/ZWNlci1HYWl0YW4u/anBn", nombre: "Jorge Eliécer Gaitán", epoca: "1898 – 1948", ocupacion: "Abogado y líder popular" },
    { id: 4, foto: "https://imgs.search.brave.com/1GP2xWOA216tB1dWi-fTyaFgw-ofbKCQ5TMn1CT_yM4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L21lZGlhLzFiZDM4/N2FlNTMyNzRlYzFk/MDJjMGU5ODRkZjc5/MGY2OWFmMTcyNzgv/MF85Ml8zNjU0XzIx/OTMvbWFzdGVyLzM2/NTQuanBnP3dpZHRo/PTQ2NSZkcHI9MSZz/PW5vbmUmY3JvcD01/OjQ", nombre: "Gabriel García Márquez", epoca: "1927 – 2014", ocupacion: "Escritor y Nobel de Literatura" },
    { id: 5, foto: "https://imgs.search.brave.com/6HG0P5EwWXftmiIXH1Fr7INM_O41Ue3288BWHHvZVug/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE2/MDkzMzg1NS9waG90/by9nbGVuZGFsZS1h/cml6b25hLWphbWVz/LXJvZHJpZ3Vlei1v/Zi1jb2xvbWJpYS1z/aW5nLXRoZS1uYXRp/b25hbC1hbnRoZW0t/cHJpb3ItdG8tdGhl/LWNvbm1lYm9sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1N/UmdUSm5TTEdCZTVC/WjZEdUJDczBSbkN1/bWdsYUEtTkFfY2Ns/VTBXVFd3PQ", nombre: "James Rodríguez", epoca: "1991 – presente", ocupacion: "Futbolista profesional" },
    { id: 6, foto: "https://imgs.search.brave.com/xG0-CWGTgV-jqwCVCjnZUDS4b-3kxw8pFO6maNLGFwM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy5h/bWF6b25hd3MuY29t/L3J0dmMtYXNzZXRz/LXNlbmFsbWVtb3Jp/YS5nb3YuY28vczNm/cy1wdWJsaWMvMjAy/Mi0wNy8lQzMlODFs/dmFybyUyMFVyaWJl/JTIwViVDMyVBOWxl/eiUyMDIwMDItMjAx/MCUyMEF1dG9yJTIw/JTIwQ2VjaWxpYSUy/MEZhamFyZG8lMjB3/ZWIucG5n", nombre: "Álvaro Uribe Vélez", epoca: "1952 – presente", ocupacion: "Expresidente de Colombia" },
    { id: 7, foto: "https://i.pinimg.com/1200x/9a/59/94/9a59949a780d8f8a36a59397533e225d.jpg", nombre: "Falcao García", epoca: "1986 – presente", ocupacion: "Futbolista profesional" },
    { id: 8, foto: "imagenes/petrosky.jpeg", nombre: "Gustavo Petro", epoca: "1960 – presente", ocupacion: "Presidente de Colombia" },
    { id: 9, foto: "https://i.pinimg.com/736x/4e/98/71/4e987137bcb66449248888a1131171aa.jpg", nombre: "Abelardo de la Espriella", epoca: "1964 – presente", ocupacion: "Abogado penalista" },
]

const epocas = [
    {
        id: 1,
        nombre: "Independencia y República",
        rango: "1780 – 1850",
        colorAccento: "#C9A84C",
        colorFondo: "rgba(201, 168, 76, 0.08)",
        icono: "⚔️",
        contexto: "El período en que Colombia nació como nación independiente. Entre batallas épicas, constituciones frágiles y sueños de una gran patria unida, los próceres construyeron los cimientos de lo que hoy somos — con sangre, idealismo y no pocas traiciones.",
        eventoDestacado: "1819 — Batalla de Boyacá: Colombia se independiza del dominio español.",
        personajesIds: [1, 2]
    },
    {
        id: 2,
        nombre: "Convulsión y Caudillismo",
        rango: "1880 – 1950",
        colorAccento: "#8B2635",
        colorFondo: "rgba(139, 38, 53, 0.08)",
        icono: "🔥",
        contexto: "Un siglo sacudido por guerras civiles, la masacre bananera y el surgimiento de los grandes líderes populares. Colombia se debatía entre la oligarquía bipartidista y las voces que clamaban por un país más justo. El 9 de abril de 1948 lo cambió todo.",
        eventoDestacado: "1948 — El Bogotazo: el asesinato de Gaitán desata décadas de violencia.",
        personajesIds: [3]
    },
    {
        id: 3,
        nombre: "Cultura, Letras y Conflicto",
        rango: "1920 – 2000",
        colorAccento: "#4A7C59",
        colorFondo: "rgba(74, 124, 89, 0.08)",
        icono: "📖",
        contexto: "Mientras Colombia ardía en violencia interna, su cultura florecía con una fuerza insólita. García Márquez puso a Macondo en el mundo. El narcotráfico y la guerrilla reescribían el mapa del poder. Un país capaz de producir lo más sublime y lo más terrible al mismo tiempo.",
        eventoDestacado: "1982 — Gabriel García Márquez recibe el Premio Nobel de Literatura.",
        personajesIds: [4]
    },
    {
        id: 4,
        nombre: "Colombia Contemporánea",
        rango: "1952 – hoy",
        colorAccento: "#2E5D8E",
        colorFondo: "rgba(46, 93, 142, 0.08)",
        icono: "🇨🇴",
        contexto: "La Colombia de hoy: polarizada, vibrante, futbolera y en búsqueda de su identidad. Entre la seguridad democrática y el cambio de siglo, entre el Tigre y el 10, entre Uribe y Petro — un país que sigue debatiendo qué quiere ser cuando sea grande.",
        eventoDestacado: "2014 — James Rodríguez, gol del Mundial. Colombia vive su mejor Copa del Mundo.",
        personajesIds: [5, 6, 7, 8, 9]
    }
]

function renderTimeline() {
    const timeline = document.getElementById("timeline")
    timeline.innerHTML = ""

    epocas.forEach((epoca, index) => {
        const personajesDeEpoca = personajes.filter(p => epoca.personajesIds.includes(p.id))
        const lado = index % 2 === 0 ? "izquierda" : "derecha"

        const personajesHTML = personajesDeEpoca.map(p => `
            <div class="personaje-card" onclick="window.location.href='biografia.html?id=${p.id}'">
                <div class="personaje-foto">
                    <img src="${p.foto}" alt="${p.nombre}">
                </div>
                <div class="personaje-info">
                    <p class="personaje-nombre">${p.nombre}</p>
                    <p class="personaje-epoca">${p.epoca}</p>
                    <p class="personaje-ocupacion">${p.ocupacion}</p>
                </div>
            </div>
        `).join("")

        timeline.innerHTML += `
            <div class="epoca-bloque lado-${lado}" style="--color-acento: ${epoca.colorAccento}; --color-fondo: ${epoca.colorFondo};">
                
                <!-- NODO DE LA LÍNEA -->
                <div class="nodo-timeline">
                    <span class="nodo-icono">${epoca.icono}</span>
                </div>

                <!-- CONTENIDO -->
                <div class="epoca-contenido">
                    <div class="epoca-header">
                        <span class="epoca-rango">${epoca.rango}</span>
                        <h3 class="epoca-nombre">${epoca.nombre}</h3>
                    </div>
                    <p class="epoca-contexto">${epoca.contexto}</p>
                    <div class="evento-destacado">
                        <span class="evento-icono">📌</span>
                        <span>${epoca.eventoDestacado}</span>
                    </div>
                    <div class="personajes-grid">
                        ${personajesHTML}
                    </div>
                </div>

            </div>
        `
    })
}

renderTimeline()