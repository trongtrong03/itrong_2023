<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="10" fileType="learnJs" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、DOM 簡介</a></li>
            <li><a href="#act2">二、常見屬性和方法</a></li>
            <li><a href="#act3">三、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <p>前一篇主角的是 <b>BOM</b>，這一篇要來談的是 <b>DOM</b>。<b>DOM</b> 對網頁程式語言稍有涉略的人來說應該都不陌生，心想不就是一顆由許多 HTML 元素組成的樹嗎？雖說這樣總的的結論並不算錯，但若能更深入、全盤地了解 <b>DOM</b> 的觀念，會更能幫助我們理解 JavaScript 與瀏覽器之間的關係。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、DOM 簡介</h2>
        <p><b>DOM</b> 全名為 Document Object Model，直譯成中文一般都稱之為「文件物件模型」。在前一篇文章曾說到瀏覽器物件模型（<b>BOM</b>），其核心物件 <em>window</em> 底下還包含其他許多子物件，這之中也包含了 <em>document</em>，而這個 <em>document</em> 其實就是 <b>DOM</b>。我們可由下圖了解 <b>BOM</b> 與 <b>DOM</b> 之間的關聯性：</p>
        <figure>
            <img src="/images/learn/js/learn-dom-1.jpg">
        </figure>
        <p><em>document</em> 底下的物件即構成網頁的 HTML 元素，一個元素會由「標籤」與「內容」組成，而內容可以是文字，也可以是圖片，這些物件最終會形成一個樹狀結構，例如下圖：</p>
        <figure>
            <img src="/images/learn/js/learn-dom-2.jpg">
        </figure>
        <p><b>DOM</b> 的樹狀結構中的每一個資料皆可以稱為「節點」（Node），每一個節點皆為物件，因此也有人稱之為節點物件，這些節點物件擁有各自的屬性與方法。在往後的 <em>document</em> 屬性方法介紹中，我們將很容易看見一些字樣包含 <em>node</em> 的方法名稱。而由上面範例中我們可以歸納出四種節點的類型：</p>
        <h3>1. Document：</h3>
        <p>指的就是網頁文件本身，樹狀結構裡的所有節點都是從這裡向下展開。</p>
        <h3>2. Element：</h3>
        <p>指的是 HTML 各種標籤，例如 <em>&lt;body&gt;</em>、<em>&lt;h1&gt;</em>、<em>&lt;div&gt;</em> ...等族繁不及備載。</p>
        <h3>3. Text：</h3>
        <p>指的是由 HTML 標籤包裹起來的內容，通常是文字字串。</p>
        <h3>4. Attribute：</h3>
        <p>指的是各 HTML 標籤裡的屬性，例如 <em>id</em>、<em>class</em>、<em>style</em> 這些全域屬性（意指所有標籤都有的屬性），或者是 <em>href</em>、<em>src</em>、<em>type</em> ...等只有特定幾種標籤才擁有的屬性。</p>
        <p><br></p>
        <p>另外我們還要知道的是節點（Node）之間的關係，這在 <b>DOM</b> 遍歷中是很重要的觀念。而節點彼此關聯分為兩種：</p>
        <h3>1. 父子：</h3>
        <p>父子關係也就是上下層，節點垂直方向的上面一層為父層，稱為 Parent Node；下一層（裡面）則為子層，稱為 Child Node。</p>
        <h3>2. 兄弟：</h3>
        <p>兄弟關係則是指同一層水平方向之間的節點，指定對象節點的前一個節點為 Previous，後一個則是 Next。</p>
        <p><br></p>
        <p>總結來說，<b>DOM</b> 乃是由 W3C 制定的其中一種介面定義，目的是規範百家爭鳴的瀏覽器們能遵循其規則去設計瀏覽器，<b>DOM</b> 透過節點組成樹狀的文件結構，提供給 JavaScript 存取或改變文件的風格、內容，甚至是結構。所以回到多數人關心的問題：「<b>BOM</b> 與 <b>DOM</b> 的差異是什麼？」這兩者最大的區別在於 <b>BOM</b> 是 JavaScript 與瀏覽器之間溝通的窗口，各種屬性方法的操作不涉及網頁文件內容。而 <b>DOM</b> 則是讓 JavaScript 用來控制、改變網頁節點與內容的標準。</p>
        <p>根據 <a href="https://developer.mozilla.org/zh-TW/docs/Web/API/Document_Object_Model" target="_blank">MDN Web Docs</a> 的敘述，<b>DOM</b> 是 HTML、XML、SVG 等文件類型的程式介面，因此我們可以說我們常常使用 JavaScript 存取 <b>DOM</b>，但 <b>DOM</b> 本身卻不是 JavaScript 的一部份。接下來的兩個章節，筆者將以 JavaScript 的面向，分別介紹 <em>document</em> 有哪些常見的屬性及方法可以對 <b>DOM</b> 進行操作。</p>
    </div>
    <div class="text-block" id="act2">
        <h2>二、常見屬性和方法</h2>
        <p><em>document</em> 的 API 屬性與方法非常豐富，以下僅列出一些比較常見及常使用到的項目，如果想進一步了解全部的屬性，可以參考 <a href="https://developer.mozilla.org/zh-TW/docs/Web/API/Document_Object_Model" target="_blank">mdn web docs</a> 或 <a href="https://www.w3school.com.cn/jsref/dom_obj_document.asp" target="_blank">W3school</a> 的說明。</p>
        <p>屬性（Properties）通常指的是元素對象的特性或狀態，透過指定屬性，我們可以快速取得目標屬性的值，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">console.log(document.title);</code></pre>
        </div>
        <p>若以本站為例，我們將會在 Console 視窗中得到「iTrong work studio」的回傳結果。</p>
        <p>常見屬性：</p>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f1">屬性</div>
                    <div class="f-f2">說明</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.URL</em></div>
                    <div class="f-f2">取得網頁的完整網址（例如：https://google.com）</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.domain</em></div>
                    <div class="f-f2">取得網頁的網域名稱（例如：google）</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.cookie</em></div>
                    <div class="f-f2">取得或設置網頁的 Cookie</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.doctype</em></div>
                    <div class="f-f2">取得網頁的檔案類型（例如：&lt;!DOCTYPE&gt;）</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.documentElement</em></div>
                    <div class="f-f2">取得網頁的跟元素（通常是 <em>html</em>）</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.title</em></div>
                    <div class="f-f2">取得或設置網頁的標題</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.head</em></div>
                    <div class="f-f2">取得網頁的 <em>head</em> 元素</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.body</em></div>
                    <div class="f-f2">取得網頁的 <em>body</em> 元素</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.links</em></div>
                    <div class="f-f2">取得網頁所有的 <em>a</em> 元素</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.images</em></div>
                    <div class="f-f2">取得網頁所有的 <em>img</em> 元素</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.forms</em></div>
                    <div class="f-f2">取得網頁所有的 <em>form</em> 元素</div>
                </div>
            </div>
        </div>
        <p>另外還有與設置 CSS 有關的一系列 Document HTML Style，早前用 jQuery 修改樣式的時候寫法非常方便，用 <em>.css</em> 然後把原本 CSS 格式裡的樣式屬性直接搬進來改就好，但原生 JavaScript 透過 DOM 去指定的寫法則是採駝峰式命名，不若 CSS 以「-」隔開單字那樣直覺易懂。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">document.body.style.backgroundColor = "red";</code></pre>
        </div>
        <p>將網頁 <em>body</em> 的背景色設置為 <em>red</em> 紅色。</p>
        <p>基本上只要是 CSS 有的屬性，DOM 都可以指定的到，主要是差在使用時的寫法轉換，以下隨便列舉一些：</p>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f1">屬性</div>
                    <div class="f-f2">說明</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.background</em></div>
                    <div class="f-f2">設置或回傳指定對象的背景屬性（一行式聲明）</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.backgroundColor</em></div>
                    <div class="f-f2">設置或回傳指定對象的背景顏色</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.backgroundImage</em></div>
                    <div class="f-f2">設置或回傳指定對象的背景影像</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.border</em></div>
                    <div class="f-f2">設置或回傳指定對象的邊框屬性（一行式聲明）</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.borderWidth</em></div>
                    <div class="f-f2">設置或回傳指定對象的邊框寬度</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.borderColor</em></div>
                    <div class="f-f2">設置或回傳指定對象的邊框顏色</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.fontSize</em></div>
                    <div class="f-f2">設置或回傳指定對象的字級大小</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.height</em></div>
                    <div class="f-f2">設置或回傳指定對象的高度</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.lineHeight</em></div>
                    <div class="f-f2">設置或回傳指定對象的行高</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.margin</em></div>
                    <div class="f-f2">設置或回傳指定對象的外距（四個方向的一行式聲明）</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.padding</em></div>
                    <div class="f-f2">設置或回傳指定對象的內距（四個方向的一行式聲明）</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.position</em></div>
                    <div class="f-f2">設置或回傳指定對象的定位方法</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.textAlign</em></div>
                    <div class="f-f2">設置或回傳指定對象的水平對齊模式</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.transform</em></div>
                    <div class="f-f2">設置或回傳指定對象的變形效果</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.transition</em></div>
                    <div class="f-f2">設置或回傳指定對象的過渡效果（一行式聲明）</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.transitionTimingFunction</em></div>
                    <div class="f-f2">設置或回傳指定對象的過渡效果速度曲線</div>
                </div>
            </div>
        </div>
        <p>完整列表可參考 <a href="https://www.w3school.com.cn/jsref/dom_obj_style.asp" target="_blank">W3school HTML DOM Style 对象</a> 此頁說明。</p>
        <p><br></p>
        <p>方法（Methods）是指針對目標元素，指定執行特定任務的操作行為，譬如獲取、創造特定元素，添加事件監視器......等等。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">const element = document.getElementById("myBtn");
element.addEventListener("click", function() {
    document.getElementById("demo").innerHTML = "Hello World";
});</code></pre>
        </div>
        <p>像這個範例就動用了兩種 DOM 方法，分別是「取得指定元素 ID」<em>getElementById</em>以及「建立事件監視器」<em>addEventListener</em>。</p>
        <p>常見方法：</p>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f1">屬性</div>
                    <div class="f-f2">說明</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.getElementById(id)</em></div>
                    <div class="f-f2">取得符合 ID 名稱的指定元素</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.getElementsByClassName(className)</em></div>
                    <div class="f-f2">取得符合 class 名稱的指定元素</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.getElementsByTagName(tagName)</em></div>
                    <div class="f-f2">取得符合元素標籤名稱的指定元素</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.createElement</em></div>
                    <div class="f-f2">創造元素節點</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.appendChild</em></div>
                    <div class="f-f2">將節點添加在最後一個子元素之後</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.removeChild</em></div>
                    <div class="f-f2">刪除子節點</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.replaceChild</em></div>
                    <div class="f-f2">將新的節點替換掉子節點</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.write</em></div>
                    <div class="f-f2">將 HTML 或 JavaScript 程式碼寫入文件</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.click</em></div>
                    <div class="f-f2">滑鼠點擊事件</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.focus</em></div>
                    <div class="f-f2">取得焦點</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.blur</em></div>
                    <div class="f-f2">移除焦點</div>
                </div>
            </div>
        </div>
        <p>DOM 方法項目同樣族繁不及備載，想查找或深入認識的可以參考 <a href="https://www.w3school.com.cn/jsref/dom_obj_all.asp" target="_blank">W3school HTML DOM Element 对象</a> 此頁說明。</p>
        <p><br></p>
        <p>除了透過 <em>document</em> 指定對象屬性外，也可以經由 <em>body</em> 與 <em>location</em> 這兩個子對象以進一步取得對象屬性。</p>
    </div>
    <div class="text-block" id="act3">
        <h2>三、參考資料</h2>
        <dl>
            <dd><a href="https://www.happycoding.today/posts/43" target="_blank">JavaScript入門系列：BOM和DOM筆記</a></dd>
            <dd><a href="https://ithelp.ithome.com.tw/articles/10214769" target="_blank">JavaScript 初心者筆記: JS 內建物件 - 全域物件篇</a></dd>
            <dd><a href="https://ithelp.ithome.com.tw/articles/10191666" target="_blank">重新認識 JavaScript: Day 11 前端工程師的主戰場：瀏覽器裡的 JavaScript</a></dd>
            <dd><a href="https://ithelp.ithome.com.tw/articles/10235079" target="_blank">DAY 2 BOM 、 DOM 是什麼？</a></dd>
            <dd><a href="https://ithelp.ithome.com.tw/articles/10202689" target="_blank">Day03-深入理解網頁架構：DOM</a></dd>
            <dd><a href="https://medium.com/ck100pro/%E7%80%8F%E8%A6%BD%E5%99%A8%E7%9A%84%E7%89%A9%E4%BB%B6%E6%A8%A1%E5%9E%8B-bom-vs-dom-914552c81cdb" target="_blank">瀏覽器的物件模型：Bom vs Dom</a></dd>
            <dd><a href="https://www.fooish.com/javascript/dom/node-properties.html" target="_blank">JavaScript DOM Node Properties (DOM 節點物件的屬性)</a></dd>
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