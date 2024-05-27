import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import Home from '@/components/home'
import { ThemedText } from '@/components/ThemedText'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Image, Platform } from 'react-native';
import Header from '@/components/header'

const index = () => {

    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor="#62dd"
            />
            <Header />
            <Home />
        </SafeAreaView>
    )
}

export default index
