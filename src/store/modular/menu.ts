import lodash from 'lodash'
export default {
    state: {
        menuList: [
            { path: "", key: lodash.uniqueId('menu-'), title: '知识点', children: [
                { path: "/defineComponent", key: lodash.uniqueId('menu-'), title: '定义 Vue 组件', children: [] },
                { path: "/vuex", key: lodash.uniqueId('menu-'), title: 'vuex', children: [] },
                { path: "/computed", key: lodash.uniqueId('menu-'), title: 'computed', children: [] },
                { path: "/watch", key: lodash.uniqueId('menu-'), title: 'watch', children: [] },
                { path: "/link", key: lodash.uniqueId('menu-'), title: '路由跳转', children: [] }
            ]},
            { path: "", key: lodash.uniqueId('menu-'), title: '指定类型', children: [
                { path: "/interface", key: lodash.uniqueId('menu-'), title: 'interface', children: [] },
            ] },
            { path: "", key: lodash.uniqueId('menu-'), title: 'setup', children: [
                { path: "/refUnit", key: lodash.uniqueId('menu-'), title: '数据', children: [] }
            ] }
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