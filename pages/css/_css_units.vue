<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="2" fileType="learnCSS" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act0">序、前言</a></li>
            <li><a href="#act1">一、彙整列表</a></li>
            <li><a href="#act2">二、絕對單位與相對單位</a></li>
            <li><a href="#act3">三、網頁單位</a></li>
            <li><a href="#act4">四、網頁屬性</a></li>
            <li><a href="#act5">五、印刷單位</a></li>
            <li><a href="#act6">六、裝置可視單位</a></li>
        </ul>
    </div>
    <div class="text-block" id="act0">
        <h2>序、前言</h2>
        <p>當我們進行網頁開發的時候，無論是元素佔據的空間比例，抑或者文字的尺寸大小，皆需要給予度量單位以指示其在畫面中的顯示幅度。而在 CSS 世界裡存在相當繁多的單位屬性值，雖說通常情況下會使用到的可能不外乎就那幾種（例如 <em>px</em>、<em>%</em>、<em>rem</em> ...等），不過若能多知道一些種類的度量單位，興許在某些開發需求條件下就能更有效或正確地作業。本篇將參考多位前人主流的分類，以章節區隔的方式一一作介紹，那麼，以下開始吧。</p>
    </div>
    <div class="text-block" id="act1">
        <h2>一、彙整列表</h2>
        <p>首先，以下列出目前截至 CSS3 為止已知的單位名單：</p>
        <h3>1. 網頁單位：</h3>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f0">Unit</div>
                    <div class="f-f1">Name</div>
                    <div class="f-f1">Description</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>px</em></div>
                    <div class="f-f1">點（像素）</div>
                    <div class="f-f1"></div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>%</em></div>
                    <div class="f-f1">百分比</div>
                    <div class="f-f1"></div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>em</em></div>
                    <div class="f-f1">依據父元素的 <em>px</em> 值相乘設定的倍數</div>
                    <div class="f-f1"></div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>rem</em></div>
                    <div class="f-f1">依據根元素（<em>&lt;html&gt;</em>）的 <em>px</em> 值相乘設定的倍數</div>
                    <div class="f-f1"></div>
                </div>
            </div>
        </div>
        <p><br></p>
        <h3>2. 網頁屬性：</h3>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f0">Unit</div>
                    <div class="f-f1">Name</div>
                    <div class="f-f1">Description</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>medium</em></div>
                    <div class="f-f1">相當於 <em>16px</em></div>
                    <div class="f-f1">網頁的預設值，也是 <em>&lt;h4&gt;</em> 的預設值</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>large</em></div>
                    <div class="f-f1"><em>medium</em> 的 1.1 倍</div>
                    <div class="f-f1"><em>&lt;h3&gt;</em> 的預設值</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>x-large</em></div>
                    <div class="f-f1"><em>medium</em> 的 1.5 倍</div>
                    <div class="f-f1"><em>&lt;h2&gt;</em> 的預設值</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>xx-large</em></div>
                    <div class="f-f1"><em>medium</em> 的 2 倍</div>
                    <div class="f-f1"><em>&lt;h1&gt;</em> 的預設值</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>larger</em></div>
                    <div class="f-f1">父元素的 120%</div>
                    <div class="f-f1"></div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>small</em></div>
                    <div class="f-f1"><em>medium</em> 的 0.8 倍</div>
                    <div class="f-f1"><em>&lt;h5&gt;</em> 的預設值</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>x-small</em></div>
                    <div class="f-f1"><em>medium</em> 的 0.75 倍</div>
                    <div class="f-f1"></div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>xx-small</em></div>
                    <div class="f-f1"><em>medium</em> 的 0.6 倍</div>
                    <div class="f-f1"><em>&lt;h6&gt;</em> 的預設值</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>smaller</em></div>
                    <div class="f-f1">父元素的 80%</div>
                    <div class="f-f1"></div>
                </div>
            </div>
        </div>
        <p><br></p>
        <h3>3. 印刷單位：</h3>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f0">Unit</div>
                    <div class="f-f1">Name</div>
                    <div class="f-f1">Description</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>pt</em></div>
                    <div class="f-f1">印表機的「點」（point）</div>
                    <div class="f-f1">1pt = 1/72 in，在 96 dpi 系統下 1px = 0.75pt</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>pc</em></div>
                    <div class="f-f1">pica</div>
                    <div class="f-f1">1 Pica = 12 pt</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>in</em></div>
                    <div class="f-f1">英吋</div>
                    <div class="f-f1">在 96 dpi 系統下 1in = 96px</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>cm</em></div>
                    <div class="f-f1">公分</div>
                    <div class="f-f1">在 96 dpi 系統下 1cm = 37.795275593333px</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>mm</em></div>
                    <div class="f-f1">公厘</div>
                    <div class="f-f1">在 96 dpi 系統下 1mm = 3.7795275593333px</div>
                </div>
            </div>
        </div>
        <p><br></p>
        <h3>4. 裝置可視單位：</h3>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f0">Unit</div>
                    <div class="f-f1">Name</div>
                    <div class="f-f1">Description</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>vw</em></div>
                    <div class="f-f1">Viewport Width</div>
                    <div class="f-f1">裝置可視範圍的寬度</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>vh</em></div>
                    <div class="f-f1">Viewport Height</div>
                    <div class="f-f1">裝置可視範圍的高度</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>vmin</em></div>
                    <div class="f-f1">the smallest of the viewport width or height</div>
                    <div class="f-f1">裝置可視範圍寬或高的最小值</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>vmax</em></div>
                    <div class="f-f1">the largest of the viewport width or height</div>
                    <div class="f-f1">裝置可視範圍寬或高的最大值</div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-block" id="act2">
        <h2>二、絕對單位與相對單位</h2>
        <p>瀏覽器支援的度量單位除了本身應用領域外，又大抵可區分「絕對單位」與「相對單位」兩種型態。所謂的「絕對單位」（absolute）指的是可對應到實際尺寸的度量單位，它們不會受到父元素或根元素單位運算影響自身的值，例如 <em>in</em>（英吋）、<em>cm</em>（公分）...等。反過來說，如果父元素或根元素，甚至瀏覽器設定有變更，該度量單位在網頁上的尺寸也會發生改變的，那就是「相對單位」（relative）了，基本上 CSS 支援的單位大多都屬於相對單位，請見下方圖表。</p>
        <figure>
            <img src="/images/learn/css/units-1.jpg">
        </figure>
        <p>如果仍有人對相對單位的定義一知半解，這邊用 <em>%</em> 舉一個簡單的例子：假設我們給一個元素設定文字大小（<em>font-size</em>）為 <em>200%</em>，若其父元素已設定 <em>font-size</em> 為 <em>16px</em>，那麼在該元素內文字大小在瀏覽器上的顯示將為 <em>32px</em>（16px * 200%）。但是當我們將父元素的文字大小改成 <em>20px</em> 時，子元素 <em>200%</em> 的文字大小將會變為 <em>40px</em>，而非「固定」都是 <em>32px</em> 大小，只要符合此特性的度量單位皆屬於相對單位。</p>
        <p>在相對單位中最容易引起誤會的當屬 <em>px</em>（像素）了，相信許多人──包含本人在內，原本應該都認為像素屬於絕對單位，儘管關於網頁單位是否要存在「絕對」還是「相對」的區分曾是過去引起廣泛討論的議題，畢竟即便是實際物理存在的單位，如公分、英吋...等，經由瀏覽器呈現仍然會被換算成像素顯示，而像素成像大小又取決裝置設備的解析度，並非確定的物理量...其實由此亦已不難理解，像素為什麼在 CSS 規範中最後又被列為相對單位的原因了，因為像素更近似一種抽象單位。</p>
        <p>但我們其實也不用過於執著絕對單位與相對單位定義，在網頁排版設計裡基本上是不大使用絕對單位的，比起定義，開發者更需要的是裡解其他相對單位與像素、或是與其他相對單位之間的相對換算依據。</p>
    </div>
    <div class="text-block" id="act3">
        <h2>三、網頁單位</h2>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f0">Unit</div>
                    <div class="f-f1">Name</div>
                    <div class="f-f1">Description</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>px</em></div>
                    <div class="f-f1">點（像素）</div>
                    <div class="f-f1"></div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>%</em></div>
                    <div class="f-f1">百分比</div>
                    <div class="f-f1"></div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>em</em></div>
                    <div class="f-f1">依據父元素的 <em>px</em> 值相乘設定的倍數</div>
                    <div class="f-f1"></div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>rem</em></div>
                    <div class="f-f1">依據根元素（<em>&lt;html&gt;</em>）的 <em>px</em> 值相乘設定的倍數</div>
                    <div class="f-f1"></div>
                </div>
            </div>
        </div>
        <p><br></p>
        <h3>px：</h3>
        <p>Pixel，像素，是影像的基礎採樣單位，也是網頁設計最基本也是最常見到的度量單位，對大多數瀏覽器來說，CSS 使用的不同度量單位都會換算成像素來呈現大小。</p>
        <p><br></p>
        <h3>%：</h3>
        <p>百分比，依據父元素設定的像素值執行乘法運算。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-theme-id="0" data-default-tab="css,result" data-user="itrong" data-slug-hash="PoYbNgP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="css-units _3">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/PoYbNgP/">
            css-units _3</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>em：</h3>
        <p>Emphasize 的縮寫，會往前參考父元素的像素值作「倍數」運算，和百分比類似。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-theme-id="0" data-default-tab="css,result" data-user="itrong" data-slug-hash="PoYbbZg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="css-units _5">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/PoYbbZg/">
            css-units _5</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>rem：</h3>
        <p>Root Emphasize 的縮寫，有別於 <em>em</em> 會繼承父元素的度量單位作運算，<em>rem</em> 計算倍數的對象是根元素（<em>&lt;html&gt;</em>）而無視父元素設定的值。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-theme-id="0" data-default-tab="css,result" data-user="itrong" data-slug-hash="OJLbbvJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="css-units _6">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/OJLbbvJ/">
            css-units _6</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
    </div>
    <div class="text-block" id="act4">
        <h2>四、網頁屬性</h2>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f0">Unit</div>
                    <div class="f-f1">Name</div>
                    <div class="f-f1">Description</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>medium</em></div>
                    <div class="f-f1">相當於 <em>16px</em></div>
                    <div class="f-f1">網頁的預設值，也是 <em>&lt;h4&gt;</em> 的預設值</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>large</em></div>
                    <div class="f-f1"><em>medium</em> 的 1.1 倍</div>
                    <div class="f-f1"><em>&lt;h3&gt;</em> 的預設值</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>x-large</em></div>
                    <div class="f-f1"><em>medium</em> 的 1.5 倍</div>
                    <div class="f-f1"><em>&lt;h2&gt;</em> 的預設值</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>xx-large</em></div>
                    <div class="f-f1"><em>medium</em> 的 2 倍</div>
                    <div class="f-f1"><em>&lt;h1&gt;</em> 的預設值</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>larger</em></div>
                    <div class="f-f1">父元素的 120%</div>
                    <div class="f-f1"></div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>small</em></div>
                    <div class="f-f1"><em>medium</em> 的 0.8 倍</div>
                    <div class="f-f1"><em>&lt;h5&gt;</em> 的預設值</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>x-small</em></div>
                    <div class="f-f1"><em>medium</em> 的 0.75 倍</div>
                    <div class="f-f1"></div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>xx-small</em></div>
                    <div class="f-f1"><em>medium</em> 的 0.6 倍</div>
                    <div class="f-f1"><em>&lt;h6&gt;</em> 的預設值</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>smaller</em></div>
                    <div class="f-f1">父元素的 80%</div>
                    <div class="f-f1"></div>
                </div>
            </div>
        </div>
        <p>這些網頁屬性主要是用在文字字體大小上，除了 <em>x-small</em>、<em>larger</em> 和 <em>smaller</em>，其他分別對應 HTML 中 <em>&lt;h1&gt;</em> 至 <em>&lt;h6&gt;</em> 元素，它們和百分比相同，若父元素的值產生變化就會跟著改變。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-theme-id="0" data-default-tab="html,result" data-user="itrong" data-slug-hash="oNvYZZB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="css-units _9">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/oNvYZZB/">
            css-units _9</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
    </div>
    <div class="text-block" id="act5">
        <h2>五、印刷單位</h2>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f0">Unit</div>
                    <div class="f-f1">Name</div>
                    <div class="f-f1">Description</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>pt</em></div>
                    <div class="f-f1">印表機的「點」（point）</div>
                    <div class="f-f1">1pt = 1/72 in，在 96 dpi 系統下 1px = 0.75pt</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>pc</em></div>
                    <div class="f-f1">pica</div>
                    <div class="f-f1">1 Pica = 12 pt</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>in</em></div>
                    <div class="f-f1">英吋</div>
                    <div class="f-f1">在 96 dpi 系統下 1in = 96px</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>cm</em></div>
                    <div class="f-f1">公分</div>
                    <div class="f-f1">在 96 dpi 系統下 1cm = 37.795275593333px</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>mm</em></div>
                    <div class="f-f1">公厘</div>
                    <div class="f-f1">在 96 dpi 系統下 1mm = 3.7795275593333px</div>
                </div>
            </div>
        </div>
        <p><br></p>
        <h3>pt / pc：</h3>
        <p><em>pt</em> 是指印表機上的每一個點（point），定義是 <em>1pt</em>等於 <em>1/72in</em>，在 72dpi 的作業系統上 <em>1px</em> 等於 <em>1pt</em>，若是在 96dpi 作業係拱，則 <em>1px</em> 等於 <em>0.75pt</em>。</p>
        <p><em>pc</em> 也是運用於印刷的單位，<em>1pc</em>（pica）等於 <em>12pt</em>。這兩個單位皆屬於絕對單位，不因父階層元素或根元素設定的值更改而跟著變化。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-theme-id="0" data-default-tab="css,result" data-user="itrong" data-slug-hash="ZEzBWvy" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="css-units _1">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/ZEzBWvy/">
            css-units _1</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>in / cm / mm：</h3>
        <p>這三個單位是很常見的數字絕對單位，在 96dpi 的作業系統（例如 Windows），<em>1mm</em> 等於 <em>3.7795275593333px</em>，而 <em>1cm</em> 等於 <em>10mm</em>，<em>1in</em> 則又等於 <em>2.54cm</em>，幾乎趨近於 <em>96px</em>，所以一般都會說 1 英吋等於 96 像素。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-theme-id="0" data-default-tab="css,result" data-user="itrong" data-slug-hash="RwboavX" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="css-units _2">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/RwboavX/">
            css-units _2</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
    </div>
    <div class="text-block" id="act6">
        <h2>六、裝置可視單位</h2>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f0">Unit</div>
                    <div class="f-f1">Name</div>
                    <div class="f-f1">Description</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>vw</em></div>
                    <div class="f-f1">Viewport Width</div>
                    <div class="f-f1">裝置可視範圍的寬度</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>vh</em></div>
                    <div class="f-f1">Viewport Height</div>
                    <div class="f-f1">裝置可視範圍的高度</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>vmin</em></div>
                    <div class="f-f1">the smallest of the viewport width or height</div>
                    <div class="f-f1">裝置可視範圍寬或高的最小值</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>vmax</em></div>
                    <div class="f-f1">the largest of the viewport width or height</div>
                    <div class="f-f1">裝置可視範圍寬或高的最大值</div>
                </div>
            </div>
        </div>
        <p><br></p>
        <h3>vw / vh：</h3>
        <p>v 指的是 Viewport，意思就是這兩個單位分別參考瀏覽器視窗畫面的寬或高，比例為 <em>1 / 100</em>，<em>1vw</em> 或 <em>1vh</em> 就是 Viewport 的 1% 寬或高，屬於相對單位。</p>
        <p>由於參照的對象是整個 Viewport，所以當視窗畫面尺寸發生變化時，使用 <em>vw</em> 或 <em>vh</em> 單位的元素也會跟著產生變化，因此很適合用在需要等比縮放的元素。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-theme-id="0" data-default-tab="css,result" data-user="itrong" data-slug-hash="ZEzBBgr" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="css-units _7">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/ZEzBBgr/">
            css-units _7</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p><br></p>
        <h3>vmin / vmax</h3>
        <p><em>vw</em> 與 <em>vh</em> 取用的對象分別是 Viewport 的寬或高，而 <em>vmin</em> 和 <em>vmax</em> 則是取 Viewport 最小或最大其中一邊的值。假設瀏覽器視窗的畫面大小是 1000 x 800 像素，<em>1 vmin</em> 等於 <em>8 px</em>，而 <em>1 vmax</em> 等於 <em>10 px</em>。</p>
        <div class="text-codepen">
            <p class="codepen" data-height="480" data-theme-id="0" data-default-tab="css,result" data-user="itrong" data-slug-hash="OJLbWwg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="css-units _8">
            <span>See the Pen <a href="https://codepen.io/itrong/pen/OJLbWwg/">
            css-units _8</a> by Trong (<a href="https://codepen.io/itrong">@itrong</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
        <p>這種單位類型十分強大，像是可以輕鬆製作一個不會溢出 Viewport 的等比縮放正方形，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-css">div {
    width: 100vmin;
    height: 100vmin;
}</code></pre>
        </div>
        <p>需要注意的是，<em>vw</em>、<em>vh</em>、<em>vmin</em> 與 <em>vmax</em> 都是 CSS3 新增的度量單位，假如要兼顧老舊版本瀏覽器的相容性問題，就要斟酌是否要使用或另外書寫替代屬性以確保網頁在舊瀏覽器上的排版完整性。</p>
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
