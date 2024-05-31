import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { StyleSheet, TextInput } from 'react-native'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'

const index = () => {
    return (
        <ThemedView style={styles.container}>
            <TextInput style={styles.textInput} />
            <ThemedView style={styles.searchIcon}>
                <TabBarIcon name='search' size={20} />
            </ThemedView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    textInput: {
        flex: 1,
        borderRadius: 8,
        backgroundColor: '#E9EBED',
        padding: 8,
        height: 40,
        elevation: 3
    },
    searchIcon: {
        marginLeft: 20,
        borderRadius: 8,
        padding: 8,
        backgroundColor: '#E9EBED',
        height: 40,
        elevation: 3
    }
});

export default index