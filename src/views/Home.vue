<template>
  <div class="home">
    <ul>
        <li v-for="(item, index) in corn_list">
            <router-link :to="item.path">{{item.name}}</router-link>
        </li>
    </ul>
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<script lang="ts">
// 引入装饰器
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';


@Options({
  components: {

  },
})

export default class Home extends Vue {
    data () {
        return {
            corn_list: [
                { name: "定义 Vue 组件", path: "/defineComponent"},
                { name: "vuex", path: "/vuex"},
                { name: "interface", path: "/interface"},
                { name: "computed", path: "/computed"},
                { name: "watch", path: "/watch"}
            ]
        }
    }
}
</script>
