<template>
    <NuxtLayout name="article">
        <TempWorkshop :propValue="16" />
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
        <p>眾所皆知，<em>input</em> 元素中有兩種選擇 <em>type</em>，分別是單選按鈕的 <em>radio</em> 以及可複選的核選方塊 <em>checkbox</em>，開發者依據功能需要去使用相對應的類型。但如果今天因為一些原因，必須要設定 <em>checkbox</em> 群組中的核選項目一次只能選擇一項，本篇實作效果的目標便是要處理這種情況。</p>
        <p>效果預覽：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-default-tab="js,result" data-slug-hash="RmWaLK" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/RmWaLK">
            jq-tec: checkbox group</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
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
            <pre><code class="language-javascript">$(function() {
    $("input[type='checkbox']").on("change", function() {
        $("input[name='" + this.name + "']").not(this).prop("checked", false);
    });
});</code></pre>
        </div>
    </div>
    <div class="text-block">
        <h2 id="act3">三、其他補充</h2>
        <p>用原生 JavaScript 實現相同效果的寫法：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function() {
            if (this.checked) {
                checkboxes.forEach(function(otherCheckbox) {
                    if (otherCheckbox !== checkbox && otherCheckbox.name === checkbox.name) {
                        otherCheckbox.checked = false;
                    }
                });
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