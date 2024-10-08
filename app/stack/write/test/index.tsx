import React, { useState, useEffect } from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedTouchView } from '@/components/ThemedTouchView'
import { StyleSheet, TextInput, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { TourProps } from './type';
import { useImagePicker } from '@/hooks/useImagePicker'


const index = ({allData, setAllData, imageArr, setImageArr}) => {

  const [tour, setTour] = useState<TourProps[]>([{ // 관광지 이름
    id: 0,
    content: ''
  }]);

  let { image, pickImage } = useImagePicker();

  console.log('imageArr: ', imageArr);

  useEffect(() => {
    if(image){
      setImageArr([...imageArr, image]);
    }
  }, [image]);

  const tourFunc = (e: string) => {
    setAllData({...allData, tour: e});
  }
  
  const imgDeleteFunc = (number:number) => {
    const deletedArr = imageArr.filter((_:object, index:number) => index !== number);
    setImageArr(deletedArr);
  }

  return (
    <FlatList data={[0]}
      renderItem={({ item }) =>
        <ThemedView style={styles.container}>
          <ThemedView style={styles.tour}>
            <ThemedText>관광지를 입력해주세요(최대 10개)</ThemedText>
            {tour.map(x => {
              return (
                <TextInput 
                  key={x.id} 
                  style={styles.textInput} 
                  onChangeText={(e)=>tourFunc(e)} />
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
          <ThemedView style={styles.img}>
            <ThemedText style={styles.imgText}>이미지를 첨부해주세요(최대 10개)</ThemedText>
            <ScrollView horizontal style={styles.imgSelect} showsHorizontalScrollIndicator={false}>
              {imageArr.map((x, index) => {
                return (
                  <ThemedView key={x.fileName}>
                    <TabBarIcon name="close"  color='black' size={15} style={styles.imgCancel} onPress={()=>imgDeleteFunc(index)} />
                    <Image key={index} style={styles.imgContent}  source={{ uri: x.uri }} />
                  </ThemedView>
                )
              })}
              <ThemedTouchView style={styles.imgContent} onPress={pickImage}></ThemedTouchView>
            </ScrollView>
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
    padding: 5,
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
    height: 100,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 5
  },
  imgCancel: {
    position: 'absolute',
    top: 5,
    right: 10,
    zIndex: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    textAlign: 'center',
    verticalAlign: 'middle',
    borderRadius: 999
  }
});

export default index