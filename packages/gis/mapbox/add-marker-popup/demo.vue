<template>
  <div class="h-500px">
    <div ref="mapRef" class="h-100% w-100%" />
  </div>
</template>

<script setup lang="ts">
import type { LngLatLike } from 'mapbox-gl'
import mapboxgl from 'mapbox-gl'
import { MapboxEnum } from '~/enums/mapbox'

mapboxgl.accessToken = MapboxEnum.ACCESS_TOKEN
const mapRef = ref<HTMLDivElement>()
const map = ref<mapboxgl.Map>()

onMounted(() => {
  const monument: LngLatLike = [120.153576, 30.287459]
  map.value = new mapboxgl.Map({
    container: mapRef.value!,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: monument,
    projection: 'globe',
    zoom: 15,
  })
  map.value.addControl(new mapboxgl.FullscreenControl())
  const popup = new mapboxgl.Popup({ offset: 25 }).on('open', (e) => {
    const lngLat = e.target.getLngLat()
    e.target.setText(`俺是一个弹窗, 坐标是\n${lngLat.lng}\n${lngLat.lat}`)
  })

  new mapboxgl.Marker({
    draggable: true,
  })
    .setLngLat(monument)
    .setPopup(popup)
    .addTo(map.value)
    .on('dragstart', (e) => {
      popup.remove()
    })
})
</script>
