<template>
    <article id="wrap">
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
                        <!-- <NuxtLink to="/" class="btn-home"></NuxtLink> -->
                        <button class="btn-top" :class="{ 'is-show': isShowButton }" @click="scrollToTop"></button>
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
        useHead({
            // load js
            script: [
                { 
                    src: "https://cpwebassets.codepen.io/assets/embed/ei.js",
                    body: true
                },
            ],

            // prismjs
            bodyAttrs: {
                "data-prismjs-copy": "Copy",
                "data-prismjs-copy-error": "Error",
                "data-prismjs-copy-success": "Copied"
            }
        });

        const isActive = ref(false);
        const isShowButton = ref(false);

        // prismjs
        const initializePrism = () => {
            Prism.highlightAll();
        }

        // async 異步操作完成後才會繼續執行後面程式碼
        onMounted(async () => {
            await nextTick();
            initializePrism();
        });

        // 隨機背景
        const randomBG = () => {
            const totalClasses = 48;
            const classes = Array.from({ length: totalClasses }, (_, index) => 'bg-' + (index + 1));

            // 取得所有具有 'article-parallax' 類別的元素
            const articleParallaxElements = document.querySelectorAll('.article-parallax');

            // 對每個元素添加隨機的類別
            articleParallaxElements.forEach(function(element) {
                const randomClass = classes[Math.floor(Math.random() * classes.length)];
                element.classList.add(randomClass);
            });
        }

        // 複製目錄
        const copyCatelog = () => {
            // 取得需要操作的元素
            const floatCatalog = document.querySelector(".float-catalog");
            const textCatalogUl = document.querySelector(".text-catalog ul");

            // 克隆元素並將克隆的元素附加到floatCatalog中
            const clonedUl = textCatalogUl.cloneNode(true);
            floatCatalog.appendChild(clonedUl);
        }

        // Parallax Scrolling
        const parallax = () => {
            const parallaxElement = document.getElementById("parallax");
            parallaxElement.style.top = -(window.pageYOffset / 4) + 'px';
        }

        // Scroll to Top
        const scrollToTop = () => {
            const duration = 500;
            const start = window.pageYOffset;
            let startTime = null;

            function animateScroll(timestamp) {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);
                const scrollTop = easeInOutCubic(Math.min(progress / duration, 1)) * (0 - start) + start;
                window.scrollTo(0, scrollTop);

                isShowButton.value = window.scrollY > 400;

                if (progress < duration) {
                    requestAnimationFrame(animateScroll);
                }
            }

            requestAnimationFrame(animateScroll);
        }

        // Update Button Visibility
        const updateButtonVisibility = () => {
            isShowButton.value = window.scrollY > 400;
        }

        // Event Listeners
        onMounted(() => {
            randomBG();
            copyCatelog();
            window.addEventListener('scroll', parallax);
            window.addEventListener('scroll', updateButtonVisibility);
        });

        // Cleanup
        const beforeUnmount = () => {
            window.removeEventListener('scroll', parallax);
            window.removeEventListener('scroll', updateButtonVisibility);
        }

        return {
            isActive,
            parallax,
            isShowButton,
            scrollToTop,
        };
    },
}
</script>