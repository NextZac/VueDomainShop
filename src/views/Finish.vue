<script setup lang="ts">
import Base from '../components/Base.vue'
import OrderStatus from '../components/OrderStatus.vue';
import Finish from '../components/Finish.vue';
</script>

<template>
<Base>
        <OrderStatus :currentState="2"></OrderStatus>
        <Finish :success="true"></Finish>
  </Base>
</template>