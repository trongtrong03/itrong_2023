<template>
    <NuxtLayout name="article">
        <TempWorkshop :propValue="15" />
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
        <p>輸入框的 Placeholder 指的是 HTML <em>input</em> 表單元素中，一個名稱為 <em>placeholder</em> 的屬性，這個屬性可以在使用者輸入內容之前，預先顯示一段文字訊息，在使用者輸入內容後，該提示文字便隨即消失，而這段提示文字亦不會被當作輸入框的內容被提交出去。除了 <em>input</em> 元素，另一個表單元素 <em>textarea</em> 也擁有這個屬性。</p>
        <p>效果預覽：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-default-tab="js,result" data-slug-hash="gmVxOZ" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/gmVxOZ">
            jq-placeholder</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
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
            <pre><code class="language-html">&lt;input type="text" placeholder="請輸入內容" /&gt;</code></pre>
        </div>
        <p><br></p>
        <p>CSS（僅列出必要部份）：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">.placeholder {
    &::-webkit-input-placeholder {
        color: lightblue;
    }
    &::-moz-placeholder {
        color: lightblue;
    }
    &:-ms-input-placeholder {
        color: lightblue;
    }
    &:-moz-placeholder {
        color: lightblue;
    }
}</code></pre>
        </div>
        <p><br></p>
        <p>jQuery：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">$(function() {
    $('input[type="text"]').each(function() {
        $(this).focus(function() {
            $(this).addClass('placeholder');
        });
        $(this).blur(function() {
            $(this).removeClass('placeholder');
        });
    });
});</code></pre>
        </div>
    </div>
    <div class="text-block">
        <h2 id="act3">三、其他補充</h2>
        <p>用原生 JavaScript 實現相同效果的寫法：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">document.addEventListener("DOMContentLoaded", function() {
    const textInputs = document.querySelectorAll('input[type="text"]');

    textInputs.forEach(function(textInput) {
        textInput.addEventListener("focus", function() {
            textInput.classList.add("placeholder");
        });

        textInput.addEventListener("blur", function() {
            textInput.classList.remove("placeholder");
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