<template>
    <article id="wrap" class="page-mtlogs">
        <!--header -->
        <Header />
        <!-- main -->
        <main class="main-wrap">
            <div class="main-inside">
                <section class="article-wrap">
                    <div class="article-container">
                        <div class="article-content">
                            <slot />
                        </div>
                    </div>
                    <div class="article-float">
                        <NuxtLink to="/mtlogs" class="btn-back"></NuxtLink>
                        <NuxtLink to="/" class="btn-home"></NuxtLink>
                        <button class="btn-top" @click="isActive = false"></button>
                    </div>
                </section>
            </div>
        </main>
        <!-- footer -->
        <Footer />
    </article>
</template>

<script>
export default {
    data() {
        return {}
    },
    
    mounted() {
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

    },
}
</script>