let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 },
    zoom: 8,
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        map.setCenter(pos);

        new google.maps.Marker({
          position: pos,
          map,
          title: "Your Location",
        });
      },
      () => {
        handleLocationError(true, map.getCenter(), map);
      }
    );
  } else {
    handleLocationError(false, map.getCenter(), map);
  }
}

function handleLocationError(browserHasGeolocation, pos, map) {
  const infoWindow = new google.maps.InfoWindow({
    content: browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation.",
    position: pos,
  });

  new google.maps.Marker({
    position: pos,
    map,
    title: "Error",
  });

  infoWindow.open(map);
}