<template>
    <NuxtLayout name="article">
        <TempWorkshop :propValue="19" />
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
        <p>本篇文章主題要來實作的是使用者表單裡的密碼輸入框「顯示 / 隱藏」切換的眼睛圖示按鈕功能。雖說這個功能存在被旁人偷看的風險，但密碼輸入框總是只顯示 <em>*</em> 符號，對使用者而言有時不太確定自己是否有輸入錯字，在面對因為輸入錯誤次數達到上限就封鎖服務的金融業務，壓力會非常巨大，現在大多數的銀行 APP 都有提供類似眼睛圖示的開關，方便使用者確認自己輸入的密碼字元是否正確。</p>
        <p>效果預覽：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-default-tab="js,result" data-slug-hash="xxmRjLM" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/xxmRjLM">
            jq: passward show or hide</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
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
            <pre><code class="language-html">&lt;div&gt;
    &lt;input id="pwInput" type="password" value="12345678"&gt;
    &lt;button toggle="#pwInput" class="btn-eye"&gt;&lt;/button&gt;
&lt;/div&gt;</code></pre>
        </div>
        <p><br></p>
        <p>jQuery：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$(".btn-eye").click(function() {
    $(this).toggleClass("is-active");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});</code></pre>
        </div>
        <p>範例中的眼睛圖示是使用 <a href="https://fontawesome.com/" target="_blank">Font Awesome</a> 這套字形圖示庫裡面的 icon，如果不知道怎麼使用、或有其他圖素也可以改用背景圖片的方式來替代。</p>
    </div>
    <div class="text-block">
        <h2 id="act3">三、其他補充</h2>
        <p>用原生 JavaScript 實現相同效果的寫法：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">document.addEventListener("DOMContentLoaded", function() {
    const btnEyes = document.querySelectorAll(".btn-eye");

    btnEyes.forEach(function(btnEye) {
        btnEye.addEventListener("click", function() {
            btnEye.classList.toggle("is-active");
            const input = document.querySelector(btnEye.getAttribute("toggle"));

            if (input.getAttribute("type") === "password") {
                input.setAttribute("type", "text");
            } else {
                input.setAttribute("type", "password");
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