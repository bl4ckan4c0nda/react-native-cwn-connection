import * as Font from "expo-font"

// fonts preloading
export const fontAssets = [
    {
        iranyekan_black: require('../assets/fonts/IRANYekan/IRANYekanWebBlack.ttf'),
    },
    {
        iranyekan_bold: require('../assets/fonts/IRANYekan/IRANYekanWebBold.ttf'),
    },
    {
        iranyekan_extraBlack: require('../assets/fonts/IRANYekan/IRANYekanWebExtraBlack.ttf'),
    },
    {
        iranyekan_extraBold: require('../assets/fonts/IRANYekan/IRANYekanWebExtraBold.ttf'),
    },
    {
        iranyekan_light: require('../assets/fonts/IRANYekan/IRANYekanWebLight.ttf'),
    },
    {
        iranyekan_medium: require('../assets/fonts/IRANYekan/IRANYekanWebMedium.ttf'),
    },
    {
        iranyekan_regular: require('../assets/fonts/IRANYekan/IRANYekanWebRegular.ttf'),
    },
    {
        iranyekan_thin: require('../assets/fonts/IRANYekan/IRANYekanWebThin.ttf'),
    },
].map((x) => Font.loadAsync(x))

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

};
export const FONTS = {
    h1: { fontFamily: "iranyekan_black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "iranyekan_bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "iranyekan_bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "iranyekan_bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "iranyekan_regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "iranyekan_regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "iranyekan_regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "iranyekan_regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "iranyekan_regular", fontSize: SIZES.body5, lineHeight: 22 },
};

export default FONTS