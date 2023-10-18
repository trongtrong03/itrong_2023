<template>
    <section class="rs-wrap">
        <div class="main-center">
            <div class="main-head">
                <h1>推薦資源</h1>
                <h2>教學資源</h2>
            </div>
            <div class="list-wrap">
                <div class="list-tools">
                    <div class="list-select">
                        <button></button>
                        <select v-model="filter">
                            <option value="all" selected>全部</option>
                            <option value="web">網頁相關</option>
                            <option value="others">其他</option>
                        </select>
                    </div>
                    <div class="list-input">
                        <button @click="searchToggleActive" :class="{ 'search-on': searchOn }"></button>
                        <input type="text" placeholder="請輸入關鍵字" v-model="query" :class="{ 'search-on': searchOn }">
                    </div>
                    <div class="list-sort">
                        <button class="btn-grid" :class="isActive==1 ? 'is-active' : ''" @click="isActive=1"></button>
                        <button class="btn-list" :class="isActive==2 ? 'is-active' : ''" @click="isActive=2"></button>
                    </div>
                </div>
                <div class="list-list" :class="isActive==2 ? 'is-list' : 'is-grid'" v-if="jsonData">
                    <ul>
                        <li class="list-item" v-for="(item, index) in filterSearch" :key="index" v-show="filter=='all' || filter==item.type">
                            <figure>
                                <img :src="'/images/resources/teach/' + item.img + '.jpg'" alt="" v-if="item.cover">
                                <img src="/images/resources/default.jpg" alt="" v-else>
                                <figcaption>
                                    <a :href="item.href" class="link" target="_blank"></a>
                                    <a :href="'/' + item.path" class="article" v-if="item.article"></a>
                                </figcaption>
                            </figure>
                            <div class="list-info">
                                <h2 v-text="item.title"></h2>
                                <p v-text="item.desc"></p>
                            </div>
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
        await fetchData(jsonData, 'resourceTeach');
    });
</script>