import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { StyleSheet, TextInput } from 'react-native'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'

const index = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText>banner</ThemedText>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        borderWidth: 1,
        height: 120,
        borderRadius: 8
    }
});

export default index