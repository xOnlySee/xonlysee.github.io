/*
    @author Jesús Escudero Gabarre
    Archivo .js donde añadiremos la funcionabilidad y el contenido de la página web
*/

/**
 * Función encargada de cargar el contenido en el panel derecho de la página web
 * @param {string} contenido - Variable de tipo string que reprenta el contenido a mostrar en el panel derecho
 */
function cambiarContenido(contenido) {
    const panelDerecho = document.getElementById('contenido');

    //Aplicamos estilos de animación al panel derecho
    panelDerecho.style.opacity = '0';
    panelDerecho.style.transform = 'translateX(20px)';

    //Añadimos un time-out para esperar a que termine la animación
    setTimeout(() => {
        if (contenido === 'jesus') {
            jesus(panelDerecho);
        } else if (contenido === 'sobremi') {
            sobremi(panelDerecho);
        } else if (contenido === 'portfolio') {
            portfolio(panelDerecho);
        } else if (contenido === 'educacion') {
            educacion(panelDerecho);
        } else if (contenido === 'contacto') {
            contacto(panelDerecho);
        } else if (contenido === 'skills') {
            skills(panelDerecho);
        }

        //Restauramos los estiiilos del panel derecho
        panelDerecho.style.opacity = '1';
        panelDerecho.style.transform = 'translateX(0)';
    }, 300);
}

/**
 * Función encargada de mostrar el contenido relacionado con la información personal
 * @param {HTMLElement} panel - Contenido que mostrará la información básica
 */
function jesus(panel) {
    panel.innerHTML = `
        <h1>JESÚS ESCUDERO GABARRE</h1>
        <br>
        <h3>BIENVENIDO A MI PORTFOLIO</h3>
        <br>
        <p>Si quieres ponerte en contacto conmigo, escribeme a mi correo electrónico: <a href="mailto:jesusmateo1199@gmail.com">jesusmateo1199@gmail.com</a><br><br><br><a class="download-CV" href="archivos/documentos/CV_Jesus Escudero Gabarre.pdf" download="CV">Descarga mi CV</a>
        <br><br><br>
        <br><br>
        <a href="https://www.linkedin.com/in/jes%C3%BAs-escudero-gabarre-0741581ab/"><i class="fa-brands icon fa-linkedin icons"></i></a>
        &nbsp;&nbsp;
        <a href="https://github.com/xOnlySee/xOnlySee"><i class="fa-brands icon fa-github icons"></i></a>
    `;
}

/**
 * Función encargada de mostrar el contenido relacionado con la información sobre mí
 * @param {HTMLElement} panel - Contenido que mostrará la información relacionada sobre mí
 */
function sobremi(panel) {
    panel.innerHTML = `
        <h1>SOBRE MI</h1>
        <p>Programador Junior | Desarrollador de Aplicaciones 👨🏻‍💻 Apasionado por la programación y la resolución de desafíos tecnológicos.Con dos títulos en mi haber - grado medio en Sistemas Microinformáticos y Redes, y grado superior en Desarrollo de Aplicaciones Multiplataforma - mi enfoque se ha centrado en convertir la lógica en soluciones innovadoras. Como programador Junior, he adquirido valiosa experiencia trabajando con una variedad de tecnologías y lenguajes. Mi destreza incluye el manejo experto de bases de datos como FireBase, MySQL y PostrgreSQL, así como el dominio de lenguajes como Java, C# y Python. Además, mi curiosidad y sed de conocimiento me han llevado a explorar herramientas como VisualBasic, React, JavaScript y TypeScript, ampliando mi conjunto de habilidades y abriendo nuevas posibilidades para la resolución de problemas. Durante tres enriquecedores meses, me sumergí en el uso de SharePoint de Microsoft, ampliando mi comprensión de soluciones empresariales y su integración tecnológica.Mi enfoque en el aprendizaje continuo se refleja en mis proyectos personales. Actualmente, me embarco en el desarrollo de una aplicación Android en mis momentos libres, una oportunidad para expandir mis habilidades y profundizar en el mundo del desarrollo móvil. Más allá del código, disfruto de mi tiempo con mis mascotas, mi familia y amigos, y encuentro inspiración en la música. Estoy emocionado por seguir creciendo profesionalmente en el mundo de la programación, enfrentando nuevos desafíos y contribuyendo a soluciones innovadoras.<br><h4>ACTUALMENTE ME ENCUENTRO EN BUSQUEDA ACTIVA DE EMPLEO</h4><br><p>Mira mi perfil completo en <a href="https://www.linkedin.com/in/jes%C3%BAs-escudero-gabarre-0741581ab/">Linkedin</p>
    `;
}

/**
 * Función encargada de mostrar el contenido relacionado con el portfolio
 * @param {HTMLElement} panel - Contenido que mostará la información relacionada con los proyectos realizados por mí
 */
function portfolio(panel) {
    panel.innerHTML = `
        <div class="projects">
            <div class="project" onclick="zoomProjects(this)">
                <img src="archivos/imagenes/Practica_SMR.png" alt="Proyecto 1">
                <div class="project-details">
                    <h3>Práctica final gradio medio (SMR): Redes Locales</h3>
                    <p>Desarrollo y documentación detallada de una infraestructura de red de varios edificios...</p>
                    <a href="https://github.com/xOnlySee/RedesLocales/tree/main">Enlace a GitHub</a>
                </div>
            </div>
            
            <div class="project" onclick="zoomProjects(this)">
                <img src="archivos/imagenes/Practica_CRM.png" alt="Proyecto 2">
                <h3>Práctica final grado superior: Sistemas de Gestión Empresarial</h3>
                <p>Práctica que consistía en realizar el desarrollo (tanto de la lógica como la GUI) de un CRM utilizando el lenguaje de programación Python y la librería Tkinter para la elaboración de la interfáz. Como base de datos utilice SQLite. Toda la documentación (así como el código) se podrá encontrar en mi repositorio.</p>
                <a href="https://github.com/xOnlySee/CRM/tree/main">Enlace a GitHub</a>
            </div>

            <div class="project" onclick="zoomProjects(this)">
                <img src="archivos/imagenes/Practica_TFG.jpg" alt="Proyecto 3">
                <h3>TFG  grado superior: Only Music</h3>
                <p>Práctica final que conssistia en el desarrollo, documentación y verificación de pruebas de una aplicación Android creada por mí. La funcionalidad de la aplicación consiste en que los usuarios puedan iniciar sesión, crear cuentas... para poder editar su perfil, escuchar las canciones almacenadas en su dispositivo, poder disfrutar de la biblioteca de artistas (con información de ellos mísmos) y realizar publicaciones y visualizar la de otros usuarios.</p>
                <a href="https://github.com/xOnlySee/Only-Music">Enlace a GitHub</a>
            </div>

            <div class="project" onclick="zoomProjects(this)">
                <img src="archivos/imagenes/BlackBox.png" alt="Proyecto 4">
                <h3>Black Box</h3>
                <p>Aplicación móvil que me encuentro desarrollando a largo plazo para fortalecer y aprender nuevos conocmientos del desarrollo Android.</p>
                <a href="https://github.com/xOnlySee/BlackBox">Enlace a GitHub</a>
            </div>
        </div>
    `;
}

/**
 * Función encargada de mostrar el contenido relacionado con la educación por medio de botones
 */
function educacion() {
    const contentPanel = document.getElementById('contenido');
    contentPanel.innerHTML = `
        <div id="buttonsPanel" style="display: block; text-align: center; margin-bottom: 20px;">
            <button onclick="mostrarTitulos()" style="background-color: #444444; color: #fff; border: none; padding: 10px 20px; cursor: pointer; transition: background-color 0.3s ease-in-out; margin: 0 10px; border-radius: 5px; font-size: 16px;">Títulos</button>
            <button onclick="mostrarExperiencias()" style="background-color: #444444; color: #fff; border: none; padding: 10px 20px; cursor: pointer; transition: background-color 0.3s ease-in-out; margin: 0 10px; border-radius: 5px; font-size: 16px;">Experiencias</button>
            <button onclick="mostrarCertificados()" style="background-color: #444444; color: #fff; border: none; padding: 10px 20px; cursor: pointer; transition: background-color 0.3s ease-in-out; margin: 0 10px; border-radius: 5px; font-size: 16px;">Certificados</button>
        </div>
        
        <div id="contentPanel" style="display: none;"></div>
        <h1 style="text-align: center">Seleccione una categoría para obtener más información</h1>
    
    `;
}

/**
 * Función encargada de mostrar las formas de contacto
 * @param {HTMLElement} panel - Contenido que mostrará las formas de contacto
 */
function contacto(panel) {
    panel.innerHTML = `
        <h1>CONTACTO</h1>
        <br>
        <i class="fa-solid icon fa-envelope"></i> Email: <a href="mailto:jesusmateo1199@gmail.com">jesusmateo1199@gmail.com</a>
        <br>
        <br>
        <br>
        <i class="fa-solid icon fa-phone"></i>Número de teléfono: 667 86 44 67
        <br>
        <br>
        <br>
        <i class="fa-brands icon fa-linkedin"></i> <a href="https://www.linkedin.com/in/jes%C3%BAs-escudero-gabarre-0741581ab/">Jesús Escudero Gabarre</a>
    `;
}

/**
 * Función encargada de mostrar los conocimientos que tengo
 * @param {HTMLElement} panel - Contenido que mostrará algunos de los conocimientos que conozco
 */
function skills(panel) {
    panel.innerHTML = `
        <div style="background-color: #333; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <h1>SKILLS</h1>
            
            <div class="category">
                <h3>LENGUAJES DE PROGRAMACIÓN</h3>
                <ul style="list-style: none; padding: 0;">
                    <li style="font-size: 16px; margin-bottom: 5px">Java</li>
                    <li style="font-size: 16px; margin-bottom: 5px">Python</li>
                    <li style="font-size: 16px; margin-bottom: 5px">C#</li>
                    <li style="font-size: 16px; margin-bottom: 5px">Javascript</li>
                    <li style="font-size: 16px; margin-bottom: 5px">Typescript</li>
                </ul>
            </div>

            <div class="category">
                <h3>BASES DE DATOS</h3>
                <ul style="list-style: none; padding: 0;">
                    <li style="font-size: 16px; margin-bottom: 5px">MySQL</li>
                    <li style="font-size: 16px; margin-bottom: 5px">PostgreSQL</li>
                    <li style="font-size: 16px; margin-bottom: 5px">SQLite</li>
                    <li style="font-size: 16px; margin-bottom: 5px">FireBase</li>
                </ul>
            </div>

            <div class="category">
                <h3>HERRAMIENTAS</h3>
                <ul style="list-style: none; padding: 0;">
                    <li style="font-size: 16px; margin-bottom: 5px">Zeal</li>
                    <li style="font-size: 16px; margin-bottom: 5px">Visual Studio Code</li>
                    <li style="font-size: 16px; margin-bottom: 5px">GitHub</li>
                </ul>
            </div>
        </div>
    `;
}

/**
 * Función que se encargará de mostrar los títulos que tengo (una vez que se haya pulsado su respectivo botón)
 */
function mostrarTitulos() {
    const contentPanel = document.getElementById('contentPanel');
    contentPanel.innerHTML = `
        <h2 style="text-align: center">Títulos</h2>
        <div>
            <h3>Grado superior de Desarrollo de Aplicaciones Multiplataforma</h3>
            <h4>San Viator, Valladolid</h4>
            <p>Septimebre 2021 - Junio 2023</p>
            <p>Grado orienteado al desarrollo de la lógica de proyectos informáticos. Mis principales conocimientos se basan en conocimientos de lenguaje de programación (Java, Python y C#), desarrollo de aplicaciones informáticas (desarrollo de aplicaciones Android, programas para Windows usando C#, Java y Python), manejo de bases de datos relaciones (MySQL, PostgreSQL, SQLite) como bases de datos no relacionales.</p>
        </div>
        <div>
            <p>------------------------------------------</p>
            <h3>Grado medio de Técnico en Sistemas Microinformáticos y Redes</h3>
            <h4>Centro Didáctico, Valladolid</h4>
            <p>Septiembre 2019 - Junio 2021</p>
            <p>Grado orientado al conocimiento y al mantenimiento de equipos informáticos, así como en el mantenimiento y creación de redes informáticas. Durante ese año aprendí conocimientos de hardware y software y del manejo de distintas distribucciones GNU/Linux (Ubuntu, Fedora, Debian...).</p>
        </div>
    `;
    contentPanel.style.display = 'block';
}

/**
 * Función que se encargará de mostrar las distintas experiencia que tengo (una vez que se haya pulsado su respectivo botón)
 */
function mostrarExperiencias() {
    const contentPanel = document.getElementById('contentPanel');
    contentPanel.innerHTML = `
        <h2 style="text-align: center">Prácticas</h2>
        <div>
            <h3>Grado superior de Desarrollo de Aplicaciones Multiplataforma</h3>
            <h4>Hiberus, Valladolid</h4>
            <p>Marzo 2023 - Septiembre 2023</p>
            <p>Prácticas realizadas en la empresa Hiberus. Durante los primeros tres meses me he estado formando (por medio de cursos y proyectos) en la tecnologiá RPA (Automatización de procesos) donde he usado la herramienta "UiPath". EI resto de mi periodo en dicha empresa me he formando con el producto "SharePoint" de Microsoft y he estado usando las tecnologias React, JavaScript y TypeScript para la creación de WebParts.</p>
        </div>
        <div>
            <p>------------------------------------------</p>
            <h3>Grado medio de Técnico en Sistemas Microinformáticos y Redes</h3>
            <h4>D-Repente (Soluciones Informáticas), Valladolid</h4>
            <p>Marzo 2021 - Junio 2021</p>
            <p>Prácticas realizadas en la tienda D-Repente (Parquesol). Durante los tres meses he estado realizando tareas básicas de mantenimiento de software y hardware.</p>
        </div>
    `;
    contentPanel.style.display = 'block';
}

/**
 * Función que se encargará de mostar los distintos certificados que tengo (una vez que se hauya pulsado su respectivo botón)
 */
function mostrarCertificados() {
    const contentPanel = document.getElementById('contentPanel');
    contentPanel.innerHTML = `
        <h2 style="text-align: center">Certificados</h2>
        <div>
            <h3 style="color: #fff;">Producción de elementos mecánicos</h3>
            <h4 style="color: #ddd;">Factoría de motores Renault, Valladolid</h4>
            <p style="color: #ddd;">Noviembre 2023 - Diciembre 2023</p>
            <p style="color: #ddd;">Curso desarrollado por el grupo Horse (Renault). Durante el tiempo impartido por el curso obtuve conocimientos teóricos y prácticos sobre los distintos elementos mecánicos.</p>
            <button id="certificadoHorse" onclick="abrirCertificadoHorse()" style="background-color: #444444; color: #fff; border: none; padding: 10px 20px; cursor: pointer; transition: background-color 0.3s ease-in-out; border-radius: 5px; font-size: 14px;">Visualizar certificado</button>
        </div>
        <div style="margin-top: 20px;">
            <h3 style="color: #fff;">PRL (Prevención de Riesgos Laborales)</h3>
            <h4 style="color: #ddd;">Centro Didáctico</h4>
            <p style="color: #ddd;">Junio 2020</p>
            <p style="color: #ddd;">Curso de 50 horas obtenido durante mi estancia en Centro Didáctico.</p>
            <button id="certificadoPRL" onclick="abrirCertificadoPRL()" style="background-color: #444444; color: #fff; border: none; padding: 10px 20px; cursor: pointer; transition: background-color 0.3s ease-in-out; border-radius: 5px; font-size: 14px;">Visualizar certificado</button>
        </div>
        `;
    contentPanel.style.display = 'block';
}

/**
 * Funcionalidad añadida a su recpectivo botón para que el usuario pueda visualizar el certificado de "Horse"
 */
function abrirCertificadoHorse() {
    window.open("archivos/documentos/474007-71382197H-121223.pdf", "_blank");
}

/**
 * Funcionalidad añadida a su respectivo botón para que el usuario pueda visualizar el certificado de prevención de riesgos laborales
 */
function abrirCertificadoPRL() {
    window.open("archivos/documentos/CERTIFICADO PRL.pdf", "_blank");
}

/**
 * Función encargada de realizar las distintos efectos de zoom sobre el proyecto que el usuario haya pulsado
 * @param {HTMLElement} project - Proyecto sobre el cual aplicar el efecto de zoom
 */
function zoomProjects(project) {
    const projectsContainer = document.querySelector('.projects');

    //En caso de que el proyecto no tenga la clase "zoomed" (no tiene zoom aplicado)
    if (!project.classList.contains('zoomed')) {
        //Añadimos el zoom
        project.classList.add('zoomed');
        projectsContainer.classList.add('zoomed');

    //En cualquier otro caso
    } else {
        //Quitamos el zoom del proyecto seleccionado
        project.classList.remove('zoomed');
        projectsContainer.classList.remove('zoomed');
    }
}

//Quita el zoom sobre el proyecto en caso de que se pulse fuera del proyecyo
document.addEventListener('click', function (event) {
    const projects = document.querySelectorAll('.project.zoomed');
    projects.forEach((project) => {
        if (!project.contains(event.target)) {
            project.classList.remove('zoomed');
        }
    });
});
