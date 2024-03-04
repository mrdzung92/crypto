<template>
    <div class="register-page">
          <headTop/>
          <form class="register-body">
                <div class="logo"><img src="@/assets/images/logo.png" alt=""></div>
                <div class="form-content">
                    <div class="form-group">
                        <label for="">*账号:</label>
                        <input type="text" placeholder="请输入账号">
                    </div>
                    <div class="form-group">
                        <label for="">*密码:</label>
                        <input type="text" placeholder="请输入密码">
                    </div>
                    <div class="form-group">
                        <label for="">*确认密码:</label>
                        <input type="text" placeholder="请输入确认密码">
                    </div>
                    <div class="form-group">
                        <label for="">邀请码:</label>
                        <input type="text" placeholder="邀请码没有可不填写">
                    </div>
                    <div class="form-group verify">
                        <label for="">*验证码:</label>
                        <input type="text" placeholder="请输入验证码">
                        <img src="https://xhgks04.fgh8208sta.com:59789/loginVerifycode.do?v=1709570089497" alt="verify">
                    </div>
                </div>
                <div class="form-footer">
                    <div class="left"><input type="checkbox"> <span class="text">记住密码</span></div>
                    <router-link class="right" to="/login">有账号? 现在登录</router-link>
                </div>
                <div class="controll">
                    <button>注册</button>
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