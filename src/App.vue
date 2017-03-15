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
    .switch-enter-active,.switch-leave-active{
        transition: all 0.5s;
    }
    .switch-enter,.switch-leave-active{
        transform: scale(1.5);
        opacity: 0;
    }
</style>
