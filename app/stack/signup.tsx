import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { StyleSheet, TextInput } from 'react-native'

const login = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.title}>
                <ThemedText type='title'>휴대폰 인증</ThemedText>
            </ThemedView>
            <ThemedView style={styles.content}>
                <ThemedText>원활한 서비스 제공을 위해, 휴대폰 번호를 입력해주세요.</ThemedText>
            </ThemedView>
            <ThemedView style={styles.number}>
                <TextInput style={styles.textInput} />
            </ThemedView>
            <ThemedView style={styles.submit}>
                <ThemedText>인증번호 전송</ThemedText>
            </ThemedView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        padding: 20,
        paddingTop: 40,
    },
    title: {
        marginBottom: 12
    },
    content: {
        marginBottom: 12
    },
    number: {
        flex: 1,
    },
    textInput: {
        borderBottomWidth: 1,
    },
    submit: {
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40
    }
});

export default login