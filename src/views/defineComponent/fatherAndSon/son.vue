<template>
    <section>
        ---子组件---
        <br/><br/>
        props数据：{{ message }}
        <br/><br/>
        <button @click="emitWay">子传父--提交emit</button>
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
  import type { PropType } from 'vue'// 使用 PropType 这个工具类型来标记更复杂的 props 类型
  
  interface Book {
    title: string
    author: string
  }
  export default defineComponent({
    name: "son1",
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
        // validator: (book: Book) => !!book.title
      },
      // 也可以标记函数
      grass: Function as PropType<(id: number) => void>
    },
    // emits 标注类型
    emits: {
      addBook(payload: { bookName: string }) {
        // 执行运行时校验
        return payload.bookName.length > 0
      }
    },
    setup(props) {
      console.log("子props参数：", JSON.stringify(props, null, 4));
  
      return {
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
  
  