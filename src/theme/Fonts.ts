const localFonts = {
    //OpenSans
    "OpenSans-ExtraBold": require('../../assets/fonts/OpenSans/OpenSans-ExtraBold.ttf'),
    "OpenSans-Bold": require('../../assets/fonts/OpenSans/OpenSans-Bold.ttf'),
    "OpenSans-SemiBold": require('../../assets/fonts/OpenSans/OpenSans-SemiBold.ttf'),
    "OpenSans-Medium": require('../../assets/fonts/OpenSans/OpenSans-Medium.ttf'),
    "OpenSans-Regular": require('../../assets/fonts/OpenSans/OpenSans-Regular.ttf'),
    "OpenSans-Light": require('../../assets/fonts/OpenSans/OpenSans-Light.ttf'),
}

const family = {
    opensans: {
        800: "OpenSans-ExtraBold",
        700: "OpenSans-Bold",
        600: "OpenSans-SemiBold",
        500: "OpenSans-Medium",
        400: "OpenSans-Regular",
        300: "OpenSans-Light",
    },
};

const Fonts = { localFonts, family };

export default Fonts;