<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="3" fileType="learnJs" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、運算式</a></li>
            <li><a href="#act2">二、運算子</a></li>
            <li><a href="#act3">三、指定運算子</a></li>
            <li><a href="#act4">四、算術運算子</a></li>
            <li><a href="#act5">五、字串運算子</a></li>
            <li><a href="#act6">六、比較運算子</a></li>
            <li><a href="#act7">七、邏輯運算子</a></li>
            <li><a href="#act8">八、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <figure>
            <img src="/images/learn/js/learn-var-1.jpg">
            <figcaption>JavaScript 的思維流程。</figcaption>
        </figure>
        <p>上一篇<a href="js_learn_2.html">〈敘述句〉</a>的文章中，我們於條件式或迴圈頻繁使用了變數指定或數字比較的陳述，像是 <em>a = 0</em>、<em>a > b</em> 等。這些敘述在 JavaScript 世界裡稱之為「運算式」（expressions），而 <em>=</em>、<em>></em> 這些則叫做「運算子」（operators），本篇的重點將來談談運算式，以及介紹運算子的種類。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、運算式</h2>
        <p>說穿了，程式是一連串運算式的組合。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">a = 20;</code></pre>
        </div>
        <p>這是一句常見的運算式（expressions），其基本由至少兩個的「運算元」（<em>a</em>、<em>20</em>）與「運算子」（<em>=</em>）構成。</p>
        <figure>
            <img src="/images/learn/js/learn-expressions-1.jpg">
            <figcaption>運算式組成結構示意。</figcaption>
        </figure>
        <p>運算式可以產生一個單一值，大致可分為兩種類型：</p>
        <ol>
            <li>運算式僅為變數指定一個內容值。</li>
            <li>運算式使用兩或多個資料值，並回傳一個結果值。</li>
        </ol>
        <h3>運算式僅為變數指定一個內容值：</h3>
        <p>即常見的宣告變數值，為了讓變數有其作用，我們會使用 <em>=</em>（指定運算子）來賦予變數一個值。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var name = 'itrong';</code></pre>
        </div>
        <p>在沒有給變數宣告內容值以前，會先給予 <em>undefined</em> 這個特殊的資料型別值，直到被指定內容值以後就會轉為其他型別。像是在範例中，<em>name</em> 的值現在被指定為 <em>itrong</em>（字串）。</p>
        <p><br></p>
        <h3>運算式使用兩或多個資料值，並回傳一個結果值：</h3>
        <p>我們可以對任何數量的資料值執行運算，以決定一個結果值。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var total = 10 * 3;</code></pre>
        </div>
        <p><em>total</em> 的值將會是 <em>10 * 3</em> 運算後的結果，也就是 <em>30</em>，這個值將會儲存到 <em>total</em> 這個變數裡。</p>
    </div>
    <div class="text-block" id="act2">
        <h2>二、運算子</h2>
        <p>運算式的操作必須依賴運算子（operators），JavaScript 提供了大量的運算子提供運算式進行計算，不同種類的運算子，理所當然產生不同類型的運算式，例如算術運算式、比較運算式...等等。它們幫助程式開發者得以從一或多個值中，產生一個結果值。</p>
        <p>以下是運算子的類型：</p>
        <ol>
            <li>指定運算子（Assign operators）</li>
            <li>算術運算子（Arithmetic operators）</li>
            <li>字串運算子（String operators）</li>
            <li>比較運算子（Comparison operators）</li>
            <li>邏輯運算子（Logical operators）</li>
        </ol>
    </div>
    <div class="text-block" id="act3">
        <h2>三、指定運算子</h2>
        <p>最常見的指定運算子就是 <em>=</em> 符號，用來表示將某個值指定給變數。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var name = 'itrong';</code></pre>
        </div>
        <p>除此之外，只要有掛上一個 <em>=</em> 的都可以算是指定運算子的成員之一，詳見如下表：</p>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f0">運算子</div>
                    <div class="f-f1">範例</div>
                    <div class="f-f6">說明</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>=</em></div>
                    <div class="f-f1">x = y</div>
                    <div class="f-f6">將 y 值指定給變數 x</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>+=</em></div>
                    <div class="f-f1">x += y</div>
                    <div class="f-f6">相當於 x = x + y</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>-=</em></div>
                    <div class="f-f1">x -= y</div>
                    <div class="f-f6">相當於 x = x - y</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>*=</em></div>
                    <div class="f-f1">x *= y</div>
                    <div class="f-f6">相當於 x = x * y</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>/=</em></div>
                    <div class="f-f1">x /= y</div>
                    <div class="f-f6">相當於 x = x / y，<em>/</em> 是相除的意思</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>%=</em></div>
                    <div class="f-f1">x %= y</div>
                    <div class="f-f6">相當於 x = x % y，意即將 x 除以 y 後的餘數指定給 x</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>**=</em></div>
                    <div class="f-f1">x **= y</div>
                    <div class="f-f6">相當於 x = x ** y，意即將 x 的 y 次方值指定給 x</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>&lt;&lt;=</em></div>
                    <div class="f-f1">x &lt;&lt;= y</div>
                    <div class="f-f6">相當於 x = x &lt;&lt;= y，意即將 x 所有位元左移 y 位，右邊的位元補入 0 後的值指定回給 x</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>>>=</em></div>
                    <div class="f-f1">x >>= y</div>
                    <div class="f-f6">相當於 x = x >>= y，意即將 x 所有位元右移 y 位，最左邊的位元 (sign bit) 補入跟原本最左位元一樣值後指定回給 x</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>>>>=</em></div>
                    <div class="f-f1">x >>>= y</div>
                    <div class="f-f6">相當於 x = x >>>= y，和 <em>>>=</em> 一樣，但最左邊的位元補 0</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>&=</em></div>
                    <div class="f-f1">x &= y</div>
                    <div class="f-f6">相當於 x = x & y，意即將 x y 做位元 AND 運算後的值指定回給 x</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>^=</em></div>
                    <div class="f-f1">x ^= y</div>
                    <div class="f-f6">相當於 x = x ^ y，意即將 x y 做位元 XOR 運算後的值指定回給 x</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>|=</em></div>
                    <div class="f-f1">x |= y</div>
                    <div class="f-f6">相當於 x = x | y，意即將 x y 做位元 OR 運算後的值指定回給 x</div>
                </div>
            </div>
        </div>
        <p>透過表格可以看出指定運算子常與其他類型的運算子搭配使用，以達到產生指定結果值予變數之目的。</p>
    </div>
    <div class="text-block" id="act4">
        <h2>四、算術運算子</h2>
        <p>算術運算子（Arithmetic operators）包含基本的加減乘除，以及遞增、遞減等運算方式。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var total = 10 * 3;</code></pre>
        </div>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f0">運算子</div>
                    <div class="f-f6">說明</div>
                    <div class="f-f1">範例</div>
                    <div class="f-f1">結果</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>+</em></div>
                    <div class="f-f6">加法，即兩個數值相加</div>
                    <div class="f-f1">10 + 5</div>
                    <div class="f-f1">15</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>-</em></div>
                    <div class="f-f6">減法，即兩個數值相減</div>
                    <div class="f-f1">10 - 5</div>
                    <div class="f-f1">5</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>*</em></div>
                    <div class="f-f6">乘法，即兩個數值相乘</div>
                    <div class="f-f1">10 * 5</div>
                    <div class="f-f1">50</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>/</em></div>
                    <div class="f-f6">除法，即兩個數值相除</div>
                    <div class="f-f1">10 / 5</div>
                    <div class="f-f1">2</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>++</em></div>
                    <div class="f-f6">將目前的值加 1</div>
                    <div class="f-f1">i = 10; i++;</div>
                    <div class="f-f1">11</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>--</em></div>
                    <div class="f-f6">將目前的值減 1</div>
                    <div class="f-f1">i = 10; i--;</div>
                    <div class="f-f1">9</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>%</em></div>
                    <div class="f-f6">模數，即將兩個數值相除後的餘數。</div>
                    <div class="f-f1">10 % 3</div>
                    <div class="f-f1">1</div>
                </div>
            </div>
        </div>
        <p>我們都知道數學運算有著「先乘除後加減」的鐵律，若要先加減後乘除，則必須用括號將優先計算加減的值包含起來，這一點在程式運算亦同。舉例來說：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var total = 6 + 10 * 3;</code></pre>
        </div>
        <p>得到的結果會是 <em>36</em>，而不是 <em>48</em>。若要先加後乘的話，則必須這樣定義：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var total = (6 + 10) * 3;</code></pre>
        </div>
        <p>如此一來，回傳的結果就會是 <em>48</em>。</p>
    </div>
    <div class="text-block" id="act5">
        <h2>五、字串運算子</h2>
        <p>字串運算子（String operators）只有一種──「加號（<em>+</em>）」，可用於連接運算子兩端的字串資料值。寫程式的我們經常需要連接兩個以上的字串，以建立一個新的字串，這個連接的程序稱為「字串連結（concatenation）」。譬如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var firstName = 'Trong ';
var lastName = 'Chen';
var fullName = firstName + lastName;</code></pre>
        </div>
        <p>我們把人的姓氏跟名字分開儲存於變數使用，但可能有時候會需要將它們結合，以顯示完整的姓名，透過字串運算子便可以實現我們的需要，像上面這個範例，最後 <em>fullName</em> 得出的結果為 <em>Trong Chen</em>。</p>
        <blockquote>
            <p>數值資料型別與字串資料型別是可以混合使用的，但是不同的表示方法會有不同的結果。</p>
        </blockquote>
        <p><br></p>
        <h3>1. 數值加上引號：</h3>
        <p>若在數值兩邊加上引號，它將成為字串資料型別，而不再是數值資料型別。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var number1 = '10';
var number2 = '99';
var final = number1 + number2;</code></pre>
        </div>
        <p>最後 <em>final</em> 輸出的結果會是 <em>1099</em>，而不是兩數值相加後的 <em>109</em>。</p>
        <p><br></p>
        <h3>2. 數值與字串相加：</h3>
        <p>若將純數字的變數與字串變數相加，數值則會變成字串的一部分。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var number = 10;
var name = 'itrong';
var final = number + name;</code></pre>
        </div>
        <p><em>final</em> 輸出的值為 <em>10itrong</em>。</p>
        <p><br></p>
        <h3>3. 對字串資料作數學運算：</h3>
        <p>因為字串不是數字，若給它們執行算術運算，只會得到 <em>NaN</em>的結果。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var number = '3';
var name = 'itrong';
var final = number * name;</code></pre>
        </div>
        <div class="text-codepen">
            <p data-height="360" data-theme-id="0" data-slug-hash="OzoQNj" data-default-tab="js,result" data-user="itrong" data-embed-version="2" data-pen-title="JS-learn: example16" class="codepen">See the Pen <a href="https://codepen.io/itrong/pen/OzoQNj/">JS-learn: example16</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>) on <a href="https://codepen.io">CodePen</a>.</p>
        </div>
    </div>
    <div class="text-block" id="act6">
        <h2>六、比較運算子</h2>
        <p>如同它字面意義所述，我們可以將程式碼中的值與預期值進行比較，評估後的結果將會以「布林值」表示，也就是 <em>true</em> 或 <em>false</em>。運算元可以是數值、字串、表達式 (expression) 或物件等。假如比較的運算元型別不同，JavaScript 會嘗試將之轉型成相同型別後再行比較，通常情況下，會先轉成數字資料型別（Number）。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var pass = 60;
var score = 87;
var hasPassed = score >= pass;</code></pre>
        </div>
        <div class="text-codepen">
            <p data-height="360" data-theme-id="0" data-slug-hash="jYebKO" data-default-tab="js,result" data-user="itrong" data-embed-version="2" data-pen-title="JS-learn: example17" class="codepen">See the Pen <a href="https://codepen.io/itrong/pen/jYebKO/">JS-learn: example17</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>) on <a href="https://codepen.io">CodePen</a>.</p>
        </div>
        <p><em>score</em> 值（<em>87</em>）大於 <em>pass</em> 值（<em>60</em>），故回傳的結果為 <em>true</em>。</p>
        <p>前面有提到，運算元不一定要是單一值或是變數名稱，它也可以是一個運算式，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">((num1 + num2) > (num3 + num4));</code></pre>
        </div>
        <div class="text-codepen">
            <p data-height="360" data-theme-id="0" data-slug-hash="EodPRe" data-default-tab="js,result" data-user="itrong" data-embed-version="2" data-pen-title="JS-learn: example18" class="codepen">See the Pen <a href="https://codepen.io/itrong/pen/EodPRe/">JS-learn: example18</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>) on <a href="https://codepen.io">CodePen</a>.</p>
        </div>
        <p><br></p>
        <p>接著來看看比較運算子的字符有哪些：</p>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f0">運算子</div>
                    <div class="f-f6">說明</div>
                    <div class="f-f2">範例</div>
                    <div class="f-f1">結果</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>==</em></div>
                    <div class="f-f6">等於，比較兩個值（數字、字串、布林值）並確認是否相同</div>
                    <div class="f-f2">'123' == '123'<br>'123' == '1234'<br>'123' == 123</div>
                    <div class="f-f1">true<br>false<br>true</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>===</em></div>
                    <div class="f-f6">嚴格等於，比較兩個值（數字、字串、布林值）並確認資料型別與值皆相同</div>
                    <div class="f-f2">'123' === 123<br>'123' === '123'</div>
                    <div class="f-f1">false<br>true</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>!=</em></div>
                    <div class="f-f6">不等於，比較兩個值（數字、字串、布林值）並確認是否不相同</div>
                    <div class="f-f2">'123' != '123'<br>123 != '123'<br>'123' != '1234'<br></div>
                    <div class="f-f1">false<br>false<br>true</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>!==</em></div>
                    <div class="f-f6">嚴格不等於，比較兩個值（數字、字串、布林值）並確認資料型別與值皆不相同</div>
                    <div class="f-f2">'123' !== 123<br>'123' !== '123'</div>
                    <div class="f-f1">true<br>false</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>></em></div>
                    <div class="f-f6">大於，檢視左邊的數字是否大於右邊的數字</div>
                    <div class="f-f2">5 > 3<br>'5' > 3<br>3 > 5</div>
                    <div class="f-f1">true<br>true<br>false</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>&lt;</em></div>
                    <div class="f-f6">小於，檢視左邊的數字是否小於右邊的數字</div>
                    <div class="f-f2">5 &lt;3<br>'5' &lt; 3<br>3 &lt; 5</div>
                    <div class="f-f1">false<br>false<br>true</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>>=</em></div>
                    <div class="f-f6">大於等於，檢視左邊的數字是否大於「或」等於右邊的數字</div>
                    <div class="f-f2">5 >= 3<br>3 >= 5<br>3 >= 3</div>
                    <div class="f-f1">true<br>false<br>true</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>&lt;=</em></div>
                    <div class="f-f6">小於等於，檢視左邊的數字是否小於「或」等於右邊的數字</div>
                    <div class="f-f2">5 &lt;= 3<br>3 &lt;= 5<br>3 &lt;= 3</div>
                    <div class="f-f1">false<br>true<br>true</div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-block" id="act7">
        <h2>七、邏輯運算子</h2>
        <p>比較運算子通常回傳 <em>true</em> 或 <em>false</em> 的單一結果值，邏輯運算子則可以針對多個比較運算子產生的結果值，再進行邏輯判斷。以下是邏輯運算子的常見運用方法之一的範例：</p>
        <figure>
            <img src="/images/learn/js/learn-expressions-2.jpg">
            <figcaption>邏輯運算子運算式組成結構範例。</figcaption>
        </figure>
        <p>這個結構包含三個運算式，每一個均會產生 <em>true</em> 或 <em>false</em> 的結果值，「運算式1」的結果為 <em>false</em>，而「運算式2」的結果為 <em>true</em>，「運算式3」則使用了一個邏輯運算子「<em>&&</em>」，指的是「AND」邏輯運算子，用來檢查運算式1和運算式2的結果是否均為 <em>true</em> 值，但因為運算式1的結果為 <em>false</em>，故最後運算式3輸出的結果為 <em>false</em>。</p>
        <div class="text-codepen">
            <p data-height="360" data-theme-id="0" data-slug-hash="ZvqpdR" data-default-tab="js,result" data-user="itrong" data-embed-version="2" data-pen-title="JS-learn: example19" class="codepen">See the Pen <a href="https://codepen.io/itrong/pen/ZvqpdR/">JS-learn: example19</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>) on <a href="https://codepen.io">CodePen</a>.</p>
        </div>
        <p><br></p>
        <p>除了 <em>&&</em> 之外，邏輯運算子尚有 <em>||</em>、<em>!</em> 這兩個字符，以下透過表格來介紹之：</p>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f0">運算子</div>
                    <div class="f-f6">說明</div>
                    <div class="f-f2">範例</div>
                    <div class="f-f1">結果</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>&&</em></div>
                    <div class="f-f6">表示 AND，兩邊運算式評估必須均為 true，輸出結果才會為 true，其餘皆 false。<br>true && true => true<br>true && false => false<br>false && true => false<br>false && false => false</div>
                    <div class="f-f2">((6 > 5) && (3 >= 3))<br>((5 &lt; 2) && (3 >= 2))</div>
                    <div class="f-f1">true<br>false</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>||</em></div>
                    <div class="f-f6">表示 OR，只要任一運算式評估為 true，輸出結果就是 true，只有兩邊運算式都是 false 的情況，輸出結果才會是 false。<br>true && true => true<br>true && false => true<br>false && true => true<br>false && false => false</div>
                    <div class="f-f2">((6 > 5) && (3 >= 3))<br>((5 &lt; 2) && (3 >= 2))<br>((5 &lt; 2) && (3 &lt; 2))</div>
                    <div class="f-f1">true<br>true<br>false</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>!</em></div>
                    <div class="f-f6">表示 NOT，將運算式的布林值轉換為相反值<br>!true => false<br>!false => true</div>
                    <div class="f-f2">!(2 &lt; 1)</div>
                    <div class="f-f1">true</div>
                </div>
            </div>
        </div>
        <p>此外值得一提的是，邏輯運算子是由左至右執行評估，如果第一個運算式條件已可提供足夠資訊取得整體運算式的答案，那麼 JavaScript 就不會繼續評估第二個條件。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">(5 &lt; 2) && (3 >= 2);</code></pre>
        </div>
        <p>第一個條件 <em>(5 &lt; 2)</em> 經評估結果為 <em>false</em>，已可確定 AND 邏輯運算子的結果為 <em>false</em>，那麼就不會再去評估第二個條件了。</p>
        <p><br></p>
        <p>以上就是有關運算式和運算子的基本介紹了，其實除了上列運算子的分類外，運算子亦可以以一元（unary）、二元（binary）、三元（ternary）運算子區分，這部分留待日後再另行撰文介紹。</p>
    </div>
    <div class="text-block" id="act8">
        <h2>八、參考資料</h2>
        <dl>
            <dd><a href="https://www.books.com.tw/products/0010744702" target="_blank">《JavaScript & JQuery：網站互動設計程式進化之道》</a></dd>
            <dd><a href="http://www.kangting.tw/2013/11/javascript-4.html" target="_blank">JavaScript 快速入門（4/10）－ 運算子</a></dd>
            <dd><a href="https://www.fooish.com/javascript/operator.html" target="_blank">JavaScript 運算子 (Operators)</a></dd>
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