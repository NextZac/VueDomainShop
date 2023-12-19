<script setup lang="ts">
import { ref } from 'vue';
import Input from './Input.vue';
var company = ref(false);
</script>


<template>
  <div class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-screen">
      <div class="grid grid-cols-3 gap-2 max-w-full justify-center m-auto px-24">
        <div style="background-color: #e07676; color:#FFFFFF" class="card card-normal w-[100%] h-[100%] shadow-xl col-span-2">
          <div class="grid grid-cols-2 max-w-full">
            <div class="col-span-1 max-w-full min-w-full text-center text-xl" :style="company ? 'background-color: #D85555;' : 'background-color: #e07676;'" style="border-radius: 15px 0 0 0">
              <button @click="company = false">Eraisik</button>
            </div>
            <div class="col-span-1 max-w-full min-w-full text-center text-xl" :style="company ? 'background-color: #e07676;' : 'background-color: #D85555;'" style="border-radius: 0 15px 0 0;">
              <button @click="company = true">Firma</button>
            </div>
          </div>
          <div class="card-body">
            <div class="grid grid-cols-2">
              <Input placeholder="Eesnimi"></Input>
              <Input placeholder="Perekonnanimi"></Input>
            </div>
            <Input placeholder="E-Post"></Input>
            <div class="w-full" style="height: 1px;background-color: white;"></div>
            <div class="grid grid-cols-2">
              <Input placeholder="Tänav"></Input>
              <Input placeholder="Tänava nr"></Input>
            </div>
            <div class="grid grid-cols-2">
              <Input placeholder="Posti indeks"></Input>
              <Input placeholder="Maakond"></Input>
            </div>
            <Input v-show="!company" placeholder="Perekonnanimi"></Input>
          </div>
        </div>
        <div class="card w-[100%] bg-base-100 shadow-xl text-white" style="background: #D85555;">
          <div class="card-body">
            <h2 class="card-title text-center">
              Kokkuvõte
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam pariatur est modi cupiditate maiores facilis eligendi debitis nisi saepe, error minus deserunt eum corporis ipsum eaque obcaecati, facere eveniet sit!
            </p>
          </div>
        </div>
      </div>
  </div>
</template>

