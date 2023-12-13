<script setup lang="ts">
import Base from './components/Base.vue'
import SearchBar from './components/SearchBar.vue';
import OrderStatus from './components/OrderStatus.vue';
</script>

<template>
  <Base>
        <OrderStatus></OrderStatus>
        <SearchBar></SearchBar>
  </Base>
</template>
