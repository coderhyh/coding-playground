<template>
  <div class="relative h-500px">
    <div class="absolute left-5px top-5px z-999 w200px">
      <el-select v-model="mapStyle" placeholder="Select Map Style" size="small" @change="changeMapStyle">
        <el-option label="标准" value="standard" />
        <el-option label="街道" value="streets-v12" />
        <el-option label="户外" value="outdoors-v12" />
        <el-option label="灯" value="light-v11" />
        <el-option label="深色" value="dark-v11" />
        <el-option label="卫星" value="satellite-v9" />
        <el-option label="标准卫星" value="standard-satellite" />
        <el-option label="卫星街道" value="satellite-streets-v12" />
        <el-option label="导航日" value="navigation-day-v1" />
        <el-option label="导航夜" value="navigation-night-v1" />
      </el-select>
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
const mapStyle = ref('standard')

onMounted(() => {
  map.value = new mapboxgl.Map({
    container: mapRef.value!,
    style: `mapbox://styles/mapbox/${mapStyle.value}`,
    center: [121.5, 31.23],
    projection: 'globe',
    zoom: 1,
  })
})

const changeMapStyle = (value: string) => {
  map.value!.setStyle(`mapbox://styles/mapbox/${value}`)
}
</script>
