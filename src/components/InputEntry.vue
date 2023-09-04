<script setup lang="ts">
const name = ref('')
function go() {
  if (name.value) {
    uni.navigateTo({
      url: `/pages/hi?name=${name.value}`,
    })
  }
}
</script>

<template>
  <view>
    <view
      u-p="x-4 y-2"
      u-w="250px"
      u-m="t-5 auto"
      u-text="center"
      u-bg="transparent"
      u-border="~ rounded gray-200 dark:gray-700 solid"
      u-outline="none active:none"
      u-box-border
      u-w-full
    >
      <input
        v-model="name"
        placeholder="What's your name?"
        u-type="text"
        u-w-full
        u-mr-0
      >
    </view>
    <view>
      <button
        :disabled="!name"
        u="m-auto w-120rpx rounded bg-teal-600 px-4 py-1 text-sm text-white"
        u-m="t-3 auto"
        class="u-bg-red-500"
        @click="go"
      >
        GO
      </button>
      <view u-mt2>
        <tm-button type="primary">
          测试自动引入
        </tm-button>
      </view>
    </view>
  </view>
</template>
