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
      <div class="col-span-3 text-black flex items-center" :innerHTML="success ? '<p>Domeen <b>https://test.ee</b> on saadval!</p>' : '<p>Domeen <b>https://test.ee</b> ei ole saadval!</p>'">
      </div>
      
      <div  class="flex items-center">
        <div>

        </div>
        <div :class="success ? '' : 'hidden'">
            <a href="#/checkoutForm"><button style="background-color: rgba(255, 220, 220, 1);" class=" text-white rounded-[15px] w-[100px] h-[40px] whitespace-nowrap"><div class="flex items-center justify-center	">Osta<img style="margin-left: 15%;" src="../assets/icon_basket.png" alt=""></div></button></a>
        </div>
      </div>
    </div>
</div>
</template>