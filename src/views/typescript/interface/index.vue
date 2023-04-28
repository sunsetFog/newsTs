<template>
    <section>
        <button @click="handleSubmit">提交调用接口</button>
    </section>
</template>

<script lang="ts">
import {
    defineComponent,
    ref,
    reactive,
} from "vue";

import { saveOrUpdateDemo } from "./services"

interface Book {
    readonly title: string // 只读属性，创建的值不能修改
    year?: number // 问号表示可选的属性, 既是可以缺少这个属性
    list: number[] // 表示由此类型元素组成的一个数组    方式二：数组泛型 Array<number>
    grass(source: string, subString: string): boolean // 函数类型   返回值是boolean类型
    [random: string]: any // key随机字符串，value是任意类型
}

export default defineComponent({
    name: "interface-demo",
    data() {

        return {
            cucumber: {} as Book // 默认值 as 指定类型
        }
    },
    created() {
        let params = {
            title: 'Vue 3 Guide',
            year: 2022,
            list: [6],
            grass: function (source: string, subString: string) {
                return true
            },
            other: '别的呢'
        }

        const book = reactive<Book>(params);
        console.log("---reactive使用接口---", book);

        this.beanWay(params);

        this.dragonfly({ tile: '看看' });

        console.log("--环境变量--", process.env)
    },
    methods: {
        beanWay(value: Book) {// 指定形参对象类型
            console.log("参数：", value);
            // 指定变量类型
            let Peach1: number = 180;
            let Peach2 = <number> 200;// 方式2
            console.log("桃子", Peach1, "---", Peach2);
        },
        // 指定对象类型和默认值是空对象
        dragonfly(value: Object = {}) {
            console.log("=dragonfly=", value);
        },
        // 可以用return,但是不能return + 返回值
        butterfly01(): void {
            return;
        },
        // 必须return + 指定类型的返回值
        butterfly02(): String {
            return "么么哒";
        },
        // 泛型   作用：传入参数的类型 == 返回值的类型    而any是任何类型，两者不相等
        identity<T>(arg: T): T {
            return arg;
        },
        //表单提交事件---调用接口
        async handleSubmit(v) {
            try {
                let params = {
                    name: '',
                    pageNum: 1,
                    pageSize: 10
                };
                await saveOrUpdateDemo(params);
            } finally {

            }
        }
    }
})
</script>

