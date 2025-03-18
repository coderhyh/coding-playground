<template>
  <div class="relative h-500px">
    <div class="absolute left-5px top-5px z-1 w200px">
      <el-button type="primary" @click="flyTo([121.5, 31.23])">
        To 上海
      </el-button>
      <el-button type="primary" @click="flyTo([116.46, 39.92])">
        To 北京
      </el-button>
    </div>
    <div ref="mapRef" class="h-100% w-100%" />
  </div>
</template>

<script setup lang="ts">
import mapboxgl from 'mapbox-gl'
import { MapboxEnum } from '~/enums/mapbox'

mapboxgl.accessToken = MapboxEnum.ACCESS_TOKEN
const mapRef = ref<HTMLDivElement>()
const map = ref<mapboxgl.Map>()

const flyTo = (center: [number, number]) => {
  map.value?.flyTo({
    center,
    zoom: 10,
    speed: 1,
  })
}

onMounted(() => {
  map.value = new mapboxgl.Map({
    container: mapRef.value!,
    style: 'mapbox://styles/mapbox/standard',
    center: [121.5, 31.23],
    projection: 'globe',
    zoom: 1,
  })
})
</script>
