<template>
    <NuxtLayout name="article">
        <TempWorkshop :propValue="26" />
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
        <p>文章標題念起來可能會覺得有些拗口，其實這篇要實現的效果類似 CSS <em>position</em> 屬性於 CSS3 新增的 <em>sticky</em> 參數，也就是所謂的黏性定位法，但有鑑於 <em>sticky</em> 無法支援舊版本的瀏覽器，在某些情況下亦可能不具作用（例如父元素設置了 <em>overflow</em> 並將該屬性值設定為 <em>hidden</em>），這種時候可能還是得回歸傳統透過 JavaScript 來協助。</p>
        <p>效果預覽：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-default-tab="result" data-slug-hash="QgoGdx" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/QgoGdx">
            JQ-fixed-scroll</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
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
            <pre><code class="language-html">&lt;section&gt;
    &lt;div class="block"&gt;scroll down...&lt;/div&gt;
&lt;/section&gt;
&lt;div class="fixed"&gt;fix box&lt;/div&gt;</code></pre>
        </div>
        <p>這裡 HTML 的程式碼片段僅為示範用，不需要按照這個格式寫，主要是要將置頂觸發的元素添加名稱為 <em>.fixed</em> 的 class，以用來讓 JavaScript 能獲取到指定對象。</p>
        <p><br></p>
        <p>jQuery：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$(function() {
    var t = $(".block").outerHeight();
    $(".fixed").css("top", t);

    $(window).scroll(function(){
        $(".fixed").css("top", Math.max(0, 240-$(this).scrollTop()));
    });
});</code></pre>
        </div>
    </div>
    <div class="text-block">
        <h2 id="act3">三、其他補充</h2>
        <p>用原生 JavaScript 實現相同效果的寫法：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">document.addEventListener("DOMContentLoaded", function() {
    var block = document.querySelector(".block");
    var fixed = document.querySelector(".fixed");

    function updateFixedPosition() {
        var t = block.offsetHeight;
        fixed.style.top = Math.max(0, 240 - window.scrollY) + "px";
    }

    // 初始設定
    updateFixedPosition();

    // 網頁滾動時更新 .fixed 的位置
    window.addEventListener("scroll", updateFixedPosition);
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