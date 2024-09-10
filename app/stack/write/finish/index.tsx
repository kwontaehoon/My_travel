import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import React from 'react'
import { StyleSheet } from 'react-native'

const index = ({allData}): object[] => {

    console.log('finish allData: ', allData);

  return (
    <ThemedView style={styles.container}>
        <ThemedText>확인</ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
});

export default index