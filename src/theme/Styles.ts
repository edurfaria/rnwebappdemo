import { StyleSheet } from 'react-native'
import Colors from './Colors'
import Fonts from './Fonts'

export const globalStyles = StyleSheet.create({
    CustomDrawerContent: {
        flex: 1,
        backgroundColor: Colors.pallete.primary,
    },
    InputLabel: {
        color: '#37424d',
        fontFamily: Fonts.family.opensans[400],
        fontSize: 16,
        marginVertical: 4,
    },
    InputTextInput: {
        fontFamily: Fonts.family.opensans[400],
        fontSize: 16,
        borderWidth: 1,
        paddingHorizontal: 6,
        paddingVertical: 8,
        borderColor: '#d4d7db',
    }
})