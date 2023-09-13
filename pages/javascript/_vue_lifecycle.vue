<template>
    <NuxtLayout name="article">
        <TempJs :propValue="30" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、Vue1.0 的生命週期</a></li>
            <li><a href="#act2">二、</a></li>
            <li><a href="#act3">三、</a></li>
            <li><a href="#act4">四、</a></li>
            <li><a href="#act5">五、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <blockquote>每个 Vue 组件实例在创建时都需要经历一系列的初始化步骤，比如设置好数据侦听，编译模板，挂载实例到 DOM，以及在数据改变时更新 DOM。在此过程中，它也会运行被称为生命周期钩子的函数，让开发者有机会在特定阶段运行自己的代码。</blockquote>
        <p>這段文字引述自 <a href="https://cn.vuejs.org/guide/essentials/lifecycle.html" target="_blank">Vue.js</a> 官方對其程式語言的「生命週期」所給出的解釋，若要用比較簡短的一句話概括，生命週期指的是「Vue 實例從創建到銷毀的過程」，其中，Vue 實例指的是其應用核心的建構體，譬如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var app = new Vue({
  ...
});</code></pre>
        </div>
        <p>儘管根據版本不同，上面宣告的建構方式也會不太一樣，但基本上只要建立這樣的一個程式碼結構，就代表創建了一個 Vue 的實例。一個 Vue 實例通常包含了 Vue 組件的數據、方法、計算屬性、生命週期鉤子......等等，其中，生命週期鉤子（Lifecycle Hooks）為 Vue 實例帶來各種不同階段或情境所應該執行的函式，像是創建、初始化、編譯、更新、銷毀等等，這些鉤子便形成它所屬 Vue 實例的生命週期。</p>
        <p>Vue 從西元 2016 年發展至今也已推出第三代版本，生命週期隨著版本更新亦推陳出新，本篇文章筆記之重點將著墨於學習 Vue 的生命週期內容，以及比較各版本之間的差異。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、Vue1.0 的生命週期</h2>
        <p>在 Vue1.0 版本裡，官方提供的生命週期流程圖是這個樣子的：</p>
        <figure>
            <img src="/images/learn/js/vue-lifecycle-1.jpg">
        </figure>
        <p>序章曾經提到，Vue 生命週期包含各自不同階段執行程式的「生命週期鉤子（Lifecycle Hooks）」，Vue1.0 主要有六個鉤子函式，分別是 <em>created</em>、<em>beforeCompile</em>、<em>compile</em>、<em>ready</em>、<em>beforeDestory</em>、<em>destoryed</em>，也就是上圖中紅框底紅字的項目。</p>
        <p><br></p>
        <h3><em>created</em></h3>
        <p>在 Vue 實例創建完成後立即同步調用。此時實例通常已經完成「數據觀測」（Observe Data）、「事件初始化」（Init Events）、數據綁定、計算屬性、方法、watcher / 事件回調等解析工作，但是還沒有開始執行 DOM 的編譯，因此看不到 <em>el</em> 和 <em>$el</em> 屬性的存在。</p>
        <p><strong><em>el</em> 和 <em>$el</em> 是什麼？</strong></p>
        <p>首先，<em>el</em> 是 Vue 實例裡其中一個選項屬性，主要用於指定該實例要「渲染」（或稱「掛載」）到 DOM 的哪一個元素。舉例來說：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">new Vue({
    el: "#app",
    data: {
        message: "Hello, Vue!"
    }
})</code></pre>
        </div>
        <p>範例中我們將 Vue 實例透過 <em>el</em> 屬性指定給 DOM 裡面帶有 <em>app</em> ID 名稱的元素，因此 Vue 實例將會渲染（掛載）到該元素裡面，<em>el</em> 指定的對象不侷限於 ID，它可以是任一選擇器的字符串，或實際存在的 DOM 元素。</p>
        <p>至於 <em>$el</em> 也是 Vue 實例裡的屬性之一，它代表的是 Vue 實例所渲染 DOM 元素的引用，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var vm = new Vue({
    el: "#app",
    data: {
        message: "Hello, Vue!"
    }
})

// 訪問渲染的 DOM 元素
var element = vm.$el;
</code></pre>
        </div>
        <p><em>vm.$el</em> 將會引用 <em>#app</em> 所在的 DOM 元素，簡單來說就是方便我們在進行 DOM 互動事件時可以更方便、簡潔地去引用 Vue 實例。</p>
        <p><br></p>
        <h3><em>beforeCompile</em></h3>
        <p>Compile 一詞翻譯成中文是「編譯」的意思，所以 <em>beforeCompile</em> 指的是在編譯之前的鉤子函式。在這個鉤子裡面的程式會在模板（Template）編譯開始前被調用，不過在這個階段除了模板編譯還沒開始外，DOM 其實也仍處於尚未被渲染生成的狀態。</p>
        <figure>
            <img src="/images/learn/js/vue-lifecycle-2.jpg">
        </figure>
        <p>在 <em>beforeCompile</em> 進入 <em>compile</em> 階段這之間，Vue 實例會開始解析模板，並生成在虛擬的 DOM 記憶體裡，因為是虛擬的，所以瀏覽器實際畫面仍未能顯示解析的內容。</p>
        <p><br></p>
        <h3><em>compile</em></h3>
        <p>編譯完成後立即調用裡面的程式。通常在這個階段時所有指令都已生效，因此像是數據的變化都將會觸發 DOM 的更新，然而即便如此，此階段並不能保證 <em>$el</em> 也已經渲染到 DOM 裡面。</p>
        <p><br></p>
        <h3><em>ready</em></h3>
        <p><br></p>
        <h3><em>beforeDestory</em></h3>
        <p><br></p>
        <h3><em>destoryed</em></h3>

    </div>
    <div class="text-block" id="act2">
        <h2>xxx</h2>
    </div>
    <div class="text-block" id="act3">
        <h2>xxx</h2>
    </div>
    <div class="text-block" id="act4">
        <h2>xxx</h2>
    </div>
    <div class="text-block" id="act5">
        <h2>xxx</h2>
    </div>
    <div class="text-block" id="act5">
        <h2>參考資料</h2>
        <dl>
            <dd><a href="https://v1-cn.vuejs.org/api/#compiled" target="_blank">Vue 1.0</a></dd>
            <dd><a href="https://cn.vuejs.org/guide/essentials/lifecycle.html" target="_blank">Vue.js</a></dd>
            <dd><a href="https://www.itread01.com/article/1500940616.html" target="_blank">淺談Vue.js 1.x 和 2.x 例項的生命週期</a></dd>
            <dd><a href="https://blog.csdn.net/weixin_57519357/article/details/126858221" target="_blank">Vue 01 - Vue 的生命周期</a></dd>
            <dd><a href="https://www.jianshu.com/p/8642262f4403" target="_blank">vue1.0和2.0的生命周期详解</a></dd>
            <dd><a href="https://hackmd.io/@AndyAnn/HkITl35hO" target="_blank">VUE 從頭學 - vue 的生命週期</a></dd>
            <dd><a href="https://medium.com/%E5%B0%8F%E5%BD%A5%E5%BD%A5%E7%9A%84%E5%89%8D%E7%AB%AF%E4%BA%94%E5%9B%9B%E4%B8%89/vue-js-vue%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F-fc971fac8298" target="_blank">[Vue.js] Vue的生命周期</a></dd>
            <dd><a href="https://ithelp.ithome.com.tw/articles/10242633" target="_blank">vue3 Composition API 學習手冊-13 生命週期</a></dd>
            <dd><a href="https://blog.csdn.net/yifei1234567/article/details/123975970" target="_blank">【Vue3】——Vue3生命周期有哪些不同</a></dd>
        </dl>
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
    },

    data() {
        return {
            isActive: 0,
        }
    },
}
</script>