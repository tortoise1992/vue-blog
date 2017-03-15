<template>
    <div class="header">
        <router-link to="/index" class="logo">
            <img src="static/img/logo.png" width="300" height="80">
        </router-link>
        <div class="nav">
            <router-link to="/index"><span>首页</span></router-link>
            <router-link to="/about"><span>关于我</span></router-link>
            <router-link to="/fe"><span>前端技术</span></router-link>
            <router-link to="/science"><span>黑科技</span></router-link>
            <a href="https://github.com/tortoise1992" target="_blank">github</a>
            <router-link to="/comment"><span>留言板</span></router-link>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="less" rel="stylesheet/less" >
.header{
    width: 1200px;
    margin: 0 auto;
    height: 80px;
    .logo{
        display: inline-block;
        width: 300px;
        height: 80px;
        img{

        }
    }
    .nav{
        width: 900px;
        float: right;
        text-align: right;
        line-height: 80px;
        height: 80px;
        a{
            padding: 10px 5px;
            margin: 0 20px;

            &.router-link-active{
                border-bottom: 2px solid #333;

            }

        }
    }
}
</style>
