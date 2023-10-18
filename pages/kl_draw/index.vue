<template>
    <section class="works-wrap">
        <div class="main-center">
            <div class="main-head">
                <h1>知識文章</h1>
                <h2>網路相關</h2>
            </div>
            <div class="list-wrap">
                <div class="list-tools">
                    <div class="list-select">
                        <button></button>
                        <select v-model="filter">
                            <option value="all" selected>全部</option>
                            <option value="ae">After Effect</option>
                            <option value="others">其他</option>
                        </select>
                    </div>
                    <div class="list-input">
                        <button @click="searchToggleActive" :class="{ 'search-on': searchOn }"></button>
                        <input type="text" placeholder="請輸入關鍵字" v-model="query" :class="{ 'search-on': searchOn }">
                    </div>
                </div>
                <div class="list-article" v-if="jsonData">
                    <ul>
                        <li v-for="(item, index) in filterSearch" :key="index" v-show="filter=='all' || filter==item.type" :class="'is-' + item.type" data-aos="fade-up">
                            <NuxtLink :to="'/kl_draw/_' + item.href">
                                <figure></figure>
                                <h2 v-text="item.title"></h2>
                                <time v-text="item.time"></time>
                            </NuxtLink>
                        </li>
                    </ul>
                    <!-- no results -->
                    <div class="no-results" v-if="filterSearch.length === 0">
                        <NoResult />
                    </div>
                </div>
                <div class="list-loading" v-else>
                    <p>loading...</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const jsonData = ref([]);
    const query = ref('');
    const filter = ref('all');
    const isActive = ref(1);

    // Search
    const { searchOn, searchToggleActive } = useSearch();
    const filterSearch = createFilterSearch(jsonData, query);

    // Fetch data
    onMounted(async () => {
        await fetchData(jsonData, 'klDraw', true);

        initializeAOS();
    });
</script>