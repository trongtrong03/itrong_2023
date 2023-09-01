<template>
    <hgroup class="text-heading">
        <ul>
            <li v-for="(tag, index) in getIndex({ jsonData, index: jsonData.length-propValue }).tags" :key="index">{{ tag }}</li>
        </ul>
        <h1 v-text="getIndex({ jsonData, index: jsonData.length-propValue }).title"></h1>
        <time v-text="getIndex({ jsonData, index: jsonData.length-propValue }).time"></time>
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
        fetch(`/js/data/mtlogs.json`)
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