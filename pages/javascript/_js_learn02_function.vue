<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="18" fileType="learnJs" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、如何定義函式？</a></li>
            <li><a href="#act2">二、XXX</a></li>
            <li><a href="#act3">三、xxx</a></li>
            <li><a href="#act4">四、xxx</a></li>
            <li><a href="#act5">五、總結</a></li>
            <li><a href="#act6">六、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <blockquote>
            <p>A JavaScript function is a block of code designed to perform a particular task.</p>
            <p><br></p>
            <p>A JavaScript function is executed when "something" invokes it (calls it).</p>
        </blockquote>
        <p>以上原文引述 <a href="https://www.w3schools.com/js/js_functions.asp" target="_blank">w3schools</a> 對 JavaScript「函式」一詞的描述，意指「函式是一段被設計用來執行特定任務的程式碼區塊，當『某事』調用（invokes）它時，該函式就會被執行」。</p>
        <p>若要用日常生活的例子來形容，假設今天我們養了一條名字叫阿比的狗，每天都需要執行餵食、帶出去散步、幫忙鏟屎、擼毛...等事情，我們興許會用「照顧阿比」來統納這一連串的動作。站在 JavaScript 角度來看，「照顧阿比」這整個過程就可以稱為一個函式，其函式名稱就叫做「照顧阿比」，而餵食、散步、鏟屎等例行事項就是函式裡面要執行的程式，當我們安排每天行程表（某事）的時候，或是當別人問我們每天都在做些什麼事情（某事）的時候，便可以直接用「照顧阿比」來簡述（調用），而不用鉅細靡遺地把所有細項都寫出來，這就是函式的目的，也是它的好處──簡化程式碼，而且也能重複被調用。</p>
        <p>當然函式也沒有這麼單純，從定義到方法，還有傳入的參數、調用...等等，有很多東西值得深入探討，本篇文章主題將著重於函式各項知識及運用的詳細記錄。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、如何定義函式？</h2>
        <p>部份聰明的人或許已經從前言列舉的「照顧阿比」範例中推敲出 JavaScript 為什麼會需要函式來處理程式腳本，不過在這個章節還是詳細說明一下。在哲宇老師的 JavaScript 教程曾經說過，程式開發者寫程式時應該避免以下三件事情：「重複相同程式碼」、「無規劃 / 命名陳述目的」、「無法重複使用」。這些不好的撰寫方式都會導致程式執行效率不佳或帶來維護不易的麻煩，舉例來說：</p>
        <figure>
            <img src="/images/learn/js/learn-function-1.jpg">
        </figure>
        <p>上方的範例示意圖裡存在三塊相同的重複程式碼（黑色方塊），當有一天需要針對某部份（紅色方塊）進行修改時，就得重複三次相同的作業流程。如果只有寥寥數行可能不覺得有什麼，假如修改範圍多達數十行，又或者其重複使用的地方很多，勢必需要投注大量的時間成本在同樣的事情上。然而，如果我們能將這些重複的程式碼「獨立」出來，使其可以被統一集中管理，並將它模組化，那麼就可以避免重複編寫一樣的程式，同時又可以在不同的程式碼功能重複呼叫它，大幅度增加程式的效能與易讀性。實現此一理想的方法，JavaScript 稱之為「函式」。</p>
        <figure>
            <img src="/images/learn/js/learn-function-2.jpg">
            <figcaption>利用函式來處理重複使用的程式碼。</figcaption>
        </figure>
        <p>了解函式在 JavaScript 扮演的角色與好處，我們該如何定義函式？其實 JavaScript 提供好幾種函式定義的方式，大體而言有三種：</p>
        <ul>
            <li>Function Declaration</li>
            <li>Function Constructor</li>
            <li>Function Expression</li>
        </ul>
        <p><br></p>
        <h3>函式宣告式（Function Declaration）：</h3>
        <p>範例：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">function myAnimal() {
    console.log("阿比是一隻狗");
}</code></pre>
        </div>
        <p>函式宣告式算是最常見的函式定義方式，其結構由關鍵字 <em>function</em> 與自定義的函式名稱（myAnimal）組成，名稱後方須加上小括號 <em>()</em>，小括號的作用是用來存放我們指定給函式的「參數」（至於參數是什麼留到後面再提），即使我們定義的函式沒有要傳入參數，小括號也依然是 JavaScript 定義函式規則的一部分，不能被省略。而像這類有定義名稱的函式，通常也被稱為「具名函式」（Named Function）。</p>
        <p>負責執行工作的程式敘述句則放置於程式區段內，也就是由大括號 <em>{ }</em> 包含的範圍。如此一來，一個可以被重複使用的函式便誕生了。宣告完函式後，我們只要直接調用函式名稱就能執行函式大括號內的所有敘述句。如下：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">// 宣告函式
function myAnimal() {
    console.log("阿比是一隻狗");
}

// 呼叫函式
myAnimal();</code></pre>
        </div>
        <p>在上一篇講述變數的文章裡曾提到「提升」（Hoisting）概念，除了變數，函式也同樣會被提升，因此呼叫函式的 <em>myAnimal();</em> 若要寫在定義之前也是可以的。</p>
        <p><br></p>
        <blockquote class="is-question">
            <p>既然有具名函式，那是否也存在不具名函式？</p>
        </blockquote>
        <p>這個問題的答案為：是。所謂的不具名，就是定義函式的時候，僅宣告 <em>function</em> 關鍵字，而沒有給該函式名稱，只是鮮少人會用「不具名函式」來稱呼，大多數人會將這類沒有命名的函式叫做「匿名函式」（Anonymous Function）。以下舉一個匿名函式的寫法範例：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">function() {
    console.log("阿比是一隻狗");
}</code></pre>
        </div>
        <p>如果此刻你正在練習，你應該會發現如果照著範例刻程式然後丟到瀏覽器測試，開發者模式會回吐 <b>Uncaught SyntaxError: Function statements require a function name.</b> 的錯誤警告，它的意思是該函式的程式敘述句需要一個函式名稱，這是因為匿名函式通常不能單獨運行，主要都是在變數或其他函式之中進行定義。</p>
        <p>匿名函式的用途相當廣泛，譬如要創建「閉包」（Closure）就會需要它，這是基於匿名函式作用域近似區域變數作用域範圍的特性，匿名函式一旦執行完畢，儲存在記憶體裡的變數就會立即被釋放（銷毀），而不會像全域變數那樣繼續佔據記憶體空間，匿名函式一方面可節省記憶體空間，又可避免函式全域命名衝突的問題。</p>
        <p>關於匿名函式與閉包的觀念就先暫時打住，後面章節會再單獨探討它。</p>
        <p><br></p>
        <h3>函式表達式（Function Expression）：</h3>
        <p>也有人稱為「函式陳述式」，它的結構和函式宣告式相仿，主要差別在於這個方式是用變數來宣告一個函式。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var dog = function() {
    console.log("阿比是一隻狗");
}

dog();    // 呼叫函式</code></pre>
        </div>
        <p>透過變數宣告的函式，也是可以再另外給該函式進行命名，使其成為具名函式，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var dog = function myAnimal() {
    console.log("阿比是一隻狗");
}</code></pre>
        </div>
        <p>這種結構我們稱為「具名函式表達式」（Named Function Expression），這種函式的好處是我們可以在該函式的內部調用該函式，或許你會對這句話產生存疑，在函式內又呼叫該函式？那豈不是無限迴圈了嗎？沒錯，具名函式表達式的確在迴圈程式需求中有著相當大的作用，因為迴圈函式需要在函式內部多次調用自己以解決問題。例如使用具名函式表達式來實現計算一個正整數的階乘的迴圈函式：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var factorial = function calculateFactorial(n) {
    // 基本條件：當 n 為 0 或 1 時，階乘為 1
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // 迴圈條件：n 的階乘等於 n 乘以 (n - 1) 的階乘
        return n * calculateFactorial(n - 1);
    }
};

// 使用迴圈計算 5 的階乘
var result = factorial(5);    // 120</code></pre>
        </div>
        <p>以下逐步拆解它的迴圈進程：</p>
        <ol>
            <li>
                呼叫 factorial(5)：
                <ul>
                    <li>n 等於 5，不符合基本條件，所以進入迴圈條件</li>
                    <li>calculateFactorial(5) 返回 5 * calculateFactorial(4)</li>
                </ul>
            </li>
            <li>
                遞迴調用 calculateFactorial(4)：
                <ul>
                    <li>n 等於 4，不符合基本條件，所以進入迴圈條件</li>
                    <li>calculateFactorial(4) 返回 4 * calculateFactorial(3)</li>
                </ul>
            </li>
            <li>
                遞迴調用 calculateFactorial(3)：
                <ul>
                    <li>n 等於 3，不符合基本條件，所以進入迴圈條件</li>
                    <li>calculateFactorial(3) 返回 3 * calculateFactorial(2)</li>
                </ul>
            </li>
            <li>
                遞迴調用 calculateFactorial(2)：
                <ul>
                    <li>n 等於 2，不符合基本條件，所以進入迴圈條件</li>
                    <li>calculateFactorial(2) 返回 2 * calculateFactorial(1)</li>
                </ul>
            </li>
            <li>
                遞迴調用 calculateFactorial(1)：
                <ul>
                    <li>n 等於 1，符合基本條件，返回 1</li>
                </ul>
            </li>
            <li>
                返回 calculateFactorial(2)：
                <ul>
                    <li>calculateFactorial(2) 返回 2 * 1，即 2。</li>
                </ul>
            </li>
            <li>
                返回 calculateFactorial(3)：
                <ul>
                    <li>calculateFactorial(3) 返回 3 * 2，即 6。</li>
                </ul>
            </li>
            <li>
                返回 calculateFactorial(4)：
                <ul>
                    <li>calculateFactorial(4) 返回 4 * 6，即 24。</li>
                </ul>
            </li>
            <li>
                返回 calculateFactorial(5)：
                <ul>
                    <li>calculateFactorial(5) 返回 5 * 24，即 120。</li>
                </ul>
            </li>
        </ol>
        <p><br></p>
        <p>回到上個範例，我們用變數「dog」宣告了一個名稱為「myAnimal」的函式，試問：</p>
        <ol>
            <li>這個函式要叫做 dog 還是 myAnimal？</li>
            <li>如果要透過變數名稱呼叫函式，為什麼還要為函式命名？</li>
        </ol>
        <p>關於第一個問題，此函式的名稱依然叫做「myAnimal」，只是在函式之外我們必須通過「dog」才能呼叫 / 存取到它。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var dog = function myAnimal() {
    console.log("阿比是一隻狗");
}

dog();    // 阿比是一隻狗</code></pre>
        </div>
        <p>至於第二個問題，匿名函式或許能解決你的疑問。</p>
        <p><br></p>
        <h3>函式建構式（Function Constructor）：</h3>
        <p>從結論上來說，函式建構式這種寫法不常被使用到，大部份人定義函式的時候仍以函式宣告式或表達式為大宗，如果要說什麼情況比較會需要使用它，那主要大概是基於「動態性」或「彈性」的考量。動態性指的是有「動態生成函式」及「動態生成正規表達式（Regular Expression，regex）」的需求，例如允許使用者自訂程式腳本或模板引擎；「彈性」則是指「以字串形式接收函式程式碼」，譬如我們需要從外部來源（例如：使用者輸入的內容、API 響應...）接收程式碼時，函式建構式允許我們將程式碼以字串形式接收並執行它。</p>
        <p>函式建構式的結構如下例：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var addNumber = new Function('a', 'b', 'return a + b');

var result = addNumber(5, 10);    // 15</code></pre>
        </div>
        <p>這個例子中，「addNumber」是一個使用函式構造式動態創建的函式，它接受「a」、「b」這兩個參數，然後返回它們的總和。</p>
        <p>然而，同樣的程式功能，函式宣告式和函式表達式同樣也能做到：</p>
        <p>函式宣告式：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">function addNumber(a, b) {
    return a + b;
}

var result = addNumber(5, 10);    // 15</code></pre>
        </div>
        <p>函式表達式：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var addNumber = function(a, b) {
    return a + b;
};

var result = addNumber(5, 10);    // 15</code></pre>
        </div>
        <p>在程式閱讀上明顯比函式建構式來的容易理解，所以多數人在面對類似程式需求的時候，比起建構式更傾向用另外兩種定義方式來撰寫程式。此外，雖說「彈性」是函式建構式的蜜糖，卻也是毒藥。在允許使用者輸入資料的情況下，函式建構式允許「以字串形式接收函式程式碼」，意味著有心人士可以藉此輸入帶有惡意的程式碼字串，進而引發安全性問題。</p>


        <p><br></p>
        <h3>5. 立即函式（Immediately Invoked Function Expression，IIFE）：</h3>
        <p><br></p>
        <h3>6. 箭頭函式（Arrow Function）：</h3>

    </div>

    <div class="text-block" id="act5">
        <h2>五、總結</h2>
        <p>回顧本篇文章，精簡總結一下我們從變數身上學到哪些東西：</p>
        <h5>1. xxx</h5>
        <ul>
            <li>xxxx。</li>
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
            </div>
        </div>
    </div>
    <div class="text-block" id="act6">
        <h2>六、參考資料</h2>
        <dl>
            <dd><a href="https://www.books.com.tw/products/0010744702" target="_blank">《JavaScript & JQuery：網站互動設計程式進化之道》</a></dd>
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