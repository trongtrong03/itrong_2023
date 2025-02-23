<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="6" fileType="learnDev" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、原由</a></li>
            <li><a href="#act2">二、申請流程</a></li>
            <li><a href="#act3">三、Git</a></li>
            <li><a href="#act4">四、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <p>按照順序，本篇文章應該是要接著講如何將遠端儲存庫較新版本的檔案拉取（<em>pull</em>）到本機端的專案，不過適逢遇到 GitHub 資安政策的改變，意即自 2021 年 8 月 13 日開始不再允許密碼驗證的方式處理遠端與本機端經由 HTTPS 端的備份。假如你沒留意到 GitHub 官方的公告，那麼當你使用 HTPPS 方式執行同步指令時，也會看到指令視窗捎來這樣的回覆：</p>
        <blockquote class="is-warning">
            <p>remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.</p>
        </blockquote>
        <figure>
            <img src="/images/learn/dev/git-remote-5.jpg">
            <figcaption>過去只需要登入帳號密碼就能與遠端儲存庫互動的方式已被禁止。</figcaption>
        </figure>
        <p>雖說 Git 遠端備份的平台並非只有 GitHub 一個選擇，但作為全世界工程師最大的「交友平台」，多數人仍會以其作為備份或展露作品的主要選擇，最好還是了解並處理這個問題。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、原由</h2>
        <p>所謂「無風不起浪」，GitHub 之所以要取消密碼驗證的方式，主要是想增強使用者資料的安全性，以下是官方於 2021 年 8 月 12 日發布的<a href="https://github.blog/changelog/2021-08-12-git-password-authentication-is-shutting-down/" target="_blank">公告</a>，全文如下：</p>
        <figure>
            <img src="/images/learn/dev/git-token-1.jpg">
        </figure>
        <p>事實上，早在去年十二月，官方就已經有發布文章預告今年 8 月 13 日會採用 Token 方式來取代傳統的密碼驗證：<a href="https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/" target="_blank">https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/</a></p>
        <p>簡單來說，GitHub 長久以來一直有對使用者帳戶的安全性進行加強，但基於歷史原因，部分未參與雙重身分驗證的老帳戶仍可僅憑帳號密碼對 Git 與 API 進行操作，這潛藏著一定程度的資安風險。為了解決這樣的問題，GitHub 官方決議使用 Token（令牌）的方式取代傳統密碼驗證的模式，它具備以下這些優勢：</p>
        <ol>
            <li><b>獨立性：</b><br>一個帳號可以生成多個 Token ，且都是獨一無二的，每個專案可以各自設定獨立的 Token，如此一來就能避免密碼遭有心人士取得後進而掌控該帳戶底下所有專案的存取權。<br><br></li>
            <li><b>可撤銷：</b><br>已生成的 Token 可以隨時進行撤銷。<br><br></li>
            <li><b>限制性：</b><br>在申請 Token 的同時可以選擇其訪問的許可範圍，例如開放所有的權限，或是僅開放讀取、寫入單向的權限。<br><br></li>
            <li><b>隨機性：</b><br>Token 碼皆由系統亂數產生，相較於使用者設想的密碼更能抵抗外部的暴力破解。</li>
        </ol>
    </div>
    <div class="text-block" id="act2">
        <h2>二、申請流程</h2>
        <p>申請 Token 的流程並不複雜，首先在 GitHub 網頁的右上角點擊自己的頭像，呼叫出下拉式選單後，選擇「<b>Setting</b>」。</p>
        <figure>
            <img src="/images/learn/dev/git-token-2.jpg">
        </figure>
        <p><br></p>
        <p>在「<b>Setting</b>」頁中左側有一排功能欄位，找到「<b>Developer settings</b>」項目點擊進入，接著再選擇「<b>Personal access tokens</b>」。</p>
        <figure>
            <img src="/images/learn/dev/git-token-3.jpg">
        </figure>
        <p>選擇「<b>Personal access tokens</b>」內容右上方的「<b>Generate new token</b>」，以產生一組新的 Token。</p>
        <p><br></p>
        <figure>
            <img src="/images/learn/dev/git-token-4.jpg">
        </figure>
        <p>設定 Token 的名稱，依個人需求變更有效日期以及存取的許可範圍，許可範圍的部分個人通常是全部勾選，完成後按下下方的「<b>Generate token</b>」綠色按鈕即可。</p>
        <p><br></p>
        <figure>
            <img src="/images/learn/dev/git-token-5.jpg">
        </figure>
        <p>申請按鈕送出後即會得到一組 Token 碼，後續本機端 Git 存取 GitHub 遠端儲存庫時就會需要透過它實行驗證。由於網頁重整之後就會看不到它了，所以最好是先複製記錄到個人記事本裡。</p>
    </div>
    <div class="text-block" id="act3">
        <h2>三、Git</h2>
        <p>假設現在手邊已有版控專案需要推送到遠端儲存庫進行備份，我們使用 <em>push</em> 傳達指令：</p>
        <figure>
            <img src="/images/learn/dev/git-token-6.jpg">
        </figure>
        <p>此時 Git Bash 視窗同樣會要求使用者輸入帳號密碼，帳號一樣填寫你個人的 GitHub 帳戶名稱，密碼則輸入（貼上）你生成的 Token 碼。</p>
        <figure>
            <img src="/images/learn/dev/git-token-7.jpg">
        </figure>
        <p>推送成功。</p>
        <p><br></p>
        <p>我們也可以將 Token 直接設定到本機端專案設定中，這樣就不用每一次 Push 都要執行 Token 驗證，其 Bash 指令為：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-git">$git remote set-url origin https://[TOKEN]@github.com/[USERNAME]/[REPO].git/</code></pre>
        </div>
        <p>其中 <em>[TOKEN]</em> 是你的 Token 碼，<em>[USERNAME]</em> 則是你的 GitHub 帳戶名稱，而 <em>[REPO]</em> 則是與本機端 Git 專案連接的遠端資料庫名稱，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-git">$git remote set-url origin https://ghp_xxxxxxxxxxxxxxxxxx@github.com/trongtrong03/GitDemo.git/</code></pre>
        </div>
        <p>如此便完成設定，未來推送專案版控時就會略過使用者帳號與 Token 的驗證要求了。要注意的是，倘若有天你移除了 GitHub 裡的 Token，遺留在本機端 Git 專案的設定也會隨之失效，必須重新進行設定。</p>
    </div>
    <div class="text-block" id="act4">
        <h2>四、參考資料</h2>
        <dl>
            <dd><a href="https://github.blog/changelog/2021-08-12-git-password-authentication-is-shutting-down/" target="_blank">GitHub</a></dd>
            <dd><a href="https://iter01.com/611820.html" target="_blank">GitHub不再支援密碼驗證解決方案：SSH免密與Token登入配置</a></dd>
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
