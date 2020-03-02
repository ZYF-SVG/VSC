// 导入 vue 
import Vue from 'vue';
// 导入 vue 路由
import VueRouter from 'vue-router';
vue.ues(VueRouter);


// 导入 MUI
import './lib/mui-master/dist/css/mui.min.css'
// 导入 MINT-UI
import { Header } from 'mint-ui';
Vue.component( Header.name, Header );

// 导入 App.vue 组件
import App from './App.vue';

// vm 实例
var vm = new Vue({
  el: '#app',
  data: {},
  methods: {},
  render: c =>{
    return c(App);
  }
})