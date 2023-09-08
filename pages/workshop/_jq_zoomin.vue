<template>
    <NuxtLayout name="article">
        <TempWorkshop :propValue="25" />
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
        <p>影像放大的功能常見於產品資訊頁面的圖文介紹，藉由滑鼠聚焦影像放大的效果，可以讓使用者在查看產品時，能更清楚看見該產品的細節。</p>
        <p>效果預覽：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-default-tab="result" data-slug-hash="qjvLNy" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/qjvLNy">
            JQ-image-zoom-1</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
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
        <p>以及使用 <a href="https://www.elevateweb.co.uk/image-zoom/examples" target="_blank">elevate zoom</a> 此款套件（按：２０２３年查看時套件相關文件與範例已不在），所以也需引用其 JS 腳本文件：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;script src="https://www.elevateweb.co.uk/wp-content/themes/radial/jquery.elevatezoom.min.js"&gt;&lt;/script&gt;</code></pre>
        </div>
        <p>因為不是存放在 CDN 的檔案，建議下載至本機端專案資料夾使用。</p>
        <p><br></p>
        <p>HTML：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;img id="imgZoom" src="圖片連結" data-zoom-image="圖片連結"/&gt;</code></pre>
        </div>
        <p><br></p>
        <p>jQuery：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$('#imgZoom').elevateZoom({
    zoomType: "inner",
    cursor: "crosshair",
    zoomWindowFadeIn: 500,
    zoomWindowFadeOut: 500
});</code></pre>
        </div>
        <p>此為基本款，也就是文章開頭預覽範例的樣式，<a href="https://www.elevateweb.co.uk/image-zoom/examples" target="_blank">elevate zoom</a> 裡可以調整的參數尚包含其他呈現方式，以下簡單列舉幾款比較常見的：</p>
        <p><br></p>
        <h3>1. 圓形放大鏡：</h3>
        <p>jQuery：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$("#imgZoom").elevateZoom({
    zoomType: "lens",
    lensShape: "round",
    lensSize: 200
});</code></pre>
        </div>
        <p>範例：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-default-tab="result" data-slug-hash="xxmgzzG" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/xxmgzzG">
            JQ-image-zoom-3</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>2. 使用滾輪縮放的放大鏡：</h3>
        <p>jQuery：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$("#imgZoom").elevateZoom({
    scrollZoom: true
});</code></pre>
        </div>
        <p>範例：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-default-tab="result" data-slug-hash="yXwZKG" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/yXwZKG">
            JQ-image-zoom-5</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>3. 底圖著色 + 另開放大視窗：</h3>
        <p>jQuery：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$("#imgZoom").elevateZoom({
    tint: true, 
    tintColour: '#000', 
    tintOpacity: 0.5
});</code></pre>
        </div>
        <p>範例：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-default-tab="result" data-slug-hash="xrBmam" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/xrBmam">
            JQ-image-zoom-2</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>4. 多圖切換且帶有縮圖：</h3>
        <p>HTML：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;div class="img-wrap"&gt;
    &lt;div class="img-main"&gt;
        &lt;img id="imgZoom" src='中圖連結' data-zoom-image="大圖連結"/&gt;
    &lt;/div&gt;
    &lt;div id="gallery" class="img-cont"&gt;
    &lt;a href="#" data-image="中圖連結" data-zoom-image="大圖連結"&gt;
        &lt;img src="縮圖連結" /&gt;
    &lt;/a&gt;
    &lt;a href="#" data-image="中圖連結" data-zoom-image="大圖連結"&gt;
        &lt;img src="縮圖連結" /&gt;
    &lt;/a&gt;
    &lt;a href="#" data-image="中圖連結" data-zoom-image="大圖連結"&gt;
        &lt;img src="縮圖連結" /&gt;
    &lt;/a&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
        <p><br></p>
        <p>jQuery：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$("#imgZoom").elevateZoom({
    gallery: "gallery",
    zoomType: "inner",
    cursor: "crosshair",
    galleryActiveClass: "active",
    imageCrossfade: true,
    loadingIcon: "影像連結"
});</code></pre>
        </div>
        <p>範例：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-default-tab="js,result" data-slug-hash="vZPbyK" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/vZPbyK">
            JQ-image-zoom-4</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
    </div>
    <div class="text-block">
        <h2 id="act3">三、其他補充</h2>
        <p>本篇針對上一章使用的各項參數，再進行比較充分的說明與用途：</p>
        <p>放大鏡效果的呈現方式：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$("#imgZoom").elevateZoom({
    zoomType: "inner",
});</code></pre>
        </div>
        <p><em>inner</em> 為顯示於圖片範圍內，<em>lens</em> 為放大鏡尺寸內，沒有設定此行則另開一浮動視窗於一旁。</p>
        <p><br></p>
        <p>滑鼠移入上方的樣式：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$("#imgZoom").elevateZoom({
    cursor: "crosshair",
});</code></pre>
        </div>
        <p>這個參數的值和 CSS <em>cursor</em> 屬性的值所呈現出來的樣式是一樣的。</p>
        <p><br></p>
        <p>底圖著色效果：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$("#imgZoom").elevateZoom({
    tint: true,     // 是否啟用著色功能。
    tintColour: "色彩代碼",      // 著色的顏色
    tintOpacity: 數值           // 著色的透明度
});</code></pre>
        </div>
        <p>例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$("#imgZoom").elevateZoom({
    tint: true, 
    tintColour: "#000", 
    tintOpacity: 0.5
});</code></pre>
        </div>
        <p><br></p>
        <p>是否支援滾輪縮放：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$("#imgZoom").elevateZoom({
    scrollZoom: true,
});</code></pre>
        </div>
        <p><br></p>
        <p>圓形放大鏡的設定：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$("#imgZoom").elevateZoom({
    zoomType: "lens",
    lensShape: "round",     // 也可以是 square（方形）
    lensSize: 200           // 放大鏡尺寸
});</code></pre>
        </div>
        <p><br></p>
        <p>修改浮動側欄放大鏡的尺寸：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$("#imgZoom").elevateZoom({
    zoomWindowWidth: 數值,
    zoomWindowHeight: 數值,
    lensFadeOut: 500
});</code></pre>
        </div>
        <p><br></p>
        <p>漸入漸出的效果：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$("#imgZoom").elevateZoom({
    zoomWindowFadeIn: 數值,
    zoomWindowFadeOut: 數值,
    lensFadeIn: 數值,
    lensFadeOut: 數值,
    lensFadeOut: 500
});</code></pre>
        </div>
        <p><em>zoomWindowFadeIn</em> 和 <em>zoomWindowFadeOut</em> 用於放大視窗內的大圖；<em>lensFadeIn</em> 和 <em>lensFadeOut</em> 效果則用於放大鏡視窗本身。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$("#imgZoom").elevateZoom({
    zoomWindowFadeIn: 500,
    zoomWindowFadeOut: 500,
    lensFadeIn: 500,
    lensFadeOut: 500
});</code></pre>
        </div>
        <p><br></p>
        <p>多張圖片組成群組：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$("#imgZoom").elevateZoom({
    gallery: "ID 名稱",
    galleryActiveClass: "選取狀態時的 class 名稱"
});</code></pre>
        </div>
        <p>例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$("#imgZoom").elevateZoom({
    gallery: "gallery",
    galleryActiveClass: "active"
});</code></pre>
        </div>
        <p><br></p>
        <p>是否啟用緩動效果：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$("#imgZoom").elevateZoom({
    easing: true,
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