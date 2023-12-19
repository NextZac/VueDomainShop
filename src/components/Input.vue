<script setup lang="ts">
defineProps<{
    placeholder?: string,
}>()
</script>

<template>
    <div class="flex flex-row content-center border-2 border-solid border-black rounded-full w-[18rem]">
      <div class="rounded-l-full w-[2rem] h-full border-r-2 border-solid border-black">
        <div class="flex items-center justify-center mt-[20%] ml-[15%]">
          <slot></slot>
        </div>
      </div>
      <div class="bg-[#D85555] rounded-r-full w-full">
              <input :placeholder="placeholder" class="bg-transparent border-0 ml-2 placeholder:text-white" type="text">
      </div>
    </div>
</template>