<template>
    <section class="mtlogs-wrap">
        <div class="main-center">
            <div class="main-head">
                <h1>登山心得</h1>
            </div>
        </div>
        <div class="mtlogs-main">
            <h2>Latest</h2>
            <div class="slider-list" ref="sliderListRef">
                <div v-for="(item, index) in jsonData.slice(0, 6)" :key="index">
                    <div class="slider-item">
                        <NuxtLink :to="'/mtlogs/' + item.id">
                            <figure>
                                <span :style="{ backgroundImage: 'url(images/mtlogs/cover' + item.id + '.jpg)'}"></span>
                            </figure>
                            <div>
                                <time v-text="item.time"></time>
                                <h2 v-text="item.title"></h2>
                                <p v-text="item.desc"></p>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="mtlogs-list">
                <h2>List</h2>
                <ul>
                    <li v-for="(item, index) in jsonData.slice(6)" :key="index" @click="fetchData(item, index);">
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

<script>
export default {
    data() {
        return {
            jsonData: [],
        }
    },
    mounted() {
        // get data
        fetch('/js/data/mtlogs.json')
            .then(response => response.json())
            .then(data => {
                this.jsonData = data.reverse();
                this.$nextTick(() => {
                    this.initializeSlickSlider();
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    },
    methods: {
        initializeSlickSlider() {
            // slick slider
            $(this.$refs.sliderListRef).slick({
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
                arrows: false,
                dots: true,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 1280,
                        settings: {
                            centerMode: true,
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            centerMode: true,
                            slidesToShow: 1
                        }
                    },
                ]
            });
        }
    },
}
</script>