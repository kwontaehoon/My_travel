import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { StyleSheet } from 'react-native'

const index = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleBox}>
        <ThemedText style={styles.title} type='subtitle'>추천 여행</ThemedText>
        <ThemedText style={styles.more}>더보기</ThemedText>
      </ThemedView>
      <ThemedView style={styles.contentBox}>
        <ThemedView style={styles.content}></ThemedView>
        <ThemedView style={styles.content}></ThemedView>
        <ThemedView style={styles.content}></ThemedView>
        <ThemedView style={styles.content}></ThemedView>
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  titleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  title: {
    flex: 1
  },
  more: {
  },
  contentBox: {
    flexDirection: 'row',
    gap: 8
  },
  content: {
    borderWidth: 1,
    flex: 1,
    height: 80,
    borderRadius: 8
  }

});

export default index