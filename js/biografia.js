
const personajes = [
    { id: 1, foto: "https://imgs.search.brave.com/vBJXhFcMlN2_-T-1OTLf_SZQ_3Lu9h7goLQ4yZKz9Go/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdHVk/eS5jb20vY2ltYWdl/cy9tdWx0aW1hZ2Vz/LzE2L3NpbW9uX2Jv/bGl2YXJfYnlfdG92/YXJfMjg3MjcxODQ2/OTY3MjkxMDk2Mi5q/cGc", foto2: "https://imgs.search.brave.com/DUE-sLnDC3gXoZmAj7y-SZdHigca-j5s0wXhe9R9Uj0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zdGF0/dWUtc2ltb24tYm9s/aXZhci10ZXJvci1n/cmFuLWNhbmFyaWEt/Y2FuYXJ5LWlzbGFu/ZHMtc3BhaW4tc3Rh/dHVlLXNpbW9uLWJv/bGl2YXItdGVyb3It/Z3Jhbi1jYW5hcmlh/LWNhbmFyeS0yMTQ2/OTAxNjMuanBn", nombre: "Simón Bolívar", epoca: "1783 – 1830", biografia: "El Libertador. Caraqueño de nacimiento, liberó a Colombia, Venezuela, Ecuador, Perú y Bolivia del dominio español. Soñó con una Gran Colombia unida que no sobrevivió su muerte." },

    { id: 2, foto: "https://imgs.search.brave.com/zG75u9NiNiDVlpqpTIMCzLT032KOeLCPw1Qc4vi56XQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3cy4xMjNyZi5j/b20vaW1hZ2VzL2Nh/bmR5bWFuL2NhbmR5/bWFuMTIwMy9jYW5k/eW1hbjEyMDMwMDAz/Mi8xMjgxMjkwMS1m/cmFuY2lzY28tZGUt/cGF1bGEtc2FudGFu/ZGVyLTE3OTItMTg0/MC1vbi01MDAtcGVz/b3Mtb3JvLTE5OTMt/YmFua25vdGUtZnJv/bS1jb2xvbWJpYS1j/b2xvbWJpYW4uYXZp/Zg", foto2: "https://imgs.search.brave.com/rcuEHJV2J7LcJ5b1B6wUlj8TF4NDw8HZllD8hTwtvrs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWN1cmVkLmN1L2lt/YWdlcy90aHVtYi8w/LzA2L0ZyYW5jaXNj/b19kZV9QYXVsYV9T/YW50YW5kZXIuanBn/LzI2MHB4LUZyYW5j/aXNjb19kZV9QYXVs/YV9TYW50YW5kZXIu/anBn", nombre: "Francisco de Paula Santander", epoca: "1792 – 1840", biografia: "El Hombre de las Leyes. Primer presidente de la Nueva Granada, construyó el Estado colombiano con orden jurídico e instituciones republicanas mientras Bolívar ganaba batallas." },

    { id: 3, foto: "https://imgs.search.brave.com/PTDrqGBhAasNgQjgBCPVa995cbJFVWclUALra_Y-5bc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGlmZWRlci5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MTEvSm9yZ2UtRWxp/ZWNlci1HYWl0YW4u/anBn", foto2: "https://imgs.search.brave.com/2zOHz4t1O_lF7Jpt2eGO03w-e9XsX7-rIR9U4RrOlUk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wZW9w/bGVzZGlzcGF0Y2gu/b3JnL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA0L0pvcmdl/LUVsaWVjZXItR2Fp/dGFuLmpwZw", nombre: "Jorge Eliecer Gaitan", epoca: "1898 – 1948", biografia: "El caudillo del pueblo. Líder político bogotano que movilizó a las masas contra la oligarquía. Su asesinato el 9 de abril de 1948 desató el Bogotazo y décadas de violencia bipartidista." },

    { id: 4, foto: "https://imgs.search.brave.com/1GP2xWOA216tB1dWi-fTyaFgw-ofbKCQ5TMn1CT_yM4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L21lZGlhLzFiZDM4/N2FlNTMyNzRlYzFk/MDJjMGU5ODRkZjc5/MGY2OWFmMTcyNzgv/MF85Ml8zNjU0XzIx/OTMvbWFzdGVyLzM2/NTQuanBnP3dpZHRo/PTQ2NSZkcHI9MSZz/PW5vbmUmY3JvcD01/OjQ", foto2: "https://imgs.search.brave.com/AttzKE1JP_gR0gjbiiNm78K743iN6aGQK5NhhWl0D6Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEyOTc4/MTk4LmpwZw", nombre: "Gabriel Garcia Marquez", epoca: "1927 – 2014", biografia: "El mayor escritor latinoamericano del siglo XX. Nacido en Aracataca, Bolívar. Con Cien años de soledad puso a Macondo en el mundo. Premio Nobel de Literatura en 1982." },

    { id: 5, foto: "https://imgs.search.brave.com/6HG0P5EwWXftmiIXH1Fr7INM_O41Ue3288BWHHvZVug/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE2/MDkzMzg1NS9waG90/by9nbGVuZGFsZS1h/cml6b25hLWphbWVz/LXJvZHJpZ3Vlei1v/Zi1jb2xvbWJpYS1z/aW5nLXRoZS1uYXRp/b25hbC1hbnRoZW0t/cHJpb3ItdG8tdGhl/LWNvbm1lYm9sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1N/UmdUSm5TTEdCZTVC/WjZEdUJDczBSbkN1/bWdsYUEtTkFfY2Ns/VTBXVFd3PQ", foto2: "https://imgs.search.brave.com/aYTsy3gYCBR4aFdbxVqu7UGCUWEhO0SkI-meWx4WweY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb2JhZS5jb20v/cmVzaXplci92Mi9I/QlIyU1BNUUNWRkpS/Rk9TTkxDSDVBVFRV/VS5qcGc_YXV0aD0w/NTRhYzU2MDY4MTU3/MWQyNGMxNTk4YWZm/NmE4Yjc1NWM2ODA5/OTNkYTAzN2Q4M2Y4/ZmNiYjVkMTIwZWNk/ZWI4JnNtYXJ0PXRy/dWUmd2lkdGg9MzUw/JmhlaWdodD0yMTcm/cXVhbGl0eT04NQ", nombre: "James Rodríguez", epoca: "1991 – presente", biografia: "El 10 eterno. Nacido en Cúcuta, enamoró al mundo en el Mundial 2014 con su gol de volea ante Uruguay. Jugó en Real Madrid, Bayern y Everton. Colombia no le mereció." },

    { id: 6, foto: "https://imgs.search.brave.com/xG0-CWGTgV-jqwCVCjnZUDS4b-3kxw8pFO6maNLGFwM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy5h/bWF6b25hd3MuY29t/L3J0dmMtYXNzZXRz/LXNlbmFsbWVtb3Jp/YS5nb3YuY28vczNm/cy1wdWJsaWMvMjAy/Mi0wNy8lQzMlODFs/dmFybyUyMFVyaWJl/JTIwViVDMyVBOWxl/eiUyMDIwMDItMjAx/MCUyMEF1dG9yJTIw/JTIwQ2VjaWxpYSUy/MEZhamFyZG8lMjB3/ZWIucG5n", foto2: "https://i.pinimg.com/736x/83/90/6e/83906e0010345e0352625253cb5cfa82.jpg", nombre: "Álvaro Uribe Vélez", epoca: "1952 – presente", biografia: "Presidente 2002–2010. La figura política más polarizante de la historia moderna colombiana. Sus seguidores lo adoran por la seguridad democrática. Sus críticos no lo quieren tanto." },

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
        nacimiento: "Caracas, Venezuela — 24 de julio de 1783",
        fallecimiento: "Santa Marta, Colombia — 17 de diciembre de 1830",
        ocupacion: "Militar, estadista y líder independentista",
        biografiaCorta: "El Libertador de América. Caraqueño de nacimiento, Bolívar lideró las campañas militares que liberaron a Colombia, Venezuela, Ecuador, Perú y Bolivia del dominio español. Soñó con una Gran Colombia unida, un sueño que no sobrevivió su propia muerte.",
        fraseCelebre: "\"Un pueblo ignorante es un instrumento ciego de su propia destrucción.\"",
        etapas: [
            "Huérfano desde los 9 años, fue educado por tutores privados en Caracas y luego enviado a España a formarse. Allí conoció a su esposa María Teresa Rodríguez, quien murió de fiebre amarilla apenas un año después de casarse. Ese golpe lo marcó para siempre y nunca volvió a casarse.",
            "En 1813 lanzó la Campaña Admirable, reconquistando Venezuela en apenas 90 días y ganándose el título de Libertador. Luego cruzó los Andes en 1819 con un ejército famélico para sorprender a los realistas en Boyacá, logrando la independencia de la Nueva Granada en una batalla que duró menos de dos horas.",
            "Tras fundar la Gran Colombia en 1821, gobernó un territorio que hoy abarca seis países. Sin embargo, sus últimos años fueron de decepción: las tensiones internas fragmentaron su proyecto, Santander se convirtió en su enemigo político y renunció al poder en 1830, muriendo meses después en la pobreza y el olvido."
        ],
        relacionados: [2, 3]
    },
    {
        id: 2,
        foto: "https://imgs.search.brave.com/zG75u9NiNiDVlpqpTIMCzLT032KOeLCPw1Qc4vi56XQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3cy4xMjNyZi5j/b20vaW1hZ2VzL2Nh/bmR5bWFuL2NhbmR5/bWFuMTIwMy9jYW5k/eW1hbjEyMDMwMDAz/Mi8xMjgxMjkwMS1m/cmFuY2lzY28tZGUt/cGF1bGEtc2FudGFu/ZGVyLTE3OTItMTg0/MC1vbi01MDAtcGVz/b3Mtb3JvLTE5OTMt/YmFua25vdGUtZnJv/bS1jb2xvbWJpYS1j/b2xvbWJpYW4uYXZp/Zg",
        foto2: "https://imgs.search.brave.com/rcuEHJV2J7LcJ5b1B6wUlj8TF4NDw8HZllD8hTwtvrs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWN1cmVkLmN1L2lt/YWdlcy90aHVtYi8w/LzA2L0ZyYW5jaXNj/b19kZV9QYXVsYV9T/YW50YW5kZXIuanBn/LzI2MHB4LUZyYW5j/aXNjb19kZV9QYXVs/YV9TYW50YW5kZXIu/anBn",
        nombre: "Francisco de Paula Santander",
        epoca: "1792 – 1840",
        nacimiento: "Villa del Rosario, Norte de Santander — 2 de abril de 1792",
        fallecimiento: "Bogotá, Colombia — 6 de mayo de 1840",
        ocupacion: "Militar, abogado y político. Primer presidente de la Nueva Granada",
        biografiaCorta: "El Hombre de las Leyes. Mientras Bolívar ganaba batallas, Santander construía el Estado. Fue el primer presidente de la Nueva Granada y el arquitecto de las instituciones republicanas colombianas, priorizando siempre el orden jurídico sobre la espada.",
        fraseCelebre: "\"Las armas os han dado la independencia, las leyes os darán la libertad.\"",
        etapas: [
            "Estudió derecho en Bogotá y se unió a la causa patriota desde muy joven. A los 20 años ya era comandante militar y demostró su talento organizativo en la Campaña del Sur. Fue Bolívar quien lo nombró vicepresidente de la Gran Colombia, reconociendo que él podía gobernar mientras el Libertador guerreaba.",
            "Como vicepresidente gobernante entre 1821 y 1827, Santander fue el verdadero arquitecto del Estado colombiano: organizó las finanzas públicas, fundó escuelas en conventos suprimidos y estableció el sistema judicial republicano. Su visión era construir un país de leyes, no de caudillos.",
            "Su relación con Bolívar se fracturó en 1828 tras la dictadura que este asumió. Acusado de conspirar en el atentado contra el Libertador, fue condenado a muerte, pero la sentencia fue conmutada por exilio. Regresó en 1832 y fue elegido presidente, gobernando hasta 1837 con un enfoque civil e institucional que definió el liberalismo colombiano."
        ],
        relacionados: [1, 3]
    },
    {
        id: 3,
        foto: "https://imgs.search.brave.com/PTDrqGBhAasNgQjgBCPVa995cbJFVWclUALra_Y-5bc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGlmZWRlci5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MTEvSm9yZ2UtRWxp/ZWNlci1HYWl0YW4u/anBn",
        foto2: "https://imgs.search.brave.com/2zOHz4t1O_lF7Jpt2eGO03w-e9XsX7-rIR9U4RrOlUk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wZW9w/bGVzZGlzcGF0Y2gu/b3JnL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA0L0pvcmdl/LUVsaWVjZXItR2Fp/dGFuLmpwZw",
        nombre: "Jorge Eliécer Gaitán",
        epoca: "1898 – 1948",
        nacimiento: "Bogotá, Colombia — 23 de enero de 1898",
        fallecimiento: "Bogotá, Colombia — 9 de abril de 1948 (asesinado)",
        ocupacion: "Abogado, político, alcalde de Bogotá y líder popular",
        biografiaCorta: "El caudillo del pueblo. Abogado y político bogotano que logró lo que nadie antes: movilizar a las masas populares contra la oligarquía bipartidista. Su asesinato el 9 de abril de 1948 desató el Bogotazo y hundió a Colombia en décadas de violencia.",
        fraseCelebre: "\"Yo no soy un hombre, soy un pueblo.\"",
        etapas: [
            "Hijo de una familia humilde del barrio Las Cruces en Bogotá, Gaitán estudió derecho con becas y esfuerzo propio. Se graduó con una tesis sobre las ideas socialistas y viajó a Roma a perfeccionarse bajo el criminalista Enrico Ferri. Desde joven entendió que el poder de Colombia estaba concentrado en una élite que ignoraba al pueblo.",
            "Como alcalde de Bogotá en 1936 y luego como ministro de Educación y de Trabajo, Gaitán demostró que era posible gobernar para los excluidos. Su figura fue creciendo hasta convertirse en el político más popular del país, encabezando marchas masivas como la Manifestación del Silencio de 1948, donde miles desfilaron en completo mutismo como protesta.",
            "El 9 de abril de 1948, cuando era el candidato presidencial más favorito de Colombia, fue asesinado a las puertas de su oficina en Bogotá. La noticia desató el Bogotazo, una explosión de furia popular que destruyó el centro de la capital. Su muerte truncó lo que muchos consideran la única oportunidad real de reforma social en Colombia antes de décadas de violencia."
        ],
        relacionados: [1, 2, 6]
    },
    {
        id: 4,
        foto: "https://imgs.search.brave.com/1GP2xWOA216tB1dWi-fTyaFgw-ofbKCQ5TMn1CT_yM4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L21lZGlhLzFiZDM4/N2FlNTMyNzRlYzFk/MDJjMGU5ODRkZjc5/MGY2OWFmMTcyNzgv/MF85Ml8zNjU0XzIx/OTMvbWFzdGVyLzM2/NTQuanBnP3dpZHRo/PTQ2NSZkcHI9MSZz/PW5vbmUmY3JvcD01/OjQ",
        foto2: "https://imgs.search.brave.com/AttzKE1JP_gR0gjbiiNm78K743iN6aGQK5NhhWl0D6Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEyOTc4/MTk4LmpwZw",
        nombre: "Gabriel García Márquez",
        epoca: "1927 – 2014",
        nacimiento: "Aracataca, Magdalena — 6 de marzo de 1927",
        fallecimiento: "Ciudad de México, México — 17 de abril de 2014",
        ocupacion: "Escritor, periodista y Nobel de Literatura 1982",
        biografiaCorta: "El mayor narrador que ha dado América Latina. Nacido en Aracataca, Bolívar, García Márquez inventó Macondo y con él redefinió lo que la literatura podía hacer. Cien años de soledad lo puso en el mundo; el Nobel de 1982 lo consagró para la historia.",
        fraseCelebre: "\"El secreto de una buena vejez no es otra cosa que un pacto honrado con la soledad.\"",
        etapas: [
            "Creció con sus abuelos maternos en Aracataca, un pueblo caluroso del Caribe colombiano lleno de historias, mitos y la memoria viva de la Guerra de los Mil Días. Su abuelo el coronel le contaba anécdotas de guerra; su abuela le narraba lo fantástico como si fuera cotidiano. Esa infancia fue el laboratorio donde nació el realismo mágico.",
            "Trabajó como periodista en Barranquilla, Bogotá, Caracas y Europa durante los años 50, forjando el estilo preciso y visual que distingue su prosa. En Barranquilla se rodeó del Grupo de Barranquilla, escritores e intelectuales que lo empujaron a leer a Faulkner, Hemingway y Woolf. Sus crónicas periodísticas ya eran literatura sin saberlo.",
            "En 1965, manejando hacia Acapulco, tuvo la revelación de cómo debía empezar Cien años de soledad. Dio la vuelta al carro, regresó a México y escribió durante 18 meses sin parar. La novela se publicó en 1967, vendió 8.000 ejemplares en una semana y cambió la literatura en español para siempre. En 1982 recibió el Nobel de Literatura en Estocolmo, vestido con una liquiliqui blanco."
        ],
        relacionados: [3, 8, 9]
    },
    {
        id: 5,
        foto: "https://imgs.search.brave.com/6HG0P5EwWXftmiIXH1Fr7INM_O41Ue3288BWHHvZVug/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE2/MDkzMzg1NS9waG90/by9nbGVuZGFsZS1h/cml6b25hLWphbWVz/LXJvZHJpZ3Vlei1v/Zi1jb2xvbWJpYS1z/aW5nLXRoZS1uYXRp/b25hbC1hbnRoZW0t/cHJpb3ItdG8tdGhl/LWNvbm1lYm9sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1N/UmdUSm5TTEdCZTVC/WjZEdUJDczBSbkN1/bWdsYUEtTkFfY2Ns/VTBXVFd3PQ",
        foto2: "https://imgs.search.brave.com/aYTsy3gYCBR4aFdbxVqu7UGCUWEhO0SkI-meWx4WweY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb2JhZS5jb20v/cmVzaXplci92Mi9I/QlIyU1BNUUNWRkpS/Rk9TTkxDSDVBVFRV/VS5qcGc_YXV0aD0w/NTRhYzU2MDY4MTU3/MWQyNGMxNTk4YWZm/NmE4Yjc1NWM2ODA5/OTNkYTAzN2Q4M2Y4/ZmNiYjVkMTIwZWNk/ZWI4JnNtYXJ0PXRy/dWUmd2lkdGg9MzUw/JmhlaWdodD0yMTcm/cXVhbGl0eT04NQ",
        nombre: "James Rodríguez",
        epoca: "1991 – presente",
        nacimiento: "Cúcuta, Norte de Santander — 12 de julio de 1991",
        fallecimiento: "Actualmente en actividad",
        ocupacion: "Futbolista profesional, mediocampista ofensivo",
        biografiaCorta: "El 10 eterno. Nacido en Cúcuta, James enamoró al mundo entero en el Mundial de Brasil 2014 con su gol de volea ante Uruguay, elegido el mejor del torneo. Jugó en Real Madrid, Bayern Múnich y Everton. Muchos dicen que Colombia nunca le mereció.",
        fraseCelebre: "\"Siempre voy a dar lo mejor de mí por mi país, pase lo que pase.\"",
        etapas: [
            "Creció en Cúcuta y luego en Ibagué, donde su padrastro Juan Carlos Restrepo, exfutbolista, lo introdujo en el mundo del fútbol. Desde niño fue un prodigio técnico: a los 14 años ya era figura en Envigado FC y a los 16 debutó como profesional. Con apenas 17 viajó a Europa para jugar en el Mónaco, iniciando una carrera que lo llevaría a los estadios más grandes del mundo.",
            "El Mundial de Brasil 2014 fue su consagración planetaria. Con 22 años, James marcó 6 goles en 5 partidos, incluyendo una volea de zurda ante Uruguay que dio la vuelta al mundo y fue elegida el mejor gol del torneo. Terminó como máximo goleador del Mundial y fue fichado por el Real Madrid por 80 millones de euros semanas después.",
            "Tras su explosión en el Madrid, su carrera se convirtió en una historia de talento subutilizado: cesiones al Bayern Múnich, un paso irregular por el Everton y clubes de menor nivel. Sin embargo, con la Selección Colombia continuó siendo el líder que condujo al equipo a la final de la Copa América 2024, demostrando que su nivel cuando está en forma sigue siendo de élite mundial."
        ],
        relacionados: [7, 6]
    },
    {
        id: 6,
        foto: "https://imgs.search.brave.com/xG0-CWGTgV-jqwCVCjnZUDS4b-3kxw8pFO6maNLGFwM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy5h/bWF6b25hd3MuY29t/L3J0dmMtYXNzZXRz/LXNlbmFsbWVtb3Jp/YS5nb3YuY28vczNm/cy1wdWJsaWMvMjAy/Mi0wNy8lQzMlODFs/dmFybyUyMFVyaWJl/JTIwViVDMyVBOWxl/eiUyMDIwMDItMjAx/MCUyMEF1dG9yJTIw/JTIwQ2VjaWxpYSUy/MEZhamFyZG8lMjB3/ZWIucG5n",
        foto2: "https://i.pinimg.com/736x/83/90/6e/83906e0010345e0352625253cb5cfa82.jpg",
        nombre: "Álvaro Uribe Vélez",
        epoca: "1952 – presente",
        nacimiento: "Medellín, Antioquia — 4 de julio de 1952",
        fallecimiento: "Actualmente en actividad",
        ocupacion: "Abogado, político y expresidente de Colombia (2002–2010)",
        biografiaCorta: "Presidente de Colombia entre 2002 y 2010. La figura política más polarizante de la historia moderna del país. Sus seguidores lo veneran por la política de Seguridad Democrática que redujo drásticamente los índices de violencia. Sus críticos lo señalan por los falsos positivos y el paramilitarismo.",
        fraseCelebre: "\"Con mano firme y corazón grande.\"",
        etapas: [
            "Criado en una familia hacendada de Antioquia, Uribe estudió derecho en la Universidad de Antioquia y luego hizo posgrados en Oxford. Su padre fue asesinado por las FARC en 1983, un hecho que marcaría profundamente su visión política. Inició su carrera pública como alcalde de Medellín encargado, luego fue senador y gobernador de Antioquia, donde aplicó por primera vez su modelo de seguridad con presencia estatal en zonas rurales.",
            "Elegido presidente en 2002 con el 53% de los votos, su gobierno estuvo dominado por la política de Seguridad Democrática: aumento del pie de fuerza, instalación de soldados campesinos y ofensiva frontal contra la guerrilla. Los indicadores de violencia cayeron drásticamente y su popularidad se disparó, lo que llevó a reformar la constitución para permitir su reelección inmediata en 2006, ganando con más del 62% de los votos.",
            "Su legado es profundamente debatido. Por un lado, Colombia recuperó territorios y redujo el secuestro y los homicidios. Por otro, el escándalo de los 'falsos positivos' y los nexos de políticos aliados con el paramilitarismo nublaron su mandato. Desde 2010 siguió siendo la figura más influyente de la derecha colombiana desde el Senado y el partido Centro Democrático."
        ],
        relacionados: [8, 3, 7]
    },
    {
        id: 7,
        foto: "https://i.pinimg.com/1200x/9a/59/94/9a59949a780d8f8a36a59397533e225d.jpg",
        foto2: "https://imgs.search.brave.com/cgV4k3kO-QKRhRh9jRB_MGlkLEIDmDcMxwwDpdPn5_0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZW5lcy5lbHRpZW1w/by5jb20vZmlsZXMv/aW1hZ2VfNjAwXzQ1/NS91cGxvYWRzLzIw/MTcvMDkvMjYvNTlj/YTY4ZTg0MmFlNy5q/cGVn",
        nombre: "Falcao García",
        epoca: "1986 – presente",
        nacimiento: "Santa Marta, Magdalena — 10 de febrero de 1986",
        fallecimiento: "Actualmente en actividad",
        ocupacion: "Futbolista profesional, delantero centro",
        biografiaCorta: "El Tigre. El mejor nueve que ha dado Colombia y uno de los delanteros más letales en la historia del fútbol mundial. Goleador histórico del Atlético de Madrid y del Mónaco. Se rompió los ligamentos de la rodilla en enero de 2014 y se perdió el Mundial que habría sido el suyo.",
        fraseCelebre: "\"El fútbol es mi vida, pero la fe es lo primero.\"",
        etapas: [
            "Hijo del exfutbolista Radamel García, creció entre Buenos Aires y Santa Marta. Desde niño tuvo el gol como instinto natural. Debutó en River Plate en Argentina y con 20 años ya era una figura reconocida en el Río de la Plata. En 2009 llegó al Porto de Portugal, donde explotó como uno de los delanteros más letales del fútbol europeo.",
            "Su paso por el Atlético de Madrid entre 2011 y 2013 fue una de las etapas más brillantes en la historia reciente del club. Marcó 70 goles en 91 partidos, ganó la Europa League de 2012 anotando un hat-trick en la final y estableció el récord de 12 goles en una sola edición de ese torneo. El Mónaco pagó 60 millones por él en 2013, un precio récord para la liga francesa.",
            "En enero de 2014, a cinco meses del Mundial de Brasil que habría sido su gran escenario, sufrió una rotura de ligamentos que lo dejó fuera de la competición. Colombia llegó a cuartos de final; sin Falcao, el sueño quedó incompleto. Regresó al alto nivel con el Mónaco, aunque las lesiones siguieron condicionando su carrera. Se retiró siendo el máximo goleador histórico de la Selección Colombia."
        ],
        relacionados: [5, 8]
    },
    {
        id: 8,
        foto: "imagenes/petrosky.jpeg",
        foto2: "https://imgs.search.brave.com/9O6RtOo3cdcuaf_mW1SKU2R5NSvAv5JQ5DxEwVUBvR4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2xhcmluLmNvbS9p/bWcvMjAyNS8xMS8w/NS8taWY4TjJrWGJf/NjAweDI5MF9fMS5q/cGc",
        nombre: "Gustavo Petro",
        epoca: "1960 – presente",
        nacimiento: "Ciénaga de Oro, Córdoba — 19 de abril de 1960",
        fallecimiento: "Actualmente en actividad",
        ocupacion: "Economista, político y presidente de Colombia (2022–2026)",
        biografiaCorta: "El primer presidente de izquierda en la historia de Colombia, elegido en 2022. Ex militante del M-19, economista, alcalde de Bogotá y eterno candidato presidencial. Tan polémico y divisivo como Uribe, pero desde el otro extremo del espectro político.",
        fraseCelebre: "\"No venimos a gobernar para los ricos, venimos a gobernar para el pueblo.\"",
        etapas: [
            "Desde joven se involucró en política: a los 17 años militó en el M-19, el grupo guerrillero urbano conocido por acciones como el robo de la espada de Bolívar. Fue detenido y torturado por la policía en los años 80, pero siempre afirmó haber tenido un rol político y nunca haber portado armas. Tras la desmovilización del M-19 en 1990, se convirtió en uno de sus representantes políticos más visibles.",
            "Como senador durante los años 2000 fue una voz incómoda e incansable: denunció públicamente los vínculos entre paramilitares y políticos del uribismo, lo que le valió amenazas de muerte y protección permanente. Como alcalde de Bogotá (2012–2015) implementó políticas sociales ambiciosas aunque su gestión estuvo marcada por conflictos con el establecimiento, incluyendo una destitución temporal que fue anulada por la Corte Interamericana.",
            "Luego de dos candidaturas presidenciales fallidas, en 2022 ganó la presidencia de Colombia con Francia Márquez como vicepresidenta, la primera fórmula afrodescendiente en llegar al poder. Su gobierno ha sido el más transformador en décadas en términos de agenda social, y también el más cuestionado por sus contradictores, convirtiendo a Petro en el eje de la polarización política colombiana contemporánea."
        ],
        relacionados: [6, 9, 3]
    },
    {
        id: 9,
        foto: "https://i.pinimg.com/736x/4e/98/71/4e987137bcb66449248888a1131171aa.jpg",
        foto2: "https://imgs.search.brave.com/BI1_d6bsFpRCCmh_JoX8AFpBQwzkivditpYszG3TBQ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLnlp/bWcuY29tL255L2Fw/aS9yZXMvMS4yL09Y/N20yZDRMNWQwTUpI/WDI5RlNZX3ctLS9Z/WEJ3YVdROWFHbG5h/R3hoYm1SbGNqdDNQ/VEUxTmpjN2FEMDJP/VGs3WTJZOWQyVmlj/QS0tL2h0dHBzOi8v/bWVkaWEuemVuZnMu/Y29tL2VzL2xhbmFj/aW9uLmNvbS5hci9l/YWZhZDRjNDZiY2E5/Zjc4ODgzZGU4Njc3/OTNlMjVkMA",
        nombre: "Abelardo de la Espriella",
        epoca: "1964 – presente",
        nacimiento: "Cartagena de Indias, Bolívar — 1964",
        fallecimiento: "Actualmente en actividad",
        ocupacion: "Abogado penalista, comunicador y figura pública",
        biografiaCorta: "El penalista más famoso de Colombia. Cartagenero de nacimiento, se convirtió en figura nacional defendiendo casos que nadie más quería tocar. Presencia fija en medios de comunicación, orador implacable y opinador sin filtro. Algunos ya lo ven como futuro presidente.",
        fraseCelebre: "\"En Colombia se condena al pobre y se absuelve al poderoso. Yo vengo a cambiar eso.\"",
        etapas: [
            "Nacido en Cartagena, estudió derecho y desde sus primeros años como abogado se orientó hacia la defensa penal de casos de alto perfil y alta controversia. Su capacidad oratoria y su disposición a defender a quien nadie más defendía le fueron abriendo espacio en un sistema judicial donde los grandes casos suelen quedar en manos de los mismos círculos de siempre.",
            "Con los años su nombre se volvió sinónimo de defensa en casos imposibles: narcotraficantes, políticos acusados, figuras del conflicto armado. Argumentaba siempre que el derecho a la defensa es universal y que un sistema de justicia se mide por cómo trata a sus acusados más impopulares. Esa postura lo hizo polémico, pero también le ganó un respeto transversal en el gremio jurídico.",
            "Su aparición constante en medios de comunicación lo transformó de abogado a figura pública. En los noticieros colombianos suele ser más contundente y directo que los periodistas que lo entrevistan. Su oratoria cuasi teatral en los estrados judiciales y su presencia mediática lo han convertido en uno de los rostros más reconocibles del debate público colombiano, con un creciente perfil político que algunos ya proyectan hacia la presidencia."
        ],
        relacionados: [8, 6, 4]
    }
]
// ELEMENTOS DEL DOM
let nombre = document.getElementById("nombre")


//IDENTIFICADOR
const parametros = new URLSearchParams(window.location.search);
const id = parseInt(parametros.get("id"));

// IMPRIMIR INFORMACION EN EL HTML

function renderHero(bioPersonajes) {

    for (const bioPersonaje of bioPersonajes) {
        if (id == bioPersonaje.id) {
            nombre.textContent = `${bioPersonaje.nombre}`
            let hero = document.querySelector(".hero")
            hero.innerHTML = ` <div class="card-hero">
                <div class="imagen-hero" id="imagen-hero1">
                    <img src="${bioPersonaje.foto}" alt="">
                </div>
                <div class="bio-hero oculto">
                    <p>${bioPersonaje.biografiaCorta}</p>
                </div>
            </div>


            <div class="line" id="nacimiento">
                <p><b>Nacimiento</b><br> ${bioPersonaje.nacimiento}</p>
            </div>
            <div class="line" id="fallecimiento">
                <p><b>Fallecimiento</b><br> ${bioPersonaje.fallecimiento}</p>
            </div>
            <div class="line" id="ocupacion">
                <p><b>Ocupación</b><br> ${bioPersonaje.ocupacion}</p>
            </div>`
        }
    }
    let card_hero = document.querySelector(".card-hero")
    let bio_hero = document.querySelector(".bio-hero")

    card_hero.addEventListener("click", () => {
        bio_hero.classList.toggle("oculto");
    });

}



function renderFrase(bioPersonajes) {
    for (const bioPersonaje of bioPersonajes) {
        if (id == bioPersonaje.id) {
            let frase = document.querySelector(".frase")
            frase.innerHTML = `<h3 id="frase">${bioPersonaje.fraseCelebre}"</h3>`
        }
    }
}



function renderDatos(bioPersonajes) {
    for (const bioPersonaje of bioPersonajes) {
        if (id == bioPersonaje.id) {
            let datos = document.querySelector(".datos")
            datos.innerHTML = `<div class="imagen" id="foto2">
                <img src="${bioPersonaje.foto2}" alt="">
            </div>
            <div class="informacion">
                <div class="card-info" id="card-1">
                    <p>${bioPersonaje.etapas[0]}
                    </p>
                </div>
                <div class="card-info" id="card-2">
                    <p>${bioPersonaje.etapas[1]}
                    </p>
                </div>
                <div class="card-info" id="card-3">
                    <p>${bioPersonaje.etapas[2]}
                    </p>
                </div>`
        }
    }
}




function renderRelacionados(bioPersonajes) {
    let relacionados = document.querySelector(".relacionados")
    relacionados.innerHTML = ` `
    for (const bioPersonaje of bioPersonajes) {
        if (id == bioPersonaje.id) {
            for (const personaje of personajes) {
                if (bioPersonaje.relacionados.includes(personaje.id)) {
                    relacionados.innerHTML += `
                   <h2>Personajes relacionados</h2>
                    <div class="card" id="${personaje.id}">
                    <img src="${personaje.foto}" alt="">
                    <div class="info-card">
                    <p><b>Nombre:</b> ${personaje.nombre}</p>
                    <p><b>Epoca:</b> ${personaje.epoca}</p>
                    <p><b>Biografia:</b> ${personaje.biografia}</p>
                    </div>  
                    </div>
                   `

                }
            }

        }
    }
}



//ENVIAR INFO A BIOGRAFIA

function sendInfo() {
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            const id = event.currentTarget.getAttribute("id");
            window.location.href = window.location.href = "biografia.html?id=" + id;
        });
    });
};




document.addEventListener("DOMContentLoaded", () => {
    renderHero(bioPersonajes)
    renderFrase(bioPersonajes)
    renderDatos(bioPersonajes)
    renderRelacionados(bioPersonajes)
    sendInfo()
})



