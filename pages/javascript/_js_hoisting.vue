<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="15" fileType="learnJs" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、變數提升</a></li>
            <li><a href="#act2">二、函式提升</a></li>
            <li><a href="#act3">三、XXX</a></li>
            <li><a href="#act4">四、XXX</a></li>
            <li><a href="#act5">五、XXX</a></li>
            <li><a href="#act6">六、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <p>根據 <a href="https://developer.mozilla.org/zh-TW/docs/Glossary/Hoisting" target="_blank">mdn web docs</a> 的敘述，Hoisting 這個專有名詞在 JavaScript 裡是找不到的，至少在目前 ECMAScript® 2015（即 ES6）版本裡還沒有這個名詞的專欄介紹。中文通常翻譯為「提升」的 Hoisting，其實是釐清 JaveScript 在執行階段時，如何運行程式腳本的思路，屬於一種行為概念衍生的名詞。Hoisting 概念主要牽涉變數及函式宣告在程式腳本執行過程中被「提升」到其作用域頂部的現象，依據變數、函式在不同作用域或上下文作宣告，對程式執行可能會產生不同的影響，這個特性是 JavaScript 特有的，和其他程式語言不同，故對很多初入門的開發者來說很容易混淆，因此搞懂 Hoisting 的概念遂成為學習 JavaScript 很重要的課題之一。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、變數提升</h2>
        <p>如果我們試圖去向一個沒有被宣告的變數取值，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">console.log(dog);    // Uncaught ReferenceError: dog is not defined </code></pre>
        </div>
        <p>你將發現我們會得到 <b>Uncaught ReferenceError: dog is not defined</b> 的錯誤結果，這個意思是在說「dog」這個變數尚未被定義，所以 JavaScript 無法取得這個變數。有趣的是如果我們現在將程式碼寫成這樣：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">console.log(dog);    // undefined
var dog;</code></pre>
        </div>
        <p>依我們對程式語言的認知，程式執行的時候正常都是由上而下一行一行去執行的，第一個程式範例的寫法因為沒有先宣告而噴錯這很好理解，可是第二個範例中明明也是先取用變數，只是後續才補給該變數的宣告，如果按照由上而下的順序，不是應該也是要噴錯嗎，怎麼得到的結果會是「undefined」型別？</p>
        <p>這種現象就叫做 Hoisting，下方的變數因為某種原因被「提升」到了最上面，所以我們可以想像 JavaScript 在執行第二個範例時將程式改動成這樣：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var dog;
console.log(dog);    // undefined</code></pre>
        </div>
        <p>但說是想像，實際上原本的程式碼順序並沒有被作改動，Hoisting 是 JavaScript 在進行編譯的時候對變數、函式宣告的一種「預處理」行為，屬於其內部機制之一，用來確保作用域內的變數及函式能在它們被宣告前可使用，所以在程式腳本在真正執行前，JavaScript 就先內過內部機制進行了預處理，將變數、函式提升到最上面。</p>
        <p><em>undefined</em> 這個資料型用來表示那些還沒給值、尚未初始化，以及調用不存在該屬性的變數。在第二個範例我們僅宣告變數「dog」，還沒有賦值給它，所以 Console 它才會回傳 <em>undefined</em> 的結果──</p>
        <p>其實這麼解釋並不完全正確，假如我們現在再將範例改寫成宣告變數並同時賦值給它，經過 JavaScript 預處理 Hoisting 後觀察程式碼執行會發生什麼事：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">console.log(dog);    // undefined
var dog = "阿比";</code></pre>
        </div>
        <p>會發現得到的回傳結果仍然是 <em>undefined</em>，由此可得知，JavaScript 提升的只有變數的宣告，賦值不會跟著一人得道雞犬升天，我們可以嘗試理解成 JavaScript 在預處理的時候將程式碼這樣處理：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var dog;
console.log(dog);    // undefined
dog = "阿比";</code></pre>
        </div>
        <p>再稍微深入一點，若我們再將範例程式碼變寫為以下敘述：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var dog;
console.log(dog);
var dog = "阿比";
console.log(dog);</code></pre>
        </div>
        <p>試想看看前後 <em>console.log(dog)</em> 回傳結果是什麼？答案是：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var dog;
console.log(dog);    // undefined
var dog = "阿比";
console.log(dog);    // 阿比</code></pre>
        </div>
        <p>我們可以拆解成以下會更容易理解：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var dog;
var dog
console.log(dog);    // undefined
dog = "阿比";
console.log(dog);    // 阿比</code></pre>
        </div>
        <p><br></p>
        <p>因為 JavaScript Hoisting 的特性，我們對 <em>var</em> 這個宣告關鍵字產生「可以先使用後宣告」、「可以重複宣告」等認知，不過 JavaScript 在 ES6 版本推出後多了 <em>let</em> 和 <em>const</em> 這兩個宣告變數的用法，我們都知道這兩個關鍵字出現的主要目的是希望開發者能更嚴謹、更正確地宣告變數，而這是否會與 Hoisting 之間產生影響？是不是使用它們就不存在 Hoisting 了？</p>
        <p>我們直接透過範例來看：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">console.log(dog);
let dog = "阿比";    // Uncaught ReferenceError: Cannot access 'dog' before initialization</code></pre>
        </div>
        <p>還記得章節一開始在沒有宣告變數的情況下就去呼叫該變數，瀏覽器會回傳 <b>Uncaught ReferenceError: dog is not defined</b> 這樣的錯誤訊息嗎？今天如果我們透過 <em>let</em> 宣告變數，得到的結果卻是 <em>Uncaught ReferenceError: Cannot access 'dog' before initialization</em>，這就意味著 <em>let</em> 確實還是有被 Hoisting 的，該錯誤訊息意思是我們「不能在變數（dog）被初始化之前嘗試訪問它」，具體來說就是當我們使用 <em>let</em>（<em>const</em> 亦然）宣告變數時，該變數會在 JavaScript 預處理階段被建立，但不會被初始化，至於賦值的部份和 <em>var</em> 相同，不管有沒有給值都不會被提升。</p>
        <p>然後如果我們在宣告之前就先訪問該變數，將會觸發 JavaScript Temporal Dead Zone（TDZ，暫時性死區）機制，當開發者使用 <em>let</em> 及 <em>const</em> 宣告變數及常數，但還沒有賦值給它們之前，會產生一段它們不能被調用的狀況，這段空窗時間就是暫時性死區。暫時性死區確保我們使用 <em>let</em>、<em>const</em> 必須先進行宣告，以避免像 <em>var</em> 那樣還沒被宣告就可以拿來使用，導致潛藏一些錯誤問題。只有在變數宣告的敘述句真正被執行的時候，變數才會被初始化，此時 JavaScript 才會安全地訪問它。</p>
    </div>
    <div class="text-block" id="act2">
        <h2>二、函式提升</h2>
        <p>除了變數之外，函式也有 Hoisting 概念，函式有 Hoisting 的好處是我們可以在定義好函式之前就先呼叫它。一般正常情況下，我們會這樣定義與呼叫函式：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">function Animal(){
    var dog = "阿比";
    console.log(dog);
}

Animal();    // 阿比</code></pre>
        </div>
        <p>但是因為 Hoisting 的關係，變數、函式的宣告都會在 JavaScript 預處理的時候提升到最頂端，因此有時候自己在寫或看到別人將函式呼叫放在定義之前，像這樣：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">Animal();    // 阿比

function Animal(){
    var dog = "阿比";
    console.log(dog);
}</code></pre>
        </div>
        <p>會發現程式這樣寫也能正常執行，這便是受惠於 Hoisting 的影響，不止如此，Hoisting 的機制也能允許不同函式彼此互相呼叫</p>

    </div>
    <div class="text-block" id="act3">
        <h2>xxxx</h2>
    </div>
    <div class="text-block" id="act6">
        <h2>六、參考資料</h2>
        <dl>
            <dd><a href="https://developer.mozilla.org/zh-TW/docs/Glossary/Hoisting" target="_blank">mdn web docs 提升（Hoisting）</a></dd>
            <dd><a href="https://blog.techbridge.cc/2018/11/10/javascript-hoisting/" target="_blank">我知道你懂 hoisting，可是你了解到多深？</a></dd>
            <dd><a href="https://www.shubo.io/javascript-hoisting/#javascript-hoisting-%E6%8F%90%E5%8D%87" target="_blank">[教學] JavaScript Hoisting 是什麼？ let, const, var 的差異是什麼？</a></dd>
            <dd><a href="https://jianline.com/javascript-hoisting/#Temporal_dead_zone%E6%9A%AB%E6%99%82%E6%AD%BB%E5%8D%80%E8%88%87const%E3%80%81let" target="_blank">[筆記]-JavaScript 提升(Hoisting)是什麼?關於提升的5個觀念</a></dd>
            <dd><a href="https://suochantsao.medium.com/js%E7%AD%86%E8%A8%98%E7%B3%BB%E5%88%97-%E6%9A%AB%E6%99%82%E6%80%A7%E6%AD%BB%E5%8D%80-temporal-dead-zone-c7cad9b5cc1" target="_blank">JS筆記系列：暫時性死區 Temporal Dead Zone</a></dd>
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