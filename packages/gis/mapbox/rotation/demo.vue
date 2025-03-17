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

// 自转效果
const rotation = () => {
  const center = map.value?.getCenter()
  if (center) {
    center.lng += 2
    map.value?.easeTo({
      center,
      duration: 1000,
      easing: t => t,
    })
  }
}
onMounted(() => {
  map.value = new mapboxgl.Map({
    container: mapRef.value!,
    style: 'mapbox://styles/mapbox/standard',
    center: [121.5, 31.23],
    projection: 'globe',
    zoom: 1,
  })
  rotation()
  map.value?.on('move', rotation)
})
</script>
