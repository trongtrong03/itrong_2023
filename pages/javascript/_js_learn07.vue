<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="7" fileType="learnJs" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、物件宣告與結構</a></li>
            <li><a href="#act2">二、存取屬性</a></li>
            <li><a href="#act3">三、刪除屬性</a></li>
            <li><a href="#act4">四、物件的方法</a></li>
            <li><a href="#act5">五、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <p>在 JavaScript 世界裡，除了原始型別（數字、布林值、字串），其餘東西都是物件（Object），我們可以再度請出資料型別表一看：</p>
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
        <p>包含上一篇學習筆記主題的陣列（Array）在內，函式（Function）甚至是未列於表中的根（roots）本身也都是物件。根物件又名全局物件，在瀏覽器裡的根物件指的是 <em>window</em>。此時此刻就先不針對 <em>window</em> 進行過多的解釋，我們只要知道，物件是 JavaScript 很重要的基礎，每一位工程師都必須要瞭解它的概念與相關應用。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、物件宣告與結構</h2>
        <p>在 JavaScript 裡，一個基礎型別可以是一個數字、布林值或字串，但物件可能是由一個空值或一群屬性（property）組合而成的複雜型態資料。宣告物件的方式有兩種：</p>
        <p><br></p>
        <h3>物件建構式（Object Constructor）：</h3>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var obj = new Object();</code></pre>
        </div>
        <p>用 <em>new</em> 關鍵字加上 <em>Object()</em> 就能建立一個型別為物件的變數。</p>
        <p><br></p>
        <h3>物件實字（Object Literal）：</h3>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var obj = {};</code></pre>
        </div>
        <p>另一種方式則是直接使用一對大括號（花括號）來表示物件，此種建立方式較物件建構式來得常見。本篇學習筆記的範例練習主要也會以此方式來進行。</p>
        <p><br></p>
        <p>通常物件裡會存放一些該物件的屬性，就像一輛車子會存在許多資料，例如廠牌、型號、顏色...等，這些資料即為該車輛（物件）的屬性，倘若要透過 JavaScript 來表示，其物件結構會是這個樣子的：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var car = {
    brand: "TOYOTA",
    name: "C-HR",
    color: "red",
    year: 2016
};</code></pre>
        </div>
        <p>應該不難理解，每一條屬性皆是由名稱（Key）及值（Value）的組成，如果物件裡存在多條屬性，則每條屬性之間以逗號區隔。值（Value）可以放入任何型別的資料，當然也包含物件，這時整體看起來宛如 Sass 的巢狀結構：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var car = {
    brand: "TOYOTA",
    name: "C-HR",
    color: "red",
    year: 2016,
    price: {
        LE: 895000,
        XLE: 959000,
        Limited: 1069000
    }
};</code></pre>
        </div>
    </div>
    <div class="text-block" id="act2">
        <h2>二、存取屬性</h2>
        <p>如果要存取物件裡的屬性，主要有兩種方法：</p>
        <p><br></p>
        <h3>1. 使用 <em>.</em> 運算子：</h3>
        <p>以上個章節的範例為例，如果我們要存取該車輛物件 <em>car</em> 的「品牌」屬性（<em>brand</em>），那麼我們只需 <em>car.brand</em> 這樣寫即可。且看下方實作：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="gOPdjdz" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: object 1">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/gOPdjdz">
            JS-learn: object 1</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>如果要用 <em>.</em> 存取屬性，必須注意屬性名稱（也就是 Key 值）不能含「符號」，因為此種方式無法判別屬性名稱裡的符號是否為其一部分。</p>
        <p><br></p>
        <h3>2. 使用 <em>[]</em>：</h3>
        <p>另一種方式則是使用中括號，注意中括號裡的屬性名稱需要用單或雙引號囊括起來，例如 <em>car["brand"]</em>。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="vYLPWNv" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: object 2">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/vYLPWNv">
            JS-learn: object 2</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>和 <em>.</em> 運算子不同，<em>[]</em> 可以接受屬性名稱含有符號，儘管如此，變數命名規仍應當避免使用特殊符號。除此之外，<em>[]</em> 裡的內容也可以是變數，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var car = {};
var carBrand = "brand";

car[carBrand] = "TOYOTA";   // 物件 car 建立名為 brand 的屬性，其值為 TOYOTA

console.log(car[carBrand]);    // 這裡中括號裡引入的內容是變數，所以不需要雙引號</code></pre>
        </div>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="ExPMQeW" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: object 3">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/ExPMQeW">
            JS-learn: object 3</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>假如我們使用 <em>.</em> 運算子來給變數指定值，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">car.carBrand = "TOYOTA";</code></pre>
        </div>
        <p>這樣反而變成物件 <em>car</em> 新增一個名為 <em>carBrand</em> 屬性，而並非是變數了。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="eYJXVxd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: object 4">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/eYJXVxd">
            JS-learn: object 4</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>透過實際操作展示可以發現輸出的結果是 <em>undefined</em>。</p>
    </div>
    <div class="text-block" id="act3">
        <h2>三、刪除屬性</h2>
        <p>倘如要刪除物件裡的屬性，我們可以使用 <em>delete</em> 關鍵字，具體操作方式為下：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">delete object.property;</code></pre>
        </div>
        <p>例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var car = {
    brand: "TOYOTA",
    name: "C-HR",
    color: "red",
    year: 2016,
};

delete car.name;
delete car.color;
delete car.year;</code></pre>
        </div>
        <p>最後 <em>car</em> 物件裡的屬性便只剩下 <em>brand</em> 一條而已，我們可以通過下方範例實作的 Console 功能獲得證實：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="QWyRKVq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: object 5">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/QWyRKVq">
            JS-learn: object 5</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
    </div>
    <div class="text-block" id="act4">
        <h2>四、物件的方法</h2>
        <p>在前言曾提到，JavaScript 除了原始型別之外的所有東西都是物件，自然也包含「函式」（function）。我們除了可以將函式主體指定給某物件的某屬性外，也可以直接在物件屬性裡定義函式，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var obj = {
    f: function(){ ... },
};</code></pre>
        </div>
        <p>像這樣，如果物件的屬性值是一個函式，一般大眾稱其為該物件的「方法」（method）──物件的方法將用來定義一個物件可以做的動作。假如要調用物件方法時可以這麼寫：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">obj.f();</code></pre>
        </div>
        <p>例如：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="abdebbO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: object 6">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/abdebbO">
            JS-learn: object 6</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>當然，我們也可以先定義好函式，再將其指定給物件裡的某屬性。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">function demo(e) {
    document.write(e);
}

var obj = {
    f: demo
};

obj.f("Hello world!");</code></pre>
        </div>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="mdVNyea" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: object 7">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/mdVNyea">
            JS-learn: object 7</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
    </div>
    <div class="text-block" id="act5">
        <h2>五、參考資料</h2>
        <dl>
            <dd><a href="https://www.books.com.tw/products/0010744702" target="_blank">《JavaScript & JQuery：網站互動設計程式進化之道》</a></dd>
            <dd><a href="http://www.kangting.tw/2013/12/javascript-8.html" target="_blank">JavaScript 快速入門（8/10）－ 物件</a></dd>
            <dd><a href="https://www.fooish.com/javascript/object.html" target="_blank">JavaScript Object (物件)</a></dd>
            <dd><a href="https://ithelp.ithome.com.tw/articles/10193605" target="_blank">JavaScript - 物件 與 屬性</a></dd>
            <dd><a href="https://wcc723.github.io/javascript/2017/12/09/javascript-object/" target="_blank">JavaScript 就是一堆物件的概念</a></dd>
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