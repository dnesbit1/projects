  function myMap() {

  var mapProp= {
    center: new google.maps.LatLng(0, 0),
    zoom: 2,
  };
  var map = new google.maps.Map(document.getElementById("GoogleMap"),mapProp);

  /* MARKER FEATURE */
  var Chicago = new google.maps.Marker({
    position: {lat: 41.8818, lng: -87.6232},
    map,
    title: "Chicago, Illinois"
  });

  var Atlanta = new google.maps.Marker({
    position: {lat: 33.7537, lng: -84.3863},
    map,
    title: "Atlanta, Georgia"
  });

  var Tokyo = new google.maps.Marker({
  position: {lat: 35.685, lng: 139.753},
    map,
    title: "Tokyo, Japan"
  });
  


  /* CLICK TO ZOOM FEATURE */
  Chicago.addListener("click", () => {
    map.setZoom(10);
    map.setCenter(Chicago.getPosition());
    ChicagoInfo.open({anchor: Chicago, map});
  });

  Atlanta.addListener("click", () => {
    map.setZoom(10);
    map.setCenter(Atlanta.getPosition());
    AtlantaInfo.open({anchor: Atlanta, map});
  });

  Tokyo.addListener("click", () => {
    map.setZoom(10);
    map.setCenter(Tokyo.getPosition());
    TokyoInfo.open({anchor: Tokyo, map});
  });



  /* CONTENT INFO FEATURE */
  var ChicagoInfo = new google.maps.InfoWindow({
    content: "Chicago, Illinois"
  });

  var AtlantaInfo = new google.maps.InfoWindow({
    content: "Atlanta, Georgia"
  });

  var TokyoInfo = new google.maps.InfoWindow({
    content: "Tokyo, Japan"
  });

  function init() {

    function display() {
      var email = "dnesbit1@hawk.illinoistech.edu"
      alert("If you have any questions, contact me at: " + email);
    }
    var interact = document.getElementById("questions");

    interact.addEventListener("click", display);
  }

  window.addEventListener('load', init);

}