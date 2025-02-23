<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="19" fileType="learnCSS" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、強制斷行</a></li>
            <li><a href="#act2">二、單行文字溢出省略符</a></li>
            <li><a href="#act3">三、多行文字溢出省略符</a></li>
            <li><a href="#act4">四、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <p>在網頁開發過程中，很常遇到客戶會要求在文字排版上，針對溢出指定行數的文章內容能以「...」的方式取代溢出文字，早期大多是透過 JavaScript 去限制內容顯示的字元數，或是判斷當文字超過區塊內容寬度時，隱藏溢出文字並自動加上「...」的字樣。不過在 CSS3 發佈之後，這樣的需求已經不必再仰賴 JavaScript 去實現了，透過屬性樣式表的設定就能輕鬆實現這方面的需求，以下就來看看要如何定義屬性。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、強制斷行</h2>
        <p>進入正題之前，先來介紹稍微與主題有點關聯的用法，也就是文字強制斷行的使用方式。為什麼文字需要強制斷行？什麼情況下會需要它？在中文語系中比較不會遇到這樣的問題，不過對使用拉丁字母的西方國家來說，每一個單字之間皆會以一個空格區分開來，若該行最後一個單字超過段落區域寬度，則會自動跳到下一行開始繼續書寫。這種排版方式乍看之下沒有問題，但你是否想過如果有個單字字元長度超過區塊寬度呢？例如大家「耳熟能詳」的火山矽肺症（45 個英文字母），又或者是荒謬的「肌聯蛋白」，一共由 189,819 個字母組成的破天荒數字之英文字，當他們被寫入段落時，排版會出現什麼樣的情景？</p>
        <p>不賣關子，直接來看看結果：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="300" data-default-tab="css, result" data-slug-hash="ExXzwmq" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/ExXzwmq">
            </a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>答案就是單字會直接溢出文字區塊範圍，當然日常生活不大可能會使用到這麼繁瑣的英文單字，但還有一種情況是連字或是長串的阿拉伯數字，同樣有可能引發文字溢出區域邊界的情況，因此在開發過程中面對文字區域，像是提供管理者自行編輯的文章編輯器，我們就必須提前思考文字溢出的可能並做出預防措施。</p>
        <p>CSS 主要提供兩種屬性來因應這樣的問題：<em>word-wrap</em> 與 <em>word-break</em>。</p>
        <p><br></p>
        <h3>word-wrap：</h3>
        <p>用來表示是否允許瀏覽器在單字內進行強制斷句換行（防止長單字溢出區域範圍之外）。</p>
        <h3>word-break：</h3>
        <p>用來設定如何進行單字內的斷行。</p>
        <p>語法：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">p {
    word-wrap: break-word;
    word-break: break-all;
}</code></pre>
        </div>
        <p>通常這兩個屬性會同時進行設置，以達到完全斷行的作用，單就設定 <em>word-wrap</em> 並無法完全解決單字超出區域寬度問題，以下我們透過實例來查看各屬性使用的差異。首先是完全不設置 <em>word-wrap</em> 與 <em>word-break</em> 的情況：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-default-tab="css,result" data-slug-hash="oNwRGmB" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/oNwRGmB">
            CSS-word-wrap與word-break-2</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>再來是僅設置 <em>word-wrap</em> 的時候：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-default-tab="css,result" data-slug-hash="JjJqrVK" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/JjJqrVK">
            CSS-word-wrap與word-break-3</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>可以看出過長字元的單字確實會自動換行且不會溢出了，卻也可以看到如果在他之前的前一個單字也剛好換行，該行就會保留一大段的空白，在排版美觀上就相對不雅觀。</p>
        <p>如果同時設置 <em>word-wrap</em> 與 <em>word-break</em>：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-default-tab="css,result" data-slug-hash="bGRyoXm" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/bGRyoXm">
            CSS-word-wrap與word-break-4</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>嗯！版面看起來美觀多了，但你發現了嗎？看似完美的版面設定，卻也潛藏著一個問題──那就是 <em>word-break</em> 的強制換行，可是會連同單字本身一同「腰斬」的！仔細看會發現部分行間尾端的單字會被截斷至下一行，使用者閱讀的時候可能會有不易判讀的情況。因此，雖然這兩個屬性常常綁定在一起使用，但要不要用 <em>word-break</em> 最好還是先和團隊商討後再決定使用與否。</p>
    </div>
    <div class="text-block" id="act2">
        <h2>二、單行文字溢出省略符</h2>
        <p>單行溢出的省略符應該是最常看見的應用方式，實現其效果的核心屬性為 <em>text-overflow</em>，主要用於設定文字溢出的處理方式。其預設值為 <em>clip</em>，表示直接裁切溢出的文字內容。而要以「...」表示溢出文字的屬性值為 <em>ellipsis</em>，不過光設定此屬性並無法直接實現我們要的結果，還必須搭配 <em>white-space: nowrap</em>（強制文字不換行），以及 <em>overflow: hidden</em>（隱藏溢出內容）這兩個屬性才有作用。</p>
        <p>語法：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">p {
    text-overflow: ellipsis;
    -ms-text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}</code></pre>
        </div>
        <p>實例：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="ExXzojQ" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/ExXzojQ">
            CSS3: text-overflow</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
    </div>
    <div class="text-block" id="act3">
        <h2>三、多行文字溢出省略符</h2>
        <p>單行溢出大多用於文章列表、產品封面的標題，而多行溢出的需求大多在限定區域範圍內的簡短介紹段落被提出，核心屬性為 <em>line-clamp</em>，同樣要搭配其他屬性才能實現需求，以下直接先列出語法格式，再來一一講解各屬性的功用：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}</code></pre>
        </div>
        <p><em>display: -webkit-box</em> 與 <em>box-orient: vertical</em> 是早期 CSS 試圖定義彈性盒子布局的原始草案，不過後來由 CSS3 推出的 <em>flex</em> 取代並成為標準規範。儘管如此，<em>flex</em> 仍無法完全取代 <em>-webkit-box</em>，例如現在介紹的多行溢出方法就不能用 <em>flex</em> 去定義元素模型。而 <em>box-orient</em> 則是定義該元素模型裡的子元素要以什麼方向去排列。兩者之所以要添加前綴是因為語法屬性與過時，需要添加瀏覽器對應前綴以確保可以被識別。</p>
        <p><em>line-clamp</em> 用來定義元素模型成為 <em>box</em> 的容器裡文字內容指定的行數，例如屬性值設定為 <em>3</em>，代表當內容文字最多僅顯示三行，超過三行的內容將會做出處理。由於目前不是所有瀏覽器都能判讀 <em>line-clamp</em>，因此需要為其添加前綴以令指定引擎的瀏覽器可以識別。</p>
        <p>當然也不能少了 <em>overflow</em> 去隱藏溢出的文字內容。</p>
        <p>實例：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="wvebmzR" data-user="itrong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/wvebmzR">
            CSS3: line-clamp</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <p>看完之後你會發現這些看似有點難又或令人頭痛的需求，其實實現的方法都不困難，只需要兩三個屬性就能搞定。是的，技術上來說本來就不困難，困難的是「知道」並瞭解如何「正確」去使用，所以遇到從沒遇過的問題先不要急著否定自己做不到，循著關鍵字抽絲剝繭，很多難題都能迎面而解。</p>
        <p><br></p>
        <p>最後，補充一個這是之前個人在專案導入多行溢出語法時遇到的 BUG：假如你和我一樣之前或現在仍使用 Compass 編譯 Sass，且同時有安裝 Autoprefixer 套件的話，<em>box-orient</em> 在編譯過程中將會被忽略隱藏掉，解決方法是在選擇器中加入註解指令去關閉該選擇器的 Autoprefixer 功能，比方來說：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
    /* autoprefixer: off */
</code></pre>
        </div>
        <p>如此在 Compass 編譯到這個選擇器時就不會多事，誤把 <em>box-orient</em> 給剔除掉了。</p>
    </div>
    <div class="text-block" id="act4">
        <h2>四、參考資料</h2>
        <dl>
            <dd><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-line-clamp" target="_blank">MDN</a></dd>
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
