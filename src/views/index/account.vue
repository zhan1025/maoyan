<template>
  <div class="account">
    <header>
      <h1 class="title">我的</h1>
      <div class="avator">
        <p>
          <img src="../../assets/avator.jpg" alt="">
          </p>
      </div>
    </header>
    <div class="main">
      <p>我的订单</p>
      <ul class="choise">
        <li>
         <i class="iconfont icon-films"></i>
          <span>电影</span>
        </li>
         <li>
           <i class="iconfont icon-cinemas"></i>
          <span>商城</span>
        </li>
      </ul>
    </div>
    <ul class="list">
      <li> 在线观影</li>
      <li>优惠券</li>
      <li> 折扣卡</li>
    </ul>

    <Tabbar></Tabbar>
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar.vue'
export default {
  name: 'account',
  components: {
    Tabbar
  }
}
</script>

<style lang="less" scoped>
@import  '~@/styles/common/mixin.less';

.account{
  height:100%;
  background: #f3f3f3;
  border: #e2e2e5;
  header{
    height: 30%;
    .title{
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 25%;
      background: #e54847;
      text-align: center;
      color:#f8f1ff;
      font-size: 20px;
      border: 0;
      overflow: hidden;
      };
    .avator{
      margin-top:-2px;
      background: #e64c46;
      width:100%;
      height: 75%;
      display: flex;
      justify-content: center;
      align-items: center;
        p{
          width:60px;
          height:60px;
          border-radius:50%;
          border: 3px solid white;
          overflow: hidden;
          img{
            width: 100%;
          }
        }

    }
  }
  .main{
    margin-top:10px;
    background: #fff;
    height: 25%;
    p{
      display: flex;
      flex-direction: column;
      justify-content: center;
      width:100%;
      height:18%;
      line-height: 500%;
      color:#443e39;
      text-align: center
    };
    .choise{
      display: flex;
      justify-content: space-around;
      align-items: center;
      height:82%;
      li{
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 50%;
        justify-content: space-around;
        .iconfont{
          font-size: 30px;
        }
      }
    }
  }
  .list{
    margin-top:10px;
    background: #fff;
    height:22%;
    li{
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 95%;
      height: 33%;
      padding-left:5%;
      // line-height: 3.5;
      .border-bottom
    }
  }

}
</style>
