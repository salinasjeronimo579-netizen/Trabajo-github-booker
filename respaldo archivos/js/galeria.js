const personajes = [
    { id: 1, foto: "https://imgs.search.brave.com/vBJXhFcMlN2_-T-1OTLf_SZQ_3Lu9h7goLQ4yZKz9Go/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdHVk/eS5jb20vY2ltYWdl/cy9tdWx0aW1hZ2Vz/LzE2L3NpbW9uX2Jv/bGl2YXJfYnlfdG92/YXJfMjg3MjcxODQ2/OTY3MjkxMDk2Mi5q/cGc", foto2: "https://imgs.search.brave.com/DUE-sLnDC3gXoZmAj7y-SZdHigca-j5s0wXhe9R9Uj0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zdGF0/dWUtc2ltb24tYm9s/aXZhci10ZXJvci1n/cmFuLWNhbmFyaWEt/Y2FuYXJ5LWlzbGFu/ZHMtc3BhaW4tc3Rh/dHVlLXNpbW9uLWJv/bGl2YXItdGVyb3It/Z3Jhbi1jYW5hcmlh/LWNhbmFyeS0yMTQ2/OTAxNjMuanBn", nombre: "Simón Bolívar", epoca: "1783 – 1830", biografia: "El Libertador. Caraqueño de nacimiento, liberó a Colombia, Venezuela, Ecuador, Perú y Bolivia del dominio español. Soñó con una Gran Colombia unida que no sobrevivió su muerte." },

    { id: 2, foto: "https://imgs.search.brave.com/zG75u9NiNiDVlpqpTIMCzLT032KOeLCPw1Qc4vi56XQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3cy4xMjNyZi5j/b20vaW1hZ2VzL2Nh/bmR5bWFuL2NhbmR5/bWFuMTIwMy9jYW5k/eW1hbjEyMDMwMDAz/Mi8xMjgxMjkwMS1m/cmFuY2lzY28tZGUt/cGF1bGEtc2FudGFu/ZGVyLTE3OTItMTg0/MC1vbi01MDAtcGVz/b3Mtb3JvLTE5OTMt/YmFua25vdGUtZnJv/bS1jb2xvbWJpYS1j/b2xvbWJpYW4uYXZp/Zg", foto2: "https://imgs.search.brave.com/rcuEHJV2J7LcJ5b1B6wUlj8TF4NDw8HZllD8hTwtvrs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWN1cmVkLmN1L2lt/YWdlcy90aHVtYi8w/LzA2L0ZyYW5jaXNj/b19kZV9QYXVsYV9T/YW50YW5kZXIuanBn/LzI2MHB4LUZyYW5j/aXNjb19kZV9QYXVs/YV9TYW50YW5kZXIu/anBn", nombre: "Francisco de Paula Santander", epoca: "1792 – 1840", biografia: "El Hombre de las Leyes. Primer presidente de la Nueva Granada, construyó el Estado colombiano con orden jurídico e instituciones republicanas mientras Bolívar ganaba batallas." },

    { id: 3, foto: "https://imgs.search.brave.com/PTDrqGBhAasNgQjgBCPVa995cbJFVWclUALra_Y-5bc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGlmZWRlci5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MTEvSm9yZ2UtRWxp/ZWNlci1HYWl0YW4u/anBn", foto2: "https://imgs.search.brave.com/2zOHz4t1O_lF7Jpt2eGO03w-e9XsX7-rIR9U4RrOlUk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wZW9w/bGVzZGlzcGF0Y2gu/b3JnL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA0L0pvcmdl/LUVsaWVjZXItR2Fp/dGFuLmpwZw",nombre: "Jorge Eliecer Gaitan", epoca: "1898 – 1948", biografia: "El caudillo del pueblo. Líder político bogotano que movilizó a las masas contra la oligarquía. Su asesinato el 9 de abril de 1948 desató el Bogotazo y décadas de violencia bipartidista." },
    
    { id: 4, foto: "https://imgs.search.brave.com/1GP2xWOA216tB1dWi-fTyaFgw-ofbKCQ5TMn1CT_yM4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L21lZGlhLzFiZDM4/N2FlNTMyNzRlYzFk/MDJjMGU5ODRkZjc5/MGY2OWFmMTcyNzgv/MF85Ml8zNjU0XzIx/OTMvbWFzdGVyLzM2/NTQuanBnP3dpZHRo/PTQ2NSZkcHI9MSZz/PW5vbmUmY3JvcD01/OjQ", foto2: "https://imgs.search.brave.com/AttzKE1JP_gR0gjbiiNm78K743iN6aGQK5NhhWl0D6Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEyOTc4/MTk4LmpwZw", nombre: "Gabriel Garcia Marquez", epoca: "1927 – 2014", biografia: "El mayor escritor latinoamericano del siglo XX. Nacido en Aracataca, Bolívar. Con Cien años de soledad puso a Macondo en el mundo. Premio Nobel de Literatura en 1982." },
    
    { id: 5, foto: "https://imgs.search.brave.com/6HG0P5EwWXftmiIXH1Fr7INM_O41Ue3288BWHHvZVug/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE2/MDkzMzg1NS9waG90/by9nbGVuZGFsZS1h/cml6b25hLWphbWVz/LXJvZHJpZ3Vlei1v/Zi1jb2xvbWJpYS1z/aW5nLXRoZS1uYXRp/b25hbC1hbnRoZW0t/cHJpb3ItdG8tdGhl/LWNvbm1lYm9sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1N/UmdUSm5TTEdCZTVC/WjZEdUJDczBSbkN1/bWdsYUEtTkFfY2Ns/VTBXVFd3PQ", foto2: "https://imgs.search.brave.com/aYTsy3gYCBR4aFdbxVqu7UGCUWEhO0SkI-meWx4WweY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb2JhZS5jb20v/cmVzaXplci92Mi9I/QlIyU1BNUUNWRkpS/Rk9TTkxDSDVBVFRV/VS5qcGc_YXV0aD0w/NTRhYzU2MDY4MTU3/MWQyNGMxNTk4YWZm/NmE4Yjc1NWM2ODA5/OTNkYTAzN2Q4M2Y4/ZmNiYjVkMTIwZWNk/ZWI4JnNtYXJ0PXRy/dWUmd2lkdGg9MzUw/JmhlaWdodD0yMTcm/cXVhbGl0eT04NQ", nombre: "James Rodríguez", epoca: "1991 – presente", biografia: "El 10 eterno. Nacido en Cúcuta, enamoró al mundo en el Mundial 2014 con su gol de volea ante Uruguay. Jugó en Real Madrid, Bayern y Everton. Colombia no le mereció." },
    
    { id: 6, foto: "https://imgs.search.brave.com/xG0-CWGTgV-jqwCVCjnZUDS4b-3kxw8pFO6maNLGFwM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy5h/bWF6b25hd3MuY29t/L3J0dmMtYXNzZXRz/LXNlbmFsbWVtb3Jp/YS5nb3YuY28vczNm/cy1wdWJsaWMvMjAy/Mi0wNy8lQzMlODFs/dmFybyUyMFVyaWJl/JTIwViVDMyVBOWxl/eiUyMDIwMDItMjAx/MCUyMEF1dG9yJTIw/JTIwQ2VjaWxpYSUy/MEZhamFyZG8lMjB3/ZWIucG5n", foto2: "https://i.pinimg.com/736x/83/90/6e/83906e0010345e0352625253cb5cfa82.jpg",nombre: "Álvaro Uribe Vélez", epoca: "1952 – presente", biografia: "Presidente 2002–2010. La figura política más polarizante de la historia moderna colombiana. Sus seguidores lo adoran por la seguridad democrática. Sus críticos no lo quieren tanto." },
    
    { id: 7, foto: "https://i.pinimg.com/1200x/9a/59/94/9a59949a780d8f8a36a59397533e225d.jpg", foto2: "https://imgs.search.brave.com/cgV4k3kO-QKRhRh9jRB_MGlkLEIDmDcMxwwDpdPn5_0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZW5lcy5lbHRpZW1w/by5jb20vZmlsZXMv/aW1hZ2VfNjAwXzQ1/NS91cGxvYWRzLzIw/MTcvMDkvMjYvNTlj/YTY4ZTg0MmFlNy5q/cGVn", nombre: "Falcao García", epoca: "1986 – presente", biografia: "El mejor 9 que ha dado Colombia y uno de los más letales de la historia. Goleador histórico de Atlético de Madrid y Mónaco. Se rompió la rodilla justo antes del Mundial del 14." },
    
    
    { id: 8, foto: "imagenes/petrosky.jpeg", foto2: "https://imgs.search.brave.com/9O6RtOo3cdcuaf_mW1SKU2R5NSvAv5JQ5DxEwVUBvR4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2xhcmluLmNvbS9p/bWcvMjAyNS8xMS8w/NS8taWY4TjJrWGJf/NjAweDI5MF9fMS5q/cGc", nombre: "Gustavo Petro", epoca: "1960 – presente", biografia: "Primer presidente de izquierda en la historia de Colombia, elegido en 2022. Ex guerrillero del M-19, alcalde de Bogotá, narcotraficante, soplete, eterno candidato. Tan polémico como Uribe pero del otro lado. (Lo tiene cogido el tigre)" },

    { id: 9, foto: "https://i.pinimg.com/736x/4e/98/71/4e987137bcb66449248888a1131171aa.jpg", foto2: "https://imgs.search.brave.com/BI1_d6bsFpRCCmh_JoX8AFpBQwzkivditpYszG3TBQ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLnlp/bWcuY29tL255L2Fw/aS9yZXMvMS4yL09Y/N20yZDRMNWQwTUpI/WDI5RlNZX3ctLS9Z/WEJ3YVdROWFHbG5h/R3hoYm1SbGNqdDNQ/VEV5TkRJN2FEMDJP/VGs3WTJZOWQyVmlj/QS0tL2h0dHBzOi8v/bWVkaWEuemVuZnMu/Y29tL2VzL2xhbmFj/aW9uLmNvbS5hci9l/YWZhZDRjNDZiY2E5/Zjc4ODgzZGU4Njc3/OTNlMjVkMA", nombre: "Abelardo de la Espriella", epoca: "1964 – presente", biografia: "Penalista cartagenero que se convirtió en figura nacional defendiendo casos que nadie más quería tocar. Presencia fija en medios, orador implacable y opinador sin filtro. En Colombia. (Futuro presidente de colombia) (tiene cogido a petro y cepeda)." },
    
    
]

// ELEMENTOS DEL DOM
let galeria = document.querySelector(".galeria")

// AGREGAR ELEMENTOS A LA GALERIA

function addCart(personajes) {
    for (const personaje of personajes) {
        let card = document.createElement("div")
        card.classList.add("card")
        card.setAttribute("id", `${personaje.id}`)
        card.innerHTML = `<img src= "${personaje.foto}" alt="">
                <div class="info-card">
                    <p><b>Nombre: </b>${personaje.nombre}</p>
                    <p><b>Epoca: </b>${personaje.epoca} </p>
                    <p><b>Biografia: </b>${personaje.biografia} </p>
                </div>`;

        galeria.appendChild(card)
    }
}

addCart(personajes);

//ENVIAR INFO A BIOGRAFIA
document.querySelectorAll(".card").forEach(card => { 
    card.addEventListener("click", function() {
        window.location.href = `biografia.html?id=${this.id}`;
    });
});
