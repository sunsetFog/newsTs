<template>
  <section>-11-{{info}}-11-</section>
</template>

<script lang="ts">
import {
  defineComponent, // 定义 Vue 组件
  ref, // 类型声明，根据初始值推断类型
  computed, // 类型声明，计算值将根据返回值自动推断类型
  reactive, // 类型声明，可以使用接口
  watch
} from "vue";

export default defineComponent({
  name: "zidingyizujian",
  props: {
    message: {
      type: String,
      required: true
    }
  },
  setup(props) {// 是data
    console.log("props参数："+props.message);

    let count = ref(100);
    console.log("---ref(0)---", count, "---", count.value);
    // computed
    const doubleCount = computed(() => count.value * 2);

    return {
      info: "----信息----",
      doubleCount
    };
  }
});
</script>

<style lang="less" scoped>
</style>

