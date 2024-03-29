import lodash from 'lodash'
export default {
    state: {
        menuList: [
            { path: "", key: lodash.uniqueId('menu-'), title: '选项式组件defineComponent', children: [
                { path: "/defineComponent_demo1", key: lodash.uniqueId('menu-'), title: 'demo1', children: [] },
                { path: "/vuex", key: lodash.uniqueId('menu-'), title: 'vuex', children: [] },
                { path: "/fatherAndSon1", key: lodash.uniqueId('menu-'), title: '父子通讯', children: [] },
            ]},
            { path: "", key: lodash.uniqueId('menu-'), title: 'typescript指定类型', children: [
                { path: "/interface", key: lodash.uniqueId('menu-'), title: 'interface', children: [] },
            ]},
            { path: "", key: lodash.uniqueId('menu-'), title: '组合式组件<script setup>', children: [
                { path: "/setup_demo1", key: lodash.uniqueId('menu-'), title: 'demo1', children: [] },
                { path: "/link", key: lodash.uniqueId('menu-'), title: '路由跳转', children: [] },
                { path: "/fatherAndSon2", key: lodash.uniqueId('menu-'), title: '父子通讯', children: [] },
            ]},
            { path: "", key: lodash.uniqueId('menu-'), title: 'vue类组件', children: [
                { path: "/vueClass_demo1", key: lodash.uniqueId('menu-'), title: 'demo1', children: [] },
                { path: "/fatherAndSon3", key: lodash.uniqueId('menu-'), title: '父子通讯', children: [] },
                { path: "/mixins", key: lodash.uniqueId('menu-'), title: 'mixins混入', children: [] },
            ]},
        ],
        menu_value: null
    },
    mutations: {
        // 菜单选中值
        menuOfValue(state,value){
            console.log("--menuOfValue--", value);
            sessionStorage.setItem('menu_value', value);
            state.menu_value = value
        }
    },
    actions: {
    },
    getters: {
        menuList: state => state.menuList,
        menuValue: state => state.menu_value
    }
}