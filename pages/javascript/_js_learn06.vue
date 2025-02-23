<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="6" fileType="learnJs" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、複製陣列資料（copyWithin）</a></li>
            <li><a href="#act2">二、填充陣列資料（fill）</a></li>
            <li><a href="#act3">三、篩選陣列資料（filter）</a></li>
            <li><a href="#act4">四、遍歷陣列資料（forEach）</a></li>
            <li><a href="#act5">五、轉換陣列資料為字串（toString）</a></li>
            <li><a href="#act6">六、轉換陣列資料為字串並加入自定義符號（join）</a></li>
            <li><a href="#act7">七、合併陣列資料（concat）</a></li>
            <li><a href="#act8">八、判斷陣列資料（every、some、includes）</a></li>
            <li><a href="#act9">九、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <p>本篇是陣列學習筆記的下篇，將繼續聚焦於陣列操作方法的介紹。廢話不多說，馬上進入正題。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、複製陣列資料（copyWithin）</h2>
        <p><em>copyWithin()</em> 方法可以複製陣列的資料，並從指定索引值的位置開始將複製的資料覆蓋原本位置的資料。它一共可填入三個參數值，分別表示：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">ary.copyWithin(target, start, end);</code></pre>
        </div>
        <p>第一個值 <em>target</em> 指的是要置換位置的目標索引值（必填），<em>start</em> 表示要從什麼位置開始複製（預設值為 <em>0</em>），<em>end</em> 則表示要在哪一個位置結束，但不包含該數值索引值本身的位置（預設為陣列長度）。剛說明定義可能仍有些懵懂，以下我們就直接來看程式碼範例：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = ["王小明", "李大華", "張小芬", "盧小小", "黃阿亮"];</code></pre>
        </div>
        <p><br></p>
        <h3>只填入目標索引值：</h3>
        <p>操作陣列的資料如上，假設此時我們僅先給予 <em>copyWithin()</em> 一個參數值，其數值為 <em>2</em>：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">nameList.copyWithin(2);</code></pre>
        </div>
        <p>當 <em>copyWithin()</em> 內參數值只有一個數值的時候，代表陣列將從該數字對應位置的資料開始把複製的陣列資料依序取代原本的內容，由於起始值與結束值都沒有指定，因此複製的範圍涵蓋整個陣列。得到結果為下：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="gOPxvLP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 25">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/gOPxvLP">
            JS-learn: array 25</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><em>2</em> 指向的索引值為第三個位置的 <em>張小芬</em>，並從第一個位置的 <em>王小明</em> 開始複製資料，取代原本陣列第三個位置的內容，並逐格複製直到陣列結束。原本陣列的長度不會隨著複製操作而有所改變，若複製資料超過原陣列長度，溢出部份將會直接被忽略。</p>
        <p><br></p>
        <h3>填入起始值：</h3>
        <p><em>copyWithin()</em> 第二個參數值代表資料要從哪一個位置開始複製，假如我們填入的參數值為 <em>copyWithin(2, 1)</em>，表示陣列從第三個位置開始覆蓋資料，而複製的資料從第二個位置的資料起計。例如：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="zYrdLpG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 26">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/zYrdLpG">
            JS-learn: array 26</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>填入結束值：</h3>
        <p><em>copyWithin()</em> 的第三個參數表示停止複製的資料位置，也就是說，資料複製只會到結束索引值的錢一個位置，不包含結束索引值本身。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="NWxvBME" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 27">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/NWxvBME">
            JS-learn: array 27</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
    </div>
    <div class="text-block" id="act2">
        <h2>二、填充陣列資料（fill）</h2>
        <p><em>fill()</em> 方法可用來將陣列中的資料填充為指定的值，其語法規則為：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">ary.fill(value, start, end);</code></pre>
        </div>
        <p><em>value</em> 值是要填充的內容，<em>start</em>、<em>end</em> 和其他方法的用法相同，分別表示要從哪一個索引值位置開始執行，然後到結束值的前一個位置停止填充。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = ["王小明", "李大華", "張小芬", "盧小小", "黃阿亮"];
nameList.fill("林小玉");</code></pre>
        </div>
        <p>像上方程式碼片段只填入 <em>value</em> 的話，即表示陣列所有資料通通都會被 <em>林小玉</em> 給填充。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="BajdMpz" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 28">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/BajdMpz">
            JS-learn: array 28</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
    </div>
    <div class="text-block" id="act3">
        <h2>三、篩選陣列資料（filter）</h2>
        <p><em>filter()</em> 方法用來使陣列依據指定的判斷函式，依序對陣列裡每一筆資料進行判斷，並篩選出符合條件的資料。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">function aryFilter(n) {
    return n >= 10;
}

var nameList = [5, 1, 13, 4, 8, 55, 9, 2, 10, 24];
nameList.filter(aryFilter);</code></pre>
        </div>
        <p>首先，我們定義了一個判斷函式 <em>aryFilter</em>，其內容是回傳（<em>return</em>）大於等於 <em>10</em> 的數值。接著透過 <em>filter()</em> 方法呼叫函式，函式便會對指定陣列裡的每一個資料執行判斷，凡是數值大於等於 <em>10</em> 符合條件的資料，就會被篩選出來成為新的陣列。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="WNrEPYX" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 29">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/WNrEPYX">
            JS-learn: array 29</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>函式要以匿名函式的形式直接定義在方法裡也是可以的，像上方的範例我們就可以改寫成：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = [5, 1, 13, 4, 8, 55, 9, 2, 10, 24];
nameList.filter(function(n) {
    return n >= 10;
});</code></pre>
        </div>
        <p>當然，可篩選的目標不單侷限於數字而已，字串同樣可以通過條件判斷進行處理，例如：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="abdyXgg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 30">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/abdyXgg">
            JS-learn: array 30</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>篩選出字串長度大於等於 <em>5</em> 的陣列資料。</p>
    </div>
    <div class="text-block" id="act4">
        <h2>四、遍歷陣列資料（forEach）</h2>
        <p><em>forEach()</em> 方法可用來將陣列的「每一個值」傳遞到函式進行運算，其具體語法規則為下：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">ary.forEach(function(item, index, array){ ... });</code></pre>
        </div>
        <p>可傳遞到函式中的參數有三個，分別表示陣列資料（<em>item</em>）、陣列資料的索引值（<em>index</em>）、原本的陣列（<em>array</em>），其中後兩者參數非必填項目，但可以輔助函式執行不同效果的運算。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="wvMrWXX" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 30">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/wvMrWXX">
            JS-learn: array 30</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>如上方範例實作，我們可透過 <em>forEach()</em> 實現陣列各資料數值的加總；又或者加入索引值和原陣列參數，做到改變原陣列內容的效果：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="bGEowjb" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 31">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/bGEowjb">
            JS-learn: array 31</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
    </div>
    <div class="text-block" id="act5">
        <h2>五、轉換陣列資料為字串（toString）</h2>
        <p><em>toString()</em> 方法可以將陣列物件型別轉換為字串並輸出，舉例來說，手邊有一筆陣列資料，內容如下：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = ["王小明", "李大華", "張小芬", "盧小小", "黃阿亮"];</code></pre>
        </div>
        <p>透過 <em>toString()</em> ，我們可以將陣列裡的資料轉換成字串輸出：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">nameList.toString();</code></pre>
        </div>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="MWKEbvr" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 32">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/MWKEbvr">
            JS-learn: array 32</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>此時你可能會想：這和直接秀出陣列資料有什麼兩樣？但如果用 <em>typeof</em> 查看輸出內容的型別，就會發現箇中奧妙。首先，我們先看看陣列的物件型別是什麼：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="VweMmMJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 33">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/VweMmMJ">
            JS-learn: array 33</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>（陣列在變數資料型別分類裡歸屬為物件型別。）</p>
        <p>此時再瞧瞧經由 <em>toString()</em> 輸出後的資料，得到的型別結果將會是：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="KKVXNZX" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 34">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/KKVXNZX">
            JS-learn: array 34</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>所以你會發現，一旦使用 <em>toString()</em> 方法，它就會把陣列裡所有資料通通轉成字串，並輸出一長串純文字的字符串（但每筆資料之間仍會加入逗號以做區隔）。順帶一提，原本陣列裡包含 <em>undefined</em> 或 <em>null</em>，輸出陣列資料都不會輸出任何東西；倘若陣列裡還包含陣列，則方括號 <em>[ ]</em> 會直接省略。此一特性即便使用 <em>toString()</em> 也是一樣的。且看以下實作：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="vYLeyaE" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 35">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/vYLeyaE">
            JS-learn: array 35</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
    </div>
    <div class="text-block" id="act6">
        <h2>六、轉換陣列資料為字串並加入自定義符號（join）</h2>
        <p><em>join()</em> 方法和 <em>toString()</em> 有一點點像，共通點是將陣列裡的資料轉換成字符串輸出，不過 <em>toString()</em> 只是忠實地將每筆資料用逗號 <em>,</em> 隔開。而 <em>join()</em> 方法則可以令合併的資料之間加入自定義的符號。<br><em>join()</em> 的語法規則為：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">ary.join();</code></pre>
        </div>
        <p>我們同樣用下方這筆資料做練習：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = ["王小明", "李大華", "張小芬", "盧小小", "黃阿亮"];</code></pre>
        </div>
        <p>假如不傳遞字符給 <em>join()</em>，那麼陣列輸出的結果就和原本的一樣，以 <em>,</em> 隔開每一筆資料：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = ["王小明", "李大華", "張小芬", "盧小小", "黃阿亮"];
nameList.join();    // 王小明,李大華,張小芬,盧小小,黃阿亮</code></pre>
        </div>
        <p>要加入到 <em>join()</em>的字符需前後加上單引號或雙引號，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = ["王小明", "李大華", "張小芬", "盧小小", "黃阿亮"];
nameList.join("&");    // 王小明&李大華&張小芬&盧小小&黃阿亮</code></pre>
        </div>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="gOPGgPW" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 36">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/gOPGgPW">
            JS-learn: array 36</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>倘若引號內不加入任何字符，則陣列資料將會「黏」在一起。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = ["王小明", "李大華", "張小芬", "盧小小", "黃阿亮"];
nameList.join("");    // 王小明李大華張小芬盧小小黃阿亮</code></pre>
        </div>
    </div>
    <div class="text-block" id="act7">
        <h2>七、合併陣列資料（concat）</h2>
        <p><em>concat()</em> 方法用於合併二至多個不同的陣列。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">ary.concat();</code></pre>
        </div>
        <p>例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var a = ["A1", "A2", "A3"];
var b = ["B1", "B2", "B3"];
var c = ["C1", "C2", "C3"];

a.concat(b, c);</code></pre>
        </div>
        <p><em>concat()</em> 裡僅需填入要合併的陣列名稱，如果要同時合併多個則用逗號相隔，被合併的陣列資料會依序排列在目標陣列的資料之後，成為一個新的陣列（不影響原本陣列內容的意思）。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="pogWRaG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 37">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/pogWRaG">
            JS-learn: array 37</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
    </div>
    <div class="text-block" id="act8">
        <h2>八、判斷陣列資料（every、some、includes）</h2>
        <p><em>every()</em> 與 <em>some()</em> 方法都是藉由函式設定的內容，判斷陣列裡的資料是否合乎條件，並回傳 <em>true</em> 或 <em>false</em> 的結果。</p>
        <p><br></p>
        <h3>every()：</h3>
        <p>只要陣列內有任一資料不符合函式判斷的條件，則回傳 <em>false</em>。如果全部符合，則傳回 <em>true</em>。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="zYrEZzN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 38">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/zYrEZzN">
            JS-learn: array 38</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>在範例裡，我們設定函式判斷的條件為每一個傳遞進去的參數是否大於 <em>3</em>，然而，陣列前三筆資料數值都沒有比 <em>3</em> 大，因此最終回傳的結果為 <em>false</em>。</p>
        <p><br></p>
        <h3>some()：</h3>
        <p>與 <em>every()</em> 相反，<em>some()</em> 只要陣列裡其中一筆資料符合條件，那麼回傳的結果就會是 <em>true</em>。當然，如果通通不符合條件，回傳結果仍依然是 <em>false</em>。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="qBbPrMo" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 40">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/qBbPrMo">
            JS-learn: array 40</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>includes()：</h3>
        <p><em>includes()</em> 用於判斷陣列中的資料是否包含指定的參數值，若有，返回 <em>true</em>；反之則回傳 <em>false</em>。<em>includes()</em> 一共可以填兩個值，分別是：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">ary.includes(value, start);</code></pre>
        </div>
        <p><em>value</em> 是作為判斷的值，陣列資料必須完全符合該值才可算是包含；<em>start</em> 則是可以指定要從陣列哪一個位置開始判斷。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="xxZXdEa" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 41">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/xxZXdEa">
            JS-learn: array 41</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
    </div>
    <div class="text-block" id="act9">
        <h2>九、參考資料</h2>
        <dl>
            <dd><a href="https://www.books.com.tw/products/0010744702" target="_blank">《JavaScript & JQuery：網站互動設計程式進化之道》</a></dd>
            <dd><a href="http://www.kangting.tw/2013/12/javascript-9.html" target="_blank">JavaScript 快速入門（9/10）－ 陣列</a></dd>
            <dd><a href="https://www.fooish.com/javascript/array/" target="_blank">JavaScript Array (陣列)</a></dd>
            <dd><a href="https://www.oxxostudio.tw/articles/201908/js-array.html" target="_blank">JavaScript Array 陣列操作方法大全 ( 含 ES6 )</a></dd>
            <dd><a href="https://blog.kdchang.cc/2016/06/23/javascript-data-structure-algorithm-array/" target="_blank">用 JavaScript 學習資料結構和演算法：陣列（Array）篇</a></dd>
            <dd><a href="https://codertw.com/ios/28518/" target="_blank">javascript 陣列的常用方法</a></dd>
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