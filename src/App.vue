<template>
    <div>
      <h1>我是用 vm 实例的 render挂载的 App组件</h1>

      <!-- 顶部 -->
      <mt-header fixed title="我是顶部"></mt-header>

      <!-- 中间切换组件部分 -->

      <!-- 底部菜单 -->
      <nav class="mui-bar mui-bar-tab">
        <a class="mui-tab-item mui-active" href="#tabbar">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-chat">
          <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
          <span class="mui-tab-label">消息</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-contact">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">通讯录</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-map">
          <span class="mui-icon mui-icon-gear"></span>
          <span class="mui-tab-label">设置</span>
        </a>
		  </nav>
    </div>
</template>

<script>

export default{
 
}
</script>

<style lang="scss" scoped>
h1{
  color: saddlebrown;
}
</style>