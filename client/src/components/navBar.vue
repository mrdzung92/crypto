<template>
    <div class="nav-com">
        <ul class="nav-list">
            <li class="nav-item"><router-link class="link" :class="{active:$route.path=='/'}" to="/"><font-awesome-icon class="icon" :icon="['fas', 'house']" /> <span class="text">首页</span></router-link></li>
            <li class="nav-item"><router-link class="link" to="#"><font-awesome-icon class="icon" :icon="['fas', 'chart-line']" /> <span class="text">引用</span></router-link></li>
            <li class="nav-item"><router-link class="link" to="#"><font-awesome-icon class="icon" :icon="['fas', 'money-bill-trend-up']" /> <span class="text">交易</span></router-link></li>
            <li class="nav-item"><router-link class="link" to="#"><font-awesome-icon class="icon" :icon="['fas', 'headset']" /> <span class="text">客服</span></router-link></li>
            <li class="nav-item"><router-link class="link" to="#"><font-awesome-icon class="icon" :icon="['fas', 'user']" /> <span class="text">我</span></router-link></li>
        </ul>
    </div>
</template>

<script>

    export default {
        data (){
            return {}
        },
        methods:{
            
        },
        
    }
</script>

<style lang="scss" scoped>

</style>