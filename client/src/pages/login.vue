<template>
    <div class="login-page">
          <headTop/>
          <form class="login-body">
                <div class="logo"><img src="@/assets/images/logo.png" alt=""></div>
                <div class="form-content">
                    <div class="form-group">
                        <font-awesome-icon  class="icon" :icon="['fas', 'user']" />
                        <input type="text" placeholder="请输入账号">
                    </div>
                    <div class="form-group">
                        <font-awesome-icon  class="icon" :icon="['fas', 'lock']" />
                        <input type="text" placeholder="请输入密码">
                    </div>
                    <div class="form-group verify">
                        <font-awesome-icon class="icon" :icon="['fas', 'shield']" />
                        <input type="text" placeholder="请输入验证码">
                        <img src="https://xhgks04.fgh8208sta.com:59789/loginVerifycode.do?v=1709570089497" alt="verify">
                    </div>
                </div>
                <div class="form-footer">
                    <div class="left"><input type="checkbox"> <span class="text">记住密码</span></div>
                    <router-link class="right" to="/register">没有账号? 现在注册</router-link>
                </div>
                <div class="controll">
                    <button>登录</button>
                </div>
                
          </form>
    </div>
</template>

<script>
import headTop from '@/components/headTop.vue';
    export default {
        components:{
            headTop
        }
    }
</script>

<style lang="scss" scoped>

</style>