import React, { useState } from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedTouchView } from '@/components/ThemedTouchView'
import { StyleSheet, TextInput, TouchableOpacity, FlatList, Touchable } from 'react-native'
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { TourProps } from './type';
import { transportText } from '@/constants/text/Transport';
import { checkBbox } from '@/funtion/checkBox'
import { useImagePicker } from '@/hooks/useImagePicker'


const index = () => {

  const [tour, setTour] = useState<TourProps[]>([{ // 관광지 이름
    id: 0,
    content: ''
  }]);

  const [transport, setTransport] = useState<boolean[]>(Array(3).fill(false)); // 대중교통 select

  const { image, pickImage } = useImagePicker();
  console.log('image: ', image);

  return (
    <FlatList data={[0]}
      renderItem={({ item }) =>
        <ThemedView style={styles.container}>
          <ThemedView style={styles.tour}>
            <ThemedText>관광지를 입력해주세요(최대 10개)</ThemedText>
            {tour.map(x => {
              return (
                <TextInput key={x.id} style={styles.textInput} />
              )
            })}
            <ThemedView style={styles.plus}>
              <TouchableOpacity
                onPress={() => {
                  tour.length > 10 ? '' : setTour([...tour, { id: tour.length, content: '' }]);
                }}>
                <TabBarIcon name="add-circle" size={25} style={{ marginTop: 10., marginBottom: 10 }} />
              </TouchableOpacity>
            </ThemedView>
          </ThemedView>
          <ThemedView style={styles.transport}>
            <ThemedText style={styles.transportText}>이동수단을 선택해주세요</ThemedText>
            <ThemedView style={styles.transportSelect}>
              {transportText.map((x, index) => {
                return (
                  <ThemedTouchView
                    activeOpacity={1}
                    onPress={() => checkBbox(transport, setTransport, index, false)}
                    key={x.id}
                    style={[styles.transportContent, { backgroundColor: transport[index] ? 'yellowgreen' : 'white'  }]}>
                    <ThemedText>{x.transport}</ThemedText>
                  </ThemedTouchView>
                )
              })}
            </ThemedView>
          </ThemedView>
          <ThemedView style={styles.img}>
            <ThemedText style={styles.imgText}>이미지를 첨부해주세요(최대 10개)</ThemedText>
            <ThemedView style={styles.imgSelect}>
              <ThemedTouchView style={styles.imgContent} onPress={pickImage}></ThemedTouchView>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      }>

    </FlatList>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  tour: {
    marginBottom: 20
  },
  textInput: {
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    padding: 3,
  },
  plus: {
    alignItems: 'center'
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