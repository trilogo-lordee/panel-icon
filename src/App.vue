<template>
    <section class="panel-icon">
        <div class="icon-title">
            <h1>Panel Icons</h1>
            <p>Click on an icon to copy the code to your clipboard.</p>
        </div>
        <div class="icon-container">
            <div class="icon" v-for="element in pagination" :key="element.name">
                <component :is="element.component" :key="element.name"/>
                <span>{{ transformName(element.name) }}</span>
            </div>
        </div>
        <div class="icon-pagination">
            <button @click="page--" :disabled="page === 1">Previous</button>
            <span>Page {{ page }} of {{ pages }}</span>
            <button @click="page++" :disabled="page === pages">Next</button>
        </div>
    </section>
</template>

<style scoped>
.panel-icon {
    font-family: 'Roboto', sans-serif;
}
.icon-title {
    text-align: center;
    margin: 20px 0;
}
.icon-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
}
.icon-pagination button {
    margin: 0 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #f5f5f5;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
.icon-pagination button:hover {
    background-color: #e5e5e5;
}
.icon-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 662px;
}
.icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    margin: 6px;
    padding: 4px;
    border-radius: 10px;
    background-color: #f5f5f5;
}
.icon:hover {
    background-color: #e5e5e5;
}
.icon span {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
}
</style>

<script>
import * as components from './components.js'

export default {
    name: "App",
    components,
    data: () => ({
        page: 1,
        per_page: 30,
    }),
    methods: {
        transformName(str) {
            return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
        }
    },
    computed: {
        pagination() {
            return Object.entries(components)
                .map(([name, component]) => ({name, component}))
                .slice((this.page - 1) * this.per_page, this.page * this.per_page)
        },
        pages() {
            return Math.ceil(Object.keys(components).length / this.per_page)
        }
    }
}
</script>