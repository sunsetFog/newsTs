<template>
    <section id="menuDesign">
        <el-scrollbar style="width:100%;height:90%;">
  
          <el-menu
          @select="selectMenu"
          @open="openMenu"
          @close="closeMenu"
          :default-active="menuValue"
          background-color="#fff"
          text-color="black"
          unique-opened
          active-text-color="#ffd04b"
          mode="vertical"
          :collapse="isCollapse"
          >
          <div v-for="(item,index) in menuList" :key="index+'w'">
              <!-- 第一级 -->
              <!-- <el-menu-item :index="item.key" v-if="item.children.length == 0">
                    <el-icon><location /></el-icon>
                  <span>{{item.title}}</span>
              </el-menu-item> -->
  
              <!-- el-menu-item的index绑定是@open事件的参数 -->
              <el-sub-menu :index="'sign'+index">
                  <template #title>
                        <el-icon><IconMenu /></el-icon>
                      <span>{{item.title}}</span>
                  </template>
                  <el-menu-item-group>
                      <div v-for="(val,ind) in item.children" :key="val.key">
                          <!-- 第二级 -->
                          <!-- el-sub-menu的index绑定是@select事件的参数,也是:default-active的参数 -->
                          <el-menu-item :index="val.key">
                              <div style="width: 100%;height: 100%;text-indent: 25px;">{{val.title}}</div>
                          </el-menu-item>
                      </div>
                  </el-menu-item-group>
              </el-sub-menu>
          </div>
          </el-menu>
  
      </el-scrollbar>
    </section>
  </template>
  
  <script>
  import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
  import { mapMutations, mapGetters, mapActions } from 'vuex';
  import {
  defineComponent,
  ref,
  computed,
} from "vue";


  export default defineComponent({
      name: 'menuDesign',
      components: { Location, IconMenu },
      data() {
          return {
            unique_opened: true
          };
      },
      props: {
          isCollapse: {
              type: Boolean,
              default: function() {
                  return false;
              },
          },
      },
      computed: {
          ...mapGetters(['menuList', 'menuValue'])
      },
      created() {
        //   this.$store.commit("menuOfValue", sessionStorage.getItem('menu_value'));
          
          console.log("--menu菜单数组--", this)
      },
      methods: {
          // 选中菜单
          selectMenu(key) {
              this.recursion(this.menuList, key);
              console.log('selectMenu', key);
          },
          recursion(arr, key) {
              arr = arr || [];//退出遍历1. 空数组不会遍历，就不会调用自己了
              for (let i = 0; i < arr.length; i++) {
                  let item = arr[i];
  
                  if(item.key == key) {
                      // 菜单选中值
                    //   this.$store.commit('menuOfValue', item.key);
                      // 跳转
                      this.$router.push({ path: item.path });
                      break;
                  }
  
                  if (!item.children) {//退出遍历2. 结束一次循环，就不会调用自己了
                      continue;
                  }
                  this.recursion(item.children, key); // 传children数组
              }
          },
          // 展开菜单
          openMenu(index) {
              index = Number(index.split('sign')[1]);
              console.log('openMenu', index);
          },
          // 关闭菜单
          closeMenu(path) {
              console.log('closeMenu', path);
          }
      },
  })
  </script>
  
  <style lang="less" scoped>
  #menuDesign {
      height: calc(100% - 50px);
      /deep/.el-scrollbar__wrap{
          overflow-x: hidden !important;
      }
  }
  </style>
  
  