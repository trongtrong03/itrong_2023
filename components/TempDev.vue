<template>
    <hgroup class="text-heading">
        <time v-text="getIndex({ jsonData, index: jsonData.length-propValue }).time"></time>
        <h1 v-text="getIndex({ jsonData, index: jsonData.length-propValue }).title"></h1>
    </hgroup>
</template>
<script>
export default {
    data() {
        return {
            jsonData: [],
        }
    },
    props: {
        propValue: {
            type: Number,
            required: true
        }
    },
    mounted() {
        // get data
        fetch(`/js/data/learnDev.json`)
            .then(response => response.json())
            .then(data => {
                this.jsonData = data.reverse();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    },
    methods: {
        getIndex({ jsonData = [], index = 0 }) {
            return jsonData[index] || {}
        },
    }
}
</script>