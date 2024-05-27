import React from 'react'
import { ThemedView } from '../ThemedView'
import { ThemedText } from '../ThemedText'
import { StyleSheet } from 'react-native'
import PagerView from 'react-native-pager-view'

const index = () => {
  return (
    <ThemedView>
        <PagerView style={styles.container} initialPage={0}>
        <ThemedView style={styles.page} key="1">
          <ThemedText>First page</ThemedText>
          <ThemedText>Swipe ➡️</ThemedText>
        </ThemedView>
        <ThemedView style={styles.page} key="2">
          <ThemedText>Second page</ThemedText>
        </ThemedView>
        <ThemedView style={styles.page} key="3">
          <ThemedText>Third page</ThemedText>
        </ThemedView>
      </PagerView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
    },
    page: {
        borderWidth: 1
    }
  });

export default index