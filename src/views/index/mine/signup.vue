<template>
  <div>
    <div id="progress">
      <p>输入手机号</p>
      <p><i class="iconfont icon-right"></i></p>
      <p>输入验证码</p>
      <p><i class="iconfont icon-right"></i></p>
      <p>设置密码</p>
    </div>

     <div class='regbox'>
      <input type="text" placeholder="请输入您的手机号"  required name="phonemsg" class="newphone">
     </div>
     <label onclick="" class="mtbox">
        <input id="term" type="checkbox" name="terms" checked="checked" class="mt">
            我已阅读并同意<a href="#">《美团网用户协议》</a>
      </label>
      <button class='login-btn'>获取验证码</button>
  </div>
</template>

<script>
export default {
  namespaced: true,
  name: 'signup'
}
</script>

<style lang="less" scoped>

// 短信验证码输入框
.regbox{
  width:100%;
  border-bottom: 1px solid #d6d6d6;
  border-top: 1px solid #d6d6d6;
  margin-top:2%;
  .newphone{
    border: 0;
    height: 30px;
    margin:2.5% 3%;
    text-indent: 2%;
    line-height: 1;
    font-size: 16px;
    border-radius: 5px;
    padding: 0;
}
}

#progress{
  display: flex;
  padding:0 10%;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
   border-bottom: 1px solid #d6d6d6;
   font-size:14px;
  .icon-right{
     font-size:12px;
     color:#aaa;
   }
}
.mtbox{
  display: block;
  height: 36px;
  line-height: 36px;
 a{
    color: #df2d2d;
  }
}

// 登录按钮
.login-btn{
  display:inline-block;
  height: 50px;
  width:96%;
  margin:2%;
  font-size:20px;
  border:0;
  border-radius: 5px;
  vertical-align: middle;
  line-height: 50px;
  box-sizing: border-box;
  cursor: pointer;
  background-color: #dcdcdc;
  color: #999;
}
</style>

// // 头部布局
// .navbar {
//     display:flex;
//     height:50px;
//     width:100%;
//     color: #fff;
//     background: #df2d2d;
//     border-bottom: 1px solid #bc1d1d;
//     line-height:50px;
//     position: relative;
//     .nav-header{
//       flex:1;
//       font-size: 18px;
//       font-weight: lighter;
//       text-align: center;
//     };
//    .nav-wrap-left {
//       height: 100%;
//       .back {
//       height:100%;
//       width: 50px;
//       line-height: 50px;
//       display: block;
//       color: inherit;
//       text-align: center;
//       .icon-arrow-left{
//         font-size:20px;
//       };
//       }
//     };
// }

// // 插件样式修改
// .van-tabs{
//   display:flex;
//   width:100%;
// }

// // 底部统一样式
// .subline {
//   display:flex;
//   width:96%;
//   padding: 2%;
//   justify-content: space-between;
//   a{
//     color: #df2d2d;
//     text-decoration: none;
//     outline: 0;
//     }
// }

// footer {
//   display: flex;
//   justify-content: center;
//   margin-top: 3%;
//   background-color: #f8f8f8;
//   a{
//     color: #df2d2d;
//     text-decoration: none;
//     outline: 0;
//     }
// }
