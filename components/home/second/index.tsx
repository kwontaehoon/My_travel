import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { Link } from 'expo-router'

const index = () => {
  return (
    <ThemedView>
        <ThemedText>second</ThemedText>
        <Link href="settings">123</Link>
    </ThemedView>
  )
}

export default index