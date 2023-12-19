<script setup lang="ts">
defineProps<{
     success?: Boolean,
}>()
</script>

<template>
<div class="absolute transform max-w-full w-[40%] m-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
    <div style="background: #D9D9D9;border-radius: 5px;" class="grid grid-cols-5 w-full">
      <div :style="success ? 'background: #61FF00;' : 'background: #F00;'" style="border-radius: 15px;margin: 5% 50% 5% 5%;" class="flex items-center h-16">
        <img :src="success ? '../src/assets/icon_success.png' : '../src/assets/icon_error.png'" class="m-auto">
      </div>
      <div class="col-span-4 text-black flex items-center ml-[25%]">
        <p><b>Makse oli edukas!</b></p>
      </div>
    </div>
</div>
</template>