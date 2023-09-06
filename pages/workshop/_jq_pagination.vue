<template>
    <NuxtLayout name="article">
        <TempWorkshop :propValue="10" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act1">一、效果預覽</a></li>
            <li><a href="#act2">二、程式碼</a></li>
            <li><a href="#act3">三、其他補充</a></li>
        </ul>
    </div>
    <div class="text-block">
        <h2 id="act1">一、效果預覽</h2>
        <p>當頁面裡的表單標題資料，或是產品數量眾多的時候，通常會透過一些技術將這些資料進行顯示數量。實務上常見大概有兩種做法，第一種是採取滾動讀取的方式，當畫面讀取完最後顯示的資料並被瀏覽器偵測到時，會立即向資料庫發送需求，繼續載入後續更多筆的資料。另一種則是以分頁的方式進行管理，也就是本篇 jQuery 效果要實現的目標。</p>
        <p>效果預覽：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-default-tab="js,result" data-slug-hash="zVRLPx" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/zVRLPx">
            jq-plugin: pageination</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
    </div>
    <div class="text-block">
        <h2 id="act2">二、程式碼</h2>
        <p>此效果有使用到 jQuery，故 HTML 裡必須引用其官方套件：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"&gt;&lt;/script&gt;</code></pre>
        </div>
        <p><br></p>
        <p>HTML：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;div class="page-wrap"&gt;
    &lt;div class="page-content"&gt;
        &lt;p&gt;title01&lt;/p&gt;
        &lt;p&gt;title02&lt;/p&gt;
        &lt;p&gt;title03&lt;/p&gt;
        &lt;p&gt;...&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="page-nav"&gt;&lt;/div&gt;
    &lt;div&gt;
        &lt;input type="hidden" id="allPage" /&gt;
        &lt;input type="hidden" id="showPage" /&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
        <p>下方兩個 <em>input</em> 供作程式腳本判斷用途，請勿刪除。此外，<em>.page-content</em> 中的項目元素可以依照個人需求替換成其他元素，不僅如此，平行元素間也可以插入不同的元素，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;div class="page-content"&gt;
    &lt;p&gt;title01&lt;/p&gt;
    &lt;div&gt;title02&lt;/div&gt;
    &lt;p&gt;title03&lt;/p&gt;
    &lt;h2&gt;title04&lt;/h2&gt;
    &lt;p&gt;...&lt;/p&gt;
&lt;/div&gt;</code></pre>
        </div>
        <p><br></p>
        <p>jQuery：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$(function() {
    var show_per_page = 5;  // 一頁顯示幾筆項目
    var number_of_items = $(".page-content").children().length;
    var number_of_pages = Math.ceil(number_of_items/show_per_page);
    $("#allPage").val(0);
    $("#showPage").val(show_per_page);
    var navigation_html = "&lt;a class='previous_link' href='javascript:previous();'&gt;Prev&lt;/a&gt;";
    var current_link = 0;
    while(number_of_pages > current_link){
        navigation_html += "&lt;a class='page_link' href='javascript:go_to_page(" + current_link +")' longdesc='" + current_link +"'&gt;"+ (current_link + 1) +"&lt;/a&gt;";
        current_link++;
    }
    navigation_html += "&lt;a class='next_link' href='javascript:next();'&gt;Next&lt;/a&gt;";
    $(".page-nav").html(navigation_html);
    $(".page-nav .page_link:first").addClass("active");
    $(".page-content").children().css("display", "none");
    $(".page-content").children().slice(0, show_per_page).css("display", "block");
});

function previous(){
    new_page = parseInt($("#allPage").val()) - 1;
    if($(".active").prev(".page_link").length==true){
        go_to_page(new_page);
    }
}

function next(){
    new_page = parseInt($("#allPage").val()) + 1;
    if($(".active").next(".page_link").length==true){
        go_to_page(new_page);
    }
    
}

function go_to_page(page_num){
    var show_per_page = parseInt($("#showPage").val());
    start_from = page_num * show_per_page;
    end_on = start_from + show_per_page;
    $(".page-content").children().css("display", "none").slice(start_from, end_on).css("display", "block");
    $(".page_link[longdesc=" + page_num +"]").addClass("active").siblings(".active").removeClass("active");
    $("#allPage").val(page_num);
}</code></pre>
        </div>
    </div>
    <div class="text-block">
        <h2 id="act3">三、其他補充</h2>
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
    }
}
</script>