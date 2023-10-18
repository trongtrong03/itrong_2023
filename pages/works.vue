<template>
    <section class="works-wrap">
        <div class="main-center">
            <div class="main-head">
                <h1>專案作品</h1>
                <p>儘管偶爾會支援一些較簡單的視覺設計，但整體職務與接手專案皆以網頁切版與前端相關任務為主，將設計師完成之靜態設計稿具象為網頁，並與設計師建立良好互動關係，依需求盡所能實現理想的動態效果，確保客戶接收與設計稿幾乎相符的網頁成品的同時，在互動層面上也能獲得良好的回饋。</p>
                <p><strong>※ 此作品集僅供面試參考，請勿外傳或作其他商業用途，謝謝。</strong></p>
            </div>
            <div class="main-tabs">
                <div class="tabs-head">
                    <ul>
                        <li>
                            <button :class="tabsActive==1 ? 'is-active' : ''" @click="tabsActive=1">切版</button>
                        </li>
                        <li>設計</li>
                        <!-- <li>
                            <button :class="tabsActive==2 ? 'is-active' : ''" @click="tabsActive=2">設計</button>
                        </li> -->
                    </ul>
                </div>
                <div class="tabs-outer">
                    <div class="tabs-content" v-if="tabsActive==1">
                        <div class="masonry-list" v-if="jsonData">
                            <div class="masonry-item" v-for="(item, index) in jsonData" :key="index" @click="fetchData(item, index); noScroll()">
                                <span :style="{ 'background-image': 'url(/images/works/A' + item.img + '.jpg)'}"></span>
                                <div class="masonry-info">
                                    <time v-text="item.year"></time>
                                    <h2 v-text="item.title"></h2>
                                </div>
                            </div>
                        </div>
                        <div class="list-loading" v-else>
                            <p>loading...</p>
                        </div>
                    </div>
                    <!-- <div class="tabs-content" v-if="tabsActive==2"></div> -->
                    <div class="masonry-popup-wrap" v-if="selectedItem">
                        <div class="masonry-popup-flex">
                            <div class="masonry-popup-img">
                                <figure>
                                    <img :src="'/images/works/A' + selectedItem.img + '.jpg'">
                                </figure>
                            </div>
                            <div class="masonry-popup-content">
                                <div class="text">
                                    <h2 v-text="selectedItem.title"></h2>
                                    <p>專案時間：{{ selectedItem.year }}</p>
                                    <p>
                                        <span>網站類型：{{ selectedItem.type }}</span>
                                    </p>
                                    <p>
                                        <span v-if="selectedItem.rwd">RWD：有</span>
                                        <span v-else>RWD：無</span>
                                    </p>
                                    <p>
                                        <span>專案描述：</span>
                                        <span>{{ selectedItem.desc }}</span>
                                    </p>
                                </div>
                                <div class="qrcode" v-if="selectedItem.href">
                                    <a :href="'https://itrong.yidas.net/__work/' + selectedItem.img + '/'" target="_blank">
                                        <img :src="'images/works/qrcode/A' + selectedItem.img + '.png'">
                                    </a>
                                </div>
                                <div class="btn">
                                    <button class="btn-prev" @click="loadPrevItem"></button>
                                    <button class="btn-next" @click="loadNextItem"></button>
                                </div>
                            </div>
                        </div>
                        <button class="popup-close" @click="selectedItem = !selectedItem; noScroll()">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;">
                                <path d="M20.02,22.13c-0.35,0.47-0.51,0.74-0.73,0.96c-5.3,5.32-10.6,10.63-15.9,15.94c-0.24,0.24-0.47,0.49-0.75,0.69
                                    c-0.69,0.5-1.54,0.41-2.13-0.19c-0.58-0.59-0.65-1.45-0.15-2.14c0.18-0.25,0.42-0.47,0.64-0.69c5.32-5.33,10.64-10.66,15.97-15.98
                                    c0.22-0.22,0.52-0.35,0.78-0.52c0.01-0.13,0.01-0.26,0.02-0.39c-0.27-0.17-0.57-0.29-0.79-0.51C11.62,13.95,6.29,8.6,0.95,3.25
                                    C-0.12,2.19-0.26,1.27,0.5,0.48c0.79-0.81,1.73-0.67,2.82,0.42C8.64,6.23,13.97,11.56,19.28,16.9c0.22,0.22,0.39,0.49,0.64,0.8
                                    c0.33-0.32,0.56-0.52,0.77-0.73C26.01,11.63,31.33,6.3,36.65,0.98c0.2-0.2,0.4-0.41,0.62-0.59C38-0.21,38.9-0.17,39.53,0.47
                                    C40.15,1.1,40.18,2,39.59,2.73C39.41,2.95,39.2,3.15,39,3.35c-5.3,5.31-10.6,10.62-15.91,15.93c-0.22,0.22-0.51,0.35-0.78,0.53
                                    c-0.01,0.13-0.02,0.26-0.02,0.39c0.27,0.17,0.57,0.29,0.79,0.51c5.33,5.32,10.65,10.65,15.97,15.98c0.24,0.24,0.49,0.48,0.68,0.75
                                    c0.48,0.69,0.37,1.56-0.23,2.13c-0.59,0.55-1.41,0.62-2.08,0.14c-0.27-0.2-0.51-0.44-0.75-0.68c-5.3-5.31-10.61-10.62-15.9-15.94
                                    C20.54,22.87,20.38,22.6,20.02,22.13z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const tabsActive = ref(1);
    const jsonData = ref([]);
    const selectedItem = ref(null);
    const currentIndex = ref(0);

    // Fetch data on component mounted
    onMounted(async () => {
        try {
            const response = await fetch('/js/data/works.json');
            const data = await response.json();
            jsonData.value = data.reverse().map((item, index) => ({
                ...item,
                currentIndex: index,
            }));
        } catch (error) {
            console.error('Error:', error);
        }
    });

    // Function to fetch data for a selected item
    const fetchData = (item) => {
        selectedItem.value = item;
        currentIndex.value = item.currentIndex;
    };

    // Function to toggle body scroll
    const noScroll = () => {
        document.body.classList.toggle('no-scroll');
    };

    // Function to load the previous item
    const loadPrevItem = () => {
        currentIndex.value--;
        if (currentIndex.value < 0) {
        currentIndex.value = jsonData.value.length - 1;
        }
        selectedItem.value = jsonData.value.find((item) => item.currentIndex === currentIndex.value);
    };

    // Function to load the next item
    const loadNextItem = () => {
        currentIndex.value++;
        if (currentIndex.value >= jsonData.value.length) {
        currentIndex.value = 0;
        }
        selectedItem.value = jsonData.value.find((item) => item.currentIndex === currentIndex.value);
    };
</script>