// "use strict";

// function initMap() {
//   const center = new google.maps.LatLng(40.6469, -73.9554);
//   const map = new google.maps.Map(document.getElementById("map"), {
//     mapId: "b9a88885f344febd",
//     zoom: 12,
//     center: center,
//   });

//   const imgMarker = "./img/svg/pin.svg";

//   new google.maps.Marker({
//     position: center,
//     icon: imgMarker,
//     map: map,
//     opacity: 1,
//     width: "12px",
//   });
// }

// window.initMap = initMap;

function initMap() {
  let placePosition = { lat: 40.64226, lng: -73.95577 };
  let mapPosition = { lat: 40.6126, lng: -73.9199 };

  let map = new google.maps.Map(document.getElementById("map"), {
    mapId: "b9a88885f344febd",
    zoom: 12,
    center: mapPosition,
    disableDefaultUI: true,
  });

  let markerImage = {
    url: "./img/svg/pin.svg",
    anchor: new google.maps.Point(54, 54),
  };

  new google.maps.Marker({
    position: placePosition,
    map: map,
    icon: markerImage,
  });
}
