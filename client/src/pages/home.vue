<template>
    <div class="home-page">
        <pageHeader />
        <div class="home-content">
            <div class="slider">
                <ul class="slider-list">
                    <li class="slider-item" :class="{ active: activeSliderIndex == index }" v-for="slider, index in dataSlider"
                        :key="index">
                        <a class="link" :href="slider.link"><img :src="slider.image" :alt="slider.name"></a>
                    </li>
                </ul>
                <ul class="controll-list">
                    <li class="controll-item" :class="{ active: activeSliderIndex == index }"
                        @click="() => { activeSliderIndex = index }" v-for="slider, index in dataSlider" :key="index"></li>
                </ul>
            </div>
            <!-- text marquee -->
            <div class="marquee">
                <font-awesome-icon class="icon" :icon="['fas', 'volume-high']" />
                <marquee-text class="text">
                    {{ marqueeText }}
                </marquee-text>    
            </div>
            <!-- hot-crypto -->
            <div class="hot-crypto">
                <div class="title">热门货币</div>
                <div class="box-head">
                    <div class="name">货币</div>
                    <div class="name">价格</div>
                    <div class="name">24h涨跌</div>
                </div>
                <ul class="crypto-list">
                    <li class="crypto-item" v-for="coin,index in hotCryptoList" :key="index">
                        <router-link class="link"  to="/">
                            <div class="left"><img :src="coin.image" alt=""> <p class="name">{{  coin.name.charAt(0).toUpperCase() + coin.name.slice(1) }}<span class="curency">/usdt</span></p></div>
                            <div class="center" :class="{up:coin.trend == 'up'}">{{ coin.price }}</div>
                            <div class="right" :class="{up:coin.trend == 'up'}" >{{coin.vol24h}}%</div>
                        </router-link>
                    </li>
                   
                </ul>
            </div>

            <!-- platform service -->
            <div class="service">
                <div class="left content"><img src="@/assets/images/agent.gif" alt="agent"> <p class="text">成为代理</p></div>
                <div class="right content"><img src="@/assets/images/vip.gif" alt="agent"> <p class="text">购买VIP</p></div>
            </div>
        </div>
        <navBar />
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader.vue';
import navBar from '@/components/navBar.vue';

// demo slider
import slider1 from '@/assets/slider1.jpg';
import slider2 from '@/assets/slider2.jpg';
import slider3 from '@/assets/slider3.jpg';
import slider4 from '@/assets/slider4.jpg';
import slider5 from '@/assets/slider5.jpg';
import slider6 from '@/assets/slider6.jpg';
import slider7 from '@/assets/slider7.jpg';

// demo coin
import btc from '@/assets/images/btc.png';
import eth from '@/assets/images/eth.png';
import bnb from '@/assets/images/bnb.png';
import solana from '@/assets/images/solana.png';
import tron from '@/assets/images/tron.png';

export default {
    components: {
        pageHeader,
        navBar
    },
    data() {
        return {
            dataSlider: [
                {
                    link: '#',
                    name: '23',
                    image: slider1
                },
                {
                    link: '#',
                    name: '23',
                    image: slider2
                },
                {
                    link: '#',
                    name: '23',
                    image: slider3
                },
                {
                    link: '#',
                    name: '23',
                    image: slider4
                },
                {
                    link: '#',
                    name: '23',
                    image: slider5
                },
                {
                    link: '#',
                    name: '23',
                    image: slider6
                },
                {
                    link: '#',
                    name: '23',
                    image: slider7
                },
            ],
            activeSliderIndex: 0,
            marqueeText:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna.'
            ,hotCryptoList:[
                {   name:'btc',
                    image:btc,
                    price:62237.34,
                    vol24h:0.01,
                    trend:'up'
                },
                {
                    name:'eth',
                    image:eth,
                    price:3428.69,
                    vol24h:0.03,
                    trend:'up'
                },
                {
                    name:'bnb',
                    image:bnb,
                    price:414.01,
                    vol24h:0.06,
                    trend:'up'
                },
                {
                    name:'solana',
                    image:solana,
                    price:129.49,
                    vol24h:0.93,
                    trend:'up'
                },
                {
                    name:'tron',
                    image:tron,
                    price:0.1403,
                    vol24h:0.42,
                    trend:'down'
                }
                
            ]
        }
    },
    methods: {
        // xu ly slider
        changeSlider() {
            const len = this.dataSlider.length - 1
            if (this.activeSliderIndex == len) {
                this.activeSliderIndex = 0
            } else {
                this.activeSliderIndex++
            }
            setTimeout(this.changeSlider, 5000)
        },

    },
    mounted() {
        this.changeSlider()
    }
}
</script>

<style lang="scss" scoped></style>