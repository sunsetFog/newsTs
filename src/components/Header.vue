<template>
    <section id="unit-header">
        {{info}}++{{bean}}++{{doubleCount}}--{{songUrl}}
    </section>
</template>

<script lang="ts">
import {
  defineComponent,// 定义 Vue 组件
  getCurrentInstance,// vue实例对象
  ref,// 类型声明，根据初始值推断类型
  computed,// 类型声明，计算值将根据返回值自动推断类型
  reactive,// 类型声明，可以使用接口
  watch
} from "vue";

import { mapGetters, useStore } from "vuex"


interface Book {
  title: string
  year?: number
}
// import Vue from 'vue'
// export default Vue.extend({

// defineComponent 定义子组件
export default defineComponent({
    name: "Header",
    components: {},
    setup() {// 是data 
        console.log("--getCurrentInstance()--", getCurrentInstance());
        // const { proxy } = getCurrentInstance();
        // proxy.$store.commit('setIsPlay', true)

        let count = ref(100)
        console.log("---ref(0)---", count, "---", count.value)

        const doubleCount = computed(() => count.value * 2)
        // 引入vuex
        const store = useStore();
        // 使用vuex的getter
        const songUrl = computed(() => store.getters.bean);
        console.log("---computed---", doubleCount);

        const book = reactive<Book>({ title: 'Vue 3 Guide', year: 2022 })
        console.log("---reactive使用接口---", book)

        watch(count, () => togglePlay())
        function togglePlay() {
            
        }

        return {
            info: '----header----',
            doubleCount,
            songUrl
        }
    },
    computed: {
        ...mapGetters([
            "bean"
        ])
    }
})
</script>

<style lang="less" scoped>
#unit-header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: hotpink;
}
</style>


