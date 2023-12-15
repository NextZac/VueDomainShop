<script setup>
import SearchButton from "../components/SearchButton.vue";
</script>

<template>
    <div class="box">
      <div class="group mx-auto w-1/2 text-center p-4">
        <div class="overlap-group">
          <div class="rectangle"></div>
          <div class="div"></div>
          <div class="rectangle-2"></div>
          <div class="text-wrapper">.ee</div>
          <div class="text-wrapper-2">https://</div>
          <img class="icon-caret-down" alt="Icon caret down" src="../assets/caretdown.png" />
          <SearchButton class="searchbutton"></SearchButton>
        </div>
      </div>
    </div>
  </template>
  
  
  <style scoped>
  
  .box .group {
    height: 32px;
    left: 4.75%;
    top: 32.5%;
    width: 100%;
  }
  
  .box .overlap-group {
    height: 32px;
    width: 653px;
  }
  
  .box .rectangle {
    background-color: #e8333369;
    border: 1px solid;
    border-color: #000000;
    border-radius: 15px 0px 0px 15px;
    height: 32px;
    left: 0;
    position: absolute;
    top: 0;
    width: 599px;
  }
  
  .box .div {
    background-color: #d75555;
    border: 1px solid;
    border-color: #000000;
    height: 32px;
    left: 483px;
    position: absolute;
    top: 0;
    width: 123px;
  }
  
  .box .rectangle-2 {
    background-color: #d75555;
    border: 1px solid;
    border-color: #000000;
    border-radius: 15px 0px 0px 15px;
    height: 32px;
    left: 0;
    position: absolute;
    top: 0;
    width: 76px;
  }
  
  .box .text-wrapper {
    color: #ffffff;
    font-family: "Inter-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    left: 477px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 6px;
    width: 86px;
  }
  
  .box .text-wrapper-2 {
    color: #ffffff;
    font-family: "Inter-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    left: 12px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 6px;
    width: 59px;
  }
  
  .box .icon-caret-down {
    height: 7px;
    left: 549px;
    position: absolute;
    top: 13px;
    width: 14px;
  }
  
  .SearchButton {
    height: 32px !important;
    left: 605px !important;
    position: absolute !important;
    top: 0 !important;
    width: 48px !important;
  }
  </style>
  