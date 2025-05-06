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
    },
    {
        id: 6,
        titulo: "El Contador 2",
        generos: ["Acción", "Drama"],
        duracion: 133,
        clasificacion: "B 15",
        rating: 7.1,
        director: "Gavin O´Connor",
        actores: ["Ben Affleck", "Jon Bernthal", "Cynthia Addai-Robinson"],
        sinopsis: "Christian Wolff (Ben Affleck) tiene un don para resolver problemas complejos. Cuando asesinan a un viejo conocido —quien deja un mensaje críptico para “encontrar al contador”—, Wolff se siente obligado a resolver el caso. Al darse cuenta de que se necesitan medidas más extremas, Wolff recluta a su hermano, de quien está distanciado y es muy letal, Brax (Jon Bernthal), para que le ayude. En colaboración con Marybeth Medina (Cynthia Addai-Robinson), subdirectora del Tesoro de Estados Unidos, descubren una conspiración mortal y se convierten en objetivo de una red de asesinos despiadados que no se detendrán ante nada para mantener sus secretos enterrados.",
        imagen: "imagenes/Cartelera/Pelicula6.jpg",
        estreno: "2025-04-24",
        trailer: "https://www.youtube.com/watch?v=8CdW4Lgbca0", // Reemplazar con URL real
        salas: [
            {
                cine: "CineBloom Central",
                horarios: ["16:30", "18:45", "21:00"],
                formato: ["2D", "IMAX"]
            },
            {
                cine: "CineBloom Plaza",
                horarios: ["14:00", "16:15", "21:30"],
                formato: ["2D", "IMAX"]
            },
            {
                cine: "CineBloom Norte",
                horarios: ["16:00", "19:15", "22:00"],
                formato: ["2D", "3D"]
            }
        ]
    },
    {
        id: 7,
        titulo: "Un Cuento De Pescadores La Maldición De La Miringua",
        generos: ["Terror"],
        duracion: 93,
        clasificacion: "B 15",
        rating: 8.2,
        director: "Edgar Nito",
        actores: ["Jorge A. Jiménez", "Alejandra Herrera", "Renata Vaca", "Andrés Delgado"],
        sinopsis: "En un pueblo pesquero en el lago de Pátzcuaro comienzan a ocurrir sucesos paranormales, los peces del lago se mueren y los pescadores creen haber visto a un espectro en los alrededores. Cuenta la leyenda que se trata de La Miringua, una encarnación del mal que está aterrorizando al pueblo para castigar a los pecadores y arrastrarlos al fondo del lago. Nadie estará a salvo de la maldición de La Miringua.",
        imagen: "imagenes/Cartelera/Pelicula7.jpg",
        estreno: "2025-05-03",
        trailer: "https://www.youtube.com/watch?v=r_-J0k1qOLo", // Reemplazar con URL real
        salas: [
            {
                cine: "CineBloom Central",
                horarios: ["12:30", "18:00", "21:00"],
                formato: ["2D", "IMAX"]
            },
            {
                cine: "CineBloom Plaza",
                horarios: ["15:00", "18:15", "21:30"],
                formato: ["IMAX"]
            },
            {
                cine: "CineBloom Norte",
                horarios: ["13:00", "16:15", "22:00"],
                formato: ["2D", "3D"]
            }
        ]
    },
    {
        id: 8,
        titulo: "BjöRk Cornucopia",
        generos: ["Musical"],
        duracion: 120,
        clasificacion: "TDB",
        rating: 8.5,
        director: "Isold Uggadóttir",
        actores: ["Björk", "Viibra Flutes", "Manu Delago", "Bergur Þórisson"],
        sinopsis: "Esta experiencia cinematográfica sin precedentes transporta a los espectadores al corazón del espectacular universo escénico de Björk, desplegando un viaje musical que recorre desde sus legendarios éxitos iniciales hasta las revolucionarias obras Utopia (2017) y Fossora (2023). El espectáculo deslumbra con instrumentos únicos creados exclusivamente para la artista —el arpa magnética, la flauta circular, el alufón y la cámara nde reverberación— mientras Björk brilla en escena rodeada de talentos extraordinarios: el director musical y multiinstrumentista Bergur Þórisson, el percusionista Manu Delago, el septeto de flautas Viibra, la arpista Katie Buckley y el coro Hamrahlid. Las cortinas digitales animadas crean una moderna linterna mágica para la música en vivo, transformando las vanguardistas imágenes de realidad virtual del siglo XXI en la majestuosidad de un teatro decimonónico, ahora potenciada por la inmersión total del meticuloso sonido espacial Dolby Atmos.",
        imagen: "imagenes/Cartelera/Pelicula8.jpg",
        estreno: "2025-05-07",
        trailer: "https://youtu.be/awsMKijTZ1E", // Reemplazar con URL real
        salas: [
            {
                cine: "CineBloom Central",
                horarios: ["16:30", "18:00", "21:00"],
                formato: ["2D"]
            },
            {
                cine: "CineBloom Plaza",
                horarios: ["17:00", "18:30", "21:30"],
                formato: ["IMAX"]
            },
            {
                cine: "CineBloom Norte",
                horarios: ["15:00", "18:15", "22:00"],
                formato: ["2D"]
            }
        ]
    },
    {
        id: 9,
        titulo: "Loco Por Ella",
        generos: ["Comedia"],
        duracion: 97,
        clasificacion: "B",
        rating: 6.5,
        director: "Rodrigo Nava",
        actores: ["Cassandra Sanchéz Navarro", "Minnie West", "Daniel Haddad", "Diego Klein"],
        sinopsis: "Álvaro (Diego Klein) cree fervientemente en que ¿si quieres, puedes?, en que todo está en la mente y que con ¿echarle ganas? las cosas salen bien. La vida le da una lección cuando en una sola noche se enamora perdidamente de Carla (Minnie West), una chica bipolar. Sumergido en su recuerdo y las ganas de volverla a ver, Álvaro descubre que está internada en un centro psiquiátrico y se ingresa con la esperanza de que Carla esté ahí por error. Adentro conoce a Saúl, Martha, Víctor y otros amigos que le ayudarán a entender que si en verdad quiere estar con ella tendrá que hacer algo más que echarle ganas.",
        imagen: "imagenes/Cartelera/Pelicula9.jpg",
        estreno: "2025-04-17",
        trailer: "https://www.youtube.com/watch?v=BD_KhNipZmA", // Reemplazar con URL real
        salas: [
            {
                cine: "CineBloom Central",
                horarios: ["12:30", "14:00", "17:00"],
                formato: ["2D"]
            },
            {
                cine: "CineBloom Plaza",
                horarios: ["13:00", "15:30", "18:30"],
                formato: ["2D"]
            },
            {
                cine: "CineBloom Norte",
                horarios: ["15:00", "18:15", "22:00"],
                formato: ["2D"]
            }
        ]
    },
    {
        id: 10,
        titulo: "Pecadores",
        generos: ["Thriller"],
        duracion: 137,
        clasificacion: "B15",
        rating: 9.0,
        director: "Ryan Coogler",
        actores: ["Hailee Steinfield", "Michael B. Jordan", "Jack O´Connell", "Wunmi Mosaku"],
        sinopsis: "De Ryan Coogler, director de “Pantera Negra” y “Creed”, y protagonizada por Michael B. Jordan, llega una nueva visión del miedo: “Pecadores”. Intentando dejar atrás sus vidas problemáticas, dos hermanos gemelos (Jordan) regresan a su ciudad natal para comenzar de nuevo, solo para descubrir que un mal aún mayor los espera para darles la bienvenida. Si sigues bailando con el diablo, algún día te seguirá hasta tu casa.",
        imagen: "imagenes/Cartelera/Pelicula10.jpg",
        estreno: "2025-04-17",
        trailer: "https://www.youtube.com/watch?v=wAxwRnRvGXc", // Reemplazar con URL real
        salas: [
            {
                cine: "CineBloom Central",
                horarios: ["15:30", "18:00", "20:00"],
                formato: ["2D", "IMAX"]
            },
            {
                cine: "CineBloom Plaza",
                horarios: ["17:00", "18:30", "20:30"],
                formato: ["2D", "3D", "IMAX"]
            },
            {
                cine: "CineBloom Norte",
                horarios: ["15:00", "18:15", "22:00"],
                formato: ["2D", "IMAX"]
            }
        ]
    },
    {
        id: 11,
        titulo: "Apocalipsis Zombie: Paciente Z",
        generos: ["Terror"],
        duracion: 89,
        clasificacion: "C",
        rating: 6.4,
        director: "David Moreau",
        actores: ["Lucille Guillaume", "Laurie Pauvy", "Milton Riche"],
        sinopsis: "Romain acaba de cumplir años y se encuentra ansioso por celebrarlo planeando una gran fiesta con su novia y amigos. Antes de unirse a la fiesta, decide hacer una rápida parada en la casa de su dealer para probar una nueva droga que promete añadir un toque desenfrenado a su noche. Sin embargo, en su camino de regreso, su divertida velada da un giro siniestro cuando se detiene a ayudar a una mujer herida en medio de la carretera la cual es presa del pánico y se golpea la cabeza hasta morir. A medida que pasa la noche, Romain cada vez se siente más extraño y entre el shock y la angustia, comienza a preguntar si sus síntomas son a causa de las drogas o de algo más oscuro que está a punto de desatarse.",
        imagen: "imagenes/Cartelera/Pelicula11.jpg",
        estreno: "2025-04-10",
        trailer: "https://www.youtube.com/watch?v=H7Jt0snDFfw", // Reemplazar con URL real
        salas: [
            {
                cine: "CineBloom Central",
                horarios: ["16:30", "18:00", "20:00"],
                formato: ["2D"]
            },
            {
                cine: "CineBloom Plaza",
                horarios: ["17:00", "18:30", "20:30"],
                formato: ["2D", "3D"]
            },
            {
                cine: "CineBloom Norte",
                horarios: ["15:00", "18:15", "22:00"],
                formato: ["2D", "3D"]
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