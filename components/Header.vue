<template>
    <header class="header-wrap">
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
                <span>個人資料</span>
                <button></button>
                <div class="nav-sub">
                    <ul>
                        <li><MyNuxtLink to="/about" @click="handleNavLinkFalse">關於我</MyNuxtLink></li>
                        <li><MyNuxtLink to="/works" @click="handleNavLinkFalse">專案作品</MyNuxtLink></li>
                        <li><MyNuxtLink to="/logs" @click="handleNavLinkFalse">更新日誌</MyNuxtLink></li>
                    </ul>
                </div>
            </div>
            <div class="nav-item">
                <span>山林日誌</span>
                <button></button>
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
                <span>程式補帖</span>
                <button></button>
                <div class="nav-sub">
                    <ul>
                        <li><MyNuxtLink to="/html" @click="handleNavLinkFalse">HTML</MyNuxtLink></li>
                        <li><MyNuxtLink to="/css" @click="handleNavLinkFalse">CSS</MyNuxtLink></li>
                        <li><MyNuxtLink to="/_maintain" @click="handleNavLinkFalse">JavaScript</MyNuxtLink></li>
                        <li><MyNuxtLink to="/_maintain" @click="handleNavLinkFalse">工作坊</MyNuxtLink></li>
                        <li><MyNuxtLink to="/_maintain" @click="handleNavLinkFalse">開發工具</MyNuxtLink></li>
                    </ul>
                </div>
            </div>
            <div class="nav-item">
                <span>知識文章</span>
                <button></button>
                <div class="nav-sub">
                    <ul>
                        <li><MyNuxtLink to="/_maintain" @click="handleNavLinkFalse">網路相關</MyNuxtLink></li>
                        <li><MyNuxtLink to="/_maintain" @click="handleNavLinkFalse">繪圖軟體</MyNuxtLink></li>
                        <li><MyNuxtLink to="/_maintain" @click="handleNavLinkFalse">野外觀念</MyNuxtLink></li>
                        <!-- <li><MyNuxtLink to="/" @click="handleNavLinkFalse">投資學習</MyNuxtLink></li> -->
                    </ul>
                </div>
            </div>
            <div class="nav-item">
                <span>推薦資源</span>
                <button></button>
                <div class="nav-sub">
                    <ul>
                        <li><MyNuxtLink to="/rs_webfront" @click="handleNavLinkFalse">網頁開發</MyNuxtLink></li>
                        <li><MyNuxtLink to="/rs_material" @click="handleNavLinkFalse">素材模板</MyNuxtLink></li>
                        <li><MyNuxtLink to="/rs_media" @click="handleNavLinkFalse">影音繪圖</MyNuxtLink></li>
                        <li><MyNuxtLink to="/rs_teach" @click="handleNavLinkFalse">教學資源</MyNuxtLink></li>
                        <li><MyNuxtLink to="/rs_hiking" @click="handleNavLinkFalse">登山健行</MyNuxtLink></li>
                        <li><MyNuxtLink to="/rs_others" @click="handleNavLinkFalse">其他</MyNuxtLink></li>
                    </ul>
                </div>
            </div>
            <div class="nav-item">
                <span>外部連結</span>
                <button></button>
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
    data() {
        return {
            navActive: false
        }
    },
    mounted() {
        ////- SCROLL DOWN START
        // 取得需要操作的元素
        var headerWrap = document.querySelector(".header-wrap");

        // 監聽滾動事件
        window.addEventListener("scroll", function() {
            // 取得滾動的垂直位移量
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // 判斷是否超過 50 像素，並根據結果添加或移除 "is-scrolling" 類別
            if (scrollTop > 50) {
                headerWrap.classList.add("is-scrolling");
            }
            else {
                headerWrap.classList.remove("is-scrolling");
            }
        });
        ////- SCROLL DOWN END

        ////- NAV START
        // 取得所有 .nav-item button 元素
        var buttons = document.querySelectorAll(".nav-item button");

        // 監聽 click 事件
        buttons.forEach(function(button) {
            button.addEventListener("click", function() {
                // 移除所有 .nav-item 的 "is-active" 類別
                var navItems = document.querySelectorAll(".nav-item");
                navItems.forEach(function(navItem) {
                    navItem.classList.remove("is-active");
                    navSub.style.display = "none";
                });

                // 將父元素 .nav-item 加入 "is-active" 類別
                var parentNavItem = this.parentNode;
                parentNavItem.classList.add("is-active");

                // 取得下一個兄弟元素 .nav-sub 並使用 style.display 來控制顯示與否
                var navSub = this.nextElementSibling;
                if (navSub) {
                    if (navSub.style.display === "block") {
                        navSub.style.display = "none";
                    }
                    else {
                        navSub.style.display = "block";
                    }
                }
            });
        });
        ////- NAV END
    },
    methods: {
        handleNavLinkClick() {
            this.navActive = !this.navActive;
        },
        handleNavLinkFalse() {
            this.navActive = false;
        }
    }
}
</script>