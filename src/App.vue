<script setup>
import { ref, computed } from 'vue';
import Base from './components/Base.vue';
import SearchBar from './components/SearchBar.vue';
import OrderStatus from './components/OrderStatus.vue';
import Notification from './components/Notification.vue';
import CheckoutForm from './components/CheckoutForm.vue';

import DomainChoice from './views/DomainChoice.vue';
import checkoutForm from './views/CheckoutForm.vue';
import Finish from './views/Finish.vue';

var notificationEnabled = false;


const routes = {
  '/': DomainChoice,
  '/checkoutForm': checkoutForm,
  '/finish': Finish
}

const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <!--<Base>
        <OrderStatus></OrderStatus>
        <SearchBar></SearchBar>
        <CheckoutForm></CheckoutForm>
        <Notification ></Notification>
  </Base>-->
  <component :is="currentView"></component>
</template>
