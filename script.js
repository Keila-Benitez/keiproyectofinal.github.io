//lugares turisticos
const menu_lugares = [
  {
    id: 0,
    titulo: "Playa San José",
    categoria: "Playas",
    foto: "https://visitaparaguay.com.py/uploads/2345-1.webp",
    desc: "La playa San José se encuentra ubicada sobre la Avenida Costanera República del Paraguay. Fue inaugurada en el año 2011 y posee una extensión de 700 metros. Recibe su nombre en honor a los antiguos silo y molino harinero que se encuentran en la zona, hoy considerados edificios históricos.",
  },
  {
    id: 1,
    titulo: "Playa mboi kae",
    categoria: "Playas",
    foto: "https://media-cdn.tripadvisor.com/media/photo-s/0c/74/19/57/geheimtipp-playa-playa.jpg",
    desc: "La playa Mbói Ka’e, ubicado en el barrio homónimo, es la segunda playa más importante de Encarnación. Posee una extensión de 200 metros y fue inaugurada oficialmente en el año 2013",
  },
  {
    id: 2,
    titulo: "Playa San Isidro",
    categoria: "Playas",
    foto: "https://masencarnacion.s3.us-west-2.amazonaws.com/uploads/public/611/e6e/470/611e6e4702240976763849.jpg",
    desc: "La playa San Isidro se encuentra situada sobre la avenida Costanera al oeste del Puente Internacional, en el barrio Pacú Cuá de Encarnación, lindando con el Barrio San Isidro. De las tres playas existentes, ésta es la que cuenta con las mejores vistas de la vecina ciudad de Posadas.",
  },
  {
    id: 3,
    titulo: "Santuario de la Virgen de Itacua",
    categoria: "Iglesias",
    foto: "https://visitaparaguay.com.py/uploads/3213-2.webp",
    desc: "La Virgen de Itacuá, es una de las advocaciones marianas más importantes de la región llamada también “Virgen de los pobres”. Cuenta con un santuario ubicado a 9 km del casco urbano de la ciudad de Encarnación.",
  },
  {
    id: 4,
    titulo: "Iglesia Ortodoxa San Jorge",
    categoria: "Iglesias",
    foto: "https://encarnacion.com.py/custom/domain_1/image_files/sitemgr_photo_4409.jpg",
    desc: "La Iglesia Ortodoxa San Jorge está ubicada en una de las esquinas de la Plaza de Armas de la ciudad de Encarnación. Su construcción fue impulsada por inmigrantes ucranianos y rusos que habitan desde hace muchos años la región de Itapúa.",
  },
  {
    id: 5,
    titulo: "Plaza de Armas",
    categoria: "Plazas",
    foto: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/83/d6/b6/plaza-de-armas.jpg?w=1200&h=-1&s=1",
    desc: "La Plaza de Armas de Encarnación, actualmente, cuenta con varios senderos, monumentos, sector de juegos infantiles, estanques y una gran explanada central, sede frecuente de eventos culturales y manifestaciones ciudadanas.",
  },
  {
    id: 6,
    titulo: "La Escalinata San Pedro ",
    categoria: "Plazas",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZk2Bhf6hUnVU2CK4kVHqWoNoZ5MpsfaqrvShd3RJqiv50_SezqsvePUUJyzkyu3q-zbM&usqp=CAU",
    desc: "La Escalinata San Pedro, ubicado en este tradicional barrio, una obra maravillosa y única que no tiene similar en toda la región, ",
  },
  {
    id: 7,
    titulo: "Mini zoo del Juan XXIII",
    categoria: "Animales",
    foto: "https://arthurhotel.com.py/home/wp-content/uploads/2016/12/juan-xxiii-5.jpg",
    desc: "El zoológico del colegio Juan XXIII de la ciudad de Encarnación es un lugar ideal para llevar a los niños, recorrer, conocer y aprender sobre las diferentes especies.",
  },
];
const section_center = document.querySelector(".section_center");
const container_boton = document.querySelector(".container_boton");
//cargar objetos
window.addEventListener("DOMContentLoaded", function () {
  display_items(menu_lugares);
  display_botones();
});

function display_botones() {
  //para obtener categorías, sin repeticiones del array y poder usarlo para crear los botones usando js
  const categorias = menu_lugares.reduce(
    function (valor, item) {
      if (!valor.includes(item.categoria)) {
        valor.push(item.categoria);
      }
      return valor;
    },
    ["Todos"]
  );

  //insertar los botones en html
  let categoria_botones = categorias.map(function (categoria) {
    return `<button class="filtro_boton" type="button" data-id=${categoria}>${categoria}</button>`;
  });
  categoria_botones = categoria_botones.join("");
  container_boton.innerHTML = categoria_botones;
  const filtros = document.querySelectorAll(".filtro_boton");

  //boton filtro
  filtros.forEach(function (btn) {
    btn.addEventListener("click", function (evento) {
      const categoria = evento.currentTarget.dataset.id;
      const lugares_categoria = menu_lugares.filter(function (item_lugar) {
        //console.log(item_lugar.categoria)
        if (item_lugar.categoria === categoria) {
          return item_lugar;
        }
      });
      if (categoria === "Todos") {
        display_items(menu_lugares);
      } else {
        display_items(lugares_categoria);
      }
    });
  });
}

//mostrar objetos
function display_items(items) {
  let mostrar_lugares = items.map(function (item) {
    //console.log(item);
    return `<article class="lugar_item">
        <img src=${item.foto} class="foto" alt="foto item" />
        <div class="lugar_info">
          <header>
            <h4>${item.titulo}</h4>
          </header>
          <p class=${item.desc}>${item.desc}</p>
        </div>
      </article>`;
  });
  //console.log(mostrar_lugares);
  mostrar_lugares = mostrar_lugares.join("");
  section_center.innerHTML = mostrar_lugares;
}