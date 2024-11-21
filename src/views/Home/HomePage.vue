<script setup lang="ts">
import FixedTips from './components/FixedTips.vue'
import LogoTitle from './components/LogoTitle.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'

const listData: listDataItemType[] = [
  {
    parentId: '1',
    paneName: '',
    children: [
      {
        id: '2',
        title: 'Vue3中文文档',
        href: 'https://cn.vuejs.org/',
        source: [
          {
            id: '3',
            type: 'source',
            name: '官方',
          },
          {
            id: '20',
            type: 'image',
            url: 'https://badgen.net/github/stars/vuejs/core',
          },
        ],
        desc: 'Vue3官方中文文档',
      },
      {
        id: '11',
        title: 'Vue3英文文档',
        href: 'https://vuejs.org/',
        source: [
          {
            id: '12',
            type: 'source',
            name: '官方',
          },
          {
            id: '20',
            type: 'image',
            url: 'https://badgen.net/github/stars/vuejs/core',
          },
        ],
        desc: 'Vue3官方英文文档',
      },
      {
        id: '9',
        title: '前端面试题库',
        href: 'https://vue3js.cn/interview/',
        source: [
          {
            id: '10',
            type: 'source',
            name: '新增',
          },
          {
            id: '101',
            type: 'source',
            name: '社区维护',
          },
          {
            id: '102',
            type: 'source',
            name: '进行中',
          },
        ],
        desc: '工作日每天一道经典面试题更新，风雨无阻',
      },
    ],
  },
  {
    parentId: '5',
    paneName: 'Vue3生态支持',
    children: [
      {
        id: '17',
        title: 'Vue CLI',
        href: 'https://cli.vuejs.org/zh/index.html',
        source: [
          {
            id: '18',
            type: 'source',
            name: '官方生态',
          },
        ],
        desc: 'Vue开发的标准工具',
      },
      {
        id: '21',
        title: 'Vue Router',
        href: 'https://router.vuejs.org/zh/index.html',
        source: [
          {
            id: '22',
            type: 'source',
            name: '官方生态',
          },
        ],
        desc: 'Vue Router 4.0提供了 Vue 3支持，并且有一些自己的突破性变化',
      },
      {
        id: '23',
        title: 'VueX',
        href: 'https://vuex.vuejs.org/zh/index.html',
        source: [
          {
            id: '24',
            type: 'source',
            name: '官方生态',
          },
        ],
        desc: 'Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化',
      },
      {
        id: '25',
        title: 'Vite',
        href: 'https://cn.vitejs.dev/',
        source: [
          {
            id: '26',
            type: 'source',
            name: '官方生态',
          },
        ],
        desc: 'Vite 下一代前端开发与构建工具',
      },
      {
        id: '27',
        title: 'Pinia',
        href: 'https://pinia.web3doc.top/',
        source: [
          {
            id: '28',
            type: 'source',
            name: '爱好者翻译',
          },
        ],
        desc: 'Pinia 是 Vue 的存储库，它允许您跨组件/页面共享状态',
      },
    ],
  },
  {
    parentId: '13',
    paneName: 'Vue3组件库',
    children: [
      {
        id: '14',
        title: 'Element Plus',
        href: 'https://element-plus.org/zh-CN/#/zh-CN/component/installation',
        source: [
          {
            id: '15',
            type: 'source',
            name: 'PC端',
          },
          {
            id: '16',
            type: 'image',
            url: 'https://badgen.net/github/stars/element-plus/element-plus',
          },
        ],
        desc: 'Element Plus，一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库',
      },
      {
        id: '6',
        title: 'Ant Design of Vue',
        href: 'https://antdv.com/docs/vue/introduce-cn/',
        source: [
          {
            id: '7',
            type: 'source',
            name: 'PC端',
          },
          {
            id: '8',
            type: 'source',
            name: 'Ant-design',
          },
          {
            id: '8',
            type: 'image',
            url: 'https://badgen.net/github/stars/vueComponent/ant-design-vue',
          },
        ],
        desc: 'Element Plus，一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库',
      },
    ],
  },
]
</script>

<template>
  <main>
    <!-- Tips小组件 -->
    <FixedTips></FixedTips>
    <Container>
      <!-- 头部 -->
      <LogoTitle></LogoTitle>
      <hr />
      <!-- 主体 -->
      <Content :listData="listData"></Content>
      <!-- 尾部 -->
      <Footer></Footer>
    </Container>
  </main>
</template>
