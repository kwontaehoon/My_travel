import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import Course from '@/components/course'
import { StatusBar } from 'expo-status-bar'

const course = () => {
  return (
    <ThemedView>
        <StatusBar />
        <Course />
    </ThemedView>
  )
}

export default course