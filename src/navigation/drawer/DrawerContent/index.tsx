import React from 'react';
import { StyleSheet, View } from 'react-native'
import Animated from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../../theme/Styles';

interface ICustomDrawerContentProps {
}

const CustomDrawerContent: React.FunctionComponent<ICustomDrawerContentProps> = (props) => {
    return (
        <SafeAreaView style={globalStyles.CustomDrawerContent}>
            <View style={{ borderWidth: 1, borderStyle: 'dotted' }} />

        </SafeAreaView>
    )
};



export default CustomDrawerContent;