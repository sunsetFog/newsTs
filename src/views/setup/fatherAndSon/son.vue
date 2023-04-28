<template>
    <section>
      ---子组件---
        <br/><br/>
        使用props: {{ msg }}
        <br/><br/>
        <button @click="emitWay">提交emit</button>
        <br/><br/>
        <slot></slot>
        <slot name="yahoo"></slot>
    </section>
</template>

<script lang="ts" setup>
import { computed, nextTick, ref, shallowRef, watch, withDefaults, defineEmits, useSlots, useAttrs, reactive } from 'vue';
import type { Ref } from 'vue'


// prors指定类型和默认值
const props = withDefaults(
  defineProps<{// <>里的对象可以写成interface
    msg: string,
    labels: string[]
  }>(),
  { msg: 'Hello World!', labels: ['one'] }
);
console.log("--子props--", JSON.stringify(props, null, 4));


const $emit = defineEmits<{
  (event: 'addBook', value: number): void;
}>();


const slots = useSlots();
console.log("--slots--", slots, "---只是用来v-if判断---", slots.yahoo ? true : false);

// props中未定义的属性
const attributes = useAttrs()
console.log("--attributes--", attributes)




function emitWay() {
  $emit('addBook', 150)
}

</script>
  
<style scoped></style>