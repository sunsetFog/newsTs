<template>
    <section>
        ---vue类组件---
        <br/><br/>
        数据：{{ water }}---{{ message }}
        <br/><br/>
        计算属性：{{ waterComputed }}
        
    </section>
</template>
<!-- 
    官方文档：https://class-component.vuejs.org/
LiILLl
    yarn add --save vue vue-class-component
 -->
<script lang="ts">
import Component, { Options, Vue } from 'vue-class-component';


@Options({

})

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