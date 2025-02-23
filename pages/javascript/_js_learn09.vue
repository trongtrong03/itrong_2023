<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="9" fileType="learnJs" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、BOM 簡介</a></li>
            <li><a href="#act2">二、常見屬性</a></li>
            <li><a href="#act3">三、常見方法</a></li>
            <li><a href="#act4">四、參考資料</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <p>在學習網頁設計的基礎中，初學者都會被灌輸網頁是由 HTML、CSS、JavaScript 構成的說法：HTML 是骨幹、CSS 負責美化，而 JavaScript 則用來實現網頁與使用者之間的互動行為。然而深入探討後就會發現，真正實現網頁互動行為的操作方法是由 JavaScript 的執行平台──也就是「瀏覽器」所提供，它們（操作方法）基本上會由「<b>BOM</b>」和「<b>DOM</b>」兩個物件持有，前端開發者即透過 JavaScript 去呼叫 <b>BOM</b> 與 <b>DOM</b> 提供的 API 來控制瀏覽器的行為與網頁的內容。</p>
        <p>除了 <b>BOM</b> 與 <b>DOM</b> 兩大物件模型外，JavaScript 亦內建以 ECMAScript 標準為基礎的標準物件，接下來的幾篇文章將來記錄這些物件模型與其操作方法的內容。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、BOM 簡介</h2>
        <p>Browser Object Model，簡稱 <b>BOM</b>，中文意為瀏覽器物件模型，顧名思義是瀏覽器提供的物件，是一組與瀏覽器視窗有關的物件模型。其核心物件為 <em>window</em> 物件，指的是目前瀏覽器的視窗或頁籤，它在瀏覽器主要扮演著「操作全域物件（Global Object）」及「JavaScript 用來與瀏覽器溝通的窗口」兩個角色。</p>
        <p>首先我們來談談「全域物件」的部份，全域物件（Global Object）指的是在全域作用範圍內宣告的變數、物件、函式...等，通通都會自動變成全域物件的屬性。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var myName = 'itrong';</code></pre>
        </div>
        <p>這樣以 <em>myName</em> 宣告的變數，我們稱之為全域變數，可以透過 <em>window</em> 去取得它們。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">console.log(window.myName);</code></pre>
        </div>
        <p>這裡額外需要瞭解的是，在全域作用範圍內宣告的全域變數，無法直接用 <em>delete</em> 關鍵字移除變數，譬如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var myName = 'itrong';
console.log(window.myName);     // "itrong"

delete window.myName;
console.log(window.myName);     // "itrong"</code></pre>
        </div>
        <p>但如果是用 <em>window</em> 物件指定的屬性就能透過 <em>delete</em> 關鍵字移除：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">window.myName = 'itrong';
console.log(window.myName);     // "itrong"

delete window.myName;
console.log(window.myName);     // undefined</code></pre>
        </div>
        <p><br></p>
        <p>至於「JavaScript 用來與瀏覽器溝通的窗口」，在初心者時期最常接觸到的莫過於「<em>alert()</em>」了，這個方法可以呼叫出瀏覽器內建的警告框。舉例來說：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">window.alert("Hello!");</code></pre>
        </div>
        <p>通過這樣的程式碼，瀏覽器就能彈出帶有「Hello!」訊息的警告對話框，又或者是用 <em>window.confirm()</em>、<em>window.prompt()</em>，同樣也能實現類似的功用。</p>
        <figure>
            <img src="/images/learn/js/learn-bom-1.jpg">
            <figcaption>window.alert()</figcaption>
        </figure>
        <figure>
            <img src="/images/learn/js/learn-bom-2.jpg">
            <figcaption>window.confirm()</figcaption>
        </figure>
        <figure>
            <img src="/images/learn/js/learn-bom-3.jpg">
            <figcaption>window.prompt()</figcaption>
        </figure>
        <p>當我們使用 <em>window</em> 內的物件，前面的 <em>window</em> 是可以省略不寫的，因此我們才會看到或曾經直接使用 <em>alert()</em> 操作程式碼內容的寫法。</p>
    </div>
    <div class="text-block" id="act2">
        <h2>二、常見屬性</h2>
        <p>不管是 <em>alert()</em>、<em>confirm()</em> 還是 <em>prompt()</em>，它們其實都是 <em>window</em> 的子物件（它們既是「方法」，卻同時也是物件，屬性亦然），<em>window</em> 的子物件很多，以下列舉一些常見的屬性並作簡單介紹：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">window.myName = 'itrong';
console.log(window.myName);     // "itrong"

delete window.myName;
console.log(window.myName);     // undefined</code></pre>
        </div>
        <ul>
            <li>document</li>
            <li>screen</li>
            <li>history</li>
            <li>location</li>
            <li>navigator</li>
        </ul>
        <h3>document：</h3>
        <p><em>document</em> 指的是視窗裡目前顯示的文件物件，它其實就是「<b>DOM</b>」文件物件模型，換言之，<b>DOM</b> 乃 <b>BOM</b> 核心 <em>window</em> 的子物件之一。所以關於 <em>document</em> 的詳細內容，暫且留到下一個章節再作說明。</p>
        <p><br></p>
        <h3>screen：</h3>
        <p><em>screen</em> 與使用者瀏覽網頁時的裝置螢幕有關，可透過不同的屬性來取得螢幕的相關資訊。比方來說，我可以用 <em>screen.width</em> 與 <em>screen.height</em> 取得螢幕的總寬高。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="oNzyajx" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="js-learn: screen-1">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/oNzyajx">
            js-learn: screen-1</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>抑或是使用 <em>screen.availWidth</em>、<em>screen.availHeight</em> 獲取螢幕的可用寬高：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="jOMKeMe" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="js-learn: screen-2">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/jOMKeMe">
            js-learn: screen-2</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>其他還有一些屬性可以提供螢幕不同的資訊，以下用一張表格簡單敘述之：</p>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f1"></div>
                    <div class="f-f3">用途</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>width</em></div>
                    <div class="f-f3">回傳螢幕的總寬度。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>height</em></div>
                    <div class="f-f3">回傳螢幕的總高度。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>left</em></div>
                    <div class="f-f3">回傳指定元素與螢幕左側之間的水平距離。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>top</em></div>
                    <div class="f-f3">回傳指定元素與螢幕頂端之間的垂直距離。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>availWidth</em></div>
                    <div class="f-f3">回傳螢幕的可用寬度。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>availHeight</em></div>
                    <div class="f-f3">回傳螢幕的可用高度。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>availLeft</em></div>
                    <div class="f-f3">回傳指定元素與螢幕可用區域左側之間的水平距離。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>availTop</em></div>
                    <div class="f-f3">回傳指定元素與螢幕可用區域頂端之間的垂直距離。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>colorDepth</em></div>
                    <div class="f-f3">回傳螢幕的色彩深度。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>pixelDepth</em></div>
                    <div class="f-f3">回傳螢幕的色彩分辨率。</div>
                </div>
            </div>
        </div>
        <p><br></p>
        <h3>history：</h3>
        <p><em>history</em> 可以用來操作瀏覽器頁面的歷史記錄，例如常見的載入瀏覽歷史的上一頁與下一頁。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">window.history.back();   // 上一頁
window.history.forward();   // 下一頁</code></pre>
        </div>
        <p><br></p>
        <p>我們也可以透過 <em>go()</em> 方法，令網頁移動到特定的歷史記錄，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">window.history.go(-1);    // 上一頁
window.history.go(1);    // 下一頁
window.history.go(0);    // 等同重新整理當前頁面</code></pre>
        </div>
        <blockquote>
            <p>在 HTML5 中還加入了 <em>history.pushState()</em> 和 <em>history.replaceState()</em> 方法，可用來加入或修改歷史記錄，這裡僅先作拋磚引玉，留到未來有機會再深入研究。</p>
        </blockquote>
        <p><br></p>
        <h3>location：</h3>
        <p><em>location</em> 可對網頁的 URL 網址進行操作，像是取得目前頁面的網址，或是將瀏覽器導向指定的頁面。以下我們直接看範例：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="MWjXBvj" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="js-learn: location-1">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/MWjXBvj">
            js-learn: location-1</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><em>location.href</em> 可返回目前網頁的 URL 值，我們也可以指定網址給它，讓使用者點擊指定元素時將瀏覽器導向指定網址，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-html">&lt;button onClick="window.location.href='https://www.google.com.tw/'" Value="Click"&gt;點我&lt;/button&gt;</code></pre>
        </div>
        <p>除了上述的 <em>href</em>，還有這些屬性方法可以使用：</p>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f1"></div>
                    <div class="f-f3">用途</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>hostname</em></div>
                    <div class="f-f3">回傳網頁主機的域名。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>pathname</em></div>
                    <div class="f-f3">回傳目前頁面的路徑與文件名稱。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>port</em></div>
                    <div class="f-f3">回傳網頁主機的端口。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>protocol</em></div>
                    <div class="f-f3">回傳網頁使用的傳輸協定（http: 或 https:）。</div>
                </div>
            </div>
        </div>
        <p>另外要提的是 <em>location.assign</em> 與 <em>location.replace</em>，<em>location.assign</em> 相當於 HTML 中的 <em>&lt;a&gt;</em> 元素，可直接令網頁連接到指定的 URL，因此可以點擊上一頁返回前一個歷史記錄；而 <em>location.replace</em> 則是將指定的 URL 替換目前網頁的內容，即使點擊上一頁也無法返回前一個瀏覽的記錄。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="html,result" data-user="itrong" data-slug-hash="abmKjRY" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="js-learn: location-2">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/abmKjRY">
            js-learn: location-2</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>navigator：</h3>
        <p><em>navigator</em> 用來取得瀏覽器相關的資訊，包含檢視目前網頁的瀏覽器官方名稱、版本、ID、語系編碼...等，或是回傳是否可以寫入 Cookie、是否有連線...等等。以下直接看範例：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="320" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="OJREarJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="js-learn: navigator-1">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/OJREarJ">
            js-learn: navigator-1</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>有關 <em>navigator</em> 的深入探討可以閱讀這篇：<a href="https://segmentfault.com/a/1190000011316167" target="_blank">window.navigator详解和使用场景</a>，本篇就不詳細轉述。</p>
        <p><br></p>
        <p>當然 <em>window</em> 的屬性不單只有這些，其他還有像是：</p>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f1"></div>
                    <div class="f-f3">用途</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>window.outerWidth</em></div>
                    <div class="f-f3">回傳瀏覽器的寬度。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>window.outerHeight</em></div>
                    <div class="f-f3">回傳瀏覽器的高度。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>window.innerWidth</em></div>
                    <div class="f-f3">回傳包含卷軸在內的瀏覽器可視範圍的寬度。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>window.innerHeight</em></div>
                    <div class="f-f3">回傳包含卷軸在內的瀏覽器可視範圍的高度。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>window.length</em></div>
                    <div class="f-f3">回傳 <em>&lt;frame&gt;</em>、<em>&lt;iframe&gt;</em> 的數量。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>window.name</em></div>
                    <div class="f-f3">回傳瀏覽器的 <em>name</em> 值。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>window.pageXOffset</em></div>
                    <div class="f-f3">回傳網頁水平方向的位移值，等同 <em>window.scrollX</em>。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>window.pageYOffset</em></div>
                    <div class="f-f3">回傳網頁水平方向的位移值，等同 <em>window.scrollY</em>。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>window.scrollMaxX</em></div>
                    <div class="f-f3">回傳網頁卷軸的最大水平位移值。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>window.scrollMaxY</em></div>
                    <div class="f-f3">回傳網頁卷軸的最大垂直位移值。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>window.screenX</em></div>
                    <div class="f-f3">回傳瀏覽器視窗在螢幕的 X 座標。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>window.screenY</em></div>
                    <div class="f-f3">回傳瀏覽器視窗在螢幕的 Y 座標。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>window.opener</em></div>
                    <div class="f-f3">回傳開啟瀏覽器視窗的物件參考。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>window.closed</em></div>
                    <div class="f-f3">回傳瀏覽器視窗視窗是否被關閉。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>window.parent</em></div>
                    <div class="f-f3">回傳目前瀏覽器視窗或是子框架如 <em>&lt;iframe&gt;</em> 、 <em>&lt;frame&gt;</em> 、 <em>&lt;object&gt;</em> 等的親代物件。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>window.self</em></div>
                    <div class="f-f3">回傳瀏覽器本身的參考，通常用來判斷是否為子框架。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>window.top</em></div>
                    <div class="f-f3">回傳最頂層瀏覽器的參考。</div>
                </div>
                <div class="f-row">
                    <div class="f-f1"><em>window.status</em></div>
                    <div class="f-f3">用來設定或存取狀態列。</div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-block" id="act3">
        <h2>三、常見方法</h2>
        <h3>alert()：</h3>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">window.alert("Hello!");</code></pre>
        </div>
        <p>前面有提過，這個方法可以令瀏覽器跳出一個帶有文字訊息的警示對話框，與它相似的還有 <em>confirm()</em>（含「確認」與「取消」按鈕的詢問式對話框）、<em>prompt()</em>（可輸入訊息的詢問式對話框）。</p>
        <p>這裡補充一個豆知識，假如填入的文字訊息想要換行的話，可加入 <em>\n</em> 進行換行。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">window.alert("Hello! \n JavaScript!");</code></pre>
        </div>
        <p><br></p>
        <h3>open()：</h3>
        <p><em>open()</em> 方法可用來新增一個瀏覽器視窗，或是查詢一個已經存在的瀏覽器視窗。其語法為：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">window.open(strUrl, strWindowName, [strWindowFeatures]);</code></pre>
        </div>
        <p>前兩個參數從字面意義上推敲應該不難理解，即各自表示要在新增視窗裡打開的 URL 網址及名稱。<em>[strWindowFeatures]</em> 則是一種可選參數，用來加入與視窗有關的設定，例如寬高、開啟方式等，假如沒有要指定參數條件的話，則可以省略不寫。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">window.open("https://www.google.com.tw/", "This is Google");</code></pre>
        </div>
        <p>但如果像是名稱不指定，URL 與可選參數則需要指定參數的情況下，<em>strWindowName</em> 仍必須存在（可用空內容），否則 <em>[strWindowFeatures]</em> 的參數內容會被視為 <em>strWindowName</em> 的參數。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">window.open("https://www.google.com.tw/", "", "_blank");</code></pre>
        </div>
        <p><br></p>
        <p>起初在練習的時候，以為 <em>strWindowName</em> 輸入的字串是瀏覽器上方的 <em>title</em>，實際情況則不然，那 <em>strWindowName</em> 加不加究竟有什麼差別？其實除了可以提供其他屬性或方法調用外，它還可以讓透過 <em>open()</em> 方法打開的 URL 重複覆蓋打開的瀏覽器頁籤或視窗裡，舉例來說：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="qBaydaO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: open()-1">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/qBaydaO">
            JS-learn: open()-1</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>假設我們不設置 <em>strWindowName</em> 或給它們相同的名稱，那麼不管你執行哪一個 <em>open()</em>，其連結都會在同一個新增的視窗上開啟。但相同例子，我們分別賦予這兩個函式不同的 <em>strWindowName</em>，它們就不會有互相覆蓋視窗的情況：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="GRjBJGy" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: open()-2">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/GRjBJGy">
            JS-learn: open()-2</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>由此可知，<em>strWindowName</em> 指的並不是瀏覽器新開視窗上面的 <em>title</em>，而是對該瀏覽器新視窗本身的命名。</p>
        <p><br></p>
        <h3>close()：</h3>
        <p>既然有 <em>open()</em>，那肯定就有 <em>close()</em> 方法。與 <em>open()</em> 相反，<em>close()</em> 方法用於關閉瀏覽器視窗或頁籤。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">window.close();</code></pre>
        </div>
        <p>我們也可以關閉指定的瀏覽器視窗或頁籤，像是關閉用 <em>open()</em> 方法新增的視窗：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="360" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="MWjBwRW" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: close()-1">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/MWjBwRW">
            JS-learn: close()-1</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>resizeTo()、resizeBy()：</h3>
        <p>如果是由 Jquery 入門 JavaScript 程式語言的人，可能會直接誤用 <em>window.resize()</em> 調整瀏覽器視窗大小，但事實上 JavaScript 並沒有 <em>resize()</em> 方法，用來控制瀏覽器視窗的方法則分別有 <em>resizeTo()</em> 及 <em>resizeBy()</em> 這兩種，且用法和 Jquery 的 <em>resize()</em> 有些不同。</p>
        <p><em>resizeTo()</em> 用於將瀏覽器視窗調整為指定的寬高，它的語法公式為：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">window.resizeTo(width, height);</code></pre>
        </div>
        <p>裏頭的寬高值是絕對值，且必須為整數（其單位為像素），假設我的函式為透過 <em>open()</em> 方法新增一個視窗並將寬高參數值分別設定為 <b>600</b> 與 <b>300</b>，那麼新增的視窗大小就會是 <b>600px x 300px</b>。此外，也可以結合 <em>screen</em> 的 <em>availWidth</em>、<em>availHeight</em> 屬性，令視窗調整為可視畫面寬高指定比例的大小。如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">window.resizeTo(
    window.screen.availWidth / 2,
    window.screen.availHeight / 2
);</code></pre>
        </div>
        <p>寬高各除以 <b>2</b>，相當於調整後的視窗大小為螢幕可視區域內的 <b>1/4</b>。</p>
        <p><br></p>
        <p><em>resizeBy()</em> 雖然同樣也是用來調整瀏覽器視窗的大小，但有別於 <em>resizeTo()</em> 為絕對單位，<em>resizeBy()</em> 的參數值是相對單位。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">window.resizeBy(xDelta, yDelta);</code></pre>
        </div>
        <p>這個方法會相對目前視窗畫面的大小，依填入參數調整新的尺寸，<em>xDelta</em>、<em>yDelta</em> 分別代表視窗水平方向、垂直方向的數值，若值為正數，代表調整的畫面增加大小，反過來若值為負數，代表畫面縮小。例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">window.resizeBy(-100, 100);</code></pre>
        </div>
        <p>如果我在函式中一樣經由 <em>open()</em> 定義了新增視窗的敘述句，並指定它新增的視窗大小為 <b>400x400</b>，加入上方範例的調整數值後，那麼經過調整的新視窗寬高將會是 <b>300x500</b>。</p>
        <p><br></p>
        <h3>home()：</h3>
        <p><em>home()</em> 方法可以令目前網頁回到瀏覽器設定的首頁。然而，根據 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/home" target="_blank">MDN Web Docs</a> 的敘述，這個方法屬於非標準化（Non-standard）的方法，即表示可能部份瀏覽器支援，但其他瀏覽器卻不支援它。尤其 <em>home()</em> 被目前主流瀏覽器視為過時的方法，原則上應避免使用，之所以會在這裡提出來，一方面也是提醒自己以後不可誤用。</p>
        <p><br></p>
        <h3>setInterval()、setTimeout()：</h3>
        <p>所謂 JavaScript 計時事件，指的是經過設定的時間間隔時，執行或停止該事件裡的函式，<em>setInterval()</em>、<em>setInterval()</em> 皆屬於計時事件裡的方法，用來執行特定的函式。它們的語法規則相同，皆為：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">window.setInterval(function, delay);
window.setTimeout(function, delay);</code></pre>
        </div>
        <p>例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">setInterval(function () {
    document.write("Hello!" + "&lt;br&gt;");
}, 3000);</code></pre>
        </div>
        <p>表示瀏覽器載入後每經過三秒，便會自動執行一次 <em>setInterval()</em> 中 <em>function</em> 裡的敘述句，也就是在文件裡寫入「Hello!」的字樣，並加入換行元素。而我們也可以先用函式定義好計時事件，再透過 HTML 元素去觸發該函式：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="YzGjybB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: setInterval-1">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/YzGjybB">
            JS-learn: setInterval-1</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>如果函式裡的敘述句很多，一股腦兒地倒在 <em>setInterval()</em> 的 <em>function</em> 覺得不易閱讀，或者該函式不止一個地方會用到，那麼可將函式單獨拉到外面去定義，而 <em>setInterval()</em> 只需直接指定該函式的名稱即可，例如上方的實例就可以改寫成：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">function demo() {
    setTimeout(demoText, 3000);
}

function demoText() {
    document.write("hello!" + "&lt;br&gt;");
}</code></pre>
        </div>
        <p><br></p>
        <p><em>setTimeout()</em> 與 <em>setInterval()</em> 差別在於前者載入延遲時間後，只會執行一次裡面的函式。後者則是載入後每隔指定的時間就會執行一次，且不斷重複。以下是 <em>setTimeout()</em> 的實作範例，可以和前面 <em>setInterval()</em> 的範例作個對比：</p>
        <div class="text-codepen">
            <p class="codepen" data-height="240" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="ZEpjQzJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: setTimeout-1">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/ZEpjQzJ">
            JS-learn: setTimeout-1</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>clearInterval()、clearTimeout()：</h3>
        <p>同樣屬於計時事件，不過 <em>clearInterval()</em> 和 <em>clearTimeout()</em> 則是分別用來取消 <em>setInterval()</em>、<em>setTimeout()</em> 的動作。基本上 <em>setInterval()</em>、<em>setTimeout()</em> 會經由變數宣告，因此 <em>clearInterval()</em>、<em>clearTimeout()</em> 通常只要指定該變數即可。</p>
        <p>例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">var intervalID;
var n = 11;
 
function run() {
    var t = document.getElementById("demo");
    if (n != 0) {
        n = n - 1;
        t.innerHTML = n;
    }
    intervalID = window.setTimeout(run, 1000);
}
 
function stop() {
    window.clearTimeout(intervalID);
}</code></pre>
        </div>
        <p><br></p>
        <h3>scroll()：</h3>
        <p><em>scroll()</em> 方法可令網頁捲軸偏移至指定的位置，其語法結構為：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-javascript">window.scroll(x-coord, y-coord);</code></pre>
        </div>
        <div class="text-codepen">
            <p class="codepen" data-height="320" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="abmQMrd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: scroll-1">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/abmQMrd">
            JS-learn: scroll-1</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><em>x-coord</em>、<em>y-coord</em> 值的單位為像素（<em>px</em>）。</p>
        <p>此外，與捲軸偏移有關的方法尚有 <em>scrollTo()</em> 與 <em>scrollBy()</em>，其中 <em>scrollTo()</em> 的效果等同 <em>scroll()</em>；而 <em>scrollBy()</em> 中的 <em>x</em>、<em>y</em> 值則是在捲軸原本的 <em>x-coord</em>、<em>y-coord</em> 位置分別加上 <em>x</em>、<em>y</em> 的值。</p>
        <p><br></p>
        <h3>moveTo()、moveBy()：</h3>
        <p>這兩個方法的偏移對象是新開的瀏覽器視窗，裡頭的參數分別代表的是螢幕的 <em>x</em>、<em>y</em> 值。<em>moveTo()</em> 用來使視窗移動到螢幕畫面的指定位置；而 <em>moveBy()</em> 則是依新開視窗在螢幕上當前的位置再做 <em>x</em>、<em>y</em> 方向的偏移。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="320" data-theme-id="dark" data-default-tab="js,result" data-user="itrong" data-slug-hash="ZEpmNGK" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS-learn: moveTo">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/ZEpmNGK">
            JS-learn: moveTo</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <p>其實還有許多 <em>window</em> 的方法，因為個人較鮮少使用所以就略過不寫在筆記裡了，而關於 <b>BOM</b> 的文章心得同時亦在此暫告一段落，下一篇文章的主題將聚焦在 <b>DOM</b> 身上。</p>
    </div>
    <div class="text-block" id="act4">
        <h2>四、參考資料</h2>
        <dl>
            <dd><a href="https://www.itread01.com/content/1546565070.html" target="_blank">BOM（瀏覽器物件模型）和DOM(文件物件模型)</a></dd>
            <dd><a href="https://www.happycoding.today/posts/43" target="_blank">JavaScript入門系列：BOM和DOM筆記</a></dd>
            <dd><a href="https://ithelp.ithome.com.tw/articles/10214769" target="_blank">JavaScript 初心者筆記: JS 內建物件 - 全域物件篇</a></dd>
            <dd><a href="https://ithelp.ithome.com.tw/articles/10191666" target="_blank">重新認識 JavaScript: Day 11 前端工程師的主戰場：瀏覽器裡的 JavaScript</a></dd>
            <dd><a href="https://ithelp.ithome.com.tw/articles/10235079" target="_blank">DAY 2 BOM 、 DOM 是什麼？</a></dd>
            <dd><a href="https://medium.com/ck100pro/%E7%80%8F%E8%A6%BD%E5%99%A8%E7%9A%84%E7%89%A9%E4%BB%B6%E6%A8%A1%E5%9E%8B-bom-vs-dom-914552c81cdb" target="_blank">瀏覽器的物件模型：Bom vs Dom</a></dd>
            <dd><a href="https://pydoing.blogspot.com/2011/10/javascript-window.html" target="_blank">程式語言教學誌</a></dd>
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