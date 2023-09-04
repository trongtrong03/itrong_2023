<template>
    <NuxtLayout name="article">
        <TempJs :propValue="1" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act1">一、錯誤訊息</a></li>
            <li><a href="#act2">二、警告提示</a></li>
            <li><a href="#act3">三、其他疑難雜症</a></li>
        </ul>
    </div>
    <div class="text-block">
        <h2 id="act1">一、錯誤訊息</h2>
        <div class="text-accordin is-error">
            <div class="accordin-item" :class="isActive==1001 ? 'is-active' : ''">
                <div class="accordin-title" @click="isActive = 1001;">
                    <p>Uncaught ReferenceError: $ is not defined.</p>
                </div>
                <div class="accordin-content">
                    <p>語法中「$」這個符號並未被定義，當瀏覽器 Console 出現這個錯誤訊息，通常可能原因是 jQuery 官方的腳本文件並未引用至該頁面當中，請確認是否有將該檔案放在網站路徑資料夾內並正確地引用它，或是也可以透過 CDN 的方式，例如：</p>
                    <div class="text-code" v-pre>
                        <pre><code class="language-html">&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"&gt;&lt;/script&gt;</code></pre>
                    </div>
                    <p>假如已引用官方腳本文件，並且確認路徑可正確被讀取的情況下仍出現此錯誤訊息，另一種比較常見的可能是自定義的 jQuery 程式碼片段編寫於官方腳本文件被瀏覽器讀取之前，正確的順序應該是要先載入官方文件，然後接著才是自己寫的程式碼。例如：</p>
                    <div class="text-code" v-pre>
                        <pre><code class="language-html">&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"&gt;&lt;/script&gt;
&lt;script&gt;
    $(function () {
        $("button").click(function () {
            $("p").addClass("is-active");
        });
    });
&lt;/script&gt;</code></pre>
                    </div>
                </div>
                <button class="accordin-close" @click="isActive = 0;"></button>
            </div>
        </div>
    </div>
    <div class="text-block">
        <h2 id="act2">二、警告提示</h2>
        <div class="text-accordin is-warning">
        </div>
    </div>
    <div class="text-block">
        <h2 id="act3">三、其他疑難雜症</h2>
        <div class="text-accordin is-others">
            <div class="accordin-item" :class="isActive==3001 ? 'is-active' : ''">
                <div class="accordin-title" @click="isActive = 3001;">
                    <p>$ 是什麼？</p>
                </div>
                <div class="accordin-content">
                    <p><em>$</em> 這個符號在 jQuery 函式庫中其實就是 <em>jQuery</em> 的替代別稱，藉以省略每一次調用 jQuery 語法時都必須多打好幾個單字的麻煩。</p>
                </div>
                <button class="accordin-close" @click="isActive = 0;"></button>
            </div>
            <div class="accordin-item" :class="isActive==3002 ? 'is-active' : ''">
                <div class="accordin-title" @click="isActive = 3002;">
                    <p>使用 $document ready 與 $funcion 的迷思？</p>
                </div>
                <div class="accordin-content">
                    <p>我們習慣將 jQuery 自定義的語法包在 <em>$document ready</em> 裡面，例如：</p>
                    <div class="text-code" v-pre>
                        <pre><code class="language-javascript">$(document).ready(function() {
    $("button").click(function () {
        $("p").addClass("is-active");
    });
});</code></pre>
                    </div>
                    <p>此舉意義是確保 jQuery 程式碼必須在瀏覽器完全載入（load）完 HTML 後，才開始執行其程式內容，以避免 jQuery 搶在 HTML 完全載入之前就先被執行，結果找不到 DOM 進而發生錯誤的狀況。其實 JavaScript 也是相同道理，在純 JavaScript 語法中，會使用 <em>window.onload</em> 發法確認 HTML 裡的所有元素、資源都載入到瀏覽器後才執行函式內容。</p>
                    <p>至於 <em>$funcion</em> 寫法其實是一種簡寫方式，以下這兩種寫法皆等同 <em>$document ready</em>：</p>
                    <div class="text-code" v-pre>
                        <pre><code class="language-javascript">// 寫法一：
$(function(){
    ...
});

// 寫法二：
$().ready(function(){
    ...
});</code></pre>
                    </div>
                    <p>但通常以第一種寫法最為常見。</p>
                </div>
                <button class="accordin-close" @click="isActive = 0;"></button>
            </div>
            <div class="accordin-item" :class="isActive==3003 ? 'is-active' : ''">
                <div class="accordin-title" @click="isActive = 3003;">
                    <p>盡量使用鏈結操作來下指令</p>
                </div>
                <div class="accordin-content">
                    <p>jQuery 函式庫中有一種特別的用法，叫做「Chaining」，顧名思義是一種鏈結的概念，可以將我們於同一選擇器對像下達的複數指令一條接著一條串接起來，這麼做的好處在於可以減少重複調用 <em>$()</em> 對象時反覆消耗的瀏覽器資源。</p>
                    <p>舉例來說，在使用 jQuery Chaining 之前，我們對相同選擇器對象的複數指令操作可能長這樣：</p>
                    <div class="text-code" v-pre>
                        <pre><code class="language-javascript">$(function(){
    $("p").css("color","red");
    $("p").slideUp(2000);
    $("p").slideDown(2000);
});</code></pre>
                    </div>
                    <p>使用 jQuery Chaining 後的改寫：</p>
                    <div class="text-code" v-pre>
                        <pre><code class="language-javascript">$(function(){
    $("p").css("color","red").slideUp(2000).slideDown(2000);
});</code></pre>
                    </div>
                    <p>如果覺得鏈結使得程式碼變得很長一串導致不好閱讀，也可以適時進行換行和縮排，jQuery 在瀏覽器解析時會自動忽略多餘的空格、換行，以及縮排。例如：</p>
                    <div class="text-code" v-pre>
                        <pre><code class="language-javascript">$(function(){
    $("p").css("color","red")
        .slideUp(2000)
        .slideDown(2000);
});</code></pre>
                    </div>
                </div>
                <button class="accordin-close" @click="isActive = 0;"></button>
            </div>
            <div class="accordin-item" :class="isActive==3004 ? 'is-active' : ''">
                <div class="accordin-title" @click="isActive = 3004;">
                    <p>同一對象需要透過 .css() 添加複數的屬性應該怎麼寫？</p>
                </div>
                <div class="accordin-content">
                    <p>jQuery 函式庫有提供一個名叫 <em>css()</em> 的方法，可以讓指定選擇器對象在 HTML 裡添加 inline-style CSS 屬性，例如：</p>
                    <div class="text-code" v-pre>
                        <pre><code class="language-javascript">$(function(){
    $("p").css("color","red");
});</code></pre>
                    </div>
                    <p>但假如要添加的 CSS 屬性不止一個，那麼該如何正確地下達指令？有些人或許會這樣寫：</p>
                    <div class="text-code" v-pre>
                        <pre><code class="language-javascript">$(function(){
    $("p").css("color","red").css("background-color","blue").css("font-size","24px");
});</code></pre>
                    </div>
                    <p>這樣的寫法並不算錯，因為實際上是可以正確地執行出結果，不過有更簡潔、易讀的替換方式：</p>
                    <div class="text-code" v-pre>
                        <pre><code class="language-javascript">$(function(){
    $("p").css("{
        'color': 'red',
        'background-color': 'blue',
        'font-size': '24px'
    });
});</code></pre>
                    </div>
                    <p>當然要濃縮成一行也不成問題，全看個人或團隊的習慣。</p>
                </div>
                <button class="accordin-close" @click="isActive = 0;"></button>
            </div>
            <div class="accordin-item" :class="isActive==3005 ? 'is-active' : ''">
                <div class="accordin-title" @click="isActive = 3005;">
                    <p>優先使用 DOM 本身的屬性和方法</p>
                </div>
                <div class="accordin-content">
                    <p>包含我在內，許多學習網頁前端的工程師，剛開始接觸 JavaScript 未必是原生的 JavaScript，而是從相對比較容易上手的 jQuery 開始學習，因此對於比較原生、基礎語法的認識相對薄弱，往往過於依賴 jQuery 函式庫提供的方法，但忽略了其實原生 JavaScript 就存在更直接、簡便的方法可以運用，透過 jQuery 反而多繞道了一圈的感覺。</p>
                    <p><em>this</em> 的使用便是其中一個例子，譬如以下這段程式碼：</p>
                    <div class="text-code" v-pre>
                        <pre><code class="language-javascript">$(function(){
    $("img").click(function () {
        $(this).attr("src");
    });
});</code></pre>
                    </div>
                    <p>在範例中，我們使用了 <em>$(this)</em> 來獲取 <em>click</em> 事件中綁定的元素 <em>img</em>，並透過 <em>attr()</em> 方法來取得它的 <em>src</em> 屬性。程式碼這樣寫固然可行，可是單就獲取屬性這個需求而言，其實直接透過 DOM 去獲取便綽綽有餘：</p>
                    <div class="text-code" v-pre>
                        <pre><code class="language-javascript">$(function(){
    $("img").click(function () {
        this.src;
    });
});</code></pre>
                    </div>
                    <p>如此一來，程式碼不僅變得更短、更好讀，同時也讓程式碼執行變得更快速。</p>
                </div>
                <button class="accordin-close" @click="isActive = 0;"></button>
            </div>
            <div class="accordin-item" :class="isActive==3006 ? 'is-active' : ''">
                <div class="accordin-title" @click="isActive = 3006;">
                    <p>善用 Callback（回調）函式，處理動畫事件後的其他方法</p>
                </div>
                <div class="accordin-content">
                    <p>在 CSS3 推出並廣泛被瀏覽器支援之前，jQuery 的動畫功能一直是許多網頁基本動畫呈現的實現主流方法來源之一。假設我們現在要實現一個功能：當點擊按鈕 <em>button</em> 後，指定元素對象會慢慢淡出（FadeOut），然後被 DOM 給移除（Remove）掉。或許我們直覺會這樣寫：</p>
                    <div class="text-code" v-pre>
                        <pre><code class="language-javascript">$(function(){
    $("button").click(function(e) {
        $("h1").fadeOut("slow").remove();
    });
});</code></pre>
                    </div>
                    <p>然而，實際執行後會發現，在 <em>h1</em> 淡出動畫還沒執行完之前，<em>remove()</em> 方法便同時執行，導致該看到的動畫效果沒看到，元素便直接從 DOM 裡頭消失。要解決這個問題，我們必須透過 Callback 函式，將移除方法放在裡面，如此一來該方法只會在淡出動畫執行結束後才會開始執行。具體程式碼為下：</p>
                    <div class="text-code" v-pre>
                        <pre><code class="language-javascript">$(function(){
    $("button").click(function(e){
        $("h1").fadeOut("slow", function(){
            $(this).remove();
        });
    });
});</code></pre>
                    </div>
                </div>
                <button class="accordin-close" @click="isActive = 0;"></button>
            </div>
        </div>
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