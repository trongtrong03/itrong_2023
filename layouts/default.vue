<template>
    <article id="wrap">
        <!--header -->
        <Header />
        <!-- main -->
        <main class="main-wrap">
            <div class="main-inside">
                <slot />
            </div>
        </main>
        <!-- footer -->
        <Footer />
    </article>
</template>