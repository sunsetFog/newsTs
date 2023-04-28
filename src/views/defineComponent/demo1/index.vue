<template>
  <section>-11-{{info}}-11-
  <br/>
  </section>
</template>

<script lang="ts">
import {
  defineComponent, // 定义 Vue 组件
  ref, // 类型声明，根据初始值推断类型
  computed, // 类型声明，计算值将根据返回值自动推断类型
  reactive, // 类型声明，可以使用接口
  watch
} from "vue";
import type { PropType } from 'vue'// 使用 PropType 这个工具类型来标记更复杂的 props 类型

interface Book {
  title: string
  author: string
  year: number
}
export default defineComponent({
  name: "zidingyizujian",
  setup(props) {// vue3用data有黄色警报

    let count = ref(100);
    console.log("---ref(0)---", count, "---", count.value);
    // computed
    const doubleCount = computed(() => count.value * 2);

    return {
      info: "----信息----",
      doubleCount
    };
  },
  methods: {

  }
});
</script>

<style lang="less" scoped>
</style>

