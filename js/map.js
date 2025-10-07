document.addEventListener("DOMContentLoaded", function () {
      // Initialize map
      var map = L.map("global-map", {
        center: [38.9072, -77.0369], // Washington, DC
        zoom: 9,
        zoomControl: false, 
      });
      // Add map tiles (Google-like style)
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        {
          maxZoom: 19,
          attribution:
            '&copy; <a href="https://carto.com/attributions">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
      ).addTo(map);

      L.marker([38.9072, -77.0369]).addTo(map);
    });