<template>
    <section>
        使用数据：{{ count }}
        <br /><br />
        <button @click="waterWay">路由跳转</button>
        &nbsp;&nbsp;&nbsp;
        <button @click="numChange">count改变</button>
        <br /><br />
        计算属性：{{ count_computed1 }} --- {{ count_computed2 }}
    </section>
</template>
<!-- 
<script lang="ts">就加入typescript语法，比如interface等等    $router跳转就不能用了，打印this里没有该变量了
<script> 也能用defineComponent、$router跳转

vue3之defineComponent官方文档：
https://cn.vuejs.org/api/general.html#definecomponent
 -->
<script lang="ts">
import {
    defineComponent, // 定义 Vue 组件
    ref,
    computed,
    reactive,
    watch
} from "vue";
import type { PropType } from 'vue'// 使用 PropType 这个工具类型来标记更复杂的 props 类型

import { useRouter } from 'vue-router';


interface Book {
    title: string
    author: string
    year: number
}
export default defineComponent({
    name: "zidingyizujian",
    setup(props) {// vue3用data有黄色警报
        const use_router = useRouter();// 注意：这个要放setup里


        // 标注类型  ref会根据初始化时的值推导其类型  Ref<number>
        let count = ref(100);
        console.log("---ref(0)---", count, "---", count.value);


        // 标注类型  会自动从其计算函数的返回值上推导出类型  ComputedRef<number>
        const count_computed1 = computed(() => count.value * 2);


        watch(count, (cur, old) => togglePlay(cur, old))
        function togglePlay(cur, old) {
            console.log("watch监听count", cur, "---", old);
        }

        return {
            count,
            count_computed1,
            use_router
        };
    },
    computed: {
        count_computed2(): number {// 没有返回值类型 报错Property 'XXXX' does not exist on type 'ComponentPublicInstance
            return this.count + 5;
        }
    },
    methods: {
        waterWay() {
            console.log("-waterWay-", this);
            this.use_router.push('/interface');
        },
        numChange() {
            this.count++;
        }
    }
});
</script>

<style lang="less" scoped></style>

