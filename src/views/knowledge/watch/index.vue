<template>
    <section>
        <button @click="numChange">count改变</button>
    </section>
</template>

<script lang="ts">
import {
  defineComponent,// 定义 Vue 组件
  ref,// 类型声明，根据初始值推断类型
  watch
} from "vue";

interface Book {
  title: string
  year?: number
}

export default defineComponent({
    name: "interface-demo",
    setup() {
        let count = ref(100);
        watch(count, (value) => togglePlay(value))
        function togglePlay(value) {
            console.log("监听count", value);
        }
        return {
            count
        }
    },
    methods: {
        numChange() {
            this.count++;
        }
    },
})
</script>

