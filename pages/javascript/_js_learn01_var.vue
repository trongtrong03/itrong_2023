<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="17" fileType="learnJs" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、如何宣告變數？</a></li>
            <li><a href="#act2">二、作用域是什麼？</a></li>
            <li><a href="#act3">三、變數的資料型別</a></li>
            <li><a href="#act4">四、變數的命名規則</a></li>
            <li><a href="#act5">五、總結</a></li>
            <li><a href="#act6">六、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <blockquote>
            <p>JavaScript variables are containers for storing data values.</p>
        </blockquote>
        <p>這段引述取自 <a href="https://www.w3schools.com/js/js_variables.asp" target="_blank">w3schools</a> 對 JavaScript「變數」一詞的描述，如果要直翻這句話，意思為「JavaScript 變數是用來儲存資料參數值的容器。」什麼意思呢？透過舉例或許會比較容易理解：</p>
        <p>某天，阿比牽著一台油箱可容納 7 公升的摩托車去加油站加油，95 無鉛汽油的價格為每公升 20 元，在油箱一滴油都不剩的前提下，試問阿比此行要花多少加油錢？這是很簡單的數學運算，公式為「容升 x 每公升價格 = 總價格」，最終得出 140 元（7 x 20）的結果。然而，雖然摩托車的油箱容升是固定的，油價卻不可能永遠停在每公升 20 元，也許下週大降 0.1 元，下下週小漲 2 元...等，它是一種時不時發生改變的浮動數字，因此，我們就可以稱它是──或者說是使它成為一個變數。</p>
        <p>JavaScript 會透過定義變數的方式，快速取得每一次數值變動後的計算結果，最後更新到畫面元素裡（即 HTML 的元素標籤），對於掌管網頁動態資訊來往的 JavaScript 而言，基本上任何程式操作都很難脫離變數獨自去執行，因此，變數可說是 JavaScript 這門程式語言的重要核心之一，無時無刻都會看見也會使用到它。</p>
        <p>本篇文章學習 JavaScript 變數包含以下這些要點：</p>
        <ul>
            <li>宣告</li>
            <li>作用域</li>
            <li>資料型別</li>
            <li>命名規則</li>
        </ul>
    </div>
    <div class="text-block" id="act1">
        <h2>一、如何宣告變數？</h2>
        <p>使用變數之前，必須先發佈通知，這個動作包含建立變數，以及賦予變數名稱。此一過程我們稱之為「宣告（declare）」，在 JavaScript ES6 版本發布之前，一貫使用 <em>var</em> 這個詞（variables 的簡寫）來宣告變數。</p>
        <p>例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var price;</code></pre>
        </div>
        <p>上面範例我們宣告了一個名為 <em>price</em> 的變數，但此時還沒有指定參數值給它，因此它的內容仍處於「undefined」的型別狀態（未定義）。假如我們指定一組數字給它，例如 <em>20</em>，那麼 <em>price</em> 的回傳值結果將為 <em>20</em>，給的方式很簡單，直接使用等號即可：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var price = 20;</code></pre>
        </div>
        <p>我們通常會稱這個行為叫做「給值」或「賦值」，值得注意的是，單一 <em>=</em> 符號在 JavaScript 並非「等於」的意思，而是表達「指定」的概念，故前面才會說將 <em>20</em> 「指定」給 <em>price</em>。</p>
        <p>以上就是 JavaScript 變數宣告的方式了，但是還記得第一段說道「在 JavaScript ES6 版本發布『之前』」嗎？是的，在 2015 年 ES6（ECMAScript 2015） 版本發佈的一系列內容裡，新增了另外兩種變數的宣告關鍵字──<em>let</em> 以及 <em>const</em>，它們宣告的方式與 <em>var</em> 一樣，差別在於宣告所使用的關鍵字，把 <em>var</em> 換成 <em>let</em> 或 <em>const</em> 而已。</p>
        <p>例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">let price = 20;</code></pre>
        </div>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">const price = 20;</code></pre>
        </div>
        <p>既然會新增這些東西就表示事出必有原因，但由於這會牽涉到作用域的問題，現階段暫且不深入詳談，我們只要知道截至目前 JavaScript 最新版本為止，宣告變數所能使用的關鍵字一共有三個，分別是<em>var</em>、<em>let</em>、<em>const</em>。</p>
        <p><br></p>
        <p>有時候我們會看到一些人會這樣宣告變數：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var dog;</code></pre>
        </div>
        <p>是的，就像本章節第一個程式碼範例，單純只宣告變數而沒有賦值；或是有些人沒有先宣告變數就直接賦值給它，例如 <em>dog = "阿比"</em>，這種直接給值不先做變數宣告的行為通常被稱為「隱式宣告」，在撇除作用域可能產生問題的前提下，這些變數宣告的方式或許還是能讓 JavaScript 存取這些變數，但它終究屬於開發者撰寫程式過程的一大陋習，除了可能造成團隊其它開發人員不易閱讀外，也存在「變數汙染」的風險，例如我們在函式內隱式宣告變數 <em>dog</em>，這個 <em>dog</em> 將會被視為全域變數，但假設全局作用域中早已有宣告 <em>dog</em> 相同的變數名稱，那麼函式內 <em>dog</em> 的值將會影響全域已宣告 <em>dog</em> 變數的值，這個現象便是「變數汙染」。</p>
        <p>不過即便不談變數汙染的問題，無論是在什麼作用域，首先我們也應當避免重複宣告相同名稱的變數。</p>
        <p>複習一下：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var dog;    // 不好的宣告</code></pre>
        </div>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">dog = "阿比";    // 不好的宣告</code></pre>
        </div>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var dog = "阿比";    // 好的宣告</code></pre>
        </div>
    </div>
    <div class="text-block" id="act2">
        <h2>二、作用域是什麼？</h2>
        <p>「作用域」一詞在程式語言原名叫做 Scope，指的是變數（或函式）的可見性與其訪問的範圍，作用域的概念存在於許多程式語言，而不同程式語言也各自具有不同的作用域規則與特點，例如 Python 的變數作用域取決於函式的定義範圍；Java 雖然和 Python 相似，但它的變數只能在代碼區塊內部宣告，通常不能在該區塊之外的地方訪問其內部宣告的變數。</p>
        <p>回到 JavaScript，我們來看看 MDN 對作用域的解釋是怎樣說的：</p>
        <blockquote>
            <p>The current context of execution. The context in which values and expressions are “visible” or can be referenced. If a variable or other expression is not “in the current scope,” then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.</p>
        </blockquote>
        <p>在 JavaScript 世界裡，當變數在「執行環境」（Execution Contexts） 被宣告的那一刻起，它便開始存在了，只是它和它所綁定的值可以影響整個程式片段的範圍到哪裡？關於這個問題就是作用域要討論的內容。而上面這段引述大概可以簡化成以下兩個重點：</p>
        <ol>
            <li>作用域指的是變數的有效範圍，離開有效範圍的變數無法被存取。</li>
            <li>外部作用域無法取得內部作用域的變數，但內層的變數可以取得外層的變數。</li>
        </ol>
        <p><br></p>
        <h3>有哪些作用域？</h3>
    </div>
    <div class="text-block" id="act3">
        <h2>三、變數的資料型別</h2>
    </div>
    <div class="text-block" id="act4">
        <h2>四、變數的命名規則</h2>
    </div>
    <div class="text-block" id="act5">
        <h2>五、總結</h2>
    </div>
    <div class="text-block" id="act6">
        <h2>六、參考資料</h2>
        <dl>
            <dd><a href="https://blog.csdn.net/lbxx1984/article/details/39205717" target="_blank">几张简约而不简单的JavaScript学习树状图</a></dd>
            <dd><a href="https://medium.com/take-a-day-off/js-scope-%E4%BD%9C%E7%94%A8%E5%9F%9F-ee536640963b" target="_blank">[JS] Scope 作用域</a></dd>
            <dd><a href="https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part3/function_scope.html" target="_blank">函式與作用域</a></dd>
            <dd><a href="https://jianline.com/javascript-scope-and-scope-chain/" target="_blank">[筆記]-JavaScript 作用域與作用域鏈是什麼?關於作用域的4個觀念</a></dd>
            <dd><a href="https://www.explainthis.io/zh-hant/swe/what-is-scope-and-scope-chain" target="_blank">Javascript 的作用域 (Scope) 與作用域鏈 (Scope Chain) 是什麼?</a></dd>
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