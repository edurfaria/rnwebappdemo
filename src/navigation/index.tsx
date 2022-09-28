import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Drawer from './drawer';

interface INavConteiner {
    callback?: () => void,
}
export const NavContainer: React.FunctionComponent<INavConteiner> = (props) => {

    return (
        <SafeAreaProvider>
            <NavigationContainer onReady={props.callback}>
                <Drawer />
            </NavigationContainer>
        </SafeAreaProvider>
    )
}