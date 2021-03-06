ymaps.ready(init);
function init() {
  var map = new ymaps.Map("YMapsID", {
    center: [55.740684, 37.618174],
    zoom: 15
  }, {
      searchControlProvider: 'yandex#search'
    }),
  // map.behaviors.disable('scrollZoom');
  placemark = new ymaps.Placemark([55.740684, 37.618174], {
    hintContent: 'Твой Дом',
    balloonContentHeader: 'Твой Дом',
    balloonContentBody: 'Москва, Старомонетный переулок, 10'
  });
  map.geoObjects.add(placemark);
}