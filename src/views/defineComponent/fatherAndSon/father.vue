<template>
    <section>
        ---父组件---
        <br/><br/><br />
        <Son name="三哥" id="150" message="哈喽" metadata="hello" :book="book" @addBook="waterWay" :grass="waterWay"></Son>
    </section>
</template>
  
<script lang="ts">
import {
    defineComponent,
    ref,
    computed,
    reactive,
    watch
} from "vue";
import Son from './son.vue'
export default defineComponent({
    name: "father1",
    components: { Son },
    setup(props) {// 
        console.log("父props参数：", JSON.stringify(props));

        return {
            book: {
                title: '油麦菜',
                author: '农民'
            }
        };
    },
    methods: {
        waterWay(value) {
            console.log("--子传父--", value)
        }
    }
});
</script>
  
<style lang="less" scoped></style>
  
  