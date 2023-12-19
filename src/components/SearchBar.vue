<template>
    <div class="absolute transform max-w-full w-full m-auto -translate-x-1/2 -translate-y-1/2 top-1/4 left-1/2">
      <div class="grid grid-cols-9 text-center text-white gap-0 align-middle	" style="margin-left: 20%; margin-right: 20%;">
        <div class="col-span-2" style="background-color: #D85555;border: 1px solid #000; border-radius: 15px 0px 0px 15px;width: 100%;">
          https://
        </div>
        <div class="text-center col-span-4">
          <input type="text" style="background-color: #f59696;border: 1px solid #000; width: 100%;">
        </div>
        <div class="text-center col-span-2" style="background-color: #D85555;border: 1px solid #000;width: 100%;">
          <div class="grid grid-cols-2">
            .ee
            <img src="../assets/caretdown.png" style="margin-top:1vh;">
          </div>
        </div>
        <div class="text-center flex items-center justify-center" style="background-color: #D85555;border: 1px solid #000;border-radius: 0px 15px 15px 0px;width: 100%;">
          <button @click="$emit('searchPressed')"><img src="../assets/icon_search.png"></button>
        </div>
      </div>
    </div>
</template>