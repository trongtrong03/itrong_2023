<template>
    <button class="btn-top" :class="{ 'is-show': isShowButton }" @click="onBtnTopClick"></button>
</template>

<script setup lang="ts">
    // mounted
    onMounted(async () => {
        onBtnTopClick();
        updateButtonVisibility();
    });

    onBeforeMount(() => {
        // Add event listener
        window.addEventListener("scroll", updateButtonVisibility);
    });

    onBeforeUnmount(() => {
        // Remove event listener
        window.removeEventListener("scroll", updateButtonVisibility);
    });
</script>