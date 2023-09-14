<template>
    <NuxtLayout name="article">
        <TempJs :propValue="30" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、Vue1.0 的生命週期</a></li>
            <li><a href="#act2">二、Vue2.0 的生命週期</a></li>
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
        <p>Vue 從西元 2015 年發展至今也已推出第三代版本，生命週期隨著版本更新亦推陳出新，本篇文章筆記之重點將著墨於學習 Vue 的生命週期內容，以及比較各版本之間的差異。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、Vue1.0 的生命週期</h2>
        <p>有別於傳統網頁開發一般都透過 JavaScript 選取指定元素的 ID 或 class，修改我們想要變動的區塊內容，Vue 採用的是「資料驅動畫面」模式，只要宣告變數的值發生改變，DOM 就會立即自動做更新，而不需要我們再手動去更新畫面。資料驅動畫面的好處令開發者只需專注在資料數據的管理和程式邏輯，不用再分神處理手動更新 DOM 的方法，不僅簡化前端開發的過程，也提高了程式碼的可讀與易維護性。</p>
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
        <p>編譯完成後立即調用裡面的程式。通常在這個階段時所有指令都已生效，因此像是數據的變化都將會觸發 DOM 的更新，然而即便如此，此階段還不能保證 <em>$el</em> 也已經渲染到 DOM 裡面。</p>
        <p><br></p>
        <h3><em>ready</em></h3>
        <p>根據官方文件的解釋，<em>ready</em> 會在編譯結束和 <em>$el</em> 首次渲染至 DOM 後調用，例如銜接在第一次 <em>attached</em> 鉤子之後。雖然生命週期圖表裡沒有 <em>attached</em>，但 <em>attached</em> 也是生命週期中的其中一個鉤子，它的呼叫時間點主要在 <em>vm.$el</em> 渲染進 DOM 之後，但有個前提，必須是由 Vue 指令或實例方法（例如 <em>$appendTo()</em>）插入才會觸發，直接針對 <em>vm.$el</em> 操作並無法觸發這個鉤子。</p>
        <p><br></p>
        <h3><em>beforeDestory</em></h3>
        <p>Destory 是銷毀的意思，如此一來 <em>beforeDestory</em> 意思就不難懂了，指的就是實例開始銷毀前調用的函式，而此時實例仍保有目前的功能。</p>
        <p>因此，<em>beforeDestory</em> 階段通常會執行一些資源清理的工作，譬如取消計時器、解除事件監聽器、銷毀子組件......等等。</p>
        <p><br></p>
        <h3><em>destoryed</em></h3>
        <p><em>destoryed</em> 是 Vue 實例生命週期的最後一站，它會在實例被銷毀後才調用，此時實例中的所有指令都已經解除綁定，裡面的子組件也已通通被銷毀。</p>
        <p>通常情況下，<em>destoryed</em> 鉤子在這個階段大多用來執行記憶體釋放之類的最終清理動作，和 <em>beforeDestory</em> 的主要差別在於實例進入銷毀階段的執行時機。</p>

    </div>
    <div class="text-block" id="act2">
        <h2>Vue2.0 的生命週期</h2>
        <p>Vue 1.0 於 2015 年 10 月問世，翌年 9 月緊接著發佈 2.0 版本，這個版本無論在語法結構或性能優化層面都有顯著的改進與加強，可以說是奠定 Vue 成為 JavaScript 熱門前端框架的一大關鍵。在 2.0 版本裡，Vue 實例的生命週期相較 1.0 版本也有些不小的改動，以下是 Vue 2.0 的生命週期圖表：</p>
        <figure>
            <img src="/images/learn/js/vue-lifecycle-3.jpg">
        </figure>
        <p>仔細看會發現原本 1.0 生命週期中的 <em>compile</em>、<em>ready</em> 等鉤子不見了，取而代之的則是 <em>mounted</em>，此外還新增了 <em>updated</em> 這個新的鉤子函式。在這裡我將 2.0 版的生命週期拆成各個執行階段，一邊重新複習 Vue 實例生命週期，一邊認識 2.0 版本修改及新增的鉤子函式其具體用途：</p>
        <p><br></p>
        <h3><em>beforeCreate</em>、<em>created</em></h3>
        <figure>
            <img src="/images/learn/js/vue-lifecycle-4.jpg">
        </figure>
        <p>首先，在進入解析模板階段之前的 <em>beforeCreate</em>、<em>created</em> 鉤子函式和 1.0 生命週期流程差不多，主要先進行一些事件、資料初始化的作業，這時 Vue 實例尚未渲染到 <em>el</em> 和 <em>$el</em>，因此 DOM 還看不到我們創建的 Vue 實例。至於 Vue 實例在 <em>beforeCreate</em> 階段仍無法透過其創建時定義的 VM（ViewModel）獲取裡面建立的數據（Data）、方法（Methods），直到 <em>created</em> 這個階段才能取得內容。</p>
        <figure>
            <img src="/images/learn/js/vue-lifecycle-5.jpg">
        </figure>
        <p>在 <em>created</em> 觸發後並到進入 <em>beforeMount</em> 之前的這個階段，Vue 實例會開始解析模板，並將其生成在 DOM 虛擬記憶體內，這時我們仍無法在 DOM 畫面看到編譯完成的 Vue 實例內容。</p>
        <p><br></p>
        <h3><em>beforeMount</em></h3>
        <figure>
            <img src="/images/learn/js/vue-lifecycle-6.jpg">
        </figure>
        <p><em>beforeMount</em> 鉤子裡的程式會在 Vue 實例開始渲染到 DOM 之前被觸發，在這個階段通常會執行一些資料數據請求、DOM 操作準備之類的預請求動作。緊接其之後 Vue 實例就會將生成在虛擬記憶體裡的模板正式掛載到實體的 DOM 畫面上：</p>
        <blockquote>Create vm.$el and replace "el" with it</blockquote>
        <p>以下將這段話透過程式碼範例逐步解釋 <em>vm.$el</em> 創建與取代的過程：</p>
        <h6>1. 建立 Vue 實例：</h6>
        <p>一開始我們建立 Vue 實例時，基本結構大概長這樣：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var vm = new Vue({
    el: "#app",
    data: {
        message: "Hello, Vue!"
    }
});</code></pre>
        </div>
        <p>其中 <em>vm</em> 表示我們所建立 Vue 實例的代稱，<em>el</em> 則指定了未來 DOM 渲染時，要將實例掛載到哪一個元素或指定選擇器裡。</p>
        <p><br></p>
        <h6>2. 訪問 vm.$el：</h6>
        <p><em>vm.$el</em> 是 Vue 內建的屬性，表示 Vue 實例裡的 <em>el</em> DOM 元素，以上面的程式碼範例來講，假如我們去 Console 它會得到 <em>#app</em> 裡面所有的 DOM 結構。</p>
        <p>範例：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="320" data-default-tab="js,result" data-slug-hash="OJrgdQM" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/OJrgdQM">
            Untitled</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <figure>
            <img src="/images/learn/js/vue-lifecycle-7.jpg">
        </figure>
        <p><br></p>
        <h6>3. 取代 <em>el</em> 屬性：</h6>
        <p>一旦 Vue 實例建立完成且也渲染到 DOM 時，<em>vm.$el</em> 就會取代 <em>el</em> 屬性，變成我們在瀏覽器畫面上看到的樣子。這個過程是由 Vue.js 自行處理的，我們不需要手動去呼叫或更改它。</p>
        <p><br></p>
        <h3><em>mounted</em></h3>
        <p>此時 DOM 已經編譯出 Vue 實例的內容（<em>vm.$el</em> 已替換掉 <em>el</em>），<em>mounted</em> 裡頭對 DOM 的操作基本上已可生效，在這個階段大多執行除了前面提到的 DOM 操作事件（例如新增、修改、刪除元素屬性、樣式或內容）外，以及請求數據、呼叫事件監聽器（例如偵測滑鼠滾動事件、鍵盤偵測等）、啟動計時器、初始化第三方插件、執行動畫或過渡效果......等任務，又或者向其他組件發送事件或調用方法。</p>
        <p>然而，<em>mounted</em> 並不能保證 Vue 實例中的子組件也都被渲染完成，因此有些操作方法可能無法正確地被執行，假如我們希望等整個 DOM 都渲染完成在執行某些任務，可以在 <em>mounted</em> 鉤子內使用 vm.$nextTick 函式。</p>
        <p>例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">mounted: function () {
    this.$nextTick(function () {
        // 在 DOM 完全渲染後才會執行的程式碼
    })
}</code></pre>
        </div>


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
            <dd><a href="https://v2.cn.vuejs.org/v2/api/#mounted" target="_blank">Vue.js 2.0</a></dd>
            <dd><a href="https://cn.vuejs.org/guide/essentials/lifecycle.html" target="_blank">Vue.js 3.0</a></dd>
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