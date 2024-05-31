import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import Course from '@/components/course'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

const course = () => {
  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor="#FFFFFF"
      />
      <Course />
    </SafeAreaView>
  )
}

export default course