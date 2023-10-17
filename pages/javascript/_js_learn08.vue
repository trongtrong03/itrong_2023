<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="8" fileType="learnJs" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、複習</a></li>
            <li><a href="#act2">二、Primitive（基本型別）</a></li>
            <li><a href="#act3">三、Object（物件型別）</a></li>
            <li><a href="#act4">四、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <p>在先前<a href="_js_learn01" target="_blank">〈Javascript 學習筆記（一）：變數與資料型別〉</a>一文中，我們對 JavaScript 變數值有哪些資料型別已有初步的認識。事實上，這些型別其實還能再概括歸類為兩大類：Primitive（基本型別）與 Object（物件型別），具體內容為何以下一起來看看。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、複習</h2>
        <p>首先我們先複習一下 JavaScript 的概念：「JavaScript 是個『弱型別』的程式語言」──這是剛接觸 JavaScript 常聽到的其中一句金言，意即弱型別程式語言的變數本身不具有資料型別，它（變數）的「值」才有資料型別的資訊。順便再簡單提強型別程式語言的殊異，有別於弱型別，強型別程式語言定義的變數在宣告時期就必須指定該變數的型別是什麼，如果該變數執行了不是它型別的運算，程式就會出現非預期的問題。</p>
        <p>複習過強、弱型別程式語言的差異後，再接著重新溫習 JavaScript 定義的資料型別分別有哪些：</p>
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
    </div>
    <div class="text-block" id="act2">
        <h2>二、Primitive（基本型別）</h2>
        <blockquote>In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods.</blockquote>
        <p>上面原句來自 <a href="https://developer.mozilla.org/en-US/docs/Glossary/Primitive" target="_blank">MDN web docs</a> 說明的定義。而根據 MDN 的解釋，基本型別的值是除了物件之外，為原始定義的純值。它囊括以下六種類型：<b>Number</b>、<b>String</b>、<b>Boolean</b>、<b>Null</b>、<b>Undefined</b> 與 <b>Symbol</b>。</p>
        <p>至於有關各個型別的介紹，可回去觀看<a href="_js_learn01" target="_blank">〈Javascript 學習筆記（一）：變數與資料型別〉</a>這篇文章，在此就不多做贅述。</p>
    </div>
    <div class="text-block" id="act3">
        <h2>三、Object（物件型別）</h2>
        <p>物件型別只有一種型別，那就是物件（Object），它是一個由 <b>Name</b> 與 <b>Value</b> 組成（又稱鍵值配對）的集合體，一個集合體即是物件的「屬性」（Property）。此外，物件型別還有「次型別」（subtype），例如函式物件、陣列物件等。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var obj = {
    // 函式物件，又稱物件方法
    Meth: function(){
        document.write('Hello world!') ;
    },

    // 陣列物件
    Arr: ['apple', 'orange', 'banana'],
}</code></pre>
        </div>
        <p><br></p>
        <p>總結來說，JavaScript 目前內建的資料型別一共有七個種類，分別是六種純值型別，以及一種物件型別。</p>
    </div>
    <div class="text-block" id="act4">
        <h2>四、參考資料</h2>
        <dl>
            <dd><a href="https://developer.mozilla.org/en-US/docs/Glossary/Primitive" target="_blank">MDN web docs</a></dd>
            <dd><a href="https://luffy.website/2019/08/10/weird-JavaScript-10/#%E8%B3%87%E6%96%99%E5%9E%8B%E5%88%A5%EF%BC%88Data-Type%EF%BC%89" target="_blank">Weird-JavaScript 10：基本型別（純值）與物件型別</a></dd>
        </dl>
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

        // Define reactive data using ref
        const isActive = ref(0);

        return {
            isActive
        };
    }
}
</script>