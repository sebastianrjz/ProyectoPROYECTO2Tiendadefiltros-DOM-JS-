const zapatillas = [
  {
    id: 1,
    nombre: 'Nike original',
    precio: 120.0,
    img: './assets/nike1(1).png',
    modelo: 'Air Max 1'
  },
  {
    id: 2,
    nombre: 'New Balance',
    precio: 80.0,
    img: './assets/2.png',
    modelo: 'NB 9060'
  },
  {
    id: 3,
    nombre: 'Nike Original',
    precio: 90.0,
    img: './assets/3.png',
    modelo: 'Nike Revolution'
  },
  {
    id: 4,
    nombre: 'Adidas Original',
    precio: 100.0,
    img: './assets/4.png',
    modelo: 'Forum Buckle'
  },
  {
    id: 5,
    nombre: 'Adidas Original',
    precio: 120.0,
    img: './assets/5.png',
    modelo: 'Campos'
  },
  {
    id: 6,
    nombre: 'New Balence',
    precio: 120.0,
    img: './assets/6.png',
    modelo: 'NB 327'
  },
  {
    id: 7,
    nombre: 'Nike Original',
    precio: 100.0,
    img: './assets/7.png',
    modelo: 'Dunk Low'
  },
  {
    id: 8,
    nombre: 'Adidas Original',
    precio: 90.0,
    img: './assets/8.png',
    modelo: 'Gazelle'
  },
  {
    id: 9,
    nombre: 'Nike Original',
    precio: 150.0,
    img: './assets/9.png',
    modelo: 'Air Max SC'
  },
  {
    id: 10,
    nombre: 'Adidas Original',
    precio: 120.0,
    img: './assets/10.png',
    modelo: 'Handball Spezial'
  },
  {
    id: 11,
    nombre: 'New Original',
    precio: 130.0,
    img: './assets/11.png',
    modelo: 'Air Force'
  },
  {
    id: 12,
    nombre: 'New Balance',
    precio: 100.0,
    img: './assets/12.png',
    modelo: 'NB 9060'
  },
  {
    id: 13,
    nombre: 'New Balance',
    precio: 150.0,
    img: './assets/13.png',
    modelo: 'NB 480'
  },
  {
    id: 14,
    nombre: 'Nike Original',
    precio: 70.0,
    img: './assets/14.png',
    modelo: 'Full Force Low'
  },
  {
    id: 15,
    nombre: 'Nike Original',
    precio: 160.0,
    img: './assets/15.png',
    modelo: 'Air Max SC'
  },
  {
    id: 16,
    nombre: 'Adidas Original',
    precio: 140.0,
    img: './assets/16.png',
    modelo: 'Handball Spezial'
  }
]
const juan = () => {
  // Crear la primera sección
  const section = document.createElement('section')
  const div = document.createElement('div')
  const img = document.createElement('img')

  img.src = './assets/Cover.png'
  img.alt = 'cover'
  img.className = 'logo1'
  div.appendChild(img)
  section.appendChild(div)

  document.body.appendChild(section)
}

const createZapaElement = (zapa) => {
  const divZapa = document.createElement('div')
  divZapa.className = 'zapa'

  const divImg = document.createElement('div')
  const img = document.createElement('img')
  img.src = zapa.img
  img.alt = zapa.nombre

  const divDetalles = document.createElement('div')
  const nombre = document.createElement('h3')
  nombre.textContent = zapa.nombre

  const precio = document.createElement('p')
  precio.textContent = `${zapa.precio.toFixed(2)}€`

  const modelo = document.createElement('p')
  modelo.textContent = zapa.modelo

  divDetalles.appendChild(precio)
  divDetalles.appendChild(modelo)

  divZapa.className = 'flex-conteiner icon3'
  divImg.classList.add('imgContainer')
  divDetalles.className = 'flex-conteiner icon2'

  const btnAgregar = document.createElement('button')
  btnAgregar.textContent = 'Comprar'
  btnAgregar.addEventListener('click', () => {
    alert(`Añadido: ${zapa.nombre} - ${zapa.precio} €`)
  })

  divZapa.appendChild(divImg)
  divImg.appendChild(img)
  divZapa.appendChild(nombre)
  divZapa.appendChild(divDetalles)
  divZapa.appendChild(btnAgregar)

  return divZapa
}

const printZapas = (zapas) => {
  const section = document.getElementById('zapatillas')
  section.innerHTML = ''

  zapas.forEach((zapa) => {
    section.appendChild(createZapaElement(zapa))
  })
}

const createSearchInterface = () => {
  const container = document.createElement('seption')
  document.body.appendChild(container)
  container.id = 'icon4'
  // Campo de entrada para el nombre
  const formDiv = document.createElement('div')
  formDiv.className = 'form-container flex-conteiner' // Clase opcional para estilos
  container.appendChild(formDiv) // Agregar el div al contenedor principal

  // Campo de entrada para el nombre
  const inputNombre = document.createElement('input')
  inputNombre.placeholder = 'Ingresa el nombre de la zapatilla'
  formDiv.appendChild(inputNombre) // Agregar el input al formDiv

  // Campo de entrada para el precio
  const inputPrecio = document.createElement('input')
  inputPrecio.placeholder = 'Ingresa el precio máximo'
  inputPrecio.type = 'number' // Solo permite números
  formDiv.appendChild(inputPrecio) // Agregar el input al formDiv

  // Botón de búsqueda
  const button = document.createElement('button')
  button.textContent = 'Filtrar'
  formDiv.appendChild(button) // Agregar el botón al formDiv

  // Botón de limpiar
  const buttonLimpiar = document.createElement('button')
  buttonLimpiar.textContent = 'Limpiar'
  formDiv.appendChild(buttonLimpiar) // Agregar el botón al formDiv

  const imageContainer = document.createElement('div')
  const image = document.createElement('img')
  image.src = './assets/Vector(1).png' // Ruta de tu imagen
  image.alt = 'avatar'
  imageContainer.className = 'icon5'
  image.className = 'img1'
  imageContainer.appendChild(image) // Agregar la imagen al contenedor
  container.appendChild(imageContainer) // Agregar el contenedor de imagen al contenedor principal

  // Variable para rastrear la visibilidad del contenedor
  let isVisible = true

  // Agregar evento de clic a la imagen para ocultar o mostrar el contenedor del formulario
  image.addEventListener('click', () => {
    isVisible = !isVisible
    // Alternar el estado de visibilidad
    formDiv.style.display = isVisible ? 'flex' : 'none' // Mostrar u ocultar el contenedor manteniendo el estilo
  })

  // Sección para mostrar las zapatillas
  const section = document.createElement('section')
  section.id = 'zapatillas'
  section.className = 'flex-container'
  document.body.appendChild(section)

  // Función para filtrar zapatillas
  button.onclick = () => {
    const searchTerm = inputNombre.value.toLowerCase()
    const exactPrice = parseFloat(inputPrecio.value) // Se busca un precio exacto

    const filteredZapas = zapatillas.filter(
      (zapa) =>
        zapa.nombre.toLowerCase().includes(searchTerm) &&
        (isNaN(exactPrice) || zapa.precio === exactPrice)
    )

    // Cambiar el placeholder según el resultado
    if (filteredZapas.length === zapatillas.length) {
      inputNombre.value = '' // Cambiar a "Todas las categorías"
    } else {
      inputNombre.value = '' // Limpiar el input si no se muestran todas
    }

    displayZapas(filteredZapas)
  }

  // Función para limpiar campos
  buttonLimpiar.onclick = () => {
    inputNombre.value = ''
    inputPrecio.value = ''
    section.innerHTML = '' // Limpiar sección de zapatillas
    printZapas(zapatillas) // Volver a mostrar todas las zapatillas
  }
}

const getRandomZapas = (num) => {
  const shuffled = [...zapatillas].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, num)
}

const displayZapas = (zapas) => {
  const section = document.getElementById('zapatillas')
  mainSection.innerHTML = '' // Limpiar contenido anterior

  if (zapas.length === 0) {
    const sugeridos = getRandomZapas(3) // Obtener 3 productos aleatorios
    const mensaje = document.createElement('p')
    mensaje.textContent =
      'No se encontraron zapatillas. Aquí tienes algunas sugerencias:'
    mainSection.appendChild(mensaje)
    printZapas(sugeridos) // Mostrar productos sugeridos
  } else {
    printZapas(zapas) // Mostrar zapatillas filtradas
  }
}

const footer = document.createElement('footer')
const nav = document.createElement('nav')
nav.className = 'navfinal'

// Crear las secciones del menú
const sections = [
  {
    title: 'Compras con JD',
    links: [
      'Guia de tallas',
      'Buscador de tallas',
      'Descuento de estudiantes',
      'Calendario lanzamientos',
      'Incribite a JDX',
      'JD Blog'
    ]
  },
  {
    title: 'Atecion al Ciente',
    links: [
      'Preguntas frecuentes',
      'Envios y Devoluciones',
      'Seguimientos de Envio',
      'Contacto'
    ]
  },
  {
    title: 'Aviso legal',
    links: [
      'Terminos y Condiciones',
      'Promociones y Condiciones',
      'Politica de privacidad',
      'Politica de Cookies',
      'Ajustes de Cookies ',
      'Accesibilidad'
    ]
  }
]

sections.forEach((section) => {
  const ul = document.createElement('ul')

  const liTitle = document.createElement('li')
  const h4 = document.createElement('h4')
  h4.textContent = section.title
  liTitle.appendChild(h4)
  ul.appendChild(liTitle)

  section.links.forEach((linkText) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.textContent = linkText
    a.href = '#'
    li.appendChild(a)
    ul.appendChild(li)
  })

  nav.appendChild(ul)
})

juan()
createSearchInterface()
// Inicializar
const mainSection = document.createElement('section')
mainSection.id = 'zapatillas'
mainSection.className = 'flex-container'
document.body.appendChild(mainSection)

// Inicializar

printZapas(zapatillas)
// Agregar el ul al nav
// Agregar el nav al footer
footer.appendChild(nav)

// Insertar el footer en el body
document.body.appendChild(footer)
