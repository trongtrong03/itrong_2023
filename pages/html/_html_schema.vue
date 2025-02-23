<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="2" fileType="learnHtml" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、什麼是結構化標記</a></li>
            <li><a href="#act2">二、屬性說明</a></li>
            <li><a href="#act3">三、Google 結構化資料標記協助工具</a></li>
            <li><a href="#act4">四、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <p>長期接觸網頁相關工作的人員都一定聽過一個詞：「SEO」，究竟什麼是「SEO」？其完整全名為 Search Engine Optimization，意為「搜尋引擎優化」（或說搜尋引擎最佳化）。如果要簡單描述它的用途，即專業人員在網站導入一些技術或為網頁進行優化作業，以提升網站的關鍵字排名，幫助使用者在瀏覽器輸入關鍵字時，能更優先看到該網站出現在搜尋結果的前面位置。</p>
        <p>隨著 SEO 日益獲得重視，HTML 對於元素標籤的用法規範也越趨兼顧 SEO，例如 <em>&lt;h1&gt;</em> 代表網頁最主要的大標，單一網頁應當只存在一個 <em>&lt;h1&gt;</em>；又或者是在 HTML <em>&lt;head&gt;</em> 處添加大量的 <em>&lt;meta&gt;</em> 標籤定義網站的各項資訊，提供自身關鍵字的可見度。SEO 的諸多云云就留待未來有更多涉略時再來筆記，現階段我們只要知道 SEO 在網頁世界裡扮演舉足輕重的角色即可。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、什麼是結構化標記</h2>
        <p>儘管正確地使用 HTML 元素編寫網頁對搜尋優化已有幫助，但如果面對使用者想搜尋更精確的關鍵字，例如某某顏色（紅色、綠色...）、某某價格範圍（0 ~ 5000）等，單純的 HTML 標籤就顯得較為不足，於是後來 Google、Bing、Yandex 和 Yahoo! 等企業合作推出「資料結構化」的概念，透過為 HTML 標籤添加特定標記屬性，進一步提升關鍵字搜尋的最佳結果。</p>
        <p><a href="https://schema.org/" target="_blank">Schema.org</a> 就是集上述四家企業大成，共同訂定結構化標記的網站資源，網路上也可以搜尋到<a href="https://schema.org.cn/docs/index.html" target="_blank">中文化</a>的版本，然而距離前次更新已經要追溯至 2012 年，所以如果要獲取最新資訊，最好還是透過原文官方文件來取得。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;div&gt;
    &lt;h1&gt;《奇異果博士》&lt;/h1&gt;
    &lt;span&gt;類型：動作&lt;/span&gt;
    &lt;span&gt;演員：奇異果、蘋果、鳳梨&lt;/span&gt;
    &lt;span&gt;&lt;a href="#0"&gt;搶先看&lt;/a&gt;&lt;/span&gt;
&lt;/div&gt;</code></pre>
        </div>
        <p>這是未添加結構化標記（Schema）的 HTML 程式碼片段，也就是平常我們網頁開發的標準結構，但導入 Schema 概念後，同樣的程式碼片段就會變成如下：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;div itemscope itemtype="http://schema.org/Movie"&gt;
    &lt;h1 itemprop="name"&gt;《奇異果博士》&lt;/h1&gt;
    &lt;span itemprop="genre"&gt;類型：動作&lt;/span&gt;
    &lt;span itemprop="director"&gt;演員：奇異果、蘋果、鳳梨&lt;/span&gt;
    &lt;span itemprop="trailer"&gt;&lt;a href="#0"&gt;搶先看&lt;/a&gt;&lt;/span&gt;
&lt;/div&gt;</code></pre>
        </div>
        <p>雖然程式碼看起來變多了，但也相對更明瞭元素裡面的內容存放著什麼樣的資料。有關 Schema 的語法放在下一個章節進行介紹。</p>
    </div>
    <div class="text-block" id="act2">
        <h2>二、屬性說明</h2>
        <p>常見的 Schema 屬性可見下表：</p>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f0">屬性</div>
                    <div class="f-f1">說明</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>itemscope</em></div>
                    <div class="f-f1">表示此標籤所在的區域及包含在其底下的階層，是 <em>itemtype</em> 某項特定的訊息。</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>itemtype</em></div>
                    <div class="f-f1">決定 Schema 的型態，若不加此行（意即單只有 <em>itemscope</em>），則會被認為是未知分類，如此對搜尋引擎的幫助非常有限。<br>可參考官網釋出的列表：<a href="http://schema.org.cn/CreativeWork.html" target="_blank">Schema CreativeWork</a></div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>itemprop</em></div>
                    <div class="f-f1">為每個條目增加屬性，每個 <em>itemtype</em> 可使用的 <em>itemprop</em> 也許會有些不同。</div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-block" id="act3">
        <h2>三、Google 結構化資料標記協助工具</h2>
        <p>我們可以不用自己動手去設定每一個標籤的結構化標記，身為推廣結構化標記開發商之一，Google 已有提供線上工具「<a href="https://www.google.com/webmasters/markup-helper/u/0/" target="_blank">結構化資料標記協助工具</a>」，幫助開發者快速產生標記化後的程式碼。以下介紹 Google 結構化資料標記協助工具的操作流程：</p>
        <h6>1. 選擇標記類型並輸入網頁內容</h6>
        <figure>
            <img src="/images/learn/html/schema-1.jpg">
        </figure>
        <p>首先選擇要添加結構化資料的文檔類型（網站或電子郵件），如果選擇「網站」，可以直接貼上目標網頁的網址，或是 HTML 原始碼。這裡我用「餐廳」作為此次練習的資料類型，圈選「餐廳」的核選按鈕，並在 HTML 處貼上下方程式碼片段：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;div&gt;
    &lt;h1&gt;消波塊水餃&lt;/h1&gt;
    &lt;p&gt;手工現包現做，內餡紮實又多汁，挑戰幸福味蕾的極限。&lt;/p&gt;
    &lt;p&gt;
        &lt;span&gt;台中市&lt;/span&gt;
        &lt;span&gt;大甲區&lt;/span&gt;
        &lt;span&gt;這條路那條巷一段一弄一號&lt;/span&gt;
    &lt;/p&gt;
    &lt;p&gt;營業時間：平日9:00-17:00&lt;/p&gt;
    &lt;p&gt;聯絡電話：(04) 2444-1744&lt;/p&gt;
&lt;/div&gt;</code></pre>
        </div>
        <p><br></p>
        <h6>2. 標記資料</h6>
        <figure>
            <img src="/images/learn/html/schema-2.jpg">
        </figure>
        <p>來到第二步，會看到網頁將輸入網址或 HTML 程式碼的內容張貼至左側區域裡，此時就可以為每一個標籤添加 Schema 標記，點擊目標元素，瀏覽器隨即自動彈出標記資料屬性的清單：</p>
        <figure>
            <img src="/images/learn/html/schema-3.jpg">
        </figure>
        <p>依序為要標記的內容選擇相符的資料屬性，以下是大致上的標記結果：</p>
        <figure>
            <img src="/images/learn/html/schema-4.jpg">
        </figure>
        <p>確認標記的資料沒有問題後，就可以按下右上方的「建立 HTML」按鈕了。</p>
        <p><br></p>
        <h6>3. 檢視標記結果，選擇欲使用的格式</h6>
        <p>Google 結構化資料標記協助工具提供兩種下載格式，一種是「JSON-LD」（JavaScript Object Notation for Linked Data），是一種使用 JSON 格式的結構化標記資料；另一種則是「維資料」格式也就是 HTML 的標準語法。</p>
        <figure>
            <img src="/images/learn/html/schema-5.jpg">
        </figure>
        <p>兩者取其一即可，可以從上方按鈕列直接下載結果頁面，也可以直接反白選取起來複製到自己網頁中，取代原本尚未執行標記化之前的程式碼片段。</p>
        <figure>
            <img src="/images/learn/html/schema-6.jpg">
        </figure>
        <p>最後按下「完成」按鈕，協助工具將跳出「後續步驟」的提醒畫面，我們可以繼續其他頁面的結構標記作業，或是執行測試。</p>
        <figure>
            <img src="/images/learn/html/schema-7.jpg">
        </figure>
        <p><br></p>
        <h6>4. 程式碼標記測試</h6>
        <p>Google 的<a href="https://www.google.com/webmasters/markup-helper/u/0/" target="_blank">結構化資料標記協助工具</a>主要是提供程式碼結構標記的服務，實作完之後的測試也是相當重要的環節，我們可以使用同樣由 Google 提供的<a href="https://search.google.com/structured-data/testing-tool#" target="_blank">結構化資料測試工具</a>，驗證前面生成的結構化資料是否正確，尋求任何需要改善的建議。</p>
        <figure>
            <img src="/images/learn/html/schema-8.jpg">
        </figure>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;html&gt;
&lt;head&gt;&lt;/head&gt;
&lt;body&gt;
    &lt;div itemscope itemtype="http://schema.org/Restaurant"&gt;
        &lt;h1 itemprop="name"&gt;消波塊水餃&lt;/h1&gt;
        &lt;p&gt;手工現包現做，內餡紮實又多汁，挑戰幸福味蕾的極限。&lt;/p&gt;
        &lt;p itemprop="address" itemscope itemtype="http://schema.org/PostalAddress"&gt;
            &lt;span itemprop="addressLocality"&gt;&lt;span&gt;台中市&lt;/span&gt;
            &lt;span&gt;大甲區&lt;/span&gt;&lt;/span&gt;
            &lt;span itemprop="streetAddress"&gt;這條路那條巷一段一弄一號&lt;/span&gt;
        &lt;/p&gt;
        &lt;p itemprop="openingHoursSpecification" itemscope itemtype="http://schema.org/OpeningHoursSpecification"&gt;營業時間：平日&lt;span itemprop="opens" content="請在這裡插入有效的 ISO 8601 日期/時間。例如：2015-07-27 或 2015-07-27T15:30"&gt;9:00-17:00&lt;/span&gt;&lt;/p&gt;
        &lt;p&gt;聯絡電話：&lt;span itemprop="telephone"&gt;(04) 2444-1744&lt;/span&gt;&lt;/p&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
        </div>
        <p>上方這段程式碼是協助工具最後生成的結果，我們將它貼入測試工具的「程式碼片段」的輸入區域中，接著點擊「執行測試」，經分析後測試工具就會回報測試結果：</p>
        <figure>
            <img src="/images/learn/html/schema-9.jpg">
        </figure>
        <p>右側區域會展示程式碼的測試結果，並詳細告知錯誤及警告的部分，方便開發者後續進行改善。</p>
        <p>以上就是 Schema 及相關線上協助工具的粗略介紹，為自己增廣見聞的同時，也希望能成功達到拋磚引玉的效果，幫助更多有興趣的人更了解 Schema 的相關知識。</p>
    </div>
    <div class="text-block" id="act4">
        <h2>四、參考資料</h2>
        <dl>
            <dd><a href="https://schema.org/" target="_blank">schema.org</a></dd>
            <dd><a href="https://seobook.tw/schema/" target="_blank">Schema – 結構化標記</a></dd>
            <dd><a href="https://blog.user.today/html5-semantic-tag-and-microdata-seo/" target="_blank">https://blog.user.today/html5-semantic-tag-and-microdata-seo/</a></dd>
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
