<template>
    <NuxtLayout name="article">
        <TempWorkshop :propValue="11" />
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
        <p>先撇開 CSS3 <em>-webkit-line-clamp</em> 屬性不提，過去我們在面對溢出固定區域範圍的過長字串時，能透過 <em>text-overflow: ellipsis;</em> 搭配 <em>white-space: nowrap;</em> 的方式輕鬆解決。然而，這個方法僅限於單行溢出的處理，若客戶希望至少能保留兩行或兩行以上的行數，超出的內容再以「...」符號取代掉，這在過去是 CSS 很難達到的事情（即便有，也會是工法複雜且不好應付所有情境的方法），因此遇到這類的需求，通常會需要借助 JavaScript 的幫助。<a href="https://dotdotdot.frebsite.nl/" target="_blank">dotdotdot</a> 便是其中一款專門針對溢出文字進行替代符號處理的常見 JS 套件之一。</p>
        <p>效果預覽：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-default-tab="js,result" data-slug-hash="WqMZGp" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/WqMZGp">
            jq-plugin: dotdotdot-1</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
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
        <p>此外還有 <a href="https://dotdotdot.frebsite.nl/" target="_blank">dotdotdot</a> 的 <a href="https://cdnjs.cloudflare.com/ajax/libs/jQuery.dotdotdot/3.0.0/jquery.dotdotdot.js" target="_blank">jquery.dotdotdot.js</a> 文件，可下載以本機端引用的方式使用或是直接引用它的 CDN：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jQuery.dotdotdot/3.0.0/jquery.dotdotdot.js"&gt;&lt;/script&gt;</code></pre>
        </div>
        <p><br></p>
        <p>HTML：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;div class="dot-text"&gt;
    &lt;p&gt;文字內容...&lt;/p&gt;
&lt;/div&gt;</code></pre>
        </div>
        <p><br></p>
        <p>CSS（僅列出必要部份）：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">.dot-text {
    height: 100px;
    overflow: hidden;
}</code></pre>
        </div>
        <p>如同單行溢出的方法需要 <em>overflow: hidden;</em> 來使區塊隱藏超出的內容，這裡也是基於相同概念。至於高度值則是要讓 JavaScript 判斷監聽的文字內容是否已超過區域範圍，始能進行溢出處理的動作。</p>
        <p><br></p>
        <p>jQuery：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$(function() {
    $(".dot-text").dotdotdot({
        watch: "window"
    });
});</code></pre>
        </div>
    </div>
    <div class="text-block">
        <h2 id="act3">三、其他補充</h2>
        <p>文章開頭有提到撇除 CSS3 <em>-webkit-line-clamp</em> 屬性的部份，事實上這個屬性的發佈主要就是用來解決多行文字溢出的問題，其語法搭配為下：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}</code></pre>
        </div>
        <p>其中參數值 <em>3</em> 表示在行數達到三行，超出的後續文字內容便會直接以「...」替代，我們甚至也不用計算區域高度要設定多少，非常方便。只不過這個屬性的泛用度還沒有很廣泛，且舊版本的瀏覽器普遍不支援，若有需要兼容舊版瀏覽器的使用者，那麼建議還是使用套件來處理會比較穩當。</p>
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