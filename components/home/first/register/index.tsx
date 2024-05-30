import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { StyleSheet, TextInput } from 'react-native'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'

const index = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.title}>
                <ThemedText type='subtitle'>여행지를 알려주세요!</ThemedText>
            </ThemedView>
            <ThemedView style={styles.content}>
                <ThemedText>여러분의 소중한 여행지를 등록해주세요.</ThemedText>
                <ThemedText>코스와 함께 등록할 수 있습니다.</ThemedText>
                <ThemedView style={styles.registerButton}>
                    <ThemedText>등록하기</ThemedText>
                </ThemedView>
            </ThemedView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        marginBottom: 12
    },
    content: {

    },
    registerButton: {
        borderWidth: 1,
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12
    }
});

export default index