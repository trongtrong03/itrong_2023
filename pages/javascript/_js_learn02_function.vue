<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="18" fileType="learnJs" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、為什麼需要函式？</a></li>
            <li><a href="#act2">二、如何定義函式？</a></li>
            <li><a href="#act3">三、xxx</a></li>
            <li><a href="#act4">四、xxx</a></li>
            <li><a href="#act5">五、總結</a></li>
            <li><a href="#act6">六、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <blockquote>
            <p>A JavaScript function is a block of code designed to perform a particular task.</p>
            <p><br></p>
            <p>A JavaScript function is executed when "something" invokes it (calls it).</p>
        </blockquote>
        <p>以上原文引述 <a href="https://www.w3schools.com/js/js_functions.asp" target="_blank">w3schools</a> 對 JavaScript「函式」一詞的描述，意指「函式是一段被設計用來執行特定任務的程式碼區塊，當『某事』調用（invokes）它時，該函式就會被執行」。</p>
        <p>若要用日常生活的例子來形容，假設今天我們養了一條名字叫阿比的狗，每天都需要執行餵食、帶出去散步、幫忙鏟屎、擼毛...等事情，我們興許會用「照顧阿比」來統納這一連串的動作。站在 JavaScript 角度來看，「照顧阿比」這整個過程就可以稱為一個函式，其函式名稱就叫做「照顧阿比」，而餵食、散步、鏟屎等例行事項就是函式裡面要執行的程式，當我們安排每天行程表（某事）的時候，或是當別人問我們每天都在做些什麼事情（某事）的時候，便可以直接用「照顧阿比」來簡述（調用），而不用鉅細靡遺地把所有細項都寫出來，這就是函式的目的，也是它的好處──簡化程式碼，而且也能重複被調用。</p>
        <p>當然函式也沒有這麼單純，從定義到方法，還有傳入的參數、調用...等等，有很多東西值得深入探討，本篇文章主題將著重於函式各項知識及運用的詳細記錄。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、為什麼需要函式？</h2>
        <p>部份聰明的人或許已經從前言列舉的「照顧阿比」範例中推敲出 JavaScript 為什麼會需要函式來處理程式腳本，不過在這個章節還是詳細說明一下。在哲宇老師的 JavaScript 教程曾經說過，程式開發者寫程式時應該避免以下三件事情：「重複相同程式碼」、「無規劃 / 命名陳述目的」、「無法重複使用」。這些不好的撰寫方式都會導致程式執行效率不佳或帶來維護不易的麻煩，舉例來說：</p>
        <figure>
            <img src="/images/learn/js/learn-function-1.jpg">
        </figure>
        <p>上方的範例示意圖裡存在三塊相同的重複程式碼（黑色方塊），當有一天需要針對某部份（紅色方塊）進行修改時，就得重複三次相同的作業流程。如果只有寥寥數行可能不覺得有什麼，假如修改範圍多達數十行，又或者其重複使用的地方很多，勢必需要投注大量的時間成本在同樣的事情上。然而，如果我們能將這些重複的程式碼「獨立」出來，使其可以被統一集中管理，並使其模組化，那麼就可以避免重複編寫一樣的程式，同時又可以在不同的程式碼功能重複呼叫它，大幅度增加程式的效能與易讀性。實現此一理想的方法，JavaScript 稱之為「函式」。</p>
        <figure>
            <img src="/images/learn/js/learn-function-2.jpg">
            <figcaption>利用函式來處理重複使用的程式碼。</figcaption>
        </figure>
    </div>

    <div class="text-block" id="act5">
        <h2>五、總結</h2>
        <p>回顧本篇文章，精簡總結一下我們從變數身上學到哪些東西：</p>
        <h5>1. xxx</h5>
        <ul>
            <li>xxxx。</li>
        </ul>
        <p><br></p>
        <p>至於本篇文章提到的 JavaScript 常見名詞術語有以下這些，但有些術語所代表的技術或知識已經超過本篇主題的範疇，礙於篇幅因此沒有辦法太深入探討，如有需要可以循著原詞單字順藤摸瓜去搜尋更專業、完整的教學文章：</p>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f1">名詞</div>
                    <div class="f-f1">中譯</div>
                    <div class="f-f3">說明</div>
                </div>
                <div class="f-row">
                    <div class="f-f1">Function</div>
                    <div class="f-f1">函式</div>
                    <div class="f-f3">也有人稱為「函數」，是構成 Javascript 的基本要素之一，它將一系列的敘述句組合起來，以執行一項特定的工作。</div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-block" id="act6">
        <h2>六、參考資料</h2>
        <dl>
            <dd><a href="https://www.books.com.tw/products/0010744702" target="_blank">《JavaScript & JQuery：網站互動設計程式進化之道》</a></dd>
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