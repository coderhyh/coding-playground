<template>
  <div>
    <ElSwitch v-model="isUseDefer" active-text="使用useDefer" inactive-text="不使用useDefer" />
    <div>5w条数据渲染时间: {{ time }} ms</div>
    <div class="container">
      <div v-for="item in 100" :key="item">
        <div v-if="isUseDefer ? defer(item) : true">
          <p v-for="i in 500" :key="i">
            hello world {{ i }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElSwitch } from 'element-plus'
import { onMounted, ref, watch } from 'vue'
import 'element-plus/es/components/switch/style/css'

/**
 * 延迟渲染组件的钩子函数
 * @param {number} endCount - 结束计数值，表示最大渲染数量
 * @returns {Function} 返回一个函数，用于判断当前项是否应该被渲染
 * @description
 * 该函数使用requestAnimationFrame逐帧增加计数值，
 * 通过比较当前项与计数值来决定是否渲染，
 * 实现了组件的分批渲染，提高大量组件渲染时的性能
 */
function useDefer(endCount: number): (current: number) => boolean {
  const count = ref(0)
  function update() {
    count.value++
    if (count.value === endCount) {
      return
    }
    requestAnimationFrame(update)
  }
  update()
  return (current: number) => current <= count.value
}

const defer = useDefer(100)
const time = ref()
const isUseDefer = ref(localStorage.getItem('isUseDefer') === 'true')
const start = performance.now()
onMounted(() => {
  const end = performance.now()
  time.value = (end - start).toFixed(2)
})
watch(isUseDefer, (newVal) => {
  localStorage.setItem('isUseDefer', newVal.toString())
  location.reload()
})
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  max-height: 300px;
  overflow-y: auto;
}

p {
  border: 1px solid red;
}
</style>
