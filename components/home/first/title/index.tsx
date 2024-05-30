import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { StyleSheet } from 'react-native'

const test2 = () => {
  return (
    <ThemedView style={styles.container}>
        <ThemedText type='title'>Discover</ThemedText>
        <ThemedText type='title'>new travel!</ThemedText>
      </ThemedView>
  )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    }
  });

export default test2