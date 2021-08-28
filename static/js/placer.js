ymaps.ready(init);

function init() {
    const myMap = new ymaps.Map("map", {
            center: [42.034611, -87.942657],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        });

    myMap.geoObjects
        .add(new ymaps.Placemark([42.034611, -87.942657], {
        }, {
            preset: 'islands#redDotIconWithCaption'
        }))
}