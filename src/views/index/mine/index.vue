<template>
  <div>
<!-- 头部 -->
     <header class="navbar">
      <div class="nav-wrap-left">
        <p class="back" to="/film" @click="toLast">
          <i class="iconfont icon-arrow-left"></i>
        </p>
      </div>
      <h1 class="nav-header"> 猫眼电影 </h1>
    </header>

    <router-view></router-view>

<!-- 底部 -->
     <footer>
      <div class="copyright">
        <span class="copyright">© 猫眼电影 客服电话：
          <a data-evt="ft/hotline" href="tel:4006705335">400-670-5335</a>
        </span>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  methods: {
    toLast () {
      this.$router.go(-1)
    }
  }

}
</script>

<style lang="less" scoped>
// 头部布局
.navbar {
    display:flex;
    height:50px;
    width:100%;
    color: #fff;
    background: #df2d2d;
    border-bottom: 1px solid #bc1d1d;
    line-height:50px;
    position: relative;
    .nav-header{
      flex:1;
      font-size: 18px;
      font-weight: lighter;
      text-align: center;
    };
   .nav-wrap-left {
      height: 100%;
      .back {
      height:100%;
      width: 50px;
      line-height: 50px;
      display: block;
      color: inherit;
      text-align: center;
      .icon-arrow-left{
        font-size:20px;
      };
      }
    };
}

footer {
  display: flex;
  justify-content: center;
  margin-top: 3%;
  background-color: #f8f8f8;
  a{
    color: #df2d2d;
    text-decoration: none;
    outline: 0;
    }
}
</style>
