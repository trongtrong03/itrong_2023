<template>
    <NuxtLayout name="article">
        <TempWorkshop :propValue="5" />
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
        <p>跑馬燈是網頁中相當常見的功能之一，通常主要用來呈現最新消息或重大事項。儘管 HTML 本身已有 <em>&lt;marquee&gt;</em> 標籤可實現文字跑馬燈的效果，但效果比較陽春，且已被 <a href="https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/marquee" target="_blank">mdn web docs</a> 列為已過時、不推薦繼續使用的功能。若有動態呈現訊息跑馬燈的需求，可嘗試利用 JavaScript 來完成，以下是透過 jQuery 實現的成果：</p>
        <p>效果預覽：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-default-tab="js,result" data-slug-hash="vbOvJP" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/vbOvJP">
            jq-newsticker</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
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
            <pre><code class="language-html">&lt;div class="news-wrap"&gt;
    &lt;ul class="news-item"&gt;
        &lt;li&gt;&lt;a href="#0"&gt;標題A&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#0"&gt;標題B&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#0"&gt;標題C&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
        </div>
        <p><br></p>
        <p>CSS（僅列出必要部份）：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">.news-list {
    overflow: hidden;
}</code></pre>
        </div>
        <p><br></p>
        <p>jQuery：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var hoverNews = null;
function newsTicker() {
  $(".news-list")
    .filter(function(item) {
        return !$(this).is(hoverNews);
    })
    .each(function() {
        $(this)
        .find("li:first")
        .slideUp(function() {
            var newsitem = $(this).closest(".news-list");
            $(this)
                .appendTo(newsitem)
                .slideDown();
        });
    });
}
setInterval(newsTicker, 1000);

$(function() {  
    $(".news-list").hover(
        function() {
            hoverNews = $(this);
        },
        function() {
            hoverNews = null;
        }
    );
});</code></pre>
        </div>
    </div>
    <div class="text-block">
        <h2 id="act3">三、其他補充</h2>
        <p>假如要一次顯示比較多的筆數，可以從外層 <em>.news-list</em> 的高度著手，以前面預覽範例舉例，裡面單項 <em>li</em> 的高度為 <em>3rem</em>，假如我想要讓整個列表同時顯示三筆資料，則可以將 <em>.news-list</em> 的高度設置為 <em>9rem</em>（3rem * 3）</p>
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