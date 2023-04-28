<template>
    <section>
      ---父组件---
      <br/><br/><br />

      <son msg="哈喽" :labels="['鸭子']" @addBook="waterWay" other="别的">
        <template #default>
          <button>
            默认插槽
          </button>
        </template>

        <template #yahoo>
          <button>
          具名插槽
          </button>
        </template>

        
      </son>
    </section>
</template>
<!-- 
    script加上setup无需向模板返回任何组件、变量或函数
 -->
<script lang="ts" setup>
import { computed, nextTick, ref, shallowRef, watch, withDefaults, defineEmits, useSlots, useAttrs, reactive } from 'vue';
import type { Ref } from 'vue'

import Son from './son.vue'




function waterWay(value) {
  console.log("--子传父--", value)
}

</script>
  
<style scoped></style>