// Leaflet карта
const map = L.map('map').setView([48.8566, 2.3522], 3); // Париж

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

L.marker([48.8566, 2.3522]).addTo(map)
  .bindPopup('Вы здесь потерялись 😅')
  .openPopup();