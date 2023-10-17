<template>
    <header class="header-wrap" :class="{ 'is-active': navActive }">
        <figure class="logo-wrap">
            <MyNuxtLink to="/">
                <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" style="enable-background:new 0 0 200 100;">
                    <path d="M200,82.39c-4.58-0.26-8.88-0.38-13.15-0.79c-2.82-0.27-5.15-1.79-7.14-3.77
                        c-4.78-4.75-9.55-9.51-14.32-14.27c-2.46-2.45-4.94-4.88-7.36-7.36c-5.56-5.68-15.25-5.35-20.17-0.44
                        c-5.89,5.87-11.78,11.73-17.67,17.59c-4.32,4.3-8.53,8.71-12.98,12.86c-6.02,5.62-13.35,8.16-21.5,7.61
                        c-7.16-0.49-13.48-3.36-18.64-8.5c-5.25-5.25-10.52-10.47-15.72-15.77c-3.4-3.45-7.35-5.5-12.28-5.15
                        c-3.09,0.22-5.97,1.19-8.26,3.32c-3.01,2.8-5.99,5.65-8.77,8.68c-3.82,4.16-8.49,5.94-14.04,5.78c-2.38-0.07-4.76,0.04-7.14,0.05
                        c-0.15,0-0.29-0.07-0.85-0.23c21.39-21.4,42.6-42.62,64.14-64.16c7.72,7.98,15.42,15.95,23.19,23.98c0.7-0.61,1.11-0.91,1.46-1.27
                        c8.31-8.3,16.61-16.6,24.91-24.9c2.8-2.8,5.59-5.6,8.39-8.38c1.59-1.58,1.6-1.57,3.17-0.01c11.12,11.13,22.24,22.27,33.38,33.38
                        c6.26,6.24,12.58,12.41,18.83,18.65c7.42,7.41,14.8,14.87,22.19,22.31C199.73,81.69,199.75,81.82,200,82.39z M139.5,37.79
                        c-0.02-0.05-0.04-0.14-0.09-0.19c-5.01-5.02-10.03-10.03-15.04-15.06c-0.47-0.48-0.78-0.34-1.19,0.1c-1.05,1.11-2.14,2.19-3.23,3.27
                        c-7.78,7.78-15.56,15.57-23.37,23.34c-0.58,0.57-0.57,0.95-0.04,1.48c1.9,1.86,3.68,3.86,5.69,5.59c5.46,4.68,14.19,4.49,19.35-0.54
                        C127.63,49.9,133.49,43.85,139.5,37.79z"/>
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
                <button class="nav-acrodin"></button>
                <div class="nav-sub">
                    <ul>
                        <li><MyNuxtLink to="/about" @click="handleNavLinkFalse">關於我</MyNuxtLink></li>
                        <li><MyNuxtLink to="/works" @click="handleNavLinkFalse">專案作品</MyNuxtLink></li>
                        <li><MyNuxtLink to="/logs" @click="handleNavLinkFalse">更新日誌</MyNuxtLink></li>
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
                <button class="nav-acrodin"></button>
                <div class="nav-sub">
                    <ul>
                        <li><MyNuxtLink to="/mountains" @click="handleNavLinkFalse">山岳資料庫</MyNuxtLink></li>
                        <li><MyNuxtLink to="/routes" @click="handleNavLinkFalse">路線彙整</MyNuxtLink></li>
                        <li><MyNuxtLink to="/mtlogs" @click="handleNavLinkFalse">登山心得</MyNuxtLink></li>
                        <li><MyNuxtLink to="/gallery" @click="handleNavLinkFalse">影像故事</MyNuxtLink></li>
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
                <button class="nav-acrodin"></button>
                <div class="nav-sub">
                    <ul>
                        <li><MyNuxtLink to="/html" @click="handleNavLinkFalse">HTML</MyNuxtLink></li>
                        <li><MyNuxtLink to="/css" @click="handleNavLinkFalse">CSS</MyNuxtLink></li>
                        <li><MyNuxtLink to="/javascript" @click="handleNavLinkFalse">JavaScript</MyNuxtLink></li>
                        <li><MyNuxtLink to="/workshop" @click="handleNavLinkFalse">工作坊</MyNuxtLink></li>
                        <li><MyNuxtLink to="/development" @click="handleNavLinkFalse">開發工具</MyNuxtLink></li>
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
                <button class="nav-acrodin"></button>
                <div class="nav-sub">
                    <ul>
                        <li><MyNuxtLink to="/kl_network" @click="handleNavLinkFalse">網路相關</MyNuxtLink></li>
                        <li><MyNuxtLink to="/kl_draw" @click="handleNavLinkFalse">繪圖軟體</MyNuxtLink></li>
                        <li><MyNuxtLink to="/_maintain" @click="handleNavLinkFalse">野外觀念</MyNuxtLink></li>
                        <!-- <li><MyNuxtLink to="/" @click="handleNavLinkFalse">投資學習</MyNuxtLink></li> -->
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
                <button class="nav-acrodin"></button>
                <div class="nav-sub">
                    <ul>
                        <li><MyNuxtLink to="/rs_webfront" @click="handleNavLinkFalse">網頁開發</MyNuxtLink></li>
                        <li><MyNuxtLink to="/rs_plugins" @click="handleNavLinkFalse">前端套件</MyNuxtLink></li>
                        <li><MyNuxtLink to="/rs_material" @click="handleNavLinkFalse">素材模板</MyNuxtLink></li>
                        <li><MyNuxtLink to="/rs_media" @click="handleNavLinkFalse">影音繪圖</MyNuxtLink></li>
                        <li><MyNuxtLink to="/rs_teach" @click="handleNavLinkFalse">教學資源</MyNuxtLink></li>
                        <li><MyNuxtLink to="/rs_hiking" @click="handleNavLinkFalse">登山健行</MyNuxtLink></li>
                        <li><MyNuxtLink to="/rs_others" @click="handleNavLinkFalse">其他</MyNuxtLink></li>
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
                <button class="nav-acrodin"></button>
                <div class="nav-sub">
                    <ul>
                        <li><MyNuxtLink to="https://github.com/trongtrong03" target="_blank">GitHub</MyNuxtLink></li>
                        <li><MyNuxtLink to="https://codepen.io/itrong" target="_blank">Codepen</MyNuxtLink></li>
                    </ul>
                </div>
            </div>
        </nav>
        <button class="nav-btn" aria-label="Nav Button" :class="navActive==true ? 'is-active' : ''" @click="handleNavLinkClick">
            <span><b></b><b></b><b></b><b></b></span>
        </button>
    </header>
</template>

<script>
export default {
    setup() {
        const navActive = ref(false);

        // nav sub
        const navItems = ref([]);
        const navSub = ref(null);

        const handleButtonClick = (button) => {
            navItems.value.forEach((navItem) => {
                navItem.classList.remove('is-active');
                navSub.value.style.display = 'none';
            });

            const parentNavItem = button.parentNode;
            parentNavItem.classList.add('is-active');

            const nextNavSub = button.nextElementSibling;
            if (nextNavSub) {
                nextNavSub.style.display = nextNavSub.style.display === 'block' ? 'none' : 'block';
            }
        };

        onMounted(() => {
            navItems.value = Array.from(document.querySelectorAll('.nav-item button'));
            navSub.value = document.querySelector('.nav-sub');
            navItems.value.forEach((button) => {
                button.addEventListener('click', () => handleButtonClick(button));
            });
        });

        return {
            navActive,
            handleNavLinkClick: () => {
                navActive.value = !navActive.value;
            },
            handleNavLinkFalse: () => {
                navActive.value = false;
            },
        };
    },
};

</script>