import React from "react";
import { createDrawerNavigator, useDrawerProgress } from '@react-navigation/drawer';

import Index from "../../views/Index";
import Colors from "../../theme/Colors";
import CustomDrawerContent from "./DrawerContent";
import { interpolate, useAnimatedStyle } from "react-native-reanimated";
import DrawerProgress from "../../config/DrawerProgress";

const MyDrawer = createDrawerNavigator();

const Drawer = () => {
    return (
        <MyDrawer.Navigator
            initialRouteName={"APP"}
            drawerContent={() => <CustomDrawerContent />}

            screenOptions={{
                headerTitle: "rnDespesas",
                drawerType: 'slide',
                overlayColor: 'transparent',
                headerStyle: {
                    backgroundColor: Colors.pallete.primary,
                },

                headerTintColor: Colors.text.header,
                headerTitleStyle: {
                    color: Colors.text.header,
                },
                
            }}>
            <MyDrawer.Screen name={"APP"} component={Index} />

        </MyDrawer.Navigator>
    )
}

export default Drawer