import { createI18n } from 'vue-i18n';
import en from '../locale/en.json';
import bn from '../locale/bn.json';


const i18n = createI18n({
    legacy: false,
    locale: 'English',
    fallbackLocale: 'English',
    messages: {
        "English": en,
        "বাংলা": bn,
    },
});

console.log(i18n)

export default i18n;