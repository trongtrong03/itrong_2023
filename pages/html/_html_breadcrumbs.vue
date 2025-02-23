<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="3" fileType="learnHtml" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、優點</a></li>
            <li><a href="#act2">二、導航分類</a></li>
            <li><a href="#act3">三、設計建議</a></li>
            <li><a href="#act4">四、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <p>我們很常在別人網站上看到主內容上方有一排告訴使用者當前網頁停留路徑的字串（例如「首頁 > 產品介紹 > XX分類」），它其實有個專業級的稱呼，叫做「麵包屑導航」（Breadcrumb Trail）。「麵包屑」一詞源自格林童話故事《糖果屋》的情節，內容描述一對遭遺棄在森林的孩童，試圖透過沿路布置的麵包屑尋找回家的路。這正好與網站指示客戶循序漸進、漸出的宗旨的導航輔助相吻合，故便以 Breadcrumb Trail 稱之。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、優點</h2>
        <p>麵包屑導航不僅幫助我們明確理解目前所在頁面於整個網站內的層級結構，同時也可以為網站大幅度提升 SEO 關鍵字搜尋優化的友好度。</p>
        <p>為網站添加麵包屑導航有以下好處：</p>
        <ol>
            <li>清楚展示網站層級，使用者可更直觀了解網站的結構。</li>
            <li>提供路徑的交互方式，方便使用者返回或連結到其它頁面。</li>
            <li>減少「返回」的操作次數，使用者若要到其他更高層級的頁面不需要太多返回的步驟。</li>
            <li>有利於 SEO，畢竟多次強調網站關鍵字，擴大了關鍵字的範圍。</li>
        </ol>
    </div>
    <div class="text-block" id="act2">
        <h2>二、導航分類</h2>
        <p>常見的麵包屑導航分類大體可歸類三種：</p>
        <h3>1. 位置型（Location）：</h3>
        <p>位置型的麵包屑導航是最被廣泛使用的，它展示目前所在頁面至首頁之間的所有階層，使用者可以非常清楚自己目前在網頁的位置，對網站整體結構也會有一定程度的掌握。</p>
        <figure>
            <img src="/images/learn/html/breadcrumbs-1.jpg">
        </figure>
        <p><br></p>
        <h3>2. 屬性型（Attribute）：</h3>
        <p>屬性型與位置型麵包屑導航基本類似，差別在於屬性型的導航模式會在當前頁面後方添加其他資訊，例如產品的類別、尺寸、顏色...等屬性。屬性型較常在購物網站或電商平台看到，因為它幫助使用者更精確理解不同產品之間的屬性關係。</p>
        <figure>
            <img src="/images/learn/html/breadcrumbs-2.jpg">
        </figure>
        <p><br></p>
        <h3>3. 路徑型（Path）：</h3>
        <p>路徑型的麵包屑導航會揭露使用者從起始頁面一路訪問到當前頁面的足跡，因此也有人稱之為「歷史路徑」。儘管此模式最貼近《糖果屋》童話故事的命名起源，但由於路徑型導航追本溯源的展示方式與「返回」功能幾乎無異，因此並不怎麼受歡迎，在今日幾乎也不怎麼看到有網站採用這種類型的導航方式。</p>
        <figure>
            <img src="/images/learn/html/breadcrumbs-3.jpg">
        </figure>
    </div>
    <div class="text-block" id="act3">
        <h2>三、設計建議</h2>
        <p>將麵包屑導航功能引入網站可說是好處多多，即便如此，要將其優勢完全展現仍建立在網頁設計師如何呈現其形式之上。關於麵包屑導航的設計，需要記住以下幾個建議：</p>
        <ol>
            <li>評估網站使用麵包屑導航功能的必要性？</li>
            <li>網站的層級結構最好清楚分明。</li>
            <li>各階層的字串連結最好都是有效連結。</li>
            <li>當前所在頁面的字串最好不添加連結。</li>
            <li>字串應簡潔不宜過長。</li>
            <li>使用分隔設計將各階層逐一區隔。</li>
            <li>包含首頁在內，導覽層級應避免超過五層以上。</li>
        </ol>
    </div>
    <div class="text-block" id="act4">
        <h2>四、參考資料</h2>
        <dl>
            <dd><a href="https://read01.com/QodoDa.html#.Xnm3CYgzY-U" target="_blank">網頁面包屑導航是什麼？</a></dd>
            <dd><a href="https://kknews.cc/zh-tw/code/8bvvmrg.html" target="_blank">什麼是麵包屑導航？—SEO相關知識</a></dd>
            <dd><a href="https://www.awoo.com.tw/blog/thankyou_breadcrumb_seo/" target="_blank">SEO基本功！麵包屑(Breadcrumbs)讓搜尋引擎愛上你</a></dd>
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
