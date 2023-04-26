<template>
  <section>-11-{{info}}-11-
  <br/>
  <button @click="emitWay">提交emit</button>
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
  // 启用了类型推导
  props: {
    name: String,// 类型：string | undefined
    id: [Number, String],// 类型：number | string | undefined
    message: {
      type: String,
      required: true
    },// 类型：string
    metadata: null, // 类型：any
    book: {
      // 提供相对 `Object` 更确定的类型
      type: Object as PropType<Book>,
      required: true,
      // 如果你的 TypeScript 版本低于 4.7，确保使用箭头函数
      default: () => ({
        title: 'Arrow Function Expression'
      }),
      validator: (book: Book) => !!book.title
    },
    // 也可以标记函数
    callback: Function as PropType<(id: number) => void>
  },
  // emits 标注类型
  emits: {
    addBook(payload: { bookName: string }) {
      // 执行运行时校验
      return payload.bookName.length > 0
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
  },
  methods: {
    emitWay() {
      this.$emit('addBook', {
        bookName: 'ice' // 类型错误
      })
    }
  }
});
</script>

<style lang="less" scoped>
</style>

