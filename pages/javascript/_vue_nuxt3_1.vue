<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="21" fileType="learnJs" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、什麼是運算式？</a></li>
            <li><a href="#act2">二、什麼是運算子？</a></li>
            <li><a href="#act3">三、運算子的優先級</a></li>
            <li><a href="#act4">四、XXXX</a></li>
            <li><a href="#act5">五、XXXX</a></li>
            <li><a href="#act6">六、總結</a></li>
            <li><a href="#act7">七、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <p></p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、如何安裝 Nuxt3？</h2>
        <h6>1. 在 VS Code 終端機輸入 npx 指令</h6>
        <p>如果你想直接使用 VS Code 編輯器來安裝 Nuxt，你需要先開啟終端機（Terminal，快捷鍵　Ctrl + `），利用 <em>cd</em> 指令移動到要建立專案的資料夾路徑底下，然後輸入以下指令：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">npx nuxi@latest init &lt;project-name&gt;</code></pre>
        </div>
        <p><em>&lt;project-name&gt;</em> 即你的專案名稱，在這裡我以 <em>demo</em> 作為此次專案的目錄名稱，輸入完成後按下確定鍵，終端機隨即開始進行 Nuxt 文件包管理的前置安裝流程：</p>
        <figure>
            <img src="/images/learn/js/nuxt3-install-1.jpg">
        </figure>
        <p>首先系統會詢問你比較喜歡使用哪一種套件管理器，這將會牽涉到後續在執行 Nuxt 時，需要使用相對應的套件管理器指令去執行編譯。在這個範例裡我選擇使用 npm，讓子彈飛一會兒後便會完成安裝，接著系統會繼續詢問是否要協助初始化 Git 版本控制，選擇是，則該專案資料夾會自動建立 <em>.git</em> 資要夾目錄，若選否，就不會執行初始化。</p>
        <figure>
            <img src="/images/learn/js/nuxt3-install-2.jpg">
        </figure>
        <p><br></p>
        <p>如果不習慣使用程式編輯器的終端機，也可以從作業系統的終端機或命令提示字元進行操作，利用 <em>cd</em> 指令將目前資料夾位置移動到要放置專案的目錄，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">cd demo</code></pre>
        </div>
        <p>接著輸入：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">npm install</code></pre>
        </div>
        <p><br></p>
        <h6>2. 進入專案資料夾並執行編譯指令</h6>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">code &lt;project-name&gt;</code></pre>
        </div>
        <p>若你正在使用 VS Code 終端機進行操作，可以透過上方指令快速開啟指定的專案目錄，例如 <em>code demo</em>，VS Code 隨即另開該專案目錄的視窗介面，當然我們也可以用作業系統的終端機 <em>cd</em> 進去，不過個人比較推薦使用 VS Code，畢竟它的軟體介面都已經整合好開發者進行程式開發時所需的各項功能，像我早先習慣使用 Sublime Text 搭配作業系統的終端機進行專案開發，偶然因緣際會下轉用 VS Code 才驚覺相見恨晚，儘管效率差不了多少，但使用體驗真的大相逕庭（或許現在的 Sublime Text 也說不定已經整合了相關服務）。</p>
        <p>無論如何，我們都必須確保終端機的路徑位置進入到專案目錄內，然後才執行以下指令：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">npm run dev -- -o</code></pre>
        </div>
        <figure>
            <img src="/images/learn/js/nuxt3-install-3.jpg">
        </figure>
        <p>如果順利，你的瀏覽器就會自動開啟一個網址為 http://localhost:3000/ 的分頁，這個分頁就是安裝了 Nuxt3 的 demo 資料夾裡的初始頁面，若你看到以下畫面，便代表編譯已成功運行，我們可以開始建構 Nuxt3 應用程序了。</p>
        <figure>
            <img src="/images/learn/js/nuxt3-install-4.jpg">
        </figure>
        <blockquote>
            <p>編譯指令中的 <em>-- -o</em> 表示 npm 運行後自動開啟瀏覽器頁面，故真正下達編譯執行的只有 <em>npm run dev</em>。</p>
        </blockquote>

    </div>

    <div class="text-block" id="act7">
        <h2>七、參考資料</h2>
        <dl>
            <dd><a href="https://www.books.com.tw/products/0010744702" target="_blank">《JavaScript & JQuery：網站互動設計程式進化之道》</a></dd>
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