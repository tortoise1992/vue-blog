<template>
  <div>
      <v-nav></v-nav>

      <transition name="switch">
          <router-view></router-view>
      </transition>

  </div>
</template>

<script>
    import nav from 'components/nav/nav.vue'
    export default {
        components:{
            'v-nav':nav
        }
    }
</script>

<style  lang="less" rel="stylesheet/less">
    .switch-enter-active{
        transition: all 1s;
    }
    .switch-enter,.switch-leave-active{
        transform: translate3d(300px,0,0);
        opacity: 0;
    }
</style>
