var map = L.map('map').setView([50, 10], 6);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var mvtSource = new L.TileLayer.MVTSource({
  url: "http://localhost:9999/{z}/{x}/{y}.pbf"
});

map.addLayer(mvtSource);