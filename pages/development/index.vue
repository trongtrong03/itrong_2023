<template>
    <section class="works-wrap">
        <div class="main-center">
            <div class="main-head">
                <h1>程式語言</h1>
                <h2>開發工具</h2>
            </div>
            <div class="list-wrap">
                <div class="list-tools">
                    <div class="list-select">
                        <button></button>
                        <select v-model="filter">
                            <option value="all" selected>全部</option>
                            <option value="git">git</option>
                            <option value="others">其他</option>
                        </select>
                    </div>
                    <div class="list-input">
                        <button @click="toggleActiveState" :class="{ 'search-on': searchOn }"></button>
                        <input type="text" :class="{ 'search-on': searchOn }" placeholder="請輸入關鍵字" v-model="query">
                    </div>
                </div>
                <div class="list-article" v-if="jsonData">
                    <ul>
                        <li v-for="(item, index) in filterSearch" :key="index" v-show="filter=='all' || filter==item.type" :class="'is-' + item.type" data-aos="fade-up">
                            <NuxtLink :to="'/development/_' + item.href">
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

<script>
export default {
    setup() {
        // Define reactive data using ref
        const jsonData = ref([]);
        const filter = ref('all');
        const query = ref('');
        const isActive = ref(1);
        const searchOn = ref(false);

        onMounted(async () => {
            // fetch data
            try {
                const response = await fetch('/js/data/learnDev.json');
                const data = await response.json();
                jsonData.value = data.reverse();
            } catch (error) {
                console.error('Error:', error);
            }

            // scroll animation
            AOS.init({
                once: true,
                easing: "ease-in-out-sine"
            });
        });

        // Define a computed property for filtering search
        const filterSearch = computed(() => {
            return jsonData.value.filter(item => {
                return item.title.toLowerCase().indexOf(query.value.toLowerCase()) !== -1;
            });
        });

        // Define a method to toggle the search state
        const toggleActiveState = () => {
            searchOn.value = !searchOn.value;
        };

        // Return the data and methods you want to expose to the template
        return {
            jsonData,
            filter,
            query,
            isActive,
            searchOn,
            filterSearch,
            toggleActiveState
        };
    }
}
</script>