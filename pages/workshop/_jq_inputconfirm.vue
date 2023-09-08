<template>
    <NuxtLayout name="article">
        <TempWorkshop :propValue="17" />
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
        <p>本篇效果實作的簡易功能目標是實現常見的註冊頁面中，輸入密碼的 <em>input</em> 輸入框除了設定密碼本身外，還有一欄確認密碼的欄位，使用者兩者輸入的內容必須相同，才能通過審核判定。</p>
        <p>效果預覽：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-default-tab="result" data-slug-hash="oeNxdd" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/oeNxdd">
            jq-tec-txtConfirm</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
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
            <pre><code class="language-html">&lt;input id="c1" type="checkbox" name="group[1]"&gt;
&lt;label for="c1"&gt;Checkbox 1&lt;/label&gt;
&lt;input id="c2" type="checkbox" name="group[1]"&gt;
&lt;label for="c2"&gt;Checkbox 2&lt;/label&gt;
&lt;input id="c3" type="checkbox" name="group[1]"&gt;
&lt;label for="c3"&gt;Checkbox 3&lt;/label&gt;</code></pre>
        </div>
        <p><br></p>
        <p>jQuery：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">function passwordCheck() {
    var pw1 = $("#password1").val();
    var pw2 = $("#password2").val();

    if (pw1 != pw2){
        $("#result").html("密碼錯誤");
    }
    else {
        $("#result").html("密碼正確");
    }
}

$(function() {
    $("#password2").keyup(passwordCheck);
});</code></pre>
        </div>
    </div>
    <div class="text-block">
        <h2 id="act3">三、其他補充</h2>
        <p>用原生 JavaScript 實現相同效果的寫法：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">document.addEventListener("DOMContentLoaded", function() {
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");
    const result = document.getElementById("result");

    function passwordCheck() {
        const pw1 = password1.value;
        const pw2 = password2.value;

        if (pw1 !== pw2) {
            result.innerHTML = "密碼錯誤";
        } else {
            result.innerHTML = "密碼正確";
        }
    }

    password2.addEventListener("keyup", passwordCheck);
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