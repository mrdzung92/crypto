import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// fontawesome icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from '@fortawesome/free-regular-svg-icons'
import { faEarthAmerica,faMoon ,faHouse,faChartLine,faMoneyBillTrendUp,faHeadset,faUser,faVolumeHigh,faShield,faLock,faAngleLeft} from "@fortawesome/free-solid-svg-icons";
library.add(far,faEarthAmerica,faMoon,faHouse,faChartLine,faMoneyBillTrendUp,faHeadset,faUser,faVolumeHigh,faShield,faLock,faAngleLeft)
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import MarqueeText from 'vue-marquee-text-component'





const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('marquee-text', MarqueeText)

app.use(router)
app.mount('#app')
