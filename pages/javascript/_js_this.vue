<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="14" fileType="learnJs" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、JavaScript 的繼承機制</a></li>
            <li><a href="#act2">二、</a></li>
            <li><a href="#act3">三、</a></li>
            <li><a href="#act4">四、</a></li>
            <li><a href="#act5">五、</a></li>
            <li><a href="#act6">六、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <p>在電腦程式語言的世界中，<em>this</em> 通常用來參照當前執行上下文中的物件或實例（instance）。其主要作用是允許開發者在函式或方法裡訪問和操作該物件的屬性與方法。這個關鍵字的具體作用和行為方式可能略有不同，主要取決於所使用的程式語言。</p>
        <p>譬如 C# 或 C++，<em>this</em> 用於在類別的方法內引用類別自身的成員，以區分類別成員和相同名稱的參數或局部變數。又或者像 Java、Python 等物件導向程式語言，<em>this</em> 用於在類別中引用「當前」實例（物件）的屬性和方法，這有助於區分實例變數和類別變數，並確保正確訪問實例特有的資訊。</p>
        <p>然而，<em>this</em> 到了 JavaScript 反而變成複雜的存在，因為我們能在任何地方存取到它，基本取決於函式式如何被調用的，它用於訪問當前函式執行的上下文，可能是全局物件（當在全局作用域中調用函式時）、調用該函式的物件（當作為方法調用時），又或者透過 <em>.call()</em>、<em>.apply()</em> 等方式，這些不同的調用方式導致 <em>this</em> 的行為在不同情況下可能會有所不同，最終指向不同的對象或值。</p>
        <p>總而言之，本篇文章的主題將要來探討 JavaScript 的 <em>this</em> 用法，雖說如此，但要真正了解它之前，我們可能還需要先認識 JavaScript 物件導向及原型鏈等概念，才能更容易地幫助我們理解 JavaScript 複雜的 <em>this</em> 機制。廢話不多說，以下進入正題。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、JavaScript 的繼承機制</h2>
        <p>JavaScript 開發者 Brendan Eich 在一開始設計這個程式語言的時候，只是想要一個簡單的程式操作可以處理瀏覽器與網頁之間互動的需求，對一個簡易的程式語言來說，並不太需要「繼承」機制。所謂的「繼承」，指的是程式語言中，允許一個類別（或物件）繼承另一個類別（或物件）的特性，包括屬性和方法。這種繼承機制使得開發者可以重用現有的程式碼，並建立層次結構，以更有效地組織和管理程式碼。</p>
        <p>不過由於當時的時空背景 1994 年正處於面向物件編程（object-oriented programming，OOP）最興盛的時期，而繼承則是面向物件編程中很重要的一項概念，作為所有數據類型都是「物件」（object）的 Javascript 而言，這一點與 JAVA 十分相似，但 JAVA 是典型的面向物件編程語言，其所有程式都是在建立在「類別」（class）與「物件」（object）概念之上，Javascript 也必須有一套機制將所有物件聯繫起來，所以，Brendan Eich 最終還是選擇在 Javascript 設計繼承的概念。</p>
        <p>Brendan Eich 在設計階段時候，考慮到 C++ 與 JAVA 都是使用 <em>new</em> 的命令來生成實例，舉例來說，這是 C++ 實例的創建方法：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-cpp">ClassName *object = new ClassName(param);</code></pre>
        </div>
        <p>JAVA 則是：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-java">Foo foo = new Foo();</code></pre>
        </div>
        <blockquote>
            <p>在 Java 中，實例（instance）通常指的是類別（class）的一個具體對象（object）。當你創建一個類別的物件時，你實際上創建了這個類別的一個實例。</p>
            <p>例如，如果有一個名為「Car」的類別，你可以創建該類別的多個實例，每個實例代表一輛不同的汽車。每個「Car」實例都有自己的屬性（例如品牌、型號、顏色）和方法（例如啟動、停止、加速）。</p>
        </blockquote>
        <p>因此，Brendan Eich 便將 <em>new</em> 命令也引入到了 Javascript，用來讓原形對象物件建立新的實例對象。然而，Javascript 並沒有類別（class）的概念，這是 Brendan Eich 當初並沒有考慮在 Javascript 引用類別概念而遺留的鍋，興許是他當時只將 Javascript 定位在一個簡單的程式語言，不想徒增初學者入門難度之緣故。總而言之，沒有「類別」的概念，要如何表示原型對象呢？</p>
        <p>Brendan Eich 從 C++ 與 JAVA 使用 <em>new</em> 命令時會調用類別建構函式（constructor）獲得靈感，他將其做簡化設計，讓 Javascript 在建立新的物件時，<em>new</em> 後面跟的不是類別，而是建構函式。例如我們現在建立一個名稱為「Car」的建構函式，用來表示該物件原型：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">function Car(name){
    this.name = name;
}</code></pre>
        </div>
        <p>所謂的建構函式，其實就是一個普通的函式，只不過其內部使用了 <em>this</em> 關鍵字，當我們對建構函式使用 <em>new</em> 就能建立新的實例，並且經由 <em>this</em> 將變數綁定在實例物件身上。</p>
        <p>在這個原型物件建構函式中，我們的「Car」建構函式接受了一個名為 <em>name</em>的參數，並將其賦值給 <em>this.name</em>屬性。</p>
        <p>我們可以透過 <em>new</em> 建立新的實例，而他的原型對象就是「Car」：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var car1 = new Car("大白");

console.log(car1.name);   // 大白</code></pre>
        </div>
        <p>當我們使用 <em>new</em> 關鍵字創建新的實例時，它實際上執行了以下操作：</p>
        <ol>
            <li>建立一個新的空物件。</li>
            <li>將新物件的內部屬性 [[Prototype]] 設置為建構函式的原型物件，此為實現繼承的機制。</li>
            <li>執行建構函式裡的程式碼，此時其內部的關鍵字 <em>this</em> 指向新建立的空物件。</li>
            <li>返回新創建的物件。</li>
        </ol>
        <p>綜觀上述流程，可以歸納出 <em>this.name</em> 的設置將會影響新建立對象的 <em>name</em> 屬性，因此 <em>car1.name</em> 的值等於「大白」。</p>
        <p><br></p>
        <p>只不過用建構函式建立實例物件有一個缺點，那就是無法共享屬性和方法。例如我們在原型物件中建立一個共有屬性 <em>color</em>：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">function Car(name){
    this.name = name;
    this.color = "白色";
}</code></pre>
        </div>
        <p>然後我們新建立兩個實例：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var car1 = new Car("大白");
var car2 = new Car("二白");</code></pre>
        </div>
        <p>雖然繼承同一個原型物件，不過這兩個新實例的 <em>color</em> 屬性是獨立的，修改其中一個實例的值，並不會影響另一個：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var car1 = new Car("大白");
var car2 = new Car("二白");

car1.color = "黑色";

console.log(car1.color);    // 黑色
console.log(car2.color);    // 白色</code></pre>
        </div>
        <p>這意味著每一個創建的實例物件，都有自己屬性和方法的副本，不僅無法做到資料共享，也會造成資源上的浪費，因為每建立一個新的實例，就必須為那些重複的屬性或方法，多佔用一些記憶體空間。有鑑於此狀況，Brendan Eich 決定為建構函式設置一個名為 <em>prototype</em> 屬性，這個屬性是每個函式都具有的特殊屬性，允許我們添加屬性或方法到構造函式的原型物件上，從而使這些屬性、方法能夠被該構造函式所創建的物件繼承。新的實例物件一旦被創建，都將會自動引用 <em>prototype</em> 裡定義的屬性與方法，換句話說，就是讓那些重複的屬性或方法，在記憶體中只建立一次，然後讓所有實例物件都指向它。</p>
        <p>說這麼多還是直接看例子比較好理解，我們將前一個範例以 <em>prototype</em> 進行改寫：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">function Car(name){
    this.name = name;
}

Car.prototype = { color: "白色" };

var car1 = new Car("大白");
var car2 = new Car("二白");

console.log(car1.color);    // 白色
console.log(car2.color);    // 白色</code></pre>
        </div>
        <p>現在 <em>color</em> 屬性已經放在 <em>prototype</em> 物件之中，是後續其他新創建的實例所共享的，如果這時我們更改了 <em>prototype</em> 物件裡面 <em>color</em> 的值，其他實例的值也會同時進行變更：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">Car.prototype.color = "綠色";

console.log(car1.color);    // 綠色
console.log(car2.color);    // 綠色</code></pre>
        </div>
        <p>當我們將屬性與方法定義在建構函式的 <em>prototype</em> 物件中，這意味著它們只會被保存一次，而不若最原先將共用屬性建立在原型物件的作法，會讓新建立的實例都複製一次共用的屬性，這種作法的好處可以減少記憶體的佔用，特別是在我們需要建立很大量的共用物件的時候。</p>
        <p>總結來說，由於所有實例物件共享同一個 <em>prototype</em> 物件，那麼在外界眼裡，<em>prototype</em> 物件彷彿就像這些實例物件的原型，乍看之下實例物件就好像「繼承」了 <em>prototype</em> 物件裡的屬性與方法，這就是 JavaScript 繼承機制的設計思想。</p>


    </div>
    
    <div class="text-block" id="act6">
        <h2>六、參考資料</h2>
        <dl>
            <dd><a href="https://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html" target="_blank">Javascript继承机制的设计思想</a></dd>
            <dd><a href="https://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html" target="_blank">Javascript 的 this 用法</a></dd>
            <dd><a href="https://github.com/aszx87410/blog/issues/18" target="_blank">該來理解 JavaScript 的原型鍊了</a></dd>
            <dd><a href="https://blog.techbridge.cc/2019/02/23/javascript-this/" target="_blank">淺談 JavaScript 頭號難題 this：絕對不完整，但保證好懂</a></dd>
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