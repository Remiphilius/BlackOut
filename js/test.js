let l1 = (Math.random() - 0.5) * 0.2 + 48.8;
let l2 = (Math.random() - 0.5) * 0.2 + 2.3;

const pos = {lt: l1, lg:l2};

function initialize() {
    var fenway = {lat: pos.lt, lng: pos.lg};
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
            position: fenway,
            pov: {
                heading: 34,
                pitch: 5
            },
            showRoadLabels: false
        });
    
}