var gssBttElt = null;
var divMap = null;
var bodyElt = null;

document.addEventListener("click", function(){
    if(gssBttElt === null){
        gssBttElt = document.getElementById("laSuite");
        gssBttElt.addEventListener("click", function(){
            divMap = document.getElementById("mapDiv");
            divMap.remove();
            initMap();
        });
    }
})

function initMap(){
    bodyElt = document.getElementsByTagName("body")[0];
    divMap = document.createElement("div");
    divMap.id = "mapDiv";
    bodyElt.appendChild(divMap);
    var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osm = new L.TileLayer(osmUrl, {minZoom:2, maxZoom:19});		

    var googleStreets = new L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{minZoom:1, maxZoom:19, subdomains:['mt0','mt1','mt2','mt3']});

    var googleSat = new L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{minZoom:1, maxZoom: 21,subdomains:['mt0','mt1','mt2','mt3']});
    
    var map = new L.Map('mapDiv', { doubleClickZoom:false, zoomControl:false, maxBounds:([[90,-270],[-90,270]]) });
    
    L.control.layers({"OSM (Mapnik)": osm, "Google Street": googleStreets, "Google Earth": googleSat}).addTo(map);

    map.addLayer(osm);
    var map_set = "osm";
    map.fitBounds([[0,-180],[0,180]]);
}
