<template>
    <NuxtLayout name="article">
        <TempWorkshop :propValue="21" />
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
            <p class="codepen" data-height="480" data-default-tab="js,result" data-slug-hash="wNGOag" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/wNGOag">
            vue-ex: tabs</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
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
    &lt;section class="title"&gt;
        &lt;button :class="isActive==1 ? 'is-active' : ''" @click="isActive=1"&gt;A&lt;/button&gt;
        &lt;button :class="isActive==2 ? 'is-active' : ''" @click="isActive=2"&gt;B&lt;/button&gt;
        &lt;button :class="isActive==3 ? 'is-active' : ''" @click="isActive=3"&gt;C&lt;/button&gt;
    &lt;/section&gt;
    &lt;section class="content"&gt;
        &lt;div v-if="isActive==1"&gt;A&lt;/div&gt;
        &lt;div v-if="isActive==2"&gt;B&lt;/div&gt;
        &lt;div v-if="isActive==3"&gt;C&lt;/div&gt;
    &lt;/section&gt;
&lt;/div&gt;</code></pre>
        </div>
        <p><br></p>
        <p>Vue：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">const vueExample = {
    data() {
        return {
            isActive: 1,
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