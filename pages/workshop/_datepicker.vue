<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="12" fileType="workshop" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act1">一、JavaScript 版本</a></li>
            <li><a href="#act2">二、jQuery 版本</a></li>
            <li><a href="#act3">三、Vue 版本</a></li>
            <li><a href="#act4">四、CSS 版本</a></li>
        </ul>
    </div>
    <div class="text-block" id="act1">
        <h2>一、JavaScript 版本</h2>
        <p>暫無內容。</p>
    </div>
    <div class="text-block" id="act2">
        <h2>二、jQuery 版本</h2>
        <p>效果演示：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-default-tab="result" data-slug-hash="gNKpWy" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/gNKpWy">
            jq-plugin: flatpickr</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <p>官方套件：<a href="https://flatpickr.js.org/" target="_blank">flatpickr</a></p>
        <p>引用外部檔案（非 CDN 建議下載至本機端專案資料夾內）：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;!-- CSS --&gt;
&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"&gt;

&lt;!-- JS --&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"&gt;&lt;/script&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"&gt;&lt;/script&gt;</code></pre>
        </div>
        <p><br></p>
        <p>HTML：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;input type="text" class="datepicker" placeholder="請選擇日期時間"/&gt;</code></pre>
        </div>
        <p><br></p>
        <p>CSS（僅列出必要部份）：</p>
        <p>這裡由於已經引用了 <a href="https://flatpickr.js.org/" target="_blank">flatpickr</a> 套件提供的 CSS 樣式表，因此沒有其他必須要額外添加的屬性。</p>
        <p><br></p>
        <p>JavaScript：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$(function() {
    var doSomething = function() {
        console.log(fp[0].currentYear);
    }
    var options = {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        altInput: true,
        altFormat: "F j, Y H:i",
        minuteIncrement: 0,
    };

    const fp = $(".datepicker").flatpickr(options);
    var date = new Date();
    fp[0].setDate(date);
    console.log(fp[0].currentYear);
});</code></pre>
        </div>
        <p>相關 API 設定參數可以透過官方文件的 <a href="https://flatpickr.js.org/examples/" target="_blank">Examples</a> 頁面進行查看。</p>
    </div>
    <div class="text-block" id="act3">
        <h2>三、Vue 版本</h2>
        <p>暫無內容。</p>
    </div>
    <div class="text-block" id="act4">
        <h2>四、CSS 版本</h2>
        <p>暫無內容。</p>
    </div>
</div>
<!-- end -->
    </NuxtLayout>
</template>

<script setup lang="ts">
    // layout
    definePageMeta({
        layout: false
    });
</script>