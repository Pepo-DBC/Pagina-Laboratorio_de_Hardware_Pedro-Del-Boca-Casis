const reveals = document.querySelectorAll(".reveal");

function revisarReveals() {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const visible = window.innerHeight - 100;

        if (top < visible) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revisarReveals);
revisarReveals(); // chequeo inicial: si la sección ya está visible al cargar, no depende de que el usuario scrollee primero



const botonAbrir_ft = document.getElementById('btn-ficha');
const botonCerrar_ft = document.getElementById('btn-cerrar-ficha');
const ventanaModal_ft = document.getElementById('modal-ficha');

botonAbrir_ft.addEventListener('click', function () {
 
    ventanaModal_ft.showModal();
});

botonCerrar_ft.addEventListener('click', function () {
    
    ventanaModal_ft.close();
});


const botonAbrir = document.getElementById('btn-diagnostico');
const botonCerrar = document.getElementById('btn-cerrar-layout');
const ventanaModal = document.getElementById('modal-layout');

botonAbrir.addEventListener('click', function () {
 
    ventanaModal.showModal();
});

botonCerrar.addEventListener('click', function () {
    
    ventanaModal.close();
});


const botonAbrir_id1 = document.getElementById('btn-investigacion');
const botonCerrar_id1 = document.getElementById('btn-cerrar-expli');
const ventanaModal_id1 = document.getElementById('modal-investigacion');

botonAbrir_id1.addEventListener('click', function () {
    ventanaModal_id1.showModal();
});

botonCerrar_id1.addEventListener('click', function () {

    ventanaModal_id1.close()
});


const botonAbrir_id2 = document.getElementById('btn-investigacion2');
const botonCerrar_id2 = document.getElementById('btn-cerrar-expli2');
const ventanaModal_id2 = document.getElementById('modal-investigacion2');

botonAbrir_id2.addEventListener('click', function () {
    ventanaModal_id2.showModal();
});

botonCerrar_id2.addEventListener('click', function () {

    ventanaModal_id2.close()
});

const botonAbrir_id3 = document.getElementById('btn-investigacion3');
const botonCerrar_id3 = document.getElementById('btn-cerrar-expli3');
const ventanaModal_id3 = document.getElementById('modal-investigacion3');

botonAbrir_id3.addEventListener('click', function () {
    ventanaModal_id3.showModal();
});

botonCerrar_id3.addEventListener('click', function () {

    ventanaModal_id3.close()
});

const botonAbrir_id4 = document.getElementById('btn-investigacion4');
const botonCerrar_id4 = document.getElementById('btn-cerrar-expli4');
const ventanaModal_id4 = document.getElementById('modal-investigacion4');

botonAbrir_id4.addEventListener('click', function () {
    ventanaModal_id4.showModal();
});

botonCerrar_id4.addEventListener('click', function () {

    ventanaModal_id4.close()
});

const botonAbrir_id5 = document.getElementById('btn-investigacion5');
const botonCerrar_id5 = document.getElementById('btn-cerrar-expli5');
const ventanaModal_id5 = document.getElementById('modal-investigacion5');

botonAbrir_id5.addEventListener('click', function () {
    ventanaModal_id5.showModal();
});

botonCerrar_id5.addEventListener('click', function () {

    ventanaModal_id5.close()
});

const botonAbrir_id6 = document.getElementById('btn-investigacion6');
const botonCerrar_id6 = document.getElementById('btn-cerrar-expli6');
const ventanaModal_id6 = document.getElementById('modal-investigacion6');

botonAbrir_id6.addEventListener('click', function () {
    ventanaModal_id6.showModal();
});

botonCerrar_id6.addEventListener('click', function () {

    ventanaModal_id6.close()
});

const botonAbrir_pres_c1 = document.getElementById('btn-presupuesto_c1');
const botonCerrar_pres_c1 = document.getElementById('btn-cerrar-presupuesto_c1');
const ventanaModal_pres_c1 = document.getElementById('modal-presupuesto_c1');

botonAbrir_pres_c1.addEventListener('click', function () {
    ventanaModal_pres_c1.showModal();
});

botonCerrar_pres_c1.addEventListener('click', function () {
    ventanaModal_pres_c1.close();
});

const botonAbrir_pres_c2 = document.getElementById('btn-presupuesto_c2');
const botonCerrar_pres_c2 = document.getElementById('btn-cerrar-presupuesto_c2');
const ventanaModal_pres_c2 = document.getElementById('modal-presupuesto_c2');

botonAbrir_pres_c2.addEventListener('click', function () {
    ventanaModal_pres_c2.showModal();
});

botonCerrar_pres_c2.addEventListener('click', function () {
    ventanaModal_pres_c2.close();
});

const botonAbrir_soldadura = document.getElementById('btn-soldadura');
const botonCerrar_soldadura = document.getElementById('btn-cerrar-soldadura');
const ventanaModal_soldadura = document.getElementById('modal-mantenimiento_soldadura');

botonAbrir_soldadura.addEventListener('click', function () {
    ventanaModal_soldadura.showModal();
});

botonCerrar_soldadura.addEventListener('click', function () {
    ventanaModal_soldadura.close();
});




/* --- MENÚ DESPLEGABLE (MOBILE) --- */

const botonMenuMovil = document.getElementById('btn-menu-movil');
const listaNav = document.getElementById('nav-lista');

botonMenuMovil.addEventListener('click', function () {
    const abierto = listaNav.classList.toggle('abierto');
    botonMenuMovil.setAttribute('aria-expanded', abierto ? 'true' : 'false');
});

/* Cerrar el menú al tocar un link */
listaNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        listaNav.classList.remove('abierto');
        botonMenuMovil.setAttribute('aria-expanded', 'false');
    });
});

/* Cerrar el menú si se toca afuera de él */
document.addEventListener('click', (e) => {
    const clickDentroDelNav = e.target.closest('nav');
    if (!clickDentroDelNav && listaNav.classList.contains('abierto')) {
        listaNav.classList.remove('abierto');
        botonMenuMovil.setAttribute('aria-expanded', 'false');
    }
});


/* --- ETAPA 7: LÓGICA DEL MODO OSCURO (ESTILO SUTIL) --- */

/* 1. Capturamos el nodo del botón flotante */
const botonTema = document.getElementById('btn-tema');

/* 2. Escuchamos el evento de clic */
botonTema.addEventListener('click', function () {

    /* El método toggle inyecta o retira la clase 'modo-oscuro' del body */
    document.body.classList.toggle('modo-oscuro');

    /* Lógica Condicional (If/Else): Evaluamos qué ícono mostrar */
    if (document.body.classList.contains('modo-oscuro')) {
        /* Si el modo oscuro está activo, cambiamos el texto por un sol */
        botonTema.textContent = '☀';
    } else {
        /* Si el modo oscuro se apagó, volvemos a la luna */
        botonTema.textContent = '☽';
    }
});


/* --- ETAPA 10: LÓGICA DEL SEGUIDOR DE CURSOR --- */

// 1. Capturamos el nodo del círculo
const seguidor = document.getElementById('cursor-follower');

// 2. Escuchamos el evento global de movimiento del mouse en todo el documento
document.addEventListener('mousemove', (e) => {
    // El objeto 'e' (evento) contiene la información enviada por el hardware
    // Capturamos las coordenadas exactas en los ejes X (horizontal) e Y (vertical)
    const x = e.clientX;
    const y = e.clientY;

    // Inyectamos esas coordenadas en el CSS del círculo usando Template Literals (comillas invertidas)
    seguidor.style.left = `${x}px`;
    seguidor.style.top = `${y}px`;
});



