<template>
    <hgroup class="text-heading">
        <ul v-if="fileType == 'mtlogs'">
            <li v-for="(tag, index) in getIndex({ jsonData, index: jsonData.length-propValue }).tags" :key="index">{{ tag }}</li>
        </ul>
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
        fileType: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const jsonData = ref([]);

        const getIndex = ({ jsonData = [], index = 0 }) => {
            return jsonData[index] || {};
        };

        onMounted(() => {
            // get data based on fileType
            fetch(`/js/data/${props.fileType}.json`)
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