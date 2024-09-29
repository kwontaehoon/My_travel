import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import React from 'react'
import { StyleSheet, FlatList, Image } from 'react-native'

const index = ({ allData, setAllData }) => {

  console.log('finish allData: ', allData?.image);

  return (
    <FlatList data={[0]}
      renderItem={({ item }) =>
        <ThemedView style={styles.container}>
          <ThemedText style={styles.title}>확인</ThemedText>

          <ThemedView style={styles.row}>
            <ThemedText style={styles.subTitLe}>이동수단: </ThemedText>
            <ThemedText>{allData?.transport}</ThemedText>
          </ThemedView>
          <ThemedView style={styles.row}>
            <ThemedText style={styles.subTitLe}>달력: </ThemedText>
            <ThemedText>{allData?.days}</ThemedText>
          </ThemedView>
          <ThemedView style={styles.row}>
            <ThemedText style={styles.subTitLe}>나라: </ThemedText>
            <ThemedText>{allData?.country}</ThemedText>
          </ThemedView>
          <ThemedView style={styles.row}>
            <ThemedText style={styles.subTitLe}>지역: </ThemedText>
            <ThemedText>{allData?.location}</ThemedText>
          </ThemedView>
          <ThemedView style={styles.row}>
            <ThemedText style={styles.subTitLe}>관광지: </ThemedText>
            <ThemedText>{allData?.tour}</ThemedText>
          </ThemedView>
          {allData?.image?.map((x: object, index: number) => {
            return (
              <Image key={index} style={styles.imgContent} source={{ uri: x.uri }} />
            )
          })}
        </ThemedView>
      }>

    </FlatList>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  title: {
    fontSize: 20
  },
  row: {
    flexDirection: 'row'
  },
  subTitLe: {
    marginRight: 10
  },
  imgContent: {
    borderWidth: 1,
    width: 100,
    height: 100,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 5
  },
});

export default index