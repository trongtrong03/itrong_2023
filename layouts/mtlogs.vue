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
                        <button class="btn-top" :class="{ 'is-show': isShowButton }" @click="scrollToTop"></button>
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
        return {
            isShowButton: false
        }
    },
    
    mounted() {
        ////-- GO TOP START
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

    methods: {
        ////-- scroll show top btn START
        scrollToTop() {
            var duration = 500;
            var start = window.pageYOffset;
            var startTime = null;

            function animateScroll(timestamp) {
                if (!startTime) startTime = timestamp;
                var progress = timestamp - startTime;
                var easeInOutCubic = function (t) { return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; };
                var scrollTop = easeInOutCubic(Math.min(progress / duration, 1)) * (0 - start) + start;
                window.scrollTo(0, scrollTop);

                this.isShowButton = window.scrollY > 400;

                if (progress < duration) {
                    requestAnimationFrame(animateScroll);
                }
            }

            requestAnimationFrame(animateScroll);
        },

        updateButtonVisibility() {
            this.isShowButton = window.scrollY > 400;
        }
        ////-- scroll show top btn END
    },

    beforeMount () {
        window.addEventListener('scroll', this.updateButtonVisibility);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.updateButtonVisibility);
    },
    destroyed() {
        window.removeEventListener('scroll', this.updateButtonVisibility);
    },
}
</script>