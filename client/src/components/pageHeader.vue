<template>
    <div class="head-com">
        <div class="left-content">
            <img src="../assets/images/logo.png" alt="logo">
        </div>
        <div class="right-content">
            <font-awesome-icon class="icon" :icon="['fas', 'earth-americas']" />
            <div class="mode" @click="changeMode">
                <font-awesome-icon v-if="darkMode" class="icon" :icon="['fas', 'moon']" />
                <font-awesome-icon v-else class="icon" :icon="['far', 'moon']" />
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            darkMode:false
        }
    },
    methods :{
        
        //thay doi dark mode
        changeMode () {
           const element =  document.getElementById('wrapper')
           this.darkMode = !this.darkMode
           let theme = this.darkMode ?'dark':'default'
           element.classList.toggle('dark-mode')
           localStorage.setItem('theme',theme)
        }
    },

    mounted(){
       
    }
    ,created(){
        this.darkMode = localStorage.getItem('theme') == 'default' ? false:true
    }
}
</script>

<style lang="scss" scoped>
</style>