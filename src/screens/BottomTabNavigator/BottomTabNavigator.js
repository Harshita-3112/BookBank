import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Category from './Category/Category'
import Cart from './Cart/Cart'
import Profile from './Profile/Profile'
import Home from '../Home/Home'

const BottomTabNavigator = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Category' component={Category} />
            <Tab.Screen name='Cart' component={Cart} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})