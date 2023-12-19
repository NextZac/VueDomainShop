<script setup lang="ts">
defineProps<{
    currentState?: Number
}>()
</script>

<template>
    <div class="absolute" style="inset: 0">
      <div class="w-[353px] h-3 static">
        <div :class="currentState === 1 || currentState === 2 ? 'bg-[#fa0000]' : 'bg-[#FFFFFF]'"
          class=" rounded-[50%] w-[13px] h-3 absolute left-[50%] right-[50%] top-[105px]"
        ></div>
        <div :class="currentState === 1 || currentState === 2 ? 'bg-[#fa0000]' : 'bg-[#FFFFFF]'"
          class=" w-[81px] h-0.5 absolute left-[45.75%] right-[50%] top-[110px]"
        ></div>
        <div :class="currentState === 2 ? 'bg-[#fa0000]' : 'bg-[#FFFFFF]'"
          class=" rounded-[50%] w-[13px] h-3 absolute left-[55%] right-[50%] top-[105px]"
        ></div>
        <div :class="currentState === 2 ? 'bg-[#fa0000]' : 'bg-[#FFFFFF]'"
          class=" w-[81px] h-0.5 absolute left-[50.75%] right-[50%] top-[110px]"
        ></div>
        <div
          class="bg-[#fa0000] rounded-tl-[15px] rounded-bl-[15px] w-[81px] h-0.5 absolute left-[41%] right-[50%] top-[110px]"
        ></div>
        <div :class="currentState === 2 ? 'bg-[#fa0000]' : 'bg-[#FFFFFF]'"
          class="rounded-tr-[15px] rounded-br-[15px] w-[81px] h-0.5 absolute left-[55%] right-[50%] top-[110px]"
        ></div>
        <div
          class="bg-[#fa0000] rounded-[50%] w-[13px] h-3 absolute left-[45%] right-[50%] top-[105px]"
        ></div>
      </div>
      <div class="w-[47px] h-[21px] static">
        <div
          class="bg-[#d10303] rounded-[15px] w-[45px] h-[21px] absolute left-[44.075%] top-[79px]"
          style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        ></div>
        <div
          class="text-[#ffffff] text-center font-['Inter-Regular',_sans-serif] text-base font-normal absolute left-[44%] top-20 w-[47px] h-[18px]"
        >
          Valik
        </div>
      </div>
      <div class="w-[62px] h-[21px] static">
        <div :class="currentState === 2 ? 'bg-[#d10303]' : 'bg-[#FFFFFF]'"
          class=" rounded-[15px] w-[61px] h-[21px] absolute left-[53.75%] top-20"
          style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        ></div>
        <div :class="currentState === 2 ? 'text-[#FFFFFF]' : 'text-[#000000]'"
          class=" text-center font-['Inter-Regular',_sans-serif] text-base font-normal absolute left-[53.75%] top-[81px] w-[62px] h-[18px]"
        >
          Valmis
        </div>
      </div>
      <div class="w-[47px] h-[21px] static">
        <div :class="currentState === 1 || currentState === 2 ? 'bg-[#d10303]' : 'bg-[#FFFFFF]'"
          class="rounded-[15px] w-[45px] h-[21px] absolute left-[49.125%] right-[50%] top-[79px]"
          style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        ></div>
        <div :class="currentState === 1 || currentState === 2 ? 'text-[#FFFFFF]' : 'text-[#000000]'"
          class=" text-center font-['Inter-Regular',_sans-serif] text-base font-normal absolute left-[49%] right-[50%] top-20 w-[47px] h-[18px]"
        >
          Ost
        </div>
      </div>
    </div>
  </template>
