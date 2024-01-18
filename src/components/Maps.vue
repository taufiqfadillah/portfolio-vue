<template>
  <div id="map1" class="gmap gmap-sm mt-4 border-radius box-shadow" :data-latitude="latitude" :data-longitude="longitude"></div>
</template>

<script>
import { onMounted, ref } from 'vue';

let gmapInitialized = false;
let gmapCallbacks = [];

function initGMaps(callback) {
  if (!gmapInitialized) {
    window.gmapInit = () => {
      gmapInitialized = true;
      callback();
      gmapCallbacks.forEach((cb) => cb());
      gmapCallbacks = [];
    };
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAoctLUyf0vw90E6MofFzsKd4r9nIwGuJM&callback=gmapInit';
    document.head.appendChild(script);
  } else {
    callback();
  }
}

export default {
  setup() {
    const latitude = ref(-7.799218199879909);
    const longitude = ref(110.34803151230525);

    onMounted(() => {
      initGMaps(() => {
        const mapCanvas = document.querySelector('.gmap');
        if (mapCanvas) {
          const map = new GMaps({
            el: '#' + mapCanvas.id,
            lat: latitude.value,
            lng: longitude.value,
            zoom: 16,
            scrollwheel: false,
            styles: [],
          });
          map.addMarker({ lat: latitude.value, lng: longitude.value });
        }
      });
    });

    return { latitude, longitude };
  },
};
</script>
