<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="5" fileType="learnJs" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、什麼是陣列</a></li>
            <li><a href="#act2">二、陣列的長度（length）</a></li>
            <li><a href="#act3">三、新增陣列資料（unshift、push）</a></li>
            <li><a href="#act4">四、刪除陣列資料（shift、pop）</a></li>
            <li><a href="#act5">五、增刪改陣列資料（splice）</a></li>
            <li><a href="#act6">六、反轉陣列資料（reverse）</a></li>
            <li><a href="#act7">七、排序陣列資料（sort）</a></li>
            <li><a href="#act8">八、搜尋陣列資料（indexOf、lastIndexOf）</a></li>
            <li><a href="#act9">九、截取陣列資料（slice）</a></li>
            <li><a href="#act10">十、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <p>還記得變數的七種資料型別嗎？其中一種型別叫做 <b>Object</b>，也就是物件型別：</p>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f1">型別</div>
                    <div class="f-f1">說明</div>
                    <div class="f-f3">範例</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">Object</div>
                    <div class="f-f1">物件</div>
                    <div class="f-f3"><em>[1, 2, 3]</em>、<em>{ name: 'iTrong' }</em>、<em>function foo(){}</em> ...</div>
                </div>
            </div>
        </div>
        <p>我們可以看物件型別範例裡除了上一篇學到的函式（<em>function</em>）之外，尚有一項用中括號（或稱方括號 <em>[ ]</em>）表示的物件，它的真實身分是「陣列」（Array），不僅是 JavaScript 的內建物件，也是 JavaScript 很重要且常常需要使用到的技巧，本篇學習筆記將專注於陣列的介紹與相關操作方法。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、什麼是陣列</h2>
        <p>假設今天我們要建立一本班級名冊，用 JavaScript 的話大概會是這個模樣：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var number1 = "王小明";
var number2 = "李大華";
var number3 = "張小芬";
...</code></pre>
        </div>
        <p>在上面程式碼片段裡我們用座號當作變數名稱，依次宣告同學的順序。如果人數少可能還不覺得有什麼問題，但萬一人數很多呢？又或者未來某天來了名轉學生，勢必得需要額外宣告新的變數名稱（numberN），以在名冊裡加入新同學的資料。可是當每一筆資料都單獨通過變數命名存取，在程式操作上會相當不方便（例如變數只宣告到 <em>number50</em>，我就只能存取到 <em>number50</em> 以內的變數）。且不確定資料數量情況下，這種所有資料都以變數命名各自管理的模式也顯得不具彈性。</p>
        <p><br></p>
        <h3>同一個變數，用位置分割不同資料</h3>
        <p>陣列可以讓我們統一用一個變數，以位置分割的方式，去記錄每一筆資料。拿班級名冊的例子來說，陣列的表示方法如下：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = [];
nameList[0] = "王小明";
nameList[1] = "李大華";
nameList[2] = "張小芬";</code></pre>
        </div>
        <p>方括號 <em>[ ]</em> 是陣列的表示方式，資料位置的起始數字一般稱為「索引值」（index）。索引值從 <em>0</em> 開始計算，因此你才會看到第一筆資料在陣列中的索引值為 <em>0</em>。陣列的資料內容是可以動態新增的，假設現有名單 50 員情境下要新增第 51 人，只需要在程式碼裡新增 <em>nameList[50]</em> 即可（索引值從 <em>0</em> 開始算起，所以第 51 人的在陣列中的索引值為 <em>50</em>）。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">nameList[50] = "林阿玉";</code></pre>
        </div>
        <p>額外補充一點，<em>[]</em> 也可以用 <em>new Array()</em> 表示，兩者是一樣的：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var a = [];
var a = new Array();</code></pre>
        </div>
        <p>除了上面的表示方式外，陣列還有更簡潔的宣告方式，即在宣告陣列變數名稱的同時，將已知的資料預先寫入陣列裡，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = ["王小明", "李大華", "張小芬", ...];</code></pre>
        </div>
        <p>陣列裡的資料以逗號 <em>,</em> 區隔。此外，前面陣列裡的數字（例如 <em>nameList[1]</em>）指的是陣列裡的索引值，並非數值型別，陣列同樣可以存取純數字資料，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var numbers = [1, 2, 3, 4, 5];</code></pre>
        </div>
        <p>總的來說，JavaScript 的陣列可以視為裝載任何資料型別的容器，不光是字串、數字或物件，甚至還可以再放入另一個陣列，也就是「多維陣列」。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = [1, "2", [3]];</code></pre>
        </div>
        <p><br></p>
        <h3>更改陣列中某個資料的值</h3>
        <p>已經宣告的陣列裡的資料是可以被更改的，只要指定新的值給陣列索引值就可以。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = ["王小明", "李大華", "張小芬", ...];
nameList[0] = '盧小小';</code></pre>
        </div>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="abdWWJo" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 1">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/abdWWJo">
            JS-learn: array 1</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>以上就是陣列的基礎介紹了，接下來的章節將介紹陣列常用的幾種屬性方法。</p>
    </div>
    <div class="text-block" id="act2">
        <h2>二、陣列的長度（length）</h2>
        <p>藉由陣列的 <em>length</em> 屬性，可以取得該陣列目前儲存的資料數量。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = ["王小明", "李大華", "張小芬"];
nameList.length;</code></pre>
        </div>
        <p>回傳的結果為 <em>3</em>。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="JjGNVdv" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 2">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/JjGNVdv">
            JS-learn: array 2</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
    </div>
    <div class="text-block" id="act3">
        <h2>三、新增陣列資料（unshift、push）</h2>
        <p>陣列新增資料有以下這幾種方法：</p>
        <p><br></p>
        <h3>新增資料在陣列的首位：</h3>
        <p>使用的方法為 <em>unshift()</em>，見下例：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = ["王小明", "李大華", "張小芬"];
nameList.unshift("盧小小");</code></pre>
        </div>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="YzwVbWw" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 3">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/YzwVbWw">
            JS-learn: array 3</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>新增資料在陣列的末位：</h3>
        <p>有兩種方法，第一種是使用最常見的 <em>push()</em> 方法：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = ["王小明", "李大華", "張小芬"];
nameList.push("盧小小");</code></pre>
        </div>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="qBbmGXE" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 4">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/qBbmGXE">
            JS-learn: array 4</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>第二種則是透過 <em>ary[aryLength]</em> 的方式，讓目前陣列的索引值再加一個：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = ["王小明", "李大華", "張小芬"];
nameList[nameList.length] = "盧小小";</code></pre>
        </div>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="JjGNqpd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 5">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/JjGNqpd">
            JS-learn: array 5</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>新增資料在陣列的某位：</h3>
        <p>可透過 <em>splice()</em> 方法進行，詳見 <a href="#act5">增刪改陣列資料（splice）</a> 一節。</p>
    </div>
    <div class="text-block" id="act4">
        <h2>四、刪除陣列資料（shift、pop）</h2>
        <h3>刪除陣列首位的資料：</h3>
        <p>可使用 <em>shift()</em> 方法。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = ["王小明", "李大華", "張小芬"];
nameList.shift();</code></pre>
        </div>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="vYLmqJR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 6">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/vYLmqJR">
            JS-learn: array 6</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>刪除陣列末位的資料：</h3>
        <p>可使用 <em>pop()</em> 方法。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = ["王小明", "李大華", "張小芬"];
nameList.pop();</code></pre>
        </div>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="zYrwVWN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 7">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/zYrwVWN">
            JS-learn: array 7</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>刪除陣列某位的資料：</h3>
        <p>可透過 <em>splice()</em> 方法進行，詳見 <a href="#act5">增刪改陣列資料（splice）</a> 一節。</p>
    </div>
    <div class="text-block" id="act5">
        <h2>五、增刪改陣列資料（splice）</h2>
        <p><em>splice()</em> 方法可針對陣列資料進行新增、刪除、修改的動作，是陣列操作裡很強大的功能之一。它的結構一共包含了三個參數：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">arrayObject.splice(index, howmany, item1,.....,itemN)</code></pre>
        </div>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f1">參數</div>
                    <div class="f-f1">必要性</div>
                    <div class="f-f5">說明</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>index</em></div>
                    <div class="f-f1">必要</div>
                    <div class="f-f5">指定要新增或刪除的索引值</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>howmany</em></div>
                    <div class="f-f1">必要</div>
                    <div class="f-f5">要移除的資料長度，從哪裡開始即依據第一個值所指定的索引值繼續</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>item1,.....,itemN</em></div>
                    <div class="f-f1">非必要</div>
                    <div class="f-f5">要添加的資料內容</div>
                </div>
            </div>
        </div>
        <p>以下列舉幾種操作方式──</p>
        <p><br></p>
        <h3>1. 新增資料：</h3>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = ["王小明", "李大華", "張小芬"];
nameList.splice(2, 0, "甲生", "乙生");</code></pre>
        </div>
        <p>索引值（<em>index</em>）為 <em>2</em>，也就是將新的資料從陣列中的第三個位置，原先第三位的「張小芬」由於 <em>howmany</em> 值為 <em>0</em>，代表不會被刪除，所以只會被往後推。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="ExPmBqw" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 8">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/ExPmBqw">
            JS-learn: array 7</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>2. 刪除資料：</h3>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = ["王小明", "李大華", "張小芬"];
nameList.splice(1, 2);</code></pre>
        </div>
        <p>從陣列索引值 <em>1</em> 的資料開始算，刪除包含它在內的兩筆資料，因此「李大華」和「張小芬」都被刪除了。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="JjGNgoL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 9">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/JjGNgoL">
            JS-learn: array 9</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>3. 修改資料：</h3>
        <p>這裡用「修改」一詞其實是不精確的說法，在解釋之前，不妨直接閱讀範例──</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = ["王小明", "李大華", "張小芬"];
nameList.splice(1, 1, "甲員");</code></pre>
        </div>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="XWXRvXe" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 10">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/XWXRvXe">
            JS-learn: array 10</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>以結果論來看，感覺確實就像是我們把陣列裡索引值 <em>1</em> 的「李大華」，改成了「甲員」沒錯。然而稍加觀察程式碼就會發現，<em>splice()</em> 所做並不是修改，而是先將「李大華」刪除（因為 <em>howmany</em> 為 <em>1</em>，代表刪除一個資料），再將新的資料「甲員」添加到索引值 <em>1</em> 的位置。</p>
        <p>此外，索引值允許指定負值，若索引參數值為負，即代表從陣列後方開始算起，<em>-1</em> 為陣列最後一格，<em>-2</em> 則是倒數第二，依此類推。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="RwrgWve" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 11">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/RwrgWve">
            JS-learn: array 11</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>索引值 <em>index</em> 為 <em>-1</em>，代表範例陣列最後一個的資料「張小芬」被移除，然後新增「甲員」到陣列中。</p>
    </div>
    <div class="text-block" id="act6">
        <h2>六、反轉陣列資料（reverse）</h2>
        <p><em>reverse()</em> 方法可以用於反轉陣列裡的資料，也就是原本最後一筆資料變成第一個，倒數第二變成第二...依此類推。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = ["王小明", "李大華", "張小芬", "盧小小"];
nameList.reverse();</code></pre>
        </div>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="BajZjNB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 12">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/BajZjNB">
            JS-learn: array 12</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
    </div>
    <div class="text-block" id="act7">
        <h2>七、排序陣列資料（sort）</h2>
        <p><em>sort()</em> 方法可以對陣列重新進行排序，如果不使用函式判斷的預設情況下，<em>sort()</em> 會將陣列內的資料轉換成字串，並採用 <a href="https://zh.wikipedia.org/wiki/Unicode" target="_blank">Unicode</a> 的標準判斷排序先後順序。舉例來說：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = [4, 2, 5, 3, 1];
nameList.sort();</code></pre>
        </div>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="WNrOwMJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 13">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/WNrOwMJ">
            JS-learn: array 13</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>然而，因為預設會將資料轉換成字串型別的特性，純數字在排序上會遇到問題，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = [12, 4, 2, 5, 11, 3, 1, 8];
nameList.sort();</code></pre>
        </div>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="bGERpvL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 14">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/bGERpvL">
            JS-learn: array 14</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>字串的 <em>1</em> 在 Unicode 規則中會排在 <em>2</em> 之前，所以我們看到十位數的 <em>11</em>、<em>12</em> 都分別列在 <em>2</em> 前方。</p>
        <p>上述的情況如果要使數字正確地排序，最好的處理方式就是加入判斷函式，此方法 JavaScript 稱為「自定義排序」（Custom Sort），在自定義排序加入的判斷函式中，我們會用到兩個參數：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = [12, 4, 2, 5, 11, 3, 1, 8];
nameList.sort(function (a, b) {
    return a - b;
});</code></pre>
        </div>
        <p>首先，<em>a</em> 和 <em>b</em> 分別代表陣列裡索引值第 <em>N</em> 和第 <em>N + 1</em> 個位置的資料，參數名稱可以自由定義，並非一定要是 <em>a</em> 或 <em>b</em> 不可。在判斷函式中，透過 <em>a</em> 與 <em>b</em> 相減的方式來進行比較，然後傳回一個數字，可能是正數、0 或是負數，詳細比較規則如下：</p>
        <ul>
            <li>若 <em>a - b</em> 小於 <em>0</em>（負數），則表示 <em>a</em> 排序在 <em>b</em> 之前。</li>
            <li>若 <em>a - b</em> 等於 <em>0</em>，則表示 <em>a</em> 與 <em>b</em> 排序不變。</li>
            <li>若 <em>a - b</em> 大於 <em>0</em>（正數），則表示 <em>a</em> 排序在 <em>b</em> 之後。</li>
        </ul>
        <p>以上面程式碼為例，<em>12</em> 與 <em>4</em> 相減為正數，因此 <em>12</em> 將排序在 <em>4</em> 之後。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="xxZrdLv" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 15">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/xxZrdLv">
            JS-learn: array 15</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <p>根據不同的函式定義或額外使用其他方法，就能使陣列產生不一樣的排序結果，以下列舉幾種排序規則：</p>
        <p><br></p>
        <h3>降冪排序：</h3>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="jOWwwXO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 16">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/jOWwwXO">
            JS-learn: array 16</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>亂數排序：</h3>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = [12, 4, 2, 5, 11, 3, 1, 8];
nameList.sort(function (a, b) {
    return 0.5 - Math.random();
});</code></pre>
        </div>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="YzwQrqX" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 17">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/YzwQrqX">
            JS-learn: array 17</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>指定物件排序：</h3>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = [
    { name: "王小明", age: 34 },
    { name: "李大華", age: 23 },
    { name: "張小芬", age: 27 }
];
nameList.sort(function (a, b) {
    return a.age > b.age;
});</code></pre>
        </div>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="dyGRVOP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 18">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/dyGRVOP">
            JS-learn: array 18</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
    </div>
    <div class="text-block" id="act8">
        <h2>八、搜尋陣列資料（indexOf、lastIndexOf）</h2>
        <p>有關搜尋陣列裡資料的方法有兩種，分別是 <em>indexOf()</em> 與 <em>lastIndexOf()</em>。它們的差異只在於搜尋的方向不同，前者由左至右，後者則是由右至左。我們只需在 <em>()</em> 內填入要搜尋的資料值，<em>indexOf()</em> / <em>lastIndexOf()</em> 就會搜索陣列是否有相符的資料值，若有，則回傳該資料的索引值（<em>index</em>）；若無，則回傳 <em>-1</em>。</p>
        <p>假設現在有筆陣列資料如下：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = ["王小明", "李大華", "張小芬"];</code></pre>
        </div>
        <p>當我們使用 <em>indexOf()</em> 查找 <em>張小芬</em>：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">nameList.indexOf("張小芬");    // 2</code></pre>
        </div>
        <p>其回傳值將會是 <em>2</em>。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="gOPRXoj" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 19">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/gOPRXoj">
            JS-learn: array 19</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>由於資料搜尋的值必須完全相同，如果只輸入一個「張」字，又或者搜尋陣列裡不存在的資料，回傳結果都將會是 <em>-1</em>。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">nameList.indexOf("張");    // -1
nameList.indexOf("盧小小");    // -1</code></pre>
        </div>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="dyGRZgd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 20">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/dyGRZgd">
            JS-learn: array 20</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>此外，<em>indexOf()</em> / <em>lastIndexOf()</em> 中的參數一共可以包含兩個值，第一個參數表示要判斷的值，是為必填；第二個值則是填入 <em>index</em> 值，代表陣列要從哪一個索引位置開始判斷。舉例：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="OJMgOrd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 21">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/OJMgOrd">
            JS-learn: array 21</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>即便第一個要判斷的參數值 <em>王小明</em> 確實存在於該陣列中，但由於我們給了 <em>indexOf()</em> 第二個參數索引值為 <em>2</em>，令陣列從第三個位置的資料開始判斷，位於第一個位置資料的 <em>王小明</em> 就無法被查找到，因而最終返回 <em>-1</em> 的結果。</p>
    </div>
    <div class="text-block" id="act9">
        <h2>九、截取陣列資料（slice）</h2>
        <p><em>slice()</em> 方法可以截取陣列中的資料，使其成為新的陣列，雖說是「截取」，但也並非直接從原陣列裡把指定資料「剪」出來，而是比較近似複製的概念。<em>slice()</em> 一共可填兩個參數，分別代表索引值（<em>index</em>）的起始值與結束值。具體公式為：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">ary.slice(start, end)</code></pre>
        </div>
        <p><em>slice()</em> 內的參數都不是必填項目，依據填入參數的與否及不同索引值，新陣列產生的結果也不一樣，以下便一一列舉。首先，要截取的陣列資料如下：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var nameList = ["王小明", "李大華", "張小芬", "盧小小", "黃阿亮"];</code></pre>
        </div>
        <p><br></p>
        <h3>不填起始與結束值：</h3>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">nameList.slice();</code></pre>
        </div>
        <p>起始值的預設索引值為 <em>0</em>，如果不填入起始值，則直接以預設值作判斷。如果不指定結束的索引值，則會直接截取到陣列最後一筆資料。因此，兩者都不填值的狀況下，等同截取原陣列從 <em>0</em> 開始到最後的所有資料，產生一個新的陣列。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="oNbwKBy" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 22">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/oNbwKBy">
            JS-learn: array 22</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>（這個實例練習同時展示 <em>slice()</em> 並非直接把陣列的資料給剪下來貼到新的陣列上。）</p>
        <p><br></p>
        <h3>只設起始值：</h3>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">nameList.slice(2);</code></pre>
        </div>
        <p>當 <em>slice()</em> 括弧內只填入一個參數時，會將該參數視為起始值。假設數值為 <em>2</em>，代表從陣列第三個位置（<em>index</em> 從 <em>0</em> 起計）的資料開始截取，直到陣列最後一個資料。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="PoZjMJM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 23">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/PoZjMJM">
            JS-learn: array 23</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>起始值與結束值皆有設置：</h3>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">nameList.slice(1, 4);</code></pre>
        </div>
        <p>關於起始值前面已有介紹，這裡就不多說明了，主要需要注意的是，截取陣列的資料不包含結束值本身。以上方程式碼為例，結束值 <em>4</em> 表示資料的第五個位置，但 <em>slice()</em> 新的陣列不會包含它，而是截取到原陣列的前一個位置，也就是 <em>index</em> 為 <em>3</em> 的資料為止。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="VweWoyq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: array 24">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/VweWoyq">
            JS-learn: array 24</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>參數可以是負數：</h3>
        <p><em>slice()</em> 裡的參數可以是負數，表示資料位置從右邊開始算。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">nameList.slice(-1);  // 從陣列右邊第一位開始截取
nameList.slice(1, -1);  // 從左邊第二位截取至右邊第一位
nameList.slice(-3, -1);  // 從右邊第三位截取至右邊第一位</code></pre>
        </div>
        <p><br></p>
        <p><br></p>
        <p>礙於篇幅關係，陣列方法的介紹將拆分成兩篇，其他方法留到下篇再繼續。</p>
    </div>
    <div class="text-block" id="act10">
        <h2>十、參考資料</h2>
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