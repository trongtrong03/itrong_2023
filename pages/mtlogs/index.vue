<template>
    <section class="mtlogs-wrap">
        <div class="main-center">
            <div class="main-head">
                <h1>登山心得</h1>
            </div>
        </div>
        <div class="mtlogs-main">
            <div class="mtlogs-list">
                <ul>
                    <li v-for="(item, index) in jsonData" :key="index" data-aos="fade-up">
                        <NuxtLink :to="'/mtlogs/' + item.id">
                            <figure>
                                <span :style="{ backgroundImage: 'url(images/mtlogs/cover' +item.id + '.jpg)'}"></span>
                            </figure>
                            <h3 v-text="item.title"></h3>
                            <p v-text="item.desc"></p>
                            <time v-text="item.time"></time>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <button class="top-btn" :class="{ 'is-show': isShowButton }" @click="scrollToTop"></button>
    </section>
</template>

<script>
export default {
    data() {
        return {
            jsonData: [],
            isShowButton: false,
        }
    },
    mounted() {
        ////- get data
        fetch('/js/data/mtlogs.json')
            .then(response => response.json())
            .then(data => {
                this.jsonData = data.reverse();
            })
            .catch(error => {
                console.error('Error:', error);
            });

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
        var btnTopElement = document.querySelector(".top-btn");
        btnTopElement.addEventListener("click", onBtnTopClick);
        ////-- GO TOP END

        ////- scroll animation
        AOS.init({
            once: true,
            easing: "ease-in-out-sine"
        });
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