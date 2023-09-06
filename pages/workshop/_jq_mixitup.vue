<template>
    <NuxtLayout name="article">
        <TempWorkshop :propValue="7" />
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
        <p>當我們試圖從網頁上成千上百筆資料或產品中，將搜尋條件限縮到更精準的範圍，這個行為便稱作「篩選」。通常網頁技術裡實現篩選的方式除了透過表單元素（<em>input:checkbox</em>、<em>input:radio</em> 或 <em>select</em>）搭配 JavaScript 邏輯之外，亦有人利用 jQuery 函式庫開發出一套容易引入使用的效果套件，其套件名稱為 <a href="https://www.kunkalabs.com/mixitup/" target="_blank">MixItUp</a>。</p>
        <p>效果預覽：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-default-tab="js,result" data-slug-hash="GebNBX" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/GebNBX">
            jq-mixitup</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
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
        <p>此外也需要引用 <a href="https://www.kunkalabs.com/mixitup/" target="_blank">MixItUp</a> 套件提供的 <a href="https://cdn.jsdelivr.net/jquery.mixitup/latest/jquery.mixitup.min.js" target="_blank">jquery.mixitup.js</a> 文件，可以下載該檔案並放到專案資料夾裡，抑或直接引用他們提供的 CDN 連結：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;script src="https://cdn.jsdelivr.net/jquery.mixitup/latest/jquery.mixitup.min.js"&gt;&lt;/script&gt;</code></pre>
        </div>
        <p><br></p>
        <p>HTML：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;div class="filter-wrap"&gt;
    &lt;div class="filter-menu"&gt;
    &lt;input type="text" class="filter-input" placeholder="請輸入關鍵字"&gt;
        &lt;button class="filter" data-filter="all"&gt;All&lt;/button&gt;
        &lt;button class="filter" data-filter=".dataA"&gt;A&lt;/button&gt;
        &lt;button class="filter" data-filter=".dataB"&gt;B&lt;/button&gt;
        &lt;button class="filter" data-filter=".dataC"&gt;C&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="filter-list"&gt;
        &lt;div class="filter-item mix dataA"&gt;
            &lt;h2 class="title"&gt;A1&lt;/h2&gt;
        &lt;/div&gt;
        &lt;div class="filter-item mix dataA"&gt;
            &lt;h2 class="title"&gt;A2&lt;/h2&gt;
        &lt;/div&gt;
        &lt;div class="filter-item mix dataC"&gt;
            &lt;h2 class="title"&gt;C1&lt;/h2&gt;
        &lt;/div&gt;
        &lt;div class="filter-item mix dataA"&gt;
            &lt;h2 class="title"&gt;A3&lt;/h2&gt;
        &lt;/div&gt;
        &lt;div class="filter-item mix dataB"&gt;
            &lt;h2 class="title"&gt;B1&lt;/h2&gt;
        &lt;/div&gt;
        &lt;div class="filter-item mix dataC"&gt;
            &lt;h2 class="title"&gt;C2&lt;/h2&gt;
        &lt;/div&gt;
        &lt;div class="filter-item mix dataB"&gt;
            &lt;h2 class="title"&gt;B2&lt;/h2&gt;
        &lt;/div&gt;
        &lt;div class="filter-item mix dataC"&gt;
            &lt;h2 class="title"&gt;C3&lt;/h2&gt;
        &lt;/div&gt;
        &lt;div class="filter-item mix dataB"&gt;
            &lt;h2 class="title"&gt;B3&lt;/h2&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
        <p><br></p>
        <p>CSS（僅列出必要部份）：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">.filter-item {
    display: none;
}</code></pre>
        </div>
        <p><br></p>
        <p>jQuery：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$(function(){
    $(".filter-wrap").mixItUp();
    var inputText;
    var $matching = $();

    var delay = (function(){
        var timer = 0;
        return function(callback, ms){
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
    })();

    $(".filter-input").keyup(function(){
        delay(function(){
            inputText = $(".filter-input").val().toLowerCase();
            if ((inputText.length) > 0) {            
                $( '.mix').each(function() {
                    $this = $("this");
                    if($(this).children('.title').text().toLowerCase().match(inputText)) {
                        $matching = $matching.add(this);
                    }
                    else {
                        $matching = $matching.not(this);
                    }
                });
                    $(".filter-wrap").mixItUp('filter', $matching);
            }
            else {
                $(".filter-wrap").mixItUp('filter', 'all');
            }
        }, 200);
    });
});</code></pre>
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