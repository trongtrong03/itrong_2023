<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="8" fileType="learnDev" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、Google Chrome</a></li>
            <li><a href="#act2">二、Firefox</a></li>
            <li><a href="#act3">三、IE Edge</a></li>
            <li><a href="#act4">四、Opera</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <p>儘管作業系統本身就有內建截圖功能，但一般情況下僅能擷取螢幕顯示範圍內的畫面，若只想裁切畫面中的部分區域，或是想擷取整個網頁的完整頁面，通常得借助第三方工具軟體的幫助，像是 <a href="https://picpick.app/zh-tw/" target="_blank">PicPick</a>、<a href="https://app.prntscr.com/zh-cn/index.html" target="_blank">Lightshot</a>、<a href="https://www.screenpresso.com/" target="_blank">Screenpresso</a>...等熱門截圖工具輔助，方能達到目的。</p>
        <p>事實上，假如你今天想截圖的對象是瀏覽器中的網頁，倒不必假手第三方工具的協助，部分瀏覽器本身就有支援螢幕截圖的功能，且步驟通常也不繁瑣，以下一起來看看如何操作。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、Google Chrome</h2>
        <h6>1. 按下「F12」啟用開發者模式</h6>
        <p>如果使用的是 MAC 電腦的話則是 <em>⌘Command</em> + <em>Option</em> + <em>I</em>。</p>
        <figure>
            <img src="/images/learn/dev/screenshot/screenshot-1.jpg">
        </figure>
        <p><br></p>
        <h6>2. 按下「CTRL + Shift + P」開啟搜尋功能</h6>
        <figure>
            <img src="/images/learn/dev/screenshot/screenshot-2.jpg">
        </figure>
        <p><br></p>
        <h6>3. 於搜尋框輸入「capture」關鍵字</h6>
        <figure>
            <img src="/images/learn/dev/screenshot/screenshot-3.jpg">
        </figure>
        <p>在搜尋框中輸入 capture 字串後，下方搜尋結果列表即會列出可下達的指令，其中包含區域截圖（Area screenshot）與完整截圖（Full size screenshot）。選擇 Area screenshot 時，鼠標在網頁畫面裡會呈現十字錨點狀，此時只需壓住滑鼠左鍵圈選想要擷取的部分，鬆開後就會自動依圈選範圍進行裁切並儲存成影像。</p>
        <figure>
            <img src="/images/learn/dev/screenshot/screenshot-4.jpg">
            <figcaption>透過 Area screenshot 可自行圈選畫面截圖範圍。</figcaption>
        </figure>
        <p>而 Full size screenshot 則會直接將一整個網頁畫面轉存輸出成圖檔。</p>
        <figure>
            <img src="/images/learn/dev/screenshot/screenshot-5.jpg">
            <figcaption>透過 Full size screenshot 功能轉存的影像畫面。</figcaption>
        </figure>
    </div>
    <div class="text-block" id="act2">
        <h2>二、Firefox</h2>
        <p>Firefox 啟用截圖功能的方式較簡單，其快捷鍵為 <em>Ctrl</em> + <em>Shift</em> + <em>S</em>。</p>
        <figure>
            <img src="/images/learn/dev/screenshot/screenshot-6.jpg">
            <figcaption>呼叫截圖工具後即出現功能面板。</figcaption>
        </figure>
        <p>注意右上角有兩顆主功能按鈕可以選擇，分別是儲存目前可視範圍內的畫面，以及儲存完整的網頁畫面內容。</p>
        <figure>
            <img src="/images/learn/dev/screenshot/screenshot-7.jpg">
        </figure>
        <p>比較有趣的是，除了可透過滑鼠拖拉的方式擷取畫面部分區域內容，Firefox 亦自動感知網頁中各區塊元素，讓使用者可以針對特定區塊儲存成影像畫面，如此一來就不用再另外進行裁切，是相當便利好用的功能。</p>
        <p>假設你現在手邊沒有鍵盤，或是忘記要按哪幾顆快捷鍵，也可以通過滑鼠右鍵展開快速功能選單，從中選擇「拍攝畫面擷取」：</p>
        <figure>
            <img src="/images/learn/dev/screenshot/screenshot-8.jpg">
        </figure>
        <p>或是可以在工具列的「更多工具」裡選擇「自定義工具欄」，將截圖功能的圖示拖曳到工具列上，爾後只需要直接在工具列上點擊該圖示，就能呼叫畫面擷取工具。</p>
        <figure>
            <img src="/images/learn/dev/screenshot/screenshot-9.jpg">
        </figure>
    </div>
    <div class="text-block" id="act3">
        <h2>三、IE Edge</h2>
        <p>為人揶揄且詬病的 IE 已經是過去式了，現今微軟主打的 IE Edge 捲土重來，頗有一舉搶回最多用戶使用的瀏覽器寶座之氣勢。同樣 IE Edge 也有內建畫面截圖的功能，不過前提是你安裝的 Egde 版本必須在版本 94 以上。</p>
        <figure>
            <img src="/images/learn/dev/screenshot/screenshot-10.jpg">
            <figcaption>最新版本的 IE Edge。</figcaption>
        </figure>
        <p>Edge 網頁擷取工具的快捷鍵與 Firefox 相同，皆為 <em>Ctrl</em> + <em>Shift</em> + <em>S</em>。除此之外，也可以透過右鍵選單，以及右上角展開的工具列清單裡找到該功能項目。</p>
        <figure>
            <img src="/images/learn/dev/screenshot/screenshot-11.jpg">
        </figure>
        <p>同樣分為「擷取區域」與「擷取整頁」兩種模式，而 IE Edge 有別於另外兩大瀏覽器龍頭不同的地方，在於其除了儲存畫面外，還提供標記的功能，對於有需要為截圖添加簡易標記的使用者而言，就不需要另外開啟其他軟體進行標記，直接在瀏覽器擷取功能面板裡就能輕鬆搞定。</p>
        <figure>
            <img src="/images/learn/dev/screenshot/screenshot-12.jpg">
        </figure>
        <figure>
            <img src="/images/learn/dev/screenshot/screenshot-13.jpg">
        </figure>
        <figure>
            <img src="/images/learn/dev/screenshot/screenshot-14.jpg">
            <figcaption>繪圖功能面板裡提供多種顏色及畫筆粗細供使用者自行調整。</figcaption>
        </figure>
    </div>
    <div class="text-block" id="act4">
        <h2>四、Opera</h2>
        <p>雖然 Opera 使用者數量不若前三者龐大，但 Opera 瀏覽器的截圖快照功能的獨特性在於它可以將擷取的畫面轉存成 PDF 檔，若有這方面需求的使用者，不妨可以考慮看看。</p>
        <figure>
            <img src="/images/learn/dev/screenshot/screenshot-15.jpg">
            <figcaption>快照功能為網址列右側的照相機圖示。</figcaption>
        </figure>
        <p><br></p>
        <p>以上就是有關使用瀏覽器擷取網頁畫面的功能介紹，當然，瀏覽器擷取畫面的範圍僅限於瀏覽器本身網頁內容的畫面，如果要截取其它應用程式裡的內容，還是得透過特定的第三方軟體程式輔助，但單就一般要截錄網頁部分圖文內容的需求來說，透過瀏覽器內建的功能已是綽綽有餘了。</p>
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
