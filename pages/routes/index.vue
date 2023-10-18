<template>
    <section class="mt-wrap">
        <div class="main-center">
            <div class="main-head">
                <h1>路線彙整</h1>
                <p>
                    <span>* 本資料庫記載之山岳以個人感興趣及兼顧安全易達、需求程度為主，</span>
                    <span>所蒐集彙整而成之名單，並非囊括全台大大小小所有山岳，若有疏漏還請見諒。</span>
                </p>
            </div>
            <div class="list-wrap">
                <div class="list-tools">
                    <div class="list-select">
                        <button class="btn-ico btn-level">
                            <svg version="1.1" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;">
                                <path d="M30.11,12.9c-2.31,0.21-3.6-1.4-3.54-3.06c0.04-1.27,1.25-2.64,2.55-2.66c2.82-0.04,5.65-0.03,8.47,0.02
                                c1.2,0.02,2.35,1.43,2.37,2.83c0.03,2.44,0.08,4.88-0.01,7.32c-0.07,1.98-1.31,3.35-3.56,3.05c-0.8-0.11-2.2-1.22-2.13-2.33
                                c0.02-0.34,0-0.68,0-1.04c-0.48,0.03-0.63,0.36-0.85,0.58C30,21,26.57,24.38,23.2,27.83c-1.36,1.4-3.47,1.45-4.76-0.51
                                c-1.17-1.77-2.33-3.54-3.47-5.33c-0.34-0.53-0.57-0.59-1.05-0.11c-3.01,3.05-6.09,6.03-9.05,9.12c-1.02,1.06-3.18,1.04-4.12,0.14
                                c-0.99-0.95-1.01-3.15,0.05-4.18C4.84,23,8.8,18.97,12.8,14.98c1.56-1.56,3.48-1.24,4.69,0.65c1.16,1.82,2.46,3.55,3.65,5.35
                                c0.32,0.48,0.51,0.33,0.79,0.05C24.61,18.38,27.28,15.72,30.11,12.9z"/>
                            </svg>
                        </button>
                        <select @change="setLevel($event)">
                            <option value="">全部等級</option>
                            <option :value="郊山">郊山</option>
                            <option :value="中級山">中級山</option>
                            <option :value="高山">高山</option>
                            <option :value="進階探勘">進階探勘</option>
                        </select>
                    </div>
                    <div class="list-select">
                        <button class="btn-ico btn-milestone">
                            <svg version="1.1" viewBox="0 0 40 40">
                                <g>
                                    <path d="M40,30.09c-1.62,0-3.2,0-4.86,0c0.15-4.7,0.31-9.38,0.46-14.06c-0.03-0.01-0.05-0.01-0.08-0.02
                                        c-0.06,0.15-0.12,0.3-0.17,0.45c-1.49,4.39-2.99,8.79-4.47,13.19c-0.12,0.35-0.25,0.5-0.64,0.48c-0.74-0.04-1.49-0.03-2.23,0
                                        c-0.38,0.02-0.56-0.1-0.69-0.48c-1.47-4.38-2.97-8.76-4.46-13.14c-0.06-0.17-0.13-0.33-0.27-0.49c0.15,4.68,0.31,9.36,0.46,14.07
                                        c-1.63,0-3.22,0-4.85,0c0-6.72,0-13.43,0-20.2c0.15-0.01,0.29-0.03,0.44-0.03c1.81,0,3.63,0.01,5.44-0.01
                                        c0.37,0,0.54,0.1,0.65,0.46c1.38,4.35,2.78,8.69,4.18,13.04c0.05,0.14,0.1,0.28,0.2,0.57c1.52-4.76,3-9.39,4.49-14.03
                                        c2.13,0,4.25,0,6.4,0C40,16.63,40,23.35,40,30.09z"/>
                                    <path d="M0,9.89c1.62,0,3.2,0,4.84,0c0,2.92,0,5.83,0,8.73c0.03,0.01,0.06,0.02,0.09,0.03c0.09-0.13,0.19-0.26,0.28-0.39
                                        c1.83-2.69,3.65-5.38,5.49-8.06c0.1-0.15,0.33-0.3,0.5-0.3c1.83-0.02,3.66-0.01,5.49-0.01c0.04,0,0.09,0.02,0.2,0.04
                                        c-0.11,0.16-0.2,0.29-0.3,0.42c-2.06,2.7-4.11,5.4-6.18,8.09c-0.26,0.33-0.24,0.54-0.03,0.88c2.1,3.44,4.18,6.88,6.26,10.33
                                        c0.09,0.14,0.16,0.29,0.28,0.5c-0.23,0-0.39,0-0.55,0c-1.57,0-3.13-0.02-4.7,0.01c-0.4,0.01-0.6-0.14-0.79-0.47
                                        c-1.25-2.23-2.52-4.44-3.79-6.66c-0.08-0.13-0.15-0.26-0.25-0.42c-0.64,0.7-1.26,1.37-1.86,2.06c-0.1,0.12-0.13,0.34-0.13,0.51
                                        c-0.01,1.47-0.01,2.94-0.01,4.42c0,0.17,0,0.33,0,0.52c-1.64,0-3.23,0-4.84,0C0,23.35,0,16.63,0,9.89z"/>
                                </g>
                            </svg>
                        </button>
                        <select @change="setLength($event)">
                            <option value="">全部長度</option>
                            <option :value="10">10K以下</option>
                            <option :value="20">11 ~ 20K</option>
                            <option :value="30">21 ~ 30K</option>
                            <option :value="40">31 ~ 40K</option>
                            <option :value="50">41 ~ 50K</option>
                            <option :value="60">51 ~ 60K</option>
                            <option :value="70">61 ~ 70K</option>
                            <option :value="80">71 ~ 80K</option>
                            <option :value="90">81K以上</option>
                        </select>
                    </div>
                    <div class="list-select">
                        <button class="btn-ico btn-large">
                            <svg version="1.1" viewBox="0 0 40 40">
                                <g>
                                    <path d="M35.73,19.99c0.01,6.32-5.09,11.43-11.43,11.44c-6.35,0.01-11.48-5.1-11.47-11.44c0.01-6.33,5.11-11.42,11.46-11.41
                                        C30.62,8.57,35.72,13.66,35.73,19.99z M24.26,11.41c-3.32,0.18-5.9,1.57-7.48,4.48c-1.68,3.1-1.48,6.2,0.54,9.09
                                        c1.66,2.37,4.04,3.49,6.94,3.6C24.26,22.84,24.26,17.16,24.26,11.41z"/>
                                    <path d="M25.7,2.84c0,0.48,0.01,0.95,0,1.43c-0.02,0.83-0.65,1.45-1.44,1.45c-0.78-0.01-1.4-0.63-1.41-1.43
                                        c-0.01-0.95-0.01-1.9,0-2.86C22.86,0.61,23.49,0,24.27,0c0.78,0,1.41,0.61,1.43,1.41C25.71,1.89,25.7,2.36,25.7,2.84z"/>
                                    <path d="M7.15,18.57c0.46,0,0.92-0.01,1.38,0c0.83,0.02,1.46,0.64,1.45,1.44c0,0.78-0.62,1.4-1.43,1.42c-0.95,0.01-1.9,0.01-2.86,0
                                        c-0.81-0.01-1.42-0.64-1.43-1.41c-0.01-0.8,0.61-1.42,1.45-1.44C6.2,18.56,6.67,18.57,7.15,18.57z"/>
                                    <path d="M25.7,37.13c0,0.48,0.01,0.95,0,1.43c-0.02,0.83-0.65,1.45-1.44,1.44c-0.78-0.01-1.4-0.63-1.41-1.44
                                        c-0.01-0.95-0.01-1.9,0-2.86c0.01-0.81,0.64-1.42,1.42-1.42c0.78,0,1.41,0.61,1.43,1.41C25.71,36.18,25.7,36.65,25.7,37.13z"/>
                                    <path d="M11.3,34.57c-0.77-0.04-1.21-0.31-1.45-0.84c-0.24-0.53-0.2-1.07,0.2-1.5c0.71-0.76,1.45-1.5,2.21-2.21
                                        c0.56-0.52,1.41-0.46,1.94,0.08c0.51,0.52,0.58,1.36,0.07,1.9c-0.71,0.76-1.45,1.5-2.21,2.21C11.82,34.42,11.46,34.5,11.3,34.57z"
                                        />
                                    <path d="M11.17,5.36c0.31,0.15,0.68,0.24,0.92,0.47c0.72,0.66,1.41,1.36,2.09,2.07c0.53,0.56,0.51,1.44-0.02,1.98
                                        c-0.54,0.55-1.43,0.57-2.01,0.02c-0.7-0.67-1.38-1.35-2.05-2.05C9.68,7.4,9.61,6.87,9.83,6.31C10.04,5.79,10.56,5.45,11.17,5.36z"
                                        />
                                </g>
                            </svg>
                        </button>
                        <select @change="setDaytime($event)">
                            <option value="">全部天數</option>
                            <option :value="1">可當日往返</option>
                            <option :value="2">至少2日</option>
                            <option :value="3">至少3日</option>
                            <option :value="4">至少4日</option>
                            <option :value="5">至少5日</option>
                            <option :value="6">6日以上</option>
                        </select>
                    </div>
                    <div class="list-input">
                        <button @click="searchToggleActive" :class="{ 'search-on': searchOn }"></button>
                        <input type="text" :class="{ 'search-on': searchOn }" placeholder="請輸入路線名稱" v-model="Filters.name">
                    </div>
                    <div class="list-sort">
                        <button class="btn-list" :class="isActive==1 ? 'is-active' : ''" @click="isActive=1"></button>
                        <button class="btn-th" :class="isActive==2 ? 'is-active' : ''" @click="isActive=2"></button>
                    </div>
                </div>
                <div class="mountains-list" :class="isActive==1 ? 'is-list' : isActive==2 ? 'is-th' : 'is-tb'" v-if="jsonData">
                    <ul>
                        <li class="mountains-item" v-for="item in getItems()">
                            <NuxtLink :to="'/routes/' + item.id" :class="{ 'is-finished': item.finish===true }">
                                <figure>
                                    <span :style="{ 'background-image': 'url(/images/routes/' + item.id + '.jpg)' }" v-if="item.img"></span>
                                    <img src="/images/routes/default.png" v-else>
                                </figure>
                                <hgroup>
                                    <h2 v-text="item.name"></h2>
                                    <p class="aname" v-text="item.anotherName"></p>
                                    <p class="daytime">
                                        <span v-if="item.daytime == '1'">1D</span>
                                        <span v-if="item.daytime == '2'">2D↑</span>
                                        <span v-if="item.daytime == '3'">3D↑</span>
                                        <span v-if="item.daytime == '4'">4D↑</span>
                                        <span v-if="item.daytime == '5'">5D↑</span>
                                        <span v-if="item.daytime == '6'">6D↑</span>
                                    </p>
                                    <p class="length">
                                        <span v-if="item.length == '10'">~10K</span>
                                        <span v-if="item.length == '20'">11-20K</span>
                                        <span v-if="item.length == '30'">21-30K</span>
                                        <span v-if="item.length == '40'">31-40K</span>
                                        <span v-if="item.length == '50'">41-50K</span>
                                        <span v-if="item.length == '60'">51-60K</span>
                                        <span v-if="item.length == '70'">61-70K</span>
                                        <span v-if="item.length == '80'">71-80K</span>
                                        <span v-if="item.length == '90'">81K~</span>
                                    </p>
                                </hgroup>
                            </NuxtLink>
                        </li>
                    </ul>
                    <!-- no results -->
                    <div class="no-results" v-if="getItems().length === 0">
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
    const isActive = ref(1);
    const Filters = ref({
        name: "",
        lv: "",
        daytime: "",
        length: "",
    });

    // 篩選
    const getLevel = () => jsonData.value.map((e) => e.lv);
    const getDaytime = () => jsonData.value.map((e) => e.daytime);
    const getLength = () => jsonData.value.map((e) => e.length);

    const setLevel = (e) => {
        Filters.value.lv = e.target.value;
    };

    const setDaytime = (e) => {
        Filters.value.daytime = e.target.value;
    };

    const setLength = (e) => {
        Filters.value.length = e.target.value;
    };

    const getItems = () => {
        const { name, lv, daytime, length } = Filters.value;
        return jsonData.value.filter((b) => {
            return (
                b.name.toLowerCase().includes(name.toLowerCase()) &&
                b.lv.includes(lv) &&
                b.daytime.includes(daytime) &&
                b.length.includes(length)
            );
        });
    };

    // search on
    const { searchOn, searchToggleActive } = useSearch();

    // mounted
    onMounted(async () => {
        await fetchData(jsonData, 'routes');
    });
</script>