<template>
    <NuxtLayout name="article">
        <TempWorkshop :propValue="4" />
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
        <p>Particleground Effects，俗稱粒子效果，是一種利用 JavaScript 衍生的框架或函式庫產生的視覺炫麗效果，其多半會結合使用者所使用的裝置，進行互動增添趣味性，比如在電腦端，粒子會隨著滑鼠移動而跟著改變方向；手機裝置則可以透過陀螺儀偵測，讓那些瀏覽器產生的粒子隨著重力進行視覺差滾動的效果。</p>
        <p>效果預覽：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-default-tab="js,result" data-slug-hash="ywdxdZ" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/ywdxdZ">
            jq: plugin-particleground</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
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
        <p>此外還有使用到 <a href="https://jnicol.github.io/particleground/" target="_blank">particleground.js</a> 這款套件，因為此套件的相關 JS 文件檔案並沒有 CDN 的連結版本，所以建議直接下載它的 <a href="https://jnicol.github.io/particleground/js/jquery.particleground.min.js">jquery.particleground.min.js</a> 檔案，並放入專案資料夾裡面。</p>
        <p>因此，在調用程式碼之前，引用檔案的 <em>script</em> 標籤通常會長這個樣子：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"&gt;&lt;/script&gt;
&lt;script src="js/jquery.particleground.min.js"&gt;&lt;/script&gt;</code></pre>
        </div>
        <p><br></p>
        <p>HTML：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;div id="particles"&gt;&lt;/div&gt;</code></pre>
        </div>
        <p><br></p>
        <p>CSS：</p>
        <p>此款套件沒有必須添加的 CSS，但假設你想要讓整個螢幕畫面的背景填滿粒子效果，CSS 的部份可以這樣寫：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">#particles {
  width: 100vw;
  height: 100vh;
  background: #5cbdaa;
  overflow: hidden;
}</code></pre>
        </div>
        <p><br></p>
        <p>jQuery：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$(function(){
    $('#particles').particleground({
        dotColor: '#FFF',
        lineColor: '#FFF',
    });
});</code></pre>
        </div>
    </div>
    <div class="text-block">
        <h2 id="act3">三、其他補充</h2>
        <p>其他可調用參數及功能說明：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">dotColor: '#FFF',     // 網點的顏色。
lineColor: '#FFF',      // 網線的顏色。
minSpeedX: 0.1,     // X軸的動畫最小速度。
maxSpeedX: 0.7,     // X軸的動畫最大速度。
minSpeedY: 0.1,     // Y軸的動畫最小速度。
maxSpeedY: 0.7,     // Y軸的動畫最大速度。
directionX: 'center',   // 可以是 'center'，'left' 或者 'right' 之一。 'center' 表示點將從畫布的邊緣反彈。
directionY: 'center',   // 可以是 'center'，'up' 或者 'down' 之一。 'center' 表示點將從畫布的邊緣反彈。
density: 10000,         // 渲染密度，數值越小越密。
particleRadius: 7,      // 網點大小。
lineWidth: 1,       // 線寬。
curvedLines: false,     // 曲線，true 為使用，false 為不使用。
proximity: 100,     // 使網點之間連線的距離，數值越小則要越相近才會連線。
parallax: true,     // 是否啟用視差跟隨效果。
parallaxMultiplier: 5,      // 數值越小，視差跟隨的效果就越極端。</code></pre>
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