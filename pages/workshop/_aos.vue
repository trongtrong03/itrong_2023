<template>
    <NuxtLayout name="article">
        <TempWorkshop :propValue="27" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、如何使用？</a></li>
            <li><a href="#act2">二、data-aos 參數一覽</a></li>
            <li><a href="#act3">三、JavaScript 參數一覽</a></li>
            <li><a href="#act4">四、CSS 版本</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <p><a href="https://michalsnik.github.io/aos/" target="_blank">AOS</a>，全名「Animate On Scroll Library」，是一款輕量、且容易使用的畫面滾動觸發動畫套件，引用這款套件並將指定元素添加 AOS 提供的 <em>data</em> 屬性後，當該元素進入畫面滾動範圍內，即可觸發簡易的進場動畫，例如淡入淡出、縮放、移動等效果。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、如何使用？</h2>
        <p>僅需下載 AOS 提供的 <a href="https://unpkg.com/aos@next/dist/aos.js" target="_blank">JS</a> 文件並置入專案資料夾內，然後在網頁文件中引用它即可：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;script src="https://unpkg.com/aos@next/dist/aos.js"&gt;&lt;/script&gt;</code></pre>
        </div>
        <p>接著透過 JavaScript 呼叫它：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">AOS.init();</code></pre>
        </div>
        <p>這是最基本的初始化呼叫方式，AOS 有多樣的設定參數，這部份留到後面再提。</p>
        <p>再來是處理要添加動畫效果的 HTML 元素，以下是基本範例：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;div data-aos="fade-in"&gt;content&lt;/div&gt;</code></pre>
        </div>
        <p><em>data-aos</em> 屬性表示該元素要套用的觸發進場動畫是什麼效果，有淡入淡出（Fade）、翻轉（Flip）、滑動（Slide）、縮放（Zoom）四大種類。除了設置效果類型外，也可以針對動畫觸發的執行時間、延遲、速度曲線等做細部設定，甚至還可以調整動畫元素的觸發位置，像是以左上角為觸發基準，或是中下位置等。有關 <em>data-aos-</em> 系列的相關屬性及參數設置，請見下一章說明。</p>
    </div>
    <div class="text-block" id="act2">
        <h2>二、data-aos 參數一覽</h2>
        <h3>data-aos</h3>
        <p><em>data-aos</em> 表示動畫的類型，有淡入淡出（Fade）、翻轉（Flip）、滑動（Slide）、縮放（Zoom）四大種類，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;div data-aos="fade-in"&gt;content&lt;/div&gt;</code></pre>
        </div>
        <p>以下是各自類型可設置的參數值：</p>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f1">Fade</div>
                    <div class="f-f1">Flip</div>
                    <div class="f-f1">Slide</div>
                    <div class="f-f1">Zoom</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>fade</em></div>
                    <div class="f-f1"></div>
                    <div class="f-f1"></div>
                    <div class="f-f1"><em>zoom-in</em></div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>fade-up</em></div>
                    <div class="f-f1"><em>flip-up</em></div>
                    <div class="f-f1"><em>slide-up</em></div>
                    <div class="f-f1"><em>zoom-in-up</em></div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>fade-down</em></div>
                    <div class="f-f1"><em>flip-down</em></div>
                    <div class="f-f1"><em>slide-down</em></div>
                    <div class="f-f1"><em>zoom-in-down</em></div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>fade-left</em></div>
                    <div class="f-f1"><em>flip-left</em></div>
                    <div class="f-f1"><em>slide-left</em></div>
                    <div class="f-f1"><em>zoom-in-left</em></div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>fade-right</em></div>
                    <div class="f-f1"><em>flip-right</em></div>
                    <div class="f-f1"><em>slide-right</em></div>
                    <div class="f-f1"><em>zoom-in-right</em></div>
                </div>
                <div class="f-row">
                    <div class="f-f1"></div>
                    <div class="f-f1"></div>
                    <div class="f-f1"></div>
                    <div class="f-f1"><em>zoom-out</em></div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>fade-up-right</em></div>
                    <div class="f-f1"></div>
                    <div class="f-f1"></div>
                    <div class="f-f1"><em>zoom-out-up</em></div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>fade-up-left</em></div>
                    <div class="f-f1"></div>
                    <div class="f-f1"></div>
                    <div class="f-f1"><em>zoom-out-down</em></div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>fade-down-right</em></div>
                    <div class="f-f1"></div>
                    <div class="f-f1"></div>
                    <div class="f-f1"><em>zoom-out-left</em></div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>fade-down-left</em></div>
                    <div class="f-f1"></div>
                    <div class="f-f1"></div>
                    <div class="f-f1"><em>zoom-out-right</em></div>
                </div>
            </div>
        </div>
        <p><br></p>
        <h3>data-aos-offset</h3>
        <p><em>data-aos-offset</em> 用來控制動畫元素的偏移值，也就是當元素進入畫面可視範圍開始，依據偏移設定的值必須大於或等於可視區域頂部的距離，動畫效果才會開始運作，簡單來說就是元素進畫面範圍後要再滾動一定距離才會觸發動畫。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;div data-aos="fade-in" data-aos-offset="200"&gt;content&lt;/div&gt;</code></pre>
        </div>
        <p>表示元素在進入畫面範圍後，要再往下滾動 <em>200px</em>，才會觸發 <em>fade-in</em> 淡入的進場效果。</p>
        <p><br></p>
        <h3>data-aos-delay</h3>
        <p><em>data-aos-delay</em> 用來控制動畫元素效果觸發的等待時間，就如同 CSS 的 <em>animation-delay</em> 或 <em>transition-delay</em> 屬性，透過這些屬性可以延遲其效果發生的時間，不會網頁一載入就立即觸發效果，而 <em>data-aos-delay</em> 則是當動畫元素進入畫面可視範圍內後，會再多等待設定的秒數才開始執行。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;div data-aos="fade-in" data-aos-delay="100"&gt;content&lt;/div&gt;</code></pre>
        </div>
        <p>在不特別設定此屬性的情況下預設值為 <em>0</em>。</p>
        <p><br></p>
        <h3>data-aos-duration</h3>
        <p><em>data-aos-duration</em> 用來控制動畫元素效果觸發的執行時間，就如同 CSS 的 <em>animation-duration</em> 或 <em>transition-duration</em> 屬性，透過這些屬性可以設定效果執行的時間。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;div data-aos="fade-in" data-aos-duration="500"&gt;content&lt;/div&gt;</code></pre>
        </div>
        <p>表示動畫元素從隱藏到淡入顯示的過程所花費時間為五秒鐘，在不特別設定此屬性的情況下預設值為 <em>400</em>。</p>
        <p><br></p>
        <h3>data-aos-easing</h3>
        <p><em>data-aos-easing</em> 用來控制動畫元素效果過程的速度曲線，就如同 CSS 的 <em>animation-timing-function</em> 或 <em>transition-timing-function</em> 屬性，可控制效果變化過程是保持相同速度頻率，又或者由慢到快、由快到慢......等。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;div data-aos="fade-in" data-aos-easing="linear"&gt;content&lt;/div&gt;</code></pre>
        </div>
        <p>可用參數列表：</p>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f1">參數</div>
                    <div class="f-f1">名稱</div>
                    <div class="f-f2">說明</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>linear</em></div>
                    <div class="f-f1">線性</div>
                    <div class="f-f2">動畫維持恆速，沒有加速或減速</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>ease</em></div>
                    <div class="f-f1">緩進緩出</div>
                    <div class="f-f2">動畫開始緩慢加速，中間維持較快速度，然後緩慢減速收尾</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>ease-in</em></div>
                    <div class="f-f1">緩進</div>
                    <div class="f-f2">動畫開始緩慢加速，快速收尾</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>ease-out</em></div>
                    <div class="f-f1">緩出</div>
                    <div class="f-f2">動畫結束時以緩慢速度結束</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>ease-in-out</em></div>
                    <div class="f-f1">緩進緩出</div>
                    <div class="f-f2">和 <em>ease</em> 類似，但首尾跟中間加速的過渡更加圓滑</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>ease-in-back</em></div>
                    <div class="f-f1">緩進後彈</div>
                    <div class="f-f2">動畫開始緩慢加速，在結束時有一個回彈效果</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>ease-out-back</em></div>
                    <div class="f-f1">緩出後彈</div>
                    <div class="f-f2">動畫結束緩慢減速，在結束時有一個回彈效果</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>ease-in-out-back</em></div>
                    <div class="f-f1">緩進緩出後彈</div>
                    <div class="f-f2"></div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>ease-in-sine</em></div>
                    <div class="f-f1"></div>
                    <div class="f-f2">sine 是正弦函數的意思</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>ease-out-sine</em></div>
                    <div class="f-f1"></div>
                    <div class="f-f2"></div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>ease-in-out-sine</em></div>
                    <div class="f-f1"></div>
                    <div class="f-f2"></div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>ease-in-quad</em></div>
                    <div class="f-f1"></div>
                    <div class="f-f2">quad 是二次方程式的意思</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>ease-out-quad</em></div>
                    <div class="f-f1"></div>
                    <div class="f-f2"></div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>ease-in-out-quad</em></div>
                    <div class="f-f1"></div>
                    <div class="f-f2"></div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>ease-in-cubic</em></div>
                    <div class="f-f1"></div>
                    <div class="f-f2">cubic 是三次方程式的意思</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>ease-out-cubic</em></div>
                    <div class="f-f1"></div>
                    <div class="f-f2"></div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>ease-in-out-cubic</em></div>
                    <div class="f-f1"></div>
                    <div class="f-f2"></div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>ease-in-quart</em></div>
                    <div class="f-f1"></div>
                    <div class="f-f2">cubic 是四次方程式的意思</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>ease-out-quart</em></div>
                    <div class="f-f1"></div>
                    <div class="f-f2"></div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>ease-in-out-quart</em></div>
                    <div class="f-f1"></div>
                    <div class="f-f2"></div>
                </div>
            </div>
        </div>
        <p>後面幾項參數比較少用到就不多做解釋，但基本上效果和前面大同小異，差別在於快慢變化間的柔順程度。在不特別設定此屬性的情況下預設值為 <em>ease</em>。</p>
        <p><br></p>
        <h3>data-aos-mirror</h3>
        <p><em>data-aos-mirror</em> 這個屬性指的是「鏡像」效果，即設置的動畫效果在觸發時會反轉方向，這意味著當使用者向上滾動頁面時，動畫效果將以相反的方向播放。它的值是布林值，也就是 <em>true</em> 或 <em>false</em>，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;div data-aos="fade-in" data-aos-mirror="true"&gt;content&lt;/div&gt;</code></pre>
        </div>
        <p><br></p>
        <h3>data-aos-once</h3>
        <p><em>data-aos-once</em> 用來控制動畫元素是否只執行一次，預設值為 <em>false</em>，表示該動畫元素離開畫面可視範圍後會消失，當下次進入畫面又重新執行一次，反反覆覆；若設置為 <em>true</em>，那麼就只有第一次進場的時候會執行過場動畫，之後會停留在最後進場的樣子，即使離開畫面範圍也不會消失，只是再次進入範圍內也不會再觸發動畫。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;div data-aos="fade-in" data-aos-once="false"&gt;content&lt;/div&gt;</code></pre>
        </div>
        <p><br></p>
        <h3>data-aos-anchor-placement</h3>
        <p><em>data-aos-anchor-placement</em> 用來設定動畫元素的錨點位置，假如常使用或有使用繪圖軟體經驗的，應該都知道錨點的意思，即將物件分成九宮格，每個線條交錯點就是錨點。設定錨點的位置，可以決定動畫元素的觸發點要以哪一個錨點為基準，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;div data-aos="fade-in" data-aos-anchor-placement="bottom-left"&gt;content&lt;/div&gt;</code></pre>
        </div>
        <p><em>bottom-left</em> 表示我們將動畫元素的錨點設為左下角，只有當該動畫元素的左下角進入可試畫面範圍內時，才會觸發其過場動畫。</p>
    </div>
    <div class="text-block" id="act3">
        <h2>三、JavaScript 參數一覽</h2>
        <p>暫無內容。</p>
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