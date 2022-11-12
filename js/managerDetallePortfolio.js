/*
En una nueva landing plantilla realizar:
Segun que trabajo se clickee en el portfolio del index mostrar imagenes + videos + descripción + iconos de programas utilizados + shared social media buttons + next job de este mismo en la landing plantilla

1- crear una plantilla con la estructura basica de porfolio (ok)
2- que se pueda mostrar imagen/ carrusel de imagenes (ok)
3- que se pueda mostrar video / carrusel video (ok)
4- que tenga botones para compartir ese trabajo (no)
5- reemplazar el contenido que tenga la plantilla anteriormente (ok)
6- que se pueda volver al index (boton turut) (ok)
7- que se pueda pasar al siguiente trabajo (ok)
8- que sea responsive

//-------------------------------------------------------------------------------------------------------------------------------------------- */
/* Averiguamos y tomamos el url */
var input_string = window.location.href;
var url = new URL(input_string);
var proyectoElegido = url.searchParams.get("proyectoElegido");
console.log(proyectoElegido);
/* tomamos todos los elementos para ser modificados segun la situación */
let contenedorInicial = document.getElementById("contenedorInicial");
let flechaNavSuperiorIzquierda = document.getElementById(
  "flechaNavSuperiorIzquierda"
);
let flechaNavSuperiorDerecha = document.getElementById(
  "flechaNavSuperiorDerecha"
);
let tituloNavSuperior = document.getElementById("navTrabajosTitularesSuperior");
let flechaNavInferiorIzquierda = document.getElementById(
  "flechaNavInferiorIzquierda"
);
let flechaNavInferiorDerecha = document.getElementById(
  "flechaNavInferiorDerecha"
);
let tituloNavInferior = document.getElementById("navTrabajosTitularesInferior");
let tituloTrabajo = document.getElementById("tituloTrabajo");
let parrafoDetalles = document.getElementById("parrafoDetalles");
let iconSoft = document.getElementById("iconSoft");
let logoHome = document.getElementById("enlaceHome");
let pantallaGraficos = document.getElementById("pantallaGraficos");

switch (proyectoElegido) {
  //CASOS DE GRAFICO
  case "grafico1":
    pantallaGraficos.innerHTML = `
    <section
    id="slider1"
    class="splide"
    aria-labelledby="carousel-heading"
  >
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/1-grafico-loi/turut-multimedia-loi-medioambiente1.webp"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/1-grafico-loi/turut-multimedia-loi-medioambiente2.webp"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/1-grafico-loi/turut-multimedia-loi-medioambiente3.webp"
            alt=""
          />
        </li>
      </ul>
    </div>
  </section>`;
    crearSlider1();
    flechaNavSuperiorIzquierda.href =
      "programacion.html?proyectoElegido=programacion11";
    flechaNavInferiorIzquierda.href =
      "programacion.html?proyectoElegido=programacion11";
    flechaNavSuperiorDerecha.href = "grafico.html?proyectoElegido=grafico2";
    flechaNavInferiorDerecha.href = "grafico.html?proyectoElegido=grafico2";
    tituloTrabajo.innerHTML = "Loi Medioambiente";
    parrafoDetalles.innerHTML =
      "Fotomontajes e ilustraciones realizadas para la marca Loi";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/photoshop.webp" alt="" srcset=""/>`;
    break;
  case "grafico2":
    pantallaGraficos.innerHTML = `
    <img
    src="img/otrasPaginas/disGraf/2-grafico-playa/turut-multimedia-retoque-playa.jpg"
    alt=""
    class="img-responsive"
  />`;

    flechaNavSuperiorIzquierda.href = "grafico.html?proyectoElegido=grafico1";
    flechaNavInferiorIzquierda.href = "grafico.html?proyectoElegido=grafico1";
    flechaNavSuperiorDerecha.href = "grafico.html?proyectoElegido=grafico3";
    flechaNavInferiorDerecha.href = "grafico.html?proyectoElegido=grafico3";
    tituloTrabajo.innerHTML = "Playa limpia";
    parrafoDetalles.innerHTML =
      "Retoque digital con el fin de borrar las personas en la playa.";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/photoshop.webp" alt="" srcset=""/>`;
    break;
  case "grafico3":
    pantallaGraficos.innerHTML = `
    <img
    class="img-responsive-50"
    src="img/otrasPaginas/disGraf/3-grafico-nintendo/turut-multimedia-nintendo-3ds.jpg"
    alt=""
  />
    `;
    flechaNavSuperiorIzquierda.href = "grafico.html?proyectoElegido=grafico2";
    flechaNavInferiorIzquierda.href = "grafico.html?proyectoElegido=grafico2";
    flechaNavSuperiorDerecha.href = "grafico.html?proyectoElegido=grafico4";
    flechaNavInferiorDerecha.href = "grafico.html?proyectoElegido=grafico4";
    tituloTrabajo.innerHTML = "Mario Kart - Nintendo 3DS XL";
    parrafoDetalles.innerHTML =
      "Fotomontaje del juego Mario Kart para promocionar la nueva consola de Nintendo Nintendo DS XL";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/photoshop.webp" alt="" srcset=""/>`;
    break;
  case "grafico4":
    pantallaGraficos.innerHTML = `
    <section
    id="slider2"
    class="splide"
    aria-labelledby="carousel-heading"
  >
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/4-grafico-foodketingBrochure/turut-multimedia-1foodketing-brochure-2021.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/4-grafico-foodketingBrochure/turut-multimedia-2foodketing-brochure-2021.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/4-grafico-foodketingBrochure/turut-multimedia-3foodketing-brochure-2021.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/4-grafico-foodketingBrochure/turut-multimedia-4foodketing-brochure-2021.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/4-grafico-foodketingBrochure/turut-multimedia-5foodketing-brochure-2021.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/4-grafico-foodketingBrochure/turut-multimedia-6foodketing-brochure-2021.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/4-grafico-foodketingBrochure/turut-multimedia-7foodketing-brochure-2021.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/4-grafico-foodketingBrochure/turut-multimedia-8foodketing-brochure-2021.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/4-grafico-foodketingBrochure/turut-multimedia-9foodketing-brochure-2021.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/4-grafico-foodketingBrochure/turut-multimedia-10foodketing-brochure-2021.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/4-grafico-foodketingBrochure/turut-multimedia-11foodketing-brochure-2021.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/4-grafico-foodketingBrochure/turut-multimedia-12foodketing-brochure-2021.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/4-grafico-foodketingBrochure/turut-multimedia-13foodketing-brochure-2021.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/4-grafico-foodketingBrochure/turut-multimedia-14foodketing-brochure-2021.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/4-grafico-foodketingBrochure/turut-multimedia-15foodketing-brochure-2021.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/4-grafico-foodketingBrochure/turut-multimedia-16foodketing-brochure-2021.jpg"
            alt=""
          />
        </li>
      </ul>
    </div>
  </section>
    `;
    crearSlider2();
    flechaNavSuperiorIzquierda.href = "grafico.html?proyectoElegido=grafico3";
    flechaNavInferiorIzquierda.href = "grafico.html?proyectoElegido=grafico3";
    flechaNavSuperiorDerecha.href = "grafico.html?proyectoElegido=grafico5";
    flechaNavInferiorDerecha.href = "grafico.html?proyectoElegido=grafico5";
    tituloTrabajo.innerHTML = "Foodketing - Brochure";
    parrafoDetalles.innerHTML =
      "Brochure institucional para la marca de foodketing, creación de diseño y retoque de imagenes basado en su manualde marca.";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/illustrator.webp" alt="" srcset=""/> <img src="img/otrasPaginas/iconosSoft/photoshop.webp" alt="" srcset=""/>`;
    break;
  case "grafico5":
    pantallaGraficos.innerHTML = `
    <section
    id="slider3"
    class="splide"
    aria-labelledby="carousel-heading"
  >
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/5-grafico-cactus/turut-multimedia-cactus-mesa-de-trabajo-1-02.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/5-grafico-cactus/turut-multimedia-cactus.jpg"
            alt=""
          />
        </li>
      </ul>
    </div>
  </section>
  <section class="contenedorIframeYt">
    <iframe
      src="https://www.youtube.com/embed/8uUAi9StBEE"
      title="YouTube video player"
      frameborder="0"
      allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      controlls
      class="iframeYt"
    ></iframe>
  </section>`;
    crearSlider3(); //grafico5
    flechaNavSuperiorIzquierda.href = "grafico.html?proyectoElegido=grafico4";
    flechaNavInferiorIzquierda.href = "grafico.html?proyectoElegido=grafico4";
    flechaNavSuperiorDerecha.href = "grafico.html?proyectoElegido=grafico6";
    flechaNavInferiorDerecha.href = "grafico.html?proyectoElegido=grafico6";
    tituloTrabajo.innerHTML = "Cactus bajo la lluvia ";
    parrafoDetalles.innerHTML =
      "Ilustración en Illustrator y animación en After Effects.";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/illustrator.webp" alt="" srcset=""/>       <img
      src="img/otrasPaginas/iconosSoft/afterEffects.webp"
      alt=""
      srcset=""
    />`;
    break;
  case "grafico6":
    pantallaGraficos.innerHTML = `
    <section
    id="slider4"
    class="splide"
    aria-labelledby="carousel-heading"
  >
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/6-grafico-autoMaya/turut-multimedia-malla-de-auto.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/6-grafico-autoMaya/turut-multimedia-auto-en-malla-2.jpg"
            alt=""
          />
        </li>
      </ul>
    </div>
  </section>
  `;
    crearSlider4();
    flechaNavSuperiorIzquierda.href = "grafico.html?proyectoElegido=grafico5";
    flechaNavInferiorIzquierda.href = "grafico.html?proyectoElegido=grafico5";
    flechaNavSuperiorDerecha.href = "grafico.html?proyectoElegido=grafico7";
    flechaNavInferiorDerecha.href = "grafico.html?proyectoElegido=grafico7";
    tituloTrabajo.innerHTML = "Ferrari en malla";
    parrafoDetalles.innerHTML =
      "Ilustración con malla realizada en Illustrator";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/illustrator.webp" alt="" srcset=""/>`;
    break;
  case "grafico7":
    pantallaGraficos.innerHTML = `
      <section
      id="slider5"
      class="splide"
      aria-labelledby="carousel-heading"
    >
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide">
            <img
              src="img/otrasPaginas/disGraf/7-grafico-assetsAstronauta/astronauta1.jpg"
              alt=""
            />
          </li>
          <li class="splide__slide">
            <img
              src="img/otrasPaginas/disGraf/7-grafico-assetsAstronauta/space1.jpg"
              alt=""
            />
          </li>
          <li class="splide__slide">
            <img
              src="img/otrasPaginas/disGraf/7-grafico-assetsAstronauta/space2.jpg"
              alt=""
            />
          </li>
          <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/7-grafico-assetsAstronauta/space3.jpg"
            alt=""
          />
        </li>
          <li class="splide__slide">
            <img
              src="img/otrasPaginas/disGraf/7-grafico-assetsAstronauta/turut-multimedia-todas-las-pantallas.jpg"
              alt=""
            />
          </li>
        </ul>
      </div>
    </section>
    <section class="contenedorIframeYt">
    <iframe
      src="https://www.youtube.com/embed/aUE8HaaR3kU"
      title="YouTube video player"
      frameborder="0"
      allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      controlls
      class="iframeYt"
    ></iframe>
  </section>
    `;
    crearSlider5();
    flechaNavSuperiorIzquierda.href = "grafico.html?proyectoElegido=grafico6";
    flechaNavInferiorIzquierda.href = "grafico.html?proyectoElegido=grafico6";
    flechaNavSuperiorDerecha.href = "grafico.html?proyectoElegido=grafico8";
    flechaNavInferiorDerecha.href = "grafico.html?proyectoElegido=grafico8";
    tituloTrabajo.innerHTML = "Astronauta y galaxia";
    parrafoDetalles.innerHTML =
      "Ilustración en Illustrator y fondo en Photoshop";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/illustrator.webp" alt="" srcset=""/>       <img src="img/otrasPaginas/iconosSoft/photoshop.webp" alt="" srcset="" />`;
    break;
  case "grafico8":
    pantallaGraficos.innerHTML = `
      <section
      id="slider6"
      class="splide"
      aria-labelledby="carousel-heading"
    >
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide">
            <img
              src="img/otrasPaginas/disGraf/8-grafico-naranjaMecanica/naranjaMecanica1.jpg"
              alt=""
            />
          </li>
          <li class="splide__slide">
            <img
              src="img/otrasPaginas/disGraf/8-grafico-naranjaMecanica/naranjaMecanica2.jpg"
              alt=""
            />
          </li>
        </ul>
      </div>
    </section>
    `;
    crearSlider6();
    flechaNavSuperiorIzquierda.href = "grafico.html?proyectoElegido=grafico7";
    flechaNavInferiorIzquierda.href = "grafico.html?proyectoElegido=grafico7";
    flechaNavSuperiorDerecha.href = "grafico.html?proyectoElegido=grafico9";
    flechaNavInferiorDerecha.href = "grafico.html?proyectoElegido=grafico9";
    tituloTrabajo.innerHTML = "La naranja mecánica";
    parrafoDetalles.innerHTML = "Sintesis de línea y plano en Illustrator";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/illustrator.webp" alt="" srcset=""/>`;
    break;
  case "grafico9":
    pantallaGraficos.innerHTML = `
        <section
        id="slider7"
        class="splide"
        aria-labelledby="carousel-heading"
      >
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide">
              <img
                src="img/otrasPaginas/disGraf/9-grafico-foodketingPlanes/foodketingPlanes1.jpg"
                alt=""
              />
            </li>
            <li class="splide__slide">
              <img
                src="img/otrasPaginas/disGraf/9-grafico-foodketingPlanes/foodketingPlanes2.jpg"
                alt=""
              />
            </li>
            <li class="splide__slide">
              <img
                src="img/otrasPaginas/disGraf/9-grafico-foodketingPlanes/foodketingPlanes3.jpg"
                alt=""
              />
          </li>
          <li class="splide__slide">
            <img
              src="img/otrasPaginas/disGraf/9-grafico-foodketingPlanes/foodketingPlanes4.jpg"
              alt=""
            />
          </li>
          <li class="splide__slide">
            <img
              src="img/otrasPaginas/disGraf/9-grafico-foodketingPlanes/foodketingPlanes5.jpg"
              alt=""
            />
          </li>
          <li class="splide__slide">
            <img
              src="img/otrasPaginas/disGraf/9-grafico-foodketingPlanes/foodketingPlanes6.jpg"
              alt=""
            />
          </li>
          <li class="splide__slide">
            <img
              src="img/otrasPaginas/disGraf/9-grafico-foodketingPlanes/foodketingPlanes7.jpg"
              alt=""
            />
          </li>
          <li class="splide__slide">
            <img
              src="img/otrasPaginas/disGraf/9-grafico-foodketingPlanes/foodketingPlanes8.jpg"
              alt=""
            />
          </li>
        </ul>
        </div>
      </section>
      `;
    crearSlider7();
    flechaNavSuperiorIzquierda.href = "grafico.html?proyectoElegido=grafico8";
    flechaNavInferiorIzquierda.href = "grafico.html?proyectoElegido=grafico8";
    flechaNavSuperiorDerecha.href = "grafico.html?proyectoElegido=grafico10";
    flechaNavInferiorDerecha.href = "grafico.html?proyectoElegido=grafico10";
    tituloTrabajo.innerHTML = "Foodketing Planes";
    parrafoDetalles.innerHTML =
      "Creación de tipos de servicios y costos en ilustrator";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/illustrator.webp" alt="" srcset=""/>`;
    break;
  case "grafico10":
    pantallaGraficos.innerHTML = `
          <section
          id="slider8"
          class="splide"
          aria-labelledby="carousel-heading"
        >
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide">
                <img
                  src="img/otrasPaginas/disGraf/10-grafico-digitalizacionDeClinicas/digitalizacionDeClinicas1.jpg"
                  alt=""
                />
              </li>
              <li class="splide__slide">
                <img
                  src="img/otrasPaginas/disGraf/10-grafico-digitalizacionDeClinicas/digitalizacionDeClinicas2.jpg"
                  alt=""
                />
              </li>
          </ul>
          </div>
        </section>
        `;
    crearSlider8();
    flechaNavSuperiorIzquierda.href = "grafico.html?proyectoElegido=grafico9";
    flechaNavInferiorIzquierda.href = "grafico.html?proyectoElegido=grafico9";
    flechaNavSuperiorDerecha.href = "grafico.html?proyectoElegido=grafico11";
    flechaNavInferiorDerecha.href = "grafico.html?proyectoElegido=grafico11";
    tituloTrabajo.innerHTML = "Digitalización de Clinicas";
    parrafoDetalles.innerHTML = "Diseño de Libro digital en ilustrator";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/illustrator.webp" alt="" srcset=""/>`;
    break;
  case "grafico11":
    pantallaGraficos.innerHTML = `
            <section
            id="slider9"
            class="splide"
            aria-labelledby="carousel-heading"
          >
            <div class="splide__track">
              <ul class="splide__list">
                <li class="splide__slide">
                  <img
                    src="img/otrasPaginas/disGraf/11-grafico-backToFuture/docVolverAlFuturo1.jpg"
                    alt=""
                  />
                </li>
                <li class="splide__slide">
                  <img
                    src="img/otrasPaginas/disGraf/11-grafico-backToFuture/docVolverAlFuturo2.jpg"
                    alt=""
                  />
                </li>
            </ul>
            </div>
          </section>
          `;
    crearSlider9();
    flechaNavSuperiorIzquierda.href = "grafico.html?proyectoElegido=grafico10";
    flechaNavInferiorIzquierda.href = "grafico.html?proyectoElegido=grafico10";
    flechaNavSuperiorDerecha.href = "grafico.html?proyectoElegido=grafico12";
    flechaNavInferiorDerecha.href = "grafico.html?proyectoElegido=grafico12";
    tituloTrabajo.innerHTML = "Doc Volver al futuro";
    parrafoDetalles.innerHTML = "Ilustración realizada en Illustrator";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/illustrator.webp" alt="" srcset=""/>`;
    break;
  case "grafico12":
    pantallaGraficos.innerHTML = `
            <section
            id="slider10"
            class="splide"
            aria-labelledby="carousel-heading"
          >
            <div class="splide__track">
              <ul class="splide__list">
                <li class="splide__slide">
                  <img
                    src="img/otrasPaginas/disGraf/12-grafico-gatos/minuYFeli1.jpg"
                    alt=""
                  />
                </li>
                <li class="splide__slide">
                  <img
                    src="img/otrasPaginas/disGraf/12-grafico-gatos/minuYFeli2.jpg"
                    alt=""
                  />
                </li>
            </ul>
            </div>
          </section>
          `;
    crearSlider10();
    flechaNavSuperiorIzquierda.href = "grafico.html?proyectoElegido=grafico11";
    flechaNavInferiorIzquierda.href = "grafico.html?proyectoElegido=grafico11";
    flechaNavSuperiorDerecha.href = "grafico.html?proyectoElegido=grafico13";
    flechaNavInferiorDerecha.href = "grafico.html?proyectoElegido=grafico13";
    tituloTrabajo.innerHTML = "Minu Y Feli";
    parrafoDetalles.innerHTML = "Ilustración realizada en Illustrator";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/illustrator.webp" alt="" srcset=""/>`;
    break;
  case "grafico13":
    pantallaGraficos.innerHTML = `
              <section
              id="slider11"
              class="splide"
              aria-labelledby="carousel-heading"
            >
              <div class="splide__track">
                <ul class="splide__list">
                  <li class="splide__slide">
                    <img
                      src="img/otrasPaginas/disGraf/13-grafico-luffy/luffy1.jpg"
                      alt=""
                    />
                  </li>
                  <li class="splide__slide">
                    <img
                      src="img/otrasPaginas/disGraf/13-grafico-luffy/luffy2.jpg"
                      alt=""
                    />
                  </li>
              </ul>
              </div>
            </section>
            <section class="contenedorIframeYt">
            <iframe
              src="https://www.youtube.com/embed/Uc5s0YEbi7c"
              title="YouTube video player"
              frameborder="0"
              allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              controlls
              class="iframeYt"
            ></iframe>
          </section>
            `;
    crearSlider11();
    flechaNavSuperiorIzquierda.href = "grafico.html?proyectoElegido=grafico12";
    flechaNavInferiorIzquierda.href = "grafico.html?proyectoElegido=grafico12";
    flechaNavSuperiorDerecha.href = "grafico.html?proyectoElegido=grafico14";
    flechaNavInferiorDerecha.href = "grafico.html?proyectoElegido=grafico14";
    tituloTrabajo.innerHTML = "Luffy Four Gear - One Piece";
    parrafoDetalles.innerHTML = "Vectorizacion de personaje";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/illustrator.webp" alt="" srcset=""/>`;
    break;
  case "grafico14":
    pantallaGraficos.innerHTML = `
        <img
        src="img/otrasPaginas/disGraf/14-grafico-personajeLucesYSombras/personajeLucesYSombras.jpg"
        alt=""
        class="img-responsive-50"
      />
      <section class="contenedorIframeYt">
      <iframe
        src="https://www.youtube.com/embed/yodvHJLD9gA"
        title="YouTube video player"
        frameborder="0"
        allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        controlls
        class="iframeYt"
      ></iframe>
    </section>`;

    flechaNavSuperiorIzquierda.href = "grafico.html?proyectoElegido=grafico13";
    flechaNavInferiorIzquierda.href = "grafico.html?proyectoElegido=grafico13";
    flechaNavSuperiorDerecha.href = "grafico.html?proyectoElegido=grafico15";
    flechaNavInferiorDerecha.href = "grafico.html?proyectoElegido=grafico15";
    tituloTrabajo.innerHTML = "Explorador";
    parrafoDetalles.innerHTML = "Color y textura digital en Photoshop";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/photoshop.webp" alt="" srcset=""/>`;
    break;
  case "grafico15":
    pantallaGraficos.innerHTML = `
          <section
          id="slider12"
          class="splide"
          aria-labelledby="carousel-heading"
        >
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide">
                <img
                  src="img/otrasPaginas/disGraf/15-grafico-soloLoki/soloLoki1.jpg"
                  alt=""
                />
              </li>
              <li class="splide__slide">
                <img
                  src="img/otrasPaginas/disGraf/15-grafico-soloLoki/soloLoki2.jpg"
                  alt=""
                />
              </li>
              <li class="splide__slide">
                <img
                  src="img/otrasPaginas/disGraf/15-grafico-soloLoki/soloLoki3.jpg"
                  alt=""
                />
            </li>
            <li class="splide__slide">
              <img
                src="img/otrasPaginas/disGraf/15-grafico-soloLoki/soloLoki4.jpg"
                alt=""
              />
            </li>
            <li class="splide__slide">
              <img
                src="img/otrasPaginas/disGraf/15-grafico-soloLoki/soloLoki5.jpg"
                alt=""
              />
            </li>
            <li class="splide__slide">
              <img
                src="img/otrasPaginas/disGraf/15-grafico-soloLoki/soloLoki6.jpg"
                alt=""
              />
            </li>
            <li class="splide__slide">
              <img
                src="img/otrasPaginas/disGraf/15-grafico-soloLoki/soloLoki7.jpg"
                alt=""
              />
            </li>
          </ul>
          </div>
        </section>
        `;
    crearSlider12();
    flechaNavSuperiorIzquierda.href = "grafico.html?proyectoElegido=grafico14";
    flechaNavInferiorIzquierda.href = "grafico.html?proyectoElegido=grafico14";
    flechaNavSuperiorDerecha.href = "grafico.html?proyectoElegido=grafico16";
    flechaNavInferiorDerecha.href = "grafico.html?proyectoElegido=grafico16";
    tituloTrabajo.innerHTML = "Identidad SoloLoki";
    parrafoDetalles.innerHTML =
      "Diseño completo de identidad para twitch, youtube y redes sociales hecho en ilustrator y after effects";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/illustrator.webp" alt="" srcset=""/><img src="img/otrasPaginas/iconosSoft/afterEffects.webp" alt="" srcset=""/>`;
    break;
  case "grafico16":
    pantallaGraficos.innerHTML = `
    <img
      src="img/otrasPaginas/disGraf/16-grafico-burgertify/burgertify1.jpg"
      alt=""
      class="img-responsive-50"
    />
    <section class="contenedorIframeYt">
      <iframe
        src="https://www.youtube.com/embed/LXv8AMkJnQY"
        title="YouTube video player"
        frameborder="0"
        allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        controlls
        class="iframeYt"></iframe>
    </section>  
          `;
    flechaNavSuperiorIzquierda.href = "grafico.html?proyectoElegido=grafico15";
    flechaNavInferiorIzquierda.href = "grafico.html?proyectoElegido=grafico15";
    flechaNavSuperiorDerecha.href = "grafico.html?proyectoElegido=grafico17";
    flechaNavInferiorDerecha.href = "grafico.html?proyectoElegido=grafico17";
    tituloTrabajo.innerHTML = "Burgertify - Tanooki";
    parrafoDetalles.innerHTML =
      "Recorte de imagenes en Photoshop, armado de scena en Ilustrator y animación en After Effects";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/photoshop.webp" alt="" srcset=""/> <img src="img/otrasPaginas/iconosSoft/illustrator.webp" alt="" srcset=""/><img src="img/otrasPaginas/iconosSoft/afterEffects.webp" alt="" srcset=""/>`;
    break;
  case "grafico17":
    pantallaGraficos.innerHTML = `
      <section
      id="slider13"
      class="splide"
      aria-labelledby="carousel-heading"
    >
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide">
            <img
              src="img/otrasPaginas/disGraf/17-grafico-rasti/rasti1.png"
              alt=""
            />
          </li>
          <li class="splide__slide">
            <img
              src="img/otrasPaginas/disGraf/17-grafico-rasti/rasti2.png"
              alt=""
            />
          </li>
          <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/17-grafico-rasti/rasti3.png"
            alt=""
          />
        </li>
      </ul>
      </div>
    </section> 
            `;
    crearSlider13();
    flechaNavSuperiorIzquierda.href = "grafico.html?proyectoElegido=grafico16";
    flechaNavInferiorIzquierda.href = "grafico.html?proyectoElegido=grafico16";
    flechaNavSuperiorDerecha.href = "grafico.html?proyectoElegido=grafico18";
    flechaNavInferiorDerecha.href = "grafico.html?proyectoElegido=grafico18";
    tituloTrabajo.innerHTML = "Conectando generaciones";
    parrafoDetalles.innerHTML = "Concepto, idea e illustración";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/photoshop.webp" alt="" srcset=""/> <img src="img/otrasPaginas/iconosSoft/illustrator.webp" alt="" srcset=""/>`;
    break;
  case "grafico18":
    pantallaGraficos.innerHTML = `
        <section
        id="slider14"
        class="splide"
        aria-labelledby="carousel-heading"
      >
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide">
              <img
                src="img/otrasPaginas/disGraf/13-grafico-luffy/luffy1.jpg"
                alt=""
              />
            </li>
            <li class="splide__slide">
              <img
                src="img/otrasPaginas/disGraf/13-grafico-luffy/luffy2.jpg"
                alt=""
              />
            </li>
            <li class="splide__slide">
            <img
              src="img/otrasPaginas/disGraf/13-grafico-luffy/luffy1.jpg"
              alt=""
            />
          </li>
          <li class="splide__slide">
          <img
            src="img/otrasPaginas/disGraf/13-grafico-luffy/luffy2.jpg"
            alt=""
          />
        </li>
        </ul>
        </div>
      </section> 
              `;
    crearSlider14();
    flechaNavSuperiorIzquierda.href = "grafico.html?proyectoElegido=grafico17";
    flechaNavInferiorIzquierda.href = "grafico.html?proyectoElegido=grafico17";
    flechaNavSuperiorDerecha.href = "grafico.html?proyectoElegido=grafico19";
    flechaNavInferiorDerecha.href = "grafico.html?proyectoElegido=grafico19";
    tituloTrabajo.innerHTML = "L&J Boda";
    parrafoDetalles.innerHTML =
      "Identidad para casamiento, generación de video invitación y distintas gráficas utilizadas en el evento.";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/illustrator.webp" alt="" srcset=""/><img src="img/otrasPaginas/iconosSoft/afterEffects.webp" alt="" srcset=""/>`;
    break;
  case "grafico19":
    pantallaGraficos.innerHTML = `
    <img
    src="img/otrasPaginas/disGraf/19-grafico-cabezaMaseta/cabezaMaseta1.jpg"
    alt=""
    class="img-responsive"
  />
                `;
    flechaNavSuperiorIzquierda.href = "grafico.html?proyectoElegido=grafico18";
    flechaNavInferiorIzquierda.href = "grafico.html?proyectoElegido=grafico18";
    flechaNavSuperiorDerecha.href = "grafico.html?proyectoElegido=grafico20";
    flechaNavInferiorDerecha.href = "grafico.html?proyectoElegido=grafico20";
    tituloTrabajo.innerHTML = "Fotomontaje realizado en Photoshop";
    parrafoDetalles.innerHTML =
      "Identidad para casamiento, generación de video invitación y distintas gráficas utilizadas en el evento.";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/photoshop.webp" alt="" srcset=""/>`;
    break;
  case "grafico20":
    pantallaGraficos.innerHTML = `
      <img
      src="img/otrasPaginas/disGraf/20-grafico-restauracionAntigua/restauracionAntigua.jpg"
      alt=""
      class="img-responsive"
    />
                  `;
    flechaNavSuperiorIzquierda.href = "grafico.html?proyectoElegido=grafico19";
    flechaNavInferiorIzquierda.href = "grafico.html?proyectoElegido=grafico19";
    flechaNavSuperiorDerecha.href = "grafico.html?proyectoElegido=grafico21";
    flechaNavInferiorDerecha.href = "grafico.html?proyectoElegido=grafico21";
    tituloTrabajo.innerHTML = "Restauración realizada en Photoshop";
    parrafoDetalles.innerHTML = "Restauración realizada en Photoshop.";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/photoshop.webp" alt="" srcset=""/>`;
    break;
  case "grafico21":
    pantallaGraficos.innerHTML = `
        <section
        id="slider15"
        class="splide"
        aria-labelledby="carousel-heading"
      >
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide">
              <img
                src="img/otrasPaginas/disGraf/21-grafico-olivaIlustre/olivaIlustre1.jpg"
                alt=""
              />
            </li>
            <li class="splide__slide">
              <img
                src="img/otrasPaginas/disGraf/21-grafico-olivaIlustre/olivaIlustre2.jpg"
                alt=""
              />
            </li>
        </ul>
        </div>
      </section> 
              `;
    crearSlider15();
    flechaNavSuperiorIzquierda.href = "grafico.html?proyectoElegido=grafico20";
    flechaNavInferiorIzquierda.href = "grafico.html?proyectoElegido=grafico20";
    flechaNavSuperiorDerecha.href = "grafico.html?proyectoElegido=grafico22";
    flechaNavInferiorDerecha.href = "grafico.html?proyectoElegido=grafico22";
    tituloTrabajo.innerHTML = "Etiqueta Oliva Edición limitada";
    parrafoDetalles.innerHTML =
      "Creación de nueva etiqueta para producto en Ilustrator";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/illustrator.webp" alt="" srcset=""/>`;
    break;
  case "grafico22":
    pantallaGraficos.innerHTML = `
      <img
      src="img/otrasPaginas/disGraf/22-grafico-jonyIlustrado/jony.jpg"
      alt=""
      class="img-responsive"
    />
                  `;
    flechaNavSuperiorIzquierda.href = "grafico.html?proyectoElegido=grafico21";
    flechaNavInferiorIzquierda.href = "grafico.html?proyectoElegido=grafico21";
    flechaNavSuperiorDerecha.href = "grafico.html?proyectoElegido=grafico23";
    flechaNavInferiorDerecha.href = "grafico.html?proyectoElegido=grafico23";
    tituloTrabajo.innerHTML = "Personaje Ruta";
    parrafoDetalles.innerHTML = "Vectorización de persona sobre foto real..";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/illustrator.webp" alt="" srcset=""/>`;
    break;
  case "grafico23":
    pantallaGraficos.innerHTML = `
          <section
          id="slider16"
          class="splide"
          aria-labelledby="carousel-heading"
        >
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide">
                <img
                  src="img/otrasPaginas/disGraf/9-grafico-foodketingPlanes/foodketingPlanes1.jpg"
                  alt=""
                />
              </li>
              <li class="splide__slide">
                <img
                  src="img/otrasPaginas/disGraf/9-grafico-foodketingPlanes/foodketingPlanes2.jpg"
                  alt=""
                />
              </li>
              <li class="splide__slide">
                <img
                  src="img/otrasPaginas/disGraf/9-grafico-foodketingPlanes/foodketingPlanes3.jpg"
                  alt=""
                />
            </li>
            <li class="splide__slide">
              <img
                src="img/otrasPaginas/disGraf/9-grafico-foodketingPlanes/foodketingPlanes4.jpg"
                alt=""
              />
            </li>
            <li class="splide__slide">
              <img
                src="img/otrasPaginas/disGraf/9-grafico-foodketingPlanes/foodketingPlanes5.jpg"
                alt=""
              />
            </li>
            <li class="splide__slide">
              <img
                src="img/otrasPaginas/disGraf/9-grafico-foodketingPlanes/foodketingPlanes6.jpg"
                alt=""
              />
            </li>
            <li class="splide__slide">
              <img
                src="img/otrasPaginas/disGraf/9-grafico-foodketingPlanes/foodketingPlanes7.jpg"
                alt=""
              />
            </li>
            <li class="splide__slide">
              <img
                src="img/otrasPaginas/disGraf/9-grafico-foodketingPlanes/foodketingPlanes8.jpg"
                alt=""
              />
            </li>
          </ul>
          </div>
        </section>
        <section class="contenedorIframeYt">
        <iframe
          src="https://www.youtube.com/embed/dBSIKPujnJg"
          title="YouTube video player"
          frameborder="0"
          allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          controlls
          class="iframeYt"></iframe>
      </section>
        `;
    crearSlider16();
    flechaNavSuperiorIzquierda.href = "grafico.html?proyectoElegido=grafico22";
    flechaNavInferiorIzquierda.href = "grafico.html?proyectoElegido=grafico22";
    flechaNavSuperiorDerecha.href = "3d.html?proyectoElegido=tresD1";
    flechaNavInferiorDerecha.href = "3d.html?proyectoElegido=tresD1";
    tituloTrabajo.innerHTML = "Turut";
    parrafoDetalles.innerHTML =
      "Creación de manual de marca y animación de logo";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/illustrator.webp" alt="" srcset=""/> <img src="img/otrasPaginas/iconosSoft/afterEffects.webp" alt="" srcset=""/>`;
    break;
  //CASOS DE 3D
  case "tresD1":
    pantallaGraficos.innerHTML = `
    <section
    id="slider17"
    class="splide"
    aria-labelledby="carousel-heading"
  >
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/mod3D/1-3D-vw/turut-multimedia-vw-detalle-1.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/mod3D/1-3D-vw/turut-multimedia-vw-detalle-2.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/mod3D/1-3D-vw/turut-multimedia-vw-detalle-3.jpg"
            alt=""
          />
      </li>
      <li class="splide__slide">
        <img
          src="img/otrasPaginas/mod3D/1-3D-vw/turut-multimedia-vw-detalle-4.jpg"
          alt=""
        />
      </li>
    </ul>
    </div>
  </section>
  <section class="contenedorIframeYt">
  <iframe
    src="https://www.youtube.com/embed/F0DzE25y1dU"
    title="YouTube video player"
    frameborder="0"
    allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    controlls
    class="iframeYt"></iframe>
</section>
  `;
    crearSlider17();
    flechaNavSuperiorIzquierda.href = "grafico.html?proyectoElegido=grafico23";
    flechaNavInferiorIzquierda.href = "grafico.html?proyectoElegido=grafico23";
    flechaNavSuperiorDerecha.href = "3d.html?proyectoElegido=tresD2";
    flechaNavInferiorDerecha.href = "3d.html?proyectoElegido=tresD2";
    tituloTrabajo.innerHTML = "Camioneta VW";
    parrafoDetalles.innerHTML =
      "Camioneta modelada en 3D Max y texturizada en keyshot";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/3dsMax.webp" alt="" srcset="" />`;
    break;
  case "tresD2":
    pantallaGraficos.innerHTML = `
    <section
    id="slider18"
    class="splide"
    aria-labelledby="carousel-heading"
  >
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/mod3D/2-3D-mouseTron/mouseTron1.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/mod3D/2-3D-mouseTron/mouseTron2.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/mod3D/2-3D-mouseTron/mouseTron3.jpg"
            alt=""
          />
      </li>
    </ul>
    </div>
  </section>
  <section class="contenedorIframeYt">
  <iframe
    src="https://www.youtube.com/embed/0EZzB1BKATw"
    title="YouTube video player"
    frameborder="0"
    allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    controlls
    class="iframeYt"></iframe>
</section>
  `;
    crearSlider18();
    flechaNavSuperiorIzquierda.href = "3d.html?proyectoElegido=tresD1";
    flechaNavInferiorIzquierda.href = "3d.html?proyectoElegido=tresD1";
    flechaNavSuperiorDerecha.href = "3d.html?proyectoElegido=tresD3";
    flechaNavInferiorDerecha.href = "3d.html?proyectoElegido=tresD3";
    tituloTrabajo.innerHTML = "Mouse Ryzer -  Tematica Tron";
    parrafoDetalles.innerHTML =
      "Mouse y ciudad modeladas, animado y texturizado en 3Ds Max con Vray, Post producción en After Effects.";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/3dsMax.webp" alt="" srcset="" /><img
    src="img/otrasPaginas/iconosSoft/afterEffects.webp"
    alt=""
    srcset=""
  />`;
    break;
  case "tresD3":
    pantallaGraficos.innerHTML = `
    <section
    id="slider19"
    class="splide"
    aria-labelledby="carousel-heading"
  >
    <div class="splide__track">
      <ul class="splide__list">
      <li class="splide__slide">
      <img
        src="img/otrasPaginas/mod3D/3-3D-robotito/robotito01.jpg"
        alt=""
      />
    </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/mod3D/3-3D-robotito/robotito1.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/mod3D/3-3D-robotito/robotito2.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/mod3D/3-3D-robotito/robotito3.jpg"
            alt=""
          />
      </li>
      <li class="splide__slide">
      <img
        src="img/otrasPaginas/mod3D/3-3D-robotito/robotito4.jpg"
        alt=""
      />
  </li>
    </ul>
    </div>
  </section>
  <section class="contenedorIframeYt">
  <iframe
    src="https://www.youtube.com/embed/m9isiz2jUWM"
    title="YouTube video player"
    frameborder="0"
    allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    controlls
    class="iframeYt"></iframe>
</section>
  `;
    crearSlider19();
    flechaNavSuperiorIzquierda.href = "3d.html?proyectoElegido=tresD2";
    flechaNavInferiorIzquierda.href = "3d.html?proyectoElegido=tresD2";
    flechaNavSuperiorDerecha.href = "3d.html?proyectoElegido=tresD4";
    flechaNavInferiorDerecha.href = "3d.html?proyectoElegido=tresD4";
    tituloTrabajo.innerHTML = "Robot";
    parrafoDetalles.innerHTML = "Modelado y texturizado";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/3dsMax.webp" alt="" srcset="" /><img
    src="img/otrasPaginas/iconosSoft/substancePainter.webp"
    alt=""
    srcset=""
  />`;
    break;
  case "tresD4":
    pantallaGraficos.innerHTML = `
    <section
    id="slider20"
    class="splide"
    aria-labelledby="carousel-heading"
  >
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/mod3D/4-3D-arcadeMetalSlug/metalSlug1.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/mod3D/4-3D-arcadeMetalSlug/metalSlug2.jpg"
            alt=""
          />
        </li>
    </ul>
    </div>
  </section>
  <section class="contenedorIframeYt">
  <iframe
    src="https://www.youtube.com/embed/LlAh6lIlTrk"
    title="YouTube video player"
    frameborder="0"
    allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    controlls
    class="iframeYt"></iframe>
</section>
  `;
    crearSlider20();
    flechaNavSuperiorIzquierda.href = "3d.html?proyectoElegido=tresD3";
    flechaNavInferiorIzquierda.href = "3d.html?proyectoElegido=tresD3";
    flechaNavSuperiorDerecha.href = "3d.html?proyectoElegido=tresD5";
    flechaNavInferiorDerecha.href = "3d.html?proyectoElegido=tresD5";
    tituloTrabajo.innerHTML = "Arcade - Metal Slug";
    parrafoDetalles.innerHTML = "Modelado y texturizado";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/3dsMax.webp" alt="" srcset="" /><img
    src="img/otrasPaginas/iconosSoft/substancePainter.webp"
    alt=""
    srcset=""
  />`;
    break;
  case "tresD5":
    pantallaGraficos.innerHTML = `
      <section
      id="slider21"
      class="splide"
      aria-labelledby="carousel-heading"
    >
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide">
            <img
              src="img/otrasPaginas/mod3D/5-3D-bajo/bajo1.jpg"
              alt=""
            />
          </li>
          <li class="splide__slide">
            <img
              src="img/otrasPaginas/mod3D/5-3D-bajo/bajo2.jpg"
              alt=""
            />
          </li>
          <li class="splide__slide">
          <img
            src="img/otrasPaginas/mod3D/5-3D-bajo/bajo3.jpg"
            alt=""
          />
        </li>
      </ul>
      </div>
    </section>
    `;
    crearSlider21();
    flechaNavSuperiorIzquierda.href = "3d.html?proyectoElegido=tresD4";
    flechaNavInferiorIzquierda.href = "3d.html?proyectoElegido=tresD4";
    flechaNavSuperiorDerecha.href = "3d.html?proyectoElegido=tresD6";
    flechaNavInferiorDerecha.href = "3d.html?proyectoElegido=tresD6";
    tituloTrabajo.innerHTML = "Bajo 3D ";
    parrafoDetalles.innerHTML = "Modelado en 3D Max y texturizado en Keyshot";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/3dsMax.webp" alt="" srcset="" />`;
    break;
  case "tresD6":
    pantallaGraficos.innerHTML = `
      <section
      id="slider22"
      class="splide"
      aria-labelledby="carousel-heading"
    >
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide">
            <img
              src="img/otrasPaginas/mod3D/6-3D-globos/globo1.jpg"
              alt=""
            />
          </li>
          <li class="splide__slide">
            <img
              src="img/otrasPaginas/mod3D/6-3D-globos/globo2.jpg"
              alt=""
            />
          </li>
          <li class="splide__slide">
          <img
            src="img/otrasPaginas/mod3D/6-3D-globos/globo3.jpg"
            alt=""
          />
        </li>
      </ul>
      </div>
    </section>
    `;
    crearSlider22();
    flechaNavSuperiorIzquierda.href = "3d.html?proyectoElegido=tresD5";
    flechaNavInferiorIzquierda.href = "3d.html?proyectoElegido=tresD5";
    flechaNavSuperiorDerecha.href = "3d.html?proyectoElegido=tresD7";
    flechaNavInferiorDerecha.href = "3d.html?proyectoElegido=tresD7";
    tituloTrabajo.innerHTML = "Globo Aerostatico";
    parrafoDetalles.innerHTML =
      "Modelado en 3D Max y texturizado en Substance painter";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/3dsMax.webp" alt="" srcset="" /><img
    src="img/otrasPaginas/iconosSoft/substancePainter.webp"
    alt=""
    srcset=""
  />`;
    break;
  case "tresD7":
    pantallaGraficos.innerHTML = `
    <section class="contenedorIframeYt">
    <iframe
      src="https://www.youtube.com/embed/gTVMFthdw8Q"
      title="YouTube video player"
      frameborder="0"
      allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      controlls
      class="iframeYt"></iframe>
  </section>
    `;

    flechaNavSuperiorIzquierda.href = "3d.html?proyectoElegido=tresD6";
    flechaNavInferiorIzquierda.href = "3d.html?proyectoElegido=tresD6";
    flechaNavSuperiorDerecha.href = "3d.html?proyectoElegido=tresD8";
    flechaNavInferiorDerecha.href = "3d.html?proyectoElegido=tresD8";
    tituloTrabajo.innerHTML = "Juego de la Copa";
    parrafoDetalles.innerHTML =
      "Modelado en 3D Max y texturizado en Substance painter";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/3dsMax.webp" alt="" srcset="" /><img
    src="img/otrasPaginas/iconosSoft/substancePainter.webp"
    alt=""
    srcset=""
  />`;
    break;
  case "tresD8":
    pantallaGraficos.innerHTML = `
      <section
      id="slider23"
      class="splide"
      aria-labelledby="carousel-heading"
    >
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide">
            <img
              src="img/otrasPaginas/mod3D/8-3D-arcadeDaytona/daytona1.jpg"
              alt=""
            />
          </li>
          <li class="splide__slide">
            <img
              src="img/otrasPaginas/mod3D/8-3D-arcadeDaytona/daytona2.jpg"
              alt=""
            />
          </li>
          <li class="splide__slide">
          <img
            src="img/otrasPaginas/mod3D/8-3D-arcadeDaytona/daytona3.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
        <img
          src="img/otrasPaginas/mod3D/8-3D-arcadeDaytona/daytona4.jpg"
          alt=""
        />
      </li>
      <li class="splide__slide">
      <img
        src="img/otrasPaginas/mod3D/8-3D-arcadeDaytona/daytona5.jpg"
        alt=""
      />
    </li>
      </ul>
      </div>
    </section>
    <section class="contenedorIframeYt">
    <iframe
      src="https://www.youtube.com/embed/YphNSSkZj0s" 
      title="YouTube video player"
      frameborder="0"
      allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      controlls
      class="iframeYt"
    ></iframe>
  </section>
    `;
    crearSlider23();
    flechaNavSuperiorIzquierda.href = "3d.html?proyectoElegido=tresD7";
    flechaNavInferiorIzquierda.href = "3d.html?proyectoElegido=tresD7";
    flechaNavSuperiorDerecha.href = "3d.html?proyectoElegido=tresD9";
    flechaNavInferiorDerecha.href = "3d.html?proyectoElegido=tresD9";
    tituloTrabajo.innerHTML = "Juego Daytona Twins";
    parrafoDetalles.innerHTML =
      "Modelado en 3D Max y texturizado en Substance painter";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/3dsMax.webp" alt="" srcset="" /><img
    src="img/otrasPaginas/iconosSoft/substancePainter.webp"
    alt=""
    srcset=""
  />`;
    break;
  case "tresD9":
    pantallaGraficos.innerHTML = `
    <section
    id="slider26"
    class="splide"
    aria-labelledby="carousel-heading"
  >
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/mod3D/9-3D-arcadeSkill/arcadeSkill1.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
          <img
            src="img/otrasPaginas/mod3D/9-3D-arcadeSkill/arcadeSkill2.jpg"
            alt=""
          />
        </li>
        <li class="splide__slide">
        <img
          src="img/otrasPaginas/mod3D/9-3D-arcadeSkill/arcadeSkill3.jpg"
          alt=""
        />
      </li>
    </ul>
    </div>
  </section>
    `;
    crearSlider26();
    flechaNavSuperiorIzquierda.href = "3d.html?proyectoElegido=tresD8";
    flechaNavInferiorIzquierda.href = "3d.html?proyectoElegido=tresD8";
    flechaNavSuperiorDerecha.href = "3d.html?proyectoElegido=tresD10";
    flechaNavInferiorDerecha.href = "3d.html?proyectoElegido=tresD10";
    tituloTrabajo.innerHTML = "Arcade Vr Skillz";
    parrafoDetalles.innerHTML =
      "Modelado en 3D Max y texturizado en Substance painter";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/3dsMax.webp" alt="" srcset="" /><img
    src="img/otrasPaginas/iconosSoft/substancePainter.webp"
    alt=""
    srcset=""
  />`;
    break;
  case "tresD10":
    pantallaGraficos.innerHTML = `
        <section
        id="slider24"
        class="splide"
        aria-labelledby="carousel-heading"
      >
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide">
              <img
                src="img/otrasPaginas/mod3D/10-3D-auricular/auricular1.jpg"
                alt=""
              />
            </li>
            <li class="splide__slide">
              <img
                src="img/otrasPaginas/mod3D/10-3D-auricular/auricular2.jpg"
                alt=""
              />
            </li>
            <li class="splide__slide">
            <img
              src="img/otrasPaginas/mod3D/10-3D-auricular/auricular3.jpg"
              alt=""
            />
          </li>
          <li class="splide__slide">
          <img
            src="img/otrasPaginas/mod3D/10-3D-auricular/auricular4.jpg"
            alt=""
          />
        </li>
        </ul>
        </div>
      </section>
      <section class="contenedorIframeYt">
      <iframe
        src="https://www.youtube.com/embed/nWVDAS3m6EQ" 
        title="YouTube video player"
        frameborder="0"
        allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        controlls
        class="iframeYt"
      ></iframe>
    </section>
      `;
    crearSlider24();
    flechaNavSuperiorIzquierda.href = "3d.html?proyectoElegido=tresD9";
    flechaNavInferiorIzquierda.href = "3d.html?proyectoElegido=tresD9";
    flechaNavSuperiorDerecha.href = "3d.html?proyectoElegido=tresD11";
    flechaNavInferiorDerecha.href = "3d.html?proyectoElegido=tresD11";
    tituloTrabajo.innerHTML = "Auricular";
    parrafoDetalles.innerHTML =
      "Auricular modelado en 3D Max y texturizado en Substance Painter";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/3dsMax.webp" alt="" srcset="" /><img
      src="img/otrasPaginas/iconosSoft/substancePainter.webp"
      alt=""
      srcset=""
    />`;
    break;
  case "tresD11":
    pantallaGraficos.innerHTML = `
          <section
          id="slider25"
          class="splide"
          aria-labelledby="carousel-heading"
        >
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide">
                <img
                  src="img/otrasPaginas/mod3D/11-3D-halloween/halloween1.jpg"
                  alt=""
                />
              </li>
              <li class="splide__slide">
                <img
                  src="img/otrasPaginas/mod3D/11-3D-halloween/halloween2.jpg"
                  alt=""
                />
              </li>
              <li class="splide__slide">
              <img
                src="img/otrasPaginas/mod3D/11-3D-halloween/halloween3.jpg"
                alt=""
              />
            </li>
            <li class="splide__slide">
            <img
              src="img/otrasPaginas/mod3D/11-3D-halloween/halloween4.jpg"
              alt=""
            />
          </li>
          </ul>
          </div>
        </section>
        <section class="contenedorIframeYt">
        <iframe
          src="https://www.youtube.com/embed/oxjZ4VlRxd0" 
          title="YouTube video player"
          frameborder="0"
          allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          controlls
          class="iframeYt"
        ></iframe>
      </section>
        `;
    crearSlider25();
    flechaNavSuperiorIzquierda.href = "3d.html?proyectoElegido=tresD10";
    flechaNavInferiorIzquierda.href = "3d.html?proyectoElegido=tresD10";
    flechaNavSuperiorDerecha.href = "video.html?proyectoElegido=video1";
    flechaNavInferiorDerecha.href = "video.html?proyectoElegido=video1";
    tituloTrabajo.innerHTML = "Halloween";
    parrafoDetalles.innerHTML =
      "Modelado, texturizado, animación, ecualización y creación de fluidos 3D";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/3dsMax.webp" alt="" srcset="" /><img
        src="img/otrasPaginas/iconosSoft/substancePainter.webp"
        alt=""
        srcset=""
      /><img
      src="img/otrasPaginas/iconosSoft/afterEffects.webp"
      alt=""
      srcset=""
    /><img src="img/otrasPaginas/iconosSoft/realFlow.webp" alt="" srcset="" /><img src="img/otrasPaginas/iconosSoft/audition.webp" alt="" srcset="" />`;
    break;
  //CASOS DE VIDEO
  case "video1":
    pantallaGraficos.innerHTML = `
        <section class="contenedorIframeYt">
        <iframe
          src="https://www.youtube.com/embed/rvJ3mlZbF2w" 
          title="YouTube video player"
          frameborder="0"
          allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          controlls
          class="iframeYt"
        ></iframe>
      </section>
        `;
    flechaNavSuperiorIzquierda.href = "3d.html?proyectoElegido=tresD11";
    flechaNavInferiorIzquierda.href = "3d.html?proyectoElegido=tresD11";
    flechaNavSuperiorDerecha.href = "video.html?proyectoElegido=video2";
    flechaNavInferiorDerecha.href = "video.html?proyectoElegido=video2";
    tituloTrabajo.innerHTML = "La pasta - Alos";
    parrafoDetalles.innerHTML = "Edición de video con locución en Premiere";
    iconSoft.innerHTML = `<img
    src="img/otrasPaginas/iconosSoft/premierePro.webp"
    alt=""
    srcset=""
  />`;
    break;
  case "video2":
    pantallaGraficos.innerHTML = `
          <section class="contenedorIframeYt">
          <iframe
            src="https://www.youtube.com/embed/RQuJnszSWBo" 
            title="YouTube video player"
            frameborder="0"
            allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            controlls
            class="iframeYt"
          ></iframe>
        </section>
          `;
    flechaNavSuperiorIzquierda.href = "video.html?proyectoElegido=video1";
    flechaNavInferiorIzquierda.href = "video.html?proyectoElegido=video1";
    flechaNavSuperiorDerecha.href = "video.html?proyectoElegido=video3";
    flechaNavInferiorDerecha.href = "video.html?proyectoElegido=video3";
    tituloTrabajo.innerHTML = "Ciudad Futura";
    parrafoDetalles.innerHTML = "Matte Painting sobre video + Element 3D";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/photoshop.webp" alt="" srcset="" /><img
      src="img/otrasPaginas/iconosSoft/afterEffects.webp"
      alt=""
      srcset=""
    />`;
    break;
  case "video3":
    pantallaGraficos.innerHTML = `
          <section class="contenedorIframeYt">
          <iframe
            src="https://www.youtube.com/embed/sjy6bP0L3DA" 
            title="YouTube video player"
            frameborder="0"
            allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            controlls
            class="iframeYt"
          ></iframe>
        </section>
          `;
    flechaNavSuperiorIzquierda.href = "video.html?proyectoElegido=video2";
    flechaNavInferiorIzquierda.href = "video.html?proyectoElegido=video2";
    flechaNavSuperiorDerecha.href = "video.html?proyectoElegido=video4";
    flechaNavInferiorDerecha.href = "video.html?proyectoElegido=video4";
    tituloTrabajo.innerHTML = "Demonio";
    parrafoDetalles.innerHTML =
      "Efecto Dolly + FX en ojos, realizado todo con After Effects.";
    iconSoft.innerHTML = `      <img
      src="img/otrasPaginas/iconosSoft/afterEffects.webp"
      alt=""
      srcset=""
    />`;
    break;
  case "video4":
    pantallaGraficos.innerHTML = `
            <section class="contenedorIframeYt">
            <iframe
              src="https://www.youtube.com/embed/v_-ATlyhzpc" 
              title="YouTube video player"
              frameborder="0"
              allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              controlls
              class="iframeYt"
            ></iframe>
          </section>
          <section class="contenedorIframeYt">
          <iframe
            src="https://www.youtube.com/embed/5Y2IQHIgs9I" 
            title="YouTube video player"
            frameborder="0"
            allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            controlls
            class="iframeYt"
          ></iframe>
        </section>
        <section class="contenedorIframeYt">
        <iframe
          src="https://www.youtube.com/embed/Azk8gGbGuyk" 
          title="YouTube video player"
          frameborder="0"
          allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          controlls
          class="iframeYt"
        ></iframe>
      </section>
      <section class="contenedorIframeYt">
      <iframe
        src="https://www.youtube.com/embed/MgzYBj01XMc" 
        title="YouTube video player"
        frameborder="0"
        allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        controlls
        class="iframeYt"
      ></iframe>
    </section>
            `;
    flechaNavSuperiorIzquierda.href = "video.html?proyectoElegido=video3";
    flechaNavInferiorIzquierda.href = "video.html?proyectoElegido=video3";
    flechaNavSuperiorDerecha.href = "video.html?proyectoElegido=video5";
    flechaNavInferiorDerecha.href = "video.html?proyectoElegido=video5";
    tituloTrabajo.innerHTML = "Vino Vendimiario";
    parrafoDetalles.innerHTML =
      "Stop motion y animación. Realización en Premiere y After Effects";
    iconSoft.innerHTML = `<img
    src="img/otrasPaginas/iconosSoft/premierePro.webp"
    alt=""
    srcset=""
  /><img
        src="img/otrasPaginas/iconosSoft/afterEffects.webp"
        alt=""
        srcset=""
      />`;
    break;
  case "video5":
    pantallaGraficos.innerHTML = `
            <section class="contenedorIframeYt">
              <iframe
                src="https://www.youtube.com/embed/mvHxxrFgkDo" 
                title="YouTube video player"
                frameborder="0"
                allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                controlls
                class="iframeYt"
              ></iframe>
            </section> `;
    flechaNavSuperiorIzquierda.href = "video.html?proyectoElegido=video4";
    flechaNavInferiorIzquierda.href = "video.html?proyectoElegido=video4";
    flechaNavSuperiorDerecha.href = "video.html?proyectoElegido=video6";
    flechaNavInferiorDerecha.href = "video.html?proyectoElegido=video6";
    tituloTrabajo.innerHTML = "Un rato con él";
    parrafoDetalles.innerHTML =
      "Teaser de obra de teatro. Ilustración y animación. Realizado en After Effects";
    iconSoft.innerHTML = `      <img
    src="img/otrasPaginas/iconosSoft/illustrator.webp"
    alt=""
    srcset=""
  /><img
          src="img/otrasPaginas/iconosSoft/afterEffects.webp"
          alt=""
          srcset=""
        />`;
    break;
  case "video6":
    pantallaGraficos.innerHTML = `
              <section class="contenedorIframeYt">
                <iframe
                  src="https://www.youtube.com/embed/eHj4AJDH6w4" 
                  title="YouTube video player"
                  frameborder="0"
                  allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  controlls
                  class="iframeYt"
                ></iframe>
              </section> `;
    flechaNavSuperiorIzquierda.href = "video.html?proyectoElegido=video5";
    flechaNavInferiorIzquierda.href = "video.html?proyectoElegido=video5";
    flechaNavSuperiorDerecha.href = "video.html?proyectoElegido=video7";
    flechaNavInferiorDerecha.href = "video.html?proyectoElegido=video7";
    tituloTrabajo.innerHTML = "Te tío la Posta - Personaje";
    parrafoDetalles.innerHTML =
      "Creación de personaje estereotípico, identidad, canal y capítulo temática 'Pandemia'. Producción y Postproducción";
    iconSoft.innerHTML = `      <img
      src="img/otrasPaginas/iconosSoft/illustrator.webp"
      alt=""
      srcset=""
    />
    <img
    src="img/otrasPaginas/iconosSoft/premierePro.webp"
    alt=""
    srcset=""
  /><img
            src="img/otrasPaginas/iconosSoft/afterEffects.webp"
            alt=""
            srcset=""
          />`;
    break;
  case "video7":
    pantallaGraficos.innerHTML = `
      <section class="contenedorIframeYt">
      <iframe
        src="https://www.youtube.com/embed/RaTWoeD6deg" 
        title="YouTube video player"
        frameborder="0"
        allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        controlls
        class="iframeYt"
      ></iframe>
    </section>
    <section class="contenedorIframeYt">
      <iframe
        src="https://www.youtube.com/embed/RaTWoeD6deg" 
        title="YouTube video player"
        frameborder="0"
        allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        controlls
        class="iframeYt"
      ></iframe>
    </section> `;
    flechaNavSuperiorIzquierda.href = "video.html?proyectoElegido=video6";
    flechaNavInferiorIzquierda.href = "video.html?proyectoElegido=video6";
    flechaNavSuperiorDerecha.href = "video.html?proyectoElegido=video8";
    flechaNavInferiorDerecha.href = "video.html?proyectoElegido=video8";
    tituloTrabajo.innerHTML = "Campaña Awarness - Ayudar nos sienta bien";
    parrafoDetalles.innerHTML =
      "Busqueda y fundamento de concepto, storyteiling, estrategía en rrss, diseño gráfico y audivisual.";
    iconSoft.innerHTML = `      <img
    src="img/otrasPaginas/iconosSoft/illustrator.webp"
    alt=""
    srcset=""
  />
      <img
      src="img/otrasPaginas/iconosSoft/premierePro.webp"
      alt=""
      srcset=""
    /><img
              src="img/otrasPaginas/iconosSoft/afterEffects.webp"
              alt=""
              srcset=""
            />`;
    break;
  case "video8":
    pantallaGraficos.innerHTML = `
        <section class="contenedorIframeYt">
        <iframe
          src="https://www.youtube.com/embed/Jj3RT-1DVVg" 
          title="YouTube video player"
          frameborder="0"
          allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          controlls
          class="iframeYt"
        ></iframe>
      </section> `;
    flechaNavSuperiorIzquierda.href = "video.html?proyectoElegido=video7";
    flechaNavInferiorIzquierda.href = "video.html?proyectoElegido=video7";
    flechaNavSuperiorDerecha.href = "video.html?proyectoElegido=video9";
    flechaNavInferiorDerecha.href = "video.html?proyectoElegido=video9";
    tituloTrabajo.innerHTML = "World of Legends";
    parrafoDetalles.innerHTML =
      "Realización de matte painting sobre el mundo de League of Legends";
    iconSoft.innerHTML = `      <img src="img/otrasPaginas/iconosSoft/photoshop.webp" alt="" srcset="" />
        <img
        src="img/otrasPaginas/iconosSoft/premierePro.webp"
        alt=""
        srcset=""
      /><img
                src="img/otrasPaginas/iconosSoft/afterEffects.webp"
                alt=""
                srcset=""
              />`;
    break;
  case "video9":
    pantallaGraficos.innerHTML = `
        <section class="contenedorIframeYt">
        <iframe
          src="https://www.youtube.com/embed/9z7vQK0vw0U" 
          title="YouTube video player"
          frameborder="0"
          allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          controlls
          class="iframeYt"
        ></iframe>
      </section> `;
    flechaNavSuperiorIzquierda.href = "video.html?proyectoElegido=video8";
    flechaNavInferiorIzquierda.href = "video.html?proyectoElegido=video8";
    flechaNavSuperiorDerecha.href = "video.html?proyectoElegido=video10";
    flechaNavInferiorDerecha.href = "video.html?proyectoElegido=video10";
    tituloTrabajo.innerHTML = "Resumen casamiento";
    parrafoDetalles.innerHTML = "Montaje de video y sonoro";
    iconSoft.innerHTML = `<img
        src="img/otrasPaginas/iconosSoft/premierePro.webp"
        alt=""
        srcset=""
      /><img
                src="img/otrasPaginas/iconosSoft/afterEffects.webp"
                alt=""
                srcset=""
              />`;
    break;
  case "video10":
    pantallaGraficos.innerHTML = `
          <section class="contenedorIframeYt">
          <iframe
            src="https://www.youtube.com/embed/eoOGQj7yZ20" 
            title="YouTube video player"
            frameborder="0"
            allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            controlls
            class="iframeYt"
          ></iframe>
        </section> `;
    flechaNavSuperiorIzquierda.href = "video.html?proyectoElegido=video9";
    flechaNavInferiorIzquierda.href = "video.html?proyectoElegido=video9";
    flechaNavSuperiorDerecha.href = "video.html?proyectoElegido=video11";
    flechaNavInferiorDerecha.href = "video.html?proyectoElegido=video11";
    tituloTrabajo.innerHTML = "Los chicos y las tics";
    parrafoDetalles.innerHTML = "Motion graphics";
    iconSoft.innerHTML = `<img
          src="img/otrasPaginas/iconosSoft/premierePro.webp"
          alt=""
          srcset=""
        /><img
                  src="img/otrasPaginas/iconosSoft/afterEffects.webp"
                  alt=""
                  srcset=""
                />`;
    break;
  case "video11":
    pantallaGraficos.innerHTML = `
            <section class="contenedorIframeYt">
            <iframe
              src="https://www.youtube.com/embed/rypn7bCQLRM" 
              title="YouTube video player"
              frameborder="0"
              allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              controlls
              class="iframeYt"
            ></iframe>
          </section> `;
    flechaNavSuperiorIzquierda.href = "video.html?proyectoElegido=video10";
    flechaNavInferiorIzquierda.href = "video.html?proyectoElegido=video10";
    flechaNavSuperiorDerecha.href =
      "programacion.html?proyectoElegido=programacion1";
    flechaNavInferiorDerecha.href =
      "programacion.html?proyectoElegido=programacion1";
    tituloTrabajo.innerHTML = "Sugerencias Netflix";
    parrafoDetalles.innerHTML = "Parallax realizado en After Effects";
    iconSoft.innerHTML = `<img src="img/otrasPaginas/iconosSoft/photoshop.webp" alt="" srcset="" /><img
            src="img/otrasPaginas/iconosSoft/premierePro.webp"
            alt=""
            srcset=""
          /><img
                    src="img/otrasPaginas/iconosSoft/afterEffects.webp"
                    alt=""
                    srcset=""
                  />`;
    break;
  //CASOS DE PROGRAMACION
  case "programacion1":
    titulo.innerHTML = "Soy el programacion 1";
    break;
  case "programacion2":
    titulo.innerHTML = "Soy el programacion 2";
    break;
  default:
    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
    break;
}
