<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="1" fileType="klNetwork" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act1">一、簡介</a></li>
            <li><a href="#act2">二、影響範圍</a></li>
            <li><a href="#act3">三、六大原則</a></li>
            <li><a href="#act4">四、怎樣算是違反 GDPR？</a></li>
            <li><a href="#act5">五、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act1">
        <h2>一、簡介</h2>
        <p>GDPR，全名為「General Data Protection Regulation」，意即歐盟法律中對所有歐盟個人關於數據保護和隱私的規範，於2018 年 5 月 25 日正式開始實施，依照 GDPR 法規，若歐盟公民的個人資料遭到外洩，企業必須在 72 小時內通報，否則將會面臨鉅額的罰款。由於現今網路、交通影響無遠弗屆，資料本身幾乎已無地區性可言，無分企業規模、類別，凡是客戶有接觸到歐盟公民，皆必須遵守 DGPR 規範，可說無人能置身事外。</p>
    </div>
    <div class="text-block" id="act2">
        <h2>二、影響範圍</h2>
        <ul>
            <li>
                客戶中有歐盟公民：<br>
                無論是電商還是旅館、餐廳，只要握有歐盟公民顧客的個資、信用卡資料都算。<br><br>
            </li>
            <li>
                雇用歐盟員工、歐盟供應商：<br>
                不分正職、兼職，或是供應商、合作廠商等，只要握有其保險資料、薪資紀錄、聯絡資訊等都算。<br><br>
            </li>
            <li>
                非營利組織與政府機構：<br>
                除了一般企業，政府機構與非營利組織同樣也必須遵守，如果志工、會員、贊助者、捐款人、顧問是歐盟公民，所掌握的聯絡資訊、稅捐資料等，都受 GDPR 規範。<br><br>
            </li>
        </ul>
    </div>
    <div class="text-block" id="act3">
        <h2>三、六大原則</h2>
        <ol>
            <li>
                正確性：<br>
                個人資料必須確保正確，若出現不正確的個人資料，應訂立合理措施以立即刪除或修改。<br><br>
            </li>
            <li>
                公開透明性：<br>
                必須以「合法」、「公平」、「透明」手段來蒐集、處理個人資料。<br><br>
            </li>
            <li>
                目的性：<br>
                必須以明確、合法的目的來蒐集個人資料。<br><br>
            </li>
            <li>
                儲存限制性：<br>
                不得逾越處理個資目的的必要範圍，並在資料儲存期間做合理保管。<br><br>
            </li>
            <li>
                機密性：<br>
                必須以資安手段確保個人資料不被破壞或散布。<br><br>
            </li>
            <li>
                最低性：<br>
                必須在最低限度內蒐集、使用個人資料。
            </li>
        </ol>
    </div>
    <div class="text-block" id="act4">
        <h2>四、怎樣算是違反 GDPR？</h2>
        <ol>
            <li>
                保護不周：<br>
                不僅僅是企業對客戶個資保護不周導致外流或被竊取，「只要防護不周就算違反」。<br><br>
            </li>
            <li>
                脫離約定目的、缺乏正當性：<br>
                像是把某活動搜集的個資，用於另一個無關的活動或機構使用。<br><br>
            </li>
            <li>
                未給予當事人應有權利：<br>
                當事人必須擁有「刪除」、「更正」、「轉移」等權利。
            </li>
        </ol>
        <p>歐盟是世界最大的經濟體，GDPR 的實施於台灣而言自然也無法坐視不管，其中預計會受影響的行業包括：網路零售、金融保險、航空運輸、旅遊觀光、人力資源、貨物進出口...等。</p>
        <p>而目前台灣個資法對於個人資料收集的同意政策採「推定同意」，即相關單位已提供某客戶個資，若該客戶未表示拒絕，則推定當事人已同意，與 GDPR 「自願、具體聲明同意」的型態並不相符。</p>
    </div>
    <div class="text-block" id="act5">
        <h2>五、參考資料</h2>
        <dl>
            <dd><a href="https://eugdpr.org/" target="_blank">EU GDPR.ORG</a></dd>
            <dd><a href="https://technews.tw/2018/06/04/eu-gdpr-lazy-bag/" target="_blank">【懶人包】史上最嚴苛 GDPR 來襲，莫急莫慌莫害怕</a></dd>
            <dd><a href="https://www.bnext.com.tw/article/49249/gdpr-general-data-protection-regulation-eu-" target="_blank">沒有人是局外人！史上最嚴個資法衝擊全球，帶你搞懂什麼是GDPR</a></dd>
            <dd><a href="https://applealmond.com/posts/32639" target="_blank">什麼是GDPR？三分鐘帶你了解「史上最嚴格個資法」相關規定</a></dd>
            <dd><a href="https://zh.wikipedia.org/wiki/%E6%AD%90%E7%9B%9F%E4%B8%80%E8%88%AC%E8%B3%87%E6%96%99%E4%BF%9D%E8%AD%B7%E8%A6%8F%E7%AF%84" target="_blank">一般資料保護規範</a></dd>
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