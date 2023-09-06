<template>
    <NuxtLayout name="article">
        <TempWorkshop :propValue="2" />
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
        <p>網頁常見的排版效果之一，主要用來將網頁裡的內容進行分群，透過頁籤標題間進行切換，顯示相對應的內容，藉此節省網頁整體長度，適當地頁籤管理也可以提升整體閱讀感覺，降低因文章冗長而產生的負面觀感。</p>
        <p>效果預覽：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-default-tab="js,result" data-slug-hash="exNPNj" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/exNPNj">
            jq-tabs</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
    </div>
    <div class="text-block">
        <h2 id="act2">二、程式碼</h2>
        <p>此效果有使用到 jQuery，故 HTML 裡必須引用其官方套件：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"&gt;&lt;/script&gt;</code></pre>
        </div>
        <p><br></p>
        <p>HTML：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;div class="tabs-wrap"&gt;
    &lt;div class="tabs-nav"&gt;
        &lt;ul&gt;
            &lt;li class="tabs-item"&gt;標題A&lt;/li&gt;
            &lt;li class="tabs-item"&gt;標題B&lt;/li&gt;
            &lt;li class="tabs-item"&gt;標題C&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
    &lt;div class="tabs-main"&gt;
        &lt;div class="tabs-content"&gt;內容A&lt;/div&gt;
        &lt;div class="tabs-content"&gt;內容B&lt;/div&gt;
        &lt;div class="tabs-content"&gt;內容C&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
        <p><br></p>
        <p>CSS（僅列出必要部份）：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">.tabs-item {
    display: inline-block;
    &.is-active {}
}

.tabs-content {
    display: none;
    &.is-active {
        display: block;
        animation-name: fadeIn;
        animation-duration: .5s;
        animation-fill-mode: forwards;
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}</code></pre>
        </div>
        <p><br></p>
        <p>jQuery：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$(function(){
    $(".tabs-item:first").addClass("is-active");
    $(".tabs-content:first").addClass("is-active");
    $(".tabs-item").click(function(){
        $(this).addClass("is-active");
        $(this).siblings().removeClass("is-active");
        $(".tabs-content").siblings().removeClass("is-active");  
        $(".tabs-content").eq($(this).index()).addClass("is-active");
    });
});</code></pre>
        </div>
    </div>
    <div class="text-block">
        <h2 id="act3">三、其他補充</h2>
        <p>用原生 JavaScript 實現相同效果的寫法：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">document.addEventListener("DOMContentLoaded", function () {
    var tabsItems = document.querySelectorAll(".tabs-item");
    var tabsContent = document.querySelectorAll(".tabs-content");

    tabsItems[0].classList.add("is-active");
    tabsContent[0].classList.add("is-active");

    tabsItems.forEach(function (item, index) {
        item.addEventListener("click", function () {
            tabsItems.forEach(function (tab) {
                tab.classList.remove("is-active");
            });
            tabsContent.forEach(function (content) {
                content.classList.remove("is-active");
            });
            item.classList.add("is-active");
            tabsContent[index].classList.add("is-active");
        });
    });
});</code></pre>
        </div>

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