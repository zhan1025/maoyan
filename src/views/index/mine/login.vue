<template>
  <div>
    <!-- 选项卡 -->
    <van-tabs v-model="active">
      <!-- 已有账号登录 -->
      <van-tab title="美团账号登录">
       <div>
          <form >
            <input type="text" placeholder="账户名/手机号/Email" class='user' required name="username" v-model="useraccount">
            <input type="password" placeholder="请输入您的密码" class='password' required name="password" v-model='password'>
            <button class='login-btn' @click="handleLogin">登录</button>
          </form>
        </div>
      </van-tab>

      <!-- 手机验证登录 -->
      <van-tab title="手机验证登录">
        <div>
          <form id="login">
            <div class="inputbox">
              <input type="text" placeholder="请输入手机号" class='phones' required name="phone">
              <button class="msg-btn">获取验证码</button>
            </div>
            <div class='msgbox'>
              <input type="password" placeholder="请输入短信验证码"  required name="phonemsg" class="msg">
            </div>
            <button class='login-btn'>登录</button>
          </form>
        </div>
      </van-tab>

    </van-tabs>

    <!-- 底部 -->
     <ul class="subline">
        <li><router-link to="/mine/signup">立即注册</router-link></li>
        <li class="pull-right"><a href="https://passport.meituan.com/useraccount/retrievepassword">找回密码</a></li>
    </ul>
  </div>
</template>
<script>

import { setTimeout } from 'timers'
export default {
  data () {
    return {
      active: 0,
      password: '',
      useraccount: ''
    }
  },

  methods: {
    handleLogin () {
      setTimeout(() => {
        let userInfo = {
          useraccount: useraccount,
          password: password
        }
        console.log(111)
        window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
      }, 2000)
    }
  }

}
</script>

<style lang="less" scoped>
// 底部统一样式
.subline {
  display:flex;
  width:96%;
  padding: 2%;
  justify-content: space-between;
  a{
    color: #df2d2d;
    text-decoration: none;
    outline: 0;
    }
}
// 手机号码输入框
#login{
  width:100%;

.inputbox{
  width:100%;
  border-bottom: 1px solid #d6d6d6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .phones{
    border: 0;
    height: 45px;
    text-indent: 6%;
    line-height: 1;
    font-size: 16px;
    border-radius: 5px;
    padding: 0;
  };
  .msg-btn{
    background-color: #dcdcdc;
    color: #999;
    border: 0;
    height: 35px;
    display: inline-block;
    margin-top: -1.5%;
    margin-bottom: -1.5%;
    margin-right:2%;
    border-radius: 5px;
    width:26%;
    vertical-align: middle;
}
}
}

// 短信验证码输入框
.msgbox{
  width:100%;
  border-bottom: 1px solid #d6d6d6;
  .msg{
    border: 0;
    height: 35px;
     width:94%;
     margin:2.5% 3%;
    text-indent: 2%;
    line-height: 1;
    font-size: 16px;
    border-radius: 5px;
    padding: 0;
    background-color: rgb(235, 235, 228);
}
}
.user{
    border: 0;
    height: 45px;
     width:100%;
    text-indent: 2%;
    line-height: 1;
    font-size: 16px;
    border-radius: 5px;
    padding: 0;
    border-bottom: 1px solid #d6d6d6;
}
.password{
    border: 0;
    height: 45px;
     width:100%;
    text-indent: 2%;
    line-height: 1;
    font-size: 16px;
    border-radius: 5px;
    padding: 0;
    border-bottom: 1px solid #d6d6d6;
}

.login-btn{
  display:inline-block;
  height: 50px;
  width:96%;
  margin:2%;
  background-color: #df2d2d;
  font-size:20px;
  color:white;
  border:0;
  border-radius: 5px;
  vertical-align: middle;
  line-height: 50px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
