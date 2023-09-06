<template>
    <NuxtLayout name="article">
        <TempWorkshop :propValue="13" />
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
        <p>&lt;picture&gt; 是 HTML5 新增的元素標籤，可依據裡頭設定不同的媒體（media）類型，顯示相對應的影像內容，大多廣泛運用在 RWD 設計上。不過由於是 HTML5 才訂立的標準，舊版本瀏覽器普遍不支援這個標籤，而 <a href="https://scottjehl.github.io/picturefill/" target="_blank">Picturefill.js</a> 的用途即是要讓舊瀏覽器也能識別該標籤。</p>
    </div>
    <div class="text-block">
        <h2 id="act2">二、程式碼</h2>
        <p>CDN：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;script src="https://cdn.rawgit.com/scottjehl/picturefill/3.0.2/dist/picturefill.js"&gt;&lt;/script&gt;</code></pre>
        </div>
        <p><br></p>
        <p>HTML：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;picture&gt;
    &lt;source srcset="large.jpg" media="(min-width: 960px)"&gt;
    &lt;source srcset="middle.jpg" media="(min-width: 768px)"&gt;
    &lt;source srcset="small.jpg" media="(max-width: 480px)"&gt;
    &lt;!--[if IE 9]&gt;&lt;video style="display: none;"&gt;&lt;![endif]--&gt;
    &lt;img src="default.jpg"&gt;
&lt;/picture&gt;</code></pre>
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