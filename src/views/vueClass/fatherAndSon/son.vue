<template>
    <section>
        ---子组件---
        <br/><br/>
        {{ whoopee }}
    </section>
</template>


<script lang="ts">
import Component, { Options, Vue } from 'vue-class-component';


@Options({
    props: {
        whoopee: String
    }
})
// @Component // 这装饰器使您的类成为 Vue 组件
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
    // 方法
    skyWay() {

    }
    get waterComputed() {
        console.log("--this--", this)
        return this.message + '!!!'
    }
    set waterComputed(value) {
        
    }
}
</script>

<style scoped lang="less"></style>