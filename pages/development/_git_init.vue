<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="3" fileType="learnDev" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、前置部署</a></li>
            <li><a href="#act2">二、建立版本庫</a></li>
            <li><a href="#act3">三、提交流程-Bash</a></li>
            <li><a href="#act4">四、提交流程-Tortoisegit</a></li>
            <li><a href="#act5">五、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <p>上一篇我們已經掌握 Git 是如何進行版本控制的了，從這篇開始學習如何在本地端的專案裡使用 Git 進行版本控制。個人使用的作業系統為 Windows，儘管對 Git 操作而言差別不大，但如果是非 Git 的命令提示字元指令相關操作會以 Windows OS 作記（若你是 Mac 或 Linux 系統的使用者只能先說聲抱歉啦）。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、前置部署</h2>
        <p>為了方便操作，首先我們創建一個內容包含三個記事本檔案的資料夾「<b>demo</b>」，以當作實務練習的對象。若你要直接使用手邊已經存在的專案也可以，版控流程都是一樣的，與資料夾內容無關。</p>
        <figure>
            <img src="/images/learn/dev/git-init-1.jpg">
            <figcaption>demo 資料夾裡包含 1.txt、2.txt、3.txt 三個檔案。</figcaption>
        </figure>
        <p>在 <b>demo</b> 資料夾內點擊右鍵，選擇「<b>Git Bash Here</b>」叫出 Git 內建的命令提示字元視窗。</p>
        <figure>
            <img src="/images/learn/dev/git-init-2.jpg">
        </figure>
        <p>Git 提供的 Bash 指令工具面板樣貌如下：</p>
        <figure>
            <img src="/images/learn/dev/git-init-3.jpg">
        </figure>
        <p><br></p>
        <p>或也可以用 Windows 內建的命令提示字元進行操作，打開命令提示字元後，通過 <em>cd</em> 指令進入你要進行版控的資料夾目錄。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">cd demo</code></pre>
        </div>
    </div>
    <div class="text-block" id="act2">
        <h2>二、建立版本庫</h2>
        <p>在專案還沒建立版本庫之前，任何有關 Git 的指令皆無效，因此我們必須先在專案資料夾裡建立版本庫，其指令語法為：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-git">$git init</code></pre>
        </div>
        <p><em>$</em> 是 Bash 的執行緒代號，如果是用 Windows 命令提示字元下指令的話不用加這個字符。版本庫建立完成後，<b>demo</b> 資料夾會生成一個「<b>.git</b>」的隱藏資料夾。「<b>.git</b>」資料夾將用來存取每一次版本提交的內容。</p>
        <p>另外要注意的是，Git 指令有大小寫之分。</p>
        <figure>
            <img src="/images/learn/dev/git-init-4.jpg">
        </figure>
        <p>隱藏資料夾在作業系統預設狀態下為不可見，Windows 使用者可以在工具列中「<b>檢視</b>」頁籤找到「<b>隱藏的項目</b>」的項目，將其核選方塊勾選即可。</p>
        <figure>
            <img src="/images/learn/dev/git-init-5.jpg">
        </figure>
        <p><br></p>
        <p>若要用 Tortoisegit 操作，則在右鍵快速選單中選擇「<b>Git Create repository here...</b>」功能即可。</p>
        <figure>
            <img src="/images/learn/dev/git-init-6.jpg">
        </figure>
    </div>
    <div class="text-block" id="act3">
        <h2>三、提交流程-Bash</h2>
        <figure>
            <img src="/images/learn/dev/git-process-1.jpg">
        </figure>
        <p>還記得這張流程圖嗎？建立版本庫後，該專案就可以開始執行 Git 版控的步驟，目前 <b>demo</b> 專案資料夾裡的檔案所在位置為「<b>Working directory</b>」（工作區域）。從流程圖中我們可以看到檔案從工作區域要進入到最後階段（Repository）分別要經過添加（add） 和提交（commit）的動作，而這同時也是我們提交至版本庫分別要下的指令。</p>
        <p><br></p>
        <h6>1. 將工作區域檔案添加至暫存區域（Ataging area）</h6>
        <div class="text-code" v-pre>
            <pre><code class="language-git">$git add .</code></pre>
        </div>
        <p><em>add</em> 是 Git 將工作區域的檔案「添加」到暫存區域的動作，其指令參數有很多種，詳細留到以後再獨立成篇介紹。這裡先使用最簡單灑脫的參數 <em>.</em>，意即將所有檔案通通添加到暫存區域。</p>
        <p><br></p>
        <h6>2. 將暫存區域檔案提交至版本庫（Repository）</h6>
        <div class="text-code" v-pre>
            <pre><code class="language-git">$git commit -m "c1"</code></pre>
        </div>
        <p><em>commit</em> 則是將暫存區域內的檔案「提交」到版本庫的命令，<em>-m</em> 中的 m 是 message 的意思，我們需要在其後方用雙引號撰寫此次提交版本的訊息，例如範例中「c1」。Git 的 Commit Message 最好以清楚易讀為原則，以方便未來檢視提交日誌時，能更一目了然各個提交版本的目的是什麼。</p>
        <p>Git 提交成功後的畫面：</p>
        <figure>
            <img src="/images/learn/dev/git-init-7.jpg">
        </figure>
        <p><br></p>
        <p><em>add</em> 和 <em>commit</em> 依序執行完就算是完成本地端版本庫的一次版控流程了，假如想確認檔案是否有紮紮實實地進入版控，我們可以用兩種方式確認：</p>
        <h3>git status：</h3>
        <p>第一個方法是 <em>git status</em> 指令，它可以查看目前檔案的狀態，如果你的檔案已是最新版本，它會返回「nothing to commit, working tree clean」的訊息。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-git">$git status</code></pre>
        </div>
        <figure>
            <img src="/images/learn/dev/git-init-8.jpg">
        </figure>
        <p><br></p>
        <h3>git log：</h3>
        <p>第二種方法則是 <em>git log</em>，這個指令可以列出版本庫的所有 Commit 記錄，是 Git 裡非常重要且也是相當好用的功能。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-git">$git log</code></pre>
        </div>
        <figure>
            <img src="/images/learn/dev/git-init-9.jpg">
        </figure>
    </div>
    <div class="text-block" id="act4">
        <h2>四、提交流程-Tortoisegit</h2>
        <p>看完了 Bash 本地端版控流程，我們接著看看 Tortoisegit 要如何操作。</p>
        <figure>
            <img src="/images/learn/dev/git-init-10.jpg">
        </figure>
        <p>在功能選單中點擊「<b>Add</b>」。</p>
        <p><br></p>
        <figure>
            <img src="/images/learn/dev/git-init-11.jpg">
        </figure>
        <p>Tortoisegit 會列出目前工作區域內的檔案，我們將要加入追蹤的檔案勾選起來（預設是全選）。</p>
        <p><br></p>
        <figure>
            <img src="/images/learn/dev/git-init-12.jpg">
        </figure>
        <p>成功將檔案添加到暫存區域！接下來可以點擊「<b>Commit</b>」按鈕，執行暫存區域檔案提交的動作。</p>
        <p><br></p>
        <figure>
            <img src="/images/learn/dev/git-init-13.jpg">
        </figure>
        <p>輸入 Message 訊息，以「c1」作為範例。輸入完成後按下「<b>Commit</b>」。</p>
        <p><br></p>
        <figure>
            <img src="/images/learn/dev/git-init-14.jpg">
        </figure>
        <p>完成版控。</p>
        <p>Tortoisegit 的好處是每一次執行面板都會貼心地引導使用者下一步可以執行的動作，例如 Commit 完成後，它接著繼續提示使用者可以將本地端版本庫「<b>Push</b>」（推送）到遠端儲存庫上。</p>
        <p><br></p>
        <figure>
            <img src="/images/learn/dev/git-init-15.jpg">
        </figure>
        <p>如果要確認 Commit 記錄，可以從 Tortoisegit 右側選單裡找到「<b>Show log</b>」（顯示歷史記錄）的功能。</p>
        <p><br></p>
        <figure>
            <img src="/images/learn/dev/git-init-16.jpg">
        </figure>
        <p>歷史記錄面板裡不僅列出 Commit 的圖形鏈，下方也有詳細列出每一次提交記錄的檔案狀態變更的資訊。</p>
        <p><br></p>
        <p>以上就是在自己工作電腦的專案建立 Git 並進行提交版本控制的基本流程了，基本上每一次版控都會需要 <em>add</em> 然後 <em>commit</em>，最後再上傳至遠端儲存庫儲存，以防電腦損壞而無法救回資料，或是方便其他專案團隊成員協同作業。而我們將本機檔案上傳的動作在 Git 稱之為 <em>push</em>（推送），而從遠端將檔案下載下來（更新成最新版本）的行為則叫做 <em>pull</em>（拉取），這些方法將於下一篇文章繼續介紹。</p>
    </div>
    <div class="text-block" id="act5">
        <h2>五、參考資料</h2>
        <dl>
            <dd><a href="https://git-scm.com/" target="_blank">Git</a></dd>
            <dd><a href="https://gitbook.tw/chapters/introduction/what-is-git.html" target="_blank">什麼是 Git？為什麼要學習它？</a></dd>
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
