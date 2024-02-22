<template>
    <header class="header-wrap" :class="{ 'is-active': navActive }">
        <figure class="logo-wrap">
            <MyNuxtLink to="/" @click="navToggleActive">
                <svg version="1.1" id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 130" style="enable-background:new 0 0 130 130;">
                    <g>
                        <path class="st0" d="M86.8,71.1L73.1,94.8c-0.4,0.7-0.2,1.7,0.6,2.1c0.2,0.1,0.5,0.2,0.7,0.2h27.4c0.9,0,1.5-0.7,1.5-1.6c0-0.3-0.1-0.5-0.2-0.8
                            L89.4,71.1c-0.4-0.7-1.4-1-2.1-0.6C87.1,70.7,86.9,70.9,86.8,71.1"/>
                        <path class="st1" d="M83.5,65.3L66.4,94.8c-0.8,1.4-2.4,2.3-4,2.3h-5.9L69.3,75c0.9-1.5,0.4-3.4-1.2-4.3c-1.6-0.9-3.4-0.4-4.3,1.2l0,0
                            L49.2,97.1h-6.8l16.3-28.2c0.9-1.5,0.4-3.4-1.2-4.3c-1.5-0.9-3.4-0.4-4.3,1.2l0,0l-18,31.3h-8.5l36.2-62.7c0.9-1.5,2.7-2,4.2-1.1
                            c0.5,0.3,0.9,0.7,1.1,1.1l15.2,26.3C84.3,62.1,84.3,63.8,83.5,65.3"/>
                    </g>
                </svg>
            </MyNuxtLink>
        </figure>
        <nav class="nav-wrap" :class="navActive==true ? 'is-active' : ''">
            <div class="nav-item">
                <div class="nav-text">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;">
                        <path d="M29.99,60.02c-5.14,0-10.28,0.01-15.42,0C9.76,60,5.95,56.93,5.04,52.32c-0.38-1.91-0.13-3.77,0.66-5.57
                            c4.43-10.11,14.76-16.55,25.76-15.78c10.5,0.73,18.11,5.98,22.67,15.46c3.13,6.51-1.4,13.53-8.65,13.58
                            C40.32,60.04,35.15,60.02,29.99,60.02z"/>
                        <path d="M29.97,25.72c-7.11-0.02-12.83-5.77-12.82-12.89c0.02-7.04,5.79-12.8,12.84-12.81c7.12-0.01,12.89,5.81,12.86,12.95
                            C42.81,20.04,37.05,25.74,29.97,25.72z"/>
                    </svg>
                    <span>個人資料</span>
                </div>
                <button class="nav-accrodin"></button>
                <div class="nav-sub">
                    <ul>
                        <li><MyNuxtLink to="/about" @click="navToggleActive">關於我</MyNuxtLink></li>
                        <li><MyNuxtLink to="/works" @click="navToggleActive">專案作品</MyNuxtLink></li>
                        <li><MyNuxtLink to="/logs" @click="navToggleActive">更新日誌</MyNuxtLink></li>
                    </ul>
                </div>
            </div>
            <div class="nav-item">
                <div class="nav-text">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;">
                        <g>
                            <path d="M35.11,31.5c0.4-0.6,0.72-1.11,1.07-1.61c3.66-5.31,11.38-5.28,14.94,0.08c2.49,3.75,4.94,7.53,7.33,11.34
                                c1.87,2.98,2,6.13,0.3,9.21c-1.71,3.09-4.45,4.65-7.97,4.66c-14.87,0.03-29.75,0.02-44.62,0.01c-2.38,0-4.22-1.04-5.37-3.13
                                c-1.15-2.09-1.03-4.2,0.26-6.2c5.52-8.55,11.03-17.09,16.58-25.62c2.47-3.8,7.68-3.77,10.18,0.03c2.29,3.49,4.54,7,6.81,10.5
                                C34.76,30.98,34.9,31.19,35.11,31.5z M45.38,49.17c1.86,0,3.64-0.01,5.42,0c1.22,0.01,2.14-0.5,2.72-1.55
                                c0.58-1.05,0.52-2.11-0.14-3.13c-2.39-3.7-4.77-7.41-7.18-11.09c-1.29-1.97-3.83-1.96-5.14,0.01c-0.69,1.03-1.33,2.1-2.04,3.12
                                c-0.27,0.39-0.26,0.66,0,1.05c1.69,2.56,3.33,5.16,5.02,7.72C44.79,46.46,45.36,47.66,45.38,49.17z"/>
                            <path d="M48,10.76c0.03-3.31,2.72-5.97,6.02-5.96c3.32,0.02,6.01,2.76,5.97,6.09c-0.04,3.3-2.76,5.95-6.07,5.91
                                C50.6,16.77,47.97,14.09,48,10.76z"/>
                        </g>
                    </svg>
                    <span>山林日誌</span>
                </div>
                <button class="nav-accrodin"></button>
                <div class="nav-sub">
                    <ul>
                        <li><MyNuxtLink to="/mountains" @click="navToggleActive">山岳資料庫</MyNuxtLink></li>
                        <li><MyNuxtLink to="/routes" @click="navToggleActive">路線彙整</MyNuxtLink></li>
                        <li><MyNuxtLink to="/mtlogs" @click="navToggleActive">登山心得</MyNuxtLink></li>
                        <li><MyNuxtLink to="/gallery" @click="navToggleActive">影像故事</MyNuxtLink></li>
                    </ul>
                </div>
            </div>
            <div class="nav-item">
                <div class="nav-text">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;">
                        <g>
                            <path d="M24.53,49.09c-1.89-0.01-3.14-1.82-2.52-3.72c1.33-4.07,2.7-8.12,4.06-12.18c2.22-6.67,4.44-13.34,6.66-20
                                c0.55-1.66,1.81-2.51,3.24-2.21c1.7,0.36,2.58,1.98,1.99,3.75c-1.34,4.06-2.71,8.12-4.06,12.18c-2.21,6.64-4.43,13.28-6.64,19.92
                                C26.77,48.32,25.83,49.09,24.53,49.09z"/>
                            <path d="M53.41,29.98c-2.97-2.96-5.86-5.85-8.76-8.73c-0.69-0.68-1.08-1.47-0.95-2.44c0.14-1.07,0.73-1.85,1.75-2.22
                                c1.09-0.4,2.08-0.16,2.9,0.65c1.56,1.53,3.1,3.09,4.64,4.63c1.99,1.99,3.98,3.97,5.96,5.96c1.4,1.41,1.41,2.92,0.01,4.32
                                c-3.49,3.5-6.98,6.99-10.48,10.48c-1.28,1.27-2.94,1.36-4.08,0.22c-1.13-1.13-1.04-2.8,0.23-4.07c2.69-2.69,5.38-5.38,8.07-8.07
                                C52.92,30.5,53.12,30.27,53.41,29.98z"/>
                            <path d="M6.49,29.92c3.07,3.06,5.95,5.95,8.85,8.83c0.69,0.68,1.09,1.46,0.97,2.43c-0.13,1.07-0.71,1.85-1.73,2.23
                                c-1.08,0.4-2.08,0.18-2.9-0.63c-1.36-1.33-2.69-2.69-4.04-4.03c-2.23-2.23-4.46-4.45-6.68-6.69c-1.26-1.27-1.28-2.83-0.04-4.07
                                c3.56-3.58,7.14-7.15,10.72-10.72c0.78-0.78,1.71-1.1,2.8-0.77c1.01,0.31,1.64,1,1.88,2.02c0.25,1.06-0.15,1.94-0.9,2.69
                                c-2.7,2.68-5.38,5.38-8.08,8.06C7.1,29.49,6.83,29.66,6.49,29.92z"/>
                        </g>
                    </svg>
                    <span>程式語言</span>
                </div>
                <button class="nav-accrodin"></button>
                <div class="nav-sub">
                    <ul>
                        <li><MyNuxtLink to="/html" @click="navToggleActive">HTML</MyNuxtLink></li>
                        <li><MyNuxtLink to="/css" @click="navToggleActive">CSS</MyNuxtLink></li>
                        <li><MyNuxtLink to="/javascript" @click="navToggleActive">JavaScript</MyNuxtLink></li>
                        <li><MyNuxtLink to="/workshop" @click="navToggleActive">工作坊</MyNuxtLink></li>
                        <li><MyNuxtLink to="/development" @click="navToggleActive">開發工具</MyNuxtLink></li>
                    </ul>
                </div>
            </div>
            <div class="nav-item">
                <div class="nav-text">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;">
                        <path d="M54.01,60c-14.14,0-28.29,0-42.43,0c-0.11-0.03-0.21-0.09-0.33-0.1c-3.75-0.55-6.51-3.77-6.5-7.57
                        c0.01-2.07,0.01-4.14,0.01-6.21c0-12.83,0-25.66,0-38.49c0-2.12,0.77-3.93,2.27-5.41C8.49,0.76,10.27,0.04,12.4,0
                        c0,0.3,0,0.55,0,0.8c0,11.8,0,23.59,0,35.39c0,0.27-0.04,0.57,0.05,0.81c0.11,0.3,0.3,0.64,0.55,0.8c0.1,0.07,0.53-0.24,0.71-0.45
                        c1.6-1.87,3.19-3.75,4.78-5.63c0.17-0.2,0.35-0.39,0.54-0.62c0.21,0.26,0.37,0.45,0.53,0.65c1.52,1.89,3.03,3.78,4.56,5.65
                        c0.16,0.2,0.54,0.45,0.68,0.39c0.23-0.1,0.41-0.43,0.49-0.71c0.1-0.31,0.09-0.65,0.09-0.98c0-11.78,0-23.55,0-35.33
                        c0-0.25,0-0.49,0-0.78c0.31,0,0.54,0,0.77,0c5.31,0,10.63,0,15.94,0c3.77,0,7.54,0,11.31,0c1.2,0,1.79,0.6,1.81,1.8
                        c0,0.21,0,0.43,0,0.64c0,14.3-0.02,28.59,0.02,42.89c0.01,2.17-0.65,2.58-2.63,2.58c-13.2-0.01-26.41,0-39.61,0
                        c-0.31,0-0.63,0-0.94,0.02c-2.21,0.13-4.03,2-4.12,4.2c-0.11,2.7,1.91,4.7,4.77,4.7c12.91,0,25.82,0,38.73,0c0.19,0,0.38,0,0.62,0
                        c0-0.28,0-0.49,0-0.7c0-1.11-0.01-2.23,0.01-3.34c0-0.31,0.03-0.63,0.13-0.92c0.23-0.66,0.96-1.07,1.63-0.98
                        c0.79,0.11,1.36,0.69,1.37,1.51c0.03,1.87-0.02,3.75,0.03,5.62C55.25,58.99,54.91,59.65,54.01,60z"/>
                    </svg>
                    <span>知識文章</span>
                </div>
                <button class="nav-accrodin"></button>
                <div class="nav-sub">
                    <ul>
                        <li><MyNuxtLink to="/kl_network" @click="navToggleActive">網路相關</MyNuxtLink></li>
                        <li><MyNuxtLink to="/kl_draw" @click="navToggleActive">繪圖軟體</MyNuxtLink></li>
                        <li><MyNuxtLink to="/_maintain" @click="navToggleActive">野外觀念</MyNuxtLink></li>
                        <!-- <li><MyNuxtLink to="/" @click="navToggleActive">投資學習</MyNuxtLink></li> -->
                    </ul>
                </div>
            </div>
            <div class="nav-item">
                <div class="nav-text">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;">
                        <g>
                            <path d="M60,28.1c-0.27,0.71-0.82,1.08-1.51,1.35c-6.58,2.54-13.16,5.1-19.74,7.65c-1.33,0.51-1.96,0.28-2.65-0.96
                                c-1.91-3.42-3.83-6.85-5.74-10.27c-0.1-0.18-0.21-0.36-0.36-0.6c-0.14,0.24-0.26,0.41-0.36,0.59c-1.92,3.44-3.84,6.88-5.77,10.32
                                c-0.67,1.2-1.33,1.43-2.62,0.93C14.63,34.53,8,31.96,1.37,29.38c-1.38-0.54-1.72-1.49-0.98-2.78c1.83-3.2,3.66-6.4,5.5-9.6
                                c0.63-1.1,1.29-1.34,2.49-0.91c7.02,2.54,14.04,5.09,21.06,7.61c0.35,0.12,0.81,0.12,1.16,0c7.01-2.52,14.01-5.06,21.01-7.59
                                c1.22-0.44,1.88-0.2,2.53,0.92c1.82,3.18,3.65,6.36,5.47,9.55c0.13,0.23,0.27,0.47,0.4,0.7C60,27.56,60,27.83,60,28.1z"/>
                            <path d="M10.92,13.37c1.75-0.63,3.41-1.23,5.08-1.83c4.46-1.6,8.91-3.22,13.37-4.79c0.48-0.17,1.11-0.2,1.58-0.03
                                c5.96,2.14,11.9,4.33,17.85,6.51c0.07,0.03,0.13,0.07,0.29,0.15c-0.49,0.18-0.9,0.35-1.33,0.5c-5.75,2.08-11.51,4.17-17.26,6.24
                                c-0.25,0.09-0.59,0.14-0.83,0.05c-6.18-2.22-12.35-4.47-18.52-6.71C11.1,13.46,11.07,13.44,10.92,13.37z"/>
                            <path d="M32.05,35.95c0.38,0.65,0.75,1.3,1.13,1.94c1.54,2.65,3.93,3.49,6.78,2.38c4.54-1.76,9.09-3.52,13.63-5.29
                                c0.16-0.06,0.32-0.12,0.54-0.21c0.02,0.21,0.04,0.37,0.04,0.54c0,2.85,0,5.7,0,8.55c0,1.15-0.34,1.65-1.39,2.03
                                c-6.8,2.46-13.61,4.91-20.41,7.36c-0.12,0.04-0.25,0.08-0.42,0.13c0-5.84,0-11.63,0-17.41C31.98,35.97,32.01,35.96,32.05,35.95z"/>
                            <path d="M6.23,34.91c1.59,0.62,3.13,1.21,4.67,1.81c3.09,1.2,6.18,2.4,9.27,3.6c2.71,1.04,5.13,0.18,6.6-2.34
                                c0.5-0.85,0.99-1.7,1.58-2.53c0,5.95,0,11.91,0,17.92c-1.01-0.36-1.98-0.7-2.95-1.05c-5.92-2.13-11.84-4.27-17.77-6.4
                                c-1.09-0.39-1.44-0.89-1.44-2.06c0-2.79,0-5.58,0-8.38C6.2,35.32,6.21,35.15,6.23,34.91z"/>
                        </g>
                    </svg>
                    <span>推薦資源</span>
                </div>
                <button class="nav-accrodin"></button>
                <div class="nav-sub">
                    <ul>
                        <li><MyNuxtLink to="/rs_webfront" @click="navToggleActive">網頁開發</MyNuxtLink></li>
                        <li><MyNuxtLink to="/rs_plugins" @click="navToggleActive">前端套件</MyNuxtLink></li>
                        <li><MyNuxtLink to="/rs_material" @click="navToggleActive">素材模板</MyNuxtLink></li>
                        <li><MyNuxtLink to="/rs_media" @click="navToggleActive">影音繪圖</MyNuxtLink></li>
                        <li><MyNuxtLink to="/rs_teach" @click="navToggleActive">教學資源</MyNuxtLink></li>
                        <li><MyNuxtLink to="/rs_hiking" @click="navToggleActive">登山健行</MyNuxtLink></li>
                        <li><MyNuxtLink to="/rs_others" @click="navToggleActive">其他</MyNuxtLink></li>
                    </ul>
                </div>
            </div>
            <div class="nav-item">
                <div class="nav-text">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;">
                        <g>
                            <path d="M60,18.55c-0.15,0.92-0.28,1.84-0.47,2.75c-0.61,2.95-1.88,5.61-3.95,7.78c-2.96,3.09-5.9,6.21-9.1,9.04
                                c-6.72,5.96-17.2,5.51-23.56-0.84c-1.2-1.2-1.54-2.82-0.9-4.3c0.64-1.48,2.12-2.41,3.73-2.33c1.02,0.05,1.86,0.49,2.6,1.2
                                c1.93,1.85,4.25,2.8,6.93,2.78c2.51-0.02,4.73-0.86,6.53-2.6c2.65-2.57,5.31-5.14,7.82-7.84c2.66-2.85,3.36-6.27,2.04-9.95
                                c-1.3-3.6-3.97-5.75-7.75-6.35c-3.19-0.5-5.96,0.5-8.31,2.71c-2.22,2.09-5.67,1.19-6.44-1.69c-0.37-1.4-0.06-2.68,1-3.72
                                c3.1-3.04,6.81-4.75,11.16-5.05c0.29-0.02,0.57-0.08,0.86-0.12c0.2,0,0.39,0,0.59,0c0.94,0.12,1.89,0.21,2.83,0.36
                                c6.81,1.14,12.48,6.56,13.91,13.29c0.2,0.95,0.33,1.91,0.49,2.87C60,17.23,60,17.89,60,18.55z"/>
                            <path d="M24.85,17.73c4.69,0.08,8.76,1.69,12.15,4.96c1.17,1.13,1.59,2.49,1.08,4.06c-0.51,1.56-1.64,2.44-3.26,2.64
                                c-1.22,0.15-2.26-0.28-3.14-1.12c-1.57-1.51-3.42-2.44-5.59-2.71c-3.01-0.37-5.68,0.43-7.87,2.51c-2.69,2.56-5.35,5.15-7.86,7.88
                                c-2.7,2.92-3.35,6.42-1.9,10.12c1.44,3.68,4.25,5.75,8.2,6.15c2.99,0.3,5.55-0.71,7.74-2.76c2.2-2.07,5.62-1.22,6.46,1.6
                                c0.44,1.48,0.08,2.8-1.01,3.87c-2.99,2.94-6.56,4.71-10.76,4.99c-7.51,0.5-13.21-2.57-16.92-9.08c-3.65-6.4-2.57-14.77,2.5-20.12
                                c2.7-2.85,5.48-5.63,8.33-8.33C16.28,19.26,20.3,17.8,24.85,17.73z"/>
                        </g>
                    </svg>
                    <span>外部連結</span>
                </div>
                <button class="nav-accrodin"></button>
                <div class="nav-sub">
                    <ul>
                        <li><MyNuxtLink to="https://github.com/trongtrong03" target="_blank" @click="navToggleActive">GitHub</MyNuxtLink></li>
                        <li><MyNuxtLink to="https://codepen.io/itrong" target="_blank" @click="navToggleActive">Codepen</MyNuxtLink></li>
                    </ul>
                </div>
            </div>
        </nav>
        <button class="nav-btn" aria-label="Nav Button" :class="navActive==true ? 'is-active' : ''" @click="navToggleActive">
            <span><b></b><b></b><b></b><b></b></span>
        </button>
    </header>
</template>

<script setup lang="ts">
    const navActive = ref(false);
    const navToggleActive = () => {
        navActive.value = !navActive.value;

        // 移除子選單的顯示狀態
        const navTitles = document.querySelectorAll('.nav-accrodin');
        const navSubs = document.querySelectorAll('.nav-sub');
        
        navTitles.forEach((navTitle) => {
            navTitle.classList.remove("is-active");
        });

        navSubs.forEach((navSub) => {
            navSub.style.display = 'none';
        });
    };

    // 子選單展開收合
    const handleNavAccordionClick = (e) => {
        const titles = document.querySelectorAll(".nav-accrodin");

        titles.forEach((title) => {
            title.addEventListener("click", function (e) {
                const parent = this.parentElement;
                const content = parent.querySelector(".nav-sub");

                if (content) {
                    e.preventDefault();
                }

                if (!this.classList.contains("is-active")) {
                    const allContents = document.querySelectorAll(".nav-sub");
                    const allTitles = document.querySelectorAll(".nav-accrodin");

                    allContents.forEach((item) => {
                        item.style.display = "none";
                    });

                    allTitles.forEach((item) => {
                        item.classList.remove("is-active");
                    });

                    content.style.display = "block";
                    this.classList.add("is-active");
                }
                else if (this.classList.contains("is-active")) {
                    this.classList.remove("is-active");
                    content.style.display = "none";
                }
            });
        });
    };

    onMounted(() => {
        handleNavAccordionClick();
    });
</script>