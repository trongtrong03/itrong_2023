<template>
    <section class="works-wrap">
        <div class="main-center">
            <div class="main-head">
                <h1>程式語言</h1>
                <h2>JavaScript</h2>
            </div>
            <div class="list-wrap">
                <div class="list-tools">
                    <div class="list-select">
                        <button></button>
                        <select v-model="filter">
                            <option value="all" selected>全部</option>
                            <option value="javascript">JavaScript</option>
                            <option value="jquery">jQuery</option>
                            <option value="vue">Vue</option>
                            <option value="others">其他</option>
                        </select>
                    </div>
                    <div class="list-input">
                        <button @click="searchToggleActive" :class="{ 'search-on': searchOn }"></button>
                        <input type="text" placeholder="請輸入關鍵字" v-model="query" :class="{ 'search-on': searchOn }">
                    </div>
                </div>
                <div class="list-article" v-if="jsonData">
                    <div class="list-accordin" :class="{ 'is-active': listAccordin }">
                        <ul>
                            <li class="is-javascript" data-aos="fade-in">
                                <NuxtLink to="/javascript/_faq_js">
                                    <figure></figure>
                                    <h2>JavaScript 常見錯誤訊息問題、除錯建議以及各種疑難雜症彙整</h2>
                                </NuxtLink>
                            </li>
                            <li class="is-jquery" data-aos="fade-in">
                                <NuxtLink to="/javascript/_faq_jq">
                                    <figure></figure>
                                    <h2>jQuery 常見錯誤訊息問題、除錯建議以及各種疑難雜症彙整</h2>
                                </NuxtLink>
                            </li>
                            <li class="is-nodejs" data-aos="fade-in">
                                <NuxtLink to="/javascript/_faq_node">
                                    <figure></figure>
                                    <h2>Node.js 常見錯誤訊息問題、除錯建議以及各種疑難雜症彙整</h2>
                                </NuxtLink>
                            </li>
                            <li class="is-yarn" data-aos="fade-in">
                                <NuxtLink to="/javascript/_faq_yarn">
                                    <figure></figure>
                                    <h2>Yarn 常見錯誤訊息問題、除錯建議以及各種疑難雜症彙整</h2>
                                </NuxtLink>
                            </li>
                        </ul>
                        <button class="btn-toggle" @click="listAccordinToggleActive"></button>
                    </div>
                    <ul>
                        <li v-for="(item, index) in filterSearch" :key="index" v-show="filter=='all' || filter==item.type" :class="'is-' + item.type" data-aos="fade-up">
                            <NuxtLink :to="'/javascript/_' + item.href">
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
    const listAccordin = ref(false);

    // list accordin
    const listAccordinToggleActive = () => {
        listAccordin.value = !listAccordin.value;
    };

    // Search
    const { searchOn, searchToggleActive } = useSearch();
    const filterSearch = createFilterSearch(jsonData, query);

    // Fetch data
    onMounted(async () => {
        await fetchData(jsonData, 'learnJs', true);

        initializeAOS();
    });
</script>