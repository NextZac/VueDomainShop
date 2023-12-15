<script setup lang="ts">
defineProps<{
    currentState?: Number
}>()
</script>

<template>
    <div class="absolute" style="inset: 0">
      <div class="w-[353px] h-3 static">
        <div
          class="bg-[#ffffff] rounded-[50%] w-[13px] h-3 absolute left-[351px] top-[105px]"
        ></div>
        <div
          class="bg-[#ffffff] w-[81px] h-0.5 absolute left-[273px] top-[110px]"
        ></div>
        <div
          class="bg-[#ffffff] rounded-[50%] w-[13px] h-3 absolute left-[442px] top-[105px]"
        ></div>
        <div
          class="bg-[#ffffff] w-[81px] h-0.5 absolute left-[364px] top-[110px]"
        ></div>
        <div
          class="bg-[#fa0000] rounded-tl-[15px] rounded-bl-[15px] w-[81px] h-0.5 absolute left-[183px] top-[110px]"
        ></div>
        <div
          class="bg-[#ffffff] rounded-tr-[15px] rounded-br-[15px] w-[81px] h-0.5 absolute left-[455px] top-[110px]"
        ></div>
        <div
          class="bg-[#fa0000] rounded-[50%] w-[13px] h-3 absolute left-[261px] top-[105px]"
        ></div>
      </div>
      <div class="w-[47px] h-[21px] static">
        <div
          class="bg-[#d10303] rounded-[15px] w-[45px] h-[21px] absolute left-[245px] top-[79px]"
          style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        ></div>
        <div
          class="text-[#ffffff] text-center font-['Inter-Regular',_sans-serif] text-base font-normal absolute left-[244px] top-20 w-[47px] h-[18px]"
        >
          Valik
        </div>
      </div>
      <div class="w-[62px] h-[21px] static">
        <div
          class="bg-[#ffffff] rounded-[15px] w-[61px] h-[21px] absolute left-[419px] top-20"
          style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        ></div>
        <div
          class="text-[#000000] text-center font-['Inter-Regular',_sans-serif] text-base font-normal absolute left-[418px] top-[81px] w-[62px] h-[18px]"
        >
          Valmis
        </div>
      </div>
      <div class="w-[47px] h-[21px] static">
        <div
          class="bg-[#ffffff] rounded-[15px] w-[45px] h-[21px] absolute left-[335px] top-[79px]"
          style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        ></div>
        <div
          class="text-[#000000] text-center font-['Inter-Regular',_sans-serif] text-base font-normal absolute left-[334px] top-20 w-[47px] h-[18px]"
        >
          Ost
        </div>
      </div>
    </div>
  </template>
