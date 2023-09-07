<template>
    <NuxtLayout name="article">
        <TempWorkshop :propValue="22" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act1">一、效果預覽</a></li>
            <li><a href="#act2">二、程式碼</a></li>
            <li><a href="#act3">三、其他補充</a></li>
        </ul>
    </div>
    <div class="text-block">
        <h2 id="act1">一、效果預覽</h2>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-default-tab="js,result" data-slug-hash="YbvXBE" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/YbvXBE">
            Vue-ex: filter</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
    </div>
    <div class="text-block">
        <h2 id="act2">二、程式碼</h2>
        <p>此功能使用 VUE 版本為 Vue3，故 HTML 裡必須引用其官方套件：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.37/vue.global.prod.min.js"&gt;&lt;/script&gt;</code></pre>
        </div>
        <p><br></p>
        <p>HTML：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;div id="app"&gt;
    &lt;div class="btn"&gt;
        &lt;button :class="{ checked : letter == activeLetter }" @click="btnFilter(letter)" v-for="letter in buttons" v-text="letter"&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="item"&gt;
        &lt;div v-for="item in listFilter" v-text="item.type"&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
        <p><br></p>
        <p>Vue：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">const vueExample = {
    data() {
        return {
            items: lists,
            activeLetter: false,
            activeColor: false,
        }
    },
    methods: {
        btnFilter(letter) {
            let nextLetter;
            if (this.activeLetter == letter) {
                nextLetter = false;
            } else {
                nextLetter = letter;
            }
            this.$nextTick(() => {
                this.activeLetter = nextLetter;
            });
        },
    },
    computed: {
        buttons() {
            return this.items.map(item => {
                return item.type
            }).filter((value, index, self) => {
                return self.indexOf(value) === index;
            });
        },
        listFilter() {
            let listFilter = this.items;
            if (this.activeLetter) {
                listFilter = listFilter.filter(item => {
                    return item.type == this.activeLetter;
                })
            }
            if (this.activeColor) {
                listFilter = listFilter.filter(item => {
                    return item.bg == this.activeColor;
                })
            }
            return listFilter;
        }
    },
}

const lists = [
    { type: 'A' },
    { type: 'A' },
    { type: 'B' },
    { type: 'C' },
    { type: 'B' },
    { type: 'B' },
    { type: 'A' },
    { type: 'C' },
    { type: 'C' },
    { type: 'A' },
    { type: 'A' },
]

Vue.createApp(vueExample).mount('#app');</code></pre>
        </div>
    </div>
    <div class="text-block">
        <h2 id="act3">三、其他補充</h2>
    </div>
</div>
<!-- end -->
    </NuxtLayout>
</template>

<script>
export default {
    setup () {
        // layout
        definePageMeta({
            layout: false
        });
    }
}
</script>