<template>
    <div class="head-com">
        <div class="left-content">
            <img src="../assets/images/logo.png" alt="logo">
        </div>

        <div class="right-content">
            <div class="action">
                <router-link class="link" to="/login">登录</router-link>
                <router-link class="link" to="/register">注册</router-link>
            </div>
            <div class="lang">
                <font-awesome-icon @click="() => { activeLangBox = !activeLangBox }" class="icon"
                    :icon="['fas', 'earth-americas']" />
                <ul v-if="activeLangBox" class="lang-list">
                    <li class="lang-item" v-for="item, index in langData" :key="index" @click="changeLang(item.lang)">
                        <img :src="item.image" :alt="item.name">
                        <p class="text">{{ item.name }}</p>
                    </li>
                </ul>
            </div>

            <div class="mode" @click="changeMode">
                <font-awesome-icon v-if="darkMode" class="icon" :icon="['fas', 'moon']" />
                <font-awesome-icon v-else class="icon" :icon="['far', 'moon']" />
            </div>

        </div>
    </div>
</template>

<script>
import china from '@/assets/images/quocky/china.png';
import england from '@/assets/images/quocky/england.png';
import korea from '@/assets/images/quocky/korea.png';
import lao from '@/assets/images/quocky/lao.png';
import vietnam from '@/assets/images/quocky/vietnam.png';

import clickOutsideDirective from '@/services/helper/ClickOutsideDirective.js';
export default {
    data() {
        return {
            darkMode: false,
            activeLangBox: false,
            langData: [
                {
                    name: '中文',
                    image: china,
                    lang: 'zh'
                },
                {
                    name: 'English',
                    image: england,
                    lang: 'en'
                },
                {
                    name: '대한민국',
                    image: korea,
                    lang: 'ko'
                },
                {
                    name: 'ປະເທດລາວ',
                    image: lao,
                    lang: 'la'
                },
                {
                    name: 'Tiếng việt',
                    image: vietnam,
                    lang: 'vi'
                },

            ]
        }
    },
    directives: {
        clickOutside: clickOutsideDirective
    },
    methods: {
        //thay doi dark mode
        changeMode() {
            const element = document.getElementById('wrapper')
            this.darkMode = !this.darkMode
            let theme = this.darkMode ? 'dark' : 'default'
            element.classList.toggle('dark-mode')
            localStorage.setItem('theme', theme)
        },
        changeLang(lang) {
            localStorage.setItem('lang', lang)
            location.reload();
        }
    },

    mounted() {

    }
    , created() {
        this.darkMode = localStorage.getItem('theme') == 'default' ? false : true
    }
}
</script>

<style lang="scss" scoped></style>