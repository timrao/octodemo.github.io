import {
    createI18n
} from 'vue-i18n';

// 导入语言文件
import zhCN from './lang/zh-CN';
import enUS from './lang/en-US';

//默认的国际化资源
const DEFAULT_LOCALE = "default_locale";

export const getDefaultLocale = () => {
    //默认的采用浏览器默认的语言
    let defaultLocale = window.localStorage.getItem(DEFAULT_LOCALE);
    //本地未能获取到,从language中获取
    if (!defaultLocale) {
        if (navigator.language === 'zh-CN') defaultLocale = 'zh';
        else defaultLocale = 'en';
    }
    return defaultLocale;
}

/**
 * @description 生成Message资源对象
 * @param {*} langs 
 * @param {*} prefix 
 * @returns 
 */
export function genMessage(langs, prefix = 'lang') {
    const obj = {};
    Object.keys(langs).map((key) => {
        const mod = langs[key].default;
        let k = key.replace(`./${prefix}/`, '').replace(/^\.\//, '');
        const lastIndex = k.lastIndexOf('.');
        k = k.substring(0, lastIndex);
        const keyList = k.split('/');
        const lang = keyList.shift();
        const objKey = keyList.join('.');
        if (lang) {
            set(obj, lang, obj[lang] || {});
            set(obj[lang], objKey, mod);
        }
    });

    return obj;
}


//获取默认的locale
const defaultLocale = getDefaultLocale();

const i18n = createI18n({
    locale: defaultLocale, // 默认语言
    legacy: false, // composition API
    silentTranslationWarn: true,
    messages: {
        'zh': zhCN,
        'en': enUS
    }
});

export default i18n;