const preguntas = [
    {
        pregunta: "¿En qué batalla Colombia obtuvo su independencia del dominio español en 1819?",
        opciones: ["Batalla de Ayacucho", "Batalla de Boyacá", "Batalla de Carabobo", "Batalla de Pichincha"],
        correcta: 1,
        dato: "La Batalla de Boyacá, el 7 de agosto de 1819, fue el enfrentamiento decisivo que selló la independencia de Colombia."
    },
    {
        pregunta: "¿Qué Premio Nobel recibió Gabriel García Márquez en 1982?",
        opciones: ["Premio Nobel de la Paz", "Premio Nobel de Física", "Premio Nobel de Literatura", "Premio Nobel de Economía"],
        correcta: 2,
        dato: "García Márquez recibió el Premio Nobel de Literatura en 1982, siendo el escritor colombiano más reconocido a nivel mundial."
    },
    {
        pregunta: "¿Qué evento histórico desencadenó el Bogotazo en 1948?",
        opciones: [
            "El fin de la Guerra de los Mil Días",
            "El asesinato de Jorge Eliécer Gaitán",
            "La toma del Palacio de Justicia",
            "La firma del Tratado Herrán-Hay"
        ],
        correcta: 1,
        dato: "El asesinato de Gaitán el 9 de abril de 1948 desató una ola de violencia en Bogotá conocida como el Bogotazo, que marcó décadas de conflicto en Colombia."
    },
    {
        pregunta: "¿Cuál es el río más largo de Colombia?",
        opciones: ["Río Cauca", "Río Atrato", "Río Meta", "Río Magdalena"],
        correcta: 3,
        dato: "El Río Magdalena, con aproximadamente 1.528 km, es el río más largo de Colombia y fue la principal vía de comunicación del país durante siglos."
    },
    {
        pregunta: "¿En qué año se disputó el Mundial de Fútbol donde James Rodríguez marcó el gol más bello según la FIFA?",
        opciones: ["2010", "2018", "2014", "2006"],
        correcta: 2,
        dato: "En el Mundial de Brasil 2014, James Rodríguez marcó un golazo de volea contra Uruguay que fue elegido el mejor gol del torneo por la FIFA."
    },
    {
        pregunta: "¿Quién fue conocido como 'El Hombre de las Leyes' y primer presidente de la Nueva Granada?",
        opciones: ["Simón Bolívar", "Antonio Nariño", "Francisco de Paula Santander", "Rafael Núñez"],
        correcta: 2,
        dato: "Francisco de Paula Santander fue el primer presidente de la Nueva Granada (1832–1837) y es recordado como el fundador de las instituciones legales colombianas."
    },
    {
        pregunta: "¿Cuál es la capital de Colombia?",
        opciones: ["Medellín", "Cali", "Cartagena", "Bogotá"],
        correcta: 3,
        dato: "Bogotá, conocida oficialmente como Bogotá D.C. (Distrito Capital), es la capital y ciudad más grande de Colombia."
    },
    {
        pregunta: "¿Cómo se llama la novela más famosa de Gabriel García Márquez?",
        opciones: ["El amor en los tiempos del cólera", "Cien años de soledad", "La hojarasca", "El coronel no tiene quien le escriba"],
        correcta: 1,
        dato: "Cien años de soledad (1967) es la obra cumbre de García Márquez y una de las novelas más leídas en español de todos los tiempos."
    },
    {
        pregunta: "¿Cuál de estas ciudades es conocida como 'La Ciudad de la Eterna Primavera'?",
        opciones: ["Bogotá", "Barranquilla", "Medellín", "Bucaramanga"],
        correcta: 2,
        dato: "Medellín es llamada 'La Ciudad de la Eterna Primavera' por su clima templado y agradable durante todo el año, con una temperatura promedio de 22°C."
    },
    {
        pregunta: "¿Qué apodo tiene Radamel Falcao García, uno de los mejores delanteros colombianos de la historia?",
        opciones: ["El Pibe", "El Tigre", "El Tino", "El Cucho"],
        correcta: 1,
        dato: "Falcao es conocido como 'El Tigre' por su ferocidad dentro del área y su instinto goleador. Es el máximo goleador histórico de la Selección Colombia."
    }
]

// --- ESTADO DEL QUIZ ---

let indicePregunta = 0
let puntaje = 0
let respondidas = []

// --- REFERENCIAS AL DOM ---

const pantallaInicio = document.getElementById("pantalla-inicio")
const pantallaQuiz = document.getElementById("pantalla-quiz")
const pantallaResultado = document.getElementById("pantalla-resultado")

const btnEmpezar = document.getElementById("btn-empezar")
const btnSiguiente = document.getElementById("btn-siguiente")
const btnReintentar = document.getElementById("btn-reintentar")

const preguntaTexto = document.getElementById("pregunta-texto")
const opcionesGrid = document.getElementById("opciones-grid")
const numeroPregunta = document.getElementById("numero-pregunta")
const puntajeActual = document.getElementById("puntaje-actual")
const barraRelleno = document.getElementById("barra-relleno")

// --- FUNCIONES ---

function mostrarPantalla(pantalla) {
    pantallaInicio.classList.add("oculto")
    pantallaQuiz.classList.add("oculto")
    pantallaResultado.classList.add("oculto")
    pantalla.classList.remove("oculto")
}

function renderPregunta() {
    const p = preguntas[indicePregunta]

    numeroPregunta.textContent = `Pregunta ${indicePregunta + 1} de ${preguntas.length}`
    barraRelleno.style.width = `${((indicePregunta) / preguntas.length) * 100}%`
    puntajeActual.textContent = `✓ ${puntaje}`
    preguntaTexto.textContent = p.pregunta

    opcionesGrid.innerHTML = ""
    btnSiguiente.classList.add("oculto")

    p.opciones.forEach((opcion, i) => {
        const btn = document.createElement("button")
        btn.classList.add("opcion-btn")
        btn.textContent = opcion
        btn.addEventListener("click", () => seleccionarOpcion(i))
        opcionesGrid.appendChild(btn)
    })
}

function seleccionarOpcion(indiceSeleccionado) {
    const p = preguntas[indicePregunta]
    const botones = opcionesGrid.querySelectorAll(".opcion-btn")
    const esCorrecta = indiceSeleccionado === p.correcta

    botones.forEach(btn => btn.disabled = true)

    botones[p.correcta].classList.add("correcta")

    if (!esCorrecta) {
        botones[indiceSeleccionado].classList.add("incorrecta")
    } else {
        puntaje++
        puntajeActual.textContent = `✓ ${puntaje}`
    }

    respondidas.push({
        pregunta: p.pregunta,
        correcta: esCorrecta,
        respuestaCorrecta: p.opciones[p.correcta],
        dato: p.dato
    })

    btnSiguiente.classList.remove("oculto")

    if (indicePregunta === preguntas.length - 1) {
        btnSiguiente.textContent = "Ver resultados →"
    } else {
        btnSiguiente.textContent = "Siguiente pregunta →"
    }
}

function mostrarResultado() {
    barraRelleno.style.width = "100%"
    mostrarPantalla(pantallaResultado)

    document.getElementById("puntaje-numero").textContent = puntaje

    const icono = document.getElementById("resultado-icono")
    const titulo = document.getElementById("resultado-titulo")
    const descripcion = document.getElementById("resultado-descripcion")

    if (puntaje === 10) {
        icono.textContent = "🏆"
        titulo.textContent = "¡Perfecto! Eres un experto en Colombia"
        descripcion.textContent = "Sacaste 10 de 10. ¡Colombia te corre por las venas!"
    } else if (puntaje >= 7) {
        icono.textContent = "🎉"
        titulo.textContent = "¡Muy bien! Sabes bastante de Colombia"
        descripcion.textContent = "Un resultado sólido. Sigue explorando nuestra historia."
    } else if (puntaje >= 5) {
        icono.textContent = "🤔"
        titulo.textContent = "No estuvo mal, pero hay que estudiar más"
        descripcion.textContent = "Repasa las épocas y biografías del museo para mejorar."
    } else {
        icono.textContent = "📚"
        titulo.textContent = "Hay mucho por aprender todavía"
        descripcion.textContent = "No te desanimes — el museo está lleno de historia para descubrir."
    }

    const detalle = document.getElementById("resultado-detalle")
    detalle.innerHTML = ""

    respondidas.forEach((r, i) => {
        const item = document.createElement("div")
        item.classList.add("detalle-item", r.correcta ? "bien" : "mal")
        item.innerHTML = `
            <span class="detalle-icono">${r.correcta ? "✅" : "❌"}</span>
            <div>
                <strong>Pregunta ${i + 1}:</strong> ${r.correcta ? "Correcta" : `Incorrecta — Respuesta: <em>${r.respuestaCorrecta}</em>`}<br>
                <small>${r.dato}</small>
            </div>
        `
        detalle.appendChild(item)
    })
}

function reiniciarQuiz() {
    indicePregunta = 0
    puntaje = 0
    respondidas = []
    mostrarPantalla(pantallaInicio)
}

// --- EVENTOS ---

btnEmpezar.addEventListener("click", () => {
    reiniciarQuiz()
    indicePregunta = 0
    puntaje = 0
    respondidas = []
    mostrarPantalla(pantallaQuiz)
    renderPregunta()
})

btnSiguiente.addEventListener("click", () => {
    indicePregunta++
    if (indicePregunta < preguntas.length) {
        renderPregunta()
    } else {
        mostrarResultado()
    }
})

btnReintentar.addEventListener("click", () => {
    reiniciarQuiz()
})
