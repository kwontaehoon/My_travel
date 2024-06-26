import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

const login = () => {

    const navigate = useRouter();

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.title}>
                <ThemedText type='title'>My Travel</ThemedText>
            </ThemedView>
            <ThemedView style={styles.login}>
                <ThemedText>kakao</ThemedText>
            </ThemedView>
            <ThemedView style={styles.login}>
                <ThemedText>naver</ThemedText>
            </ThemedView>
            <ThemedView style={styles.login}>
                <ThemedText>google</ThemedText>
            </ThemedView>
            <ThemedView style={styles.login}>
                <ThemedText>이메일로 시작하기</ThemedText>
            </ThemedView>
            <ThemedView style={styles.signup}>
                <ThemedText style={styles.signupText} onPress={()=>navigate.navigate('stack/signup')}>회원가입</ThemedText>
            </ThemedView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        alignItems: 'center',
        padding: 20,
        paddingTop: 140
    },
    title: {
        marginBottom: 20
    },
    login: {
        borderWidth: 1,
        width: '100%',
        height: 40,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    signup: {
        marginTop: 20
    },
    signupText: {
        fontSize: 14
    }
});

export default login