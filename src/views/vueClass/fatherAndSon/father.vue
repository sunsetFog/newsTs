<template>
    <section>
        ---父组件---
        <br/><br/>
        <Son whoopee="哈哈"></Son>
    </section>
</template>


<script lang="ts">
import Component, { Options, Vue } from 'vue-class-component';
import Son from './son.vue'

@Options({
    components: {
        Son
    }
})
// @Component({}) // 这装饰器使您的类成为 Vue 组件
export default class SkyUnit extends Vue {
    message = "哈喽"
    data() {
        return {
            water: "水"
        }
    }
    mounted() {
        console.log("渲染完成", this)
    }


}
</script>

<style scoped lang="less"></style>