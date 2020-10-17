// const options = {
//     dragging: false,
//     touchZoom: false,
//     doubleClickZoom: false,
//     scrollWheelZoom: false,
//     zoomControl: false
// }

const map = L.map("mapid").setView([-26.9142542, -49.0752233], 15)

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

L.marker([-26.9142542, -49.0752233], { icon }).addTo(map)

function selectImage(event) {
  const button = event.currentTarget

  // remover todas as classes .active
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach( (button) => {
      button.classList.remove("active")
  })

  // selecionar a imagem clicada
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  //atualizar o container de imagem
  imageContainer.src = image.src

  //adicionar a classe .active para o botão clicado
  button.classList.add("active")
}
