import { Asset } from 'expo-asset'


const images = {
    wave_pattern_gr: require("../assets/images/patterns/wave-pattern-gradient.png"),
    crown: require("../assets/images/icons/crown.png")
}

// image preloading
export const imageAssets = Object.keys(images).map((key) => Asset.fromModule(images[key]).downloadAsync())

export default images