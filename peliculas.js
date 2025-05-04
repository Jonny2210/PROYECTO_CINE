// Base de datos de películas
const peliculas = [
    {
        id: 1,
        titulo: "Thunderbolts*",
        generos: ["Acción", "Aventura"],
        duracion: 156,
        clasificacion: "PG-13",
        rating: 8.5,
        director: "Jake Schreier",
        actores: ["Florence Pugh", "Sebastian Stan", "David Harbour", "Wyatt Russell"],
        sinopsis: "Un grupo de supervillanos son reclutados por el gobierno para llevar a cabo misiones peligrosas a cambio de reducciones en sus sentencias.",
        imagen: "imagenes/Cartelera/Pelicula1.jpg",
        estreno: "2025-04-10",
        trailer: "https://www.youtube.com/watch?v=N1GAypxl3XE", // Reemplazar con URL real
        salas: [
            {
                cine: "CineBloom Central",
                horarios: ["14:30", "17:45", "21:00"],
                formato: ["2D", "3D"]
            },
            {
                cine: "CineBloom Plaza",
                horarios: ["15:00", "18:15", "21:30"],
                formato: ["2D", "IMAX"]
            },
            {
                cine: "CineBloom Norte",
                horarios: ["16:00", "19:15", "22:00"],
                formato: ["2D"]
            }
        ]
    },
    {
        id: 2,
        titulo: "Una Película De Looney Tunes: El Dia Que La Tierra Explotó",
        generos: ["Animación", "Comedia"],
        duracion: 90,
        clasificacion: "PG",
        rating: 7.9,
        director: "Pete Browngardt",
        actores: ["Jeff Bergman", "Eric Bauza", "Candi Milo", "Fred Tatasciore"],
        sinopsis: "Los personajes de Looney Tunes se enfrentan a una amenaza alienígena que planea destruir la Tierra. Bugs Bunny y sus amigos deben unir fuerzas para salvar su hogar.",
        imagen: "imagenes/Cartelera/Pelicula2.jpg",
        estreno: "2025-03-15",
        trailer: "https://www.youtube.com/watch?v=ip-5s8O28i0", // Reemplazar con URL real
        salas: [
            {
                cine: "CineBloom Central",
                horarios: ["13:00", "15:30", "18:00"],
                formato: ["2D", "3D"]
            },
            {
                cine: "CineBloom Plaza",
                horarios: ["14:15", "16:45", "19:15"],
                formato: ["2D"]
            },
            {
                cine: "CineBloom Sur",
                horarios: ["13:30", "16:00", "18:30"],
                formato: ["2D", "3D"]
            }
        ]
    },
    {
        id: 3,
        titulo: "La Leyenda De Ochi",
        generos: ["Aventura", "Familiar", "Fantasía"],
        duracion: 96,
        clasificacion: "PG",
        rating: 8.2,
        director: "Sarah García",
        actores: ["Miguel Ángel", "Laura González", "Carlos Ruiz", "Isabel López"],
        sinopsis: "Un niño descubre una antigua leyenda sobre una criatura mágica llamada Ochi que protege el bosque. Cuando los leñadores amenazan con destruir su hogar, el niño se embarca en una aventura para encontrar a Ochi y salvar el bosque.",
        imagen: "imagenes/Cartelera/Pelicula3.jpg",
        estreno: "2025-02-28",
        trailer: "https://www.youtube.com/watch?v=pVKbzNK11B0", // Reemplazar con URL real
        salas: [
            {
                cine: "CineBloom Plaza",
                horarios: ["14:00", "16:30", "19:00"],
                formato: ["2D"]
            },
            {
                cine: "CineBloom Norte",
                horarios: ["15:30", "18:00", "20:30"],
                formato: ["2D", "3D"]
            },
            {
                cine: "CineBloom Sur",
                horarios: ["13:45", "16:15", "18:45"],
                formato: ["2D"]
            }
        ]
    },
    {
        id: 4,
        titulo: "Memorias de un Caracol",
        generos: ["Animación", "Comedia", "Drama"],
        duracion: 97,
        clasificacion: "PG",
        rating: 7.6,
        director: "Tomás Jiménez",
        actores: ["Voces de: Elena Martín", "Pablo Sánchez", "Ana Torres", "Diego Ramos"],
        sinopsis: "Un caracol con memoria fotográfica se convierte en testigo de la historia de un pequeño pueblo. A través de sus recuerdos, nos cuenta historias de varias generaciones y cómo la vida cambia lentamente con el paso del tiempo.",
        imagen: "imagenes/Cartelera/Pelicula4.jpg",
        estreno: "2025-03-05",
        trailer: "https://www.youtube.com/watch?v=TpDWVaBlpJE", // Reemplazar con URL real
        salas: [
            {
                cine: "CineBloom Central",
                horarios: ["14:45", "17:15", "19:45"],
                formato: ["2D", "3D"]
            },
            {
                cine: "CineBloom Plaza",
                horarios: ["13:30", "16:00", "18:30"],
                formato: ["2D"]
            },
            {
                cine: "CineBloom Norte",
                horarios: ["15:00", "17:30", "20:00"],
                formato: ["2D"]
            }
        ]
    },
    {
        id: 5,
        titulo: "Una Película De Minecraft",
        generos: ["Acción", "Aventura", "Familiar", "Infantil"],
        duracion: 112,
        clasificacion: "PG",
        rating: 7.6,
        director: "Emma Wilson",
        actores: ["Jason Momoa", "Jack Black", "Jennifer López", "Emma Myers"],
        sinopsis: "Un grupo de amigos es transportado al mundo de Minecraft donde deben aprender a sobrevivir, construir y luchar contra los monstruos de la noche para encontrar un camino de regreso a casa.",
        imagen: "imagenes/Cartelera/Pelicula5.jpg",
        estreno: "2025-01-25",
        trailer: "https://www.youtube.com/watch?v=wJO_vIDZn-I", // Reemplazar con URL real
        salas: [
            {
                cine: "CineBloom Central",
                horarios: ["13:15", "15:45", "18:15", "20:45"],
                formato: ["2D", "3D", "IMAX"]
            },
            {
                cine: "CineBloom Plaza",
                horarios: ["14:30", "17:00", "19:30"],
                formato: ["2D", "3D"]
            },
            {
                cine: "CineBloom Sur",
                horarios: ["13:00", "15:30", "18:00", "20:30"],
                formato: ["2D"]
            }
        ]
    }
];

// Función para obtener película por ID
function obtenerPeliculaPorId(id) {
    return peliculas.find(pelicula => pelicula.id === id);
}

// Función para obtener películas en cartelera
function obtenerPeliculasEnCartelera() {
    return peliculas;
}

// Función para generar HTML de una tarjeta de película
function generarTarjetaPelicula(pelicula) {
    return `
    <div class="movie-card">
        <div class="movie-poster">
            <img src="${pelicula.imagen}" alt="${pelicula.titulo}">
            <div class="movie-overlay">
                <div class="movie-actions">
                    <button onclick="window.location.href='comprar-boletos.html?id=${pelicula.id}'"><i class="fas fa-ticket-alt"></i> Comprar</button>
                    <button onclick="window.location.href='pelicula.html?id=${pelicula.id}'"><i class="fas fa-play"></i> Trailer</button>
                </div>
            </div>
            <div class="movie-rating">
                <i class="fas fa-star"></i> ${pelicula.rating}
            </div>
        </div>
        <div class="movie-info">
            <h3 class="movie-title">${pelicula.titulo}</h3>
            <div class="movie-meta">
                <span><i class="fas fa-clock"></i> ${pelicula.duracion} min</span>
                <span><i class="fas fa-film"></i> ${pelicula.generos.join(", ")}</span>
            </div>
        </div>
    </div>
    `;
}

// Función para cargar películas en la página principal
function cargarPeliculasEnCartelera() {
    const contenedor = document.querySelector('.movie-grid');
    if (contenedor) {
        contenedor.innerHTML = '';
        const peliculasCartelera = obtenerPeliculasEnCartelera();

        peliculasCartelera.forEach(pelicula => {
            contenedor.innerHTML += generarTarjetaPelicula(pelicula);
        });
    }
}

// Función para cargar datos de una película específica
function cargarDetallePelicula() {
    const urlParams = new URLSearchParams(window.location.search);
    const peliculaId = parseInt(urlParams.get('id'));

    if (peliculaId) {
        const pelicula = obtenerPeliculaPorId(peliculaId);
        if (pelicula) {
            // Llenar datos en la página de detalle
            document.getElementById('pelicula-titulo').textContent = pelicula.titulo;
            document.getElementById('pelicula-sinopsis').textContent = pelicula.sinopsis;
            document.getElementById('pelicula-duracion').textContent = `${pelicula.duracion} min`;
            document.getElementById('pelicula-generos').textContent = pelicula.generos.join(", ");
            document.getElementById('pelicula-director').textContent = pelicula.director;
            document.getElementById('pelicula-actores').textContent = pelicula.actores.join(", ");
            document.getElementById('pelicula-estreno').textContent = new Date(pelicula.estreno).toLocaleDateString();
            document.getElementById('pelicula-rating').textContent = pelicula.rating;
            document.getElementById('pelicula-clasificacion').textContent = pelicula.clasificacion;
            document.getElementById('trailer-iframe').src = pelicula.trailer;
            document.getElementById('comprar-button').href = `comprar-boletos.html?id=${pelicula.id}`;

            // Configurar el fondo
            document.querySelector('.movie-background').style.backgroundImage = `url(${pelicula.imagen})`;
        }
    }
}

// Función para cargar el formulario de compra de boletos
function cargarFormularioCompra() {
    const urlParams = new URLSearchParams(window.location.search);
    const peliculaId = parseInt(urlParams.get('id'));

    if (peliculaId) {
        const pelicula = obtenerPeliculaPorId(peliculaId);
        if (pelicula) {
            // Configurar datos de la película
            document.getElementById('pelicula-titulo').textContent = pelicula.titulo;
            document.getElementById('pelicula-imagen').src = pelicula.imagen;

            // Cargar cines en el select
            const cineSelect = document.getElementById('cine-select');
            if (cineSelect) {
                cineSelect.innerHTML = '<option value="" disabled selected>Selecciona un cine</option>';
                pelicula.salas.forEach(sala => {
                    cineSelect.innerHTML += `<option value="${sala.cine}">${sala.cine}</option>`;
                });
            }

            // Inicializar Materialize Select
            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('select');
                M.FormSelect.init(elems);
            });
        }
    }
}

// Función para cargar horarios según el cine seleccionado
function cargarHorarios() {
    const urlParams = new URLSearchParams(window.location.search);
    const peliculaId = parseInt(urlParams.get('id'));
    const cineSeleccionado = document.getElementById('cine-select').value;

    if (peliculaId && cineSeleccionado) {
        const pelicula = obtenerPeliculaPorId(peliculaId);
        const sala = pelicula.salas.find(s => s.cine === cineSeleccionado);

        if (sala) {
            const horarioSelect = document.getElementById('horario-select');
            horarioSelect.innerHTML = '<option value="" disabled selected>Selecciona un horario</option>';
            sala.horarios.forEach(horario => {
                horarioSelect.innerHTML += `<option value="${horario}">${horario}</option>`;
            });

            // Cargar formatos
            const formatoSelect = document.getElementById('formato-select');
            formatoSelect.innerHTML = '<option value="" disabled selected>Selecciona un formato</option>';
            sala.formato.forEach(formato => {
                formatoSelect.innerHTML += `<option value="${formato}">${formato}</option>`;
            });

            // Actualizar Materialize Select
            M.FormSelect.init(document.querySelectorAll('select'));

            // Mostrar sección de horarios
            document.getElementById('horarios-section').style.display = 'block';
        }
    }
}

// Función para mostrar la selección de butacas
function mostrarButacas() {
    const horarioSeleccionado = document.getElementById('horario-select').value;
    const formatoSeleccionado = document.getElementById('formato-select').value;

    if (horarioSeleccionado && formatoSeleccionado) {
        // Mostrar sección de butacas
        document.getElementById('butacas-section').style.display = 'block';

        // Generar butacas (8 filas x 10 columnas)
        const butacasContainer = document.getElementById('butacas-container');
        butacasContainer.innerHTML = '';

        const filas = 'ABCDEFGH';

        for (let i = 0; i < filas.length; i++) {
            const fila = document.createElement('div');
            fila.className = 'row butacas-fila';

            // Añadir indicador de fila
            const filaIndicador = document.createElement('div');
            filaIndicador.className = 'fila-indicador';
            filaIndicador.textContent = filas[i];
            fila.appendChild(filaIndicador);

            for (let j = 1; j <= 10; j++) {
                const butaca = document.createElement('div');
                butaca.className = 'butaca disponible';
                butaca.dataset.fila = filas[i];
                butaca.dataset.numero = j;
                butaca.textContent = j;

                // Generar algunas butacas como ocupadas aleatoriamente
                if (Math.random() > 0.8) {
                    butaca.className = 'butaca ocupada';
                } else {
                    butaca.addEventListener('click', function() {
                        if (this.classList.contains('ocupada')) return;

                        this.classList.toggle('seleccionada');
                        actualizarButacasSeleccionadas();
                    });
                }

                fila.appendChild(butaca);
            }

            butacasContainer.appendChild(fila);
        }

        // Añadir pantalla
        const pantalla = document.createElement('div');
        pantalla.className = 'pantalla';
        pantalla.textContent = 'PANTALLA';
        butacasContainer.appendChild(pantalla);

        // Mostrar leyenda
        document.getElementById('butacas-leyenda').style.display = 'flex';
    }
}

// Función para actualizar el resumen de butacas seleccionadas
function actualizarButacasSeleccionadas() {
    const butacasSeleccionadas = document.querySelectorAll('.butaca.seleccionada');
    const resumenContainer = document.getElementById('butacas-seleccionadas');
    const totalContainer = document.getElementById('total-precio');

    let resumen = '';
    let total = 0;
    const precioBoleto = 75; // Precio por boleto en pesos

    butacasSeleccionadas.forEach(butaca => {
        resumen += `${butaca.dataset.fila}${butaca.dataset.numero}, `;
        total += precioBoleto;
    });

    if (resumen) {
        resumen = resumen.slice(0, -2); // Eliminar la última coma y espacio
        resumenContainer.textContent = resumen;
        totalContainer.textContent = `$${total}.00`;
        document.getElementById('resumen-compra').style.display = 'block';
        document.getElementById('btn-confirmar').style.display = 'block';
    } else {
        resumenContainer.textContent = 'Ninguna';
        totalContainer.textContent = '$0.00';
        document.getElementById('btn-confirmar').style.display = 'none';
    }
}

// Función para confirmar compra
function confirmarCompra() {
    alert('¡Compra realizada con éxito! Se ha enviado un correo con los detalles de tu compra.');
    window.location.href = 'index.html';
}

// Exportar funciones para uso global
window.obtenerPeliculaPorId = obtenerPeliculaPorId;
window.obtenerPeliculasEnCartelera = obtenerPeliculasEnCartelera;
window.cargarPeliculasEnCartelera = cargarPeliculasEnCartelera;
window.cargarDetallePelicula = cargarDetallePelicula;
window.cargarFormularioCompra = cargarFormularioCompra;
window.cargarHorarios = cargarHorarios;
window.mostrarButacas = mostrarButacas;
window.actualizarButacasSeleccionadas = actualizarButacasSeleccionadas;
window.confirmarCompra = confirmarCompra;