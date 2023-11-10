<script setup lang="ts">
defineProps<{
    text?: string
}>()
</script>

<template>
    <a>
        <div class="mainButton flex flex-nowrap flex-row">
            <div class="flex-none">
            {{ text }}
            </div>
            <div class="icon flex justify-items-end content-end">
                <slot></slot>
            </div>
        </div>
    </a>
</template>

<style scoped>
.mainButton {
    border-radius: 15px;
    background: #FFDCDC;
    box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.25);
    width: 13%;
    height: 7%;
}
</style>