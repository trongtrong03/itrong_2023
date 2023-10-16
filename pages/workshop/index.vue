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
    setup() {
        const jsonData = ref([]);
        const filter = ref('all');
        const query = ref('');
        const isActive = ref(1);
        const searchOn = ref(false);

        // Fetch data on component mounted
        onMounted(async () => {
            try {
                const response = await fetch('/js/data/workshop.json');
                const data = await response.json();
                jsonData.value = data.reverse();
            } catch (error) {
                console.error('Error:', error);
            }

            // Initialize AOS after data is loaded
            AOS.init({
                once: true,
                easing: 'ease-in-out-sine',
            });
        });

        // Computed property for filtered data
        const filterSearch = computed(() => {
            return jsonData.value.filter((item) => {
                if (filter.value === 'all') {
                    return item.title.toLowerCase().indexOf(query.value.toLowerCase()) !== -1;
                }
                else {
                    return (
                        item.title.toLowerCase().indexOf(query.value.toLowerCase()) !== -1 &&
                        item[filter.value] === true
                    );
                }
            });
        });

        // Method to toggle the search state
        const toggleActiveState = () => {
            searchOn.value = !searchOn.value;
        };

        // Function to check if an item should be shown
        const shouldShowItem = (item) => {
            if (filter.value === 'all') {
                return true;
            } else {
                return item[filter.value] && item.title.toLowerCase().indexOf(query.value.toLowerCase()) !== -1;
            }
        };

        return {
            jsonData,
            filter,
            query,
            isActive,
            searchOn,
            filterSearch,
            toggleActiveState,
            shouldShowItem,
        };
    },
};
</script>