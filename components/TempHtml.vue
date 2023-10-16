<template>
    <hgroup class="text-heading">
        <time v-text="getIndex({ jsonData, index: jsonData.length-propValue }).time"></time>
        <h1 v-text="getIndex({ jsonData, index: jsonData.length-propValue }).title"></h1>
    </hgroup>
</template>
<script>
export default {
    props: {
        propValue: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        const jsonData = ref([]);

        const getIndex = ({ jsonData = [], index = 0 }) => {
            return jsonData[index] || {};
        };

        onMounted(() => {
            // get data
            fetch(`/js/data/learnHtml.json`)
                .then((response) => response.json())
                .then((data) => {
                    jsonData.value = data.reverse();
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        });

        return {
            jsonData,
            getIndex,
        };
    },
};
</script>