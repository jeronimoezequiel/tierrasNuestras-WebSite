// Inicializa el mapa con las coordenadas actualizadas y un nivel de zoom más alto
const map = L.map('map').setView([-34.56768881832958, -58.52741831465856], 16); // Ajusta el zoom según sea necesario

// Añade la capa de mapa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18, // Cambia a un valor más alto si es necesario
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Crear un icono personalizado usando HTML
const customIcon = L.divIcon({
    html: '<i class="ri-map-pin-line" style="font-size: 24px; color: red;"></i>',
    className: 'custom-marker', // Clase personalizada para estilos adicionales
    iconSize: [24, 24], // Tamaño del icono
    iconAnchor: [12, 24], // Punto de anclaje del icono
});

// Añadir un marcador al mapa usando el icono personalizado
L.marker([-34.56768881832958, -58.52741831465856], { icon: customIcon }).addTo(map)
    .bindPopup('Tierras Nuestras Srl.<br>Mitre 2444, Villa Maipu.')
    .openPopup();
