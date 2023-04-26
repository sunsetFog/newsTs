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
    data() {// 是data

        let count = ref(100)
        console.log("---ref(0)---", count, "---", count.value)
        // computed
        const doubleCount = computed(() => count.value * 2)

        return {
            count,
            doubleCount,
            message: 'Hello'
        }
    },
    created() {
        console.log("--data--this--", this)
        console.log("--computed--otherCount--", this.otherCount)
    },
    methods: {
        numChange() {
            this.count++;
        }
    },
    // 为计算属性标记类型
    computed: {
        otherCount(): number {// 没有返回值类型 报错Property 'XXXX' does not exist on type 'ComponentPublicInstance
            return this.count + 5;
        }
    }
})
</script>
