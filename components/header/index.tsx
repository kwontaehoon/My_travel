import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import Test from '@/components/test'
import { ThemedText } from '../ThemedText'
import { StyleSheet } from 'react-native'
import { TabBarIcon } from '../navigation/TabBarIcon'

const index = () => {
  return (
    <ThemedView style={styles.container}>   
        <TabBarIcon name='balloon' size={24} />
        <TabBarIcon name='settings' size={24} />
    </ThemedView>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 8,
        paddingRight: 5
    },
  });

export default index