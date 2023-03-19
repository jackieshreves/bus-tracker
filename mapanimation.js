const busStops = [
    [40.002759, -83.010727],
    [40.003986, -83.012686],
    [40.004131, -83.015575],
    [39.999376, -83.022825],
    [39.997660, -83.018146],
    [39.995517, -83.012175],
    [39.997877, -83.009578],
  ];

  mapboxgl.accessToken ='pk.eyJ1IjoiamFja2V0c2xlZXZlcyIsImEiOiJjbGV1Y3A1aTYwNmYyM3hydG44ZnBmZXkxIn0.5dx7ML018rvNdV6Bv9bFcA';
  //input your MapBox access token above

  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [39.999577, -83.012197],
    zoom: 14,
  });

let marker = new mapboxgl.Marker()
  .setLngLat([40.002759, -83.010727])
  .addTo(map);

let counter = 0;
function move() {
  setTimeout(()=>{
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 2000);
};