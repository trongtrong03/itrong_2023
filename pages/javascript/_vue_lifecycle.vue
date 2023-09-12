<template>
    <NuxtLayout name="article">
        <TempJs :propValue="30" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、</a></li>
            <li><a href="#act2">二、</a></li>
            <li><a href="#act3">三、</a></li>
            <li><a href="#act4">四、</a></li>
            <li><a href="#act5">五、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <blockquote>每个 Vue 组件实例在创建时都需要经历一系列的初始化步骤，比如设置好数据侦听，编译模板，挂载实例到 DOM，以及在数据改变时更新 DOM。在此过程中，它也会运行被称为生命周期钩子的函数，让开发者有机会在特定阶段运行自己的代码。</blockquote>
        <p>這段文字引述自 <a href="https://cn.vuejs.org/guide/essentials/lifecycle.html" target="_blank">Vue.js</a> 官方對其程式語言的「生命週期」所給出的解釋，若要用比較簡短的一句話概括，生命週期指的是「Vue 實例從創建到銷毀的過程」，其中，Vue 實例指的是其應用核心的建構體，譬如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var app = new Vue({
  ...
});</code></pre>
        </div>
        <p>儘管根據版本不同，上面宣告的建構方式也會不太一樣，但基本上只要建立這樣的一個程式碼結構，就代表創建了一個 Vue 的實例。一個 Vue 實例通常包含了 Vue 組件的數據、方法、計算屬性、生命週期鉤子......等等，其中，生命週期鉤子（Lifecycle Hooks）為 Vue 實例帶來各種不同階段或情境所應該執行的函式，像是創建、初始化、編譯、更新、銷毀等等，這些鉤子便形成它所屬 Vue 實例的生命週期。</p>
        <p>Vue 從西元 2016 年發展至今也已推出第三代版本，生命週期隨著版本更新亦推陳出新，本篇文章學習筆記重點在於</p>
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