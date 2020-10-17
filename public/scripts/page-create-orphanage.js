const map = L.map('mapid').setView([-26.9142542,-49.0752233], 15)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})


let marker

// create and add markers
//() => {} isso é uma função
map.on('click', (event) => {
  const lat = event.latlng.lat
  const lng = event.latlng.lng

  document.querySelector('[name=lat]').value = lat
  document.querySelector('[name=lng]').value = lng

  //remove ico
  marker && map.removeLayer(marker)

  //add icon layer
  marker = L.marker([lat, lng], {icon}).addTo(map)
})

//adicionar campo de fotos

function addPhotoField(){
  //pegar o container de fotos #images
  const container = document.querySelector('#images')
  //depois de pegar, temos que duplicar o .new-upload
  const fieldsContainer = document.querySelectorAll('.new-upload')

  // fazer o clone da ultima imagem selecionada
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

  //verificar se o campo esta vazio, se sim, não adicionar ao container
  const input = newFieldContainer.children[0]

  if (input.value == "") {
    return
  }
  //limpando o campo antes de fazer o append
  newFieldContainer.children[0].value = ''
  //adicionar o colne ao container #images
  container.appendChild(newFieldContainer)
}

function deleteField (event) {
  const span = event.currentTarget
  const fieldsContainer = document.querySelectorAll('.new-upload')
  if (fieldsContainer.length < 2) {
    span.parentNode.children[0].value = ''
    return
  }

  span.parentNode.remove()
}

//troca do sim e não

function toggleSelect (event) {

  //retirar a classe active dos botoes
  document.querySelectorAll('.button-select button')
  .forEach((button) => button.classList.remove('active'))

  //colocar a .active no botao clicado
  const button = event.currentTarget
  button.classList.add('active')

  //atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]')

  input.value = button.dataset.value
}