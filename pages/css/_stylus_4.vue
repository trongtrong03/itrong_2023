<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="12" fileType="learnCSS" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、混合（@mixins）</a></li>
            <li><a href="#act2">二、繼承（@extend）</a></li>
            <li><a href="#act3">三、區塊（@block）</a></li>
            <li><a href="#act4">四、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <p>本篇主題將聚焦 <em>@mixins</em>（混合）、<em>@extend</em>（繼承）、<em>@block</em>（區塊）──這三個比較容易令人分不清楚差異的功能進行介紹。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、混合（@mixins）</h2>
        <p>有些中文教學文章會將 <em>@mixins</em> 稱為「混入」語法，不管怎樣，它的概念類似函式，只是要定義的是一連串的屬性。使用 <em>@mixins</em> 時，先宣告函式名稱，然後加上括號，接著在嵌套（<em>{ }</em>）裡加入 CSS 屬性或其他敘述句，嵌套在 Stylus 中可以省略不寫。</p>
        <p>範例：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">text-style()
    line-height 1.5
    font-size 16px
    font-weight bold
    color #000</code></pre>
        </div>
        <p>這樣就是定義一個名為 <em>text-style</em> 的函式了。記住！作為 <em>mixins</em>，名稱後方的括號不可省略，否則 Stylus 編譯時會誤以為 <em>text-style</em> 是一個選擇器。</p>
        <p>之後我們如果要使用這個函式，直接在選擇器下方調用即可：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">p
    text-style()</code></pre>
        </div>
        <p>編譯結果：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">p {
    line-height: 1.5;
    font-size: 16px;
    font-weight: bold;
    color: #000;
}</code></pre>
        </div>
        <p><br></p>
        <p>也可以使屬性的參數值成為變數，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">item-size(w, h)
    width w
    height h</code></pre>
        </div>
        <p>選擇器調用時直接填入參數值即可：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">div
    item-size(100px, 50px)</code></pre>
        </div>
        <p>編譯結果：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">div {
    width: 100px;
    height: 50px;
}</code></pre>
        </div>
        <p><br></p>
        <p>當然，既然我們將屬性值成為變數，便意味著可以先指定值給它，達到預設值的功用。舉例來說：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">item-size(w = 100px, h = 50px)
    width w
    height h

div
    item-size()</code></pre>
        </div>
        <p>編譯結果：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">div {
    width: 100px;
    height: 50px;
}</code></pre>
        </div>
        <p>直接在選擇器調用時填入新的值，就能取代原本的預設值：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">div
    item-size(50%, 200px)</code></pre>
        </div>
        <p>編譯結果：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">div {
    width: 50%;
    height: 200px;
}</code></pre>
        </div>
        <p><br></p>
        <p>假如你沒有額外安裝像是 <a href="https://www.npmjs.com/package/autoprefixer-stylus" target="_blank">Autoprefixer</a> 之類輔助 Stylus 添加跨瀏覽器支援前綴的套件，那麼你可以透過 <em>@mixins</em> 事先定義前綴詞屬性。比如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">border-radius(val)
    -webkit-border-radius val
    -moz-border-radius val
    border-radius val

div
    border-radius(10px)</code></pre>
        </div>
        <p>編譯結果：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">div {
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
}</code></pre>
        </div>
    </div>
    <div class="text-block" id="act2">
        <h2>二、繼承（@extend）</h2>
        <p><em>@extend</em> 可以建立一個樣式模型，然後讓要套用該模型的選擇器去「繼承」它，雖然乍看之下和 <em>@mixin</em> 很像，但實際上兩者區別仍挺明顯的，我們直接透過實例來看會更能了解差異：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">.templete
    width 100px
    height 100px

.a
    @extends .templete
    background-color #000</code></pre>
        </div>
        <p>如果要建立樣式模型，模型本身必須為選擇器而非函式名稱。這是因為一旦有其他選擇器 <em>@extend</em> 該樣式模型，編譯時會連同樣式模型一起輸出到 CSS 文件中。像上方的 Stylus 語法經過編譯，會得到以下輸出結果：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">.templete,
.a {
    width: 100px;
    height: 100px;
}

.a {
    background-color: #000;
}</code></pre>
        </div>
        <p>你會發現 <em>.a</em> 選擇器繼承 <em>.templete</em> 樣式模型的屬性會合併在一起編譯，而不屬於樣式模型的屬性則會獨立輸出出來。</p>
        <p><br></p>
        <p>有趣的是，已繼承某的樣式模型的選擇器，同樣也能被其他選擇器繼承，創造出一種「我繼承了你的繼承」的超凡境界。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">.templete
    width 100px
    height 100px
   
.a
    @extends .templete
    background-color #000

.b
    @extends .a
    border 1px solid #F00</code></pre>
        </div>
        <p>編譯結果：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">.templete,
.a,
.b {
    width: 100px;
    height: 100px;
}

.a,
.b {
    background-color: #000;
}

.b {
    border: 1px solid #f00;
}</code></pre>
        </div>
        <p>是不是多少覺得有些難以閱讀了呢？方便歸方便，卻也相對容易衍生出「除了開發者本人，其他人都看不懂在寫什麼」的窘境。因此對一部份的開發者來說，並不是很喜歡大量使用 <em>@extend</em>。儘管，對於熟悉該功能的開發者來說確實十分好用。</p>
        <p>當然，<em>@extend</em> 除了上述讓其他選擇器繼承某個選擇器樣式的功能外，也能指定繼承對象的「範圍」，更精確地說，可以從繼承對象內的選擇器開始繼承樣式。譬如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">.templete
    width 100px
    span
        font-size 14px
   
.a
    @extends .templete span</code></pre>
        </div>
        <p>編譯結果：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">.templete {
    width: 100px;
}

.templete span,
.a {
    font-size: 14px;
}</code></pre>
        </div>
        <p>可以看到 <em>.a</em> 選擇器僅繼承 <em>.templete</em> 裡的 <em>span</em> 元素之樣式。</p>
        <p><br></p>
        <p>再來，<em>@extend</em> 允許同時繼承多個樣式模型，比方來說：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">.a
    width 100px

.b
    height 100px

.c
    @extends .a, .b</code></pre>
        </div>
        <p>編譯結果：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">.a,
.c {
    width: 100px;
}

.b,
.c {
    height: 100px;
}</code></pre>
        </div>
    </div>
    <div class="text-block" id="act3">
        <h2>三、區塊（@block）</h2>
        <p><em>@block</em> 建立的樣式模型本身不會被輸出成 CSS，不像 <em>@extend</em> 繼承對象本身就是一個選擇器。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">block =
    width: 100px
    height: 100px

.a
    {block}

.b
    {block}</code></pre>
        </div>
        <p>編譯結果：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">.a {
    width: 100px;
    height: 100px;
}

.b {
    width: 100px;
    height: 100px;
}</code></pre>
        </div>
        <p><em>block</em> 即表示其區塊名稱，後方必須加上 <em>=</em> 符號，否則編譯時將會被誤認為是選擇器。至於其他選擇器要使用該區塊模型時，只需要在下方加上嵌套（<em>{ }</em>），並將區塊名稱填入即可。</p>
        <p>只是我們也可以用 <em>@mixin</em> 實現相同的概念，而且還能用變數控制屬性值，令不同選擇器填入各自參數值。因此和前面兩個比起來，<em>@block</em> 的使用率比較沒那麼高。</p>
    </div>
    <div class="text-block" id="act4">
        <h2>四、參考資料</h2>
        <dl>
            <dd><a href="https://stylus-lang.com/" target="_blank">stylus</a></dd>
        </dl>
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
