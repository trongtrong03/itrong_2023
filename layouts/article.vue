<template>
    <article id="wrap" class="pages-article">
        <!--header -->
        <Header />
        <!-- main -->
        <main class="main-wrap">
            <div class="main-inside">
                <section class="article-wrap">
                    <div id="parallax" class="article-parallax"></div>
                    <div class="article-container">
                        <div class="article-content">
                            <slot />
                        </div>
                    </div>
                    <div class="article-float">
                        <NuxtLink to="./" class="btn-back"></NuxtLink>
                        <NuxtLink to="/" class="btn-home"></NuxtLink>
                        <button class="btn-top" @click="isActive = false"></button>
                        <button class="btn-list" :class="{ 'is-active': isActive }" @click="isActive = !isActive"></button>
                        <div class="float-catalog" :class="{ 'is-active': isActive }"></div>
                    </div>
                </section>
            </div>
        </main>
        <!-- footer -->
        <Footer />
    </article>
</template>

<script>
// 引用 Prism
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";
import "prismjs/plugins/show-language/prism-show-language";

export default {
    setup () {
        // load js
        useHead({
            script: [
                { 
                    src: "https://cpwebassets.codepen.io/assets/embed/ei.js",
                    body: true
                },
            ],
        });

        // prismjs
        useHead({
            bodyAttrs: {
                "data-prismjs-copy": "Copy",
                "data-prismjs-copy-error": "Error",
                "data-prismjs-copy-success": "Copied"
            }
        });

        onMounted(async () => {
            await nextTick()
            Prism.highlightAll()
        });
    },

    data() {
        return {
            isActive: false
        }
    },
    
    mounted() {
        ////-- 隨機背景 START
        var totalClasses = 48;
        var classes = Array.from({ length: totalClasses }, (_, index) => 'bg-' + (index + 1));

        // 取得所有具有 'article-parallax' 類別的元素
        var articleParallaxElements = document.querySelectorAll('.article-parallax');

        // 對每個元素添加隨機的類別
        articleParallaxElements.forEach(function(element) {
            var randomClass = classes[Math.floor(Math.random() * classes.length)];
            element.classList.add(randomClass);
        });
        ////-- 隨機背景 END

        ////-- GO TOP START
        // 滾動事件處理函式
        function onScroll() {
            var btnTop = document.querySelector(".btn-top");
            if (window.pageYOffset > 400) {
                btnTop.style.display = "inline-block";
            }
            else {
                btnTop.style.display = "none";
            }
        }

        // 監聽滾動事件
        window.addEventListener("scroll", onScroll);

        // 返回頂部按鈕點擊事件處理函式
        function onBtnTopClick() {
            var duration = 500;
            var start = window.pageYOffset;
            var startTime = null;

            function animateScroll(timestamp) {
                if (!startTime) startTime = timestamp;
                    var progress = timestamp - startTime;
                    var easeInOutCubic = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1; };
                    var scrollTop = easeInOutCubic(Math.min(progress / duration, 1)) * (0 - start) + start;
                    window.scrollTo(0, scrollTop);
                if (progress < duration) {
                    requestAnimationFrame(animateScroll);
                }
            }

            requestAnimationFrame(animateScroll);
        }

        // 添加按鈕點擊事件監聽
        var btnTopElement = document.querySelector(".btn-top");
        btnTopElement.addEventListener("click", onBtnTopClick);
        ////-- GO TOP END

        ////-- 複製目錄於快捷選單 START
        // 取得需要操作的元素
        var floatCatalog = document.querySelector(".float-catalog");
        var textCatalogUl = document.querySelector(".text-catalog ul");

        // 克隆元素並將克隆的元素附加到floatCatalog中
        var clonedUl = textCatalogUl.cloneNode(true);
        floatCatalog.appendChild(clonedUl);
        ////-- 複製目錄於快捷選單 END
    },

    methods: {
        // Parallax Scrolling
        parallax() {
            var parallax = document.getElementById("parallax");
            parallax.style.top = -(window.pageYOffset / 4)+'px';
            // console.log(window.scrollY);
        },
    },

    beforeMount () {
        window.addEventListener('scroll', this.parallax);
    },
    beforeDestroy() {
        window.addEventListener('scroll', this.parallax);
    },
}
</script>