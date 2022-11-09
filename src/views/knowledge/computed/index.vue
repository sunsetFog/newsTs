<template>
    <section>
        -1-{{count}}--
        <br>
        <button @click="numChange">count改变，doubleCount随机变化</button>
        <br>
        -2-{{doubleCount}}--
        <br>
        -3-{{otherCount}}--
    </section>
</template>

<script lang="ts">
import {
  defineComponent,// 定义 Vue 组件
  ref,// 类型声明，根据初始值推断类型
  computed,// 类型声明，计算值将根据返回值自动推断类型
} from "vue";

export default defineComponent({
    name: "zidingyizujian",
    setup() {// 是data

        let count = ref(100)
        console.log("---ref(0)---", count, "---", count.value)
        // computed
        const doubleCount = computed(() => count.value * 2)

        return {
            count,
            doubleCount
        }
    },
    methods: {
        numChange() {
            this.count++;
        }
    },
    computed: {
        otherCount() {
            // return this.count + 5;报错
            return 5;
        }
    }
})
</script>
