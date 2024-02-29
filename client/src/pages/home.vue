<template>
    <div class="home-page">
        <pageHeader />
          <div class="home-content">
            day la content
          </div>
        <navBar />
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader.vue';
import navBar from '@/components/navBar.vue';

    export default {
        components:{
            pageHeader,
            navBar
        }   
    }
</script>

<style lang="scss" scoped>

</style>