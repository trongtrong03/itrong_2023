<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="1" fileType="learnJs" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、何謂變數</a></li>
            <li><a href="#act2">二、宣告變數</a></li>
            <li><a href="#act3">三、變數的資料型別</a></li>
            <li><a href="#act4">四、變數的命名規則</a></li>
            <li><a href="#act5">五、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <p>本篇學習筆記要記錄的主題是 JavaScript 基礎之一──「變數」（Variables），除了簡略介紹其用途與定義方式外，也會記述它的型別（Types）種類與約定成俗的命名規則。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、何謂變數</h2>
        <p>「JavaScript variables are containers for storing data values.」──在 <a href="https://www.w3schools.com/js/js_variables.asp" target="_blank">w3schools</a> 文件裡是這樣描述變數的，意即 JavaScript 變數是用來儲存資料參數值的容器。舉例來說，小明今天牽著一台油箱可容納 7 公升的摩托車去加油站加油，95 無鉛汽油的價格為每公升 20 元，在油箱一滴油都不剩的前提下，試問小明此行要花多少加油錢？這是很簡單的數學運算，公式為「容升 x 每公升價格 = 總價格」，最終得出 140 元（7 x 20）的結果。然而，雖然摩托車的油箱容升是固定的，油價卻不可能永遠停在每公升 20 元，也許下週大降 0.1 元，下下週小漲 2 元...等，它是一種時不時發生改變的浮動數字，因此，我們就可以稱它是──或者說是使它成為一個變數。在 JavaScript 中，會透過定義變數的方式，快速取得每一次數值變動後的計算結果，最後更新到畫面元素上。上述這段過程就是 JavaScript 的最基本思維了，透過下表我們可以更直觀地理解到 JavaScript 的流程運作方式：</p>
        <figure>
            <img src="/images/learn/js/learn-var-1.jpg">
            <figcaption>JavaScript 的思維流程。</figcaption>
        </figure>
    </div>
    <div class="text-block" id="act2">
        <h2>二、宣告變數</h2>
        <p>使用變數之前，必須先發佈通知，這個動作包含建立變數，以及賦予變數名稱。此一過程我們稱之為「宣告（declare）」，在 JavaScript 世界裡，使用 <em>var</em> 這個詞（variables 的簡寫）來宣告變數。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var price;</code></pre>
        </div>
        <p>範例中我們宣告了一個名為 <em>price</em> 的變數，但此時還沒有指定參數值給它，因此它的內容仍處於 undefined 的型別狀態（未定義）。假如我們指定一組數字給它，例如 <em>20</em>，那麼 <em>price</em> 的回傳值結果將為 <em>20</em>。</p>
        <blockquote>
            <p>※從 ES6（ECMAScript 6） 版本開始，宣告變數的方法多了 <em>let</em> 和 <em>const</em> 兩種方式，它們彼此間具體差異留到以後再提，此處只要稍微留有印象即可。</p>
        </blockquote>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var price = 20;</code></pre>
        </div>
        <p>需要注意的是，單一 <em>=</em> 符號在 JavaScript 並非「等於」的意思，而是表達「指定」的概念，故前面才會說將 <em>20</em> 「指定」給 <em>price</em>。</p>
    </div>
    <div class="text-block" id="act3">
        <h2>三、變數的資料型別</h2>
        <p>我們常常會看見或聽別人說 JavaScript 是「弱型別」的程式語言，什麼是弱型別程式語言？這個問題留到本章節末段再來解釋，我們首先要知道的是，在電腦程式語言世界裡，存在著「型別」這樣的一個系統，用來定義程式語言中的數值或運算式之類型。拿前一章節的 <em>var price;</em> 為例，當沒有將任何數值指定給宣告變數的狀況下，其回傳值結果為 <em>undefined</em>，這個 <em>undefined</em> 就是 JavaScript 其中一種型別。而 <em>var price = 20;</em> 時，回傳的結果為 <em>20</em>，它也是型別的一種，屬於「數值（Number）資料型別」。或許看到這裡會狐疑定義變數數值的型別究竟有什麼用？當然有用，就像我們會用「元」來定論某個商品的售價，而不是以公分或顏色作為交易單位。對程式語言而言，型別象徵變數值的特徵，不同資料類型的型別，必須適才適所地運用在適當的程式邏輯。</p>
        <p>目前 ECMAScript 最新的標準定義了七種資料型別，分別是：</p>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f1">型別</div>
                    <div class="f-f1">說明</div>
                    <div class="f-f3">範例</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">Number</div>
                    <div class="f-f1">數值</div>
                    <div class="f-f3"><em>1</em>、<em>-2000</em>、<em>3.14</em> ...</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">String</div>
                    <div class="f-f1">字串</div>
                    <div class="f-f3"><em>"abc"</em>、<em>'hello world'</em> ...</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">Boolean</div>
                    <div class="f-f1">布林</div>
                    <div class="f-f3"><em>true</em>、<em>false</em></div>
                </div>
                <div class="f-row">
                    <div class="f-f1">Object</div>
                    <div class="f-f1">物件</div>
                    <div class="f-f3"><em>[1, 2, 3]</em>、<em>{ name: 'iTrong' }</em>、<em>function foo(){}</em> ...</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">Null</div>
                    <div class="f-f1">空值</div>
                    <div class="f-f3"></div>
                </div>
                <div class="f-row">
                    <div class="f-f1">Undefined</div>
                    <div class="f-f1">未定義</div>
                    <div class="f-f3"></div>
                </div>
                <div class="f-row">
                    <div class="f-f1">Symbol</div>
                    <div class="f-f1">標誌</div>
                    <div class="f-f3">於 ES6 新定義</div>
                </div>
            </div>
        </div>
        <p>可以在具有 Console 功能的視窗輸入 <em>typeof</em> 指令來查看指定數值的型別是什麼，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">typeof 1000;</code></pre>
        </div>
        <figure>
            <img src="/images/learn/js/learn-var-2.jpg">
            <figcaption>Codepen 的 Console 功能視窗。</figcaption>
        </figure>
        <p>在繼續詳細介紹各資料型別之前，我們仍必須釐清一個重要觀念：「變數本身沒有型別」。有型別之分的是指定給變數的「值」，變數可以在不同的時機點擁有不同型別的值，因此，我們如果使用 <em>typeof</em> 檢測某個變數的型別，檢測的對象是變數儲存的值，而非變數本身。</p>
        <p><br></p>
        <h3>Number：</h3>
        <p>數字資料型別，此型別處理的值應該不難理解，指的就是阿拉伯數字，且它可以是負數或小數。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">typeof 1;    // number
typeof -100;    // number
typeof 3.14159;    // number</code></pre>
        </div>
        <p>有趣的是，在計算機科學中有兩種特別的數據類型：<b>Infinity</b> 與 <b>NaN</b>（Not a Number），分別代表「無窮」與「非數」的概念，假如我們使用 <em>typeof</em> 查看它們，會發現...</p>
        <figure>
            <img src="/images/learn/js/learn-var-3.jpg">
            <figcaption>檢測的結果為「Number」。</figcaption>
        </figure>
        <p>雖然它們看似不是數字，但卻屬於數字型別的成員之一。<b>Infinity</b> 表示數字是超出顯示範圍的無限大或無限小之意思。<b>NaN</b> 則表示它不等於任一數字，且也包含自己在內，意即 <em>NaN = NaN</em> 這樣的判斷式是錯誤（<em>false</em>）的結果。</p>
        <blockquote>
            <p>補充：在《你所不知道的JS導讀，型別與文法》一書裡則宣稱應視 <b>NaN</b> 為一個「無效數字」、「不合格數字」或「壞掉的數字」，會比它本身的名稱「不是一個數字」（Not a Number）來得更加適切。</p>
        </blockquote>
        <p><br></p>
        <h3>String：</h3>
        <p>字串資料型別包含字母和其他字元，其格式由單引號或雙引號構成，引號內的任何字母、數字都將視為字串。要注意的是，引號必須前後一致成對使用，不能前單後雙或前雙後單。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">typeof "iTrong";    // string
typeof '12345678';    // string
typeof "頭好壯壯";    // string</code></pre>
        </div>
        <p>以下是錯誤的定義方式：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">typeof "123456;    // Error!
typeof "iTrong';    // Error!
typeof 'Let's go';    // Error!</code></pre>
        </div>
        <p><br></p>
        <h3>Boolean：</h3>
        <p>布林資料型別的值只有兩個──「<em>true</em>」與「<em>false</em>」，它主要被用來進行條件判斷，達到控制程式推進的功用。我們可以將布林值想像為開關，其狀態不是開啟就是關閉。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">typeof true;    // boolean
typeof false;    // boolean</code></pre>
        </div>
        <p><br></p>
        <h3>Object：</h3>
        <p>物件資料型別...關於「物件」在 JavaScript 的存在感可說是強烈到能被學者單獨出書記述，對於還在新手村打磨裝備的我們來說，尚不適宜過度深入探討，在這個階段，我們只需知道 <em>function</em>（函式）、<em>array</em>（陣列）皆屬於物件的一種就好，另外如果看到用大括號 <em>{}</em> 格式產生的東西，基本上也是物件。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">typeof [];    // object
typeof {};    // object
typeof function(){}     // object</code></pre>
        </div>
        <p><br></p>
        <h3>Null：</h3>
        <p><em>null</em> 代表空值，此型別也只有 <em>null</em> 這一個值。通常是指一個不存在或無效的物件，因此，當我們用 <em>typeof</em> 檢測 <em>null</em> 的型別時，我們會驚人地發現回傳的結果竟然不是 <b>Null</b>，而是 <b>Object</b>。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">typeof null;    // object</code></pre>
        </div>
        <figure>
            <img src="/images/learn/js/learn-var-4.jpg">
        </figure>
        <p><br></p>
        <h3>Undefined：</h3>
        <p>和 <b>Null</b> 型別類似，此型別的值只有 <em>undefined</em>，表示該值為未定義。對比其它多數程式語言而言，JavaScript <em>undefined</em> 更貼近它們的 <em>null</em> 值用法。</p>
        <p>回到 JavaScript，<em>undefined</em> 常常與 <em>null</em> 牽扯在一起，看似貌合的兩人本質上仍有差別，<em>undefined</em> 代表的是「該變數還沒有值，所以不知道是什麼」，但 <em>null</em> 的意思則是「該變數可能曾經有或沒有值，但現在值是空的」。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="360" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="MWKgLpY" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: type--null &amp;amp; undefined">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/MWKgLpY">
            JS-learn: type--null &amp; undefined</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>Symbol：</h3>
        <p>最後是 <b>Symbol</b> 資料型態，它是 JavaScript 到了 ES6 版本才新增的資料型別，用來表示「獨一無二」的值。它的誕生與 <b>Object</b> 有關，現階段解釋起來過於複雜，留待日後與物件一塊兒作筆記。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">typeof Symbol();    // symbol</code></pre>
        </div>
        <p><br></p>
        <p>看完 JavaScript 七大型別的介紹，回到最一開始提到的「弱型別」話題，既然有弱，就代表電腦程式語言中也存在著「強型別」的程式語言。用最簡單直觀的方式來講，強型別語言對於型別檢查上非常嚴格，說一不二，例如 JAVA 就是強型別語言的代表。而弱型別在判定上較為寬鬆，甚至可以允許錯誤，像本系列的主角 JavaScript，以及 PHP 都是弱型別程式語言之一。</p>
        <p>弱型別容錯率高，具體來說是怎樣個容錯法？首先以 PHP 為例：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$a = 100 + "300";
echo $a;    // 400</code></pre>
        </div>
        <p>如果我們預期 <em>a</em> 的值是數字相加的結果，但是在計算過程中，我們卻給了它 <em>"456"</em> 的字串，而非數字，這在強型別語言例如 JAVA，印出 <em>a</em> 的結果將會是錯誤代碼。然而在 PHP 身上，卻會得出 <em>400</em> 的相加答案，這就是弱型別程式語言會容忍一定的錯誤，自動自發地協助轉值型態，「正確」地計算出結果。</p>
        <p>假設同樣的狀況發生在 JavaScript 身上...</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var a = 100 + "300";
console.log(a);     // "100300"</code></pre>
        </div>
        <p><em>a</em> 回傳的結果為 <em>"100300"</em>，為字串相加。儘管它不像 PHP 這麼聰明，會自動將字串轉為數字並作加總計算，可是也不會像 JAVA 如同 NBA 裁判奉行零容忍原則般說一不二，依舊會回傳出個結果給我們。雖然比起強型別，弱型別語言的彈性較大，但不嚴謹招致錯誤轉型判斷的可能也比前者來的高（像 JavaScript 就是很好的例子），畢竟程式語言不是開發者本人，無法準確地判斷開發者給予的數值究竟是不是本人所期望的，因此培養編寫程式時反覆檢查的習慣非常重要。</p>
    </div>
    <div class="text-block" id="act4">
        <h2>四、變數的命名規則</h2>
        <p>英文字母的大小寫在諸多程式語言是不同的字詞，而在 JavaScript 也不例外，除此之外，當我們在宣告變數名稱的時候，也有一些命名規則需要遵循或注意。</p>
        <p><br></p>
        <h3>1. 不能以數字起始：</h3>
        <p>變數名稱的開頭可以使用字母、金額符號（<em>$</em>）、底線（<em>_</em>），但絕對不能使用數字起始。</p>
        <p><br></p>
        <h3>2. 不能使用破折號和句點：</h3>
        <p>整個變數名稱徹頭徹尾都不能使用破折號（<em>-</em>）和句點（<em>.</em>）。</p>
        <p><br></p>
        <h3>3. 不能使用關鍵字與保留字：</h3>
        <p>關鍵字（keywords）指的是「告知解譯器執行指定動作」的特別字詞，例如：<em>var</em>。保留字（reserved words）則是未來版本可能會被採用並成為的關鍵字。</p>
        <p>關鍵字與保留字名單：</p>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f1">名稱</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">abstract</div>
                    <div class="f-f1">boolean</div>
                    <div class="f-f1">break</div>
                    <div class="f-f1">byte</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">case</div>
                    <div class="f-f1">catch</div>
                    <div class="f-f1">char</div>
                    <div class="f-f1">class</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">const</div>
                    <div class="f-f1">continue</div>
                    <div class="f-f1">debugger</div>
                    <div class="f-f1">default</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">delete</div>
                    <div class="f-f1">do</div>
                    <div class="f-f1">double</div>
                    <div class="f-f1">else</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">enum</div>
                    <div class="f-f1">export</div>
                    <div class="f-f1">extends</div>
                    <div class="f-f1">false</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">final</div>
                    <div class="f-f1">finally</div>
                    <div class="f-f1">float</div>
                    <div class="f-f1">for</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">function</div>
                    <div class="f-f1">goto</div>
                    <div class="f-f1">if</div>
                    <div class="f-f1">implements</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">import</div>
                    <div class="f-f1">in</div>
                    <div class="f-f1">instanceof</div>
                    <div class="f-f1">int</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">interface</div>
                    <div class="f-f1">long</div>
                    <div class="f-f1">native</div>
                    <div class="f-f1">new</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">null</div>
                    <div class="f-f1">package</div>
                    <div class="f-f1">private</div>
                    <div class="f-f1">protected</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">public</div>
                    <div class="f-f1">return</div>
                    <div class="f-f1">short</div>
                    <div class="f-f1">static</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">super</div>
                    <div class="f-f1">switch</div>
                    <div class="f-f1">synchronized</div>
                    <div class="f-f1">this</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">throw</div>
                    <div class="f-f1">throws</div>
                    <div class="f-f1">transient</div>
                    <div class="f-f1">true</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">try</div>
                    <div class="f-f1">typeof</div>
                    <div class="f-f1">var</div>
                    <div class="f-f1">void</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">volatile</div>
                    <div class="f-f1">while</div>
                    <div class="f-f1">with</div>
                    <div class="f-f1"></div>
                </div>
            </div>
        </div>
        <p><br></p>
        <h3>4. 注意大小寫的區分：</h3>
        <p>舉例：<em>name</em> 與 <em>Name</em> 是不同的變數名稱，但盡量避免在同一程式碼創造名稱相同但大小寫不同的兩個變數名稱，這很可能造成開發者使用上的混淆。</p>
        <p><br></p>
        <h3>5. 使用已知詞彙來命名：</h3>
        <p>善加使用已知的英文詞彙來描述變數所儲存的資訊，例如：<em>firstName</em>、<em>lastName</em> ...等。</p>
        <p><br></p>
        <h3>6. 連接詞的「駝峰式」命名法：</h3>
        <p>如果變數名稱是由兩個字詞以上組成，除了可以使用底線（<em>_</em>）作字詞間的連接外，也可以使用駝峰式（camal case）命名法，除了第一個字詞之外的後面字詞其字首皆使用大寫，例如：<em>firstName</em>，與 <em>firstname</em> 相較，駝峰式命名顯然容易閱讀地多。</p>
    </div>
    <div class="text-block" id="act5">
        <h2>五、參考資料</h2>
        <dl>
            <dd><a href="https://www.books.com.tw/products/0010744702" target="_blank">《JavaScript & JQuery：網站互動設計程式進化之道》</a></dd>
            <dd><a href="https://cythilya.github.io/2018/10/11/types/" target="_blank">你懂 JavaScript 嗎？#4 型別（Types）</a></dd>
            <dd><a href="https://cythilya.github.io/2018/10/24/object/" target="_blank">你懂 JavaScript 嗎？#17 物件（Object）</a></dd>
            <dd><a href="https://ithelp.ithome.com.tw/articles/10202260" target="_blank">你不可不知的 JavaScript 二三事#Day3：資料型態的夢魘——動態型別加弱型別(2)</a></dd>
            <dd><a href="https://pydoing.blogspot.com/2012/12/JavaScript-Variable-Naming.html" target="_blank">JavaScript 入門指南 - 變數命名規則</a></dd>
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