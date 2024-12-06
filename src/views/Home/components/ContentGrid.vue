<script setup lang="ts">
defineProps({
  listData: {
    type: Array as PropType<Array<listDataItemType>>,
    default: () => [],
  },
})
</script>

<template>
  <div class="w-full relative z-1" v-for="el in listData" :key="el.parentname">
    <slot :el="el">
      <p
        class="flex justify-items-start w-full text-2xl font-600 color-[#2c3e50]"
        :class="{ 'my-6': el.parentname, 'mt-6': !el.parentname }"
      >
        {{ el.parentname }}
      </p>
      <div class="w-full">
        <el-row :gutter="20">
          <el-col class="mb-4" :xs="24" :sm="8" v-for="item in el.subCategories" :key="item.title">
            <div
              class="h-full cursor-pointer bg-[#268915] bg-opacity-4 rounded-1 border-gray-200 border border-solid hover:shadow-[0_18px_32px_-18px_#000] hover:-translate-y-1 hover:origin-top;"
            >
              <a :href="item.href" target="_blank">
                <div class="bg-[#fbfbfb]">
                  <div class="h-26 flex justify-center items-center text-xl font-100">
                    {{ item.title }}
                  </div>
                  <div class="flex justify-items-start items-end text-xs p-1">
                    <span v-for="items in item.products" :key="items.id">
                      <img v-if="items.type === 'image'" :src="items.url" alt="" />
                      <span
                        class="p-.5 bg-[#4caf50] text-white mr-1 rounded-md font-500 text-xs inline-block"
                        v-else
                        >{{ items.name }}</span
                      >
                    </span>
                  </div>
                </div>
                <div
                  class="w-full line-clamp-3 text-left text-sm px-2 py-1 color-[#9c9c9c] text-ellipsis overflow-hidden font-400"
                >
                  {{ item.des }}
                </div>
              </a>
            </div>
          </el-col>
        </el-row>
      </div>
    </slot>
  </div>
</template>

<style scoped lang="scss"></style>
