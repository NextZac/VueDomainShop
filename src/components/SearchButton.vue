<script setup>

</script>

<template>
    <div class="box">
        <div class="div">
        <div class="property-default">
            <div class="overlap-group">
            <div class="rectangle"></div>
            <img class="img" alt="Icon search" src="../assets/icon-search.png"/>
            </div>
        </div>
        </div>
    </div>
</template>
  
  <style scoped>
  .box {
    height: 32px;
    position: relative;
    width: 48px;
  }
  
  .box .div {
    border-radius: 5px;
    height: 32px;
    left: 0;
    overflow: hidden;
    top: 0;
    width: 48px;
  }
  
  .box .property-default {
    height: 32px;
    left: 20px;
    top: 20px;
    width: 48px;
  }
  
  .box .overlap-group {
    border-radius: 15px 0px 0px 15px;
    height: 32px;
  }
  
  .box .rectangle {
    background-color: #d85555;
    border: 1px solid;
    border-color: #000000;
    border-radius: 0px 15px 15px 0px;
    height: 32px;
    left: 0;
    position: absolute;
    top: 0;
    width: 48px;
  }
  
  .box .img {
    height: 21px;
    left: 13px;
    position: absolute;
    top: 5px;
    width: 22px;
  }
  
  .box .property {
    left: 20px !important;
    position: absolute !important;
    top: 72px !important;
  }
  
  .box .property-variant {
    left: 20px !important;
    position: absolute !important;
    top: 124px !important;
  }
  </style>
  