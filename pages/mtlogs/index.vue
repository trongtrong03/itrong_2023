<template>
    <section class="mtlogs-wrap">
        <div class="main-center">
            <div class="main-head">
                <h1>登山心得</h1>
            </div>
        </div>
        <div class="mtlogs-main">
            <div class="mtlogs-list">
                <ul>
                    <li v-for="(item, index) in jsonData" :key="index" data-aos="fade-up">
                        <NuxtLink :to="'/mtlogs/' + item.id">
                            <figure>
                                <span :style="{ backgroundImage: 'url(images/mtlogs/cover' +item.id + '.jpg)'}"></span>
                            </figure>
                            <h3 v-text="item.title"></h3>
                            <p v-text="item.desc"></p>
                            <time v-text="item.time"></time>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const jsonData = ref([]);

    // mounted
    onMounted(async () => {
        await fetchData(jsonData, 'mtlogs', true);

        initializeAOS();
    });
</script>