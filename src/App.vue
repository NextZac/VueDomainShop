<script setup lang="ts">
import Base from './components/Base.vue'
import SearchBar from './components/SearchBar.vue';
import OrderStatus from './components/OrderStatus.vue';
import Notification from './components/Notification.vue';
import CheckoutForm from './components/CheckoutForm.vue';
var notificationEnabled = false;
</script>

<template>
  <Base>
        <OrderStatus></OrderStatus>
        <!-- <SearchBar></SearchBar>-->
        <CheckoutForm></CheckoutForm>
        <Notification v-show="notificationEnabled"></Notification>
  </Base>
</template>
