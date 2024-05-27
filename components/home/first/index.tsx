import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

const index = () => {
  return (
    <ThemedView style={{ borderWidth: 1, flex: 1 }}>
        <ThemedView style={styles.banner}>
            <ThemedText>배너</ThemedText>
        </ThemedView>
        <ThemedText>first</ThemedText>
        <Link href="test">123</Link>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
    },
    banner: {
        borderWidth: 2,
        height: 150
    }
  });

export default index