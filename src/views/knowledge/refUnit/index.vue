<template>
    <section>
        <button @click="waterWay">{{ keyword }}--{{ msg }}</button>
    </section>
</template>
<!-- 
    script加上setup无需向模板返回任何组件、变量或函数
 -->
<script lang="ts" setup>
import { computed, nextTick, ref, shallowRef, watch, withDefaults, defineEmits, useSlots, useAttrs } from 'vue';


const keyword = ref('关键字');

// prors默认值
const props = withDefaults(
  defineProps<{
    msg: string;
  }>(),
  { msg: 'Hello World!' }
);


const emit = defineEmits<{
  (event: 'click', count: number): void;
}>();


const slots = useSlots();
const attributes = useAttrs()



console.log("--关键字-1-", keyword)
function waterWay() {
    console.log("--关键字-2-", keyword)
    keyword.value = '大白菜'
}

</script>
  
<style scoped></style>