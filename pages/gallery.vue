<template>
    <section class="mt-wrap">
        <div class="gallery-wrap">
            <div class="gallery-content">
                <div class="gallery-article">
                    <div class="main-head">
                        <h1>影像故事</h1>
                    </div>
                    <div class="gallery-list">
                        <div class="gallery-item" v-for="(item, index) in jsonData" :key="index" @click="fetchData(item, index); noScroll()">
                            <span :style="{ 'background-image': 'url(/images/gallery/' + item.id + '.jpg)'}"></span>
                        </div>
                    </div>
                    <div class="gallery-popup-wrap" v-if="selectedItem">
                        <div class="gallery-popup-flex">
                            <div class="gallery-popup-img">
                                <figure>
                                    <span :style="{ 'background-image': 'url(/images/gallery/' + selectedItem.id + '.jpg)'}"></span>
                                </figure>
                            </div>
                            <div class="gallery-popup-content">
                                <p v-text="selectedItem.desc"></p>
                                <p v-text="selectedItem.site"></p>
                                <time v-text="selectedItem.time"></time>
                            </div>
                            <div class="gallery-popup-btn">
                                <button class="btn-prev" @click="loadPrevItem"></button>
                                <button class="btn-next" @click="loadNextItem"></button>
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

<script>
export default {
    data() {
        return {
            jsonData: [],
            selectedItem: null,
            currentIndex: 0
        }
    },
    mounted() {
        ////- get data
        fetch('/js/data/gallery.json')
            .then(response => response.json())
            .then(data => {
                this.jsonData = data.reverse().map((item, index) => ({
                    ...item,
                    currentIndex: index
                }));
            })
            .catch(error => {
                console.error('Error:', error);
            });
    },
    updated() {},
    methods: {
        fetchData(item) {
            this.selectedItem = item;
            this.currentIndex = item.currentIndex;
        },

        ////- 切換 body 滾動禁止與否
        noScroll() {
            document.body.classList.toggle('no-scroll');
        },

        ////- 載入上一筆資料
        loadPrevItem() {
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = this.jsonData.length - 1;
            }
            this.selectedItem = this.jsonData.find(item => item.currentIndex === this.currentIndex);
        },

        ////- 載入下一筆資料
        loadNextItem() {
            this.currentIndex++;
            if (this.currentIndex >= this.jsonData.length) {
                this.currentIndex = 0;
            }
            this.selectedItem = this.jsonData.find(item => item.currentIndex === this.currentIndex);
        }
    }
}
</script>