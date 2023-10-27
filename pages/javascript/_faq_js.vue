<template>
    <NuxtLayout name="article">
        <hgroup class="text-heading">
            <h1>Node.js 常見錯誤訊息問題、除錯建議以及各種疑難雜症彙整</h1>
        </hgroup>
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act1">一、錯誤訊息</a></li>
            <li><a href="#act2">二、警告提示</a></li>
            <li><a href="#act3">三、其他疑難雜症</a></li>
        </ul>
    </div>
    <div class="text-block" id="act1">
        <h2>一、錯誤訊息</h2>
        <div class="text-accordin is-error">
        </div>
    </div>
    <div class="text-block" id="act2">
        <h2>二、警告提示</h2>
        <div class="text-accordin is-warning">
        </div>
    </div>
    <div class="text-block" id="act3">
        <h2>三、問題集錦</h2>
        <div class="text-accordin is-others">
            <div class="accordin-item" :class="isActive==1 ? 'is-active' : ''">
                <div class="accordin-title" @click="isActive = 1;">
                    <p>介紹一些專有名詞以及其繁體、簡體中文的對應翻譯說法</p>
                </div>
                <div class="accordin-content">
                    <div class="text-flex">
                        <div class="f-width">
                            <div class="f-head">
                                <div class="f-f1">原詞</div>
                                <div class="f-f1">繁中</div>
                                <div class="f-f1">簡中</div>
                                <div class="f-f3">說明</div>
                            </div>
                            <div class="f-row">
                                <div class="f-f1">Scope</div>
                                <div class="f-f1">作用域</div>
                                <div class="f-f1">作用域 / 范围</div>
                                <div class="f-f3">
                                    <p>變數在程式中可以被存取的範圍，可分為區域變數，全域變數。</p>
                                </div>
                            </div>
                            <div class="f-row">
                                <div class="f-f1">Object</div>
                                <div class="f-f1">物件</div>
                                <div class="f-f1">对象</div>
                                <div class="f-f3">
                                    <p>物件是構成 Javascript 的基本要素之一，除了原始型別（數字、布林值、字串），其餘東西都是物件。</p>
                                </div>
                            </div>
                            <div class="f-row">
                                <div class="f-f1">Function</div>
                                <div class="f-f1">函數 / 函式</div>
                                <div class="f-f1">函数</div>
                                <div class="f-f3">
                                    <p>函式是構成 Javascript 的基本要素之一，它將一系列的敘述句組合起來，以執行一項特定的工作。</p>
                                </div>
                            </div>
                            <div class="f-row">
                                <div class="f-f1">Invoke / Call</div>
                                <div class="f-f1">呼叫</div>
                                <div class="f-f1">调用</div>
                                <div class="f-f3">
                                    <p>表示我們想「使用」函式時的一種動詞行為。</p>
                                </div>
                            </div>
                            <div class="f-row">
                                <div class="f-f1">Callback</div>
                                <div class="f-f1">回調函數 / 回調函式</div>
                                <div class="f-f1">回调</div>
                                <div class="f-f3">
                                    <p>通常指的是一個函式，該函式作為參數傳遞給另一個函式，並且在某個特定事件發生或異步操作完成時被調用。</p>
                                </div>
                            </div>
                            <div class="f-row">
                                <div class="f-f1">Closure</div>
                                <div class="f-f1">閉包</div>
                                <div class="f-f1">闭包</div>
                                <div class="f-f3">
                                    <p>指的是捕捉外部函式變數（或使之繼續存活）的函式，它包含了一個函式，以及函式被建立時所在的環境。</p>
                                </div>
                            </div>
                            <div class="f-row">
                                <div class="f-f1">Data</div>
                                <div class="f-f1">資料</div>
                                <div class="f-f1">数据</div>
                                <div class="f-f3">
                                    <p>通常是變數，指的是各種型別的資訊或資訊的集合，包含數字、字串、布林值、物件、陣列...等等。</p>
                                </div>
                            </div>
                        </div>
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

<script setup lang="ts">
    // layout
    definePageMeta({
        layout: false
    });

    const isActive = ref(0);
</script>