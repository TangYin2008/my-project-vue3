<script setup lang="ts">
// 1. 按需导入 接口
import { getArticleList } from '@/api/home'
// 2. 定义一个响应式数据 来接收
const listData = ref([])
// 3. 使用es7中的async await异步方法调用接口
const getBanner = async () => {
  // title可传可不传
  const res = await getArticleList()
  // 5. 接口成功发起后，将数据传给响应式数据
  listData.value = res.data
}
onMounted(() => {
  // 4.调用钩子，发送请求
  getBanner()
})
</script>

<template>
  <main class="relative top-0 left-0">
    <!-- Tips小组件 -->
    <FixedTips></FixedTips>
    <Container>
      <!-- 头部 -->
      <LogoTitle></LogoTitle>
      <hr />
      <!-- 主体 -->
      <ContentGrid :listData="listData"></ContentGrid>
      <!-- 尾部 -->
    </Container>
    <FooterFixed></FooterFixed>
  </main>
</template>
