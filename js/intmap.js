// On initialise la latitude et la longitude de Paris (centre de la carte)
var lat = 48.852969;
var lon = 2.349903;
var macarte = null;
var gssPos = null;
var gssLat = null;
var gssLon = null;
var gssBttElt = null;
var nextElt = null;
var body = document.getElementsByTagName("body")[0];
var greenIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    iconSize: [30, 49]
});
var redIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [30, 49]
});
// Fonction d'initialisation de la carte
function initMap() {
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('carte').setView([lat, lon], 11);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte);
    macarte.addEventListener('click', function (e) {
        if (gssPos !== null) {
            gssPos.remove();
        }
        gssLat = e.latlng.lat.toFixed(6);
        gssLon = e.latlng.lng.toFixed(6);
        console.log(gssLat + ", " + gssLon);
        gssPos = L.marker([gssLat, gssLon], {
            //icon: myIcon
        });
        gssPos.addTo(macarte);
        if (nextElt === null) {
            var prElt = body.childNodes[0];
            nextElt = document.createElement("button");
            nextElt.id = "laSuite";
            nextElt.textContent = "Ça va mieux !";
            prElt.appendChild(nextElt);
        }
    });
}
window.onload = function () {
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    setTimeout(initMap, 700);
};
document.addEventListener("click", function () {
    if (gssBttElt === null && nextElt !== null) {
        gssBttElt = document.getElementById("laSuite");
        gssBttElt.addEventListener("click", function () {
            var cartElt = document.getElementById("carte");
            var panoElt = document.getElementById("pano");
            nextElt.remove();
            cartElt.remove();
            panoElt.remove();
            answerMapElt = document.createElement("div");
            answerMapElt.id = "answerMap";
            body.appendChild(answerMapElt);
            var meanLat = (pos.lt + parseFloat(gssLat)) / 2;
            var meanLon = (pos.lg + parseFloat(gssLon)) / 2;
            console.log(meanLon);
            macarte = L.map('answerMap').setView([meanLat, meanLon], 12);
            L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                // Il est toujours bien de laisser le lien vers la source des données
                attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                minZoom: 1,
                maxZoom: 20
            }).addTo(macarte);
            gssPos = L.marker([gssLat, gssLon], {
                icon: redIcon
            });
            gssPos.addTo(macarte);
            var reaPos = L.marker([pos.lt, pos.lg], {
                icon: greenIcon
            });
            reaPos.addTo(macarte);
        });
    }
})
