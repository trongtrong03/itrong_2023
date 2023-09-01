<template>
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";
import "prismjs/plugins/show-language/prism-show-language";

export default {
    setup () {
        // prismjs
        useHead({
            bodyAttrs: {
                "data-prismjs-copy": "Copy",
                "data-prismjs-copy-error": "Error",
                "data-prismjs-copy-success": "Copied"
            }
        });

        onMounted(async () => {
            await nextTick()
            Prism.highlightAll()
        })
    },
}
</script>