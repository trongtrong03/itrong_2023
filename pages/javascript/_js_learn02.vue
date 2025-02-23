<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="2" fileType="learnJs" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、基本介紹</a></li>
            <li><a href="#act2">二、條件敘述句</a></li>
            <li><a href="#act3">三、迴圈敘述句</a></li>
            <li><a href="#act4">四、跳躍敘述句</a></li>
            <li><a href="#act5">五、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <figure>
            <img src="/images/learn/js/learn-var-1.jpg">
            <figcaption>JavaScript 的思維流程。</figcaption>
        </figure>
        <p>回顧這張流程圖，前一篇我們已經對變數宣告方式及其型別種類有了初步認識，本篇則聚焦「計算與處理」階段，淺談 JavaScript 基本的程式結構要如何看、怎麼寫，然後接著介紹敘述句的幾種分類。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、基本介紹</h2>
        <p>程式腳本的每一句指令都可以稱為敘述句（Statement），用來驅使電腦執行我們寫下的規則。一句完整的敘述句會以分號 <em>;</em> 作為結尾，向 JavaScript 表示一段可執行運算的程式。根據這個定義，我們回首看看上一篇是如何宣告變數的：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var price = 20;</code></pre>
        </div>
        <p>變數宣告後以 <em>;</em> 分號結尾，沒錯，宣告變數的行為就是一句敘述句。當然啦，不是所有敘述句都這麼單純，不同的需求、不同的邏輯，敘述句的複雜程度也不一樣，有時甚至會結合多個敘述句使其成為一段複合敘述句，而通常這些敘述句逐句讀下來可以發現彼此互有關連，那麼我們就需要將它們群組起來以便識別，這個群組稱為「程式區塊」（Code Block）。</p>
<p>範例：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">function demo() {
    var name = 'iTrong';
    console.log(name);
}</code></pre>
        </div>
        <p>由一對大括號（或稱花括號）<em>{ }</em> 標示的區塊即為程式區塊，一個程式區塊內可包含一或多個敘述句。此外，程式區塊結尾不需要加上分號。</p>
        <p>有了 <em>;</em> 與 <em>{ }</em> 在程式碼代表意義的認知後，接下來學習各種類型的敘述句表現手法，應該會相對容易閱讀許多。大體而言，敘述句的種類可區分為三種：條件敘述句、迴圈敘述句與跳躍敘述句。</p>
    </div>
    <div class="text-block" id="act2">
        <h2>二、條件敘述句</h2>
        <p>條件敘述句的語法有兩種：<em>if</em> 與 <em>switch</em>。</p>
        <p><br></p>
        <h3>if：</h3>
        <p><em>if</em> 是很常見的條件判斷式敘述句，基本上會搭配 <em>else</em>，表示「如果符合 <em>if</em> 的條件則執行其指令，若不是則執行 <em>else</em> 裡的指令」的概念。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var a = 5;
var b = 3;

if (a > b) {
    document.write("a 比 b 大");
}
else {
    document.write("a 比 b 小");
}</code></pre>
        </div>
        <p>在上例中我們宣告了變數 <em>a</em> 與 <em>b</em>，並分別指定它們的值為 <em>5</em> 與 <em>3</em>。條件式的程式區塊判斷規則為：如果 <em>a</em> 大於 <em>b</em>，則文件寫下「a 比 b 大」的結果，否則輸出「a 比 b 小」。程式執行判斷時，會判讀小括號 <em>( )</em> 裡的條件是否與變數吻合，若相同則執行寫在它程式區塊裡的敘述句，若不相同則不執行。實際判斷結果 <em>a</em> 數值大於 <em>b</em>，所以程式執行 <em>if</em> 裡的指令。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="360" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="wvMBwjQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: if...else...">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/wvMBwjQ">
            JS-learn: if...else...</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>儘管這個範例的判斷式乍看之下沒有問題，但其實存在很大的瑕疵──沒有考慮到兩者數值相等的可能性，假設今天我們把 <em>a</em> 的數值改成 <em>3</em>，試問會發生什麼情況？</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var a = 5;
var b = 3;

a = 3;

if (a > b) {
    document.write("a 比 b 大");
}
else {
    document.write("a 比 b 小");
}</code></pre>
        </div>
        <div class="text-codepen">
            <p class="codepen" data-height="360" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="JjGojrL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: if...else..._2">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/JjGojrL">
            JS-learn: if...else..._2</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>答對了嗎？畫面最後顯示的結果是「a 比 b 小」。其實程式判定並沒有錯，因為條件式的規則只有定義兩種結果，要嘛 <em>a</em> 大於 <em>b</em>，要嘛「其他」，這個其他同時包含了「a 小於 b」以及「a 等於 b」兩種可能，如果我們要使條件式符合邏輯，最簡單的方法就是將 <em>else</em> 的敘述句結果修改為「a 不比 b 小」，或是「a 小於等於 b」，但這些都是治標不治本的處理方式（除非，你希望等於與小於的條件式是相同的），比較好的方式仍是將兩者數字相等的判斷邏輯自成一格。有些剛開始學程式的人會以為 <em>if</em>、<em>else</em> 只能設定兩種條件，實則不然，<em>if</em> 條件式可同時設定多筆條件，初始條件使用 <em>if</em>，其他條件使用 <em>else if</em>，最終條件（或稱非以上條件的結果）使用 <em>else</em>。</p>
        <p>我們可以將剛才的範例條件式改寫成如下：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">if (a > b) {
    document.write("a 比 b 大");
}
else if (a = b) {
    document.write("a 等於 b");
}
else {
    document.write("a 比 b 小");
}</code></pre>
        </div>
        <p>如此一來，當 <em>a</em> 與 <em>b</em> 數值相等的情況下進入條件式判斷，就能正確輸出「a 等於 b」的結果了。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="360" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="qBbEBzL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: if...else..._3">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/qBbEBzL">
            JS-learn: if...else..._3</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>switch：</h3>
        <p>當我們使用 <em>if</em> 處理超過一個以上的判斷條件式，可以使用 <em>else if</em>，除此之外還有另一種語法，那就是 <em>switch</em>。<em>switch</em> 適用場合多在進行多項條件且規則類似的條件判斷。其語法結構為：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">switch(參數){
    case '條件1':
        ...
        break;
    
    case '條件2':
        ...
        break;
    
    default:
        ...
        break;
}</code></pre>
        </div>
        <p>每一句 <em>case</em> 都代表一個條件，<em>default</em> 則表示預設（或不符合以上條件）的條件。至於 <em>break</em>，它代表的是一種跳出的概念，如果程式讀取到相符的條件，就會停止讀取後方的程式碼。</p>
        <p>假設現在要寫一個判斷三原色的條件式，我們可以這樣寫：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var color = "blue";
switch(color){
    case 'red':
        document.write("紅色");
        break;
    
    case 'green':
        document.write("綠色");
        break;

    case 'blue':
        document.write("藍色");
        break;
    
    default:
        document.write("不是三原色");
        break;
}</code></pre>
        </div>
        <p>實際範例：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="360" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="RwrNNZr" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: switch">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/RwrNNZr">
            JS-learn: switch</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><em>switch</em> 與 <em>if</em> 條件的差別在於前者會只讀取跟參數相符條件式裡的敘述句；而後者則讀取所有條件與其敘述句，效能消耗較 <em>switch</em> 來得多，渲染就會比較慢。</p>
    </div>
    <div class="text-block" id="act3">
        <h2>三、迴圈敘述句</h2>
        <p>當我們想重複執行某件事情（敘述句）十遍，直覺想到的可能是直接在編輯器裡面輸入十次內容，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">document.write("1");
document.write("2");
document.write("3");
document.write("4");
document.write("5");
document.write("6");
document.write("7");
document.write("8");
document.write("9");
document.write("10");</code></pre>
        </div>
        <div class="text-codepen">
            <p class="codepen" data-height="360" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="VweYmzb" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="VweYmzb">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/VweYmzb">
            VweYmzb</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>雖然程式依然能跑出我們要的結果，但這種作法既浪費效能，看起來也很不專業，是那種令明眼工程師啞然的程度。但如果使用迴圈那就不一樣了，不僅將要重複執行多次的敘述句大幅輕量化，整體程式碼也變得簡潔乾淨，雖然迴圈在資深工程師的眼裡依然是很基本的概念，但起碼菜味已經沒有那麼濃郁。在 JavaScript 世界裡，有關迴圈敘述句的語法有兩種：<em>for</em> 與 <em>while</em>。</p>
        <p><br></p>
        <h3>for：</h3>
        <p>在 <em>for</em> 迴圈裡，通常以計數器作為條件，以決定迴圈要運行的次數。我們直接沿用前面的例子，如果要用 <em>for</em> 迴圈表示的話，程式碼為下：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">for(var i = 1; i &lt;= 10; i++){
    document.write(i);
}</code></pre>
        </div>
        <p>由小括號 <em>( )</em> 囊括起來的程式碼我們稱之為條件，通常以使用計數器為多，而此條件裡又包含了三個敘述句，分別是：初始化（<em>var i = 0</em>）、條件（<em>i &lt;= 10</em>）以及結束時的更新（<em>i++</em>）。</p>
        <p>初始化：建立（宣告）一個變數，通常只有在第一次迴圈運行時才會被建立。有些人習慣將宣告寫在迴圈外部，初始化部分則只有單純指定數值。</p>
        <p>條件：迴圈會重複執行，直到次數滿足設定的條件（例如十次）。需要注意的是，條件除了常見的計數之外，也可以使用變數，那麼迴圈運行的條件次數將會是變數指定的值。</p>
        <p>結束時的更新：每次迴圈執行完大括號 <em>{ }</em> 裡的敘述句，迴圈就會累計一次計數，至於是遞增還是遞減，則要看此處使用的運算子，例如 <em>++</em> 就是遞增，<em>--</em> 則是遞減。</p>
        <p>了解迴圈條件裡各個敘述句的用途後，再來看看範例裡迴圈程式運作的邏輯──我們宣告了一個變數 <em>i</em>，並且指定數值 <em>1</em> 作為它的初始值，每次執行迴圈時，均會檢測 <em>i</em> 的數值是否「小於等於 10」？若是（true），則執行迴圈程式區塊裡的敘述句，當敘述句執行完畢後，<em>i</em> 的數值會遞增 <em>1</em>，然後再次進行 <em>i</em> 是否小於等於 <em>10</em> 的檢測，如果符合，則再次執行迴圈 <em>{ }</em>裡的敘述句，直到條件不符合（當 <em>i</em> > <em>10</em>）時終止迴圈。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="360" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="rNxaWyB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: for">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/rNxaWyB">
            JS-learn: for</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>while：</h3>
        <p>同樣的範例，來瞧瞧如果是用 <em>while</em> 迴圈會怎麼寫：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var i = 1;
while (i &lt;= 10) {
    document.write(i);
    i++;
}</code></pre>
        </div>
        <p>寫法其實與 <em>for</em> 大同小異（廢話），主要是 <em>while</em> 在小括弧 <em>( )</em> 內僅需定義「執行迴圈的條件」，變數則在外部進行宣告，當變數滿足條件（結果為 <em>true</em>）時，程式會執行程式區塊大括號 <em>{ }</em> 裡頭的敘述句。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="360" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="vYLEWab" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: while">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/vYLEWab">
            JS-learn: while</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><em>for</em> 與 <em>while</em> 的差別在於是否確定迴圈執行的次數。倘若不甚了解這句話的意思，那麼以下將兩者的迴圈條件裡的成份單獨拆出來看：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">// for
for(var i = 0; i &lt; n; i++){ ... }

// while
while (i &lt; n) { ... }</code></pre>
        </div>
        <p><em>n</em> 是已知數，那麼 <em>for</em> 迴圈執行的次數便一目了然，但 <em>while</em> 卻不一定，只知道當 <em>i</em> 大於或等於 <em>n</em> 的時候，迴圈才會停止。簡單來說，當我們明確知道迴圈執行次數時，用 <em>for</em>，反之則使用 <em>while</em>。所有的 <em>for</em> 迴圈皆可以改寫成 <em>while</em>，但並非所有的 <em>while</em> 都能用 <em>for</em> 取代。</p>
        <p>無論如何，不管是 <em>for</em> 還是 <em>while</em>，都務必要定義好結束的條件，否則迴圈可能發生無限執行的情況，這種情況通常被稱為無窮迴圈。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">// for
for(var i = 0; i >= 0; i++){ ... }

// while
var i = 0;
while (i &lt; 10) { ... }</code></pre>
        </div>
        <p>這兩個迴圈因為條件會永遠成立，迴圈將永遠不會結束。</p>
    </div>
    <div class="text-block" id="act4">
        <h2>四、跳躍敘述句</h2>
        <p>跳躍敘述句也有人稱跳出敘述句，用途如其名，指在程式執行到某種情況時，利用跳躍句迫使程式退出。看到這裡，腦海是否馬上浮現出了什麼？是的，<em>switch</em> 條件式裡使用到的 <em>break</em> 即是跳躍敘述句的一員。<em>break</em> 不僅可以使用在 <em>switch</em>，也可以用於迴圈。除了 <em>break</em> 之外，常見的跳躍句尚有：<em>continue</em>、<em>return</em>。</p>
        <p><br></p>
        <h3>break：</h3>
        <p>條件式 <em>switch</em> 的 <em>break</em> 用法就不再重述，這裡只談它如何運用於迴圈。在預設情況，迴圈只有條件以滿足時才會結束執行，而透過加入 <em>break</em>，就可以在迴圈抵達指定條件下就強制結束，譬如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var i = 1;
while (i &lt;= 10) {
    document.write(i);
    i++;
    if (i > 5) {
        break;
    }
}</code></pre>
        </div>
        <p>原本還沒加入 <em>break</em> 時，<em>while</em> 迴圈條件表示當 <em>i</em> 小於等於 <em>10</em> 之前，都會反覆執行條件裡的程式。但在範例中我們加入了一條判斷規則：「當 <em>i</em> 大於 <em>5</em> 的時候，<em>break</em> 將直接跳離迴圈」。所以你將會看到最後迴圈只讓文件輸出到 <em>5</em> 變強制結束了。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="360" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="BajNNLm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: while &amp;amp; break">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/BajNNLm">
            JS-learn: while &amp; break</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>continue：</h3>
        <p><em>continue</em> 只能使用在迴圈裡，它與 <em>break</em> 的差別在於 <em>break</em> 強制從迴圈跳出之後就不會再繼續執行迴圈了，但 <em>continue</em> 只是滿足條件後跳出，略過之後要執行的程式，但仍會繼續執行下一次的迴圈內容。什麼意思？我們直接上實例：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">for (var i = 1; i &lt;= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    document.write(i);
}</code></pre>
        </div>
        <p><em>continue</em> 跳出的條件為：當 <em>i</em> 除於 <em>2</em> 的餘數等於 <em>0</em> 的時候，迴圈將跳出，不執行後續的程式敘述。假如我們使用 <em>break</em>，當 <em>i</em> 數值是 <em>2</em> 時，就會因為滿足跳出條件而強行直接結束迴圈，後續的迴圈將不會再執行：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="360" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="wvMaMva" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: for &amp;amp; break">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/wvMaMva">
            JS-learn: for &amp; break</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>但通常我們會希望迴圈能執行到 <em>i</em> 大於 <em>10</em> 為止才結束，這時我們應該使用 <em>continue</em>：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="360" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="XWXbmep" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: for &amp;amp; continue">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/XWXbmep">
            JS-learn: for &amp; continue</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>如此一來，<em>i</em> 後續到 <em>10</em> 為止前不能被 <em>2</em> 除盡的奇數才能透過後續的敘述句顯示在文件上。</p>
        <p><br></p>
        <h3>return：</h3>
        <p><em>return</em> 用來回覆函式（function）呼叫的變數，它只能出現在函式裡，若用在迴圈將會造成程式錯誤。由於本篇對函式尚未有太多著墨，因此有關 <em>return</em> 的用法就留到函式篇一起做筆記。</p>
    </div>
    <div class="text-block" id="act5">
        <h2>五、參考資料</h2>
        <dl>
            <dd><a href="https://www.books.com.tw/products/0010744702" target="_blank">《JavaScript & JQuery：網站互動設計程式進化之道》</a></dd>
            <dd><a href="https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/if...else" target="_blank">MDN web docs</a></dd>
            <dd><a href="http://www.kangting.tw/2013/12/javascript-5-if.html" target="_blank">康廷數位 JavaScript 快速入門（5/10）－ 敘述句 if / switch</a></dd>
            <dd><a href="https://ithelp.ithome.com.tw/articles/10211560" target="_blank">JavaScript 基礎知識-switch 判斷式</a></dd>
            <dd><a href="https://ithelp.ithome.com.tw/articles/10229223" target="_blank">從 0 學習 JavaScript 筆記－控制判斷(if、else if、switch)</a></dd>
            <dd><a href="https://ithelp.ithome.com.tw/articles/10218218" target="_blank">Day 5: 述句(Statements)</a></dd>
            <dd><a href="https://ithelp.ithome.com.tw/articles/10191453" target="_blank">重新認識 JavaScript: Day 09 流程判斷與迴圈</a></dd>
            <dd><a href="https://www.itread01.com/content/1548601025.html" target="_blank">for迴圈和while迴圈的區別</a></dd>
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