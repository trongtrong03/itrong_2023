<template>
    <NuxtLayout name="article">
        <TempArticle :propValue="1" fileType="learnDev" />
<!-- start -->
<div class="text-content">
    <div class="text-catalog">
        <ul>
            <li><a href="#act1">一、MS-DOS 簡介</a></li>
            <li><a href="#act2">二、指令介紹</a></li>
        </ul>
    </div>
    <div class="text-block" id="act1">
        <h2>一、MS-DOS 簡介</h2>
        <p>使用 Windows 作業系統的用戶對 MS-DOS 這個詞應該不陌生，是的，它就是微軟發展的一套作業系統，全名為「MicroSoft Disk Operating System」，早期作業系統基本上是由鍵盤輸入特定的指令命令電腦執行動作，不若現在都是透過圖形化介面操作、管理我們的電腦。</p>
        <p>儘管對一般使用者來說幾乎沒有打開命令提示字元輸入指令的需要，但對程式語言工程師而言，仍是時不時會需要召喚它執行系統檢測、安裝軟體掛件或是專案作業，其效率有時甚至超越純使用圖形化介面執行工作的人。以下將一些網頁前端工作者較長使用到的指令整理成一份簡表，馬上一起來看看：</p>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f0">指令</div>
                    <div class="f-f1">用途</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><a href="#msdos_cd"><em>cd</em></a></div>
                    <div class="f-f1">移動到指定資料夾</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><a href="#msdos_ren"><em>ren</em></a></div>
                    <div class="f-f1">幫檔案或資料夾重新命名</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><a href="#msdos_md"><em>md</em></a></div>
                    <div class="f-f1">建立資料夾</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><a href="#msdos_rd"><em>rd</em></a></div>
                    <div class="f-f1">刪除空的資料夾</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><a href="#msdos_del"><em>del</em></a></div>
                    <div class="f-f1">刪除檔案</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><a href="#msdos_copy"><em>copy</em></a></div>
                    <div class="f-f1">複製檔案</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><a href="#msdos_dir"><em>dir</em></a></div>
                    <div class="f-f1">顯示資料夾詳細資訊</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><a href="#msdos_type"><em>type</em></a></div>
                    <div class="f-f1">移動檔案裡的內容</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><a href="#msdos_echo"><em>echo</em></a></div>
                    <div class="f-f1">將字串輸出到命令提示字元上或輸入到指定檔案內容裡</div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-block" id="act2">
        <h2>二、指令介紹</h2>
        <h3 id="msdos_cd">cd：</h3>
        <p><em>cd</em> 也被稱作 <em>chdir</em>，全名 change directory，即改變目錄之意，更直白地講就是移動到指定資料夾目錄，或是進行返回的動作。</p>
        <p>移動至指定目錄：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">cd path\filename</code></pre>
        </div>
        <p>假如沒有輸入指定路徑，則視同在當前指令所在的路徑執行操作（其他命令也是一樣概念）。另外，也可以直接將資料夾拖曳到命令提示字元視窗，視窗將會自動顯示路徑，如此在路徑很長的情況下，就不需要一層一層慢慢 <em>cd</em> 了。</p>
        <p><br></p>
        <p>返回當前目錄的上一層：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">cd..</code></pre>
        </div>
        <p><br></p>
        <p>返回當前目錄最上層的目錄：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">cd\</code></pre>
        </div>
        <p>補充，<em>cd</em> 也可以用 <em>chdir</em> 替代指令。</p>
        <p><br></p>
        <h3 id="msdos_ren">ren：</h3>
        <p><em>ren</em>，又稱 <em>rename</em>，意即幫檔案或資料夾重新命名。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">ren path\filename Newfilename</code></pre>
        </div>
        <p>例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">ren d:\demo demo2</code></pre>
        </div>
        <p>也可以用 <em>rename</em> 替代 <em>ren</em> 來下指令。</p>
        <p><br></p>
        <h3 id="msdos_md">md：</h3>
        <p>又稱 <em>mkdir</em>，全名 make directory，即建立目錄的意思。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">md path\filename</code></pre>
        </div>
        <p><em>md</em> 也可以使用 <em>mkdir</em> 來操作。</p>
        <p><br></p>
        <h3 id="msdos_rd">rd：</h3>
        <p>刪除空目錄使用的指令為 <em>rd</em>，即 remove directory。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">rd path\filename</code></pre>
        </div>
        <p>需注意，單純的 <em>rd</em> 指令只能移除「空的目錄」，若該目錄裡有子檔案的情況下使用此指令，會得到「目錄不是空的」訊息且無法刪除成功。</p>
        <p>若要連同目錄內的子檔案一併移除，則須加上 <em>/s</em> 指令，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">rd /s demo</code></pre>
        </div>
        <p>此時系統會再次詢問是否確定要執行刪除的動作，若不想讓系統再次詢問，則可以加上 <em>/q</em>，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">rd /s /q demo</code></pre>
        </div>
        <p><em>/s</em> 與 <em>/q</em> 先後沒有差別。<em>rd</em> 也可以替換成 <em>rmdir</em> 來操作。</p>
        <p><br></p>
        <h3 id="msdos_del">del：</h3>
        <p><em>rd</em> 指令僅限於刪除資料夾，若要針對檔案進行刪除動作，則必須使用 <em>del</em> 或 <em>erase</em>。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">del path\filename</code></pre>
        </div>
        <p>輸入 <em>del</em> 時還可以附加一些參數執行更詳細的動作：</p>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f0">參數</div>
                    <div class="f-f1">用途</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>/f</em></div>
                    <div class="f-f1">強制刪除唯讀檔案。</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>/s</em></div>
                    <div class="f-f1">從所有子目錄刪除指定檔案。</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>/q</em></div>
                    <div class="f-f1">刪除時，不要求確認。</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>/a</em></div>
                    <div class="f-f1">根據屬性選擇要刪除的檔案。</div>
                </div>
            </div>
        </div>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">del /a *.txt</code></pre>
        </div>
        <p>刪除當前目錄內所有副檔名是 .txt 的檔案。</p>
        <p><em>del</em> 也可以使用 <em>erase</em> 來操作。</p>
        <p><br></p>
        <h3 id="msdos_copy">copy：</h3>
        <p><em>copy</em> 指令是複製檔案的方法。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">copy path\filename Newfilename</code></pre>
        </div>
        <p>例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">copy demo.txt demo02.txt</code></pre>
        </div>
        <p>附加參數：</p>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f0">參數</div>
                    <div class="f-f1">用途</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>/d</em></div>
                    <div class="f-f1">允許解密要建立的目的檔。</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>/v</em></div>
                    <div class="f-f1">驗證新檔案寫入是否正確。</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>/n</em></div>
                    <div class="f-f1">複製帶有非 8dot3 名稱的檔案。</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>/y</em></div>
                    <div class="f-f1">使用確認是否要覆蓋現有目的檔的提示。</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>/-y</em></div>
                    <div class="f-f1">同上。</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>/z</em></div>
                    <div class="f-f1">可重新啟動模式複製已聯網的檔案。</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>/a</em></div>
                    <div class="f-f1">表示 ASCII 文字檔案。</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>/b</em></div>
                    <div class="f-f1">表示二進位檔案。</div>
                </div>
            </div>
        </div>
        <p>要注意的是，不能只單下達一個複製檔案的指令，例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">copy demo.txt</code></pre>
        </div>
        <p>系統會告訴你「檔案不可以複製到檔案本身」的訊息，由此可知複製的動作必須同時給予新的名稱。</p>
        <p><br></p>
        <h3 id="msdos_dir">dir：</h3>
        <p><em>dir</em> 指令用於顯示某個指定資料夾下的全部或部分檔案目錄和子目錄的相關資訊，包含檔案名、副檔名、檔案長度、檔案建立日期和時間。同時給出所顯示檔案的總數和所剩餘的磁碟空間。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">dir path\filename</code></pre>
        </div>
        <figure>
            <img src="/images/knowledge/dir-01.png">
        </figure>
        <p>附加參數：</p>
        <div class="text-flex">
            <div class="f-width">
                <div class="f-head">
                    <div class="f-f0">參數</div>
                    <div class="f-f1">用途</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>/p</em></div>
                    <div class="f-f1">分屏顯示，當資訊填滿整個視窗後先暫停，直到使用者按鍵後繼續。</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>/w</em></div>
                    <div class="f-f1">簡潔模式。</div>
                </div>
                <div class="f-row">
                    <div class="f-f0"><em>/s</em></div>
                    <div class="f-f1">對於給定的檔案標誌符，顯示其在指定目錄及指定目錄所有下級子目錄中的相應位置清單。 8dot3 名稱的檔案。</div>
                </div>
            </div>
        </div>
        <figure>
            <img src="/images/knowledge/dir-02.png">
            <figcaption>這是簡潔模式下的 <em>dir</em> 顯示目錄資訊的形式。</figcaption>
        </figure>
        <p><br></p>
        <h3 id="msdos_type">type：</h3>
        <p><em>type</em> 指令可用來顯示輸入檔案之內容。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">type path\filename</code></pre>
        </div>
        <p><br></p>
        <h3 id="msdos_echo">echo：</h3>
        <p><em>echo</em> 指令可以將輸入的字串顯示在終端機（命令提示字元）上，或是指定一個檔案，將字串內容輸入到該檔案內。</p>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">echo "string" > path\filename</code></pre>
        </div>
        <p>例如：</p>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">echo "This is title" > abc.txt</code></pre>
        </div>
        <p>「This is title」這串文字將會直接輸入到 abc.txt 檔案裡。</p>
        <p><br></p>
        <div class="text-code" v-pre>
            <pre><code class="language-bash">echo This is title</code></pre>
        </div>
        <p>在沒有指定檔案目標前提下，「This is title」則將直接顯示在命令提示字元視窗上。</p>
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
