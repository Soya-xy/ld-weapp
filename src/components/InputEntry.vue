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
      p="x-4 y-2"
      w="250px"
      m="t-5 auto"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700 solid"
      outline="none active:none"
      box-border w-full
    >
      <input
        v-model="name"
        placeholder="What's your name?"
        type="text"

        mr-0 w-full
      >
    </view>
    <view>
      <button
        :disabled="!name"
        class="m-auto w-120rpx rounded bg-teal-600 px-4 py-1 text-sm text-white"
        m="t-3 auto"
        bg-red-500
        @click="go"
      >
        GO
      </button>
      <view u-mt2>
        <nut-button type="primary" @click="go">
          主要按钮2
        </nut-button>
      </view>
    </view>
  </view>
</template>
