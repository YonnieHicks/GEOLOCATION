let apiKey = "411f2ff45c380a6fa17d84d2df885892";
let ipAddress = null;

let url = `http://api.ipstack.com/134.201.250.155?access_key=411f2ff45c380a6fa17d84d2df885892`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById("ip-address").innerHTML = data.ip;
        document.getElementById("city").innerHTML = data.city;
        document.getElementById("region").innerHTML = data.region_name;
        document.getElementById("country").innerHTML = data.country_name;
        document.getElementById("latitude").innerHTML = data.latitude;
        document.getElementById("longitude").innerHTML = data.longitude;
    })
    .catch(error => {
        console.error(error);
    });