<template>
    <NuxtLayout name="article">
        <TempJs :propValue="10" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、DOM 簡介</a></li>
            <li><a href="#act2">二、常見屬性</a></li>
            <li><a href="#act3">三、常見方法</a></li>
            <li><a href="#act4">四、參考資料</a></li>
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
        <h2>二、常見屬性</h2>
        <p>以下列出一些常見的對象屬性介紹簡表，然後會再對其中幾個屬性作補充說明。</p>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f1"></div>
                    <div class="f-f3">用途</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.width</em></div>
                    <div class="f-f3">取得網頁的寬度。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.title</em></div>
                    <div class="f-f3">取得網頁的標題內容。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.bgColor</em></div>
                    <div class="f-f3">設定網頁的背景顏色。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.fgColor</em></div>
                    <div class="f-f3">設定網頁的前景顏色（文字顏色）。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.linkColor</em></div>
                    <div class="f-f3">設定網頁超連結的顏色。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.alinkColor</em></div>
                    <div class="f-f3">設定滑鼠經過網頁超連結時的顏色。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.vlinkColor</em></div>
                    <div class="f-f3">設定點擊過的網頁超連結顏色。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.URL</em></div>
                    <div class="f-f3">取得網頁的網址。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.cookie</em></div>
                    <div class="f-f3">查詢或設定網頁中的所有 cookie。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>document.domain</em></div>
                    <div class="f-f3">查詢網頁的域名。</div>
                </div>
            </div>
        </div>
        <p><br></p>
        <h3>document.width：</h3>
        <p>取得 HTML 網頁中 <em>&lt;body&gt;</em> 元素的寬度。然而在現今主流瀏覽器已不支援這個屬性，若要取得網頁文件的寬度可使用以下三種替代方案：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">document.body.clientWidth              // &lt;body&gt; 的寬度
document.documentElement.clientWidth   // &lt;html&gt; 的寬度
window.innerWidth                      // 視窗的寬度</code></pre>
        </div>
        <p><br></p>
        <h3>document.title：</h3>
        <p>取得網頁文件的標題內容，此處的標題指的是 <em>&lt;head&gt;</em> 中的 <em>&lt;title&gt;</em> 屬性，也就是瀏覽器上方網頁頁籤裡的名稱。</p>
        <p><br></p>
        <h3>document.bgColor：</h3>
        <p>可用來設定網頁文件的背景顏色。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">function demo(){
    document.bgColor="#CCC";
}
demo();</code></pre>
        </div>
        <p><br></p>
        <p>除了透過 <em>document</em> 指定對象屬性外，也可以經由 <em>body</em> 與 <em>location</em> 這兩個子對象以進一步取得對象屬性。</p>

<!-- https://www.wibibi.com/info.php?tid=238
https://www.w3school.com.cn/htmldom/coll_form_elements.asp
https://www.w3school.com.cn/jsref/dom_obj_document.asp
https://blog.xuite.net/trcy/vie/17670722-->
    </div>
    <div class="text-block" id="act3">
        <h2>三、常見方法</h2>
    </div>
    <div class="text-block" id="act4">
        <h2>四、參考資料</h2>
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
    },

    data() {
        return {
            isActive: 0,
        }
    },
}
</script>