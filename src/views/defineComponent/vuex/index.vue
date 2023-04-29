<template>
    <section>
        =1={{bean}}==
        <br>
        =2={{songUrl}}==
    </section>
</template>

<script lang="ts">
import {
  defineComponent,// 定义 Vue 组件
  getCurrentInstance,// vue实例对象
  computed,
} from "vue";

// 引入vuex
import { mapGetters, useStore } from "vuex"

export default defineComponent({
    name: "vuex-demo",
    setup() {
        // 调用vuex的commit方法
        console.log("--getCurrentInstance()--", getCurrentInstance());
        // const { proxy } = getCurrentInstance();
        // proxy.$store.commit('setIsPlay', true);

        // 引入vuex
        const store = useStore();
        // 使用vuex的getter
        const songUrl = computed(() => store.getters.bean);
        return {
            songUrl
        }
    },
    computed: {
        ...mapGetters([
            "bean"
        ])
    }
})
</script>

