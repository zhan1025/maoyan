<template>
  <div>
    <!-- 选项卡 -->
    <van-tabs v-model="active">
      <!-- 已有账号登录 -->
      <van-tab title="美团账号登录">
       <div>
          <form>
            <input type="text" placeholder="账户名/手机号/Email" autocomplete="off" class='user' required name="username" v-model="useraccount"  method="post">
            <input type="password" placeholder="请输入您的密码" class='password' required name="password" v-model='password'  method="post">
            <button class='login-btn' @click="handleLogin" >登录</button>
          </form>
        </div>
      </van-tab>

      <!-- 手机验证登录 -->
      <van-tab title="手机验证登录">
        <div>
          <form id="login">
            <div class="inputbox">
              <input type="text" placeholder="请输入手机号" class='phones' required name="phone"  method="post" v-model='phone' @keyup='valPhone' maxlength="11" autocomplete="off">
              <button class="msg-btn" disabled @click="sendmsg">获取验证码</button>
            </div>
            <div class='msgbox'>
              <input type="text" placeholder="请输入短信验证码"  method="post" disabled name="phonemsg" class="msg" v-model="shortmsg" maxlength="6">
            </div>
            <button class='login-btn2' disabled @click="toAccount">登录</button>
          </form>
        </div>
      </van-tab>

    </van-tabs>

    <!-- 底部 -->
     <ul class="subline">
        <li><router-link to="/mine/signup">立即注册</router-link></li>
        <li class="pull-right"><a href="#">找回密码</a></li>
    </ul>
  </div>
</template>
<script>

import { setTimeout, setInterval, clearInterval } from 'timers'
export default {
  data () {
    return {
      active: 0,
      password: '',
      useraccount: '',
      phone: '',
      shortmsg: '',
      sendCode: true,
      seconds: 0
    }
  },

  methods: {
    handleLogin (e) {
      e.preventDefault()
      e.target.required = false
      e.target.style.backgroundColor = '#ccc'
      e.target.innerHTML = '登录中...'
      setTimeout(() => {
        let userInfo = {
          useraccount: this.useraccount,
          password: this.password
        }
        window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
        this.$router.replace('/account')

        console.log(e.target)
      }, 2000)
    },
    valPhone () {
      let reg = /^1[3|4|5|7|8|9]\d{9}$/
      let msgbtn = document.getElementsByClassName('msg-btn')[0]
      if (reg.test(this.phone)) {
        msgbtn.disabled = false
        msgbtn.style.cssText = 'border:1px solid #df2d2d;background:#fff;color:#df2d2d'
      }
    },

    sendmsg (e) {
      e.preventDefault()
      let msg = document.getElementsByClassName('msg')[0]
      msg.disabled = false
      msg.style.cssText = 'background-color:rgb(255, 255, 255)'
      let loginbtn = document.getElementsByClassName('login-btn2')[0]
      loginbtn.disabled = false
      loginbtn.style.backgroundColor = '#df2d2d'
      var msgbtn = document.getElementsByClassName('msg-btn')[0]
      this.sendCode = false
      this.seconds = 60
      var timer = setInterval(() => {
        this.seconds--
        msgbtn.innerHTML = this.seconds + '秒'
        msgbtn.style.cssText = 'background-color:#ccc;border:0;color:white'
        msgbtn.disabled = true
        if (this.seconds <= 0) {
          this.sendCode = true
          clearInterval(timer)
          msgbtn.style.cssText = 'border:1px solid #df2d2d;background:#fff;color:#df2d2d'
          msgbtn.innerHTML = '再次发送验证码'
          msgbtn.disabled = false
        }
      }, 1000)
    },

    toAccount (e) {
      e.preventDefault()
      let reg = /^\d{6}$/
      console.log(e)
      if (reg.test(this.shortmsg)) {
        e.target.style.backgroundColor = '#ccc'
        e.target.innerHTML = '登录中...'
        setTimeout(() => {
          let userInfo = {
            phone: this.phone,
            shortmsg: this.shortmsg
          }
          window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
          this.$router.replace('/account')
        }, 2000)
      } else {
        e.disabled = true
      }
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
    background: #fff;
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
    // width:26%;
    vertical-align: middle;
    white-space: nowrap;
}
}
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

.login-btn2{
  display:inline-block;
  height: 50px;
  width:96%;
  margin:2%;
  background-color: #ccc;
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
