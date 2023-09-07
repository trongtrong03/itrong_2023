<template>
    <NuxtLayout name="article">
        <TempWorkshop :propValue="23" />
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
            <p class="codepen" data-height="480" data-default-tab="js,result" data-slug-hash="pmGdYV" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/pmGdYV">
            vue-ex: gotop2</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
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
    &lt;p&gt;scroll down&lt;/p&gt;
    &lt;button @click="goTop" ref="btn"&gt;TOP&lt;/button&gt;
&lt;/div&gt;</code></pre>
        </div>
        <p><br></p>
        <p>Vue：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">const vueExample = {
    data() {
        return {
            isTop: true,
        }
    },
    mounted() {
        this.needScroll();
    },
    methods: {
        goTop() {
            let self = this
            self.timer = setInterval(function() {
                let osTop = document.documentElement.scrollTop || document.body.scrollTop
                let ispeed = Math.floor(-osTop / 5)
                document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
                self.isTop = true
                if (osTop === 0) {
                    clearInterval(self.timer)
                }
            }, 30)
        }
    },
}

Vue.createApp(vueExample).mount('#app');</code></pre>
        </div>
        <p><br></p>
        <p>如果要使按鈕在畫面下滾到一定高度後才顯示，首先 CSS 部份要記得將按鈕 <em>display</em> 設定為 <em>none</em>：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">.btn-top {
    display: none;
}</code></pre>
        </div>
        <p><br></p>
        <p>Vue：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">const vueExample = {
    data() {
        return {
            isTop: true,
        }
    },
    mounted() {
        this.needScroll();
    },
    methods: {
        needScroll() {
            let clientHeight = 200
            let obtn = this.$refs.btn
            window.onscroll = function() {
                let osTop = document.documentElement.scrollTop || document.body.scrollTop
                if (osTop >= clientHeight) {
                    obtn.style.display = 'block'
                } else {
                    obtn.style.display = 'none'
                }
                if (!this.isTop) {
                    clearInterval(this.timer)
                }
                this.isTop = false
            }
        },
        goTop() {
            let self = this
            self.timer = setInterval(function() {
                let osTop = document.documentElement.scrollTop || document.body.scrollTop
                let ispeed = Math.floor(-osTop / 5)
                document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
                self.isTop = true
                if (osTop === 0) {
                    clearInterval(self.timer)
                }
            }, 30)
        }
    },
}

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