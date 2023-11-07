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
        <p>在 JavaScript 世界裡，當變數在「執行環境」（Execution Contexts，有關執行環境相關介紹留到本章節末段再說明）被宣告的那一刻起，它便開始存在了，只是它和它所綁定的值可以影響整個程式片段的範圍到哪裡？這個問題就是作用域所要討論的內容。而上面這段引述大概可以簡化成以下兩個重點：</p>
        <ol>
            <li>作用域指的是變數的有效範圍，離開有效範圍的變數無法被存取。</li>
            <li>外部作用域無法取得內部作用域的變數，但內層的變數可以取得外層的變數。</li>
        </ol>
        <p><br></p>
        <h3>有哪些作用域？</h3>
        <p>目前 JavaScript 作用域分為以下三個層級，分別是「全域作用域」（Global Level Scope）、「函式作用域」（Function Scope）、「區塊作用域」（Block Scope）。</p>
        <p><br></p>
        <h4>全域作用域（Global Level Scope）：</h4>
        <p>當 JavaScript 開始執行編譯前的最初階段，會產生一個 Global Execution Context，中文通譯為「全域執行環境」，而在全域執行環境中都會包含一個「全域變數物件」（Global Variable Object），用來存放所有在全域環境中宣告的變數（也包含函式），這些放在全域環境的變數，我們可以在程式任何地方去存取它，意即該變數的作用域就是「全域作用域」。</p>
        <p>如果要從程式碼片段裡分辨該變數是不是全域變數，最直接了當的方式就是看它是不是在函式或區塊內做宣告，像這樣直接宣告在 JavaScript 最外部沒有被任何程式符號包裹住的，基本上就是存活在全域作用域的變數：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var dog = "阿比";    // 全域變數

console.log(dog);    // 阿比

function Animal(){
    console.log(dog);    // 阿比
};
Animal();</code></pre>
        </div>
        <p>可以看到無論是在全域直接 Console 打印，還是在函式 <em>Animal()</em> 內呼叫 <em>dog</em> 這個變數，所得到的回傳結果都是「阿比」這個在宣告階段同時綁定的賦值。</p>
        <p><br></p>
        <h4>函式作用域（Function Level Scope）：</h4>
        <p>承襲全域作用域變數的說明，若今天變數是在函式內做宣告，其影響範圍就只會侷限在函式內，函式是什麼？函式指的就是由關鍵字 <em>function</em> 宣告並構成的一個程式碼架構，譬如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">// 函式變數宣告
function Animal(){
    var dog = "阿比";
    console.log(dog);
};
Animal();    // 呼叫函式</code></pre>
        </div>
        <p>與變數同為 Javascript 構成的基本要素，有關函式的討論將會另外開篇幅撰文筆記，這裡就先不著墨太多內容，現階段我們只要先知道函式粗略形貌即可。而在函式內宣告的變數，其作用域只會存在於函式 <em>{ }</em> 範圍內，如果在外部全局作用域或其他函式內去調用那個變數，我們將會得到「ReferenceError」的錯誤警告。</p>
        <p>例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">// 區域變數宣告
function Animal(){
    var dog = "阿比";
};

// 全域呼叫變數打印結果
console.log(dog);    // Uncaught ReferenceError: dog is not defined.</code></pre>
        </div>
        <p>所以，如果說全域作用域宣告的變數被稱為「全域變數」（Global Variable），那麼這種存在於函式內的變數，則稱為「區域變數」（Local Variable）。</p>
        <p><br></p>
        <p>在前一章節變數最末段曾提到幾種不好的宣告方式，現在我們已經了解全域作用域與函式作用域的差別，如果我們在函式內直接設定變數名稱並賦值，而不使用 <em>var</em> 關鍵字作宣告，這種寫法會對 JavaScript 執行產生什麼樣的後果？以下我們透過範例來作驗證，首先是全域、函式內都正常宣告變數的情況：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">// 全域變數宣告
var dog = "阿比";

// 區域變數宣告
function Animal(){
    var dog = "咪咪";
    console.log(dog);    // 咪咪
};
Animal();

// 全域呼叫變數打印結果
console.log(dog);    // 阿比</code></pre>
        </div>
        <p>先不講「盡量避免宣告重複名稱的變數」這件事，假設全域與函式內都宣告了相同名稱的變數，且也各自賦予不同的值，透過範例可以得知，函式內宣告的 <em>dog</em> 變數的值，不會影響到全域同名的 <em>dog</em> 變數，在全域作用域打印它依然是回傳「阿比」之結果，這就表示函式內宣告的變數，它的值只會存在它所屬的函式範圍內。</p>
        <p>假設現在我們把函式內的 <em>var</em> 關鍵字拿掉，看看會發生什麼事：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">// 全域變數宣告
var dog = "阿比";

// 區域變數宣告
function Animal(){
    dog = "咪咪";
    console.log(dog);    // 咪咪
};
Animal();

// 全域呼叫變數打印結果
console.log(dog);    // 咪咪</code></pre>
        </div>
        <p>會發現最後全域打印 <em>dog</em>時，函式內的 <em>dog</em> 變數值「咪咪」竟然取代了全域 <em>dog</em> 變數原先的值「阿比」，這就是先前說的「變數汙染」現象。至於為什麼會這樣？其實這和 JavaScript 的 Hoisting（提升）機制有關，關於 Hoisting 機制三言兩語很難解釋得清，不過簡單來說因為函式內沒有宣告 <em>dog</em> 這個變數，JavaScript 遂繼續向上層尋找，然後發現了全域作用域層級有個符合相同名稱的變數，故 JavaScript 不會將函式內的 <em>dog</em> 當作新的變數，而是直接「引用」全域變數 <em>dog</em>，致使函式內的賦值（咪咪）順理成章覆蓋了原先的賦值（阿比）。</p>
        <p><br></p>
        <h4>區塊作用域（Block Level Scope）：</h4>
        <p>區塊作用域的誕生是伴隨 ES6 新生的 <em>let</em> 與 <em>const</em> 這兩個變數宣告方式，它是一種範圍更小的作用域，只會存在於 <em>{ }</em> 範圍中，最常出現在函式作用域裡的 <em>{ }</em>，像是 <em>if</em> 或 <em>for</em> 之類的方法。</p>
        <p>舉例來說，用以往 <em>var</em> 在函式內的 <em>if</em> 語句進行變數宣告：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">// 區域變數宣告
function Animal() {
    if (true) {
        var dog = "阿比";
    }
    console.log(dog);   // 阿比
}

Animal();</code></pre>
        </div>
        <p>以往的 <em>var</em> 即便放在函式內宣告，經過 JavaScript Hoisting 提升機制也會成為全域變數，因此函式作用域內也可以正常調用，但如果將 <em>var</em> 抽換為 <em>let</em>（或 <em>const</em>）：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">// 區域變數宣告
function Animal() {
    if (true) {
        let dog = "阿比";
    }
    console.log(dog);   // Uncaught ReferenceError: dog is not defined
}

Animal();</code></pre>
        </div>
        <p>透過範例可發現到在區塊作用域裡經由 <em>let</em> 或 <em>const</em> 宣告的變數，不管是變數還是其賦值都只能在該作用域範圍內進行存取，即使同屬在同一函式作用域範圍內的程式，也無法取得區塊作用域裡的變數，這就是它們與傳統 <em>var</em> 的不同點之一，即各自存活的作用域範圍不同。<em>let</em> 或 <em>const</em> 的出現令 JavaScript 的宣告變得更加嚴謹，減少變數提升造成的汙染可能。</p>
        <p>有些人或許會認為函式作用域和區塊作用域相似，認為它們都侷限在 <em>{ }</em> 範圍裡，確實，就某方面來說這兩個作用域有一些相似之處，但也存在一些差異。</p>
        <h5>相似處：</h5>
        <p>1. 變數的可見性：<br>無論是函式作用域還是區塊作用域，它們都用於限制變數的可見性，確保變數只在特定範圍內可見。</p>
        <p>2. 變數名稱衝突：<br>無論是函式作用域還是區塊作用域，它們都有助於減少變數名稱衝突的機會。在不同作用域範圍可以使用相同名稱的變數，而它們之間不會互相干擾。當然非刻意為之的情況下，盡量還是避免重複名稱的命名宣告比較穩妥。</p>
        <h5>差異處：</h5>
        <p>1. 作用範圍：<br>函式作用域限制變數的作用範圍僅在函式內部，而區塊作用域限制變數的作用範圍可以是在 <em>if</em> 語句、<em>for</em> 迴圈、<em>while</em> 迴圈等區塊中。</p>
        <p>2. ES6 的引入：函式作用域是 ES6 版本之前的主要作用域概念，而區塊作用域則是 ES6 引入的新概念，主要是透過 <em>let</em> 與 <em>const</em> 關鍵字實現。</p>
        <p>3. 提升機制：<br>若在函式作用域內使用 <em>var</em> 關鍵字宣告變數，該變數會受到提升機制影響，提升成全域變數（但變數提升僅提升變數宣告的名稱本身，不包含賦值）；而區塊作用域中經由 <em>let</em>、<em>const</em> 宣告的變數不會被提升。</p>
        <p><br></p>
        <h3>var、let、const 作用域的差異？</h3>
        <p><em>let</em>、<em>const</em> 這兩者和 <em>var</em> 的差別透過前面內容的介紹大概都有個底了，那麼它們兩個之間具體又有什麼差異呢？其實這兩者無論在作用域範圍、變數提升，還是面對重複宣告情況下的表現都如出一轍，而最主要的差異在於 <em>const</em> 必須在宣告的同時就要賦值給它，這個值通稱為「常數」（Constant），否則編譯時就會直接報錯。</p>
        <p>例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">let dog;
console.log(dog);    // undefined</code></pre>
        </div>
        <p>如果 <em>let</em> 僅宣告變數名稱而沒有賦值，其實這個變數也依然是有被建立成功的，只是這種情況下去取用它的值將會是 <em>undefined</em>。但如果用相同程式邏輯改用 <em>const</em> 去做宣告，得到的回傳結果將會是：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">const dog;
console.log(dog);    // Missing initializer in const declaration</code></pre>
        </div>
        <blockquote class="is-warning">
            <p><em>const</em> 宣告中缺少初始化程序。</p>
        </blockquote>
        <p>由此可見，<em>const</em> 在宣告的同時，就必須賦予常數值給它，所謂的常數，可以是任何合法的運算子，諸如算術、字串，或者函式陳述式...等類。光是這樣還不夠（嚴謹），一旦 <em>const</em> 的值被宣告，<em>const</em> 會對於它的值建立一個唯獨的參考，假如我們嘗試再給值去修改該變數，將會得到系統回傳的報錯警告。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">const dog = "阿比";
dog = "咪咪";
console.log(dog);    // Uncaught TypeError: Assignment to constant variable.</code></pre>
        </div>
        <p>並不是說透過 <em>const</em> 關鍵字宣告的值不可變更，而是該變數不能再一次指定值（註一）。假如變數的常數值是個物件（Object），那麼該物件的內容還是可以被修改的。我們可以透過以下兩個例子來加深理解，第一個例子是當 <em>const</em> 宣告的常數是陣列的時候：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">const arr = [1, 2, 3];
console.log(arr);    // [1,2,3]

arr.push(4, 5);
console.log(arr);    // [1,2,3,4,5]</code></pre>
        </div>
        <p>第二個例子則是物件：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">const dog = {
    name: "阿比"
};
console.log(dog);    // {"name": "阿比"}

dog.years = 3;
console.log(dog);    // {"name": "阿比", "years": 3}</code></pre>
        </div>
        <p>或許你現在還不認識陣列或物件的觀念，但沒關係，舉這些例子其實可以一言以蔽之這兩個變數關鍵字之間的關係──「<em>const</em> 可視為規矩更嚴謹的 <em>let</em>」</p>


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