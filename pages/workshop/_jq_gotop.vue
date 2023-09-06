<template>
    <NuxtLayout name="article">
        <TempWorkshop :propValue="14" />
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
        <p>實現返回頂部的方法有很多，本篇講述一下如何用 jQuery 快速製作一個點擊能立即返回網頁頂端的功能，並添加滾動內容至一定距離時產生淡入、淡出的動畫效果。</p>
        <p>效果預覽：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-default-tab="js,result" data-slug-hash="MoxypL" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/MoxypL">
            JQ-gotop</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
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
            <pre><code class="language-html">&lt;button class="btn-top"&gt;top&lt;/button&gt;</code></pre>
        </div>
        <p><br></p>
        <p>CSS（僅列出必要部份）：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">.btn-top {
    display: none;
}</code></pre>
        </div>
        <p>也可以使用 <em>float</em> 或 <em>display: inline-block</em> 等方式取代 <em>flex</em> 使標題與內容左右排列。</p>
        <p><br></p>
        <p>jQuery：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$(function() {
    $(".btn-top").click(function() {
        $('body, html').animate({
            scrollTop: 0
        }, 500);
    });
});</code></pre>
        </div>
        <p>如果要使按鈕在網頁捲動到一定距離後才顯現，可添加以下這段程式碼：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 240) {
            $(".btn-top").fadeIn();
        } else {
            $(".btn-top").fadeOut();
        }
    });
});</code></pre>
        </div>
        <p><em>240</em> 表示頁面向下捲動的距離（單位為像素），可自行更換為理想的數字。</p>
    </div>
    <div class="text-block">
        <h2 id="act3">三、其他補充</h2>
        <p>用原生 JavaScript 實現相同效果的寫法：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">document.addEventListener("DOMContentLoaded", function() {
    const btnTop = document.querySelector(".btn-top");

    function handleScroll() {
        if (window.scrollY > 240) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    }

    function scrollToTop() {
        const scrollDuration = 500;
        const scrollStep = -window.scrollY / (scrollDuration / 15);
        const scrollInterval = setInterval(function() {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    }

    window.addEventListener("scroll", handleScroll);
    btnTop.addEventListener("click", scrollToTop);
});</code></pre>
        </div>
        <p><br></p>
        <p>另外，利用 CSS3 的 <em>scroll-behavior</em> 屬性同樣可以令網頁移動至指定區域時產生平滑移動的動畫視覺效果，而且完全不需要動用到 JavaScript 幫忙。語法：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">body {
    scroll-behavior: smooth;
}</code></pre>
        </div>
        <p>但這個方法除了舊版本瀏覽器不相容，目前 Apple iOS 系統（包含 MAC、iPhone）同樣也不支援這個語法，故使用時恐怕得多留意相容性的問題。</p>
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