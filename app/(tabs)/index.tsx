import React, { useEffect } from 'react'
import { ThemedView } from '@/components/ThemedView'
import Home from '@/components/home'
import { ThemedText } from '@/components/ThemedText'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {

    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor="#FFFFFF"
            />
            <Home />
        </SafeAreaView>
    )
}

export default index
