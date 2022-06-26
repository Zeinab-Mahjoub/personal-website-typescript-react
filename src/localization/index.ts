import en_us from './en';
import fa_ir from './fa';


type LanguageType = 'fa' | 'en';
type DirectionType = 'rtl' | 'ltr';

export const lang: LanguageType = (localStorage.getItem('lang') as LanguageType) ?? "en";

export const direction: Record<LanguageType, DirectionType> = {
    fa: "rtl",
    en: "ltr"
}

export function getDirection(): DirectionType {
    return direction[lang];
}

const fonts: Record<LanguageType, string> = {
    fa: "IRANSans",
    en: "Nunito",
}

export function getFont() {
    return fonts[lang];
}

const translates: Record<LanguageType, Record<string, string>> = {
    en: en_us,
    fa: fa_ir
}

export function getTranslate() {
    return translates[lang];
}

export function changeLanguage(newLang: LanguageType) {
    if (newLang === lang) {
        return;
    }
    localStorage.setItem('lang', newLang);
    window.location.reload();
}