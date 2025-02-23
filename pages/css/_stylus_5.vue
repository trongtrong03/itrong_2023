<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="13" fileType="learnCSS" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、條件式（if）</a></li>
            <li><a href="#act2">二、迭代（Iteration）</a></li>
            <li><a href="#act3">三、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <p>條件式（If）與迭代（Iteration）於多數程式語言中是很常被使用的語法，預處理器程式語言也不例外，本篇文章的內容將闡述如何在 Stylus 中使用這兩個語法。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、條件式（if）</h2>
        <p>我們可以用條件式定義一系列的判斷規則，標準的條件式語法由 <em>if</em> 與 <em>else</em> 組成。若條件不止兩個，則第二個之後的條件以 <em>else if</em> 表示，最後一樣以 <em>else</em> 結尾。<a href="https://stylus-lang.com/docs/conditionals.html" target="_blank">官方文件</a>提供幾種使用方式，以下就來練習如何定義條件式。</p>
        <p><br></p>
        <h5>範例一：</h5>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">demo = true

if demo
    size(w, h)
        width w
        height h

div
    size(100px, 50px)</code></pre>
        </div>
        <p>在此範例中，我們先宣告一個變數，並指定起始狀態為 <em>true</em> 的值給它。接著是條件式的內容，範例在條件式裡加入了一個 <em>@mixin</em> 函式，然後我們在 <em>div</em> 調用該 <em>@mixin</em>。最後實際看看輸出結果：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">div {
    width: 100px;
    height: 50px;
}</code></pre>
        </div>
        <p>當 <em>demo</em> 為 <em>true</em>，其條件式內容就會執行。由於一開始定義時即給了它 <em>true</em> 初始值，因此其條件式內容就會編譯輸出到 CSS 文件。</p>
        <p><br></p>
        <h5>範例二：</h5>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">size(w, h, use = false)
    if use
        width w
        height h

div
    size(100px, 50px, true)</code></pre>
        </div>
        <p>編譯結果：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">div {
    width: 100px;
    height: 50px;
}</code></pre>
        </div>
        <p>這種方式的好處是讓具有條件式的 <em>@mixin</em> 更靈活地被使用，較彈性、非固定性的屬性可以寫在條件式裡，讓每個調用 <em>@mixin</em> 的選擇器單獨設定是否要輸出條件式的內容。</p>
        <p><br></p>
        <h5>範例三：</h5>
        <p>通常條件式除了 <em>if</em> 之外還有 <em>else</em>，表示未滿足 <em>if</em> 條件時，則執行 <em>else</em> 裡面的內容。舉例來說：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">size(w, h, use = false)
    if use
        width w
        height h
    else
        width h
        height w</code></pre>
        </div>
        <p>然後分別在不同選擇器調用：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">.div-1
    size(100px, 50px, true)
  
.div-2
    size(100px, 50px)</code></pre>
        </div>
        <p>編譯結果：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">.div-1 {
    width: 100px;
    height: 50px;
}
.div-2 {
    width: 50px;
    height: 100px;
}</code></pre>
        </div>
        <p><br></p>
        <h5>範例四：</h5>
        <p>如果條件式需要很多個條件判斷的時候，會在 <em>if</em> 與 <em>else</em> 之間加入 <em>else if</em>。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">font-color($color)
    if $color == Red
        color #F00

    else if $color == Blue
        color #00F

    else if $color == Green
        color #0f0

    else
        color #000</code></pre>
        </div>
        <p>當變數 <em>$color</em> 填入的參數為 <em>Red</em> 時，<em>color</em> 屬性值為 <em>#F00</em>。若參數是 <em>Blue</em>，則 <em>color</em> 屬性值為 <em>#00F</em>...依此類推。假如參數不符合任一條件，則輸出 <em>else</em> 的內容。</p>
        <p>調用：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">.text-1
    font-color(Red)

.text-2
    font-color(Blue)

.text-3
    font-color(Green)

.text-4
    font-color(false)</code></pre>
        </div>
        <p>編譯結果：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">.text-1 {
    color: #f00;
}

.text-2 {
    color: #00f;
}

.text-3 {
    color: #0f0;
}

.text-4 {
    color: #000;
}</code></pre>
        </div>
        <p><br></p>
        <h5>範例五：</h5>
        <p>前面範例都在講當判定符合條件時輸出其內容，這邊要展示的則是直接定義「不符合」的條件，這種條件式通常適用在「除了某某條件外的情況」。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">font-color($color)
    if (!($color == red))
        color #000
    else
        color #F00

div
    font-color(white)</code></pre>
        </div>
        <p>此條件式用字面解釋意思就是：代入參數除了 <em>red</em> 之外的參數，文字顏色通通是黑色（<em>#000</em>）。讓我們來看輸出結果：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">div {
    color: #000;
}</code></pre>
        </div>
        <p>不過像「除非」這樣的概念，別於上面 <em>(!(expr))</em>，Stylus 還提供另一種語法，叫做 <em>unless</em>。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">font-color($color)        
    unless $color == red
        color #000

div
    font-color(white)</code></pre>
        </div>
        <p>編譯結果：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">div {
    color: #000;
}</code></pre>
        </div>
    </div>
    <div class="text-block" id="act2">
        <h2>二、迭代（Iteration）</h2>
        <p>在 Stylus 中用來表示迭代的語法為 <em>for ... in</em>，具體的語法規則為下：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">for &lt;val-name&gt; [, &lt;key-name&gt;] in &lt;expression&gt;</code></pre>
        </div>
        <p>同樣地，迭代有幾種手法可以運用，以下一一介紹。</p>
        <p><br></p>
        <h5>範例一：</h5>
        <p>看到 <em>for</em>，最直覺聯想到的當屬迴圈敘述了，我們可以設定一組數字範圍，透過迭代重複輸出迴圈裡的敘述句，直到變數與設定條件不符合為止。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">div
    for num in 1 .. 5
        z-index num</code></pre>
        </div>
        <p>我們先看結果：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">div {
    z-index: 1;
    z-index: 2;
    z-index: 3;
    z-index: 4;
    z-index: 5;
}</code></pre>
        </div>
        <p>首先在 <em>for</em> 後方給予一個變數名稱，然後定義其範圍，<em>..</em> 指的就是「到」的意思（包含前後值本身）。條件設定完成後，編譯時就會依照條件逐一執行 <em>for</em> 裡的內容，直至條件不符合時結束...也就是當變數 <em>num</em> 值為 <em>6</em> 的時候。</p>
        <p><br></p>
        <h5>範例二：</h5>
        <p>當然啦，我們寫 CSS 不可能像範例一那樣在選擇器裡重複迭代相同的屬性，如果要令選擇器進行迭代應該要怎麼做？答案很簡單，只要把選擇器寫在 <em>for</em> 敘述裡即可，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">for num in 1 .. 5
    .layout-{num}
        z-index num</code></pre>
        </div>
        <p>如果選擇器名稱也要跟著迭代，則將變數名稱以嵌套 <em>{ }</em> 包覆起來即可。最後編譯結果為：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">.layout-1 {
    z-index: 1;
}

.layout-2 {
    z-index: 2;
}

.layout-3 {
    z-index: 3;
}

.layout-4 {
    z-index: 4;
}

.layout-5 {
    z-index: 5;
}</code></pre>
        </div>
        <p><br></p>
        <h5>範例三：</h5>
        <p>假如要迭代的對象是一組資料，那麼我們只要先宣告一個變數並指定好資料，接著讓 <em>for</em> 直接迭代該變數即可。具體作法為下：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">$names = john, peter, tom
for name in $names
    .user-{name}
        background-image url('images/' + name + '.jpg')</code></pre>
        </div>
        <p>編譯結果：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">.user-john {
    background-image: url("images/john.jpg");
}

.user-peter {
    background-image: url("images/peter.jpg");
}

.user-tom {
    background-image: url("images/tom.jpg");
}</code></pre>
        </div>
        <p><br></p>
        <h5>範例四：</h5>
        <p>承襲上一個範例，我們也可以加入陣列的觀念，讓迭代裡的內容分別去指定位置。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">$colors = is-red #F00, is-blue #00F, is-green #0F0
for color in $colors
    .{color[0]}
        background-color color[1]</code></pre>
        </div>
        <p>編譯結果：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">.is-red {
    background-color: #f00;
}

.is-blue {
    background-color: #00f;
}

.is-green {
    background-color: #0f0;
}</code></pre>
        </div>
        <p><br></p>
        <h5>範例五：</h5>
        <p>迭代的條件也可以進行運算，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-stylus">for num in 1 .. 5
    .percent-{num * 10}
        width 10% * num</code></pre>
        </div>
        <p>編譯結果：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">.percent-10 {
    width: 10%;
}

.percent-20 {
    width: 20%;
}

.percent-30 {
    width: 30%;
}

.percent-40 {
    width: 40%;
}

.percent-50 {
    width: 50%;
}</code></pre>
        </div>
        <p><br></p>
        <p>以上就是迭代的使用方法，善用迭代的功能不僅可以使程式碼更加簡潔，也可以增加開發者的工作效率。</p>
    </div>
    <div class="text-block" id="act3">
        <h2>三、參考資料</h2>
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
