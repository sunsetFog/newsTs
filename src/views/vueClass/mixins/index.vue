<template>
    <section>
        ---mixin混入组件---
    </section>
</template>


<script lang="ts">
import { Options, Vue, mixins } from 'vue-class-component';
import MyMixin from './mixin';

@Options({
    
})

export default class mixinUnit extends mixins(MyMixin) {// 多个mixin：mixins(***, ***, ***)
    message = "哈喽"
    data() {
        return {
            water: "水"
        }
    }
    created() {
        console.log("初始化数据", this)
    }
}
</script>

<style scoped lang="less">
</style>