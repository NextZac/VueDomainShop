<script setup lang="ts">
import { ref } from 'vue';
import Base from '../components/Base.vue'
import SearchBar from '../components/SearchBar.vue';
import OrderStatus from '../components/OrderStatus.vue';
import Notification from '../components/Notification.vue';
import CheckoutForm from '../components/CheckoutForm.vue';
var notificationEnabled = ref(false);
</script>

<template>
<Base>
        <OrderStatus></OrderStatus>
        <SearchBar @searchPressed="notificationEnabled = !notificationEnabled"></SearchBar>
        <Notification v-show="notificationEnabled" :success="true"></Notification>
  </Base>
</template>