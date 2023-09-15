<template>
    <section class="works-wrap">
        <div class="main-center">
            <div class="main-head">
                <h1>程式語言</h1>
                <h2>工作坊</h2>
            </div>
            <div class="list-wrap">
                <div class="list-tools">
                    <div class="list-select">
                        <button></button>
                        <select v-model="filter">
                            <option value="all" selected>全部</option>
                            <option value="js">JavaScript</option>
                            <option value="jquery">jQuery</option>
                            <option value="vue">Vue</option>
                            <option value="css">CSS</option>
                        </select>
                    </div>
                    <div class="list-input">
                        <button @click="toggleActiveState" :class="{ 'search-on': searchOn }"></button>
                        <input type="text" :class="{ 'search-on': searchOn }" placeholder="請輸入關鍵字" v-model="query">
                    </div>
                </div>
                <div class="workshop-list" v-if="jsonData">
                    <ul>
                        <li v-for="(item, index) in filterSearch" :key="index" v-show="shouldShowItem(item)" data-aos="fade-up">
                            <NuxtLink :to="'/workshop/_' + item.href">
                                <figure>
                                    <img :src="'/images/learn/js/plugin/' + item.href + '.jpg'">
                                </figure>
                                <h2 v-text="item.title"></h2>
                                <h6>
                                    <span :class="item.js==true ? 'is-on' : ''">#JavaScript</span>
                                    <span :class="item.jquery==true ? 'is-on' : ''">#jQuery</span>
                                    <span :class="item.vue==true ? 'is-on' : ''">#Vue</span>
                                    <span :class="item.css==true ? 'is-on' : ''">#CSS</span>
                                </h6>
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

<script>
export default {
    data() {
        return {
            jsonData: [],
            filter: 'all',
            query: "",
            isActive: 1,
            searchOn: false,
        }
    },
    mounted() {
        ////- get data
        fetch('/js/data/workshop.json')
            .then(response => response.json())
            .then(data => {
                this.jsonData = data.reverse();
            })
            .catch(error => {
                console.error('Error:', error);
            });

        ////- scroll animation
        AOS.init({
            once: true,
            easing: "ease-in-out-sine"
        });
    },
    computed: {
        filterSearch() {
            var search = this;
            console.log("Filter:", search.filter); // 检查选项值
            return this.jsonData.filter(function(item) {
                console.log("Item:", item[search.filter]); // 检查每个项目的属性值
                if (search.filter === 'all') {
                    return item.title.toLowerCase().indexOf(search.query.toLowerCase()) !== -1;
                } else {
                    return (
                        item.title.toLowerCase().indexOf(search.query.toLowerCase()) !== -1 &&
                        item[search.filter] === true
                    );
                }
            });
        }
    },
    updated() {},
    methods: {
        ////- search
        toggleActiveState() {
            this.searchOn = !this.searchOn;
        },

        ////- 讓 data-aos 可以在每次選擇不同篩選項目都能重新執行
        shouldShowItem(item) {
            if (this.filter === 'all') {
                return true;
            } else {
                return item[this.filter] && item.title.toLowerCase().indexOf(this.query.toLowerCase()) !== -1;
            }
        }
    }
}
</script>