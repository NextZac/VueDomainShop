<script setup lang="ts">
defineProps<{
    currentState?: Number
}>()
</script>

<template>
    <div class="box">
      <div class="group">
        <div class="div">
          <div class="overlap">
            <div class="ellipse"></div>
            <div class="rectangle"></div>
            <div class="rectangle-2"></div>
            <div class="ellipse-2"></div>
          </div>
          <div class="overlap-group">
            <div class="ellipse-3"></div>
            <div class="rectangle-3"></div>
          </div>
          <div class="rectangle-4"></div>
        </div>
        <div class="overlap-wrapper">
          <div class="overlap-2">
            <div class="rectangle-5"></div>
            <div class="text-wrapper">Valik</div>
          </div>
        </div>
        <div class="overlap-group-wrapper">
          <div class="overlap-3">
            <div class="rectangle-6"></div>
            <div class="text-wrapper-2">Valmis</div>
          </div>
        </div>
        <div class="div-wrapper">
          <div class="overlap-2">
            <div class="rectangle-7"></div>
            <div class="text-wrapper-3">Ost</div>
          </div>
        </div>
      </div>
    </div>
  </template>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  width: 353px;
}

.box .group {
  height: 38px;
  left: 0;
  top: 0;
  width: 353px;
}

.box .div {
  height: 12px;
  left: 0;
  position: relative;
  top: 26px;
  width: 353px;
}

.box .overlap {
  height: 12px;
  left: 0;
  position: absolute;
  top: 0;
  width: 181px;
}

.box .ellipse {
  background-color: #ffffff;
  border-radius: 6.5px/6px;
  height: 12px;
  left: 168px;
  position: absolute;
  top: 0;
  width: 13px;
}

.box .rectangle {
  background-color: #ffffff;
  height: 2px;
  left: 90px;
  position: absolute;
  top: 5px;
  width: 81px;
}

.box .rectangle-2 {
  background-color: #f90000;
  border-radius: 15px 0px 0px 15px;
  height: 2px;
  left: 0;
  position: absolute;
  top: 5px;
  width: 81px;
}

.box .ellipse-2 {
  background-color: #f90000;
  border-radius: 6.5px/6px;
  height: 12px;
  left: 78px;
  position: absolute;
  top: 0;
  width: 13px;
}

.box .overlap-group {
  height: 12px;
  left: 181px;
  position: absolute;
  top: 0;
  width: 91px;
}

.box .ellipse-3 {
  background-color: #ffffff;
  border-radius: 6.5px/6px;
  height: 12px;
  left: 78px;
  position: absolute;
  top: 0;
  width: 13px;
}

.box .rectangle-3 {
  background-color: #ffffff;
  height: 2px;
  left: 0;
  position: absolute;
  top: 5px;
  width: 81px;
}

.box .rectangle-4 {
  background-color: #ffffff;
  border-radius: 0px 15px 15px 0px;
  height: 2px;
  left: 272px;
  position: absolute;
  top: 5px;
  width: 81px;
}

.box .overlap-wrapper {
  height: 21px;
  left: 61px;
  position: relative;
  top: -15px;
  width: 49px;
}

.box .overlap-2 {
  height: 21px;
  position: relative;
  width: 47px;
}

.box .rectangle-5 {
  background-color: #d10202;
  border-radius: 15px;
  box-shadow: 0px 4px 4px #00000040;
  height: 21px;
  left: 1px;
  position: absolute;
  top: 0;
  width: 45px;
}

.box .text-wrapper {
  color: #ffffff;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 1px;
  white-space: nowrap;
  width: 47px;
}

.box .overlap-group-wrapper {
  height: 21px;
  left: 235px;
  position: relative;
  top: -36.5px;
  width: 64px;
}

.box .overlap-3 {
  height: 21px;
  position: relative;
  width: 62px;
}

.box .rectangle-6 {
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 4px 4px #00000040;
  height: 21px;
  left: 1px;
  position: absolute;
  top: 0;
  width: 61px;
}

.box .text-wrapper-2 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 1px;
  white-space: nowrap;
  width: 62px;
}

.box .div-wrapper {
  height: 21px;
  left: 151px;
  position: relative;
  top: -57.5px;
  width: 49px;
}

.box .rectangle-7 {
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 4px 4px #00000040;
  height: 21px;
  left: 1px;
  position: absolute;
  top: 0;
  width: 45px;
}

.box .text-wrapper-3 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 1px;
  white-space: nowrap;
  width: 47px;
}
</style>