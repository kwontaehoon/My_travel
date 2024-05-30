import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import Test from '@/components/test'
import { ThemedText } from '../ThemedText'
import { StyleSheet } from 'react-native'
import { TabBarIcon } from '../navigation/TabBarIcon'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

const index = () => {
  return (
    <ThemedView style={styles.container}>   
        <Link href='stack/alarm'><TabBarIcon name='balloon' size={24} /></Link>
        <Link href='stack/settings'><TabBarIcon name='settings' size={24} /></Link>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 12,
        padding: 12,
    },
  });

export default index