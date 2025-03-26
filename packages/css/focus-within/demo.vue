<template>
  <div>
    <input type="text" />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
div {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus-within {
    background-color: pink;
  }

  input {
    width: 100%;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 4px;
  }
}
</style>
