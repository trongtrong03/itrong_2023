<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="19" fileType="learnJs" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、什麼是運算式？</a></li>
            <li><a href="#act2">二、什麼是運算子？</a></li>
            <li><a href="#act3">三、運算子的優先級</a></li>
            <li><a href="#act4">四、XXXX</a></li>
            <li><a href="#act5">五、XXXX</a></li>
            <li><a href="#act6">六、總結</a></li>
            <li><a href="#act7">七、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <p>我們在寫 JavaScript 的時候往往會用到大量的函式與方法，但佔據整個程式碼比例的通常不是這些語法，而是各種我們對於想要實現指定需求效果的陳述，比如交代程式在什麼情況下要做什麼事情，或是向它索取特定的結果等等，在 JavaScript 語言裡，陳述需求、表達指令的語法大抵來說可分成兩大類：一是「敘述句」（Statement），二是「運算式」（Expression），而運算式的構成裡通常會包含一些運算符號，我們稱之為「運算子」（Operator），其中，運算式與運算子正是本篇文章要聚焦的主題。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、什麼是運算式？</h2>
        <p>運算式原文名稱為 Expression，也可稱為表達式。在前言已有稍微提到 JavaScript 的程式陳述方式概略可分成敘述句（Statement）與運算式兩種語法，敘述句主要用來執行指定動作或操作，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">if (height > 0) {
    console.log("阿比蹦蹦跳");
}</code></pre>
        </div>
        <p>敘述句通常有這些特徵：</p>
        <ul>
            <li>敘述句主要用來執行特定動作或操作的完整指令。</li>
            <li>敘述句的句尾通常以「分號」<em>;</em>作結。</li>
            <li>敘述句不一定都會回傳值。</li>
        </ul>
        <p>有關敘述句就到這裡說個大概，詳細內容會作為主題在後續文章專門介紹，我們接著回頭聚焦運算式的部份。根據定義，運算式指的是任何一段可以取得值的程式碼片段，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var dog = "阿比";</code></pre>
        </div>
        <p>在這個範例中，<em>dog</em> 是變數，<em>阿比</em> 則是值，<em>=</em> 在 JavaScript 裡不相當於數學表達的「等於」，它在這裡是「指定」的概念，表示這個運算式將 <em>阿比</em> 這個值「指定」給 <em>dog</em>，而這個 <em>=</em> 符號就是運算子的一種，名為「指定運算子」。</p>
        <p>運算式統常有這些特徵：</p>
        <ul>
            <li>運算式通常指的是一個計算且返回值的程式碼片段。</li>
            <li>運算式可以是值、變數、運算子的組合，也可以是一個函式調用。</li>
            <li>運算式一般都會返回值。</li>
        </ul>
        <p>雖說兩者是不一樣的概念，不過總的而言，運算式其實也是敘述句的一部份，當敘述句裡面的程式碼包含一個回傳值的片段，那麼該片段便是運算式。舉例：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var dog;    // 沒有指定值，所以只是單純的敘述句
dog = "阿比";    // 有指定值，可視為運算式
var x = "阿比" + "蹦蹦跳";    // 等號左邊敘述變數宣告，右邊賦值，可視為運算式</code></pre>
        </div>
    </div>
    <div class="text-block" id="act2">
        <h2>二、什麼是運算子？</h2>
        <p>運算式構成要素基本上都ㄧ定會包含運算子（operators），這是因為運算式的操作必須依賴它們才能進行。JavaScript 提供了大量的運算子提供運算式進行計算，不同種類的運算子，理所當然產生不同類型的運算式，例如算術運算式、比較運算式...等等。它們幫助程式開發者得以從一或多個值中，產生一個結果值。</p>
        <p>就目前 JavaScript 版本來說，運算子可分為以下這些類型：</p>
        <ul>
            <li>指定運算子（Assign operators）</li>
            <li>比較運算子（Comparison operators）</li>
            <li>算術運算子（Arithmetic operators）</li>
            <li>位元運算子（Bitwise operator）</li>
            <li>邏輯運算子（Logical operators）</li>
            <li>字串運算子（String operators）</li>
            <li>條件（三元）運算子（Conditional (ternary) operator）</li>
            <li>逗點運算子（Comma operator）</li>
            <li>一元運算子（Unary operators）</li>
            <li>關係運算子（Relational operators）</li>
            <li>分組運算子（Grouping operator）</li>
            <li>new 運算子（new operator）</li>
            <li>展開運算子（Spread syntax）</li>
        </ul>
        <h3>指定運算子（Assign operators）</h3>
        <p>最常見的指定運算子就是 <em>=</em> 符號，用來表示將某個值指定給變數。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var dog = "阿比";</code></pre>
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
        <p><br></p>
        <h3>比較運算子（Comparison operators）</h3>
        <p><br></p>
        <h3>算術運算子（Arithmetic operators）</h3>
        <p>算術運算子（Arithmetic operators）包含基本的加減乘除，以及遞增、遞減等運算方式。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var total = 10 * 3;</code></pre>
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
        <p><br></p>
        <h3>位元運算子（Bitwise operator）</h3>
        <p><br></p>
        <h3>邏輯運算子（Logical operators）</h3>
        <p><br></p>
        <h3>字串運算子（String operators）</h3>
        <p><br></p>
        <h3>條件（三元）運算子（Conditional (ternary) operator）</h3>
        <p><br></p>
        <h3>逗點運算子（Comma operator）</h3>
        <p><br></p>
        <h3>一元運算子（Unary operators）</h3>
        <p><br></p>
        <h3>關係運算子（Relational operators）</h3>
        <p><br></p>
        <h3>分組運算子（Grouping operator）</h3>
        <p><br></p>
        <h3>new 運算子（new operator）</h3>
        <p><br></p>
        <h3>展開運算子（Spread syntax）</h3>
        <p><br></p>
    </div>

    <div class="text-block" id="act6">
        <h2>六、總結</h2>
        <p>回顧本篇文章，精簡總結一下我們從變數身上學到哪些東西：</p>
        <h5>1. XXXX</h5>
        <ul>
            <li>XXXX</li>
        </ul>
        <p><br></p>
        <p>至於本篇文章提到的 JavaScript 常見名詞術語有以下這些，但有些術語所代表的技術或知識已經超過本篇主題的範疇，礙於篇幅因此沒有辦法太深入探討，如有需要可以循著原詞單字順藤摸瓜去搜尋更專業、完整的教學文章：</p>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f1">名詞</div>
                    <div class="f-f1">中譯</div>
                    <div class="f-f3">說明</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">Function</div>
                    <div class="f-f1">函式</div>
                    <div class="f-f3">也有人稱為「函數」，是構成 Javascript 的基本要素之一，它將一系列的敘述句組合起來，以執行一項特定的工作。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">Invoke</div>
                    <div class="f-f1">調用</div>
                    <div class="f-f3">比較像是主張人正在引導程式執行該函式，當我們調用一個函式時，實際上在主動請求該函式執行。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">Callback</div>
                    <div class="f-f1">呼叫 / 回調</div>
                    <div class="f-f3">通常用在將一個函式作為參數傳遞給另一個函式的時候，比較像是站在程式語言的角度來稱呼。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">Hoisting</div>
                    <div class="f-f1">提升</div>
                    <div class="f-f3">「提升」是 JavaScript 中的一個概念行為，指的是在程式碼執行之前，JavaScript 引擎會將變數和函式的聲明提升到它們所在作用域的頂部。這意味著我們可以在宣告之前使用這些變數和函式。</div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-block" id="act7">
        <h2>七、參考資料</h2>
        <dl>
            <dd><a href="https://www.books.com.tw/products/0010744702" target="_blank">《JavaScript & JQuery：網站互動設計程式進化之道》</a></dd>
            <dd><a href="https://hackmd.io/@F8_ZGXr0SHWEX7aKUyrU9w/BJVrhtIbO" target="_blank">Javascript 第三章 運算元和運算子</a></dd>
            <dd><a href="https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_operators" target="_blank">mdn web docs 運算式與運算子</a></dd>
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