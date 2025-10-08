// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
  /**
   * ===========================
   * 🌍 Initialize Leaflet Map
   * ===========================
   * Target: #global-map element
   * Center: Washington, DC (38.9072, -77.0369)
   * Zoom: 9
   * Zoom Control: Disabled (can be enabled if needed)
   */
  var map = L.map("global-map", {
    center: [38.9072, -77.0369],
    zoom: 9,
    zoomControl: false,
  });

  /**
   * ===========================
   * 🗺️ Add Base Map Tiles
   * ===========================
   * Provider: CartoDB Voyager
   * Max Zoom: 19
   * Attribution: CARTO + OpenStreetMap
   */
  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://carto.com/attributions">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  ).addTo(map);

  /**
   * ===========================
   * 📍 Add Marker
   * ===========================
   * Location: Washington, DC
   */
  L.marker([38.9072, -77.0369]).addTo(map);
});
