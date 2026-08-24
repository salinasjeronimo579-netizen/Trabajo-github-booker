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

const bioPersonajes = [
    {
        id: 1,
        foto: "https://imgs.search.brave.com/vBJXhFcMlN2_-T-1OTLf_SZQ_3Lu9h7goLQ4yZKz9Go/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdHVk/eS5jb20vY2ltYWdl/cy9tdWx0aW1hZ2Vz/LzE2L3NpbW9uX2Jv/bGl2YXJfYnlfdG92/YXJfMjg3MjcxODQ2/OTY3MjkxMDk2Mi5q/cGc",
        foto2: "https://imgs.search.brave.com/DUE-sLnDC3gXoZmAj7y-SZdHigca-j5s0wXhe9R9Uj0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zdGF0/dWUtc2ltb24tYm9s/aXZhci10ZXJvci1n/cmFuLWNhbmFyaWEt/Y2FuYXJ5LWlzbGFu/ZHMtc3BhaW4tc3Rh/dHVlLXNpbW9uLWJv/bGl2YXItdGVyb3It/Z3Jhbi1jYW5hcmlh/LWNhbmFyeS0yMTQ2/OTAxNjMuanBn",
        nombre: "Simón Bolívar",
        epoca: "1783 – 1830",
        biografiaCorta: "El Libertador de América. Caraqueño de nacimiento, Bolívar lideró las campañas militares que liberaron a Colombia, Venezuela, Ecuador, Perú y Bolivia del dominio español. Soñó con una Gran Colombia unida, un sueño que no sobrevivió su propia muerte.",
        fraseCelebre: "\"Un pueblo ignorante es un instrumento ciego de su propia destrucción.\"",
        curiosidades: [
            "A los 22 años hizo el Juramento del Monte Sacro en Roma, prometiendo no descansar hasta liberar América del yugo español.",
            "Recorrió más de 30.000 km a caballo durante sus campañas militares, cruzando cordilleras, selvas y desiertos.",
            "Murió en Santa Marta en 1830, prácticamente en el exilio, traicionado por sus propios aliados y sin un centavo."
        ],
        relacionados: [2, 3]
    },
    {
        id: 2,
        foto: "https://imgs.search.brave.com/zG75u9NiNiDVlpqpTIMCzLT032KOeLCPw1Qc4vi56XQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3cy4xMjNyZi5j/b20vaW1hZ2VzL2Nh/bmR5bWFuL2NhbmR5/bWFuMTIwMy9jYW5k/eW1hbjEyMDMwMDAz/Mi8xMjgxMjkwMS1m/cmFuY2lzY28tZGUt/cGF1bGEtc2FudGFu/ZGVyLTE3OTItMTg0/MC1vbi01MDAtcGVz/b3Mtb3JvLTE5OTMt/YmFua25vdGUtZnJv/bS1jb2xvbWJpYS1j/b2xvbWJpYW4uYXZp/Zg",
        foto2: "https://imgs.search.brave.com/rcuEHJV2J7LcJ5b1B6wUlj8TF4NDw8HZllD8hTwtvrs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWN1cmVkLmN1L2lt/YWdlcy90aHVtYi8w/LzA2L0ZyYW5jaXNj/b19kZV9QYXVsYV9T/YW50YW5kZXIuanBn/LzI2MHB4LUZyYW5j/aXNjb19kZV9QYXVs/YV9TYW50YW5kZXIu/anBn",
        nombre: "Francisco de Paula Santander",
        epoca: "1792 – 1840",
        biografiaCorta: "El Hombre de las Leyes. Mientras Bolívar ganaba batallas, Santander construía el Estado. Fue el primer presidente de la Nueva Granada y el arquitecto de las instituciones republicanas colombianas, priorizando siempre el orden jurídico sobre la espada.",
        fraseCelebre: "\"Las armas os han dado la independencia, las leyes os darán la libertad.\"",
        curiosidades: [
            "Fue condenado a muerte por conspirar contra Bolívar en 1828, pero su sentencia fue conmutada y terminó exiliado en Europa.",
            "Durante su exilio recorrió Francia, Inglaterra y Estados Unidos, estudiando sus sistemas de gobierno para aplicarlos en Colombia.",
            "Fundó el sistema de educación pública en Colombia, decretando que en cada convento suprimido se instalara una escuela."
        ],
        relacionados: [1, 3]
    },
    {
        id: 3,
        foto: "https://imgs.search.brave.com/PTDrqGBhAasNgQjgBCPVa995cbJFVWclUALra_Y-5bc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGlmZWRlci5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MTEvSm9yZ2UtRWxp/ZWNlci1HYWl0YW4u/anBn",
        foto2: "https://imgs.search.brave.com/2zOHz4t1O_lF7Jpt2eGO03w-e9XsX7-rIR9U4RrOlUk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wZW9w/bGVzZGlzcGF0Y2gu/b3JnL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA0L0pvcmdl/LUVsaWVjZXItR2Fp/dGFuLmpwZw",
        nombre: "Jorge Eliécer Gaitán",
        epoca: "1898 – 1948",
        biografiaCorta: "El caudillo del pueblo. Abogado y político bogotano que logró lo que nadie antes: movilizar a las masas populares contra la oligarquía bipartidista. Su asesinato el 9 de abril de 1948 desató el Bogotazo y hundió a Colombia en décadas de violencia.",
        fraseCelebre: "\"Yo no soy un hombre, soy un pueblo.\"",
        curiosidades: [
            "Estudió criminología en Roma bajo Enrico Ferri y se graduó con honores, aplicando luego ese conocimiento en resonantes defensas penales en Colombia.",
            "Como alcalde de Bogotá prohibió el consumo de alcohol en horas laborales y modernizó el tranvía, ganándose tanto admiradores como enemigos.",
            "El autor material de su asesinato, Juan Roa Sierra, fue linchado por la multitud minutos después. Los autores intelectuales nunca fueron identificados oficialmente."
        ],
        relacionados: [1, 6]
    },
    {
        id: 4,
        foto: "https://imgs.search.brave.com/1GP2xWOA216tB1dWi-fTyaFgw-ofbKCQ5TMn1CT_yM4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L21lZGlhLzFiZDM4/N2FlNTMyNzRlYzFk/MDJjMGU5ODRkZjc5/MGY2OWFmMTcyNzgv/MF85Ml8zNjU0XzIx/OTMvbWFzdGVyLzM2/NTQuanBnP3dpZHRo/PTQ2NSZkcHI9MSZz/PW5vbmUmY3JvcD01/OjQ",
        foto2: "https://imgs.search.brave.com/AttzKE1JP_gR0gjbiiNm78K743iN6aGQK5NhhWl0D6Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEyOTc4/MTk4LmpwZw",
        nombre: "Gabriel García Márquez",
        epoca: "1927 – 2014",
        biografiaCorta: "El mayor narrador que ha dado América Latina. Nacido en Aracataca, Bolívar, García Márquez inventó Macondo y con él redefinió lo que la literatura podía hacer. Cien años de soledad lo puso en el mundo; el Nobel de 1982 lo consagró para la historia.",
        fraseCelebre: "\"El secreto de una buena vejez no es otra cosa que un pacto honrado con la soledad.\"",
        curiosidades: [
            "Escribió Cien años de soledad en 18 meses en México, mientras su familia vivía al debe. Al terminar, no tenía ni para enviar el manuscrito: su esposa empeñó la lavadora y la licuadora.",
            "Trabajó durante años como periodista, cubriendo noticias judiciales en Barranquilla, habilidad que le dio el realismo documental que impregna toda su ficción.",
            "Tuvo una amistad legendaria con Fidel Castro que duró décadas y le valió críticas de intelectuales de izquierda y derecha por igual."
        ],
        relacionados: [3, 9]
    },
    {
        id: 5,
        foto: "https://imgs.search.brave.com/6HG0P5EwWXftmiIXH1Fr7INM_O41Ue3288BWHHvZVug/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE2/MDkzMzg1NS9waG90/by9nbGVuZGFsZS1h/cml6b25hLWphbWVz/LXJvZHJpZ3Vlei1v/Zi1jb2xvbWJpYS1z/aW5nLXRoZS1uYXRp/b25hbC1hbnRoZW0t/cHJpb3ItdG8tdGhl/LWNvbm1lYm9sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1N/UmdUSm5TTEdCZTVC/WjZEdUJDczBSbkN1/bWdsYUEtTkFfY2Ns/VTBXVFd3PQ",
        foto2: "https://imgs.search.brave.com/aYTsy3gYCBR4aFdbxVqu7UGCUWEhO0SkI-meWx4WweY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb2JhZS5jb20v/cmVzaXplci92Mi9I/QlIyU1BNUUNWRkpS/Rk9TTkxDSDVBVFRV/VS5qcGc_YXV0aD0w/NTRhYzU2MDY4MTU3/MWQyNGMxNTk4YWZm/NmE4Yjc1NWM2ODA5/OTNkYTAzN2Q4M2Y4/ZmNiYjVkMTIwZWNk/ZWI4JnNtYXJ0PXRy/dWUmd2lkdGg9MzUw/JmhlaWdodD0yMTcm/cXVhbGl0eT04NQ",
        nombre: "James Rodríguez",
        epoca: "1991 – presente",
        biografiaCorta: "El 10 eterno. Nacido en Cúcuta, James enamoró al mundo entero en el Mundial de Brasil 2014 con su gol de volea ante Uruguay, elegido el mejor del torneo. Jugó en Real Madrid, Bayern Múnich y Everton. Muchos dicen que Colombia nunca le mereció.",
        fraseCelebre: "\"Siempre voy a dar lo mejor de mí por mi país, pase lo que pase.\"",
        curiosidades: [
            "Su gol de volea ante Uruguay en Brasil 2014 fue elegido el mejor gol del Mundial y uno de los mejores en la historia de los mundiales de fútbol.",
            "Fue el máximo goleador de Brasil 2014 con 6 goles en 5 partidos, superando a figuras como Messi, Neymar y Müller en esa estadística.",
            "Llegó a costar más de 80 millones de euros cuando el Real Madrid lo fichó, convirtiéndolo en el colombiano más caro de la historia del fútbol."
        ],
        relacionados: [7, 6]
    },
    {
        id: 6,
        foto: "https://imgs.search.brave.com/xG0-CWGTgV-jqwCVCjnZUDS4b-3kxw8pFO6maNLGFwM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy5h/bWF6b25hd3MuY29t/L3J0dmMtYXNzZXRz/LXNlbmFsbWVtb3Jp/YS5nb3YuY28vczNm/cy1wdWJsaWMvMjAy/Mi0wNy8lQzMlODFs/dmFybyUyMFVyaWJl/JTIwViVDMyVBOWxl/eiUyMDIwMDItMjAx/MCUyMEF1dG9yJTIw/JTIwQ2VjaWxpYSUy/MEZhamFyZG8lMjB3/ZWIucG5n",
        foto2: "https://i.pinimg.com/736x/83/90/6e/83906e0010345e0352625253cb5cfa82.jpg",
        nombre: "Álvaro Uribe Vélez",
        epoca: "1952 – presente",
        biografiaCorta: "Presidente de Colombia entre 2002 y 2010. La figura política más polarizante de la historia moderna del país. Sus seguidores lo veneran por la política de Seguridad Democrática que redujo drásticamente los índices de violencia. Sus críticos lo señalan por los falsos positivos y el paramilitarismo.",
        fraseCelebre: "\"Con mano firme y corazón grande.\"",
        curiosidades: [
            "Impulsó la reelección presidencial inmediata en Colombia, algo que no existía en la constitución del 91, y ganó su segundo mandato con más del 62% de los votos.",
            "Su política de Seguridad Democrática redujo los homicidios en Colombia en un 44% y los secuestros en un 90% durante sus dos periodos de gobierno.",
            "Es el político colombiano con mayor presencia en redes sociales: usa Twitter con una intensidad que ha generado polémicas diplomáticas con Venezuela, Ecuador y hasta el propio gobierno de Petro."
        ],
        relacionados: [8, 3]
    },
    {
        id: 7,
        foto: "https://i.pinimg.com/1200x/9a/59/94/9a59949a780d8f8a36a59397533e225d.jpg",
        foto2: "https://imgs.search.brave.com/cgV4k3kO-QKRhRh9jRB_MGlkLEIDmDcMxwwDpdPn5_0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZW5lcy5lbHRpZW1w/by5jb20vZmlsZXMv/aW1hZ2VfNjAwXzQ1/NS91cGxvYWRzLzIw/MTcvMDkvMjYvNTlj/YTY4ZTg0MmFlNy5q/cGVn",
        nombre: "Falcao García",
        epoca: "1986 – presente",
        biografiaCorta: "El Tigre. El mejor nueve que ha dado Colombia y uno de los delanteros más letales en la historia del fútbol mundial. Goleador histórico del Atlético de Madrid y del Mónaco. Se rompió los ligamentos de la rodilla en enero de 2014 y se perdió el Mundial que habría sido el suyo.",
        fraseCelebre: "\"El fútbol es mi vida, pero la fe es lo primero.\"",
        curiosidades: [
            "Marcó 12 goles en una sola edición de la Europa League con el Atlético de Madrid en la temporada 2011-2012, un récord que sigue imbatido.",
            "Su lesión de rodilla en enero de 2014, a cinco meses del Mundial de Brasil, es considerada una de las mayores tragedias deportivas de la historia colombiana.",
            "Es profundamente devoto católico: celebra todos sus goles mirando al cielo y ha dado múltiples entrevistas atribuyendo su carrera a su fe."
        ],
        relacionados: [5, 8]
    },
    {
        id: 8,
        foto: "imagenes/petrosky.jpeg",
        foto2: "https://imgs.search.brave.com/9O6RtOo3cdcuaf_mW1SKU2R5NSvAv5JQ5DxEwVUBvR4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2xhcmluLmNvbS9p/bWcvMjAyNS8xMS8w/NS8taWY4TjJrWGJf/NjAweDI5MF9fMS5q/cGc",
        nombre: "Gustavo Petro",
        epoca: "1960 – presente",
        biografiaCorta: "El primer presidente de izquierda en la historia de Colombia, elegido en 2022. Ex militante del M-19, economista, alcalde de Bogotá y eterno candidato presidencial. Tan polémico y divisivo como Uribe, pero desde el otro extremo del espectro político.",
        fraseCelebre: "\"No venimos a gobernar para los ricos, venimos a gobernar para el pueblo.\"",
        curiosidades: [
            "Fue militante del grupo guerrillero M-19 en su juventud, aunque siempre afirmó que su rol fue político y nunca portó armas. Estuvo preso y fue torturado.",
            "Como alcalde de Bogotá implementó un polémico cambio en el sistema de recolección de basuras que terminó en caos y le costó una destitución temporal por la Procuraduría.",
            "Es el primer presidente colombiano en llegar al poder con una fórmula vicepresidencial afrodescendiente: Francia Márquez, líder ambiental del Cauca."
        ],
        relacionados: [6, 9]
    },
    {
        id: 9,
        foto: "https://i.pinimg.com/736x/4e/98/71/4e987137bcb66449248888a1131171aa.jpg",
        foto2: "https://imgs.search.brave.com/BI1_d6bsFpRCCmh_JoX8AFpBQwzkivditpYszG3TBQ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLnlp/bWcuY29tL255L2Fw/aS9yZXMvMS4yL09Y/N20yZDRMNWQwTUpI/WDI5RlNZX3ctLS9Z/WEJ3YVdROWFHbG5h/R3hoYm1SbGNqdDNQ/VEU1T2pVM056c3lP/VGN3T0dZOWQyVmlj/QS0tL2h0dHBzOi8v/bWVkaWEuemVuZnMu/Y29tL2VzL2xhbmFj/aW9uLmNvbS5hci9l/YWZhZDRjNDZiY2E5/Zjc4ODgzZGU4Njc3/OTNlMjVkMA",
        nombre: "Abelardo de la Espriella",
        epoca: "1964 – presente",
        biografiaCorta: "El penalista más famoso de Colombia. Cartagenero de nacimiento, se convirtió en figura nacional defendiendo casos que nadie más quería tocar. Presencia fija en medios de comunicación, orador implacable y opinador sin filtro. Algunos ya lo ven como futuro presidente.",
        fraseCelebre: "\"En Colombia se condena al pobre y se absuelve al poderoso. Yo vengo a cambiar eso.\"",
        curiosidades: [
            "Ha defendido a narcotraficantes, políticos y figuras del conflicto armado, argumentando siempre que el derecho a la defensa es universal e irrenunciable.",
            "Su estilo televisivo lo convirtió en uno de los invitados más buscados de los noticieros colombianos, donde suele ser más contundente que los propios periodistas.",
            "Es reconocido por su oratoria casi teatral en los estrados judiciales, combinando el rigor jurídico con una narrativa que convierte los alegatos en relatos."
        ],
        relacionados: [8, 6]
    }
]
// ELEMENTOS DEL DOM
let biografia = document.getElementById("biografia");
let frase = document.getElementById("frase");
let card1 = document.getElementById("card-1");
let card2 = document.getElementById("card-2");
let card3 = document.getElementById("card-3");
let fotoPortada = document.getElementById("foto1");
let fotoBio = document.getElementById("foto2");

function findBio(personajes) {
    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get("id");

    for(const bioPersonaje of bioPersonajes){
        if (id == bioPersonaje.id){
            let hero = document.createElement("section")
            
        }
    }
}

// IMPRIMIR INFORMACION EN EL HTML

function renderBio(personajes) {
    

}