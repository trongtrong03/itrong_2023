<template>
    <section class="mt-wrap">
        <div class="main-center">
            <div class="main-head">
                <h1>山岳資料庫</h1>
                <p>
                    <span>* 本資料庫記載之山岳以個人感興趣及兼顧安全易達、需求程度為主，</span>
                    <span>所蒐集彙整而成之名單，並非囊括全台大大小小所有山岳，若有疏漏還請見諒。</span>
                </p>
            </div>
            <div class="list-wrap">
                <div class="list-tools">
                    <div class="list-select rwd-hide">
                        <button class="btn-ico">
                            <svg version="1.1" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve">
                                <path d="M23.59,40c-0.21,0-0.42,0-0.62,0c-0.85-0.3-1.28-0.92-1.35-1.81c0-0.03-0.01-0.05-0.02-0.08
                                c-0.93-5.09-1.85-10.18-2.78-15.27c-0.08-0.46-0.03-1.07-0.31-1.33c-0.29-0.28-0.89-0.25-1.36-0.34c-5.1-0.93-10.2-1.87-15.31-2.77
                                C0.96,18.25,0.31,17.9,0,17.03c0-0.23,0-0.47,0-0.7c0.23-0.69,0.72-1.08,1.39-1.36C13.61,9.99,25.83,4.99,38.05,0
                                c0.21,0,0.42,0,0.62,0c0.66,0.23,1.1,0.67,1.33,1.33c0,0.21,0,0.42,0,0.63c-0.09,0.23-0.17,0.46-0.26,0.68
                                c-4.9,11.99-9.81,23.97-14.71,35.97C24.74,39.29,24.34,39.81,23.59,40z"/>
                            </svg>
                        </button>
                        <select @change="setArea($event)" @click="filterOpen = false">
                            <option value="">全部區域</option>
                            <option :value="北部">北部</option>
                            <option :value="中部">中部</option>
                            <option :value="南部">南部</option>
                            <option :value="東部">東部</option>
                            <option :value="離島">離島</option>
                        </select>
                    </div>
                    <div class="list-select">
                        <button class="btn-ico">
                            <svg version="1.1" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve">
                                <path d="M34.54,14.55c-0.08,3.13-0.9,6.06-2.12,8.9c-1.83,4.25-4.38,8.05-7.32,11.59c-1.25,1.5-2.58,2.93-3.9,4.36
                                c-0.72,0.78-1.71,0.78-2.44,0.03c-4.07-4.21-7.66-8.77-10.32-14.01c-1.27-2.51-2.23-5.12-2.72-7.9C4.32,9.57,8.78,2.93,15.44,0.74
                                c8.29-2.73,16.96,2.38,18.72,10.81C34.36,12.54,34.42,13.55,34.54,14.55z M11.35,14.25c-0.08,4.7,3.88,8.62,8.56,8.65
                                c4.76,0.03,8.69-3.92,8.69-8.62c0.01-4.72-3.91-8.64-8.62-8.65C15.28,5.62,11.29,9.53,11.35,14.25z"/>
                            </svg>
                        </button>
                        <select @change="setCounty($event)" @click="filterOpen = false">
                            <option value="">全部縣市</option>
                            <option :value="基隆市">基隆市</option>
                            <option :value="台北市">台北市</option>
                            <option :value="新北市">新北市</option>
                            <option :value="桃園市">桃園市</option>
                            <option :value="新竹縣">新竹縣</option>
                            <option :value="新竹市">新竹市</option>
                            <option :value="苗栗縣">苗栗縣</option>
                            <option :value="台中市">台中市</option>
                            <option :value="彰化縣">彰化縣</option>
                            <option :value="南投縣">南投縣</option>
                            <option :value="雲林縣">雲林縣</option>
                            <option :value="嘉義縣">嘉義縣</option>
                            <option :value="嘉義市">嘉義市</option>
                            <option :value="台南市">台南市</option>
                            <option :value="高雄市">高雄市</option>
                            <option :value="屏東縣">屏東縣</option>
                            <option :value="宜蘭縣">宜蘭縣</option>
                            <option :value="花蓮縣">花蓮縣</option>
                            <option :value="台東縣">台東縣</option>
                            <option :value="澎湖縣">澎湖縣</option>
                            <option :value="金門縣">金門縣</option>
                            <option :value="馬祖縣">馬祖縣</option>
                        </select>
                    </div>
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
                        <select @change="setLevel($event)" @click="filterOpen = false">
                            <option value="">全部等級</option>
                            <option :value="高山">高山</option>
                            <option :value="中級山">中級山</option>
                            <option :value="郊山">郊山</option>
                            <option :value="其他">其他</option>
                        </select>
                    </div>
                    <div class="list-input">
                        <button @click="toggleActiveState" :class="{ 'search-on': searchOn }"></button>
                        <input type="text" :class="{ 'search-on': searchOn }" placeholder="請輸入山岳名稱" v-model="Filters.name" @click="filterOpen = false">
                    </div>
                    <div class="list-filter">
                        <button :class="{ 'is-active': filterOpen }" @click="filterOpen = !filterOpen"></button>
                    </div>
                    <div class="list-sort">
                        <button class="btn-list" :class="isActive==1 ? 'is-active' : ''" @click="isActive=1; filterOpen = false"></button>
                        <button class="btn-th" :class="isActive==2 ? 'is-active' : ''" @click="isActive=2; filterOpen = false"></button>
                        <button class="btn-tb" :class="isActive==3 ? 'is-active' : ''" @click="isActive=3; filterOpen = false"></button>
                    </div>
                    <div class="filter-sticky" :class="{ 'is-active': filterOpen }">
                        <h2>
                            <span>評選篩選</span>
                            <button @click="filterOpen = false">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                                    <path d="M20.02,22.13c-0.35,0.47-0.51,0.74-0.73,0.96c-5.3,5.32-10.6,10.63-15.9,15.94c-0.24,0.24-0.47,0.49-0.75,0.69
                                        c-0.69,0.5-1.54,0.41-2.13-0.19c-0.58-0.59-0.65-1.45-0.15-2.14c0.18-0.25,0.42-0.47,0.64-0.69c5.32-5.33,10.64-10.66,15.97-15.98
                                        c0.22-0.22,0.52-0.35,0.78-0.52c0.01-0.13,0.01-0.26,0.02-0.39c-0.27-0.17-0.57-0.29-0.79-0.51C11.62,13.95,6.29,8.6,0.95,3.25
                                        C-0.12,2.19-0.26,1.27,0.5,0.48c0.79-0.81,1.73-0.67,2.82,0.42C8.64,6.23,13.97,11.56,19.28,16.9c0.22,0.22,0.39,0.49,0.64,0.8
                                        c0.33-0.32,0.56-0.52,0.77-0.73C26.01,11.63,31.33,6.3,36.65,0.98c0.2-0.2,0.4-0.41,0.62-0.59C38-0.21,38.9-0.17,39.53,0.47
                                        C40.15,1.1,40.18,2,39.59,2.73C39.41,2.95,39.2,3.15,39,3.35c-5.3,5.31-10.6,10.62-15.91,15.93c-0.22,0.22-0.51,0.35-0.78,0.53
                                        c-0.01,0.13-0.02,0.26-0.02,0.39c0.27,0.17,0.57,0.29,0.79,0.51c5.33,5.32,10.65,10.65,15.97,15.98c0.24,0.24,0.49,0.48,0.68,0.75
                                        c0.48,0.69,0.37,1.56-0.23,2.13c-0.59,0.55-1.41,0.62-2.08,0.14c-0.27-0.2-0.51-0.44-0.75-0.68c-5.3-5.31-10.61-10.62-15.9-15.94
                                        C20.54,22.87,20.38,22.6,20.02,22.13z"></path>
                                </svg>
                            </button>
                        </h2>
                        <ul>
                            <li v-for="(Tag, index) in Tags" :key="index">
                                <input type="radio" :id="'checkmark' + index" :value="Tag" v-model="Filters.Tags" :checked="Tag === Filters.Tags[0]" @change="setTags(Tag)">
                                <label :for="'checkmark' + index">{{Tag.name}}</label>
                                <p v-text="Tag.info"></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mountains-list" :class="isActive==1 ? 'is-list' : isActive==2 ? 'is-th' : 'is-tb'" v-if="jsonData">
                    <div class="mountains-overflow">
                        <div class="mountains-tb" v-if="isActive==3">
                            <p class="name">名稱</p>
                            <p class="area">區域</p>
                            <p class="site">縣市</p>
                            <p class="lv">等級</p>
                            <p class="height">高度</p>
                            <p class="ap">入園</p>
                            <p class="am">入山</p>
                            <p class="trail">步道</p>
                            <p class="route">路線</p>
                            <p class="distance">里程</p>
                            <p class="day">天數</p>
                        </div>
                        <ul>
                            <li class="mountains-item" v-for="item in getItems()" :key="item.id">
                                <NuxtLink :to="'/mountains/' + item.id" :class="{ 'is-finished': item.finish===true }">
                                    <figure>
                                        <span :style="{ 'background-image': 'url(/images/mountains/' + item.id + '.jpg)' }" v-if="item.img"></span>
                                        <img src="/images/mountains/default.png" v-else>
                                    </figure>
                                    <hgroup>
                                        <h2 v-text="item.name"></h2>
                                        <p class="area" v-text="item.area" v-if="isActive==3"></p>
                                        <p class="site">
                                            <span v-text="item.county"></span>
                                            <span v-text="item.town"></span>
                                        </p>
                                        <p class="lv" v-text="item.lv" v-if="isActive==3"></p>
                                        <p class="height" v-text="item.height + 'm'"></p>
                                        <p class="ap" v-if="isActive==3">
                                            <span v-if="item.application_p">●</span>
                                            <span v-else></span>
                                        </p>
                                        <p class="am" v-if="isActive==3">
                                            <span v-if="item.application_m">●</span>
                                            <span v-else></span>
                                        </p>
                                        <p class="trail" v-text="item.trail" v-if="isActive==3"></p>
                                        <p class="route" v-if="isActive==3">
                                            <span class="r-icon-1" v-if="item.route == '單線來回'"></span>
                                            <span class="r-icon-2" v-if="item.route == '環狀Ｏ繞'"></span>
                                            <span class="r-icon-3" v-if="item.route == '雙向進出'"></span>
                                        </p>
                                        <p class="distance" v-text="item.distance + 'K'" v-if="isActive==3"></p>
                                        <p class="day" v-text="item.day" v-if="isActive==3"></p>
                                        <i v-if="item.finish"></i>
                                    </hgroup>
                                </NuxtLink>
                            </li>
                        </ul>
                        <!-- no results -->
                        <div class="no-results" v-if="getItems().length === 0">
                            <NoResult />
                        </div>
                    </div>
                </div>
                <div class="list-loading" v-else>
                    <p>loading...</p>
                </div>
            </div>
        </div>
        <button class="top-btn" :class="{ 'is-show': isShowButton }" @click="onBtnTopClick"></button>
    </section>
</template>

<script>
export default {
    setup() {
        const jsonData = ref([]);
        const isActive = ref(1);
        const isShowButton = ref(false);
        const filterOpen = ref(false);
        const searchOn = ref(false);
        const Filters = ref({
            name: "",
            area: "",
            county: "",
            lv: "",
            Tags: ["全部"],
        });
        const Tags = ref([
            { Tag: "", name: "全部", isOn: true },
            { Tag: "百岳100", name: "百岳", info:"由台灣登山界名人林文安先生所發起，選定標高三千公尺，擁有奇、險、峻、秀特色的一百座台灣山峰。", isOn: false },
            { Tag: "小百岳", name: "小百岳", info:"為了推動全民登山運動，以各縣市近郊山區為標的，所甄選出來的一百座較具特色或具代表性的「郊山」。", isOn: false },
            { Tag: "百名山", name: "百名山", info:"由《台灣山岳》雜誌以自然與人文為評選依據，選出的「台灣百名山」。", isOn: false },
            { Tag: "百步道", name: "百步道", info:"由林務局於民國建國百年，所特別嚴選的一百條推薦步道。", isOn: false },
            { Tag: "十峻", name: "十峻", info:"十峻指「五嶽三尖」之外，台灣百岳中另十座山形險峻，岩壁孤挺，坡度極陡，斷崖一瀉千里，目標明顯者。", isOn: false },
            { Tag: "十崇", name: "十崇", info:"台灣高山中，山高而大，有高低起伏，頂部寬闊，坡度和緩，有敦厚詳和之氣勢。", isOn: false },
            { Tag: "十巖", name: "十巖", info:"台灣高山中，山頂巨石磊磊，純為岩峰，須攀岩附壁才能登頂。", isOn: false },
            { Tag: "十翠", name: "十翠", info:"台灣高山中，山色蒼翠，樹木蒼籠，箭竹高密，須穿梭箭竹林叢。", isOn: false },
            { Tag: "十潤", name: "十潤", info:"台灣高山中，山容潤澤，山勢柔和，坡度緩和，不須爬岩者。", isOn: false },
            { Tag: "九嶂", name: "九嶂", info:"台灣高山中，山嶺頂平，橫亙如垣，密如籬籓，阻隔遠望視線如屏幛者。", isOn: false },
            { Tag: "九峨", name: "九峨", info:"台灣高山中，山高而巍峨，雄偉壯麗，卓而不群，立於周圍諸山，英挺秀出者。", isOn: false },
            { Tag: "九平", name: "九平", info:"台灣高山中，山頂寬闊平坦，無大石巨木，淺草短竹柔美，步履可輕鬆。", isOn: false },
            { Tag: "九偏", name: "九偏", info:"台灣高山中，位置偏僻，遠隔主脈，縱走主脊，無兼登之便，必須專訪。", isOn: false },
            { Tag: "八秀", name: "八秀", info:"台灣高山中，山容秀麗，坡度和緩，淺竹如茵，無巨石叢林者。", isOn: false },
            { Tag: "八瘦", name: "八瘦", info:"台灣高山中，山脊狹長，山腹瘦削，兩側多為崖壁或急坡。", isOn: false },
            { Tag: "八銳", name: "八銳", info:"台灣高山中，山峰尖銳，多崖壁，多峻坡。", isOn: false },
            { Tag: "八小巒", name: "八小巒", info:"台灣高山中，山頂矮小，坡勢緩和，容易攀登，縱走順路兼登。", isOn: false },
            { Tag: "七峭", name: "七峭", info:"台灣高山中，山勢峭拔，坡度陡急，多佈散石，多垂崖壁。", isOn: false },
            { Tag: "六肩稜", name: "六肩稜", info:"台灣高山中，臨近高峰肩狀平坦稜，有基點，有山名，狀如平肩，稍肩突丘。", isOn: false },
            { Tag: "六易", name: "六易", info:"台灣高山中，山勢和緩，近貼山徑，容易順便登頂。", isOn: false },
            { Tag: "五嶽", name: "五嶽", info:"五嶽是指高山峻嶺，山形獨特明顯，展望極佳，可雄霸一方鎮護地方之山，評選有五座。", isOn: false },
            { Tag: "三尖100", name: "三尖", info:"三尖是指百岳中三座以「尖山」為名，山形特別突出陡峭，頂端尖聳，山勢呈金字塔狀的高山。", isOn: false },
            { Tag: "三高", name: "三高", info:"指日治時期，名稱有高字的三座高山，如此稱呼今已少用。", isOn: false },
            { Tag: "一奇", name: "一奇", info:"一奇，又稱一怪，是指以「奇」為名的奇萊北峰，其山勢險峻，陡峭難行。", isOn: false },
            { Tag: "武陵四秀", name: "武陵四秀", info:"又稱武陵四秀，因近武陵農場，且四座連峰而得此名。", isOn: false },
            { Tag: "中橫四辣", name: "中橫四辣", info:"即中橫四辣，是登山口皆在中橫公路上的四座高山，山徑多陡坡峭壁，高度落差大，攀登不易，因而得名。", isOn: false },
            { Tag: "南橫三星", name: "南橫三星", info:"即南橫三星，又稱南橫三山，是南橫公路旁的三座高山。", isOn: false },
            { Tag: "嘉義十二名山", name: "嘉義十二名山", info:"是指位於台灣嘉義縣境內的十二座知名山峰。", isOn: false },
            { Tag: "東北黃金十稜", name: "東北黃金十稜", info:"最早出現於《林宗聖黃金十大傳奇》一書，指的是東北角十條被喻為最美的山頭稜線。", isOn: false },
            { Tag: "谷關七雄", name: "谷關七雄", info:"台灣中部谷關一帶的七座中級山。", isOn: false },
            { Tag: "太魯閣七雄", name: "太魯閣七雄", info:"太魯閣七雄因山形特殊、陡峭，被人們視為中級山中的王者。", isOn: false },
            { Tag: "埔里六秀", name: "埔里六秀", info:"環繞南投縣埔里鎮的六座知名中級山。", isOn: false },
            { Tag: "廬山六寶", name: "廬山六寶", info:"起源於山界前輩曾木樹先生於 80 年代主編的【中台灣名山大系】一書，從原先的三寶後來慢慢增列到今日的六寶。", isOn: false },
            { Tag: "蘭陽五大名山", name: "蘭陽五大名山", info:"蘭陽五大名山位於台北與宜蘭的交界，鎮守一方，景色各異。", isOn: false },
            { Tag: "明潭四秀", name: "明潭四秀", info:"指的是日月潭周遭的四座名山，又稱日月潭四兄妹。", isOn: false },
            { Tag: "溪頭四珠", name: "溪頭四珠", info:"均位於溪頭與杉林溪兩大熱門森林遊樂區周圍的四座山，遊園登山兼備，交通便利，可及性高。", isOn: false },
            { Tag: "水雲三星", name: "水雲三星", info:"位在苗栗泰安鄉泰安溫泉附近的龍、虎、鳳三座山。", isOn: false },
            { Tag: "砂卡噹三雄", name: "砂卡噹三雄", info:"三座位於花蓮縣秀林鄉，路程雖然艱辛，但風景壯麗，堪稱台灣山岳中的經典。", isOn: false },
            { Tag: "復興三尖", name: "復興三尖", info:"復興三尖指的是位於桃園市復興區的三座尖尖山頭。", isOn: false },
            { Tag: "瑪家三兄妹", name: "瑪家三兄妹", info:"瑪家三兄妹位於屏東縣瑪家鄉，是當地非常熱門的大眾化登山路線的三座山岳。", isOn: false },
        ]);


        // 篩選
        const getArea = () => jsonData.value.map((e) => e.area);
        const getCounty = () => jsonData.value.map((e) => e.county);
        const getLevel = () => jsonData.value.map((e) => e.lv);

        const setArea = (e) => {
            Filters.value.area = e.target.value;
        };

        const setCounty = (e) => {
            Filters.value.county = e.target.value;
        };

        const setLevel = (e) => {
            Filters.value.lv = e.target.value;
        };

        const setTags = (Tag) => {
            Filters.value.Tags = [Tag];
            Tags.value.forEach((tag) => {
                tag.isOn = (tag === Tag);
            });
        };

        const getItems = () => {
            const tags = Filters.value.Tags.map((tag) => tag.Tag).join('');
            return jsonData.value.filter((b) => {
                return (
                    b.name.toLowerCase().includes(Filters.value.name.toLowerCase()) &&
                    b.area.includes(Filters.value.area) &&
                    b.county.includes(Filters.value.county) &&
                    b.lv.includes(Filters.value.lv) &&
                    b.tags.some((g) => g.includes(tags))
                );
            });
        };


        // RWD 時 search 開關
        const toggleActiveState = () => {
            searchOn.value = !searchOn.value;
        };
        
        // Fetch data
        onMounted(() => {
            fetch("/js/data/mountains.json")
                .then((response) => response.json())
                .then((data) => {
                jsonData.value = data;
                })
                .catch((error) => {
                console.error("Error:", error);
                });
        });

        // GO TOP
        const onBtnTopClick = () => {
            const duration = 500;
            const start = window.pageYOffset;
            let startTime = null;

            const animateScroll = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const easeInOutCubic = (t) =>
                t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
                const scrollTop =
                easeInOutCubic(Math.min(progress / duration, 1)) * (0 - start) + start;
                window.scrollTo(0, scrollTop);
                if (progress < duration) {
                requestAnimationFrame(animateScroll);
                }
            };

            requestAnimationFrame(animateScroll);
        };

        const updateButtonVisibility = () => {
            isShowButton.value = window.scrollY > 400;
        };

        onBeforeMount(() => {
            // Add event listener
            window.addEventListener("scroll", updateButtonVisibility);
        });

        onBeforeUnmount(() => {
            // Remove event listener
            window.removeEventListener("scroll", updateButtonVisibility);
        });

        return {
            jsonData,
            isActive,
            isShowButton,
            filterOpen,
            searchOn,
            Filters,
            Tags,
            getArea,
            getCounty,
            getLevel,
            setArea,
            setCounty,
            setLevel,
            setTags,
            getItems,
            toggleActiveState,
            onBtnTopClick,
        };
    },
}
</script>