<template>
    <section>
        <button @click="waterWay">{{ keyword }}</button>
    </section>
</template>
<!-- 
    可选<script setup> 无需向模板export default返回任何组件、变量或函数
 -->
<script lang="ts" setup>
import { computed, nextTick, ref, shallowRef, watch, withDefaults, defineEmits, useSlots, useAttrs, reactive, getCurrentInstance } from 'vue';
import type { Ref } from 'vue'

// 标注类型  ref会根据初始化时的值推导其类型  Ref<string>
const keyword = ref('默认值');
// Ref指定一个更复杂的类型
const year: Ref<string | number> = ref('2020')
year.value = 2020 // 成功！
// 标注类型 隐式地从它的参数中推导类型  { title: string }
const book1 = reactive({ title: 'Vue 3 指引' })
// 显式地标注一个 reactive 变量的类型
interface Book {
  title: string
  year?: number
}
const book2: Book = reactive({ title: 'Vue 3 指引' })
// 标注类型  会自动从其计算函数的返回值上推导出类型  ComputedRef<string>
const double1 = computed(() => 'sign: ' + keyword.value)
// 通过泛型参数显式指定类型
const double2 = computed<number>(() => {
  // 若返回值不是 number 类型则会报错
  return 2
})

const that = getCurrentInstance()
console.log("--vue的this--", that);



function waterWay() {
    console.log("--关键字-2-", keyword)
    
    keyword.value = '大白菜'
    nextTick(() => {
      console.log("等待下一次 DOM 更新完才执行DOM操作")
    })
}

</script>
  
<style scoped></style>