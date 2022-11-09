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

import { saveOrUpdateDemo } from "./apple"

interface Book {
  title: string
  year?: number
}

export default defineComponent({
    name: "interface-demo",
    setup() {
        
        return {

        }
    },
    created () {
        const book = reactive<Book>({ title: 'Vue 3 Guide', year: 2022 });
        console.log("---reactive使用接口---", book);
        this.beanWay({ title: '嘿嘿嘿', year: 2023 });
    },
    methods: {
        beanWay(value: Book) {// 接口修饰形参，传进来是接口的对象
            console.log("参数：", value.title);
        },
        // 可以用return,但是不能return + 修饰类型的值
        butterfly01(): void {
            return;
        },
        // 必须return + 修饰类型的值
        butterfly02(): String {
            return "么么哒";
        }
    }
})
</script>

