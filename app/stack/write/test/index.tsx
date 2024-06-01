import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { StyleSheet, TextInput } from 'react-native'

const index = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.tour}>
        <ThemedText>관광지를 입력해주세요</ThemedText>
        <TextInput style={styles.textInput}/>
      </ThemedView>
      <ThemedView style={styles.store}>
        <ThemedText>맛집을 입력해주세요</ThemedText>
        <TextInput style={styles.textInput}/>
      </ThemedView>
      <ThemedView style={styles.transport}>
        <ThemedText style={styles.transportText}>이동수단을 선택해주세요</ThemedText>
        <ThemedView style={styles.transportSelect}>
          <ThemedView style={styles.transportContent}>
            <ThemedText>대중교통</ThemedText>
          </ThemedView>
          <ThemedView style={styles.transportContent}>
            <ThemedText>자량</ThemedText>
          </ThemedView>
          <ThemedView style={styles.transportContent}>
            <ThemedText>도보</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.img}>
        <ThemedText style={styles.imgText}>이미지를 첨부해주세요</ThemedText>
        <ThemedView style={styles.imgSelect}>
          <ThemedText style={styles.imgContent}></ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      margin: 20
  },
  tour: {
    marginBottom: 20
  },
  textInput: {
    borderBottomWidth: 1,
    marginTop: 8,
  },
  store: {
    marginBottom: 20
  },
  transport: {
    marginBottom: 20
  },
  transportText: {
    marginBottom: 8
  },
  transportSelect: {
    flexDirection: 'row'
  },
  transportContent: {
    borderWidth: 1,
    flex: 1,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {

  },
  imgText: {
    marginBottom: 8
  },
  imgSelect: {
    flexDirection: 'row',
  },
  imgContent: {
    borderWidth: 1,
    width: 100,
    height: 100
  }
});

export default index