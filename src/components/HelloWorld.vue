<script setup lang="ts">
const target = ref(null)
// tracks mouse position
const { x, y, isOutside } = useMouseInElement(target)
</script>

<template>
  <div ref="target" class="w-50 h-50 border-gray border-solid border-1">
    <el-button type="primary">提交</el-button>
    <p>x: {{ x }}</p>
    <p>y: {{ y }}</p>
    <p>isOutside: {{ isOutside }}</p>
  </div>
</template>

<style scoped></style>
