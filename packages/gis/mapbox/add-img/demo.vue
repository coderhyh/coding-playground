<template>
  <div class="h-500px">
    <div ref="mapRef" class="h-100% w-100%" />
  </div>
</template>

<script setup lang="ts">
import mapboxgl from 'mapbox-gl'
import { MapboxEnum } from '~/enums/mapbox'

mapboxgl.accessToken = MapboxEnum.ACCESS_TOKEN
const mapRef = ref<HTMLDivElement>()
const map = ref<mapboxgl.Map>()

onMounted(() => {
  map.value = new mapboxgl.Map({
    container: mapRef.value!,
    style: 'mapbox://styles/mapbox/standard',
    center: [120.153576, 30.287459],
    projection: 'globe',
    zoom: 1,
  })

  map.value.on('style.load', () => {
    map.value?.addSource('image', {
      type: 'image',
      url: '/coding-playground/avatar.jpg',
      coordinates: [
        [120.153576, 30.287459],
        [120.153576 + 10, 30.287459],
        [120.153576 + 10, 30.287459 + 10],
        [120.153576, 30.287459 + 10],
      ],
    })

    map.value?.addLayer({
      id: 'image',
      source: 'image',
      type: 'raster',
    })
  })
})
</script>
