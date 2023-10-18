// click go top
export const onBtnTopClick = () => {
    const duration = 500;
    const start = window.pageYOffset;
    let startTime = null;

    const animateScroll = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const easeInOutCubic = (t) =>
        t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        const scrollTop =
        easeInOutCubic(Math.min(progress / duration, 1)) * (0 - start) + start;
        window.scrollTo(0, scrollTop);
        if (progress < duration) {
            requestAnimationFrame(animateScroll);
        }
    };

    requestAnimationFrame(animateScroll);
}


// show top btn
export const isShowButton = ref(false);
export const updateButtonVisibility = () => {
    isShowButton.value = window.scrollY > 400;
};