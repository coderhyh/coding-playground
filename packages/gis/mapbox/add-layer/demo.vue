<template>
  <div class="h-500px">
    <div ref="mapRef" class="h-100% w-100%" />
  </div>
</template>

<script setup lang="ts">
import mapboxgl from 'mapbox-gl'
import { MapboxEnum } from '~/enums/mapbox'
import urbanAreas from './ne_50m_urban_areas.json'

mapboxgl.accessToken = MapboxEnum.ACCESS_TOKEN
const mapRef = ref<HTMLDivElement>()
const map = ref<mapboxgl.Map>()

onMounted(() => {
  map.value = new mapboxgl.Map({
    container: mapRef.value!,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [120.153576, 30.287459],
    projection: 'globe',
    zoom: 1,
  })
  map.value.addControl(new mapboxgl.FullscreenControl())
  map.value.on('load', () => {
    map.value?.addSource('urban-areas', {
      type: 'geojson',
      data: urbanAreas as GeoJSON.GeoJSON,
    })

    map.value?.addLayer({
      id: 'urban-areas',
      source: 'urban-areas',
      type: 'fill',
      paint: {
        'fill-color': '#f08',
        'fill-opacity': 0.4,
      },
    })
  })
})
</script>
