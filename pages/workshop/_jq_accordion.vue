<template>
    <NuxtLayout name="article">
        <TempWorkshop :propValue="1" />
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
        <p>此效果大多用於問答ＱＡ的功能，將答案的內容預先隱藏起來，當使用者點擊想查看的問題條目時再展開內容，藉此增加頁面瀏覽的易讀性。除此之外亦可用於產品分類的父子類別，或是含有子項目的導覽選單...等處。</p>
        <p>效果預覽：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-default-tab="js,result" data-slug-hash="weOBOe" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/weOBOe">
            JQ-收合選單</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
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
            <pre><code class="language-html">&lt;ul&gt;
    &lt;li&gt;
        &lt;div class="title"&gt;Title A&lt;/div&gt;
        &lt;div class="content"&gt;
            &lt;div&gt;content&lt;/div&gt;
        &lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;div class="title"&gt;Title B&lt;/div&gt;
        &lt;div class="content"&gt;
            &lt;div&gt;content&lt;/div&gt;
        &lt;/div&gt;
    &lt;/li&gt;
&lt;/ul&gt;</code></pre>
        </div>
        <p><br></p>
        <p>CSS（僅列出必要部份）：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">.content {
    display: none;
}</code></pre>
        </div>
        <p><br></p>
        <p>jQuery：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$(function(){
    $(".title").on("click", function(e){
        if($(this).parent().has(".content")) {
            e.preventDefault();
        }
        if(!$(this).hasClass("is-active")) {
            $(".content").slideUp();
            $(".title").removeClass("is-active");
            $(this).next(".content").slideDown();
            $(this).addClass("is-active");
        }
        else if($(this).hasClass("is-active")) {
            $(this).removeClass("is-active");
            $(this).next(".content").slideUp();
        }
    });
});</code></pre>
        </div>
    </div>
    <div class="text-block">
        <h2 id="act3">三、其他補充</h2>
        <p>假如要令第一個或指定項目在網頁載入時為展開狀態，僅需調整 HTML 程式碼即可：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;ul&gt;
    &lt;li&gt;
        &lt;div class="title is-active"&gt;Title A&lt;/div&gt;
        &lt;div class="content" style="display: block;"&gt;
            &lt;div&gt;content&lt;/div&gt;
        &lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;div class="title"&gt;Title B&lt;/div&gt;
        &lt;div class="content"&gt;
            &lt;div&gt;content&lt;/div&gt;
        &lt;/div&gt;
    &lt;/li&gt;
&lt;/ul&gt;</code></pre>
        </div>
        <p><br></p>
        <p>用原生 JavaScript 實現相同效果的寫法（但不含上、下滑的動畫效果）：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">document.addEventListener("DOMContentLoaded", function() {
    var titles = document.querySelectorAll(".title");
    
    titles.forEach(function(title) {
        title.addEventListener("click", function(e) {
            var parent = this.parentElement;
            var content = parent.querySelector(".content");

            if (content) {
                e.preventDefault();
            }

            if (!this.classList.contains("is-active")) {
                var allContents = document.querySelectorAll(".content");
                var allTitles = document.querySelectorAll(".title");

                allContents.forEach(function(item) {
                    item.style.display = "none";
                });

                allTitles.forEach(function(item) {
                    item.classList.remove("is-active");
                });

                content.style.display = "block";
                this.classList.add("is-active");
            } else if (this.classList.contains("is-active")) {
                this.classList.remove("is-active");
                content.style.display = "none";
            }
        });
    });
});</code></pre>
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
    }
}
</script>