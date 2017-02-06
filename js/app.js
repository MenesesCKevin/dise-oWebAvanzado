var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map_canvas'), {
    center: {lat: 19.3278803, lng: -99.1842446},
    zoom: 6
  });
}
$(".button-collapse").sideNav();
$(document).ready(function(){
  $('.slider').slider();
      $('.parallax').parallax();
      $('.carousel').carousel();
      $('select').material_select();
});
