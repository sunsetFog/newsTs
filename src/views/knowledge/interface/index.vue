<template>
    <section>

    </section>
</template>

<script lang="ts">
import {
  defineComponent,// 定义 Vue 组件
  ref,// 类型声明，根据初始值推断类型
  reactive,// 类型声明，可以使用接口
} from "vue";

interface Book {
  title: string
  year?: number
}

export default defineComponent({
    name: "interface-demo",
    setup() {
        const book = reactive<Book>({ title: 'Vue 3 Guide', year: 2022 })
        console.log("---reactive使用接口---", book)
        return {

        }
    },
})
</script>

