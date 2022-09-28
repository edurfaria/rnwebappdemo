import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Index from "../../views/Index";

const MyDrawer = createDrawerNavigator();

const Drawer = () => {
    return (
        <MyDrawer.Navigator
            initialRouteName={"APP"}
            screenOptions={{
                headerTitle: "rnDespesas",
                drawerType: 'slide',
                unmountOnBlur: true,
                headerStyle: {
                    //backgroundColor: '#f4511e',

                },
                //headerTintColor: "#fff",
                headerTitleStyle: {
                    //fontFamily: Fonts.family.inter.regular,
                },


            }}>
            <MyDrawer.Screen name={"APP"} component={Index} />

        </MyDrawer.Navigator>
    )
}

export default Drawer