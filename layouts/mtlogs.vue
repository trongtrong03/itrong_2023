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
    setup () {
        const isShowButton = ref(false);

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
            window.addEventListener('scroll', updateButtonVisibility);
        });

        // Cleanup
        const beforeUnmount = () => {
            window.removeEventListener('scroll', updateButtonVisibility);
        }

        return {
            isShowButton,
            scrollToTop,
        };
    },
}
</script>