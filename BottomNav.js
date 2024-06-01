import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Chats from './Chats'
import Updates from './Updates'
import Communities from './Communities'
import Calls from './Calls'


const bottomNav = createBottomTabNavigator()

const BottomNav = () => {
    return (
            <bottomNav.Navigator>


                <bottomNav.Screen name='Chats' component={Chats} options={{
                    headerShown: false,
                    
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Image style={{ height: 24, width: 24, tintColor : tabInfo.focused ? "green" : "black" }} source={{ uri: "https://cdn-icons-png.flaticon.com/128/2769/2769104.png" }} />
                        )
                    }
                }} />

                <bottomNav.Screen name='Updates' component={Updates} options={{
                    headerShown: false,

                    tabBarIcon: (tabInfo) => {
                        return (
                            <Image style={{ height: 24, width: 24, tintColor : tabInfo.focused ? "green" : "black" }} source={{ uri: "https://cdn-icons-png.flaticon.com/128/2546/2546743.png" }} />
                        )
                    }
                }} />

                <bottomNav.Screen name='Communities' component={Communities} options={{
                    headerShown: false,

                    tabBarIcon: (tabInfo) => {
                        return (
                            <Image style={{ height: 24, width: 24, tintColor : tabInfo.focused ? "green" : "black" }} source={{ uri: "https://cdn-icons-png.flaticon.com/128/8270/8270973.png" }} />
                        )
                    }
                }} />

                <bottomNav.Screen name='Calls' component={Calls} options={{
                    headerShown: false,
                    
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Image style={{ height: 24, width: 24 , tintColor : tabInfo.focused ? "green" : "black"}} source={{ uri: "https://cdn-icons-png.flaticon.com/128/159/159832.png" }} />
                        )
                    }
                }} />

            </bottomNav.Navigator>


    )
}

export default BottomNav

const styles = StyleSheet.create({})