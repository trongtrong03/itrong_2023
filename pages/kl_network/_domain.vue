<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="2" fileType="klNetwork" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act1">一、簡介</a></li>
            <li><a href="#act2">二、如何尋找網域？</a></li>
            <li><a href="#act3">三、常見的網域陷阱</a></li>
            <li><a href="#act4">四、找出進階陷阱</a></li>
            <li><a href="#act5">五、注意短網址</a></li>
            <li><a href="#act6">六、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act1">
        <h2>一、簡介</h2>
        <p>網域，英文名為 Domain Name，或可簡稱 Domain，當使用者透過電腦連接網路時，系統會產生一組數字（亦即 IP 位址），用來表示該電腦的地址（例如：111.22.33.4），當電腦架設網站伺服器時，自然也是由一串數字 IP 來表示，可是對普羅大眾來說，一串沒有實質意義的數字並不好背誦，因此，可以提供字符記憶的網域名稱，成為架設網站時很重要的一項服務，當使用者點擊網域名稱的連結，域名系統（DNS）遂自動將其轉換為電腦可以辨識的 IP 位址，如此一來，使用者只要記住網域名稱即可。同時，網域是獨一無二的，一經申請就不可能重複出現其他網站上。</p>
    </div>
    <div class="text-block" id="act2">
        <h2>二、如何尋找網域？</h2>
        <p>在 <b>://</b> 之後及第一個 <b>/</b> 之前的網址部分稱為網域，例如「https://www.google.com.tw/maps/」，其中「www.google.com.tw」即為網域名稱。需要注意的是，站在資安的角度而言，若網域為一系列數字組成，使用者無法得知網站由誰控制，應當避免具有這類網址的網站。</p>
    </div>
    <div class="text-block" id="act3">
        <h2>三、常見的網域陷阱</h2>
        <p>並非造訪有網域名稱的網站就絕對安全，很多詐騙網站會在網域上動手腳，舉例來說：<br>http://www.abc.com.ooo321.pw<br>網域之中最接近結尾的部份最為重要，ooo321.pw 表示此網站為 ooo321.pw，而非 www.abc.com。至於 www.abc.com 這部分網域被稱為「子網域」，詐騙者可讓此部份的網域顯示他們想要的任何內容。</p>
        <p>前面有提到「子網域」這個詞，那，什麼是子網域？子網域又稱次網域，當使用者申請到一個網域，通常可以指定要由哪組 IP 管理這組網域，倘若有子網域的需求，便可以將該網域繼續向下延伸，創造子網域給其他網域系統伺服器（DNS）進行管理。</p>
        <p>例如目前已有一個網站網域名稱叫做 www.abc.com，此網域在 DNS 裡稱為 A 記錄（host），www 叫做主機名稱（host name），假設網址是 xxx.abc.com，xxx 也是 abc.com 這部 DNS 裡的 A 記錄，同時也是 host name。</p>
        <p>子網域是使用者在 abc.com 前面增添一個「段名」，像是 shop、gallery ...等等，例如：<br>shop.abc.com<br>gallery.abc.com<br>2018photo.abc.com</p>
        <p>回到詐騙陷阱的討論，也有一種陷阱是詐騙者將會誤導使用者的網域放在斜線之後，例如：<br>http://user-account.us/www.google.com.tw<br>誤導使用者以為這個網址是 Google 的網站，但其實網域是位於第一個正斜線之前。</p>
        <p>另外一種誤導陷阱範例：<br>https://www.yahoo.com.user-mail.ru/login<br>此詐騙網址將合法網址放在詐騙網址的子網域，其網域其實是 user-mail.ru，並非 www.yahoo.com。</p>
    </div>
    <div class="text-block" id="act4">
        <h2>四、找出進階陷阱</h2>
        <p>核對網址最快的方式，就是直接在搜尋引擎上查詢網域，如果搜尋結果列出來的網域與使用者貼上搜尋引擎的網域名稱不同，很有可能就是詐騙陷阱，若網址合法，通常被搜尋的網域與搜尋結果顯示的網域應當一致。</p>
        <figure>
            <img src="/images/knowledge/domain-1.jpg">
            <figcaption>經查詢，確認上下搜尋的網域名稱一致。</figcaption>
        </figure>
    </div>
    <div class="text-block" id="act5">
        <h2>五、注意短網址</h2>
        <p>縮網址是很方便的工具，可以將落落長的網址轉換為簡單的短網址，但短網址就像捷徑，帶來便利的同時，往往也伴隨著風險，因為使用者在點擊短網址之前，無法確定該網址會導向安全的網站，盡量避免點擊短網址通常是最安全的作法。<br>短網址的幾個範例：<br>https://goo.gl/e5wdc<br>https://bit.ly/2RymzeB<br>https://tinyurl.com/y9nttlzq</p>
    </div>
    <div class="text-block" id="act6">
        <h2>六、參考資料</h2>
        <dl>
            <dd><a href="https://zh.wikipedia.org/wiki/%E5%9F%9F%E5%90%8D" target="_blank">維基百科: 域名</a></dd>
            <dd><a href="https://www.eztrust.com.tw/html/faq/qa_show.aspx?id=17" target="_blank">什麼是網域名稱(網址)？為何要申請網域名稱(網址)？</a></dd>
            <dd><a href="https://ithelp.ithome.com.tw/questions/10029001" target="_blank">iT邦幫忙</a></dd>
            <dd><a href="https://www.ibest.com.tw/news/ins.php?index_id=56" target="_blank">什麼是子網域？什麼是次網域？</a></dd>
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