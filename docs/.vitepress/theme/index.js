import DefaultTheme from 'vitepress/theme';
import './custom.css';
import './layout.css';
import Pricing from '../views/Pricing/Pricing.vue';
import i18n from "./i18n";

export default {
    ...DefaultTheme,
    enhanceApp({
        app
    }) {
        //引入国际化
        app.use(i18n);
        // 注册自定义组件
        app.component('Pricing', Pricing);

    }
}
