<template>
    <NuxtLayout name="article">
        <TempWorkshop :propValue="12" />
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
        <p><a href="https://flatpickr.js.org/" target="_blank">flatpickr</a> 是一款頗為熱門的日曆套件，它有著輕量、容易使用的優點，且功能也十分強大，譬如和 HTML <em>&lt;input&gt;</em> 內建的 Type <em>date</em> 相比，這款套件提供較自由的格式設定，對舊版瀏覽器的相容性也比較好一些（舊瀏覽器不支援 <em>input type="date"</em>）。</p>
        <p>效果預覽：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-default-tab="js,result" data-slug-hash="gNKpWy" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/gNKpWy">
            jq-plugin: flatpickr</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
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
        <p>此外還有 <a href="https://dotdotdot.frebsite.nl/" target="_blank">flatpickr</a> 的 JS 與 CSS 檔案，如果你不打算直接下載到本機端專案資料夾使用，也可以直接導向它們的 CDN：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;!-- CSS --&gt;
&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"&gt;

&lt;!-- JS --&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/flatpickr"&gt;&lt;/script&gt;</code></pre>
        </div>
        <p><br></p>
        <p>HTML：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;input type="text" class="datepicker" placeholder="請選擇日期時間"/&gt;</code></pre>
        </div>
        <p><br></p>
        <p>CSS（僅列出必要部份）：</p>
        <p>這裡由於已經引用了 <a href="https://dotdotdot.frebsite.nl/" target="_blank">flatpickr</a> 套件提供的 CSS 樣式表，因此沒有其他必須要額外添加的屬性。</p>
        <p><br></p>
        <p>jQuery：</p>
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
    </div>
    <div class="text-block">
        <h2 id="act3">三、其他補充</h2>
        <p>相關 API 設定參數可以透過官方文件的 <a href="https://flatpickr.js.org/examples/" target="_blank">Examples</a> 頁面進行查看。</p>
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