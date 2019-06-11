<template>
  <div>
    <div>
    <header class="navbar">
      <div class="nav-wrap-left">
        <router-link class="back" to="./film">
          <i class="iconfont icon-arrow-left"></i>
        </router-link>
      </div>
      <h1 class="nav-header"> 猫眼电影 </h1>
    </header>
    <van-tabs v-model="active">
  <van-tab title="美团账号登录">

  </van-tab>
  <van-tab title="手机验证登录">内容 2</van-tab>
 
</van-tabs>
     <ul class="subline">
        <li><a href="//i.meituan.com/account/signup">立即注册</a> </li>
        <li class="pull-right"><a href="https://passport.meituan.com/useraccount/retrievepassword">找回密码</a></li>
    </ul>
    <footer>
      <div class="copyright">
        <span class="copyright">© 猫眼电影 客服电话：
          <a data-evt="ft/hotline" href="tel:4006705335">400-670-5335</a>
        </span>
      </div>
    </footer>
    </div>

  </div>
</template>
<script>
export default {
  
  data(){
    return {
      active:0
    }
  },
  methods:{

  }
}
</script>
<style lang="less" scoped>
.navbar {
    display:flex;
    height:50px;
    color: #fff;
    background: #df2d2d;
    border-bottom: 1px solid #bc1d1d;
    line-height:50px;
    position: relative;
    .nav-header{
      flex:1;
    font-size: 1.44rem;
    font-weight: lighter;
    text-align: center;
    };
   .nav-wrap-left {
  height: 100%;
    a.back {
    height:100%;
    width: 4.02rem;
    line-height: 4rem;
    display: block;
    color: inherit;
    text-align: center;
    .icon-arrow-left{
      font-size:2rem
    }
    };

    
 }
};

</style>
