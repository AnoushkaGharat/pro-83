import React from "react"
import {createDrawerNavigator} from "@react-navigation/drawer"
import TabNavigator from "./TabNavigator"
import Profile from "../screens/Profile"

const Drawer = createDrawerNavigator()

const DrawerNavigator =()=> {
    return(
<Drawer.Navigator>
<Drawer.screen name="Home" component={TabNavigator}/>
<Drawer.screen name="profile" component={Profile}/>

</Drawer.Navigator>

    )
}
export default DrawerNavigator;