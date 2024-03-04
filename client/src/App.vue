<template>
  <div id="wrapper">
    <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component" />
    </transition>
  </router-view>
    
  </div>
</template>

<script>

export default {
  data() {
    return {}
  },
  methods: {

    setLocalTheme() {
      // 处理主题
      const localTheme = localStorage.getItem('theme')
      if (localTheme) {
        if (localTheme == 'dark') {
          document.getElementById('wrapper').classList.add('dark-mode')
        }
      } else {
        localStorage.setItem('theme', 'default')
      }
    },
    setDefaultLang(){
      const lang = localStorage.getItem('lang');
      if(!lang){
        localStorage.setItem('lang','zh');
      }
    }
  },
  mounted() {
    this.setLocalTheme()
  }
}
</script>

<style lang="scss" scoped></style>