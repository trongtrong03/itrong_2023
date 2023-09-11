<template>
    <NuxtLayout name="article">
        <TempJs :propValue="4" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、函式是什麼</a></li>
            <li><a href="#act2">二、函式結構與呼叫</a></li>
            <li><a href="#act3">三、函式的回傳值──return</a></li>
            <li><a href="#act4">四、變數的存在範圍</a></li>
            <li><a href="#act5">五、函式宣告方式與匿名函式</a></li>
            <li><a href="#act6">六、立即函式</a></li>
            <li><a href="#act7">七、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <p>函式（Function），亦有人稱之為函數，是構成 Javascript 的基本要素之一，它將一系列的敘述句組合起來，以執行一項特定的工作。本篇主題將介紹其基本運用及用法。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、函式是什麼</h2>
        <p>在哲宇老師的 JavaScript 教程曾經說過，程式開發者寫程式時應該避免以下三件事情：重複相同程式碼、無規劃/命名陳述目的、無法重複使用。這些不好的撰寫方式都會導致程式執行效率不佳或帶來維護不易的麻煩，舉例來說：</p>
        <figure>
            <img src="/images/learn/js/learn-function-1.jpg">
        </figure>
        <p>上方的範例示意圖裡存在三塊相同的重複程式碼（黑色區塊），當有一天需要針對某部份進行修改時，就得重複三次相同的作業流程。如果只有寥寥數行可能不覺得有什麼，假如修改範圍多達數十行，又或者其重複使用的地方很多，勢必需要投注大量的時間成本在同樣的事情上。然而，如果我們能將這些重複的程式碼「獨立」出來，使其可以被統一集中管理，並使其模組化，那麼就可以避免重複編寫一樣的程式，同時又可以在不同的程式碼功能重複呼叫它，大幅度增加程式的效能與易讀性。實現此一理想的方法，JavaScript 稱之為「函式」。</p>
        <figure>
            <img src="/images/learn/js/learn-function-2.jpg">
            <figcaption>利用函式來處理重複使用的程式碼。</figcaption>
        </figure>
    </div>
    <div class="text-block" id="act2">
        <h2>二、函式結構與呼叫</h2>
        <p>函式的關鍵字為 <em>function</em>，以下是宣告一個函式的基本架構圖：</p>
        <figure>
            <img src="/images/learn/js/learn-function-3.jpg">
        </figure>
        <p>透過函式關鍵字 <em>function</em> 告知解譯器我們要宣告一個函式，接著給予函式名稱，名稱後方須加上小括號 <em>( )</em>。負責執行工作的敘述句則放置於程式區段內，也就是由大括號 <em>{ }</em> 包含的範圍。如此一來，一個可以被重複使用的函式便誕生了。宣告完函式後，我們只要直接調用函式名稱就能執行函式大括號內的所有敘述句。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">// 宣告函式
function fName() {
    document.write('Hello world!');
}

// 呼叫函式
fName();</code></pre>
        </div>
        <div class="text-codepen">
            <p data-height="360" data-theme-id="0" data-slug-hash="mpzmMO" data-default-tab="js,result" data-user="itrong" data-embed-version="2" data-pen-title="JS-learn: example21" class="codepen">See the Pen <a href="https://codepen.io/itrong/pen/mpzmMO/">JS-learn: example21</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>) on <a href="https://codepen.io">CodePen</a>.</p>
        </div>
        <p>實作上面的練習範例，會發現函式尚未被宣告之前，就已經先被呼叫，但最後依然可以正常執行其敘述句...此乃因為解譯器會先讀取完整份 JavaScript 腳本，再依序執行每一行描述，故呼叫函式的程式碼寫於宣告之前「乍看」是可行的。只是一般來說，「先宣告後呼叫」仍是比較正常且良好的習慣。</p>
        <blockquote>
            <p>函式宣告有幾種方式，其中有一種寫法，若函式呼叫搶在宣告之前，將會被告知未定義（<em>undefined</em>）致使呼叫出錯。</p>
        </blockquote>
        <p><br></p>
        <h3>宣告一個「需要資訊的函式」：</h3>
        <p>以下先列舉一則模擬情境──有間主打彩繪手機殼的商店，提供顧客客製化彩繪的服務，依據上門顧客提供的樣本，來產出符合顧客需求的彩繪手機殼，此乃店家接單製作的標準作業流程。假如今天要用 JavaScript 表示，我們可以將「從接收訂單到將成品提交給顧客」這一連串的過程寫成函式，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">function 訂單() {
    接收顧客需求;
    進行手機殼彩繪作業;
    將手機殼交給顧客;
}

訂單();
訂單();
...
訂單();</code></pre>
        </div>
        <p>看完後相信你多少有察覺到不對勁──是的，儘管函式可以允許我們在不同的程式碼區域重複呼叫並執行其內部的程式碼，但並非所有顧客的需求都一樣，也許有的顧客主題是花卉、寵物、動漫...等，這種情況下，我們需要為函式代入一個參數，此參數用來傳遞顧客客製化訂單的需求。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">function 訂單(參數) {
    接收顧客 參數 需求;
    進行手機殼彩繪作業;
    將手機殼交給顧客;
}

訂單(羽蝶蘭);
訂單(我愛一條柴);
...
訂單(初音未來);</code></pre>
        </div>
        <p>如此一來，就能在不同區域呼叫函式時，傳入各別的參數值給函式執行程式了。</p>
        <p>看完文字舉例，我們將中文敘述轉換成程式碼，看看函式是如何表示的，此處我們以計算區域平面面積的公式為例：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">function getArea(width, height) {
    return width * height;
}</code></pre>
        </div>
        <p>此函式範例要展示的重點有二，一是要表達 <em>width</em>、<em>height</em> 為參數，其在函式中使用方式視同變數的概念。二則是函式設定的傳遞參數可不止一個。當我們要呼叫這個函式時，會在呼叫它的小括號內傳入要使用的值，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">getArea(30, 60);</code></pre>
        </div>
        <p>於函式呼叫的小括弧內傳入的值，我們稱之為「引數」，它們可以用「數值」或「變數」的方式進行傳遞。數值的部分如同上方的範例，而變數傳遞的方式如下：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">itemW = 30;
itemH = 60;
getArea(itemW, itemH);</code></pre>
        </div>
        <p>由此可見，函式呼叫裡的值不一定要是確定的數值，透過變數傳遞至對應的參數也能完成相同的工作。</p>
        <div class="text-codepen">
            <p data-height="360" data-theme-id="0" data-slug-hash="PEyJbW" data-default-tab="js,result" data-user="itrong" data-embed-version="2" data-pen-title="JS-learn: example22" class="codepen">See the Pen <a href="https://codepen.io/itrong/pen/PEyJbW/">JS-learn: example22</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>) on <a href="https://codepen.io">CodePen</a>.</p>
        </div>
    </div>
    <div class="text-block" id="act3">
        <h2>三、函式的回傳值──return</h2>
        <p>在大多數的函式中，我們可以看到其最末行使用 <em>return</em> 敘述句，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">function calculateArea(width, height) {
    var area = width * height;
    return area;
}</code></pre>
        </div>
        <p>在 <em>calculateArea</em> 此函式中，宣告了一個名為 <em>area</em> 的變數，以儲存運算（<em>width * height</em>）的結果。<em>return</em> 是用來回傳一個值給最初呼叫此函式的程式碼，一旦 <em>return</em> 被執行，解譯器便會跳出函式，回到當初呼叫此函式的敘述句位置。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="360" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="ZEQeXQZ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: function 1">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/ZEQeXQZ">
            JS-learn: function 1</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>上面實例練習中我們分別呼叫了 <em>calculateArea</em> 函式兩次，並傳遞不同的引數給函式執行運算，接著透過 <em>return</em> 將運算結果的值回傳給我們另外宣告的變數（<em>item1</em>、<em>item2</em>）。</p>
        <p>稍早有提過，若函式一旦讀到 <em>return</em> 並會立刻跳出，假如其後續還有其他敘述句都將不會被執行。請見下例：</p>
        <div class="text-codepen">
            <p data-height="360" data-theme-id="0" data-slug-hash="QaZOQX" data-default-tab="js,result" data-user="itrong" data-embed-version="2" data-pen-title="JS-learn: example23" class="codepen">See the Pen <a href="https://codepen.io/itrong/pen/QaZOQX/">JS-learn: example23</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>) on <a href="https://codepen.io">CodePen</a>.</p>
        </div>
        <p>由於函式內的 <em>document.write(t);</em> 被寫在 <em>return</em> 之後，所以不會被執行。</p>
        <p><br></p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">function calculateArea(width, height) {
    var area = width * height;
    return area;
}</code></pre>
        </div>
        <p><br></p>
        <h3>參數與引數的不同？</h3>
        <p>參數是指函式在宣告時所使用的字彙（例如：<em>width</em>、<em>height</em>）；引數則是指傳遞給函式進行運算的數值。</p>
    </div>
    <div class="text-block" id="act4">
        <h2>四、變數的存在範圍</h2>
        <p>JavaScript 的變數有其存在範圍，在存在範圍以外的程式碼便無法存取到該變數。存在範圍在 JavaScript 裡稱為「作用域」（Scope），只要建立一個函式，同時也是建立了一個新的作用域。當 JavaScript 查找變數時，會循著其所在作用域鏈（scope chain）一層一層向外尋找，直到找到宣告的變數或找不到變數為止。也因為如此，不同函式無法找到其他外部函式作用鏈裡的變數，且我們也無法從函式外部使用函式內的變數，例如：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="360" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="abdJada" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: function 3">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/abdJada">
            JS-learn: function 3</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>開啟 Console 視窗，可以看到其顯示 <em>Uncaught ReferenceError: a is not defined</em> 的錯誤警告。這類在函式內宣告且只存在於函式作用域內的變數，我們稱之為「局部變數」（Local variables），或稱「區域變數」。</p>
        <p>反之若是在函式外宣告的變數，則是所謂的「全域變數」（Global variables）
        不管是在函式內還是外，都可以存取到全域變數。例如：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="360" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="LYGWJxv" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: function 4">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/LYGWJxv">
            JS-learn: function 4</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>由於全域變數可以在任何地方...甚至被其他 js 文件存取到，因此大多專業人士會建議盡量審慎評估使用全域變數的必要，此乃避免不同文件都使用到了相同的全域變數命名，導致彼此互相覆蓋，進而引發程式問題。</p>
        <p>以上關於變數作用域的說明主要針對 JavaScript ES5 以前的版本，該版本之前變數存在範圍是以函式（Function）作為作用域，而從 ES6 開始，變數宣告方式多了 <em>let</em> 與 <em>const</em> 兩種，作用域將不再單純只是看 <em>function</em> 了，但本篇暫時不對 ES6 進行太多著墨，留待日後再行專文補充，現階段只需有個大概印象即可。</p>
    </div>
    <div class="text-block" id="act5">
        <h2>五、函式宣告方式與匿名函式</h2>
        <p>JavaScript 一共提供三種函式宣告的方式：</p>
        <ol>
            <li>Function declaration</li>
            <li>Function constructor</li>
            <li>Function expression</li>
        </ol>
        <h3>Function declaration：</h3>
        <p>本篇前大半篇幅介紹的函式內容範例皆採用此種寫法。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">function demo(text) {
    document.write(text);
}</code></pre>
        </div>
        <p>翻成中文叫做「函式宣告式」，這種宣告方式很常見，我們也可以叫它「具名函式」（Named Function），<em>demo</em> 便是此函式的名稱。</p>
        <p><br></p>
        <h3>Function constructor：</h3>
        <p>翻成中文叫做「函式建構式」，這裡就直接先說結論：在多數情況中，建構式的寫法並不常被使用到。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var demo = new Function("num1", "num2", "return num1 * num2");
var result = demo(10, 20);</code></pre>
        </div>
        <p><br></p>
        <h3>Function expression：</h3>
        <p>翻成中文叫做「函式陳述式」或函式表達式，主要是透過變數來定義函式，舉例來說：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var a = function demo(text) {
    document.write(text);
}</code></pre>
        </div>
        <p>範例中的 <em>function</em> 同樣有命名，所以同樣地也可稱作具名函式。然而當我們利用變數來定義函式時，就必須藉由變數（<em>a()</em>）去呼叫函式，而並非直接呼叫函式名稱（<em>demo()</em>），此時腦海裡不禁浮現幾個問題：</p>
        <ol>
            <li>這個函式要叫做 <em>a</em> 還是 <em>demo</em>？</li>
            <li>如果要透過變數名稱呼叫函式，為什麼還要為函式命名？</li>
        </ol>
        <p>第一題的答案──此函式的名稱依然叫做 <em>demo</em>，只是在函式之外我們必須通過 <em>a</em> 才能呼叫 / 存取到它。至於第二題的答案...變數宣告函式寫法裡同時為函式命名，自然有其適用時機，然而本篇文章尚不深入探討太多，現階段要說明的是，假設我們不給函式命名，單純這樣宣告的話：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var a = function() {
    document.write("Hello! world");
}</code></pre>
        </div>
        <p>它看上去就像一個沒有命名的函式，在程式語言裡這種寫法被稱為「匿名函式」（Anonymous Function）。匿名函式的用途廣泛，其中最主要的莫過於創建閉包（Closure）了。另外匿名函式作用域類似區域變數的作用域範圍，匿名函式一旦執行完畢，儲存在記憶體裡的變數就會立即被釋放（銷毀），而不會像全域變數那樣繼續佔據記憶體空間，匿名函式一方面可節省記憶體空間的同時，又可避免函式全域命名衝突的問題。</p>
        <p>另外補充一點，匿名函式不能單獨執行，譬如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">function() {
    document.write("Hello! world");
}</code></pre>
        </div>
        <p>當你透過線上編輯器或直接用瀏覽器開發者環境去看程式碼，會發現函式不但沒有執行，甚至還出現了錯誤：</p>
        <figure>
            <img src="/images/learn/js/learn-function-4.jpg">
            <figcaption>函式需要名稱。</figcaption>
        </figure>
    </div>
    <div class="text-block" id="act6">
        <h2>六、立即函式</h2>
        <p>一般而言，函式未經呼叫的情況下不會被執行，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">function demo() {
    document.write("Hello! world");
}</code></pre>
        </div>
        <p>這僅僅是定義一個名為 <em>demo</em> 的函式而已，如果要執行它，就得在程式其他地方去呼叫：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">function demo() {
    document.write("Hello! world");
}

demo();</code></pre>
        </div>
        <p>但其實，JavaScript 允許函式不經呼叫的動作就能立即被執行，這種用法在中文通稱為「立即函式」，英文術語叫做「Immediately Invoked Functions Expressions」，簡稱「IIFE」。立即函式的寫法有兩種，分別為：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">(function(){
}());</code></pre>
        </div>
        <p>以及</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">(function(){
})();  // 執行的小括號也可以直接寫在大括號後面</code></pre>
        </div>
        <p>第一種寫法是較被推薦的寫法，後續也將以這種格式為主。以下圖解它的結構：</p>
        <figure>
            <img src="/images/learn/js/learn-function-5.jpg">
        </figure>
        <p>從英文原名 Immediately Invoked Functions Expressions 中不難看出，立即函式引援自函式陳述式（Function expression），也就是說只有陳述式才能立即被執行。而真正使函式可以被立即執行的符號，則是函式程式碼區段（花括號 <em>{ }</em>）後方的成對小括弧 <em>( )</em>。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="360" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="qBbmadM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: function 5">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/qBbmadM">
            JS-learn: function 5</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>如果要將參數傳遞進去，則從立即執行符裡傳入：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="360" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="wvMdoBr" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: function 6">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/wvMdoBr">
            JS-learn: function 6</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <p>匿名函式與立即函式在函式運用中都是比較常見的概念和用法，然而初學階段下並不容易理解，因此現階段主要先了解 JavaScript 的函式結構及基本概念，隨著學習越發深入，相信對於函式也會有更深度的認識。</p>
    </div>
    <div class="text-block" id="act7">
        <h2>七、參考資料</h2>
        <dd><a href="https://www.books.com.tw/products/0010744702" target="_blank">《JavaScript & JQuery：網站互動設計程式進化之道》</a></dd>
        <dd><a href="http://www.kangting.tw/2013/12/javascript-7.html" target="_blank">JavaScript 快速入門（7/10）－ 函式</a></dd>
        <dd><a href="https://www.fooish.com/javascript/function.html" target="_blank">JavaScript Function (函式)</a></dd>
        <dd><a href="https://w3c.hexschool.com/blog/cb6e361" target="_blank">有點長的淺談 JavaScript function 函式</a></dd>
        <dd><a href="https://medium.com/@hugh_Program_learning_diary_Js/%E5%89%8D%E7%AB%AF%E4%B8%AD%E9%9A%8E-js%E4%BB%A4%E4%BA%BA%E6%90%9E%E4%B8%8D%E6%87%82%E7%9A%84%E5%9C%B0%E6%96%B9-%E8%AE%8A%E6%95%B8%E7%9A%84%E7%94%9F%E5%AD%98%E7%AF%84%E5%9C%8D-scope-b548fa067687" target="_blank">前端中階：JS令人搞不懂的地方-變數的生存範圍（scope）</a></dd>
        <dd><a href="https://blog.techbridge.cc/2020/04/18/javascript-function-is-awesome-and-i-love-it/" target="_blank">覺得 JavaScript function 很有趣的我是不是很奇怪</a></dd>
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
    },

    data() {
        return {
            isActive: 0,
        }
    },
}
</script>